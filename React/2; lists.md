lists and keys
--------------

(lists docs)[https://reactjs.org/docs/lists-and-keys.html]


### rendering multiple components

// You can build collections of elements and include them in JSX using curly braces {}

```javascript
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);
```

---

// We include the entire listItems array inside a <ul> element, and render it to the DOM

```javascript
ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('root')
);
```



### Basic List Component

// Usually you would render lists inside a component.

```javascript
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```


---

// A “key” is a special string attribute you need to include when creating lists of elements

```javascript
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```



-------------------------



### example

// we have an array of posts


// PostSeries.jsx

```
render() {
  const posts = this.props.posts.map(post => {
    return <Post
      key={ post.id }
      user={ post.user }
      content={ post.content }
      date={ post.date }
      likes={ post.likes } />
  });

  return (
    <section>
      { posts }
    </section>
  )
}
```

// Posts.jsx

```
render() {
  return (
    <article>
      <header>
        <img src={ this.props.user.avatar } />
        <span>
          <div>{ this.props.user.full }</div>
          <div>{ this.props.date }</div>
        </span>
      </header>
      <p>{ this.props.content }</p>
    </article>
  )
}
```





















