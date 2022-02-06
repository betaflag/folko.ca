const NOTES = ["A", "B", "C", "D", "E", "F", "G"];
const VARIATIONS = [
  "m",
  "7",
  "b",
  "m7",
  "(sus4)",
  "maj7",
  "/A",
  "/B",
  "/C",
  "/D",
  "/E",
  "/F",
  "/G",
  "/A#",
  "/B#",
  "/C#",
  "/D#",
  "/E#",
  "/F#",
  "/G#",
];

function allChords() {
  return NOTES.reduce((chords, note) => {
    chords.push(note);
    VARIATIONS.forEach((variation) => chords.push(note + variation));
    return chords;
  }, []);
}

function parseChords(text) {
  lines = text.split("\n");
  const chordSet = allChords().reduce((acc, chord) => {
    if (
      lines.some((text) => text.includes(` ${chord} `)) ||
      lines.some((text) => text.startsWith(`${chord} `)) ||
      lines.some((text) => text.endsWith(` ${chord}`))
    )
      acc.add(chord);
    return acc;
  }, new Set());
  return Array.from(chordSet).sort();
}

function renderChord(chord = "") {
  const c = chord.replace("#", "d").replace("/", "_");
  const div = document.createElement("div");
  div.className = "d-flex flex-column text-center fw-bold";
  div.innerHTML = `<div class="ms-3">${chord}</div><img src="https://www.boiteachansons.net/images/accords/guitare/droitier/${c[0]}/${c}/${c}.gif">`;
  const chordsRef = document.getElementById("chordsRef");
  chordsRef.appendChild(div);
}

let content = document.getElementById("content");
if (content) {
  parseChords(content.textContent).forEach(renderChord);
}
