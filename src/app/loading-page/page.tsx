async  function fetchData(){
    const res = await fetch('https://dummyjson.com/products');
const json = await res.json();
console.log(json);
}


export default async  function Loading(){
    // let fetchedData:any = await fetchData()
return (<div>
  loaded
</div>)
}