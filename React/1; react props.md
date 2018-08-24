Props
-----

// You can pass any JavaScript expression as a prop, by surrounding it with {}
```javascript
<MyComponent foo={1 + 2 + 3 + 4} />
```

// if statements and for loops aren't expression so they can't be used, instead put in surrounding code

```javascript
function NumberDescriber(props) {
  let description;
  if (props.number % 2 == 0) {
    description = <strong>even</strong>;
  } else {
    description = <i>odd</i>;
  }
  return <div>{props.number} is an {description} number</div>;
}
```


---

### String Literals

// String literals can be passes as a prop

// ex, these two lines are equivalent
```javascript
<MyComponent message="hello world" />

<MyComponent message={'hello world'} />
```

// When you pass a string literal, its value is HTML-unescaped

---

### props default to true

// these are equivalent, but avoid using {true} in jsx as it looks alot like es6 shorthand

```javascript
<MyTextBox autocomplete />

<MyTextBox autocomplete={true} />
```

