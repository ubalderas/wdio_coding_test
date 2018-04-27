# Automation Test

Requirements: Node, NPM

## Instructions

* Fork this repo.
* Clone it down locally
* run `npm install`.
* run `npm test`. Only the first test should pass (which checks the title). This should verify that you are setup and good to go.
* Make all the other tests pass. Do NOT change any code inside of the actual test file.
* Improve the framework as you see fit.
* Push your completed work to your github page
* Email me (blubecker@lifesize.com) when you have completed the task and send me the URL to your account's repo (don't make a PR to the original repo). Optionally, you can send me a zip of your finished repo if that's easier.

If you have questions, email me at blubecker@lifesize.com.

![](http://i.imgur.com/c80tSY5.gif)

## Notes on Implementation

* While implementing the methods for the InfoPage class, I realized that the test file was using the
strict equality assertion for object comparison from the chai expect library. Strict equality on Javascript
is never true for two distinct objects, and is therefore not appropriate to use to compare them.
I changed it to use the deep equality chain methods instead, as in `expect(data).to.deep.equal(expectedData)`.
* I had some prior experience with elements not finishing loading while trying to action on them, and I try to always
use waitUntil type methods (implicit waits) before actioning on something, and after when expecting something to change.
This is in this case only noticeable on the login page where I imported the InfoPage, and added a call to the
`infoPage.pageIsLoaded()` method to the login method, since I encountered a couple times where elements wouldn't be
loaded before clicking on buttons and/or the data to parse was visible.
* I used simple substring methods to do the string parsing, but it's possible that some regex functions could have been
used instead. There may be other string manipulation libraries that make this easier as well.
* For the bonus test, I feel a little dirty using the nth-child css method to select particular child elements, and I
typically avoid this. On a real scenario, I would request developers to use ids and/or classes that help to find
elements easily.
* I usually use docstrings to document classes and methods within every file, but while I was going through that, it
felt like a lot for the small simple methods that are used for the tests.