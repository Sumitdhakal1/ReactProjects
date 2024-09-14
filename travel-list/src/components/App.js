import { useState } from "react";
import Logo  from "./Logo";
import  Form  from "./Form";
import  PackingList  from "./PackingList";

export default function App() {
  const [items, setItems] = useState([])

 function handelAddItems(item){
  setItems(items=> [...items , item])
  }

  function handelDeleteItems(id){
    setItems((items)=>items.filter((item)=>item.id !== id))
  }

  function handelToggleItems(id){
    setItems((items)=>items.map((item)=>item.id === id ?{...item, packed: !item.packed}: item))
  }

  function handelClearItems(){
    const confirmed =window.confirm("Are you sure you want to delete all items?")
    if(confirmed) setItems([])
  }
  return (
    <div>
      <Logo />
      <Form onAddItems={handelAddItems}/>
      <PackingList  items={items} onDeleteItems={handelDeleteItems} onToggleItem={handelToggleItems} onClearList={handelClearItems}/>
      <Stats items={items}/>
    </div>
  );
}



function Stats({items}) {
  if(!items.length) return <p className="stats"><em>start adding some item to your packing list</em></p>
  const newItems = items.length
  const numPacked = items.filter((item)=>item.packed).length
  const percentage = Math.round((numPacked /newItems)*100)
  return (
    <footer className="stats">
      <em>
        {percentage === 100 ? "you got everything to go" :
       ` 🎒 you have ${newItems} on your list, and you already packed ${numPacked} (${percentage}%)`} </em>
    </footer>
  );
}

