import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import axios from 'axios';
import { useFormik } from 'formik';



export default function SignIn({saveUserData}) {



  let [loding,setLoding]=useState(false)

  let [errorMessage,setErrorMessage]=useState("")

  const basurl = "https://final-form.onrender.com"
  let nav = useNavigate()



  let validationSchema = Yup.object({

    email: Yup.string().email("enter valid email").required("Username Required").min(3, "min length 3"),
    password: Yup.string().required("Password Required").matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, "Password must contains at least one uppercase letter and at least one special character"),
    
  });

  let registeform = useFormik({
    initialValues: {

      email: "",
      password: "",

    },
    onSubmit,
    validationSchema,
  });



  async function onSubmit(valus){
    setLoding(true)
    let {data}=await axios.post(`${basurl}/api/v1/auth/epay/signin`,valus).catch((error)=>{
        setErrorMessage(error.response.data.error)
        
    setLoding(false)
    })


    if(data.message == 'success'){
      setLoding(false)
      localStorage.setItem('token', data.token);
      saveUserData(data.token) 
      nav('/form')
    }


    
  }









  return <>
  
  <div className="container-fluid py-5">
  <div className="row">
    
    <div className="col-md-12 ">
      <div className='px-5'>
        <h2 className='fs-1 text-center fw-bold'><span className='text-danger'>E</span>pay</h2>
        <h3 className='fs-3 fw-bold'>Sign In</h3>
        {errorMessage == "" ? "":<div className="alert alert-danger">{errorMessage}</div>}
        <form className='py-3 ' onSubmit={registeform.handleSubmit} >
          
        <div className="my-3">
                  <input className="form-control form  border-bottom border-1 border-dark custom-input" type="email" name="email" id="email" placeholder="Email" onChange={registeform.handleChange} onBlur={registeform.handleBlur} />
                  {registeform.touched.email ?<p className="text-danger">{registeform.errors.email}</p> :""}
        </div>
        

        <div className="my-3">
                  <input className="form-control form border-bottom border-1 border-dark custom-input" type="password" name="password" id="password" placeholder="Password" onChange={registeform.handleChange} onBlur={registeform.handleBlur} />
                  {registeform.touched.password ?<p  className="text-danger">{registeform.errors.password}</p>:""}
          </div>


       <div>
       {loding ?<button type='button' className='btn btn-danger w-100 m-auto d-block'><i className="fa-solid fa-spinner fa-spin"></i></button>:<button disabled={!(registeform.isValid && registeform.dirty)} type="submit"className="btn btn-danger m-auto d-block w-100 my-3">log in</button>}  
       </div>
        </form>
      </div>
    </div>
  </div>
</div>
  </>
}
