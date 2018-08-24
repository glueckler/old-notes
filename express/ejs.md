EJS syntax
----------


// In EJS, any JavaScript or non-HTML syntax you include in your templates is always surrounded by <% %> delimiters

// You use <%- include( PARTIAL_FILE ) %> where the partial file is relative to the template you use it in

// Note: The <%- %> tags allow us to output the unescaped content onto the page (notice the -).



### tags

```
<% 'Scriptlet' tag, for control-flow, no output
<%_ 'Whitespace Slurping' Scriptlet tag, strips all whitespace before it
<%= Outputs the value into the template (escaped)
<%- Outputs the unescaped value into the template
<%# Comment tag, no execution, no output
<%% Outputs a literal '<%'
%%> Outputs a literal '%>'
%> Plain ending tag
-%> Trim-mode ('newline slurp') tag, trims following newline
_%> 'Whitespace Slurping' ending tag, removes all whitespace after it
```





------------------------------------------------------------------



file structure
--------------

// EJS automatically knows to look inside the views directory for template files, meaning you don't need to tell it where to find them.

```
- views
----- partials
---------- footer.ejs
---------- head.ejs
---------- header.ejs
----- pages
---------- index.ejs
---------- about.ejs
- package.json
- server.js
```



------------------------------------------------------------------


EJS Partials
------------



### include

<% include ../partials/header %>


### partial file

```
<!-- views/partials/head.ejs -->
<meta charset="UTF-8">
<title>Super Awesome</title>

<!-- CSS (load bootstrap from a CDN) -->
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
<style>
    body    { padding-top:50px; }
</style>
```



---------------------------------------------------------------------



### Inserting EJS template

//ex
```
. . .

        <div class="row">
            <div class="col-lg-12">
                <div class="list-group">
                  <!-- loop over blog posts and render them -->
                  LIST_OF_POSTS
                </div>
            </div>
        </div>
        <%- include('partials/footer') %>
    </div>
</body>
```



