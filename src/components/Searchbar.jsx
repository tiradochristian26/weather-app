import { useState } from "react";
import Button from "./common/Button";
const SearchBar = ({onSearch}) => {
    const [value, setValue] = useState('')
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()  
        onSearch(value.trim())
    }
    return (
        <form action="" onSubmit={handleSubmit}
            className="flex"
        >   
            <input type="text"
                placeholder="Search city or country"
                className="truncate outline outline-gray-800 w-full py-1.5 px-2  rounded-l-full text-gray-300 "
                onChange={handleChange}
                value={value}
                required
              />
            <Button

                color={'bg-blue-600'}
                content={'Search'}
                type={'submit'}
                rounded={'rounded-r-full'}
            />
        </form>

    )
}


export default SearchBar;