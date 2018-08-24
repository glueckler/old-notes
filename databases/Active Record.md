Active Record
=============

(basics)[http://edgeguides.rubyonrails.org/active_record_basics.html]



Read
----

// some methods..

```ruby
Tweet.find(2)
# Returns tweet with id of 2

Tweet.find(3, 4, 5)
# Returns an array of tweets

Tweet.first

Tweet.last

Tweet.all

Tweet.sum

Tweet.count

Tweet.order(:zombie)

Tweet.limit(10)

Tweet.where(zombie: "ash")

Person.average(:age)
```


---

### Method Chaining

// ex
```ruby
Tweet.where(zombie: "ash").order(:status).limit(10)
```

---


// ex
```ruby
# Executes the following SELECT and returns an instance attributes for that record:
#   SELECT * FROM users WHERE email = 'kvirani@lighthouselabs.ca' LIMIT 1;
user = User.find_by(email: 'kvirani@lighthouselabs.ca')

# These are just like an attr_writers, performing changes in memory (no UPDATE sql)
user.name  = 'Khurram'
user.email = 'kvirani@gmail.com'

# Executes the following UPDATE statement:
#   UPDATE users SET name = 'Khurram', email = 'kvirani@gmail.com' WHERE id = 1;
# (Assuming id of record was 1)
user.save
```


---


### using relationships


// ex, create tweet
```ruby
# get zombie ash
ash = Zombie.find(1)

# create new tweet
t = Tweet.create(status: "your eyeballs mmmm",
                 zombie: ash
                )

```


// ex find
```ruby
# search for tweet
t = Tweet.find(5)

# see zombie that tweeted that tweet
t.zombie

# find zombie name that tweeted
t.zombie.name
```



----



Create
------


// ex,
```ruby
# the id gets set for us
t = Tweet.new
t.status = "i <3 brains."
t.save
```

// or
```ruby
t = Tweet.new(
  status: "i <3 brains",
  zombie: "Jim")
t.save
```

// or
```ruby
# makes new table and tweet
Tweet.create(status: "I <3 brains", zombie: "Jim")
```


---



Update
------

// ex
```ruby
t = Tweet.find(3)
t.zombie = "EyeballChomper"
t.save
```

// alt syntax
```ruby
t = Tweet.find(2)
t.attributes = {
  status: "Can I munch your eyeballs?",
  zombie: "Eyeballchomper" }
t.save
```

// alt
```ruby
t = Tweet.find(2)
t.update(
  status: "Can I mucnch.."
  zombie: "EyeballChomper")
```




Delete
------


// ex
```ruby
t = Tweet.find(2)
t.destroy
```

// alt
```ruby
Tweet.find(2).destroy
```

// delete all
```ruby
Tweet.destroy_all
```



---


Validations
-----------

(docs)[http://guides.rubyonrails.org/active_record_validations.html]



// inside app/models/tweet.rb
```ruby
class Tweet < ActiveRecord::Base
  validates_presence_of :status, :other_stuff
end
```

// now when creating an invalid (tweet must have a status) tweet..

// t = tweet.new

// t.save
=> false

// t.errors.messages
=> {status:["can't be blank"]}

---

// a better syntax for more specific validations
```ruby
validates :status,
          presence: true,
          length: { minimum: 3 }
          uniqueness: true
          numericality: true
          format: { with: /.*/ }
          acceptance: true
          confirmation: true
```

---


//  inclusion
```ruby
validates :hourly_rate,
          inclusion: { in: 40..200 }
```


---

// numericality

// only integer means no decimals
```ruby
validates :annual_revenue,
          numericality: { only_integer: true, greater_than: 0 }
```

```
:greater_than - Specifies the value must be greater than the supplied value. The default error message for this option is "must be greater than %{count}".

:greater_than_or_equal_to - Specifies the value must be greater than or equal to the supplied value. The default error message for this option is "must be greater than or equal to %{count}".

:equal_to - Specifies the value must be equal to the supplied value. The default error message for this option is "must be equal to %{count}".

:less_than - Specifies the value must be less than the supplied value. The default error message for this option is "must be less than %{count}".-

:less_than_or_equal_to - Specifies the value must be less than or equal to the supplied value. The default error message for this option is "must be less than or equal to %{count}".

:other_than - Specifies the value must be other than the supplied value. The default error message for this option is "must be other than %{count}".

:odd - Specifies the value must be an odd number if set to true. The default error message for this option is "must be odd".

:even - Specifies the value must be an even number if set to true. The default error message for this option is "must be even".
```



// length
```ruby
class Person < ApplicationRecord
  validates :bio, length: { maximum: 1000,
    too_long: "%{count} characters is the maximum allowed" }
end
```


---


### Errors

```ruby
store1 = Store.new(
  name: 'Store without Nma',
  annual_revenue: 300000,
  mens_apparel: true,
  womens_apparel: true
  )
store1.save!
store1.errors.full_messages
```



---


Models (class)
--------------


// a Zombie has many Tweets

// ex, inside app/models/zombie.rb
```ruby
class Zombie <
ActiveRecord::Base
  has_many :tweets
end
```

// a Tweet belongs to a Zombie

// ex, inside app/modesl/tweet.rb
```ruby
class Tweet < ActiveRecord::Base
belongs_to :zombie
end
```

---


```ruby
class User < ActiveRecord::Base
  has_many :chatroom_memberships
  has_many :chatrooms, through: :chatroom_memberships
end

class Chatroom < ActiveRecord::Base
  has_many :chatroom_memberships
  has_many :users, through: :chatroom_memberships
end

class ChatroomMembership < ActiveRecord::Base
  belongs_to :user
  belongs_to :chatroom
end
```

















