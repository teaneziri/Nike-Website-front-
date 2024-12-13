

const Button = ({label,iconURL}) => {
  return (
    <div className="flex justify-center  items-center px-7 gap-2 py-3 border border-coral-red text-lg leading-none bg-coral-red rounded-full text-white ">
        {label}
        <img src={iconURL} alt="" className="ml-2 rounded-ful w-6 h-6"/>
    </div>
  )
}

export default Button