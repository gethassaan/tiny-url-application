import { ERROR_MESSAGES } from "../../common/constnats/common.constants";
import { Request, Response, NextFunction } from "express";

export const ValidateUrlBody = (req: Request, res: Response, next: NextFunction) => {
    const { url } = req.body;
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    const result = pattern.test(url);
    if (!result) {
        res.status(400).send({error: ERROR_MESSAGES.INVALID_URL_FORMAT});
    } else {
        next();
    }
}