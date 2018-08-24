react events
------------

(docs)[https://reactjs.org/docs/events.html]



Form Events
-----------

(form docs)[https://reactjs.org/docs/forms.html]

### onChange


### onInput


### onInvalid


### onSubmit


```
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```



---------------------------




keyboard events
---------------

(docs)[https://reactjs.org/docs/events.html#keyboard-events]

### onKeyDown


### onKeyPress


### onKeyUp








