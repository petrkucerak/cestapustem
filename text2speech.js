const sdk = require("microsoft-cognitiveservices-speech-sdk");
const fs = require("fs");
const { Buffer } = require("buffer");
const { PassThrough } = require("stream");
const { argv } = require("node:process");

// config start day
let id = 45;

// handle arguments
if (argv[2] === "" || argv[3] === "") {
  console.error("ERROR: Set up SPEECH_KEY and LOCATION_REGION!");
  return 1;
}
const input = {
  speech_key: argv[2],
  speech_region: argv[3],
  day: argv[4],
};
console.log(input);

async function synthesizeSpeech(SPEECH_KEY, SPEECH_REGION, ssml, filename) {
  const speechConfig = sdk.SpeechConfig.fromSubscription(
    SPEECH_KEY,
    SPEECH_REGION
  );

  // Set the output format
  speechConfig.speechSynthesisOutputFormat = 7; //https://learn.microsoft.com/en-us/javascript/api/microsoft-cognitiveservices-speech-sdk/speechsynthesisoutputformat?view=azure-node-latest
  const audioConfig = sdk.AudioConfig.fromAudioFileOutput(
    `public/audio/${filename}.mp3`
  );

  const synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);

  // The event synthesis completed signals that the synthesis is completed.
  synthesizer.synthesisCompleted = function (s, e) {
    console.log(
      "(synthesized)  Reason: " +
        sdk.ResultReason[e.result.reason] +
        " Audio length: " +
        e.result.audioData.byteLength
    );
    id += 1;
    if (id < 47) main(id);
  };

  // The synthesis started event signals that the synthesis is started.
  synthesizer.synthesisStarted = function (s, e) {
    console.log("(synthesis started)");
  };

  // The event signals that the service has stopped processing speech.
  // This can happen when an error is encountered.
  synthesizer.SynthesisCanceled = function (s, e) {
    var cancellationDetails = sdk.CancellationDetails.fromResult(e.result);
    var str =
      "(cancel) Reason: " + sdk.CancellationReason[cancellationDetails.reason];
    if (cancellationDetails.reason === sdk.CancellationReason.Error) {
      str += ": " + e.result.errorDetails;
    }
    console.log(str);
  };

  synthesizer.speakSsmlAsync(
    ssml,
    (result) => {
      // if (result.errorDetails) {
      //   console.error(result.errorDetails);
      // } else {
      //   console.log(JSON.stringify(result));
      // }
      synthesizer.close();
      if (result) {
        // return result as stream
        return fs.createReadStream(`public/audio/${filename}.mp3`);
      }

      return "OK";
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
    <prosody rate="-15%" pitch="-5%">Vítej u dnešního zamyšlení na Tvé cestě Půstem! Dnes je ${
      content.dayName
    } a autorem zamyšlení je ${content.author}.
      <break strength="weak" />
    </prosody>
    <audio src="https://github.com/petrkucerak/cestapustem/blob/main/_audio/01_cesta_pustem-intro.wav?raw=true" />
    <break strength="medium" />
  </voice>
  <voice name="cs-CZ-VlastaNeural">
    <prosody rate="-5%" pitch="-5%">Úryvek z Bible
      <break strength="medium" />${content.quote
        .replaceAll("&nbsp;", " ")
        .replaceAll("„", "")
        .replaceAll("“", "")
        .replaceAll("–", `<break strength="weak" />`)
        .replaceAll("»", "")
        .replaceAll("«", "")
        .replaceAll(";", "")}
    </prosody>
    <audio src="https://github.com/petrkucerak/cestapustem/blob/main/_audio/02_cesta_pustem-break1.wav?raw=true"/>
  </voice>
  <voice name="cs-CZ-AntoninNeural">
    <prosody rate="-15%" pitch="-5%">Zamyšlení
      <break strength="medium" />${content.reflexion
        .replaceAll("&nbsp;", " ")
        .replaceAll("„", "")
        .replaceAll("“", "")
        .replaceAll("–", `<break strength="weak" />`)
        .replaceAll("»", "")
        .replaceAll("«", "")
        .replaceAll(";", "")}
    </prosody>
    <audio src="https://github.com/petrkucerak/cestapustem/blob/main/_audio/03_cesta_pustem-break2.wav?raw=true"/>
  </voice>
  <voice name="cs-CZ-VlastaNeural">
    <prosody rate="-15%" pitch="-5%">Závěrečná modlitba
      <break strength="medium" />${content.preayer
        .replaceAll("&nbsp;", " ")
        .replaceAll("„", "")
        .replaceAll("“", "")
        .replaceAll("–", `<break strength="weak" />`)
        .replaceAll("»", "")
        .replaceAll("«", "")
        .replaceAll(";", "")} Amen.
    </prosody>
    <audio src="https://github.com/petrkucerak/cestapustem/blob/main/_audio/01_cesta_pustem-intro.wav?raw=true" />
  </voice>
</speak>`;
}

async function main(id) {
  console.log("~~~~~~~~ TEXT TO SPEECH ~~~~~~~~");
  const dir = fs.readdirSync("_days/");
  const content = fs.readFileSync(`_days/${dir[id]}`);
  const json = JSON.parse(content);
  const ssmlString = createSSML(json);
  console.log(`Start syntetization ${json.slug}.mp3`);
  await synthesizeSpeech(
    input.speech_key,
    input.speech_region,
    ssmlString,
    json.slug
  );
  console.log(`End syntetization ${json.slug}.mp3`);
}

main(id);
