Command Line (Terminal)
-----------------------
-----------


A great read to get started - https://launchschool.com/books/command_line/read/introduction#briefoverview

//show hidden files
defaults write com.apple.finder AppleShowAllFiles YES




Keyboard Shortcuts
------------------

command + K  //clears terminal

control + D //logout of terminal applications

control + C  //stop command

ctrl + A  //beginning of command

ctrl + E //End of command





------------------------------------------------------------------------




Commands
--------

cd  //Change directory.

ls  //List files and directories in current directory.

pwd //Display the path of the current directory.

touch //Create a file.

mkdir //Create a directory.

rm  //Remove a file or directory. Warning: deleting a file or directory with this command is
permanent!

cp  //Copy a file or directory.

mv  //Move or rename a file or directory.

echo  //Print text to STDOUT.

cat //Display contents of a file.

more  //Display contents of a file, starting at the top and letting the user scroll down.

less  //Display contents of a file in an even more interactive way.

head  //Display the first part of a file.

head -n 30 fuckery // displays the first 30 lines of file

tail  //Display the last part of a file.

man //Display documentation about a command.
//q to quit man

man ls //gives the manual on ls

unzip // unzips a file

history //shows all recent terminal commands

grep

ln // creates hard links, and when called with the command line parameter

ln -s creates symbolic links

sudo chown -v username file

pbcopy // copy to clipboard
ex// pwd pbcopy

type // displays the type of a command

type -a mysql // displays the path to the program

find / // finds all files on the computer starting from the root directory

sudo find / | grep knexfile.js // find any file on a computer related with knexfile.js

 wc -l fuckery // counts number of words in a file

which ruby // helps us find location of binary files

printenv // lists the environment variables





------------------------------------------------------------






mv
--
mv * .. //moves everything (in current directory) up one directory

mv partials/variables.scss . //moves variables.scss (which is inside partials folder) to current directory (which is the .)

mv variable.js variables.js  //renames the file with an s on the end

mv "8; WP" wordpress //moves 8; WP into wordpress directory with same name

mv "8; WP" wordpress/new-name //moves 8; WP into wordpress directory with "new-name"

mv * newinside // moves everything in current dir into newinside (with one exception, itself)

ex,
```
ls
file1     file2     file3     file4     file5     inside    newinside
mv * newinside
mv: rename newinside to newinside/newinside: Invalid argument
 ls
newinside
```



cp
--
cp -a archive files
cp -f force copy by removing the destination file if needed
cp -i interactive - ask before overwrite
cp -l link files instead of copy
cp -L follow symbolic links
cp -n no file overwrite
cp -R recursive copy (including hidden files)
cp -u update - copy when source is newer than dest
cp -v verbose - print informative messages

cp -r ~/folder1/. ~/new_folder1
//copy all contents of ~/folder1 to ~/new_folder1
//The -r makes it recursive meaning all subdirectories and folders are also copied




rm
--

rm  //remove file

rm -r //delete folders and all their children

rm -rf //doesn't show warnings?

rm *.jpg //delete all jpgscd ..

rmdir  //remove empty directory




ls
--

ls | grep .mp3 // lists all .mp3 files in

ls -a //prints all files including dotfiles

ls -d .* //only shows the dotfiles



mkdir
--

-p // Create intermediate directories as required

mkdir -p foo/bar/baz
// will create directories foo, foo/bar, and foo/bar/baz if they don't exist.

mkdir NAME; cd $_
or
mkdir NAME && cd $_
//creates new directory and enters








------------------------------------------------------------------------





$_
--
//The $_ (dollar underscore) bash command variable contains the most recent parameter.
//ex
echo foo bar && echo $_ baz
// outputs
foo bar
bar baz






------------------------------------------------------------------------






server ssh
----------
1 find server name by typing in your domain followed by /cpanel
peteprogr.zone/cpanel > https://server121.web-hosting.com:2083/
//so this server is @server121.web-hosting.com
//and for namecheap it is necessary to use port 21098
//ssh looks like this
ssh mebsntcc@server121.web-hosting.com -p21098
password: KXhgamjwRPD?g

-

key password: IPmBbWA%%_vZ

Generating public/private rsa key pair.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /home/mebsntcc/.ssh/id_rsa.
Your public key has been saved in /home/mebsntcc/.ssh/id_rsa.pub.
The key fingerprint is:
b0:72:19:d1:2a:a2:43:d7:f1:44:60:e7:f9:f4:4b:11
The key's randomart image is:
+--[ RSA 2048]----+
|     o++   E     |
|    ..ooo   .    |
|    . *+ . .     |
| ......*o . .    |
|......+ S. o     |
|o    o    . .    |
| .         .     |
|                 |
|                 |
+-----------------+








-------------------------------------------------------------------------







Vagrant (virtual machine)
-------------------------


vagrant up //starts virtual machine

vagrant ssh //shells to virtual machine

logout //same as control + D to logout

vagrant halt //shuts off virtual machine








-------------------------------------------------------------------------




a couple network commands
-------------------------

ping google.com //check if a url is reachable

traceroute google.com //list the dns lookup of a domain







-------------------------------------------------------------------------






