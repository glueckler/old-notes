const _ = require('lodash')

function customizer(objValue, srcValue) {
  if (objValue !== srcValue) {
    if (Array.isArray(objValue)) {
      if (!_.includes(objValue, srcValue)) {
        return objValue.push(srcValue)
      }
    } else {
      return [objValue, srcValue];
    }
  }
  return objValue
}

var arr = [
{
  name: 'augue luctus tincidunt nulla',
  description: 'sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et',
  img_path: 'http://dummyimage.com/127x229.png/ff4444/ffffff',
  tagName: 'Furniture'
},

{
  name: 'augue luctus tincidunt nulla',
  description: 'sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et',
  img_path: 'http://dummyimage.com/127x229.png/ff4444/ffffff',
  tagName: 'Garden'
},

{
  name: 'augue luctus tincidunt nulla',
  description: 'sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et',
  img_path: 'http://dummyimage.com/168x154.bmp/ff4444/ffffff',
  tagName: 'Furniture'
},

{
  name: 'augue luctus tincidunt nulla',
  description: 'sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et',
  img_path: 'http://dummyimage.com/168x154.bmp/ff4444/ffffff',
  tagName: 'Garden'
}
]
const please = arr.reduce((a,b) => {
  return _.mergeWith(a, b, customizer);
})

console.log(please)
