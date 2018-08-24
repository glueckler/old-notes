Ruby on Rails
-------------

(version 5 doc)[http://guides.rubyonrails.org/getting_started.html]

rails --version

// to interact with your project

rails console


---------------------


### generators

// see a list of rails generator
```
rails g
```




----------------------




### Routes

rake routes

//rails 4.2 route diagram

// ex,
```ruby
Rails.application.routes.draw do

  root to: 'products#index'

  resources :products, only: [:index, :show]

  resources :categories, only: [:show]

  resource :cart, only: [:show] do
    put    :add_item
    delete :remove_item
  end

  resources :orders, only: [:create, :show]

  namespace :admin do
    root to: 'dashboard#show'
    resources :products, except: [:edit, :update, :show]

    resources :categories


  end
```




-------------------


### Controllers

// use rails generator to create new controllers

// This creates five files and one empty directory (see website)

// ex,
```ruby
bin/rails generate controller Articles
```

// ex -- check this reference might be inaccurate...
```
rails generate controller Admin::Categories
```


// destroy controller
```
rails destroy controller <name>
```


---


### new

```ruby
def new
  @product = Product.new
end
```


---

### create

```ruby
def create
  @product = Product.new(product_params)

  if @product.save
    redirect_to [:admin, :products], notice: 'Product created!'
  else
    render :new
  end
end

private

def product_params
  params.require(:product).permit(
    :name,
    :description,
    :category_id,
    :quantity,
    :image,
    :price
  )
end
```


---


### destroy

```ruby
def destroy
  @product = Product.find params[:id]
  @product.destroy
  redirect_to [:admin, :products], notice: 'Product deleted!'
end
```




--------------------



### Views

// name files in a directory matching the type of device in question

// ex, inside products directory.. show.html.erb

```ruby
<section class="products-show">

  <header class="page-header">
    <h1><%= link_to @product.category.name, @product.category %> &raquo; <%= @product.name %></h1>
  </header>

  <article class="product-detail">

    <div class="row">

      <div class="col-sm-4">
        <%= image_tag @product.image.url, class: 'main-img' %>
      </div>

      <div class="col-sm-8">
        <dl class="dl-horizontal">
          <dt>Name</dt>
          <dd><%= @product.name %></dd>
          <dt>Description</dt>
          <dd><%= @product.description %></dd>
          <dt>Quantity</dt>
          <dd><%= @product.quantity %></dd>
          <dt>Price</dt>
          <dd><%= @product.price %></dd>
        </dl>
      </div>
    </div>

  </article>

</section>

```




------------------




### Models

// generator
```ruby
bin/rails generate model [name] [fields]
```

// ex
```ruby
bin/rails generate model Article title:string text:text
```

// couple more data types

integer

datetime


---

// after running the generator it's possible to then migrate a new database..

```ruby
bin/rake db:migrate
```


---

// destroying model

// rollback database
```ruby
rake db:rollback
```

// and also destroy the model files
```ruby
rails destroy model <model_name>
```



---


### Associations

// has_one
// ex,
```ruby
class Supplier < ActiveRecord::Base
  has_one :account
end
```

---

// has_many
// ex,
```ruby
class Customer < ActiveRecord::Base
  has_many :orders
end
```

// belongs_to
// ex,
```ruby
class LineItem < ActiveRecord::Base
  belongs_to :order
  validates :order, presence: true
end
```




-----------------------


### Database

// migrate database

```
bin/rake db:migrate
```

// to seed your database

// Warning db:reset doens't run migrate after recreating db schema

// Therefor if the original schema is being changed with your migration, you may have difficulty running db:seed
```
rake db:reset
```

// this kinda does the same thing
```
rake db:drop db:create db:migrate db:seed
```




---------------------------



### forms

// new user registration form
```
<%= form_for :user, url: '/users' do |f| %>

  Name: <%= f.text_field :name %>
  Email: <%= f.text_field :email %>
  Password: <%= f.password_field :password %>
  Password Confirmation: <%= f.password_field :password_confirmation %>
  <%= f.submit "Submit" %>

<% end %>
```

---

// a product review form
```
<%= form_for [@product, @review] do |f| %>
  <h3>Rating</h3>
  <%= f.select :rating, [1, 2, 3, 4, 5]%>
  <h3>Description</h3>
  <%= f.text_field :description %>
  <%= f.submit "Leave Review!" %>
<% end %>
```

---


// a delete form
```
<%= form_tag(review, method: "delete") do %>
  <%= submit_tag("Delete") %>
<% end %>
```


---

// ERRORS

```
<% if f.object.errors.any? %>
  <div class="alert alert-danger">
    <strong>The following errors prevented saving your review:</strong>
    <ul>
      <% f.object.errors.full_messages.each do |error| %>
        <li><%= error %></li>
      <% end %>
    </ul>
  </div>
  ```

---------



### Links
```ruby
link_to 'Scaffolds', scaffold_path

link_to 'Scaffolds', :scaffolds

or

link_to 'Scaffolds', Scaffold
```

```ruby
link_to 'New Scaffold', new_scaffold_path

link_to 'New Scaffold', [:new, :scaffolds]

or

link_to 'New Scaffold', :new_scaffolds
```

```ruby
link_to 'Scaffold', scaffold_path(@scaffold)

link_to 'Scaffold', @scaffold
```

```ruby
link_to 'Edit Scaffold', edit_scaffold_path(@scaffold)

link_to 'Edit Scaffold', [:edit, @scaffold]
```

















