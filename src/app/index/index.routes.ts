import { ValidateUrlBody } from '../../core/middlewares/url-body.middlware';
import * as express from 'express';
import { ValidateUrlRequest } from '../../core/middlewares/url-request.middleware';
import { IndexService } from './index.service';
var router = express.Router();

/* GET home page. */
router.get('/:url', ValidateUrlRequest, async function (req: express.Request, res: express.Response) {
  console.log("in get short url router"); // this log will be replaced by logger function
  return await IndexService.getShortUrl(req, res);
});

router.post('/', ValidateUrlBody, async function (req: express.Request, res: express.Response) {
  console.log("in create short url router"); // this log will be replaced by logger function
  return await IndexService.createShortUrl(req, res);
});

export default router;
