/** Site name. Appended to every page title and used as `og:site_name`. */
export const SITE_NAME = "James Peters";
/** Fallback meta description for pages that don't set their own. */
export const SITE_DESCRIPTION =
"Industrial-Organizational Psychology, " +
  "Organizational Research, and Applied Data Science.";
/** Canonical origin. Resolves canonical URLs, social images, and the sitemap. */
export const SITE_URL = "https://jamescpeters.com";
/** BCP 47 locale tag used to format dates and numbers. */
export const SITE_LOCALE = "en-US";
/** Routes excluded from search and the sitemap. Surrounding slashes are ignored. */
export const NOINDEX_ROUTES: string[] = ["/404"];
