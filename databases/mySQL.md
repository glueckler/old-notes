mySQL
=====


### user and password

mysql -u root -p

// to log into mysql in CLI
// password is blank by default

_


If you lose this password, please consult the section How to Reset the Root Password in the MySQL reference manual.

//help resetting password..
http://stackoverflow.com/questions/30692812/mysql-user-db-does-not-have-password-columns-installing-mysql-on-osx

---

### ports

SHOW GLOBAL VARIABLES LIKE 'PORT';

// to display the current used port


---


### directories

(when installed with Homebrew) mysql db data..

/usr/local/mysql/data

(MAMP)..

/Applications/MAMP/db/mysql


---


Cpanel access
-------------
//access the cpanel of any site
1 Navigate to the following location in your browser:
https://IPAddress:2083
//ex
https://192.168.0.1:2083

//you can find an ip adress by using network utility and doing a ping on the website



-

php myadmin
-----------
//url
http://localhost:8888/phpMyAdmin/



-

Changing the WordPress URL directly in the database
---------------------------------------------------
//more information here
// https://codex.wordpress.org/Changing_The_Site_URL
//probly have to go into wordpress permalinks and refresh them as well after doing this

Backup your database and save the copy off-site.
Login to phpMyAdmin.
Click the link to your Databases.
A list of your databases will appear. Choose the one that is your WordPress database.
All the tables in your database will appear on the screen.
From the list, look for wp_options. Note: The table prefix of wp_ may be different if you changed it when installing.
Click on the small icon indicated as Browse.
A screen will open with a list of the fields within the wp_options table.
Under the field option_name, scroll down and look for siteurl.
Click the Edit Field icon which usually is found at the far left at the beginning of the row.
The Edit Field window will appear.
In the input box for option_value, carefully change the URL information to the new address.
Verify this is correct and click Go to save the information.
You should be returned to your wp_options table.
Look for the home field in the table and click Edit Field. Note There are several pages of tables inside wp_options. Look for the > symbol to page through them.
In the input box for option_value, carefully change the URL information to the new address.
Verify this is correct and click Go to save the information.


-

mySQL update source links
-------------------------
//I think this edits the actual post content (if there is a site link in a post?) not the url

phpmyadmin > database > SQL
UPDATE wp_posts SET post_content=(REPLACE (post_content, '<old url>','<new url>'));
//ex
UPDATE wp_posts SET post_content = REPLACE(post_content,'www.domain.com/wp-content/uploads','www.domain.com/images');
//ex
UPDATE wp_posts SET post_content=(REPLACE (post_content, 'localhost:8888','funq.peteprogr.zone'));



-

errors
------
WordPress Migration – Fixing “Unknown collation: ‘utf8mb4_unicode_ci'”

1 Export your database/tables normally, but select Custom when choosing your Export Method.
2 Select MYSQL40 from the dropdown for the Database system or older MySQL server to maximize output compatibility with: option.
3 Export!






mySQL troubleshooting
---------------------
Q: Can't start phpMyAdmin. Keep getting the #2002 socket error
A:
/Applications/MAMP/db/mysql56/

and remove all the files except folders. Then restart MAMP again.



















