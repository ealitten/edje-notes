# jennifer.js

Maker's Academy group project: Creating a behaviour-driven JavaScript test framework from scratch.

The sample app used to develop the framework, alongside its tests, is hosted at https://ealitten.github.io/jennifer.js/

To view the test results, simply open the browser console.

![test examples](/docs/images/example.png)

## Approach

The task given to our group this week was to develop a single-page notes app from scratch in vanilla JS (including without any testing frameworks). To achieve this using TDD, we of course needed to write tests, which involved creating a testing framework of our own in parallel with the app. During the project, we learnt through experience how a framework can be be gradually built in steps from the ground up, which helped to demystify frameworks in general. 

Our initial step was to produce a basic tool that could compare one object to another (the fundamental job of any testing framework); we produced several matcher functions which took arguments and returned true/false. We decided to base the framework syntax on Jasmine, since this was familiar - we therefore expanded on the matchers with an 'it' function which contained the test itself and a description of its purpose. To make the test statements more readable, we refactored Jennifer so that `expect` takes the object to be compared and sets it on self - this allowed statements to be written as e.g. `expect(subject).toEqual(object)`. To avoid a chain of returning true/false all the way up through the functions called, we altered the matchers to use exceptions to communicate test failure, rather than true/false. Finally, we refactored to include a basic testrunner, which also served to isolate tests and stop variable name conflicts.


## Instructions for using the framework

#### Installing

Download `jennifer.js` and put it somewhere in the project directory. Include the file in your `index.html` file.

#### Writing tests
Use the following syntax inside a test file (no special naming of the file required):

```javascript
(function featureOrClassName() {

  it("Description of the test", function() {
    jennifer.expects(subject).MATCHER(expectation)
  });

})();
```

Note how this is an immediate-invoked function expression. This adds itself to the test runner.

#### Matchers

```javascript
toBeTrue()
toBeFalse()
toEqual(objectToCompare)
toInclude(item)
toIncludeString(stringToFind)
toBeArray()
toBeEmptyArray()
```

#### Before Block

See below for an example but Jennifer can execute things before each test. When you come to run your tests, pass an optional argument to `runTests()`.

#### Running tests

Include the following in some sort of html file.

```html5
  <!-- load dependencies -->
  <script src="src/noteList.js"></script>
  <script src="src/interface.js"></script>

  <!-- load testing framework -->
  <script src="../jennifer.js"></script>

  <!-- tests -->
  <script src="spec/noteSpec.js"></script>
  <script src="spec/features/viewNoteListSpec.js"></script>
  <script src="spec/features/clickableNoteListSpec.js"></script>
```
Jennifer needs the greenlight to start testing. Either place the following inside the spec runner inside some `<script>` tags  to run the test automatically, or type it into the console. Note the optional argument in `runTests()`, this is a 'before block' and will execute before each test.

```javascript
jennifer.runTests(function () { noteList = new NoteList() });
```
