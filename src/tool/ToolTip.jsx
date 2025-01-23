import React from "react"

export const Tooltip = ({ text, children }) => {
  return (
    <div className="relative flex items-center">
      <div className="group relative flex">
        {children}
        <span className="absolute bottom-7 left-1/2 transform -translate-x-1/2 mb-2 w-max bg-black dark:bg-white dark:text-black text-white text-sm rounded-lg py-1 px-2 scale-0 group-hover:scale-100 transition-opacity duration-300">
          {text}
          <span className="absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-black dark:border-t-white"></span>
        </span>
      </div>
    </div>
  )
}
