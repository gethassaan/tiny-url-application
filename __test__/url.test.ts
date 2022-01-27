import { database } from '../src/common/configurations/database.configuration';

describe('URL GENERATION:', () => {
    const url = 'http://localhost.com:3000';
    afterAll(async () => {
        await database.clearDatabase();
    })
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
            var Url = `${process.env.DOMAIN_NAME}/`;
            Url = Url.replace(Url, "");

            result = await database.getShortUrl(Url);
            expect(result).not.toBeNull();
            expect(result).toHaveProperty('url');
            expect(result.url).toBe(url)

        });

    })
})