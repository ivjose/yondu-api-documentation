# Yondu RESTful API Documentation

Generates a RESTful web API Documentation.

**Changes from previous version visit [CHANGELOG.md](https://github.com/apidoc/apidoc/blob/master/CHANGELOG.md)**

apiDoc creates a documentation from API descriptions in your source code.

Documentation at [apidocjs.com](http://apidocjs.com) or as [Docset](https://github.com/pfefferle/dash-apidoc).

## Useful Link

[APIDOC | Inline Documentation for RESTful web APIs](http://apidocjs.com/)

[Standard Error Responses](https://developers.google.com/doubleclick-search/v2/standard-error-responses)

[RESTful API Designing guidelines — The best practices](https://hackernoon.com/restful-api-designing-guidelines-the-best-practices-60e1d954e7c9)

[A SPECIFICATION FOR BUILDING APIS IN JSON](http://jsonapi.org/)

[Example](http://apidocjs.com/example/) output.


## Installation

`npm install apidoc -g`

`npm install gulp-cli -g`

`git clone https://github.com/ivjose/yondu-api-documentation <Project Name>`

Go to path directory Created

`path/project_name`

Type in command line `npm install` to install package dependencies

Type `gulp` to run api docs

## Server Set up

`npm install pm2 -g`

server up

`npm server`

## Creating new Api Document

Open example folder `path/project_name/example` create new folder `api_name` and inside the folder create new js file `api_name.js`

```javascript
/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
```



