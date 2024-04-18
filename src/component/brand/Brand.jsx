import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";

export default function Brand() {

  const baseUrl = "https://la7za-ecommerce.onrender.com"

  const [allBrand,setAllBrand] = useState([]);
  useEffect(()=>{
    getBrands()
  },[])

  async function getBrands(){

    const {data} = await axios.get(`${baseUrl}/api/v1/brand`)
    setAllBrand(data.brand)

  }



  
  return <>
  
<div className="container">
  <div className="row">
  {allBrand.map((brand)=>{
    return <>
          <div className="col-md-3 py-3">

<div className=''>
<Link to={"/brandDetels/"+brand._id}><img className='w-100' src={brand.logo} alt="" /></Link>
<p className='text-center'>{brand.name}</p>
</div>

</div>
    </>
  })}
  </div>
</div>

  </>
}
