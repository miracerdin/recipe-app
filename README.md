# Project: Recipe App

## [Click to See](https://recipe-app-two-nu.vercel.app/)
Simple recipe app created with React.js

## Table of contents

- [Project: Recipe App](#project-recipe-app)
  - [Table of contents](#table-of-contents)
  - [General info](#general-info)
  - [Technologies](#technologies)
  - [Setup](#setup)
  - [Illustrations](#illustrations)
  - [Project Skeleton](#project-skeleton)
  - [Objective](#objective)
    - [At the end of the project, i will be able to;](#at-the-end-of-the-project-i-will-be-able-to)
  - [Steps to Solution](#steps-to-solution)
  - [Notes](#notes)
  - [Contact](#contact)

## General info

In this project, I pulled data with asyncron structure using Fetch API. I have created a Login page to access this data I have captured. After logging in, some dishes are shown by default. You can search by entering the name of the meal you want and selecting the meal. To get the details, just click on the Detail button. Since I'm using a React router, you can switch between pages.

## Technologies

- HTML 5
- CSS 3
- Bootstrap 5.2
- Javascript
- React
- React router v6, useState, useEffect,useRef, PrivateRouter,useNavigate,useParam,useLocation</

## Setup

To run this project, install it locally using npm:

```
$ git clone https://github.com/miracerdin/recipe-app.git
$ npm install
$ npm start
```

## Illustrations

![recipe app](https://user-images.githubusercontent.com/99042499/178953779-ac5ec12a-037f-4130-82bf-a74c31111ee8.gif)

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

## Objective

Build a Recipe App using ReactJS.

### At the end of the project, i will be able to;

- improve coding skills within HTML & CSS & JS & ReactJS.

- use git commands (push, pull, commit, add etc.) and Github as Version Control System.

## Steps to Solution

- Step 1: Create React App using `npx create-react-app recipe-app`

- Step 2: Signup `https://developer.edamam.com/edamam-docs-recipe-api` and get api key.

- Step 3 : Using api key and `fetch` for getting data from `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`.

- Step 4: i used css framework Bootstrap.

- Step 5: Added project gif to my project and README.md file.

## Notes

- You can add make it yourself just work hard.

## Contact

<p>
  <a href="https://www.linkedin.com/in/mirac-erdin/" rel="nofollow noreferrer">
    <img src="https://i.stack.imgur.com/gVE0j.png" alt="linkedin"> LinkedIn
  </a> &nbsp; 
  <a href="https://github.com/miracerdin" rel="nofollow noreferrer">
    <img src="https://i.stack.imgur.com/tskMh.png" alt="github"> Github
  </a>
</p>
Phone Number:(+90 531 383 9138)
**<p align="center">&#9786; Happy Coding &#9997;</p>**
