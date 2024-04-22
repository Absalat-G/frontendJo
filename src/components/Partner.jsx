import React from 'react'

const Partner = ({title}) => {
  return (
    <section id="vote" className="">
       <div className="ml-24 text-center mb-8">
    <div className="inline-block">
      <h1 className="text-3xl font-semibold mb-2">
        <span className="border-b-2 border-gray-300 pb-2">{title}</span>
      </h1>
    </div>
    </div>
    </section>
   
  )
}

export default Partner