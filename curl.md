cURL
----

manual - https://curl.haxx.se/docs/manpage.html

docs - https://gist.github.com/subfuzion/08c5d85437d5d4f00e58

gist - https://gist.github.com/subfuzion/08c5d85437d5d4f00e58


flags
---

```
-X --request <command>

-i --include (show the response header?)

-H --header <header/@file>

-L --follow redirects
```


-------------------------

content type header
-------------------

```
-H "Content-Type: application/x-www-form-urlencoded"

-H "Content-Type: application/json"
```


-------------------------



get
---

// see the content of a webpage
```
curl www.example.com
```



--------------------------



post
----


// send POST request
```
curl -X POST ...
```

---


// The -d flag is used to send form data in the same way a browser would when submitting our login form
```
curl -X POST -i localhost:8080/login -d "email=a@a.com" -d "password=asdf"
```





----------------------------


### x-www-form-urlencoded


// application/x-www-form-urlencoded is the default:
```
curl -d "param1=value1&param2=value2" -X POST http://localhost:3000/data
```

----------------------------



### JSON

```
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST http://localhost:3000/data
```


// with a data file
```
curl -d "@data.json" -X POST http://localhost:3000/data
```


----------------------------






### download

```
curl -o mygettext.html http://www.gnu.org/software/gettext/manual/gettext.html
-
o (lowercase o) the result will be saved in the filename provided in the command line
O (uppercase O) the filename in the URL will be taken and it will be used as the filename to store the result


curl -O URL1 -O URL2
-
download multiple files
```






----------------------------




other commands
--------------

### store the output in a file
```
curl http://www.centos.org > centos-org.html
```

### inspect the response headers
```
curl -i <URL>
```

### follow redirection
```
curl -L http://www.google.com

curl -Li <URL>
```

### this command will show your ip address
```
curl ifconfig.me
```









