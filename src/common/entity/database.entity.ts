export interface ShortUrlEntity {
    generatedShortUrl?: ShortUrlBase
}

export type ShortUrlBase = {
    actualUrl: string;
    shortUrl: string;
    createdAt: Date;
}