import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const publicRoutes = ["/", "/auth(.*)", "/portal(.*)"];
const ignoredRoutes = ["/chatbot"];

const isPublicRoute = createRouteMatcher(publicRoutes);
const isIgnoredRoute = createRouteMatcher(ignoredRoutes);

export default clerkMiddleware(async (auth, req) => {
  if (isIgnoredRoute(req)) return; // Skip authentication for ignored routes
  if (!isPublicRoute(req)) await auth.protect(); // Protect all routes except public routes
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
