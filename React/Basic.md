# React

- A JS Library for building UI
- High level js code. Easy to debug and easy to write.
- since just JS makes application complex.
- React is all about components. For routing, need other libraries

- UI state becomes difficult to handle with Vanilla JS
- highly efficient and fast

## Components:

- Re-usability
- seperation of concern
- one focus or task to do
- configure

## single page application;

- one html
- content is handled by js
- component Concept

## useState vs this.setState (imp difference)

```tsx
this.state = {
  name: "sharad",
  age: 23,
};

// to change:
this.setState({ name: "sourabh" })[
  // final state:
  // {
  //  name:'sourabh',
  //  age:23
  // }

  (person, setPerson)
] = useState({ name: "sharad", age: 23 });
setPerson({ name: "sourabh" });
// final state:
// {
//     name:'sourabh',
// }
```

- can be used multiple times

## Styling:

1. using .css file
2. inline style --> const style = {backgroundColor:'Red'} and pass it in element

## How React renders DOM:

- each component is just a function at the end which returns JSX
- each components are called in parent component
- so it creates a DOM by parsing all the jsx initially

- but react does it initially and does not repeat that. That is the reason:

```
  let titlee = 'initial title'

  onClickHandler = () => { title = 'new title';}

  return <h1>{title}</h1> // always points to initial title even though we button is clicked
```

- So to resolve that issue, state was instroduced to let react know which component needs to be re-rendered

## Lists:

- if keys are not used, react dont know which one to update, so it renders the whole list again.

## Notes:

- service-worker - pre-cache the script files

```
  - performance
  - enable fast loading (regardless of the network), offline access, push notifications, and other capabilities.
  - js file hat run every time. It keeps running even you close the browser.Due to this we can send push notification,offline mode.
```

- React watches for state and props change
- we can not use for in label element since for is reserved word. So we use htmlFor

## propTypes:

```
prop-types package
        -- ComponentName.propTypes = {
            click: PropTypes.func,
            name: PropTypes.string,
            age: PropTypes.number
        }
```

## React Hooks:

- all the react hooks must be called inside the components directly (not nested)

## useState:

```
    const [value,setValue] = useState('initial value')
```

- useState tells react to re-render the component
- returns an array of value and function to change the value
- React registers this value in its memory for that component and whenever setValue is called, react re-avaluate that component wherever value is used
- setValue callback function is aynchronous
- per component instance basis
- use it more for rendering stuff not for playing local variables

- For states, which depends on previous state:

```
        useState((prevState) => {return {...prevState}})
```

### example:

```jsx
    function SomeComponent() {
        log('component called')

        function clickHandler() {
            setValue('...')
        }

        return (... {value} ...)
    }
```

- whenever button is clicked, SomeComponent will be re-evaluated again
- when useState is executed, React knows that he has to use the latest snapshot of the variable
- but in DOM only value part will be rendered

## Rules of Hooks

- Only call in react functions
- Only call in react custom hooks

## Behind the scenes:

- coz of useState, react stores the initialized value
- when setState is called, react doesn't update the state immediately
- it schedules a state update process
- it might have other priority works to do
- most cases it happens instantly

## state batching

```jsx
if() {
    setState1(...)
    setState2(...)
}
```

- react have 1 batch process to update both states

## style ways:

- inline style:

```html
<h1 style={{color: 'red'}}>
```

## style basics:

- we can not use pseudo selectors (media/hover/active) in instyle way
- we can dynamically change style object (conditionally)
- className can also set dynamically

## jsx limitations: one return root element

- Fragments
- HOC to return children
- return array

## React Portals:

### Problem:

- Modals render into the screen even it is not used next to the other components
- Modals are just overlay on screen
- HTML DOM is not clean
- modal, backdrop, sidedarwer, menubar

### Solution:

#### React Portal (react-dom feature)

- Portal renders the form somewhere else in DOM
- Portals need two things:

  - A place to port the components
  - component

```jsx
// index.html:
  <div id="backdrop-root"></div>

// component file:
        const modal = props => return jsx
        render

        {ReactDOM.createPortal(
        <Backdrop onClick={props.resetError} />,
        document.getElementById("backdrop-root")
      )}
```

## Refs: useRef()

- (better to use it to read the values)

```jsx
const input = useRef();

<input ... ref={input}>
```

- use input anywhere in code
- Allows to work with DOM Elements.
- updating the state on every key stroke is bad
- refs has current property always, which stores DOM Node.

## useEffects:

```jsx
useEffetc(() => {..}, [dependencies])
```

- it runs after component gets rendered
- useEffect with no depenncies hsa no meaning
- to take action on something happened

- cleanup runs before every new side effects run
- for empty dependencies, cleanup will be eexcuted on umount

```jsx
useEffect(() => {}, [runsOnChangeThisData]);

useEffect(() => {}, []); // runs for the first time

useEffect(() => {
  return () => {
    // clean up work
  };
}, []); // runs for the first time

useEffect(() => {
  return () => {
    // reset operations for each rendering
  };
});
```

## useReducers:

```jsx
const [state, dispatch] = useReducer(reducer, initialState, initFunction);
```

- handle complex state.
- should be used where state depends on previous state

- reducer should be created outside the component

## Axios Request

```jsx
await axios.get(url);
await axios.post(url, body);
await axios.delete(url);
```

## interceptors:

- globally execute some code on any http req
- executing on each and every req on the app
- add interceptor in parent component (index.js)

```jsx
axios.interceptors.request.use((req) => {
  //edit the req
  // can have header
  return req;
});
// always return req, otherwise it will block

// error on interceptors
axios.interceptors.request.use(
  (req) => {
    return req;
  },
  (error) => {
    // only works when sending req fails
    // when no internet
    return Promise.reject(error);
  }
);

// response on interceptor
axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);
```

## set some global conf to axios:

```ts
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common["Authorization"] = "TOKEN";
axios.defaults.headers.post["Content-Type"] = "application/json";
```

## Create Context:

```

```

```jsx
const SomeContext = React.createContext({
  isAuth: false,
  login: () => {},
});
```

- SomeContext is an object which will contain a component

## Provide Context:

```jsx
        <SomeContext.Provider value = {isAuth: true,login: this.login}>
            <A/>
        </SomeContext.Provider>
```

## Hook Context method:

```jsx
const context = useContext(SomeContext);
```

## Context Limitiltions:

- Not optimized for high frequently changes

## React Forward Refs:

- Focus on invalid input components

### Example:

```jsx
// Main.js
// call someRef.focus() is allowed

        <Input ref={someRef}>
```

```jsx
// Input.js
        const Input = React.forwardRef((props,ref) => {
            const focus = () => {
                anotherRef.current.focus();
            }

            useImperativeHandle(ref,() => {
                return {
                    ... mapping
                }
            })

            return <input ref={anotherRef}>
        })
```

## React Behind the scenes:

- Virtual DOM
- Re-evalution components !== Re-rendering DOM
- React DOM renders differences

- state change results in re-evaluate the components
- state change results in re-evaluate the child components as well

- this costs some performance.

## Preventing un-necessary re-evalutaion

- wrap child components with React.memo()
- memo tells react that, if the component is getting changed props, then only render the component
- memo also has cost performance.

- it is more useful if re-rendered component has more level of tree.
- good for larger apps

- stores the snapshot of funcitonal component
- re-render only when input runsOnChangeThisData
- if parents change...return the same prev component
- export default React.memo(ComponentName)

## Good Question:

```jsx
// App.js
const someFn = () => {}
<Button onClick={someFn}>
```

- even though Button uses memo, it is re-evatuated.
- because, function is re-created
- functions are objects at last.
- memo works with primitive values ?
- soln is in next topic.

## useCallBack:

- allows us to store fn across compoennt execution
- fn not created with each execution

### example:

```jsx
const fn = useCallBack(() => {...},[dependencies])
```

## useMemo:

- same as useCallBack but work with objects and arrays
- memoize other datatypes

```jsx
<Comp arr={useMemo(() => [1,2,3],[])}>
```

```jsx
// Comp.js

    const sort = useMemo(() => {return sortedArray},[..])
```

- should be used for complex logic like sorting
