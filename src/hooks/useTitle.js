import { useEffect } from "react"

const useTitle=title=>{
    useEffect(()=>{
document.title =`${title} | Brands-shops`
    },[title])
}
export default useTitle;