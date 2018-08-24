CSS Forms
---------


### Selecting with attr

// ex, an input that gets longer when focused
```CSS
input[type=text] {
    width: 100px;
    transition: ease-in-out, width .35s ease-in-out;
}

input[type=text]:focus {
    width: 250px;
}
```




---



### caret

```css
input,
textarea,
[contenteditable] {
  caret-color: red;
}
```



---


::placeholder
-------------


```css
::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: pink;
}
::-moz-placeholder { /* Firefox 19+ */
  color: pink;
}
:-ms-input-placeholder { /* IE 10+ */
  color: pink;
}
:-moz-placeholder { /* Firefox 18- */
  color: pink;
}
```


// scope it to style specific forms
```css
input[type="email"].big-dog::-webkit-input-placeholder {
  color: orange;
}
```


---

// supported styles

```css
font properties

color

background properties

word-spacing

letter-spacing

text-decoration

vertical-align

text-transform

line-height

text-indent

opacity
```


---


### :placeholder-shown vs ::placeholder

// :placeholder-shown { }

// selects the input element when placeholder text is being shown

---

// ::placeholder { }

// styles the placeholder text



------------------------


















