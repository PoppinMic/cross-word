## Running Guide

In the project directory, run:

`npm install` then run `npm start`

to view the implementation.

## Approaches

### Render Grid

Basically string can be seen as array of characters. So I simplified the data source for grid to be one array of strings(saves time from typing).
By using 2 nested loops, we can get (x,y) two-dimentional location of each input block,
I also check to see if each line of strings have same length before start rendering.

For each available input, I put the name following the format "x`[rowNum]`x`[columnNum]`", I also use this naming as keys for correct answer(I was told the correct answer is provided instead of let the program to check.)

### Validation

Base on this rendering mechanisam, it will be very easy when it's time to validate the user answer with provided answer. We just need to compare two JS dictionary Object, compare their keys and value. I initally didn't plan to use `Lodash` but later find it just makes life eaiser by using the collection's `_.foreach`.

**Notice: You need to fill in all inputs, otherwise you cannot validate and there will be an error message in console(I intentionally made this).**

### Choices

I chosed to use `styled-components` - a JSS library - to do most of the css styles. Base on this, I can use props on styles in a declaritive way. Which later I decided to make all blocks an `input` Element. The difference is that `+` ones will be disabled and have slightly different styles.

I also choose to use React Hook since it's the future of react, much simpler and I will love to practice using it.

Another technical choice is that I have some error messages currently just logged in console, while it later can be in message toasts on top-level of our app using `context API` or `redux`.

Next, I make a comparision of two objects instead of arrays when validating. So at this state, I didn't see the necessary to put it in a Web Worker and process it asyncly.

On situation when user entered a word before then delete the word and leave the input empty, I decided to leave that object key's value as `""` instead of delete the key, so later we may distinguish if the user has tried or not.

### Challenges

The most challenging part is at the beginning I thought the correct answer will not be provided and the program will need to calculate if the user input should be correct or not.

Later, I found that mapping your prvoided sample Grid source and correct answer(epscially this) is too much repeat work and is annoying. So I just make a subset of it, please forgive that one word(Never mind if you didn't notice it). I just cannot find a good sample set.

### TODOS

- More Unit Test

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
