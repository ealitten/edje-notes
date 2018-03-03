(function testClickableNoteList() {

  it("should display a note in the display box after clicking on it", function() {
    document.getElementById('newNoteBox').value = "This is a test note designed to be longer than 20 characters"
    document.getElementById('noteSubmit').click()
    document.getElementById('note0').click()
    var content = document.getElementById('noteDisplayBox').innerText
    jennifer.expects(content).toEqual("This is a test note designed to be longer than 20 characters")
  });

})();
