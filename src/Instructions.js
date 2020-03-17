import React from 'react';
import './Instructions.css';

function Instructions(props) {
  return (
    <div className="instructions">
      <h2>About</h2>

      <p>This is the second assignment from the course <a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux">React The Complete Guide</a>.</p>

      <h3>Assignment</h3>

      <ol className="instructions__list">
        <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
        <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
        <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
        <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
        <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
        <li>When you click a CharComponent, it should be removed from the entered text.</li>
      </ol>

    </div>
  );
}

export default Instructions;