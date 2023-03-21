# Rock Paper Scissors, DOM Edition

Following on from last week's hackathon, we want to refactor our rock, paper, scissors console application and turn it into an interactive HTML page.

> ⚠️ Please remember to do all your work in this repo and **not** the previous hackathon repo.

## Basic game

For this task, navigate to ChatGPT. Ask it to generate the HTML, JavaScript, and CSS code for a basic rock, paper, scissors game, and copy and paste the code into the empty `index.html`, `main.js`, and `style.css` files in this repository.

- Run the game in the browser. Does it work?
- Now spend time reading through the code line by line, and write your own comments after each line to help break down and explain what each line is doing. Reading and understanding existing code is a key skill for developers, so take your time to fully understand how it works. If there's something you don't recognize or understand, you can ask ChatGPT to explain that part specifically, or you can Google.
  - Identify the JavaScript fundamentals we've covered in the course so far. How is the code using variables, arrays, objects, functions, etc.?
  - Identify how the code interacts with and manipulates the DOM. How does it use the methods we've learned already? Are there any methods it uses that we didn't cover in class? If so, Google them!
- Is there anything you would change about the code generated?
  - Is there any bit hard to read that you would rewrite to be clearer?
  - Is there any functionality you'd like to add?
  - Would you style it differently?

Only once you've thoroughly understood and commented each line of the code generated should you proceed further to the tasks below.

[Click here](https://schoolofcode.notion.site/HelperGPT-b17b2b24af1246cc81da788aca5ef0c4) for more guidance on using ChatGPT during the bootcamp!

## Add validation

Create a username input field and use the username the player inputs in the game so that a player can see their name on the page when looking at where the scores are displayed.

To make it more uniform, restrict the number of characters a username can be to 10 or fewer.

This will be deemed as complete when the users cannot enter a username longer than 10 characters.

- 🌟 BONUS: Make it so that valid usernames should only start with letters, not numbers or symbols.
- 🌟 EXTRA BONUS: Make it so that the first letter of the username should be capitalised.

## Style

Use CSS to add more style, flair, and animation to the playing experience on the page. Be creative! ✨

Some resources:

- [Animations](https://www.w3schools.com/css/css3_animations.asp)
- [Colour schemes](https://coolors.co/)
- [Gradients](https://www.w3schools.com/css/css3_gradients.asp)
- [Box shadows](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)

## Refactor

Look at the existing code of the game logic, and break it down into the smallest pieces of logic you can. Pick a chunk of logic, and see if you can refactor it. How many ways can you write the logic to have your game still work?

In programming, there's rarely one correct answer. There are usually multiple ways to solve a problem, and each way has tradeoffs, positive and negative (reusability, readability, etc.). What are the tradeoffs of each way of writing the code?

Commit after you've coded and tested each refactor with a commit message summarizing what you've done so you can record your refactoring in your commit history.

Once you've finished all the ways you can think of, move on to the next piece of logic and keep refactoring and committing.

- 🌟 BONUS: Once you've finished refactoring every bit of the existing logic, can you think of any other features to add? 
