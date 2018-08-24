rspec
-----




### with rails..

// add rspec as a dependancy in Gemfile, and run bundle install
```
group :development, :test do
  gem 'rspec-rails', '~> 3.5'
  # ...
end
```

// then run a one time generator
```
bin/rails generate rspec:install
```

// you can generate a binstub
```
bundle binstubs rspec-core
```

// Create the test pg database
```
bin/rake db:setup RAILS_ENV=test
```

---

// whenever a new model is generated a new spec file will also be generated for such model

```
bin/rails g model widget
```



---


### tests

// Class methods are prefixed with a dot (".add")

// Instance methods with a dash ("#add")

// We are using another describe block to describe the add class method

// context is technically the same as describe, but is used in different places, to aid reading of the code

// We are using an it block to describe a specific example, which is RSpec's way to say "test case"

// expect(...).to and the negative variant expect(...).not_to are used to define expected outcomes

// ex,
```
# spec/string_calculator_spec.rb
require "string_calculator"

describe StringCalculator do

  describe ".add" do
    context "given an empty string" do
      it "returns zero" do
        expect(StringCalculator.add("")).to eql(0)
      end
    end

  end

  describe ".add" do
    context "given '4'" do
      it "returns 4" do
        expect(StringCalculator.add("4")).to eql(4)
      end
    end

    context "given '10'" do
      it "returns 10" do
        expect(StringCalculator.add("10")).to eql(10)
      end
    end
  end

  describe ".add" do
    context "two numbers" do
      context "given '2,4'" do
        it "returns 6" do
          expect(StringCalculator.add("2,4")).to eql(6)
        end
      end

      context "given '17,100'" do
        it "returns 117" do
          expect(StringCalculator.add("17,100")).to eql(117)
        end
      end
    end
  end

end
```




---


### matchers

(matchers docs)[https://relishapp.com/rspec/rspec-expectations/v/3-1/docs/built-in-matchers]
















