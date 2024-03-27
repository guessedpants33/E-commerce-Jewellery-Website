import React from 'react'
import './Popular.css'
import data_product from '../assets/data.jsx'
import Item from '../Item/item'
const Popular = () => {
    return (
        <div className='popular'>
            <h1>POPULAR FOR WOMEN</h1>
            <hr />
            <div className="popular-Item">
                {data_product.map((item, i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price}/>
                })}
            </div>
        </div>
    )
}

export default Popular

