## Getting Started

Follow guideline


## App vs Page directory
Reference : https://nextjs.org/docs/app/building-your-application/routing
1) we can use pages and app directory simulteniously but we cant use same routes in both (avoid conflicts).
2) In version 13, Next.js App Router works in a new directory named app
3) Curruntly app directory works with pages directory for incremental adoption

## Routes

# Nested Routes
1) nested folder structure
Example:
- pages/blog/first-post.js → /blog/first-post
http://localhost:3000/nested-routes/first-post
http://localhost:3000/nested-routes/subpost/details
