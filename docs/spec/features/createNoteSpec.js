(function testNoteCreationWithInterface() {

  it("should create a note with that text after entering text in box & clicking submit", function() {
    document.getElementById('newNoteBox').value = "Hello I am a test note"
    document.getElementById('noteSubmit').click()
    var firstNoteContents = noteList.getNotes()[0].getBody()
    jennifer.expects(firstNoteContents).toEqual("Hello I am a test note")
  });

})();
