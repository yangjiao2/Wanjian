# React Router + Node Starter
_for [Heroku](https://www.heroku.com/) deployment_

## OVERVIEW
This is a simple starter to get you up and running for React Router projects. This is intended to provide:

* a lightweight Webpack config (for development and production)
* some helpful tooling for development workflow
* a similar setup to what you'll see in the wild
* Heroku-ready deployment setup

## UP & RUNNING
* Install dependencies
`$ npm install` or `$ yarn`


## Production Build
To build your production assets and run the server:
```
$ npm start
```

## Deploying to Heroku
This app is set up for deployment to Heroku!

_This assumes you have already have a Heroku account and have the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed_
```
$ heroku login
$ heroku create -a name-of-your-app
$ git push heroku master
$ heroku open
```
