# Heroku



## CLI

### login

heroku login

heroku help // lists commands

heroku run env // run env command on heroku server

heroku run npm db:seed // run db seed



---

### create

(create)[https://devcenter.heroku.com/articles/git#creating-a-heroku-remote]

```
heroku create
```

//When you create an app, a git remote (called heroku) is also created and associated with your local git repository.

//Heroku generates a random name for your app, or you can pass a parameter to specify your own app name.

// you can use the git remote command to confirm that a remote named heroku has been set for your app
```
git remote -v
heroku  https://git.heroku.com/thawing-inlet-61413.git (fetch)
heroku  https://git.heroku.com/thawing-inlet-61413.git (push)
```

// to rename the remote
```
git remote rename heroku heroku-staging
```

---

### deploy

git push heroku master

//The application is now deployed. Ensure that at least one instance of the app is running:
```
heroku ps:scale web=1
```


---

// Define a Procfile
[docs](https://devcenter.heroku.com/articles/procfile)

// Use a Procfile, a text file in the root directory of your application, to explicitly declare what command should be executed to start your app

//ex
web: node index.js

---

//run the app locally

heroku local web

---

### visit app

//Now visit the app at the URL generated by its app name. As a handy shortcut, you can open the website as follows

heroku open

---

### View logs

//Heroku treats logs as streams of time-ordered events aggregated from the output streams of all your app and Heroku components, providing a single channel for all of the events

//View information about your running app using one of the logging commands..

heroku logs --tail

---

### scale app

//You can check how many dynos are running using the ps command

heroku ps

[docs](https://devcenter.heroku.com/articles/getting-started-with-nodejs#scale-the-app)

---

### dependencies

//Heroku recognizes an app as Node.js by the existence of a package.json file in the root directory.
//For your own apps, you can create one by running..

npm init --yes

//When an app is deployed, Heroku reads this file and installs the appropriate node version together with the dependencies using the npm install command

---

### push local changes

//first add all and commit changes

git push heroku master

//test everything works

heroku open cool

---

### heroku run (bash) or (node)

heroku run node

//To get a real feel for how dynos work, you can create another one-off dyno and run the bash command..

heroku run bash

---

### define config vars

//ie - process.env. ..

//heroku local will automatically set up the environment based on the contents of the .env file in your local directory

//To set the config var on Heroku, execute the following..

heroku config:set TIMES=2

View the config vars that are set using heroku config..

heroku config

---

### provision a database

Add the database..

heroku addons:create heroku-postgresql:hobby-dev

//Edit your package.json file to add the pg npm module to your dependencies:

```javascript
"dependencies": {
    "pg": "6.x",
    "ejs": "2.5.6",
    "express": "4.15.2",
    "cool-ascii-faces": "1.3.4"
}
```

//figure out the rest :)

---




Have a day!
'ヽ༼ʘ̚ل͜ʘ̚༽ﾉ'









