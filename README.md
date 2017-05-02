# Yondu RESTful API Documentation

Generates a RESTful web API Documentation.

**Changes from previous version visit [CHANGELOG.md](https://github.com/apidoc/apidoc/blob/master/CHANGELOG.md)**

apiDoc creates a documentation from API descriptions in your source code.

Documentation at [apidocjs.com](http://apidocjs.com) or as [Docset](https://github.com/pfefferle/dash-apidoc).

[Example](http://apidocjs.com/example/) output.


## Installation

`npm install apidoc -g`

`git clone https://github.com/ivjose/yondu-api-documentation <Project Name>`

Go to path directory 

## Changelog

[CHANGELOG.md](https://github.com/apidoc/apidoc/blob/master/CHANGELOG.md)


## Example

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

`apidoc -i example/ -o doc/`

Creates from input files in `example/` a documentation in path `doc/`.


More examples and best practice hints: [EXAMPLES.md](https://github.com/apidoc/apidoc/blob/master/EXAMPLES.md)


## Supported programming languages

 * **C#, Go, Dart, Java, JavaScript, PHP, Scala** (all DocStyle capable languages):

   ```javascript
   /**
     * This is a comment.
     */
   ```


## FAQ

* [Filter for public / private API](https://github.com/apidoc/grunt-apidoc/issues/27#issuecomment-147664797)


## Extend apiDoc and write your own Plugin

For details and an example view [apidoc-plugin-test](https://github.com/apidoc/apidoc-plugin-test)


