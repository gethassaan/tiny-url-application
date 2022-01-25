import rateLimit from "express-rate-limit";

export class RateLimiterMiddleware {
  public static init(
    app: any,
    maxAllowedRequest: number,
    timePeriodInMicroSeconds: number,
  ) {
    app.use(
      rateLimit({
        windowMs: timePeriodInMicroSeconds, // 15 minutes
        max: maxAllowedRequest, // limit each IP to 100 requests per windowMs
      })
    );
  }
}
