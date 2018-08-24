react jsx
---------

(docs)[https://reactjs.org/docs/jsx-in-depth.html]


### app.js





### Basic jsx transpiling

// ex
```javascript
<MyButton color="blue" shadowSize={2}>
  Click Me
</MyButton>
```

// converts to this..

```javascript
React.createElement(
  MyButton,
  {color: 'blue', shadowSize: 2},
  'Click Me'
)
```


---

// You can also use the self-closing form of the tag if there are no children

// ex
```javascript
<div className="sidebar" />
```

// into..
```javascript
React.createElement(
  'div',
  {className: 'sidebar'},
  null
)
```



---



### basic scopes

// The first part of a JSX tag determines the type of the React element.

// Capitalized types indicate that the JSX tag is referring to a React component

// React must be in scope, event hough React (and customButton) are not directly refereneced here..

```javascript
import React from 'react';
import CustomButton from './CustomButton';

function WarningButton() {
  // return React.createElement(CustomButton, {color: 'red'}, null);
  return <CustomButton color="red" />;
}
```



---

### dot notation

```javascript
import React from 'react';

const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  }
}

function BlueDatePicker() {
  return <MyComponents.DatePicker color="blue" />;
}
```


---

### Capitalization

// When an element type starts with a lowercase letter, it refers to a built-in component like <div> or <span>

// naming components should be done with a capital letter

```javascript
import React from 'react';

// Wrong! This is a component and should have been capitalized:
function hello(props) {
  // Correct! This use of <div> is legitimate because div is a valid HTML tag:
  return <div>Hello {props.toWhat}</div>;
}

function HelloWorld() {
  // Wrong! React thinks <hello /> is an HTML tag because it's not capitalized:
  return <hello toWhat="World" />;
}
```

---------------------------------









