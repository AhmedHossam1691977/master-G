import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import {  useNavigate } from 'react-router-dom';
export default function Form(token) {
  let [loding,setLoding]=useState(false)

  let [errorMessage,setErrorMessage]=useState("")
  let nav = useNavigate()


  
  let validationSchema = Yup.object({
    firstName: Yup.string().min(3, "min length 3").max(20, "max length 20").required('First Name is required'),
    lastName: Yup.string().min(3, "min length 3").max(20, "max length 20").required('Last Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().required('Phone Number is required'),
    whatsApp: Yup.string().required('WhatsApp Number is required'),
    government: Yup.string().required('Government is required'),
    detailedAdress: Yup.string().required('Detailed Address is required'),
    nationality: Yup.string().required('nationality  is required'),
    education: Yup.string().required('education  is required'),
    birthDate: Yup.string().required(' birthDate is required')
  });

  let registeform = useFormik({
    initialValues: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    whatsApp: "",
    government: "",
    detailedAdress: "",
    status:"",
    experience:"",
    nationality:"",
    education:"",
    jobType:"",
    birthDate:"",
    language:[],
    cv:"",
    },
    onSubmit,
    validationSchema,
  });


const headerData={
    token:localStorage.getItem("token"),
  }


  
async function onSubmit(event) {
  console.log(event);


  setLoding(true);
  setErrorMessage("");

  const formData = new FormData();
  formData.append("firstName", event.firstName);
  formData.append("lastName", event.lastName);
  formData.append("email", event.email);
  formData.append("phone", event.phone);
  formData.append("whatsApp", event.whatsApp);
  formData.append("government", event.government);
  formData.append("detailedAdress", event.detailedAdress);
  formData.append("status", event.status);
  formData.append("experience", event.experience);
  formData.append("nationality", event.nationality);
  formData.append("jobType", event.jobType);
  formData.append("birthDate", event.birthDate);
  formData.append("language", event.language);
  formData.append("education", event.education);

  formData.append("cv", event.cv);


    const {data} = await axios.post("https://final-form.onrender.com/api/v1/form",formData,
      {
        headers: headerData,
      }
    ).catch((error)=>{
      setErrorMessage(error.message);
    })
    
    setLoding(false)

    if(data.message == 'success'){
      setLoding(false)
      nav('/success')
    }

}




  return  <>
  <div className="container py-5">
    <div className="row align-items-center">
          <form  onSubmit={registeform.handleSubmit}>
          {errorMessage == "" ? "":<div className="alert alert-danger">{errorMessage}</div>}

{/* first name */}
<div className="my-3">
    <input  className="form-control form border-bottom border-1 border-dark custom-input"  type="text"  name="firstName"  id="firstName"  placeholder="firstName"  onChange={registeform.handleChange}  onBlur={registeform.handleBlur} />
    {registeform.touched.firstName ?<p className="text-danger">{registeform.errors.firstName}</p>:""}
</div>
{/* last name */}
<div className="my-3">
    <input  className="form-control form border-bottom border-1 border-dark custom-input"  type="text"  name="lastName"  id="lastName"  placeholder="lastName"  onChange={registeform.handleChange}  onBlur={registeform.handleBlur} />
    {registeform.touched.lastName ?<p className="text-danger">{registeform.errors.lastName}</p>:""}
</div>
{/* email */}
<div className="my-3">
    <input  className="form-control form border-bottom border-1 border-dark custom-input"  type="email"  name="email"  id="email"  placeholder="email"  onChange={registeform.handleChange}  onBlur={registeform.handleBlur} />
    {registeform.touched.email ?<p className="text-danger">{registeform.errors.email}</p>:""}
</div>
{/* phone */}
<div className="my-3">
    <input  className="form-control form border-bottom border-1 border-dark custom-input"  type="tel"  name="phone"  id="phone"  placeholder="phone"  onChange={registeform.handleChange}  onBlur={registeform.handleBlur} />
    {registeform.touched.phone ?<p className="text-danger">{registeform.errors.phone}</p>:""}
</div>
{/* WhatsApp */}
<div className="my-3">
    <input  className="form-control form border-bottom border-1 border-dark custom-input"  type="tel"  name="whatsApp"  id="whatsApp"  placeholder="whatsApp"  onChange={registeform.handleChange}  onBlur={registeform.handleBlur} />
    {registeform.touched.whatsApp ?<p className="text-danger">{registeform.errors.whatsApp}</p>:""}
</div>
  {/* government */}
<div className="my-3">
    <input  className="form-control form border-bottom border-1 border-dark custom-input"  type="text"  name="government"  id="government"  placeholder="government"  onChange={registeform.handleChange}  onBlur={registeform.handleBlur} />
    {registeform.touched.government ?<p className="text-danger">{registeform.errors.government}</p>:""}
</div>
    {/* detailedAddress */}
<div className="my-3">
    <input  className="form-control form border-bottom border-1 border-dark custom-input"  type="text"  name="detailedAdress"  id="detailedAdress"  placeholder="detailedAdress"  onChange={registeform.handleChange}  onBlur={registeform.handleBlur} />
    {registeform.touched.detailedAdress ?<p className="text-danger">{registeform.errors.detailedAdress}</p>:""}
</div>

    {/* nationality */}
    <div className="my-3">
    <input  className="form-control form border-bottom border-1 border-dark custom-input"  type="text"  name="nationality"  id="nationality"  placeholder="nationality"  onChange={registeform.handleChange}  onBlur={registeform.handleBlur} />
    {registeform.touched.nationality ?<p className="text-danger">{registeform.errors.nationality}</p>:""}
</div>

    {/* education */}
    <div className="my-3">
    <input  className="form-control form border-bottom border-1 border-dark custom-input"  type="text"  name="education"  id="education"  placeholder="education"  onChange={registeform.handleChange}  onBlur={registeform.handleBlur} />
    {registeform.touched.education ?<p className="text-danger">{registeform.errors.education}</p>:""}
</div>

   {/* birthDate */}
   <div className="my-3">
    <input  className="form-control form border-bottom border-1 border-dark custom-input"  type="date"  name="birthDate"  id="birthDate"  placeholder="birthDate"  onChange={registeform.handleChange}  onBlur={registeform.handleBlur} />
    {registeform.touched.birthDate ?<p className="text-danger">{registeform.errors.birthDate}</p>:""}
</div>

{/* status */}
<div className="my-3">
  <p className="fw-bold">maritalStatus</p>
    <div><input clssName="form-control form border-bottom border-1 border-dark custom-input"
    type="radio"
    name="status"
    id="Single"
    value="single"
    onChange={registeform.handleChange}
    onBlur={registeform.handleBlur}
  />
  <label htmlFor="Single">Single</label></div>
    <div><input clssName="form-control form border-bottom border-1 border-dark custom-input"
    type="radio"
    name="status"
    id="Married"
    value="married"
    onChange={registeform.handleChange}
    onBlur={registeform.handleBlur}
  />
  <label htmlFor="Married">Married</label></div>
    <div><input clssName="form-control form border-bottom border-1 border-dark custom-input"
    type="radio"
    name="status"
    id="Divorced"
    value="divorced"
    onChange={registeform.handleChange}
    onBlur={registeform.handleBlur}
  />
  <label htmlFor="Divorced">Divorced</label></div>
    <div> <input clssName="form-control form border-bottom border-1 border-dark custom-input"
    type="radio"
    name="status"
    id="Widow"
    value="widow"
    onChange={registeform.handleChange}
    onBlur={registeform.handleBlur}
  />
  <label htmlFor="Widow">Widow</label></div>
    <div> <input clssName="form-control form border-bottom border-1 border-dark custom-input"
    type="radio"
    name="status"
    id="SingleMother"
    value="singleMother"
    onChange={registeform.handleChange}
    onBlur={registeform.handleBlur}
  /><label htmlFor="SingleMother">Single Mother</label></div>
    <div>
  <input clssName="form-control form border-bottom border-1 border-dark custom-input"
    type="radio"
    name="status"
    id="PreferNotToSay"
    value="preferNotToSay"
    onChange={registeform.handleChange}
    onBlur={registeform.handleBlur}
  />
  <label htmlFor="PreferNotToSay">Prefer Not To Say</label></div>
</div>

{/* language */}
<div className="my-3">
  <p className="fw-bold">Language</p>
  <div>
    <input
      type="checkbox"
      name="language"
      id="LanguageArabic"
      value="Arabic"
      onChange={registeform.handleChange}
      onBlur={registeform.handleBlur}
    />
    <label htmlFor="LanguageArabic">Mother tongue (Arabic)</label>
  </div>
  <div>
    <input
      type="checkbox"
      name="language"
      id="LanguageEnglish"
      value="English"
      onChange={registeform.handleChange}
      onBlur={registeform.handleBlur}
    />
    <label htmlFor="LanguageEnglish">English</label>
  </div>
  <div>
    <input
      type="checkbox"
      name="language"
      id="LanguageFrench"
      value="French"
      onChange={registeform.handleChange}
      onBlur={registeform.handleBlur}
    />
    <label htmlFor="LanguageFrench">French</label>
  </div>
  <div>
    <input
      type="checkbox"
      name="language"
      id="LanguageTurkey"
      value="Turkey"
      onChange={registeform.handleChange}
      onBlur={registeform.handleBlur}
    />
    <label htmlFor="LanguageTurkey">Turkey</label>
  </div>
</div>

  
{/* experiance */}

<div className="my-3">
  <p className="fw-bold">Experience</p>
  <div>
    <input
      
      type="radio"
      name="experience"
      id="experienceNotExperienced"
      value="notExperienced"
      onChange={registeform.handleChange}
      onBlur={registeform.handleBlur}
    />
    <label htmlFor="experienceNotExperienced">Not Experienced</label>
  </div>
  <div>
    <input
      
      type="radio"
      name="experience"
      id="experienceLessThanOneYear"
      value="lessThanOneYear"
      onChange={registeform.handleChange}
      onBlur={registeform.handleBlur}
    />
    <label htmlFor="experienceLessThanOneYear">Less Than One Year</label>
  </div>
  <div>
    <input
      
      type="radio"
      name="experience"
      id="experienceOneYear"
      value="oneYear"
      onChange={registeform.handleChange}
      onBlur={registeform.handleBlur}
    />
    <label htmlFor="experienceOneYear">One Year</label>
  </div>
  <div>
    <input
      
      type="radio"
      name="experience"
      id="experienceTwoYears"
      value="twoYears"
      onChange={registeform.handleChange}
      onBlur={registeform.handleBlur}
    />
    <label htmlFor="experienceTwoYears">Two Years</label>
  </div>
  <div>
    <input
      
      type="radio"
      name="experience"
      id="experienceThreeYears"
      value="threeYears"
      onChange={registeform.handleChange}
      onBlur={registeform.handleBlur}
    />
    <label htmlFor="experienceThreeYears">Three Years</label>
  </div>
  <div>
    <input
      
      type="radio"
      name="experience"
      id="experienceFourYears"
      value="fourYears"
      onChange={registeform.handleChange}
      onBlur={registeform.handleBlur}
    />
    <label htmlFor="experienceFourYears">Four Years</label>
  </div>
  <div>
    <input
      
      type="radio"
      name="experience"
      id="experienceFiveYearsOrMore"
      value="fiveYearsOrMore"
      onChange={registeform.handleChange}
      onBlur={registeform.handleBlur}
    />
    <label htmlFor="experienceFiveYearsOrMore">Five Years or More</label>
  </div>
</div>


{/* jop type */}
<div className="my-3">
  <p className="fw-bold">Job Type</p>
  <div>
    <input
     
      type="radio"
      name="jobType"
      id="jobTypeCustomerService"
      value="customerService"
      onChange={registeform.handleChange}
      onBlur={registeform.handleBlur}
    />
    <label htmlFor="jobTypeCustomerService">Customer Service</label>
  </div>
  <div>
    <input
     
      type="radio"
      name="jobType"
      id="jobTypeIT"
      value="it"
      onChange={registeform.handleChange}
      onBlur={registeform.handleBlur}
    />
    <label htmlFor="jobTypeIT">IT</label>
  </div>
  <div>
    <input
     
      type="radio"
      name="jobType"
      id="jobTypeHR"
      value="hr"
      onChange={registeform.handleChange}
      onBlur={registeform.handleBlur}
    />
    <label htmlFor="jobTypeHR">HR</label>
  </div>
  <div>
    <input
      type="radio"
      name="jobType"
      id="jobTypeShippingEmployee"
      value="shippingEmployee"
      onChange={registeform.handleChange}
      onBlur={registeform.handleBlur}
    />
    <label htmlFor="jobTypeShippingEmployee">Shipping Employee</label>
  </div>
</div>



 {/* <div className="my-3">
  <p className="fw-bold">CV</p>
  <input type="file"   onChange={registeform.handleChange} name="cv" id="cv" />
</div>  */}

<div className="my-3">
              <p className="fw-bold">CV</p>
              <input
                type="file"
                onChange={(event) => {
                  registeform.setFieldValue("cv", event.currentTarget.files[0]); // تعيين قيمة الملف في useFormik
                }}
                name="cv"
                id="cv"
              />
            </div>


            {loding ?<button type='button' className='btn btn-danger m-auto d-block w-100 my-3'><i className="fa-solid fa-spinner fa-spin"></i></button>:<button disabled={!(registeform.isValid && registeform.dirty)} type="submit"className="btn btn-danger m-auto d-block w-100 my-3">submit</button>}  


          
          </form>
  
        </div>

  </div>
</>
}
