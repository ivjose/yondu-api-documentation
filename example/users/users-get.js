/**
 * @api {get} /users/{id} User get
 * @apiVersion 0.3.0
 * @apiName users get
 * @apiGroup Users
 * @apiSampleRequest off
 * 
 * @apiDescription Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed ipsum dolor. Suspendisse et libero ex. Aenean congue nec dui hendrerit posuere. Morbi laoreet orci diam, molestie rutrum sapien dapibus vel.
 * 
 * @apiParam {String} type Sample Description.
 * @apiParam {String} id Sample Description.
 * @apiParam {String} name Description Name.
 * 
 * @apiParamExample {json} Request-Example:
 *{
 *  "type": "sample",
 *  "id": "3",
 *  "name": "John Doe",
 *}
 * 
 * 
 * @apiError {String} error Error Message.
 * @apiErrorExample  Response (404):
 *     HTTP/1.1 404 Bad Request
 *     {
 *       "error": "user do not exist"
 *     }
 * 
 */

