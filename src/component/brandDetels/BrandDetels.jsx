import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function BrandDetels() {

    const BaseUrl = "https://la7za-ecommerce.onrender.com"
    let {id} = useParams()

    const [appProduct,setAllProduct] = useState([])

    useEffect(()=>{
        brandDetels()
    },[])
    
    async function brandDetels(){

        const {data} = await axios.get(`${BaseUrl}/api/v1/brand/${id}`)
        console.log(data.brand.allProduct);
        setAllProduct(data.brand.allProduct)
    }

  return <>

<div className="container">
    <div className="row">
        {appProduct.map((product)=>{
            return<>
            
            <div className="col-md-3">
                <div className="border border-1 border-success">
                    <img src={product.imgCover} className='w-100' alt="" />
                </div>
            </div>
            
            </>
        })}
    </div>
</div>

  </>
}
