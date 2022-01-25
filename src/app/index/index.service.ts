import { Request, Response } from 'express';
import { database } from "../../common/configurations/database.configuration";
import { RETURN_BAD_REQUEST_RESPONSE, RETURN_SUCCESS_REQUEST_RESPONSE } from '../../common/utilities/common.utilities';
import { ERROR_MESSAGES } from '../../common/constnats/common.constants';

export class IndexService {
    static async getShortUrl(req: Request, res: Response) {
        const { url } = req.params;
        try {
            const actualUrl = await database.getShortUrl(url);
            RETURN_SUCCESS_REQUEST_RESPONSE(res, actualUrl);
        } catch (error) {
            console.log('url not found: ', error);
            RETURN_BAD_REQUEST_RESPONSE(res, `${url} ${ERROR_MESSAGES.ROUTE_NOT_FOUND}`);
        }
    }

    static async createShortUrl(req: Request, res: Response) {
        const { url: actualUrl } = req.body;
        try {
            const createShortUrl = await database.createShortUrl({ actualUrl });
            RETURN_SUCCESS_REQUEST_RESPONSE(res, createShortUrl);
        } catch (error) {
            console.log('url not created: ', error);
            RETURN_BAD_REQUEST_RESPONSE(res, `${actualUrl} ${ERROR_MESSAGES.ROUTE_NOT_FOUND}`);
        }
    }
}