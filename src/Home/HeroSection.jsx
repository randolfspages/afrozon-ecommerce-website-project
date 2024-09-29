import React from 'react'


const cards = [
  {id:1, image:'/card-1.png', trend:'2024 Trend', title:'Women\'s Shirt'},
  {id:2, image:'/card-2.png', trend:'2024 Trend', title:'Women\'s Dresses'},
  {id:3, image:'/card-3.png', trend:'2024 Trend', title:'Women\'s Casuals'},
]

const HeroSection = () => {
  
  return (
    <section className='section__container hero__container container mx-auto px-4'>
       { cards.map((card) => (
          <div key={card.id} className='hero__card'>
              <img src={card.image} alt="" />
              <div className='hero__content'>
                  <p>{card.trend}</p>
                  <h4>{card.title}</h4>
                  <a href="#">Discover More</a>
  
              </div>
          </div>
       ))
       
       }
    </section>
  )
}

export default HeroSection