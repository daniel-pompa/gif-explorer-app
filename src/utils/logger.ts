type LogContext = {
  scope?: string;
  metadata?: unknown;
};

const isProd = import.meta.env.PROD;

/**
 * @description Centralized logger to control output based on environment.
 * In production, logs can be redirected to external monitoring tools.
 */
export const logger = {
  error(error: unknown, context?: LogContext) {
    if (isProd) {
      // TODO: Send error to monitoring service (Sentry, Datadog, etc.)
      return;
    }

    console.error('[ERROR]', {
      error,
      ...context,
    });
  },

  warn(message: string, context?: LogContext) {
    if (isProd) return;

    console.warn('[WARN]', {
      message,
      ...context,
    });
  },

  info(message: string, context?: LogContext) {
    if (isProd) return;

    console.info('[INFO]', {
      message,
      ...context,
    });
  },
};
