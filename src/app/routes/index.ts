import * as express from 'express';
var router = express.Router();

/* GET home page. */
router.get('/get-short-url', function (req: express.Request, res: express.Response, next: express.NextFunction) {
  console.log("in get short url router"); // this log will be replaced by logger function
  res.status(200).send("Hello");
});

router.post('/create-short-url', function (req: express.Request, res: express.Response, next: express.NextFunction) {
  console.log("in create short url router"); // this log will be replaced by logger function
  res.status(200).send("Hello");
});

export default router;
