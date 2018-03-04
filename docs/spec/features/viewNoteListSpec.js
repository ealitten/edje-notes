(function testNoteCreationWithInterface() {

  it("should display a list of notes on the screen", function() {
    addNote("Try finding this test string. This note is over 20 characters!")
    var pageNoteList = document.getElementById("noteList").innerText
    jennifer.expects(pageNoteList).toIncludeString("Try finding this tes...")
   });

 })();
