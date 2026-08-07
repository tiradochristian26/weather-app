
const Cities = ({ title, color }) => {

    return (
        <>

            <div className="flex justify-center items-center gap-2 w-fit lg:w-full py-2 px-3 bg-gray-800 rounded-2xl hover:bg-gray-500 transition duration-150 cursor-pointer ">
                <span className={`h-2 w-2 rounded-full ${color} inline-block`}></span>
                <p className="text-gray-300 text-sm  tracking-wider truncate">{title}</p>
            </div>

        </>

    )

}

export default Cities;