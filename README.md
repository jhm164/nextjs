## Getting Started

Follow guideline


## App vs Page directory
Reference : https://nextjs.org/docs/app/building-your-application/routing
1) we can use pages and app directory simulteniously but we cant use same routes in both (avoid conflicts).
2) In version 13, Next.js App Router works in a new directory named app
3) Curruntly app directory works with pages directory for incremental adoption

## Routes
Route is address of page using route we can access our page UI

### Nested Routes
- nested folder structure
Example:
- pages/blog/first-post.js → /blog/first-post
http://localhost:3000/nested-routes/first-post
http://localhost:3000/nested-routes/subpost/details

### Pages with Dynamic Routes
- if we want to decide route on runtime then we can use dynamic routes
- E.g public/pages/posts (http://localhost:3000/posts/4)