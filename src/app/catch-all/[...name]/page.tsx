import { useRouter } from "next/router"

export default function CatchAll({params: {name}}:{params:any}){
    return(<div>name ={name}</div>)
}