react components
----------------

(docs)[https://reactjs.org/docs/components-and-props.html]
(methods docs)[https://reactjs.org/docs/react-component.html]


// Conceptually, components are like JavaScript functions.

// They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

// not usually seen as functions like this..

// ex, basic component
```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```


---

// typically a component will extends Component

// here we extend React.Component (because it's the root?)

// ex, ES6 class component
```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```




----------------------------------------

Mounting
--------



### constructor

// always call super(props) within a constructor

```javascript
constructor(props) {
  super(props)
  this.state = {
    messages: props.data.messages,
    currentUser: props.data.currentUser,
    loaded: false
  }
}
```



----------------------------------------


### this.state

// This is where we create the constructor() in the App.jsx class.

// The constructor is the only place where we make a direct assignment to this.state

// If you don’t use something in render(), it shouldn’t be in the state.


// Updating State

// Correct way, do not access this.state

this.setState({comment: 'Hello'});


// ex
```javascript
class App extends Component {
  constructor(props) {
    /*
       If we add a constructor we need to call
       `super()` to also call the constructor
       of the Component class.
    */
    super(props);

    /* If we need access to props, we use the
       value passed to the constructor instead
       of this.props. Everywhere else in the class
       you use this.props.
    */

    /*
       The state of our component has a single key
       called posts that contains an empty array.
    */
    this.state = {
      posts: []
    }
  }
}
```





----------------------------------------


### render


```javascript
render() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
    </div>
  );
}
```



----------------------------------------


### componentDidMount()

// The componentDidMount() hook runs after the component output has been rendered to the DOM.

// This is a good place to set up a timer


----------------------------------------


### componentWillUnmount()






----------------------------------------------------------






Updating
--------




### componentWillReceiveProps()



### shouldComponentUpdate()



### componentWillUpdate()


### render()



### componentDidUpdate()







---------------------------------------------------------



Unmounting
----------

### componentWillUnmount()

// This method is called when a component is being removed from the DOM:





---------------------------------------------------------

Error Handling
--------------

### componentDidCatch()

// This method is called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.


---------------------------------------------------------



// ex

```javascript
import React, { Component } from 'react';

export default class TimerComponent extends Component {
  // set the initial state to indicate that that the timer is not loading
  // React will call the functions in the following order when it mounts the component:
  //   constructor
  //   componentWillMount (not used in this component)
  //   render
  //   componentDidMount
  constructor(props) {
    super(props);
    this.state = {loading: false};
  }

  // Called after the component was rendered and it was attached to the DOM.
  // This is a good place to make ajax requests or setTimeout.
  componentDidMount() {
    setTimeout(() => {
      this.setState({loading: true})  // change the state. this calls render() and the component updates.
    }, 3000)
  }

  // Called any time the props or state changes. The jsx elements returned in this
  // method are rendered in the DOM.
  render() {
    if(this.state.loading) {
      return <h1>Loading...</h1>
    } else {
      return <h1>3 seconds have elapsed and page is loaded</h1>
    }
  }
}
```





