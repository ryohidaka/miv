"use client";

import { GoogleAnalytics } from "nextjs-google-analytics";

/**
 * GoogleAnalytics をラップする
 * @returns
 */
export const GAWrapper = () => <GoogleAnalytics strategy="lazyOnload" />;
