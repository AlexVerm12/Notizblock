let titles = [];
let notes = [];

load();

function render() {
    let content = document.getElementById('content');

    content.innerHTML = ``;


    for (let i = 0; i < titles.length; i++) {
        const title = titles[i];
        const note = notes[i];

        content.innerHTML +=`
        <div class="note">
        <h3>${title}</h3><br>
        <span>${note}</span><br>
        <button  onclick= "deleteNote()">delete</button>
        </div>`;
    }
   
}



function addNote() {
    let title = document.getElementById('title');
    let note = document.getElementById('note');
    if (title.value && note.value) {
        titles.push(title.value);
        notes.push(note.value);
        title.value = '';
        note.value = '';
        render();
        save();
    }
}

function deleteNote(i) {
    titles.splice(i);
    notes.splice(i);
    render();
    save();
}

function save() {
    let titlesAsText = JSON.stringify(titles);
    localStorage.setItem('title', titlesAsText);

    let notesAsText = JSON.stringify(notes);
    localStorage.setItem('note', notesAsText);

}

function load() {
    let titlesAsText = localStorage.getItem('title');
    let notesAsText = localStorage.getItem('note');
    if (titlesAsText && notesAsText) {
        titles = JSON.parse(titlesAsText);
        notes = JSON.parse(notesAsText);
    }
}