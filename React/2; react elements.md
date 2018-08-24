react elements
--------------

(elements)[https://reactjs.org/docs/rendering-elements.html]

// An element describes what you want to see on the screen

// Unlike browser DOM elements, React elements are plain objects, and are cheap to create. React DOM takes care of updating the DOM to match the React elements

// ex, basic

```javascript
const element = <h1>Hello, world</h1>;
```


----


### root elements

ex,
```javascript
<div id="root"></div>
```

// Applications built with just React usually have a single root DOM node




------



### reactDOM.render()

// To render a React element into a root DOM node, pass both to ReactDOM.render()

```javascript
const element = <h1>Hello, world</h1>;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```



--------------------------------





Updating
--------

// React elements are immutable

// Once you create an element, you can’t change its children or attributes

// React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state

























