import Header from "./header";
import replaceAllInserter from "string.prototype.replaceall";
import Swal from "sweetalert2";

replaceAllInserter.shim();

/**
 * Definition of the post class.
 */
class Text {
  constructor(day, date, quote, source, reflexion, author, description, preayer, link) {
    this.day = day; // the name of day celebration
    this.date = date; // the simply date
    this.quote = quote; // quote from Bible
    this.source = source; // quote source
    this.reflexion = reflexion;
    this.author = author;
    this.description = description;
    this.preayer = preayer;
    this.link = link; // link for song (options)
  }
}

/**
 * Save data from simply form into the json file.
 */
function saveData() {
  const day = document.getElementById("fday").value;
  const date = document.getElementById("fdate").value;
  const quote = document.getElementById("fquote").value;
  const source = document.getElementById("fsource").value;
  const reflexion = document.getElementById("freflexion").value;
  const author = document.getElementById("fauthor").value;
  const description = document.getElementById("fdescription").value;
  const preayer = document.getElementById("fpreayer").value;
  const link = document.getElementById("flink").value;

  if (day !== "" && date !== "" && quote !== "" && source !== ""
    && reflexion !== "" && author !== "" && description !== "" && preayer !== "") {
    const text = new Text(day, date, quote, source, reflexion, author, description, preayer, link);
    console.log(date);
    downloadObjectAsJson(text, date);
  } else {
    Swal.fire({
      title: "Chyba!",
      text: "Nevyplnil jsi všechny povinné položky!",
      icon: "error",
      confirmButtonColor: "#0078D4",
    });
  }
}

/**
 * Download data as a JSON.
 * @param {*} exportObj
 * @param {*} exportName
 */
function downloadObjectAsJson(exportObj, exportName) {
  const dataStr =
    "data:text/json;charset=utf-8," +
    encodeURIComponent(JSON.stringify(exportObj));
  const downloadAnchorNode = document.createElement("a");
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", exportName + ".json");
  document.body.appendChild(downloadAnchorNode); // required for Firefox
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}

export default function FormLayout() {

  return (
    <div>
      <Header />
      <h2 className="text-3xl mb-3 leading-snug">Základní informace</h2>
      <div className="mb-4">
        <label>Název dne</label>
        <input
          for="grid-first-name"
          type="text"
          id="fday"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></input>
      </div>
      <div className="mb-4">
        <label>Datum</label>
        <input
          for="grid-first-name"
          type="date"
          id="fdate"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></input>
      </div>

      <h2 className="text-3xl mb-3 leading-snug">Texty</h2>

      <div className="mb-4">
        <label>
          Úryvek z Bible
        </label>
        <textarea
          rows="10"
          id="fquote"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-y border rounded-md"
        ></textarea>
      </div>
      <div className="mb-4">
        <label>Adresa v Bibli</label>
        <input
          for="grid-first-name"
          type="text"
          id="fsource"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></input>
      </div>

      <div className="mb-4">
        <label>
          Zamyšlení
        </label>
        <textarea
          rows="10"
          id="freflexion"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-y border rounded-md"
        ></textarea>
      </div>
      <div className="mb-4">
        <label>Jméno autora</label>
        <input
          for="grid-first-name"
          type="text"
          id="fauthor"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></input>
      </div>
      <div className="mb-4">
        <label>
          Pár slov o autorovi
        </label>
        <textarea
          rows="5"
          id="fdescription"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-y border rounded-md"
        ></textarea>
      </div>

      <div className="mb-4">
        <label>
          Modlitba
        </label>
        <textarea
          rows="5"
          id="fpreayer"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-y border rounded-md"
        ></textarea>
      </div>
      <h2 className="text-3xl mb-3 leading-snug">Jiné</h2>
      <div className="mb-4">
        <label>
          Odkaz na písničku
        </label>
        <input
          for="grid-first-name"
          type="link"
          id="flink"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></input>
      </div>
      <button
        onClick={() => saveData()}
        className="bg-[#0078D4] hover:bg-[#004377] duration-200	text-white font-bold py-2 px-4 rounded"
      >
        Stáhnout JSON
      </button>
    </div>
  );
}
