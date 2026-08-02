import { Clock } from "lucide-react"
const Title = () => {
    return (

         <>
         <div  className="flex justify-baseline items-center-safe gap-3  ">
                <Clock color="#FFBF00"  size={32}/> 
                <h1 className="text-white font-medium text-2xl">Glass</h1>
                <h2 className="text-gray-500 uppercase text-xs ">Weather Station</h2>
             </div>
         </>
    )
}
export default Title