import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function UserDetels() {

    let {id} = useParams()
    const [users,setUsers] = useState([])

    const headerData={
        token:localStorage.getItem("token"),
    }


    useEffect(()=>{
        user()
    },[])
    

    async function user(){
        const {data} =await axios.get(`https://final-form.onrender.com/api/v1/form/${id}`,  {
            headers: headerData,
            })
        
        setUsers(data.user)
        console.log(data.user);
    }

// console.log(users);


  return <>
  <div className="container">
    <div className="row">
        <div className="col-md-12">
            {users ? <>
                <h2>users</h2>
                <p className='fw-bold fs-5 py-3'>firstName : <span className='text-danger'> {users.firstName}</span> </p>
                <p className='fw-bold fs-5 py-3'>lastName : <span className='text-danger'> {users.lastName}</span> </p>
                <p className='fw-bold fs-5 py-3'>email : <span className='text-danger'> {users.email}</span> </p>
                <p className='fw-bold fs-5 py-3'>education : <span className='text-danger'> {users.education}</span> </p>
                <p className='fw-bold fs-5 py-3'>experience : <span className='text-danger'> {users.experience}</span> </p>
                <p className='fw-bold fs-5 py-3'>nationality : <span className='text-danger'> {users.nationality}</span> </p>
                <p className='fw-bold fs-5 py-3'>status : <span className='text-danger'> {users.status}</span> </p>
                <p className='fw-bold fs-5 py-3'>government : <span className='text-danger'> {users.government}</span> </p>
                <p className='fw-bold fs-5 py-3'>detailedAdress : <span className='text-danger'> {users.detailedAdress}</span> </p>
                <p className='fw-bold fs-5 py-3'>cv : <span className='text-danger'> <Link className='text-danger' to={users.cv}> {users.cv} </Link> </span> </p>
                <p className='fw-bold fs-5 py-3'>phone : <span className='text-danger'> {users.phone}</span> </p>
                <p className='fw-bold fs-5 py-3'>whatsApp : <span className='text-danger'> {users.whatsApp}</span> </p>
                <p className='fw-bold fs-5 py-3'>language : <span className='text-danger'> {users.language}</span> </p>

            </>:""}
        </div>
    </div>
  </div>
  </>
}
