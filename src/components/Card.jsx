import React from 'react'

function Card() {

    const Cards =[
        {
        title: `Whitechapel Rd.`,
        des: `Tulare County,  Los Angles, CA 23415`,
        price: `$1456,654.00`,
        logo: `img/card-logo.png` ,
        img: `img/card1.png` ,
     },
        {
        title: `Whitechapel Rd.`,
        des: `Tulare County,  Los Angles, CA 23415`,
        price: `$1456,654.00`,
        logo: `img/card-logo.png` ,
        img: `img/card2.png` ,
     },
        {
        title: `Whitechapel Rd.`,
        des: `Tulare County,  Los Angles, CA 23415`,
        price: `$1456,654.00`,
        logo: `img/card-logo.png` ,
        img: `img/card3.png` ,
     },
        {
        title: `Whitechapel Rd.`,
        des: `Tulare County,  Los Angles, CA 23415`,
        price: `$1456,654.00`,
        logo: `img/card-logo.png` ,
        img: `img/card4.png` ,
     },
        {
        title: `Whitechapel Rd.`,
        des: `Tulare County,  Los Angles, CA 23415`,
        price: `$1456,654.00`,
        logo: `img/card-logo.png` ,
        img: `img/card5.png` ,
     },
        {
        title: `Whitechapel Rd.`,
        des: `Tulare County,  Los Angles, CA 23415`,
        price: `$1456,654.00`,
        logo: `img/card-logo.png` ,
        img: `img/card6.png` ,
     },
      
      
    ];


  return (
    <>
    
      <div className='max-w-7xl px-4 py-10 mx-auto'>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6  '>

   {Cards.map((card, index) => (
     <div key={index} className='relative  rounded-2xl  overflow-hidden transform transition duration-200 hover:scale-[1.03]'>
      <img src={card.img} className='w-full h-auto object-cover'/>
      <img src={card.logo} alt="" className='absolute top-3 right-3 ' />

     <div className='py-4'>
     <h2 className='font-[700]'>{card.title}</h2>
      <p className='text-[#71717A]'>{card.des}</p>
      <h4 className='font-bold mt-2'>{card.price}</h4>
     </div>

     </div>
 ))}

</div>
      </div>
    
    </>
  )
}

export default Card;