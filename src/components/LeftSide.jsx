import React from 'react'
import Button from './Button'
import line from "../assets/line.svg"
import google from "../assets/google.svg"
import facebook from "../assets/facebook.svg"

const LeftSide = () => {
    return (
        <div className='pt-[58px] pl-[139px]'>
            <h2 className='font-roboto font-bold text-4xl'>Welcome Back  👋</h2>
            <h3 className='font-roboto font-normal text-xl w-[421px] mt-[28px]'>Today is a new day. It's your day. You shape it.
                Sign in to start managing your projects.</h3>
            <h4 className='font-roboto font-normal text-base mt-12'>Email</h4>
            <input type="text" className='bg-[#F7FBFF] w-[388px] h-12 mt-2 rounded-xl p-4 font-roboto font-normal text-base' placeholder='Example@email.com' />
            <h4 className='font-roboto font-normal text-base mt-6'>Password</h4>
            <input type="text" className='bg-[#F7FBFF] w-[388px] h-12 mt-2 rounded-xl p-4 font-roboto font-normal text-base' placeholder='At least 8 characters' />
            <h4 className='font-roboto font-normal text-base mt-6 ml-[256px] text-[#1E4AE9]'>Forgot Password?</h4>
            <div className='mt-6'>
                <Button buttonText={"Sign in"} buttonBg={"bg-[#162D3A]"} buttonTextSize={"xl"} buttonTextColor={"text-white"} />
            </div>
            <div className='flex items-center mt-[66px]'>
                <img src={line} className='mt-1' />
                <span className='px-4'>or</span>
                <img src={line} className='mt-1' />
            </div>
            <div className='flex flex-col gap-4 mt-6'>
                <Button buttonText={"Sign in with Google"} buttonBg={"bg-[#F7FBFF]"} buttonTextSize={"base"} buttonTextColor={"text-black"} buttonImage={google} />
                <Button buttonText={"Sign in with Facebook"} buttonBg={"bg-[#F7FBFF]"} buttonTextSize={"base"} buttonTextColor={"text-black"} buttonImage={facebook} />
                <span className='m-12 mb-[58px] font-roboto font-normal text-lg'>Don't you have an account? <span className='text-[#1E4AE9]'>Sign up</span></span>
            </div>
        </div>
    )
}

export default LeftSide