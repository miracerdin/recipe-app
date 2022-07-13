# Project: Recipe App

Simple recipe app created with React.js

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)

## General info

In this project, I pulled data with asyncron structure using Fetch API. I have created a Login page to access this data I have captured. After logging in, some dishes are shown by default. You can search by entering the name of the meal you want and selecting the meal. To get the details, just click on the Detail button. Since I'm using a React router, you can switch between pages.

## Technologies

<h6>HTML 5</h6>
<h6>CSS 3</h6>
<h6>Bootstrap 5.2</h6>
<h6>Javascript</h6>
<h6>React</h6>
<h6>React router v6, useState, useEffect,useRef, PrivateRouter,useNavigate,useParam,useLocation</h6>

## Problem Statement

- We are adding a new project to our portfolios.

## Project Skeleton

```
 Recipe App
|
|----readme.md         # Given to the students (Definition of the project)
SOLUTION
├── public
│     └── index.html
├── src
|    ├── assets
│    ├── components
│    │       ├── header
│    │       │     ├── Form.js
│    │       │     └── style.js
│    │       ├── navbar
│    │       |    ├── Navbar.js
│    │       |      └── style.js
│    │       ├── Recipe.jsx
│    │       ├── RecipeList.jsx
│    ├── pages
│    │       ├── about
│    │       │     ├── About.js
│    │       │     └── style.js
│    │       ├── details
│    │       │     ├── Details.js
│    │       │     └── style.js
│    │       ├── login
│    │       │     ├── Login.js
│    │       │     └── style.js
│    │       ├── home
│    │       |      ├── Home.js
│    │       |      ├── RecipeCard.js
│    │       |      └── style.js
│    │       ├── notfound
│    │       │     ├── NotFound.jsx
│    │       │     └── style.js
│    ├── router
│    │       └── PrivateRouter.jsx
│    ├── App.js
│    ├── App.css
│    ├── index.js
│    └── index.css
├── package.json
└── yarn.lock
```

## Expected Outcome

![Project 004 Snapshot](food-search-app.gif)

## Objective

Build a Recipe App using ReactJS.

### At the end of the project, following topics are to be covered;

- HTML

- CSS

- JS

- ReactJS

### At the end of the project, i will be able to;

- improve coding skills within HTML & CSS & JS & ReactJS.

- use git commands (push, pull, commit, add etc.) and Github as Version Control System.

## Steps to Solution

- Step 1: Create React App using `npx create-react-app recipe-app`

- Step 2: Signup `https://developer.edamam.com/edamam-docs-recipe-api` and get api key.

- Step 3 : Using api key and `fetch` for getting data from `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`.

- Step 4: i used css framework Bootstrap.

- Step 5 : You can get random login background image from `https://picsum.photos/1600/900`

- Step 6: Added project gif to my project and README.md file.

## Notes

- You can add make it yourself just work hard.

**<p align="center">&#9786; Happy Coding &#9997;</p>**
