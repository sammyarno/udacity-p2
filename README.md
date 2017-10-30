# Readable
It's a forum website where you can insert update and delete the post and comment.

## Getting Started
You can pull/clone this project from 
`https://github.com/sammyarno/udacity-p2`

### Prerequisites
You will need `node` or `npm` installed in your computer.
``Make sure you already install it!``
### Installing
After you clone this project, please do this step :

run `npm init` to create your own package.json


then,


run `npm install` or `yarn add` to update the package needed

## Run the web
To view the web page,
run `yarn start` or `npm start

But make sure you have already run the `api-server` first!

## Built With
* [ReactJS](https://facebook.github.io/react/) - The front-end framework
* [Redux](https://github.com/reactjs/react-redux) - The component's state flow
* [Semantic UI](https://react.semantic-ui.com) - CSS Framework
* [Backend Server](https://github.com/udacity/reactnd-project-readable-starter) - The backend server
* [Atom text Editor](https://atom.io) - My text editor

## Authors
* [Samuel Tan](https://github.com/sammyarno)

## What You're Getting
```
+--public/    
 |-- index.html - DO NOT MODIFY
 |-- favicon.ico - React Icon, You may change if you wish.
+-- src/
 +-- actions
  |-- CatAction.js - All of the Category Action Functions.
  |-- MenuAction.js - All of the Menu Action Functions.
  |-- PostAction.js - All of the Post Action Functions.
 +-- api
  Testing is encouraged, but not required.
  |-- PostApi.js - This is where the function to get the data from the web service (API).
  Instructions for the methods are in `localhost:3001/`.
 +-- assets
  |-- css
  |-- images
    |-- dummy.jpg - Dummy images.
  |-- js
 +-- components
  |-- header.js - Header Navigation component.
  |-- LoadingFull.js - Loading (Full Screen) component.
  |-- routes.js - All the routes in here !.
  |-- VoteButton.js - Vote Button component.
 +-- containers
  |-- Category.js - Category page.
  |-- CommentModal.js - To edit and insert new comment.
  |-- Detail.js - Post detail page.
  |-- Home.js - Home page.
  |-- NotFOund.js - File not found / wrong routing page.
  |-- PostModal.js - To edit and insert new comment (Not Ready yet)
 +-- reducers
  |-- CatReducer.js - Reducer for category.
  |-- MenuReducer.js - Reducer for Menu (Header Navigation).
  |-- PostReducer.js - Reducer for post.
  |-- index.js - Where I combined all of the reducers into one single reducer.
  |-- InitialState.js - all the reducers's initial state.
 |-- ActionTypes.js - This file is for the constant string for any actions in redux flow
 |-- App.js - This is the root of your app. Contains static HTML right now.
 |-- App.css - Styles for your app. Feel free to customize this as you desire.
 |-- App.test.js - Used for testing. Provided with Create React App.
 |-- index.js - You should not need to modify this file. It is used for DOM rendering only.
 |-- index.css - Global styles. You probably won't need to change anything here.
|-- .env
|-- .gitignore
|-- debug.log
|-- README.MD - This README file.
|-- package.json - npm package manager file. It's unlikely that you'll need to modify this.
```

## Backend Server

you can clone the backend server from the repo below.
[Backend Server](https://github.com/udacity/reactnd-project-readable-starter)

