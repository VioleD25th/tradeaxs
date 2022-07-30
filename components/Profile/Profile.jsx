import { IoIosCopy } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, {useState} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Avatar from "react-avatar";
import styled from "styled-components";
import Link from "next/link";
import UpdateInput from "../UpdateInput";
import { updateStructure } from "../../data/Update";
import Loading from "../Loading";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ContentCopy from "@mui/icons-material/ContentCopy";


const Update = () => {

 const copied = (value) => {
    navigator.clipboard.writeText(value);
    toast.success("Copied to clipboard");
  };
 
  const [isLoading, setIsLoading] = useState(false);
  //validation schema
  const submitHandler = async (val) => {
    setIsLoading(true);
    const { data, err } = await SignupReq(val);
    if (data) {
      localStorage.setItem("signup-modal", true);
      Router.push(paths.SIGNIN);
    } else {
      setIsLoading(false);
      const [email] = err?.errors?.email || [undefined];
      toast.error(`${err?.msg || "Error:"}
      ${email || err?.errors?.username[0] || " "}`);
    }

  };



const UpdateSchema = Yup.object().shape({
    name: Yup.string().required("Field is required"),
    username: Yup.string().required("Field is required"),
    email: Yup.string().email("Invalid email").required("Field is required"),
    phone: Yup.string().required("Field is required"),
    password: Yup.string()
      .required("password is required")
      .min(8, "password must be a minimum of eight characters"),
    cPassword: Yup.string()
      .required("field is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

 

  
return (
    <Container>
      <ToastContainer autoClose={500} />
        <DivContainer>
        <LeftPane>
            <div className="flex-nowrap min-w-fit text-white">
            <div className="flex flex-nowrap gap-3 mt-5 justify-center align-center mb-2" >
            
            <Avatar  color={Avatar.getRandomColor('sitebase', ['red', 'green', 'orange'])} name="W" id="William" size ="80" round={true}/>
            <div className="justify-center align-center mt-5 text-left">
            <span><p>Williams Ted</p></span>
            <span><p className="text-xs">Trader</p></span>
            <span><p className="text-sm">@username</p></span>
            
            </div>
            </div>
               
            <div className="ml-20 box-border text-center">
                <p>williamsted@gmail.com</p>
                <p>+2349012345678</p>
                <p>********986</p>
            </div>

            <div className="justify-start text-left flex-nowrap w-full">
                <br />
                <div className="details  leading-6 text-left text-sm">
                  
                    <div className="justify-between gap-5">
                        <div className="flex items-center gap-5" style={{marginBottom: '-5px'}}>
                        <div className="manage items-center justify-center">
                            <p className=" w-44 ">Account Name: </p>
                            
                        </div>
                        
                        <div className=" w-full items-center ">
                            <p className="w-max text-sm">William Ted</p>
                        </div><IoIosCopy
                  className="w-16 cursor-pointer"
                  onClick={(e) => {
                    copied(e.currentTarget.previousElementSibling.textContent);
                  }} />

                        </div>
                        
                       

                        <div className="flex items-center gap-5" style={{marginBottom: '-5px'}}>
                         <div className="wmanage2 items-center justify-center">
                            <p className="w-44">Bank: </p>
                        </div>

                        <div className="w-full items-center text-sm text-left">
                            <p className="w-max">Wema Bank</p>
                            </div><IoIosCopy
                  className="w-16  cursor-pointer"
                  onClick={(e) => {
                    copied(e.currentTarget.previousElementSibling.textContent);
                  }} />
                        </div>

                        <div className="flex items-center gap-5">
                         <div className="wmanage2 items-center justify-center">
                            <p className="w-44">Account Number: </p>
                        </div>

                        <div className="w-full items-center text-sm text-left">
                            <p className="w-max">012345678900</p>
                            </div> <IoIosCopy
                  className="w-16 cursor-pointer"
                  onClick={(e) => {
                    copied(e.currentTarget.previousElementSibling.textContent);
                  }} />
                        </div>
                    </div>

                    <br /><br />


                    <div className="justify-between gap-5">
                        <div className="flex items-center gap-5" style={{marginBottom: '-5px'}}>
                        <div className="manage items-center justify-center">
                            <p className=" w-44 ">Virtual Account Name: </p>
                        </div>
                        
                        <div className=" w-full items-center text-sm ">
                            <p className="w-max">William Ted</p>
                        </div>  <IoIosCopy
                  className="w-16 cursor-pointer"
                  onClick={(e) => {
                    copied(e.currentTarget.previousElementSibling.textContent);
                  }} />
                        </div>

                        <div className="flex items-center gap-5" style={{marginBottom: '-5px'}}>
                         <div className="wmanage2 items-center justify-center">
                            <p className="w-44">Bank: </p>
                        </div>

                        <div className="w-full items-center text-sm text-left">
                            <p className="w-max">Wema Bank</p> 
                            </div> <IoIosCopy
                  className="w-16 cursor-pointer"
                  onClick={(e) => {
                    copied(e.currentTarget.previousElementSibling.textContent);
                  }} />
                        </div>

                        <div className="flex items-center gap-5" style={{marginBottom: '-5px'}}>
                         <div className="wmanage2 items-center justify-center">
                            <p className="w-44">Account Name: </p>
                        </div>

                        <div className="w-full items-center text-sm text-left">
                            <p className="w-max">012345678900</p>
                            </div> <IoIosCopy
                  className="w-16 cursor-pointer"
                  onClick={(e) => {
                    copied(e.currentTarget.previousElementSibling.textContent);
                  }} />
                        </div>
                    </div>

                    <button className="rounded p-2 bg-white mt-10 text-blue-500 
                    text-sm float-right" type="Submit">Become A Merchant</button>
                </div>

            </div>
            </div>
        </LeftPane>
        <RightPane>

           <div className="">
            <p className="text-left text-white capitalize">Update Profile</p>

            <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            bvn: "",
            password: "",
            cPassword: "",
          }}
          validationSchema={UpdateSchema}
          onSubmit={(values) => {
            // same shape as initial values
            submitHandler(values);
          }}
        >
          {() => (
            
            <Form className="  w-inherit md:w-full text-white flex-wrap md:justify-start mt-5 flex ">
              {updateStructure.map((field, index) => {
                return (
                  <UpdateInput
                    key={index}
                    as={field.as}
                    label={field.label}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                   />
                );
              })}
              
              <div>
                <div className="mt-4 text-xs md:w-2/4 text-left md:text-sm">

                <h1 className="font-medium text-base text-white leading-8">Terms and Conditions </h1>
                <p>If any of the information provided are false your account will be frozen and reported to your local authorities </p>
                </div>
                
              <button
                type="submit"
                className="block w-auto  pl-10 font-medium pr-10 pt-1 pb-1 text-center bg-white mt-10 text-blue-500 rounded-md
                    text-sm justify-end float-right mr-4 md:mr-16"
              >
                {isLoading ? <Loading /> : "Update"}
              </button>

              
            </div>
                
            </Form>
            
          )}
        </Formik>
        </div>
       
            </RightPane>
        </DivContainer>
    </Container>
);
};

export default Update;

const Container = styled.div `
display: flex;
box-sizing: border-box;
`
const DivContainer = styled.div `
display: flex;
margin: 0 auto;
// padding-left: 20px;
margin-top: -30px;
flex-wrap: nowrap;
gap: 25px;
margin-left: -6em;
justify-content: center;
transform: scale(0.75, 0.75);

@media(max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    // transform: scale(0.85,0.85);
    margin: 0 auto;
     margin-left: -8vw;
      margin-top: -5em;
    max-width: 100vw;
    flex-wrap: wrap;
  
    

}
`

const LeftPane = styled.div `
max-width: fit-content;
padding: 20px;
border-radius: 0.625rem;
background-color: #0C4DAE;
text-align: center;
padding-bottom: 2em;
padding-right: 2em;
`

const RightPane = styled(LeftPane)`
min-width: 700px;

}
@media(max-width: 640px) {
    min-width: inherit;
    padding-right: 0px;
}
`