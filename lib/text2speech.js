import * as sdk from "microsoft-cognitiveservices-speech-sdk";

function synthesizeSpeech(filename) {
    const speechConfig = sdk.SpeechConfig.fromSubscription("<paste-your-speech-key-here>", "<paste-your-speech-location/region-here>");

    // config voice options
    speechConfig.speechSynthesisLanguage = "cs-CZ";
    speechConfig.speechSynthesisVoiceName = "cs-CZ-AntoninNeural";

    const audioConfig = sdk.AudioConfig.fromAudioFileOutput(filename);

    const synthesizer = new SpeechSynthesizer(speechConfig, audioConfig);
    synthesizer.speakTextAsync(
        "A simple test to write to a file.",
        result => {
            synthesizer.close();
            if (result) {
                // return result as stream
                return fs.createReadStream(filename);
            }
        },
        error => {
            console.log(error);
            synthesizer.close();
        });
}