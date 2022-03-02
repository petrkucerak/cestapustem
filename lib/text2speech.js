import * as sdk from "microsoft-cognitiveservices-speech-sdk";

function synthesizeSpeech(text, filename, SPEECH_KEY, LOCATION_REGION) {
    const speechConfig = sdk.SpeechConfig.fromSubscription(SPEECH_KEY, LOCATION_REGION);

    // config voice options
    speechConfig.speechSynthesisLanguage = "cs-CZ";
    speechConfig.speechSynthesisVoiceName = "cs-CZ-AntoninNeural";

    // Set the output format
    speechConfig.speechSynthesisOutputFormat = SpeechSynthesisOutputFormat.Audio48Khz96KBitRateMonoMp3;

    const audioConfig = sdk.AudioConfig.fromAudioFileOutput(filename);

    const synthesizer = new SpeechSynthesizer(speechConfig, audioConfig);
    synthesizer.speakTextAsync(
        text,
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