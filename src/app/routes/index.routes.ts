import { ValidateUrlBody } from '../../core/middlewares/url-body.middlware';
import * as express from 'express';
import { database } from '../../common/configurations/database.configuration';
import { ERROR_MESSAGES } from '../../common/constnats/common.constants';
import { ValidateUrlRequest } from '../../core/middlewares/url-request.middleware';
import { RETURN_BAD_REQUEST_RESPONSE, RETURN_SUCCESS_REQUEST_RESPONSE } from '../../common/utilities/common.utilities';
var router = express.Router();

/* GET home page. */
router.get('/get-short-url/:url', ValidateUrlRequest, async function (req: express.Request, res: express.Response, next: express.NextFunction) {
  console.log("in get short url router"); // this log will be replaced by logger function
  const { url } = req.params;
  try {
    const actualUrl = await database.getShortUrl(url);
    RETURN_SUCCESS_REQUEST_RESPONSE(res, actualUrl);
  } catch (error) {
    console.log('url not found: ', error);
    RETURN_BAD_REQUEST_RESPONSE(res, `${url} ${ERROR_MESSAGES.ROUTE_NOT_FOUND}`);
  }
});

router.post('/create-short-url', ValidateUrlBody, async function (req: express.Request, res: express.Response, next: express.NextFunction) {
  const { url: actualUrl } = req.body;
  console.log("in create short url router"); // this log will be replaced by logger function
  const createShortUrl = await database.createShortUrl({ actualUrl });
  RETURN_SUCCESS_REQUEST_RESPONSE(res, createShortUrl);
});

export default router;
