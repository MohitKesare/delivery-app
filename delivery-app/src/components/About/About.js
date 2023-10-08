import React from 'react'
import '../../components/About/About.css'
import carrier from '../../assets/carrier.png'
import truck from '../../assets/truck.jpg'
import unload from '../../assets/unload.png'
import favicon1 from '../../assets/favicon1.png'
import favicon2 from '../../assets/favicon2.png'
import favicon3 from '../../assets/favicon3.png'
import men from '../../assets/men.jpg'

const About = () => {

    return (
        <div className='about-section'>
            <div className='inabout'>
                <div className='load ' >
                    <div className='img'>
                        <a href='#'> <img src={carrier} /></a>
                    </div>
                    <div className='about-content'>
                        <h4><a href='#'>LOREM ISPUM</a></h4>
                        <a href="#"><p>adipisicing elit. Fuga delectus dolore voluptatum, ipsam est totam, sapiente provident in.asperiores, molestiatque  </p></a>
                        <a href='#'><p>Learn More</p></a>
                    </div>
                </div>
                <div className='load'>
                    <div className='img'>
                        <a href='#'><img src={truck} /></a>
                    </div>
                    <div className='about-content'>
                        <h4><a href='#'>DOLOR SITEMA</a></h4>
                        <a href="#"><p>vero mollitia, facere quis dolore totam voluptates a? Doloribus voluptatum ipsa labore ad fuga alias eius repellat natus modi bo?</p></a>
                        <a href='#'><p>Learn More</p></a>
                    </div>
                </div>
                <div className='load'>
                    <div className='img'>
                        <a href='#'> <img src={unload} /></a>
                    </div>
                    <div className='about-content'>
                        <h4><a href='#'>SED UT PERSPITIATIS</a></h4>
                        <a href='#'>
                            <p> Nam blanditiis maiores quae autem facilis eaque atque, laudantium vitae hic similique mgni corporis in soluta  necessitatibus nobis.</p>
                        </a>
                        <a href='#'><p>Learn More</p></a>
                    </div>
                </div>
            </div>
            <div className='about-us'>
                <div className='real-about'>
                    <div>
                    <h3>About Us</h3>
                    <p className='simplepara'>Dolor iure expedita id fuga asperiores qui sunt consequatur minima. Quidem voluptas deleniti. Sit quia molestiae quia quas qui magnam itaque veritatis dolores. Corrupti totam ut eius incidunt reiciendis veritatis asperiores placeat.</p>
                    </div>
                    <div className='abouticon'>
                        <div className='favicon'>
                            <img src={favicon1} />
                        </div>
                        <div className='favicontext'>
                            <h6>Ullamco laboris nisi ut aliquip consequat</h6>
                            <p>Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade</p>
                        </div>

                    </div>
                    <div className='abouticon'>
                        <div className='favicon'>
                            <img src={favicon2} />
                        </div>
                        <div className='favicontext'>
                            <h6>Ullamco laboris nisi ut aliquip consequat</h6>
                            <p>Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade</p>
                        </div>

                    </div>
                    <div className='abouticon'>
                        <div className='favicon'>
                            <img src={favicon3} />
                        </div>
                        <div className='favicontext'>
                            <h6>Ullamco laboris nisi ut aliquip consequat</h6>
                            <p>Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade</p>
                        </div>

                    </div>
                </div>
                <div className='justimg'>
                    <img src={men}/>
                </div>


            </div>
        </div>
    )
}

export default About
