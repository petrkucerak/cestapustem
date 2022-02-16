import Header from "./header";
import replaceAllInserter from "string.prototype.replaceall";
import Swal from "sweetalert2";

function newLineParsering(intput){
  return null
}

replaceAllInserter.shim();

/**
 * Definition of the post class.
 */
class Text {
  constructor(
    day,
    date,
    quote,
    source,
    reflexion,
    author,
    description,
    preayer,
    vivit
  ) {
    this.day = day; // the name of day celebration
    this.date = date; // the simply date
    this.quote = quote; // quote from Bible
    this.source = source; // quote source
    this.reflexion = reflexion;
    this.author = author;
    this.description = description;
    this.preayer = preayer;
    this.vivit = vivit; // Christus Vivit
    this.slug = date;
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
  const vivit = document.getElementById("fvivit").value;

  if (
    day !== "" &&
    date !== "" &&
    quote !== "" &&
    source !== "" &&
    reflexion !== "" &&
    author !== "" &&
    description !== "" &&
    preayer !== "" &&
    vivit !== ""
  ) {
    const text = new Text(
      day,
      date,
      quote,
      source,
      reflexion,
      author,
      description,
      preayer,
      vivit
    );
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
    <div className="">
      <Header />
      <div className="mx-8 max-w-screen-lg text-lg">
        <h2 className="font-bold text-2xl mt-8">Základní informace</h2>
        <div className="">
          <label>Název dne</label>
          <input
            type="text"
            id="fday"
            className="shadow appearance-none  border border-slate-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></input>
        </div>
        <div className="">
          <label>Datum</label>
          <input
            type="date"
            id="fdate"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></input>
        </div>

        <h2 className="font-bold text-2xl mt-8">Texty</h2>

        <div className="">
          <label>Úryvek z Bible</label>
          <textarea
            rows="10"
            id="fquote"
            className="shadow appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-y border rounded-md"
          ></textarea>
        </div>
        <div className="">
          <label>Adresa v Bibli</label>
          <input
            type="text"
            id="fsource"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></input>
        </div>

        <div className="">
          <label>Zamyšlení</label>
          <textarea
            rows="10"
            id="freflexion"
            className="shadow appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-y border rounded-md"
          ></textarea>
        </div>
        <div className="">
          <label>Jméno autora</label>
          <input
            type="text"
            id="fauthor"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></input>
        </div>
        <div className="">
          <label>Pár slov o autorovi</label>
          <textarea
            rows="5"
            id="fdescription"
            className="shadow appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-y border rounded-md"
          ></textarea>
        </div>

        <div className="">
          <label>Modlitba</label>
          <textarea
            rows="5"
            id="fpreayer"
            className="shadow appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-y border rounded-md"
          ></textarea>
        </div>
        <div className="">
          <label>Christus Vivit</label>
          <textarea
            rows="5"
            id="fvivit"
            className="shadow appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-y border rounded-md"
          ></textarea>
        </div>
        <button
          onClick={() => saveData()}
          className="bg-blue my-8 duration-200 hover:bg-grey-dark	text-white font-bold py-2 px-4 rounded"
        >
          Stáhnout JSON
        </button>
      </div>
    </div>
  );
}
