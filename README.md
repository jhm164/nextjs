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
- dir: pages/blog/first-post.js → /blog/first-post
http://localhost:3000/nested-routes/first-post
http://localhost:3000/nested-routes/subpost/details

### Pages with Dynamic Routes
- if we want to decide route on runtime then we can use dynamic routes
- to avoid creating static page for each item we can use dynamic routes
- dir: public/pages/posts (http://localhost:3000/posts/4)

### Layout Pattern
- It helps to reuse components between pages
- dir: src\app\layouts-pattern
- For example, you might have the same navigation bar and footer on every page.

- dir: src\pages\catch-pages
- catch single page http://localhost:3000/catch-pages/single/first-parm 
- catch all pages http://localhost:3000/catch-pages/all/first-parm/secnd/third
- single and all will not working if no parameter set we need to make it optional optional-catch

### Link and Navigation

- dir: src/app/link-nav
- http://localhost:3000/link-nav/link
- http://localhost:3000/link-nav/navigation