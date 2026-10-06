import { cms } from "@/lib/cms";

/**
 * Renders HTML published from the YMG CMS (already sanitized by the CMS)
 * with its stylesheet. Server component: nothing here needs the browser.
 *
 * "Lead form" blocks keep their own button, pointed at /contact (the
 * site's booking calendar), since this site has no inline lead form.
 *
 * The stylesheet uses React 19's <style href precedence>, which React
 * hoists into <head> once per page and keeps out of hydration (browser
 * extensions like Dark Reader inject tags next to inline <style>s).
 */
export default function CmsContent({ html }: { html: string }) {
  const withContactLinks = html.replaceAll('href="/#cms-lead-form"', 'href="/contact"');
  return (
    <>
      {cms.themeCss ? (
        <style href="ymg-cms-theme" precedence="default">
          {cms.themeCss}
        </style>
      ) : null}
      <div className="cms-content" dangerouslySetInnerHTML={{ __html: withContactLinks }} />
    </>
  );
}
