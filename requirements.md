# Software Requirements for Codefoes


### What is the vision of this product?

The vision of this product is to provide an interactive game for entering 201 students that will inspire confidence in their ability to complete the course. While the game seems scary, it resolves by ensuring that even times get tough, others can support you in reaching your goals.


### What pain point does this project solve?

Like any video game, the primary pain point this project aims to solve is boredom. However, it is also intended as a training app to solidify code 201 concepts throughout the course. The game is meant to be fun while also enforcing learning.

### Why should we care about your product?

The product is intended as an additional learning tool for future 201 students. By utilizing three levels of difficulty in our quiz questions, the game is suitable for 201 students at any stage of the course. The app is also utilizing the concepts that it's quizzing users on, hopefully inspiring other future 201 final projects.

### Scope (In/Out)
### IN - What will your product do
Describe the individual features that your product will do.
High overview of each. Only need to list 4-5

The game will quiz on core concepts taught throughout Code 201.
Users will be able to replay the game to receive higher scores and review more code 201 lessons.
There are three different levels of attacks (light, medium, heavy) that prompts a coding question, with corresponding levels of difficulty.
If the user answers the question correctly, the enemy will receive light, medium, or heavy damage.
If the answer is incorrect, the enemy will produce damage upon you. 

### OUT - What will your product not do.
These should be features that you will make very clear from the beginning that you will not do during development. These should be limited and very few. Pick your battles wisely. This should only be 1 or 2 things. Example: My website will never turn into an IOS or Android app.
Minimum Viable Product vs


The game will not include concepts outside the scope of Code 201 curriculum.
We will not be providing the correct answers to questions the user got incorrect. 


### What will your MVP functionality be?

The MVP functionality will be:

- Home page with form for entering the name
- Local storage to keep track of game stores
- Start game button
- 2 Questions per light, medium and heavy attack banks
- Health tally
- Game logic / Battle logic
- Results page
- Return to homepage button
- List highest score


### What are your stretch goals?

- Health bar display
- Health bar display low - Red
- Pixel character models
- More than one opponent
- Randomized damage numbers
- Character movement
- Transition features
- Game Intro
- Speech bubbles from opponent
- Multiple player/hero models
- Show alternative scores on past games

### What stretch goals are you going to aim for?

1. Health Bar Display
2. Randomized damage numbers
3. Pixel charactyer models
4. More than one opponent


### Functional Requirements
List the functionality of your product. This will consist of tasks such as the following:

A user can play the game.
A user can provide a custom name for the player in the game.
A user can review their scores upon completing.

### Data Flow

1. Landing on the Home Page

User can input their name as a custom player name in the game itself. This is stored within Local Storage.
User can start the game by clicking the start game button. This button loads the game screen page. 

2. Playing the Game

User can select an attack (light, medium, heavy) which corresponds to a question bank matching the difficulty.
The question is randomly selected from the question bank.
The user selects from answers.
The answer is evaluated as correct or incorrect.
If correct, damage is incurred on the opponent. Damage amount is determined by the difficulty of question.
If the answer is incorrect, the player takes damage from the opponent. This damage amount is randomized.
The game repeats until either the player or opponent's health tally reaches 0.
Store number of correct answers and whether they won or lost in local storage.

3. Finishing the Game

Pull local storage to determine # of right answers and result of the battle.
Once the game is finished take to results page. Result page displays "Win" or "You died" message on screen.
Display and recap how many questions they got right. Pull this data from local storage.
Add to local storage, game score.

4. Returning to Home Page

Repeat step 1, except pull the previous game's score from local storage to display in it's corresponding section of the page.
List the highest score, pull from local storage. 

