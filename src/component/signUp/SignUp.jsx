import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {useNavigate} from "react-router-dom"
// import logo from "../../assites/WhatsApp Image 2024-04-25 at 14.02 1.png"


export default function SignUp() {

  let [loding,setLoding]=useState(false)

  let [errorMessage,setErrorMessage]=useState("")

  const basurl = "https://final-form.onrender.com"
  let nav = useNavigate()



  let validationSchema = Yup.object({
    name: Yup.string().required("name Required").min(3, "min length 3").max(20, "max length 20"),
    email: Yup.string().email("enter valid email").required("Username Required").min(3, "min length 3"),
    password: Yup.string().required("Password Required").matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, "Password must contains at least one uppercase letter and at least one special character"),
    rePassword:Yup.string().required("confirm Password required").oneOf([Yup.ref("password")]),
  });

  let registeform = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
    },
    onSubmit,
    validationSchema,
  });



  async function onSubmit(valus){
    setLoding(true)
    let {data}=await axios.post(`${basurl}/api/v1/auth/epay/signup`,valus).catch((error)=>{
        setErrorMessage(error.response.data.error)
        
    setLoding(false)
    })
    setLoding(false)

    if(data.message == 'success'){
      nav('/form')
    }


    
  }












  return (
    <>
      <div className="container-fluid py-5">
        <div className="row align-items-center">
          <div className="col-md-12 py-5 px-5">
            <div className="px-5">
              <h2 className="fw-bold text-center">
                Create an <span className=" text-danger">account</span>
              </h2>
              <h3 className='fs-3 fw-bold'>Sign up</h3>
              {errorMessage == "" ? "":<div className="alert alert-danger">{errorMessage}</div>}
              <form onSubmit={registeform.handleSubmit}>
                <div className="my-3">
                  <input  className="form-control form border-bottom border-1 border-dark custom-input"  type="text"  name="name"  id="name"  placeholder="Name"  onChange={registeform.handleChange}  onBlur={registeform.handleBlur} />
                  {registeform.touched.name ?<p className="text-danger">{registeform.errors.name}</p>:""}
                </div>

                <div className="my-3">
                  <input className="form-control form border-bottom border-1 border-dark custom-input" type="email" name="email" id="email" placeholder="Email" onChange={registeform.handleChange} onBlur={registeform.handleBlur} />
                  {registeform.touched.email ?<p className="text-danger">{registeform.errors.email}</p> :""}

                </div>

                <div className="my-3">
                  <input className="form-control form border-bottom border-1 border-dark custom-input" type="password" name="password" id="password" placeholder="Password" onChange={registeform.handleChange} onBlur={registeform.handleBlur} />
                  {registeform.touched.password ?<p  className="text-danger">{registeform.errors.password}</p>:""}
                </div>

                <div className="my-3">
                  <input className="form-control form border-bottom border-1 border-dark custom-input" type="password" name="rePassword" id="rePassword" placeholder="ConfirmPassword" onChange={registeform.handleChange} onBlur={registeform.handleBlur} />
                  {registeform.touched.rePassword? <p className="text-danger">{registeform.errors.rePassword}</p>:""}
                </div>


                {loding ?<button type='button' className='btn btn-danger m-auto d-block w-100 my-3'><i className="fa-solid fa-spinner fa-spin"></i></button>:<button disabled={!(registeform.isValid && registeform.dirty)} type="submit"className="btn btn-danger m-auto d-block w-100 my-3">Create Account</button>}  


                 </form>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
