postcss
-------

(docs)[https://github.com/postcss/postcss]


postcss modules
---------------
//make sure postcss-import is installed

npm install postcss-import --save-dev

//use modules to style each area of the page, keep shit clean, sanitary

create "modules" folder in the same directory of the working styles.css
```
modules > _large-hero.css //underscore always represents a partial file
```
```
//inside styles.css at the top!
@import "modules/_large-hero";
@import "base/_global.css";
//to include an installed package (inside "node_modules" folder) with post css is this simple..
@import "normalize.css";
```




-

postcss nesting
---------------
// & in postcss nesting prints the outer class name
//ex

.large-hero {
  position: relative;

  &__text-content {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width:100%;
    text-align: center;
  }
}

//display.....
.large-hero {
  position: relative;
}

.large-hero__text-content {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
  left: 0;
  width:100%;
  text-align: center;
  }





-

post css mixins
---------------
//inside base > _mixins.css
```css
@define-mixin atSmall {
@define-mixin atSmall {
  @media (min-width: 530px) {
    @mixin-content;
  }
}

@define-mixin atMedium {
  @media (min-width: 800px) {
    @mixin-content;
  }
}

@define-mixin atLarge {
  @media (min-width: 1200px) {
    @mixin-content;
  }
}
```



-

//inside css module..

.element {

  color: white;

  @mixin atSmall {
    font-size: 4.8rem;
  }

}


-

post css inherit
----------------
//ex

.gray {
  color: gray;
}

.text {
  @inherit: .gray;
}

//yields
.gray,
.text {
  color: gray;
}


-

//ex (multiple)
.gray {
  color: gray;
}

.black {
  color: black;
}

.button {
  @inherit: .gray, .black;
}

//yields
.gray,
.button {
  color: gray;
}

.black,
.button {
  color: black;
}


-

//ex placeholders
%gray {
  color: gray;
}

.text {
  @inherit: %gray;
}

//yields
.text {
  color: gray;
}


-



