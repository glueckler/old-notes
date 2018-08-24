Vue
---

// not necessary if installed with vue-cli
npm i vue

(vue cheetsheet)[https://vuejs-tips.github.io/cheatsheet/]


CLI
---

npm i -g vue cli

```
npm install -g vue-cli
vue init webpack-simple hello-vue
cd hello-vue
npm install
npm run dev # ready to go!
```



-----------------------------



Using Preprocessors
-------------------

(pre processors docs)[https://vue-loader.vuejs.org/en/configurations/pre-processors.html]



-----------------------------





Directives
----------

### v-text

// Updates the element’s textContent.

### v-html

// Updates the element’s innerHTML.

### v-show

// Set the element’s display to none or its original value, depending on the truthy-ness of the binding’s value.

### v-class

```
<span v-class="
  red    : hasError,
  bold   : isImportant,
  hidden : isHidden
"></span>
```

### v-attr

```
<canvas v-attr="width:w, height:h"></canvas>
```
// Falsy values except 0 will remove the attribute.

### v-style

```
<div v-style="myStyles"></div>
```

```
// myStyles can either be a String:
"color:red; font-weight:bold;"
// or an Object:
{
  color: 'red',
  // both camelCase and dash-case works
  fontWeight: 'bold',
  'font-size': '2em'
}
```

```
<div v-style="
  top: top + 'px',
  left: left + 'px',
  background-color: 'rgb(0,0,' + bg + ')'
"></div>
```

### v-on

// The event type is denoted by the argument. 


```
<form v-on:submit.prevent="onSubmit"> ... </form>
```

---

// ex, the v-bind directive is used to reactively update an HTML attribute:
```
<a v-bind:href="url"> ... </a>
```

```
<a v-on:click="doSomething"> ... </a> 
```

### v-model

Create a two-way binding on a form input element. 

### v-if

// ex, Here, the v-if directive would remove/insert the <p> element based on the truthiness of the value of the expression seen
```
<p v-if="seen">Now you see me</p>
```

```
<template v-if="test">
  <p>hello</p>
  <p>world</p>
</template>
```

```
<!--v-if-start-->
<p>hello</p>
<p>world</p>
<!--v-if-end-->
```

### v-repeat

```
<ul>
  <li v-repeat="users">
    {{name}} {{email}}
  </li>
</ul>
```

```
<ul>
  <li v-repeat="user : users">
    {{user.name}} {{user.email}}
  </li>
</ul>
```

```
<ul>
  <li v-repeat="user in users">
    {{user.name}} {{user.email}}
  </li>
</ul>
```

### v-transition

// Notify Vue.js to apply transitions to this element. 

### v-ref

// Register a reference to a child component on its parent for easier access. 

### v-el

// Register a reference to a DOM element on its owner Vue instance for easier access. e.g. <div v-el="hi"> will be accessible as vm.$$.hi.

### v-pre

// Skip compilation for this element and all its children. 

### v-cloak

// This property remains on the element until the associated ViewModel finishes compilation. 




----------------------




Event Handling
--------------

(vue event handling)[https://vuejs.org/v2/guide/events.html]


### v-on event modifiers
```
.stop 
.prevent
.capture
.self
.once
```

// ex,
```
<!-- the click event's propagation will be stopped -->
<a v-on:click.stop="doThis"></a>

<!-- the submit event will no longer reload the page -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- modifiers can be chained -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- just the modifier -->
<form v-on:submit.prevent></form>

<!-- use capture mode when adding the event listener -->
<!-- i.e. an event targeting an inner element is handled here before being handled by that element -->
<div v-on:click.capture="doThis">...</div>

<!-- only trigger handler if event.target is the element itself -->
<!-- i.e. not from a child element -->
<div v-on:click.self="doThat">...</div>

<!-- the click event will be triggered at most once -->
<a v-on:click.once="doThis"></a>
```

// Order matters when using modifiers because the relevant code is generated in the same order. 

// Therefore using @click.prevent.self will prevent all clicks while @click.self.prevent will only prevent clicks on the element itself.


---

### v-on key modifiers

// check for common key codes

```
.enter
.tab
.delete (captures both “Delete” and “Backspace” keys)
.esc
.space
.up
.down
.left
.right
```

// ex,
```
<input v-on:keyup.enter="submit">

<!-- also works for shorthand -->
<input @keyup.enter="submit">
```





-------------------------------------------------------------------------




Template
--------


// ex, 
```
<span>Message: {{ msg }}</span>
```


Using expressions
-----------------

// One restriction is that each binding can only contain one single expression

// Template expressions are sandboxed and only have access to a whitelist of globals such as Math and Date

// ex, 
```
{{ number + 1 }}

{{ ok ? 'YES' : 'NO' }}

{{ message.split('').reverse().join('') }}

<div v-bind:id="'list-' + id"></div>
```


v- functions
------------


### v-once

// one-time interpolations that do not update on data change

// ex,
```
<span v-once>This will never change: {{ msg }}</span>
```

---


### v-html

// output real HTML

// ex,
```
<p>Using v-html directive: <span v-html="rawHtmlData"></span></p>
```

---


### v-bind

// ex, 
```
<div v-bind:id="dynamicId"></div>
```

// In the case of boolean attributes, where their mere existence implies true, v-bind works a little differently
```
<button v-bind:disabled="isButtonDisabled">Button</button>
```

### v-bind shorthand

```
<!-- full syntax -->
<a v-bind:href="url"> ... </a>

<!-- shorthand -->
<a :href="url"> ... </a>
```




-----------------------------------------------------------------------------




script
------

### export default

export default {

  name: 'Component-Name' // name, otherwise it will receive the name given in local registration
  
  data () {
    return {
      msg: 'Hello world!'
    }
  }
}










