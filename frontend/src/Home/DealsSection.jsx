import React from 'react'




const DealsSection = () => {


  return (
    <section className='container section__container deals__container'>
        <div className='deals__image'>
            <img src="/deals.png" alt="" />
        </div>

        <div className='deals__content'>
            <h5>Get Up To 25% Discount</h5>
            <h4>Deals Of This Month</h4>
            <p>
                Our Women's Fashion Deals of the Month are here to make your
                style dreams a reality without breaking the bank. Discover a curated
                collection of exquisite clothing, accessories and footwears, all
                handpicked to elevate your wardrobe.
            </p>

            <div className='deals__countdown flex-wrap'>
            <div className='deals__countdown__card'>
                    <h4>14</h4>
                    <p>Days</p>
                </div>
            
                <div className='deals__countdown__card'>
                    <h4>20</h4>
                    <p>Hours</p>
                </div>
            
                <div className='deals__countdown__card'>
                    <h4>15</h4>
                    <p>Mins</p>
                </div>
            
                <div className='deals__countdown__card'>
                    <h4>05</h4>
                    <p>Secs</p>
                </div>
            </div>
                
           
        </div>
    </section>
  )
}

export default DealsSection