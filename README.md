# Assignment Two

## About

This is the second assignment from the course [React The Complete Guide](https://www.udemy.com/course/react-the-complete-guide-incl-redux). A text input is provided and when the user enters characters, boxes representing the characters appear. Click the boxes to remove characters from the input.

## Assignment

1. Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).

2. Create a new component (=> ValidationComponent) which receives the text length as a prop.

3. Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length).

4. Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).

5. Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.

6. When you click a CharComponent, it should be removed from the entered text.

## Demo

Demo can be found here: [RCG Assignment 2](https://daniel-schroeder-dev.github.io/rcg-assignment-2)