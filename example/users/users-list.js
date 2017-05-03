/**
 * @api {get} /users?page[number]=3&page[size]=10 User list
 * @apiVersion 0.3.0
 * @apiName users list
 * @apiGroup Users
 * @apiSampleRequest off
 * 
 * @apiDescription Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed ipsum dolor. Suspendisse et libero ex. Aenean congue nec dui hendrerit posuere. Morbi laoreet orci diam, molestie rutrum sapien dapibus vel.
 *
 * @apiParam {Object} meta Contain total data information.
 * @apiParam {number} total-pages total number of pages.
 * @apiParam {number} total-item total number of items.
 * @apiParam {Object} data list of Data.
 * @apiParam {String} type Sample Description.
 * @apiParam {String} id Sample Description.
 * @apiParam {String} name Description Name.
 * 
 * @apiParamExample {json} Request-Example:
 * HTTP/1.1 200 OK
 *{
 *  "meta": {
 *    "total-pages": 13,
 *    "total-item": 130
 *  },
 *  "data": [
 *    {
 *      "type": "articles",
 *      "id": "3",
 *      "name": "John Doe"
 *    }
 *  ],
 *}
 * 
 * @apiError {String} error Error Message.
 * @apiErrorExample  Response (404):
 *     HTTP/1.1 404 Bad Request
 *     {
 *       "error": "No data available"
 *     }
 * 
 */




