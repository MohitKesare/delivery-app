import '../../components/Pricing/Pricing.css'
import React from 'react'

const Pricing = () => {
    return (
        <div>
            <div className='heading'>
                <h3>Pricing</h3>
                <div></div>
            </div>
            <div className='options'>
                <div className='option shadow-lg p-3 mb-5 bg-body rounded'>
                    <h4>Free Plan</h4>
                    <h2>$0 <span>/month</span></h2>
                    <ul>
                        <li>Quam adipiscing vitae proin</li>
                        <li>Nec feugiat nisl pretium</li>
                        <li>Nulla at volutpat diam uteera</li>
                        <li>Pharetra massa massa ultricies</li>
                        <li>Massa ultricies mi quis hendrerit</li>
                    </ul>
                    <button placeholder='Buy now'>Buy Now</button>
                </div>
                <div className='option shadow-lg p-3 mb-5 bg-body rounded'>
                    <h4>Business Plan</h4>
                    <h2>$29 <span>/month</span></h2>
                    <ul>
                        <li>Quam adipiscing vitae proin</li>
                        <li>Nec feugiat nisl pretium</li>
                        <li>Nulla at volutpat diam uteera</li>
                        <li>Pharetra massa massa ultricies</li>
                        <li>Massa ultricies mi quis hendrerit</li>
                    </ul>
                    <button placeholder='Buy now'>Buy Now</button>
                </div>
                <div className='option shadow-lg p-3 mb-5 bg-body rounded'>
                    <h4>Developer Plan</h4>
                    <h2>$49 <span>/month</span></h2>
                    <ul>
                        <li>Quam adipiscing vitae proin</li>
                        <li>Nec feugiat nisl pretium</li>
                        <li>Nulla at volutpat diam uteera</li>
                        <li>Pharetra massa massa ultricies</li>
                        <li>Massa ultricies mi quis hendrerit</li>
                    </ul>
                    <button placeholder='Buy now'>Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default Pricing
