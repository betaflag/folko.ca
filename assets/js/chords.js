function allChords() {
  let chords = [];
  const notes = ["A", "B", "C", "D", "E", "F", "G"];
  notes.forEach((note) => chords.push(note));
  notes.forEach((note) => chords.push(note + "m"));
  notes.forEach((note) => chords.push(note + "7"));
  notes.forEach((note) => chords.push(note + "b"));
  notes.forEach((note) => chords.push(note + "m7"));
  notes.forEach((note) => chords.push(note + "#"));
  notes.forEach((note) => chords.push(note + "#m"));
  notes.forEach((note) => chords.push(note + "#m7"));
  notes.forEach((note) => chords.push(note + "(sus4)"));
  notes.forEach((note) => chords.push(note + "maj7"));
  notes.forEach((note) => notes.forEach((note2) => chords.push(note + "/" + note2)));
  notes.forEach((note) => notes.forEach((note2) => chords.push(note + "/" + note2 + "#")));
  console.log(chords);
  return chords;
}

function parseChords(text) {
  lines = text.split("\n");
  const chordSet = allChords().reduce((acc, chord) => {
    let some = lines.some(text => text.includes(` ${chord} `));
    some = some || lines.some(text => text.startsWith(`${chord} `));
    some = some || lines.some(text => text.endsWith(` ${chord}`));
    some && acc.add(chord);
    return acc;
  }, new Set());
  return Array.from(chordSet).sort();
}

function renderChord(chord = "") {
  const c = chord.replace("#", "d").replace("/", "_");
  const div = document.createElement("div");
  div.className = "d-flex flex-column text-center fw-bold";
  div.innerHTML = `<div class="ms-3">${chord}</div><img src="https://www.boiteachansons.net/images/accords/guitare/droitier/${c[0]}/${c}/${c}.gif">`
  const chordsRef = document.getElementById("chordsRef");
  chordsRef.appendChild(div);
}

let content = document.getElementById("content");
parseChords(content.textContent).forEach(renderChord);
