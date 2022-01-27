import { nanoid } from "nanoid";
import { ShortUrlEntity, ShortUrlInput, ShortUrlOutput } from "../entity/database.entity";

export const database = (() => {
  let _database : ShortUrlEntity = {};

  function createShortUrl(input: ShortUrlInput): Promise<ShortUrlOutput> {
    const generatedShortUrl: string = nanoid(7);
    const updatedInput: ShortUrlEntity = {
      [generatedShortUrl]: {
        actualUrl: input.actualUrl,
        shortUrl: generatedShortUrl,
        createdAt: new Date().toISOString()
      }
    }
   return new Promise<ShortUrlOutput>((resolve) => {
     _database = Object.keys(_database).length > 0 ? { ..._database, ...updatedInput } : { ...updatedInput };
     setTimeout(() => {
       resolve({ url: `${process.env.DOMAIN_NAME}/` + generatedShortUrl });
     }, 300);

   })
  }

  function getShortUrl<Key extends string>(id: Key): Promise<ShortUrlOutput> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        // @ts-ignore
        _database[id] ? res({url: _database[id].actualUrl}) : rej(new Error("not_found"));
      }, 300);
    })};

  function clearDatabase(): Promise<Object> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        // @ts-ignore
        _database = Object.assign({});
      }, 300);
    })};
  return { getShortUrl, createShortUrl, clearDatabase };
})();
