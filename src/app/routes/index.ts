import * as express from 'express';
import { database } from '../../common/configurations/database.configuration';
var router = express.Router();

/* GET home page. */
router.get('/get-short-url/:url', async function (req: express.Request, res: express.Response, next: express.NextFunction) {
  console.log("in get short url router"); // this log will be replaced by logger function
  const { url } = req.params;
  try {
    const actualUrl = await database.getShortUrl(url);
    res.status(200).send(actualUrl);
  } catch (error) {
    console.log('url not found: ', error);
    res.status(400).send(`${url} not found`);
  }
});

router.post('/create-short-url', async function (req: express.Request, res: express.Response, next: express.NextFunction) {
  const { url: receivedUrl } = req.body;
  console.log("in create short url router"); // this log will be replaced by logger function
  const createShortUrl = await database.createShortUrl({ actualUrl: receivedUrl });
  console.log('========== createShortUrl ========= ',createShortUrl);
  res.status(200).send(createShortUrl);
});

export default router;
