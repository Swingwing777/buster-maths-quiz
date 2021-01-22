# Quizmaster
### An Angular Experience
Quizmaster is a Angular-based quizzing application, at this stage offering only a simple client-side experience.

![Quizmaster(450).png](https://sweepback.co.uk/supportfiles/Readme%20Support%20Media%20-%20for%20Sweepback/Quizmaster(450).png)

### Tech:

Quizmaster uses the following technologies:

* [Angular] - A framework for building native apps using React.
* [Node.js] - A JavaScript runtime built on Chrome's V8 JavaScript engine.
* [npm] - Build Amazing Things.
* [angular-cli-pages] - Angular deployment tool.  Deploys Angular app to GitHub pages directly from the Angular CLI.
* [Angular Material] - Component library.
* [Dillinger] - The Last Markdown Editor ever.
* And of course Buster-Chat itself is open source with a [public repository][Buster]
 on GitHub.
----
### Installation:

Quizmaster requires [Node.js LTS](https://nodejs.org/) v14+ to build.

Install the latest LTS version of Node.js, update npm, and then install the latest version of the Angular CLI:
```sh
$ nvm install lts/*
$ npm update -g
$ npm install -g @angular/cli
```
After installing the Angular CLI, add the new project as a repository to GitHUb.  Then install the Angular deployment/build tool:
```sh
ng add angular-cli-ghpages
```
This will be used for deployment of the finished app to GitHub, not for day-to-day commits during development.

----

### Creation:
Create the new app by typing:
```sh
$ ng new my-new-app-name
```
After confirming what stylesheet format is required, the CLI tool will create the directory structure for a new Angular app.

----

### Enhancement:
[Angular Material] is used to add checkbox and button components:
```sh
$ ng add @angular/material
```

----
### Run App:
To run the app at any stage during development, type:
```sh
$ ng serve --open
```
Check the result via `localhost:4200`.

----

### Deployment:
To deploy directly from GitHub Pages from the Angular CLI, navigate to the project root directory and type:
```sh
$ ng deploy --base-href=/githubrepositoryname/
```
ie `ng deploy --base-href=/buster-maths-quiz/`

Wait for angular-cli-ghpages to generate the new production code. It will then try to push the code to the gh-pages branch, so it will prompt for GitHub username and password if automatic authentication has not been set up previously.  The application should then be published shortly, though waits up to 20 minutes have been experienced).

Find the URL for the published app by looking for the **Environments** tab towards the righthand side of the GitHub repository page.  In this case: `https://swingwing777.github.io/buster-maths-quiz/`

----
### Todos

 - Add frontend local storage to allow a user to review their answers.

----
License 
----

##### DWhal
* Email via GitHub.
* [GitHub]
* [LinkedIn]
* [Twitter]



   [Dillinger]: <https://github.com/joemccann/dillinger>
   [Node.js]: <https://nodejs.org/en/>
   [npm]: <https://www.npmjs.com/>
   [Angular]: <https://expo.io>
   [angular-cli-pages]: <https://www.npmjs.com/package/angular-cli-ghpages>
   [Angular Material]: <https://material.angular.io/>
   [GitHub]: <https://github.com/Swingwing777/buster-maths-quiz>
   [LinkedIn]: <linkedin.com/in/david-hales-3450305a>
   [Twitter]: <https://twitter.com/dwhal>