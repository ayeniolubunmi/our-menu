import React from 'react'

export default function Menu({items}) {
  return (
    <div className='section-center'>
      {items.map((menuItem)=>{
        const {id,img,title,desc,price}=menuItem;
        return <article key={id} className='item-menu'>
          <img src={img} className='photo' alt={title}/>
          <div className='item-info'>
            <header>
              <h4>{title}</h4>
              <h4 className='price'>{price}</h4>
            </header>
            <p className='text-item'>{desc}</p>
          </div>
          
        </article>
      })}
      <h2>Our menu components</h2>
    </div>
  )
}
