import React from 'react'

const Button = ({ buttonText, buttonBg, buttonTextSize, buttonTextColor, buttonImage }) => {
    return (
        <div>
            <div className={`flex justify-center items-center w-[388px] h-[52px] rounded-xl ${buttonBg} ${buttonTextColor} font-normal text-roboto text-${buttonTextSize} `}>
                <img src={buttonImage} className='mr-4'/>
                {buttonText}
            </div>
        </div>
    )
}

export default Button