import React from 'react'
import { tradingData } from '@/Components/Data/Data'
const HomePage = () => {
  return (
    <div className="h-screen">
      <div>
      <span className="flex justify-center text-3xl uppercase py-2 font-bold">TradeVision</span>
      </div>
        <Tradingposts/>
    </div>
  )
}

function Tradingposts(){
  const data = tradingData
  console.log(data)

  return(
    <div className="grid grid-cols-3 grid-rows-3 gap-4">
    {data.map((item, index) => (
      <Posts key={item.name} item={item} isFirst={index === 0} />
    ))}
  </div>
  )
}



function Posts({item, isFirst}:PostProps){
  return (
    <div
    className={`p-3 ${isFirst ? 'col-span-1 row-span-3' : 'col-span-1 row-span-1'} flex`}
  >
    <div className="p-4 border-2 border-black shadow-md transition-transform transform-gpu hover:-translate-y-1 hover:scale-105">
      <h2 className="text-xl font-semibold">{item.name}</h2>
      <p>{item.description}</p>
    </div>
  </div>
  );
}

export default HomePage
