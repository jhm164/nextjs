
'use client'

import { usePathname } from "next/navigation"

export default function Team(){
    let pathname = usePathname()
    console.log("pathname == ",pathname)
    return(
        <div>this is team page</div>
    )
}