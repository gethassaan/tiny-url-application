export interface ShortUrlEntity {
    generatedShortUrl?: ShortUrlBase
}

export type ShortUrlBase = {
    actualUrl: string;
    shortUrl: string;
    createdAt: string;
}

export type ShortUrlInput = {
    actualUrl: string;
}

export type ShortUrlOutput = {
    url: string;
}