import { useFormik } from "formik";
import {ToastContainer,toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import * as Yup from 'yup'
import { createWalletReq } from "../../services/walletServices";
import jsCookies from "js-cookies";
import { useState } from "react";
import Loading from "../Loading";
const CreateWallet = ({ handle }) => {
  const [isLoading,setIsLoading] = useState(false)
  const submitHandler = async (values) => {
    setIsLoading(true)
    values.userId = +jsCookies.getItem("userId")
    const { data, err } = await createWalletReq(values)
    if(data){
      toast.success(`${values.coin_type} wallet created successfully`)
      setTimeout(()=>{
        handle();
      },1000)
    }
    else{
      toast.error(`${values.coin_type} ${err?.message||"Error"}`)
      setIsLoading(false)
    }

  };
  const Formik = useFormik({
    initialValues:{coin_type:"BTC"},
    onSubmit:submitHandler,
    validationSchema:Yup.object({coin_type:Yup.string().required()})
  })
  return (
    <div className="text-white">
      <ToastContainer
      autoClose={700}
      />
      <div
        onClick={handle}
        className="text-white fixed top-0 left-0 w-full h-screen bg-white/50 z-50"
      ></div>
      <div className="md:max-w-[40.375rem] 
        w-full max-w-full absolute top-1/2 
        left-1/2 z-50 -translate-x-1/2 
        -translate-y-1/2 bg-landingBlue rounded-[0.625rem] min-h-fit py-[2.0625rem] px-[2.25rem]">
        <h1>Create Wallets</h1>

            <form onSubmit={Formik.handleSubmit} className="relative w-full mt-5">
              <label className="block mb-4 text-sm font-medium capitalize">
                Coin Type
                </label>
                <select
                  name={"coin_type"}
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                  className={`text-black 
                  flex-1 p-3 pl-5 block 
                  bg-[#F2F2F2] w-full rounded-md outline-none
                   mt-1 text-sm font-normal mb-[4px]`}
                >
                  <option value={"BTC"}>
                    BTC
                  </option>
                  <option value={"ETH"}>
                    ETH
                  </option>
                  <option value={"LTC"}>
                    LTC
                  </option>
                </select>
                
                {Formik.errors.coin_type && Formik.touched.coin_type
                  && <p className="mt-1 text-xs text-red-500">Field</p>}
                
           
              <button

                type="submit"
                className={`font-medium 
                  w-fit ml-auto 
                  mr-0 block 
                  ${isLoading?'bg-accent':'bg-white'} 
                  text-landingBlue 
                  rounded-[0.3125rem] 
                  px-[1.6875rem] 
                  py-[0.4375rem]
                   md:text-sm`}
              >

                {isLoading?<Loading/>:'Confirm'}
              </button>
            </form>
      </div>
    </div>
  );
};
export default CreateWallet
