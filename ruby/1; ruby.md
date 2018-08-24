ruby
====

(learn X in Y)[https://learnxinyminutes.com/docs/ruby/]


CLI
---

ruby --version

which ruby

irb //enter REPL

quit // quite REPL

gem // instructions on gem

gem list // list gems


---


rvm
---

rvm

rvm list

rvm install 2.1.1 //install and use ruby v 2.1.1





puts p and pp
-------------

puts # prints

p # prints the output of the method #inspect

pp # prints with #pretty_inspect

// pp requires pry
// require 'pry'



---



loops
-----

```
# next_loop.rb

i = 0
loop do
  i += 2
  if i == 4
    next        # skip rest of the code in this iteration
  end
  puts i
  if i == 10
    break
  end
end
```


---


Constants
---------

// variables in ruby beginning with a capital letter are constants

```
module Scientology
  FOUNDED_BY = "L. Ron Hubbard"
end
```



---------------------------------



Objects and classes
-------------------

// initializing..

// before adding behavior methods we could give it some initial values..

// ex
```
class Person
  def initialize(name)
  end
end
```


---


// ex
```
class Invoice

  def initialize(subtotal)
    @subtotal = subtotal
    @items    = []
  end

  def with_tax
    tax_amount = @subtotal * 0.20
  end

  def add_item(item)
    @items << item
    @subtotal += item.price
  end

end
```

// we could now initialize an invoice by using its initializer
```
invoice1 = Invoice.new(100)
```


### attr_ (reader, writer)

// ex
```
attr_writer :age

That gets translated into:

def age=(value)
  @age = value
end
```

```
If you write:

attr_reader :age

That gets translated into:

def age
  @age
end
```

```
If you write:

attr_accessor :age

That gets translated into:

def age=(value)
  @age = value
end

def age
  @age
end
```



---------------------------------





### Enumerables (and Arrays)

// A method belonging to Array, and other collection classes.

// It's also known as an iterator, cycling through a code of block that acts or depends on each element in the collection



select
------

// (array)

// Returns a new array containing all elements of ary for which the given block returns a true value.

```
[1,2,3,4,5].select { |num|  num.even?  }   #=> [2, 4]

a = %w{ a b c d e f }
a.select { |v| v =~ /[aeiou]/ }  #=> ["a", "e"]
```


---

// (enumerable)

// Returns an array containing all elements of enum for which the given block returns a true value.

```
(1..10).find_all { |i|  i % 3 == 0 }   #=> [3, 6, 9]

[1,2,3,4,5].select { |num|  num.even?  }   #=> [2, 4]
```




---------------------










