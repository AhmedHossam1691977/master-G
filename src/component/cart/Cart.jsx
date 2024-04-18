import React from 'react'


export default function Cart({userData}) {



if(userData ==  null){
    window.location.href='/signin';
}



  return <>
      <div className="container">cart</div>
  </>
}
