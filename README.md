# React-Intro

React JS
.ts (typescript)

SPA (Single page application)=>even in changing the tabs of a website the page or url shouldn't change.

> Components(grp codes)
> Data Binding
> Virtual DOM

                    home.jsx (JS xml)

         BannerSection.jsx              Navbar.jsx                   Section.jsx                   Footer.jsx

                                     home.jsx aboutUs.jsx

> Redux ( State Management) For local storage
> Hooks (Life cycle methods): Created, updated, ended => these methods fall under hooks

<!-- Comments -->

npx ( node package execution)
npx create-react-app project-name

cd (projectname)
npm start

<!-- Start react -->

cd first-project-app
npm start

### state => data required for a component

### hooks => useState(), setState() hooks provide certain methods to connect and talk with your state

import {useState} from "react";
const[var,func] = useState();
const [count, setCount]= useState (); //count is var and setCount is the func

const [num,setNum]= useState(0); //0 is the default number of useState
num+=1;

### props => used to pass the info from 1 component to another

rem- props can't have a direct no. so we need to wrap it up i curly braces

## Routing and Layouts in ReactJs

Router >> Routes > Route
Eg:
/contact/aboutUs/SignUp/SignIn

<!-- grp od routes is route -->
<!--download comments  -->

npm i react-router-dom

Workflow wrt you rroutes

> > index.js >> app.js(Brouser Router) >> diff routes
