
noteList = new NoteList()

document.getElementById('noteSubmit').onclick = function () {
  addNote()
  document.getElementById('newNoteBox').value = ""
}

function loadNote(index) {
  document.getElementById('noteDisplayBox').innerHTML = noteList.getNotes()[index].getBody()
}

function addNote(body = document.getElementById('newNoteBox').value) {
  if (body === "") { return }
  noteList.addNote(new Note(body))
  loadNoteList()
}

function loadNoteList() {
  var output = "<ul id='noteList'>"

  if (noteList.getNotes().length > 0) {
    noteList.getNotes().forEach((note, index) => {
      output += "<li class='noteListItems' id='note" + index + "' onclick='loadNote(" + index + ")'>" + note.getBody().slice(0, 20) + "...</li>"
    });
  }
  output += "</ul>"

  document.getElementById('noteListDisplayArea').innerHTML = output
}
