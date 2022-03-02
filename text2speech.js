const sdk = require("microsoft-cognitiveservices-speech-sdk");

module.exports.text2speech = () => {
    console.log('hi');
    // Json2Audio();

    function SynthesizeSpeech(text, filename, SPEECH_KEY, LOCATION_REGION) {
        const speechConfig = sdk.SpeechConfig.fromSubscription(SPEECH_KEY, LOCATION_REGION);

        // config voice options
        speechConfig.speechSynthesisLanguage = "cs-CZ";
        speechConfig.speechSynthesisVoiceName = "cs-CZ-AntoninNeural";

        // Set the output format
        speechConfig.speechSynthesisOutputFormat = 21;

        const audioConfig = sdk.AudioConfig.fromAudioFileOutput(filename);

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