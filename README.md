# React

- [Udemy React & TypeScript - The Practical Guide](https://www.udemy.com/course/react-typescript-the-practical-guide/)

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

`import { ComponentPropsWithoutRef } from 'react';`, `ComponentPropsWithoutRef<'input'>` gives us **an object that contains all the default props of the standard built-in input element**.

`forwardRef` is a function which takes a component function as value. 
`forwardRef<type of ref, type of props>(function component)`

## Dashboard

- https://mui.com/material-ui/getting-started/templates/dashboard/
- https://github.com/mui/material-ui/tree/v5.15.21/docs/data/material/getting-started/templates/dashboard

## MUI

- `shouldForwardProp`
  - https://stackoverflow.com/questions/74750742/mui-styled-component-shouldforwardprop
- MUI `ListItemButton` with `react-router-dom`
  - https://stackoverflow.com/questions/71822728/how-to-enable-listitembutton-to-use-react-router-v6-link

## Form

`event.currentTarget.reset();` will remove all the inputs. This will be useful when a form submission handler is called.

`const formData = new FormData(event.currentTarget);` is a built-in method to gather all the input data in `<form>`. All the input must set `name=""` in `<input>`. `const data = Object.fromEntries(formData);` allows to have an object to easier to extract data.

- Form submission
- Input validation

2 ways to submit form
- Default `type` of `<button>` is `type="submit"` which triggers HTTP requests from `<form>`. 
If we use `<button type="button">` prevents HTTP requests and page won't be reloaded.
- (Better) Another more elegant way is to keep the `<button type="submit".` (`type="submit"` is default, so you don't even have to specify it), and use `<form onSubmit={submitHandler}>` (Not connecting form submission handler to button element). 

If we use `useState()`, create input change handler functions and connect them to `<input onChange={handler} value={state}>`, and `handler(event)` and `event.target.value` contains the value in `<input>`.

3 ways to handle values in form
- `useState` with `value` prop and `onChange` prop
- `useRef` with `ref` prop and use `current.value` like `refVariable.current.value`
  - Advantage of using `ref` is less code than using `state`.
  - Disadvantage is you need to be careful and avoid changing the value of the ref by assigning value directory like `refVariable.current.value = 'something'`.
- `const formData = new FormData(event.target);` in form submission handler with `event`, and all input fields or select fields must have `name` prop, and `const data = Object.fromEntries(formData.entries());` to create object.
  - `formData.get("name1")` can get a value of an input field with `name="name1"`.
  - Use `formData.getAll("name2")` if `name2` is multi-selection field. Each input field of multi-selection needs to have the same name.
  - Advantage is, it's better with a complex form.

2 way of clearing form
- Use `type="reset"` in `<button>` element. Built-in function of JavaScript.
- Use `event.target.reset()` in form submission handler with `<form>`.

Third-party form libraries.
Google search `react form libraries`.

## Data fetching

```
const response = await fetch(url);
const data = await response.json() as unknown;
return data;
```

## VS code

`Ctrl + Space` to pop up auto completion menu.

## JavaScript

`{label, id, ...props}` to collect all the remaining properties of the object and store them in a new props object. `<input id={id} {...props} />` to spread all these properties as key-value pairs onto the input element.

`{[variable_containing_key]: value}` dynamically sets key and value in object with variables.

## TypeScript

TypeScript builds up on JavaScript and extends its syntax by adding **strong typing**.
TypeScript helps you **catch and fix type-related errors earlier**.
Sometimes, that comes at the cost of having to define **complex value types**.

To make React app more type safe.

`npm install -g typescript` installs globally.

`npx tsc` compiles TypeScript files to JavaScript files.

`npx create-react-app my-app --template typescript`

Form

`event: React.FormEvent`

`<input>`, `useRef<HTMLInputElement>()`.

To pass an argument to props function, `props.function-name.bind(null, arg)`.

ts.config.json

`tsconfig.json` is configuration for TypeScript compiler. Based of this configuration VS code shows us errors.
 
`"strict": true` sets that you always must explicitly set the tyoe of parameters in a function, for example.

`props` that is automatically passed to every component by React is an **object** which we can define by key-value pairs. Using custom type `type` or interface `interface` to define a props type is your choice.

Every `props` has `children` property in every React component. `ReactNode` type is the type of `children` prop. `import { type ReactNode } from 'react';`

Alternative way is `import { type PropsWithChildren } from 'react';` and `type PropsName = PropsWithChildren<{ additionalProp: type }>;`. Either way, children type is `ReactNode`.

`key` prop (used by React to track specific component instances) can be set on custom components **even if you didn't specify it in your props type**.

Types for `useState()` uses a **generic type**, so use a syntax like `const [goals, setGoals] = useState<string[]>([]);`

To share types across component, you can export type like `export type TypeName = {...};` and import it by `import { type TypeName } from '...';`.

Type for form `event` object is `event: FormEvent<HTMLFormElement>` or `event: FormEvent` by `import { type FormEvent } from 'react';`

If you define a in-line form event handler with arrow function as value of `onSubmit={() => ...}`, no need to specify type for event, but it's hard to read the code, because TypeScript can infer.

**Error message of TypeScript typically contains the most helpful message in the most nested inner message, and you can ignore the outer messages**

`useRef();` will throw `undefined` error, so typically `useRef(null);` initialiation can help.

`HTMLInputElement` in `useRef<HTMLInputElement>(null);` is a built-in type in TypeScript, so you don't need to import.

`variable!.` allows developer to tell TypeScript that, at the time of accessing `variable`, developers know that it's not null, so it's okay to access its property.

Optional property for custom type can be defined by `property-name?: type`. If we don't set the property, it will be `undefined`.

```
type InfoBoxProps = {
  mode: 'hint' | 'warning';
  severity?: 'low' | 'medium' | 'high';
};
```

**Discriminated union** is to make and use a Union type of custom types, and use `if` statements to check the types to select properties in the custom type.

**Wrapper component** is to wrap built-in elements to enhance functionality and styles.

**Type predicate**, `function name(props: SomeProps | OtherProps): props is SomeProps { return boolean }`

**Polymorphic component** means a wrapper component where we don't know in advance which component it will wrap. It should be able to wrap all kinds of components. `import { type ElementType } from 'react';` for **identifier** of JSX components. `ElementType` is name of component. `ReactNode` is JSX component itself.

`array.splice(index, number)` creates a new array by removing `number` numbers of items from `index` in the original array. 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

`typeof` is convenient to extract type from variable and create a custom type. e.g. `export type AppDispatch = typeof store.dispatch;`

`ReturnType<generic-type>` gives us a type of returned value of a function type. e.g. `export type RootState = ReturnType<typeof store.getState>;`

## Redux

**Redux** is for state management
- Have a single central Redux store that stores and manages the entire shared state.
- Components dispatch actions
- Actions trigger reducer functions
- Reducers update the state in store.
- Components can select (read) data from the store.

`npm install @reduxjs/toolkit` is recommended way to use redux

`npm install react-redux` to connect redux to react.

Create `store/` folder in `src/` folder, and create `store.ts` in `store` folder.

Add `xxx-slice.ts` in `store` folder for states for each concept

Implementation key points
- Create `xxx-slice.ts` for initial state and action for each state
- Create `store.ts` to configure store and create types of state and dispatch
- Create `hooks.ts` to define state and dispatch functions with types 

