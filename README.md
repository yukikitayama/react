# React

Section 2: Optional: React Refresher in Udemy Next.js 14 & React - The Complete Guide

`npm run dev` with the project created by **vite**.

In React, we are creating **components**. Components are JavaScript functions that return **JSX codes**.

The name of the functions of components needs to start with an Uppercase letter.

`{js_code}` allows to output dynamic value by JavaScript code.

Components can return only one JSX root element. But the single element can contain multiple siblings. `<></>` empty element is **React Fragment**. `<React.Fragment>` can be used too.

Styling

Use file name `Component-name.module.css` and place next to the component to use **CSS module**. Name crash will be avoided.

Use `import classes from "./Component-name.module.css";` to import.

Use `className={classes.css-class-name}` attribute of elements to assign CSS.

Event listener

`onChange={function}`. `function(event)` function automaticall receives event object.

To get text, `event.target.value`.

React hooks must be executed inside react component functions.

`import { useState } from "react"`, react hooks

**Lifting the state up**

`props.children`. `children` is a reserved props. If you wrap component with another custom components, by default, React doesn't know where to put that wrapped content inside the wrapping component.

`<button type="button"></button>` doesn't submit `<form>`, but `<button></button>` will submit.

`<form onSubmit={function}>` default form submission, and browser automatically submits HTTP requests. Use `event.preventDefault()`.

React **state**. If you update state and if the new state is based on previous state, **you should pass a function to state update function of `useState()`**. Use arrow function like `setStateFunction((prevState) => [newData, ...prevState])` for example.

For loop to output multiple React components requires to assign `key` props in that component.

To use `dummy-backend`, `npm install` and `npm start`, then `localhost:8080`

`useEffect(function, array)` is for side effect, not returning JSX, but we wanna bring some effects. It should not accept async function as the function argument, but the function can contain async function and execute it. But the function should not return `Promise`.

React Router

`npm install react-router-dom`

**Layout route**

## TypeScript

`npx create-react-app my-app --template typescript`

Form

`event: React.FormEvent`

`<input>`, `useRef<HTMLInputElement>()`.

To pass an argument to props function, `props.function-name.bind(null, arg)`.