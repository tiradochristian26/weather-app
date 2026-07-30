
const SearchBar = () => {
    return (

        <>
           <div className="my-2 mx-4">
             <form action="">
                <div className="flex justify-center items-center">
                <input type="text"
                  placeholder="Search city"
                  className="outline outline-gray-300 w-full py-1 px-2 rounded-l-md focus:outline focus:outline-blue-600 md:py-2 md:px-4"
                    />
                   <button type="submit" 
                   className="bg-blue-700 py-1 px-1 text-white  outline outline-blue-700 rounded-r-md md:p-2"
                   >Search</button>
                    </div>
             </form>

           </div>
        
        </>
    )
}


export default SearchBar