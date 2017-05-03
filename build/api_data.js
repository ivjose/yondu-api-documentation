define({ "api": [
  {
    "type": "delete",
    "url": "/users/{id}",
    "title": "User delete",
    "version": "0.3.0",
    "name": "users_delete",
    "group": "Users",
    "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed ipsum dolor. Suspendisse et libero ex. Aenean congue nec dui hendrerit posuere. Morbi laoreet orci diam, molestie rutrum sapien dapibus vel.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Sample Text.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Sample Message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"status\": \"success\"   \n   \"message\": \"User Successfully Updated\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Error Message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (404):",
          "content": "HTTP/1.1 404 Bad Request\n{\n  \"error\": \"Sample Message\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "example/users/users-delete.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/{id}",
    "title": "User get",
    "version": "0.3.0",
    "name": "users_get",
    "group": "Users",
    "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed ipsum dolor. Suspendisse et libero ex. Aenean congue nec dui hendrerit posuere. Morbi laoreet orci diam, molestie rutrum sapien dapibus vel.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Sample Description.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Sample Description.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Description Name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"type\": \"sample\",\n \"id\": \"3\",\n \"name\": \"John Doe\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Error Message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (404):",
          "content": "HTTP/1.1 404 Bad Request\n{\n  \"error\": \"user do not exist\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "example/users/users-get.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users?page[number]=3&page[size]=10",
    "title": "User list",
    "version": "0.3.0",
    "name": "users_list",
    "group": "Users",
    "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed ipsum dolor. Suspendisse et libero ex. Aenean congue nec dui hendrerit posuere. Morbi laoreet orci diam, molestie rutrum sapien dapibus vel.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>Contain total data information.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "total-pages",
            "description": "<p>total number of pages.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "total-item",
            "description": "<p>total number of items.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>list of Data.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Sample Description.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Sample Description.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Description Name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "HTTP/1.1 200 OK\n{\n \"meta\": {\n   \"total-pages\": 13,\n   \"total-item\": 130\n },\n \"data\": [\n   {\n     \"type\": \"articles\",\n     \"id\": \"3\",\n     \"name\": \"John Doe\"\n   }\n ],\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Error Message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (404):",
          "content": "HTTP/1.1 404 Bad Request\n{\n  \"error\": \"No data available\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "example/users/users-list.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "User post",
    "version": "0.3.0",
    "name": "users_post",
    "group": "Users",
    "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed ipsum dolor. Suspendisse et libero ex. Aenean congue nec dui hendrerit posuere. Morbi laoreet orci diam, molestie rutrum sapien dapibus vel.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Sample Description.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Description Name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"type\": \"sample\",\n   \"name\": \"John Doe\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Sample Text.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Sample Message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n   \"status\": \"success\"   \n   \"message\": \"User Successfully Created\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>Response Code.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Error List.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String[]",
            "optional": false,
            "field": "type",
            "description": "<p>Error messages for type.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String[]",
            "optional": false,
            "field": "name",
            "description": "<p>Error messages for name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (409):",
          "content": "    HTTP/1.1 409 Error Request\n{\n   \"code\": 409,\n   \"errors\": {\n       \"type\": [\n           \"type is not applicable\"\n       ],\n       \"name\": [\n           \"should not exceed 12 characters\",\n           \"is not in the correct format\"\n       ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "example/users/users-post.js",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "/users/{id}",
    "title": "User put",
    "version": "0.3.0",
    "name": "users_put",
    "group": "Users",
    "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed ipsum dolor. Suspendisse et libero ex. Aenean congue nec dui hendrerit posuere. Morbi laoreet orci diam, molestie rutrum sapien dapibus vel.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Sample Description.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Sample Description.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Description Name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"type\": \"sample\",\n   \"id\": \"3\",\n   \"name\": \"John Doe\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Sample Text.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Sample Message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n   \"status\": \"success\"   \n   \"message\": \"User Successfully Created\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>Response Code.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Error List.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String[]",
            "optional": false,
            "field": "type",
            "description": "<p>Error messages for type.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String[]",
            "optional": false,
            "field": "name",
            "description": "<p>Error messages for name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (409):",
          "content": "    HTTP/1.1 409 Error Request\n{\n   \"code\": 409,\n   \"errors\": {\n       \"type\": [\n           \"type is not applicable\"\n       ],\n       \"name\": [\n           \"should not exceed 12 characters\",\n           \"is not in the correct format\"\n       ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "example/users/users-put.js",
    "groupTitle": "Users"
  }
] });
