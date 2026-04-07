declare module "rn-analytics-sdk" {
  export interface AnalyticsConfig {
    apiUrl?: string;
    flushInterval?: number;
  }

  export default class Analytics {
    init(config?: AnalyticsConfig): void;
    track(event: string, props?: Record<string, unknown>): void;
  }
}
