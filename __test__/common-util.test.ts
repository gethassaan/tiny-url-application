import { URL_PATTERN } from "../src/common/utilities/common.utilities";


describe('COMMON UTILITIES:', () => {
    const url = 'http://localhost.com:3000';
    describe('URL GENERATE PATTERN ', () => {
        it('should return a random value ', () => {
            let result = null;
            expect(result).toBeNull();
            result = URL_PATTERN();
            expect(result.test(url)).toBe(true);
        });

    })
})