/**
 * @api {post} /userko Hello World
 * @apiVersion 0.3.0
 * @apiName PostUser
 * @apiGroup login
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
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": 4711,
 *       "name": "jojo_ko"
 *     }
 *
 * @apiUse CreateUserError
 */
function login() { return; }
