
const CHORDS = [
  "A", "Am", "A#", "A#m",
  "B", "Bm", "B#", "B#m",
  "C", "Cm", "C#", "C#m",
  "D", "Dm", "D#", "D#m",
  "E", "Em", "E#", "E#m",
  "F", "Fm", "F#", "F#m",
  "G", "Gm", "G#", "G#m"
];

function parseChords(text) {
  return CHORDS.reduce((acc, chord) => {
    text.includes(` ${chord} `) && acc.add(chord);
    return acc;
  }, new Set());
}



function renderChord(chord = "") {
  const c = chord.replace("#", "d");
  const div = document.createElement("div");
  div.className = "d-flex flex-column text-center fw-bold";
  div.innerHTML = `<div class="ms-3">${chord}</div><img src="https://www.boiteachansons.net/images/accords/guitare/droitier/${c[0]}/${c}/${c}.gif">`
  const chordsRef = document.getElementById("chordsRef");
  chordsRef.appendChild(div);
}

let content = document.getElementById("content");
parseChords(content.textContent).forEach(renderChord);
