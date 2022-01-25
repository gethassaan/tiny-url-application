import cors from 'cors';

export class CorsMiddleware {
  public static init(
    app: any,
    origins?: string,
  ) {
    const corsOptions = {
      optionsSuccessStatus: 200,
      origins,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true,
      exposedHeaders: [
        'Set-Cookie',
      ],
    };
    app.use(cors(corsOptions));
  }
}
