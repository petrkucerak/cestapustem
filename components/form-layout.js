import Header from "./header";
import { useState } from "react";
import replaceAllInserter from "string.prototype.replaceall";
import { TextField } from "@fluentui/react";
import Swal from "sweetalert2";

import unidecode from "unidecode";

replaceAllInserter.shim();

/**
 * Defintiion of the song class.
 */
class Song {
  constructor(name, slug, author, note, text) {
    this.name = name;
    this.slug = slug;
    this.author = author;
    this.note = note;
    this.text = text;
  }
}

/**
 * Save data from simply from into the json file.
 */
function saveData(slug) {
  const name = document.getElementById("fname").value;
  const author = document.getElementById("fauthor").value;
  const note = document.getElementById("fnote").value;
  const text = document.getElementById("ftext").value;

  if (name !== "" && slug !== "" && author !== "" && text !== "") {
    const song = new Song(name, slug, author, note, text);
    downloadObjectAsJson(song, slug);
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

const generateSlug = (name, artist) => {
  if (name && artist) {
    return `${unidecode(name.toLowerCase().replaceAll(" ", "-"))}-${unidecode(
      artist.toLowerCase().replaceAll(" ", "-")
    )}`;
  } else if (name) {
    return `${unidecode(name.toLowerCase().replaceAll(" ", "-"))}`;
  } else if (artist) {
    return `${unidecode(artist.toLowerCase().replaceAll(" ", "-"))}`;
  } else {
    return "";
  }
};

export default function FormLayout() {
  const [songName, setSongName] = useState("");
  const [artistName, setArtistName] = useState("");

  return (
    <div>
      <Header />
      <h2 className="text-3xl mb-3 leading-snug">Základní informace</h2>
      <div className="mb-4">
        <label>Název písně</label>
        <input
          for="grid-first-name"
          type="text"
          id="fname"
          value={songName}
          onChange={(e) => setSongName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></input>
      </div>
      <div className="mb-4">
        <label>Autor, skladatel, skupina</label>
        <input
          for="grid-first-name"
          type="text"
          id="fauthor"
          value={artistName}
          onChange={(e) => setArtistName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></input>
      </div>
      <div className="mb-4">
        <TextField
          label="URL písně"
          prefix="https://zpevnicek.studentstc.cz/song/"
          value={generateSlug(songName, artistName)}
          ariaLabel="Okénko pro zobrazení URL adresy písně"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label>Poznámka</label>
        <input
          for="grid-first-name"
          type="text"
          id="fnote"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></input>
      </div>
      <h2 className="text-3xl mb-3 leading-snug">Text písně s akordy</h2>
      <div className="mb-4">
        <label>
          Text písně musí vždy obsahovat akordy, které jsou v hranatých
          závorkách
        </label>
        <textarea
          rows="10"
          id="ftext"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-y border rounded-md"
        ></textarea>
      </div>
      <button
        onClick={() => saveData(generateSlug(songName, artistName))}
        className="bg-[#0078D4] hover:bg-[#004377] duration-200	text-white font-bold py-2 px-4 rounded"
      >
        Stáhnout JSON
      </button>
    </div>
  );
}
