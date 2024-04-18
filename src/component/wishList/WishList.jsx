import React from 'react'

export default function WishList({userData}) {

  if(userData ==  null){
    window.location.href='/signin';
}

  return (
    <div>WishList</div>
  )
}
