/**
 * @api {post} /users User post
 * @apiVersion 0.3.0
 * @apiName users post
 * @apiGroup Users
 * @apiSampleRequest off
 * 
 * @apiDescription Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed ipsum dolor. Suspendisse et libero ex. Aenean congue nec dui hendrerit posuere. Morbi laoreet orci diam, molestie rutrum sapien dapibus vel.
 *
 * @apiParam {String} type Sample Description.
 * @apiParam {String} name Description Name.
 * 
 * @apiParamExample {json} Request-Example:
 *{
 *    "type": "sample",
 *    "name": "John Doe",
 *}
 * @apiSuccess {String} status Sample Text.
 * @apiSuccess {String} message Sample Message.
 * @apiSuccessExample {json} Success-Response:
 *HTTP/1.1 201 OK
 *{
 *    "status": "success"   
 *    "message": "User Successfully Created"
 *}
 * 
 * 
 * @apiError {Number} code Response Code.
 * @apiError {Object} errors Error List.
 * @apiError {String[]} type Error messages for type.
 * @apiError {String[]} name Error messages for name.
 * @apiErrorExample  Response (409):
 *     HTTP/1.1 409 Error Request
 *{
 *    "code": 409,
 *    "errors": {
 *        "type": [
 *            "type is not applicable"
 *        ],
 *        "name": [
 *            "should not exceed 12 characters",
 *            "is not in the correct format"
 *        ]
 *    }
 *}
 * 
 */

