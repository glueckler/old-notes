tmux
----


### new with name

tmux new -s myname


---


### attach to named

tmux a -t myname

ex,

tmux a -t 0


---


### detach

// In tmux, hit the prefix ctrl+b

d  detach

---


### kill

tmux kill-session -t myname

ex,

tmux kill-session -t 0



---


### Windows

c  create window
w  list windows
n  next window
p  previous window
f  find window
,  name window
&  kill window


---


### Panes


```
%  vertical split
"  horizontal split

o  swap panes
q  show pane numbers
x  kill pane
+  break pane into window (e.g. to select text by mouse to copy)
-  restore pane from window
⍽  space - toggle between layouts


<prefix> q (Show pane numbers, when the numbers show up type the key to goto that pane)
<prefix> { (Move the current pane left)
<prefix> } (Move the current pane right)
<prefix> z toggle pane zoom
```




----

### Scroll


Ctrl-b, then [

normal navigation keys to scroll around (eg. Up Arrow or PgDn)

Press q to quit scroll mode


---



