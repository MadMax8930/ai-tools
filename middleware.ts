import { authMiddleware } from "@clerk/nextjs";
 
// Protecting routes (except the landing page)
export default authMiddleware({
   publicRoutes: ["/"]
});
 
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
