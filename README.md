This project is just a coding part of what I learned from [Thinking In React](https://reactjs.org/docs/thinking-in-react.html)

## Main points
### Step 1: Break the UI into A Component Hierarchy
Keep in mind Single responsibility principle which is a component should ideally only do one thing.<br/>
Break down the UI into components by using the UI mock and JSON data model.
### Step 2: Build A Static Version in React
Build the static version which is stateless and non-interactive.
### Step 3: Identify The Minimal (but complete) Representation Of UI State
First think of the minimal set of mutable state that your app needs.<br/>
Ask three questions about each piece of data:<br/>
1. Is it passed from a parent via props? If so, it probably isn't state.
2. Does it remain unchanged over time? If so, it probably isn't state.
3. Can you compute it based on any other state or props in your component? If so, it isn't state.
### Step 4: Identify Where Your State Should Live
Figure out which component mutates, or owns, the state.<br/>
* Identify every component that renders something based on that state.<br/>
* Find a common owner component (a single component above all the components that need the state in the hierarchy).<br/>
* Either the common owner or another component higher up in the hierarchy should own the state.<br/>
* If you can't find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common owner component.<br/>
### Step 5: Add Inverse Data Flow
Need to bubble the changes to parents.<br/>

Create a callback from parent and pass to children to update the state when child components trigger changes.
## How to run the app

In the project directory, you can run:

### `yarn start` or `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test` or `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build` or `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!