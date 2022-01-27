import { database } from '../src/common/configurations/database.configuration';

describe('IndexService:', () => {
    const url = 'http://localhost.com:3000';
    describe('create-short-url ', () => {
        it('should create short url ', async () => {
            let result = null;
            expect(result).toBeNull();
            result = await database.createShortUrl({ actualUrl: url });
            expect(result).not.toBeNull();
            expect(result).toHaveProperty('url');
        });

    })

    describe('get-short-url ', () => {
        it('should create short url and than fetch the original url back to test ', async () => {
            let result = null;
            expect(result).toBeNull();
            result = await database.createShortUrl({ actualUrl: url });
            expect(result).not.toBeNull();
            expect(result).toHaveProperty('url');

            result = await database.getShortUrl(result.url);
            expect(result).not.toBeNull();
            expect(result).toHaveProperty('url');
            expect(result.url).toBe(url)

        });

    })
})