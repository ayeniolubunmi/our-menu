import React, { useState } from 'react'
import Categories from './Categories';
import Menu from './Menu';
import items from './data';

const allCategories = ['all',...new Set(items.map((item)=>item.category))]

export default function App() {
  const [menuItem, setMenuItem]= useState(items);
  const [categories,setCategories] = useState([allCategories]);
  
  const filterItems = (category)=>{
    if(category==='all'){
      setMenuItem(items);
      return;
    }
    const newItems = items.filter((item)=> 
    item.category === category);
    setCategories(newItems);
  }
  
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our menu</h2>
          <div className='underline'></div>
        </div>
        <div>
          <div>
            <filterItems/>
            <Menu items={menuItem}/>
          </div>
        </div>
      </section>
    </main>
  )
}
