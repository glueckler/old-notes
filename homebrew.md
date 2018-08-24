homebrew
========


### basic commands

brew services list

//will list brew services

### Installation

brew tap homebrew/services

### Examples

// Install and start service mysql at login

$ brew install mysql

$ brew services start mysql

---

### Run

// Run service. Don't start at login (nor boot):

$ brew services run mysql

---

### Stop

// Stop service mysql:

$ brew services stop mysql

---

### restart

// Restart service mysql:

$ brew services restart mysql

---

### install

// Install and start dnsmasq service at boot

$ brew install dnsmasq

$ sudo brew services start dnsmasq

---

### services

// List all services managed by brew services

$ brew services list

---

### all

// Run/start/stop/restart all available services

$ brew services run|start|stop|restart --all


















