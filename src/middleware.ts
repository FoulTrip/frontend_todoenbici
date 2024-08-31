import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["es", "pt"],
  defaultLocale: "es",
  pathnames: {
    
  }
});

export const config = {
  matcher: ["/", "/(es|pt)/:path*"],
};
