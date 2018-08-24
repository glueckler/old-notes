Children
--------

### String Literals

// In JSX expressions that contain both an opening tag and a closing tag..

// the content between those tags is passed as a special prop: props.children

// You can put a string between the opening and closing tags and props.children will just be that string.

// This is valid JSX, and props.children in MyComponent will simply be the string "Hello world!"

// HTML is unescaped

```javascript
<MyComponent>Hello world!</MyComponent>
```

```javascript
<div>This is valid HTML &amp; JSX at the same time.</div>
```


---


### children

// you can provide more JSX elements as the children

```javascript
<MyContainer>
  <MyFirstComponent />
  <MySecondComponent />
</MyContainer>
```

// this is both valid JSX and valid HTML..

```javascript
<div>
  Here is a list:
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
</div>
```


---

### Javascript expressions as Children

// You can pass any JavaScript expression as children, by enclosing it within {}

// This is often useful for rendering a list of JSX expressions of arbitrary length


```javascript
function Item(props) {
  return <li>{props.message}</li>;
}

function TodoList() {
  const todos = ['finish doc', 'submit pr', 'nag dan to review'];
  return (
    <ul>
      {todos.map((message) => <Item key={message} message={message} />)}
    </ul>
  );
}
```

// JavaScript expressions can be mixed with other types of children.

```javascript
function Hello(props) {
  return <div>Hello {props.addressee}!</div>;
}
```


---


### Functions as Children


// props.children works just like any other prop in that it can pass any sort of data, not just the sorts that React knows how to render

```javascript
// Calls the children callback numTimes to produce a repeated component
function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}

function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {(index) => <div key={index}>This is item {index} in the list</div>}
    </Repeat>
  );
}
```


---


### Booleans Null and Undefined (are Ignored)

// false, null, undefined, and true are valid children. They simply don’t render

// This can be useful to conditionally render React elements..

// This JSX only renders a <Header /> if showHeader is true
```javascript
<div>
  {showHeader && <Header />}
  <Content />
</div>
```


// some “falsy” values, such as the 0 number, are still rendered by React
```javascript
<div>
  {props.messages.length > 0 &&
    <MessageList messages={props.messages} />
  }
</div>
```

//  if you want a value like false, true, null, or undefined to appear in the output, you have to convert it to a string first:
```javascript
<div>
  My JavaScript variable is {String(myVariable)}.
</div>
```


