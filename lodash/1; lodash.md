lodash
------


### mergeWith


```javascript
const _ = require()

function customizer(objValue, srcValue) {
  if (objValue !== srcValue) {
    return [objValue, srcValue];
  }

var object = {
    name: 'augue luctus tincidunt nulla',
    description: 'sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et',
    img_path: 'http://dummyimage.com/127x229.png/ff4444/ffffff',
    tagName: 'Furniture'
};
 
var other = {
    name: 'augue luctus tincidunt nulla',
    description: 'sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et',
    img_path: 'http://dummyimage.com/127x229.png/ff4444/ffffff',
    tagName: 'Garden'
};
 
_.mergeWith(object, other, customizer);
```
