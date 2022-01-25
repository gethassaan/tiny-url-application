import { ERROR_MESSAGES } from "../../common/constnats/common.constants";
import { Request, Response, NextFunction } from "express";
import { URL_PATTERN } from "../../common/utilities/common.utilities";

export const ValidateUrlBody = (req: Request, res: Response, next: NextFunction) => {
    const { url } = req.body;
    var pattern = URL_PATTERN();
    const result = pattern.test(url);
    if (!result) {
        res.status(400).send({error: ERROR_MESSAGES.INVALID_URL_FORMAT});
    } else {
        next();
    }
}