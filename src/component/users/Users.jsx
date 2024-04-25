import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Users() {


const [users,setUsers] = useState([])
    const headerData={
        token:localStorage.getItem("token"),
    }


    useEffect(()=>{
        user()
    },[])
    

    async function user(){
        const {data} =await axios.get("https://final-form.onrender.com/api/v1/form",  {
            headers: headerData,
            })
        
        setUsers(data.user)
        console.log(data);
    }

console.log(users);
    return <>

<div className="container">
    <div className="row">
        <div className="col-md-12">
            <p className='fw-bold fs-2'>users</p>
        </div>
        
            {users == null ? "" :<>
            
            {users.map((val)=>{
                return<>
                <div className="col-md-12 d-flex align-items-center justify-content-center">
                    <p className='mx-3 me-auto'>{val.firstName}</p>
                    <p className='mx-3 me-auto'>{val.email}</p>
                    <p className='mx-3 me-auto'>{val.government}</p>
                    <p className=''><Link className="nav-link text-nav fw-bold text-uppercase fs-6 "  aria-current="page" to={"/userDetels/"+val._id}><p>show User</p></Link></p>
                </div>
                </>
            })}
            
            </>}
       
    </div>
</div>
  </>
}
