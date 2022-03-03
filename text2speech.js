const sdk = require("microsoft-cognitiveservices-speech-sdk");
const fs = require("fs");

module.exports.text2speech = () => {

    // process variables
    const argv = process.argv;
    if(argv[1] === "" || argv[2] === ""){
        console.error("ERROR: Set up SPEECH_KEY and LOCATION_REGION!");
        return;
    }
    allJsons(argv[1], argv[2]);

    function allJsons(SPEECH_KEY, LOCATION_REGION) {
        fs.readdir("_days/", (err, filenames) => {
            if (err) {
                onerror(err);
                return;
            }
            filenames.forEach((filename) => {
                fs.readFile(`_days/${filename}`, "utf-8", (err, content) => {
                    if (err) {
                        onerror(err);
                        return;
                    }
                    let contentJSON = JSON.parse(content);
                    let text = `Vítej u dnešního zamyšlení na Tvé cestě Půstem!\nDnes je ${contentJSON.day} a autorem zamyšlení je ${contentJSON.author}.\n\nÚryvek z Bible\n${contentJSON.quote}\n\nZamyšlení\n${contentJSON.reflexion}\n\nDnešní sekce z Christus Vivit\n${contentJSON.vivit}\n\nZávěrečná modlitba\n${contentJSON.preayer}`;
                    // console.log(text);
                    SynthesizeSpeech(text, contentJSON.slug, SPEECH_KEY, LOCATION_REGION);
                });
            });
        });
    }

    function SynthesizeSpeech(text, filename, SPEECH_KEY, LOCATION_REGION) {
        const speechConfig = sdk.SpeechConfig.fromSubscription(SPEECH_KEY, LOCATION_REGION);

        // config voice options
        speechConfig.speechSynthesisLanguage = "cs-CZ";
        speechConfig.speechSynthesisVoiceName = "cs-CZ-AntoninNeural";

        // Set the output format
        speechConfig.speechSynthesisOutputFormat = 21;

        const audioConfig = sdk.AudioConfig.fromAudioFileOutput(`public/audio/${filename}.mp3`);

        const synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);
        synthesizer.speakTextAsync(
            text,
            result => {
                synthesizer.close();
                if (result) {
                    // return result as stream
                    return fs.createReadStream(`public/audio/${filename}.mp3`);
                }
            },
            error => {
                console.log(error);
                synthesizer.close();
            });
    }
};