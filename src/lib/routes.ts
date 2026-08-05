/**
 * Static export to S3/CloudFront serves App Router pages as `*.html` objects.
 * Extensionless paths like `/resume` 404 on the CDN unless a rewrite exists.
 * In `next dev`, the App Router route is `/resume` (no `.html`).
 */
export const resumePath =
  process.env.NODE_ENV === "production" ? "/resume.html" : "/resume";
