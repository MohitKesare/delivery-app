import '../../components/Services/Services.css'
import React from 'react';
import card1 from '../../assets/card1.jpg'
import card2 from '../../assets/card2.jpg'
import card3 from '../../assets/card3.jpg'
import card4 from '../../assets/card4.jpg'
import card5 from '../../assets/card5.jpg'
import card6 from '../../assets/card6.jpg'

const Services = () => {
    return (
        <div className='services'>
            <div className='underline'>
                <h3>Our Services</h3>
                <div></div>
            </div>
            <div className='cards'>
                <div class="card" >
                    <img src={card1} class="card-img-top" alt="..." />
                    <div class="card-body">
                    <h3 className='card-text'>STORAGE</h3>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div class="card" >
                    <img src={card2} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h3 className='card-text'>LOGISTICS</h3>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div class="card" >
                    <img src={card3} class="card-img-top" alt="..." />
                    <div class="card-body">
                    <h3 className='card-text'>CARGO</h3>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div class="card" >
                    <img src={card4} class="card-img-top" alt="..." />
                    <div class="card-body">
                    <h3 className='card-text'>TRUCKING</h3>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div class="card" >
                    <img src={card5} class="card-img-top" alt="..." />
                    <div class="card-body">
                    <h3 className='card-text'>PACKAGING</h3>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div class="card" >
                    <img src={card6} class="card-img-top" alt="..." />
                    <div class="card-body">
                    <h3 className='card-text'>WAREHOUSING</h3>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Services
