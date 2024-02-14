const sdk = require("microsoft-cognitiveservices-speech-sdk");
const fs = require("fs");

module.exports.text2speech = () => {
  console.log("~~~~~~~~ TEXT TO SPEECH ~~~~~~~~");
  // process variables
  const argv = process.argv;
  if (argv[1] === "" || argv[2] === "") {
    console.error("ERROR: Set up SPEECH_KEY and LOCATION_REGION!");
    return 1;
  }

  const dir = fs.readdirSync("_days/");
  const content = fs.readFileSync(`_days/${dir[argv[3]]}`);
  const json = JSON.parse(content);
  const ssmlString = createSSML(json);
  console.log(`Start to synthetisize ${json.slug}.mp3`);
  synthesizeSpeech(argv[1], argv[2], ssmlString, json.slug);

  // dir.map((file) => {
  //   const content = fs.readFileSync(`_days/${file}`);
  //   const json = JSON.parse(content);
  //   const ssmlString = createSSML(json);
  //   // if (json.slug !== "2022-12-01") return; // for testing

  //   synthesizeSpeech(argv[1], argv[2], ssmlString, json.slug);
  // });
};

function synthesizeSpeech(SPEECH_KEY, SPEECH_REGION, ssml, filename) {
  const speechConfig = sdk.SpeechConfig.fromSubscription(
    SPEECH_KEY,
    SPEECH_REGION
  );

  // Set the output format
  speechConfig.speechSynthesisOutputFormat = 21;
  const audioConfig = sdk.AudioConfig.fromAudioFileOutput(
    `public/audio/${filename}.mp3`
  );

  const synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);

  synthesizer.speakSsmlAsync(
    ssml,
    (result) => {
      if (result.errorDetails) {
        console.error(result.errorDetails);
      } else {
        console.log(JSON.stringify(result));
      }

      synthesizer.close();
      if (result) {
        // return result as stream
        return fs.createReadStream(`public/audio/${filename}.mp3`);
      }
    },
    (error) => {
      console.log(error);
      synthesizer.close();
    }
  );
}

function createSSML(content) {
  return `<speak xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="http://www.w3.org/2001/mstts" xmlns:emo="http://www.w3.org/2009/10/emotionml" version="1.0" xml:lang="cs-CZ">
  <voice name="cs-CZ-AntoninNeural">
    <prosody rate="-15%" pitch="-5%">Vítej u dnešního zamyšlení na Tvé cestě Půstem! Dnes je ${content.dayName} a autorem zamyšlení je ${content.author}.
      <break strength="weak" />
    </prosody>
    <audio src="https://github.com/petrkucerak/adventnicesta/blob/main/_audio/01_adventni_cesta-intro.mp3?raw=true" />
    <break strength="medium" />
  </voice>
  <voice name="cs-CZ-VlastaNeural">
    <prosody rate="-5%" pitch="-5%">Úryvek z Bible
      <break strength="medium" />${content.quote.replaceAll("&nbsp;", " ")}
    </prosody>
    <audio src="https://github.com/petrkucerak/adventnicesta/blob/main/_audio/02_adventni_cesta-break1.mp3?raw=true"/>
  </voice>
  <voice name="cs-CZ-AntoninNeural">
    <prosody rate="-15%" pitch="-5%">Zamyšlení
      <break strength="medium" />${content.reflexion.replaceAll("&nbsp;", " ")}
    </prosody>
    <audio src="https://github.com/petrkucerak/adventnicesta/blob/main/_audio/03_adventni_cesta-break2.mp3?raw=true"/>
  </voice>
  <voice name="cs-CZ-VlastaNeural">
    <prosody rate="-15%" pitch="-5%">Závěrečná modlitba
      <break strength="medium" />${content.preayer.replaceAll("&nbsp;", " ")} Amen.
    </prosody>
    <audio src="https://github.com/petrkucerak/adventnicesta/blob/main/_audio/01_adventni_cesta-intro.mp3?raw=true" />
  </voice>
</speak>`;
}