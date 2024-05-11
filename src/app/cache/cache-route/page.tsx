"use server"
async function getData() {
    const res = await fetch('https://663f02fae3a7c3218a4bd7ec.mockapi.io/exa')
    const res1 = await fetch('https://663f02fae3a7c3218a4bd7ec.mockapi.io/exa')


    await fetch('https://663f02fae3a7c3218a4bd7ec.mockapi.io/av')
    await fetch('https://663f02fae3a7c3218a4bd7ec.mockapi.io/exa')
    
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   
  export default async function Page() {
    const data = await getData()
   
    return <main>Cache hit</main>
  }