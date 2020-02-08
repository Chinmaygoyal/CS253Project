# CS253Project

This project uses Node.js version 12.15

It is advised to install node using nvm and not directly - [Install node using nvm](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04) (scroll down for installation via nvm)

For the databse, install MySQL and then run the following commands:
```
sudo mysql -u root -p
(For password of mysql press 'Enter')
mysql> CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'password';
mysql> GRANT ALL PRIVILEGES ON *.* TO 'newuser'@'localhost';
mysql> FLUSH PRIVILEGES;
mysql> quit;
mysql -u newuser -p
(For password of mysql type "password" (without quotes))
mysql> create database first;
mysql> quit;
```

For initializing the project follow the following steps:
```
npm install
nodemon app.js
```
