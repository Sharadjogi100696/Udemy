## Best Practice for better web development

- Use next js feature
- prettier
- eslint
- master component should have least rendering and should be clean and less logic
- Use event handler function as Handler as a part of function name

- context are Not optimized for high frequently changes
- we dont need imports of react in modern react
- use prop-types package for stricting types of props

- use redux toolkit and remove redux package. (since already included in redux/toolkit)

## Basics:

- state management system for app-wide state/ cross component
- reducer is pure function, should not deal with side-effects

## Redux vs Context:

- Disadvantages of context:
- complex setup/management is cumbersome
- bad for high frequency updates
- context is good for small application

## Redux Concepts:

- One Central Store
- action (information package)
- reducer (logic to update store)

- it has clear idea how state may change

- Components subscribe to the store
- Components never direct manipulate store
- So we use reducer. It mutate the store
- actions connect the components to reducer. Since components dispatches action
- action is js object which descibes the operation needed by reducer
- subscribed components are notified

## Notes:

```jsx
combineReducer({
  ctr: ctrRed,
  abc: abcRed,
});
```

- should never directly mutate the state
- always return brand new object

## Redux Basic Code:

```js
const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  count: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "ADD":
      return { ...state, count: state.count + action.payload };
    default:
      return state;
  }
};

const store = createStore(rootReducer);
store.subscribe(() => {
  console.log("subscription", store.getState());
});
// console.log("initial state", store.getState());

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "ADD", payload: 10 });

// console.log("final state", store.getState());
```

## Redux React Code:

```
createStore --> creates store
Provider helps to scope store
connect --> used to connect component
mapStateToProps --> defines which state should be available as props to a component
mapDispatchToProps --> defines which function should dispatch action
```

### Example:

## store/index.js

```js
import { createStore } from "redux";

const defaultState = {
  counter: 0,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
```

## app.js

```js
import { Provider } from "react-redux";

import Counter from "./components/Counter";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
```

## usage 1:

```js
import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </main>
  );
};

export default Counter;
```

## usage 2:

```js
render() {
return <h1>this.props.ctr</h1>
}

const mapStateToProps = state => {
ctr: state.counter
}

const mapDispatchToProps = dispatch => {
increment: () => dispatch({type: "INCREMENT"})
}

return connect(mapStateToProps,mapDispatchToProps)(AppChildren)
```

## useSelector:

- useSelector is used to get the state values
- useSelector will subscribe the subscription with the store
- whenever data changes, useSelector automatically gives us latest state and component is re-evaluated
- if component is un-mounted, react-redux will unsubscribe the subscription with the store

## useDispatch:

- returns a function

## Redux Advance:

```
applyMiddleware --> adds middleware

flow: action --> middleware --> reducer
```

## Redux thunk:

- applyMiddleware(thunk)

```js
const saveAction = () => {
  return {
    type: "SOMEACTION",
  };
};

const someAction = () => {
  return (dispatch) => {
    // dispatch is available because of thunk
    setTimeOut(() => {
      dispatch(saveAction());
    }, 2000);
  };
};
```

## Redux Toolkit Library:

```
yarn add @reduxjs/toolkit
```

- creates action for us
- easy to merge all the reducers
- easy to deal with reducers
- allow to change the state mutably
- it has default name for payload

## store.js

```js
import { createSlice, configureStore } from "@reduxjs/toolkit";

const defaultState = {
  counter: 0,
};

const slice = createSlice({
  name: "counter",
  initialState: defaultState,
  reducers: {
    increment(state, action) {
      state.counter++; // does it internally in immutable way
    },
    decrement(state, action) {
      state.counter--; // does it internally in immutable way
    },
  },
});

const store = configureStore({ reducer: slice.reducer });
// const store = configureStore({ reducer: { counter: slice.reducer } }); // can do to have multiple reducers

export const actions = slice.actions;
export default store;
```

### app.js is same

## usage:

```js
import { useSelector, useDispatch } from "react-redux";

import { actions } from "../store/toolkit";

import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(actions.increment());
  };
  const decrement = () => {
    dispatch(actions.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </main>
  );
};

export default Counter;
```

## Working with Side Effects:

- Two ways of handling side effects:

  - In componenst using useEffect() and async operations
  - inside action creators

- Using Component and promises and useEffects;

```jsx
useEffect(() => {
  const fn = async () => {
    dispatch(initialize());
    try {
      const data = awaitfetch();
      dispatch(success(data));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}, []);
```

- Using ActionCreator: (thunk)
- Thunk: a fn that delays an action until something finished
- Redux toolkit also accepts funtion and pass the dispatch to that fn and dispataches all the actions included inside.

```jsx
// slice.js

export const sendData = (cart) => async (dispatch) => {
  dispatch(initialize());
  try {
    const data = awaitfetch();
    dispatch(success(data));
  } catch (e) {
    dispatch(failure(e));
  }
};
```

## Routing Basics:

- render jsx based on the path conditionally

## Basics Example:

```jsx
// App.js
import { Route } from "react-router-dom";

import { Welcome } from "./components/Welcome";
import { Products } from "./components/Products";

function App() {
  return (
    <div>
      <Route path="/" component={Welcome} />
      <Route path="/products" component={Products} />
    </div>
  );
}

export default App;
```

```jsx
// index.js
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
```

## Basic Example 2

```jsx
    <Route path="/" exact render={() => <h1>Home</h1>} />
    <Route path="/" exact render={() => <h1>Home2</h1>} />

```

## Link:

```jsx
    <Link to="/">Welcome</Link>

    <Link to={{
        pathname: '/path',
        hash: '#submit', // to jump to a specific point
        search: '?abc=true'
    }}}>
```

## NavLink

- To style active links use NavLink which adds classes to the active anchor tab and more

## Dynamic Route:

```jsx
    <Route path='/products/:productId' component={Products}>
```

## Extract Route Params:

```jsx
const params = useParams();
```

## Redirect:

```jsx
    <Redirect to='/'> // helps to handle error in paths

    <Redirect from='/' to='/new-path'>
```

- other usage: use it inside jsx of any component and render it comditionaly

## useHistory:

```jsx
    const history - useHistory();

    history.push('/') // allow user to go back
    history.replace('/') // dont allow user to go back
```

## Prompt:

- watch if component disappears and prompts something

```jsx
<Prompt when={isInputElementFocused} message={(location) => log(...)}>
```

## Query Parameters:

```jsx
const location = useLocation();

const queryParams = new URLSearchParams(location.search);
const paramValue = queryParams.get("paramName");
```

## useRouteMatch

```jsx
    gives more info about url
```

## Authentic routes:

```jsx
    this.state.auth && <Route path='/home' component={Home}>
```

## Lazy Loading:

- Download only the specific route page rendering to optimize the user experience
- Download the component only when needed
- For react > 16.6:
- remove imports

```jsx
const AsycComponent = React.lazy(() => import("path of the import")); // should be default exports
```

```jsx
<Route path='anything' render={() => {
<Suspense fallback={<div>Loading</div>}><AsycComponent/></Suspense>
}}\>
```

- not necessary to be used in Route only

## set Basename:

```jsx
     <BrowserRouter basename="/react-app">
```

## Notes:

- Switch allows to load only first Route that matches. Wrap all the Routes with Switch

## Authentication Steps:

- Get permission
- send req to protected resources

## How Does authentication works:

### 1st way (traditional)

- Client send username/password to the server
- Server sends yes/no along with unique identifier (sessionid)
- Client can use identifier to attach it in future request.

#### (Disadvantages)

- Should have tightly coupled connection b/w client and server for SPAs
- login Service A, Rest services B, fails
- Server should be able to develop apis for different clients not particular to 1 client

### 2nd way (recommended)

- Client send username/password to the server
- Server sends yes/no along with permissionToken (unique key + unique algo) (JWT Tokens)
- Client can use token to attach it in future request.
