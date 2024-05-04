export default async function Page({ params }: { params: { slug: string } }) {
let fetched  = await fetch("https://dummyapi.io/data/v1/user?limit=10",{   "headers":{"app-id": "66358c20c8d8c82163755d9d"}})
console.log("fetched=",fetched)
    return <div>My Post: {params.slug}</div>
  }