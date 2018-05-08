# Burger
- A app that allows a user to create a burger, add it to the database and html page, as well as update the created burger once it has been eaten (devoured). 

## Getting Started
- This app uses the MVC framework for organizing your code into seperate files
- Create the following files inside of FriendFinder folder: 
    * .gitignore
    * app (folder)
      * data (folder)
        - friends.js
      * public (folder)
        - home.html
        - survey.html
      * routing (folder)
        - apiRoutes.js
        - htmlRoutes.js
    * node_modules 
    * package.json
    * server.js


- Run command in Terminal or Gitbash 'npm install express body-parser'
- Run command in Terminal or Gitbash 'node server.js
- Run 'ctrl + c' to exit each mode

### What Each JavaScript Does

1. `friends.js`

    * Display's user's survey results.

    * Add's new user's survey results.

-----------------------

2. `apiRoutes.js`

    * Takes the user's data and compares it to the all data.
    * Finds the best match by obtaining the totalDifference and comparing it to the other data.
    * Display's the best match
-----------------------

3. `htmlRoutes.js`
    * Exports the home page and survey page based on the api path called.

## Left to do
- when pressing the submit button, error is displayed and the best match does not show. 


## Technologies used
- Node.js (https://nodejs.org/en/)
- Express NPM Package (https://www.npmjs.com/package/express)
- Body-Parser NPM Package (https://www.npmjs.com/package/body-parser)
- MySQL NPM Package (https://www.npmjs.com/package/mysql)
- Express-Handlebars NPM (https://www.npmjs.com/package/express-handlebars)
- Method-Override NPM (https://www.npmjs.com/package/method-override)

## Built With

* Visual Studio Code - Text Editor
* Gitbash
* Heroku

## Authors

* **Samantha Olvera** - *JS/express/body-parser?mysql/express-handlebars/method-override/Node.js* - [Samantha Olvera](https://github.com/smolvera)