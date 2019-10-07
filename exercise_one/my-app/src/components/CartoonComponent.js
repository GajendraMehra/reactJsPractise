import React from 'react'

function CartoonComponent() {
    const cartoons = ['mickey','donal Duck','Tom','Jerry']
    const nameList= cartoons.map((cartoon,index)=>(
        <li key={index+1}>{cartoon}</li>
    ))
    return (
        <ul>
           {nameList}
        </ul>
    )
}

export default CartoonComponent
