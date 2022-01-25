import { nanoid } from "nanoid";
import { ShortUrlBase, ShortUrlEntity } from "../entity/database.entity";

export const database = (() => {
  let _database : ShortUrlEntity = {
  };

  function createShortUrl(input: ShortUrlBase) {
    const generatedShortUrl = nanoid();
    _database = Object.keys(_database).length > 0 ? { ..._database, generatedShortUrl: { ...input } } : { generatedShortUrl: { ...input } };
    return generatedShortUrl;
  }

  function getShortUrl<Key extends keyof ShortUrlEntity>(id: Key): Promise<ShortUrlEntity[Key]> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        _database[id] ? res(_database[id]) : rej(new Error("not_found"));
      }, 300);
    })};
  return { getShortUrl, createShortUrl };
})();
