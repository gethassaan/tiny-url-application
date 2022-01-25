import { ERROR_MESSAGES } from "../../common/constnats/common.constants";
import { Request, Response, NextFunction } from "express";
import { RETURN_BAD_REQUEST_RESPONSE } from "../../common/utilities/common.utilities";

export const ValidateUrlRequest = (req: Request, res: Response, next: NextFunction) => {
    const { url } = req.params;
    if (typeof url !== "string") {
        RETURN_BAD_REQUEST_RESPONSE(res, ERROR_MESSAGES.INVALID_URL_FORMAT);
    } else {
        next()
    }
}