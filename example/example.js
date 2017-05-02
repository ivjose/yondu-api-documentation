
/**
 * @api {post} /userko Hello World
 * @apiVersion 0.3.0
 * @apiName PostUser
 * @apiGroup User_helllo
 * @apiPermission none
 * @apiSampleRequest off
 * 
 * @apiDescription In this case "apiErrorStructure" is defined and used.
 * Define blocks with params that will be used in several functions, so you dont have to rewrite them.
 *
 * @apiParam {String} name Name of the User.
 * @apiParam {String} gender test of the User.
 * @apiParam {Boolean} male are a male.
 * @apiParam {String} love_anjo si ____
 * @apiSuccess {Number} id         The new Users-ID.
 *
 * @apiUse CreateUserError
 */
function postUser() { return; }

/**
 * @api {put} /user/:id Change a User 
 * @apiVersion 0.3.0
 * @apiName PutUser
 * @apiGroup User_helllo
 * @apiPermission none
 *
 * @apiDescription This function has same errors like POST /user, but errors not defined again, they were included with "apiErrorStructure"
 *
 * @apiParam {Number} id Id of the User.
 * @apiParam {String} name Name of the User.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": 4711,
 *       "name": "jojo_ko"
 *     }
 *
 * @apiUse CreateUserError
 */
function putUser() { return; }
