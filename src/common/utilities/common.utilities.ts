import { Response } from 'express';
import { STATUS_CODES } from '../constnats/common.constants';

export const URL_PATTERN = () => {
  return new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
};

export const RETURN_BAD_REQUEST_RESPONSE = (res: Response, message: string, response_status: number = STATUS_CODES.BAD_REQUEST_CODE) => {
    return res.status(response_status).send({error: message});
}

export const RETURN_SUCCESS_REQUEST_RESPONSE = (res: Response, message: any, response_status: number = STATUS_CODES.SUCCESS_REQUEST_CODE) => {
    return res.status(response_status).send(message);
}