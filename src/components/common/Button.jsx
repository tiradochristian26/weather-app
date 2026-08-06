
const Button = ({ color, content, type, rounded }) => {


    return (

        <><button className={` ${color} px-2 py-1 w-fit ${rounded} font-medium text-white text-sm `} type={`${type}`}

        >{content}</button ></>
    )
}

export default Button;