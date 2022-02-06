
const CHORDS = [
  "A", "Ab", "Am", "Am7", "A#", "A#m",  "A#m7",
  "B", "Bb", "Bm", "Bm7", "B#", "B#m",  "B#m7",
  "C", "Cb", "Cm", "Cm7", "C#", "C#m",  "C#m7",
  "D", "Db", "Dm", "Dm7", "D#", "D#m",  "D#m7",
  "E", "Eb", "Em", "Em7", "E#", "E#m",  "E#m7",
  "F", "Fb", "Fm", "Fm7", "F#", "F#m",  "F#m7",
  "G", "Gb", "Gm", "Gm7", "G#", "G#m",  "G#m7"
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
