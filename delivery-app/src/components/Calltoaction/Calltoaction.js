import React from 'react'
import '../../components/Calltoaction/Calltoaction.css'
import buildings from '../../assets/buildings.jpg'
import imagetext1 from '../../assets/imagetext1.jpg'
import imagetext2 from '../../assets/imagetext2.jpg'
import imagetext3 from '../../assets/imagetext3.jpg'
import imagetext4 from '../../assets/imagetext4.jpg'

const Calltoaction = () => {
    return (
        <div>
            <div className='headingbox'>
                <img src={buildings} />
                <div className='call'>
                    <h3>Call To Action</h3>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <button placeholder='Call To Action' value="Call To Action">Call To Action</button>
                </div>
            </div>
            <div className='fourdivs'>
                <div className='singlediv shadow-lg p-3 mb-5 bg-body rounded'>
                    <div className='justimage'>
                        <img src={imagetext1} />
                    </div>
                    <div className='image-text'>
                        <h3>
                            Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <ul>
                            <li> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                            <li> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                            <li> Ullam est qui quos consequatur eos accusamus.</li>
                        </ul>
                    </div>
                </div>
                <div className='singlediv shadow-lg p-3 mb-5 bg-body rounded' on>
                    
                    <div className='image-text'>
                        <h3>
                        Corporis temporibus maiores provident
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                     <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                    <div className='justimage'>
                        <img src={imagetext2} />
                    </div>
                </div>
                <div className='singlediv shadow-lg p-3 mb-5 bg-body rounded'>
                    <div className='justimage'>
                        <img src={imagetext3} />
                    </div>
                    <div className='image-text'>
                        <h3>
                        Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas
                        </h3>
                        <p>Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque..</p>
                        <ul>
                            <li> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                            <li> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                            <li> Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.</li>
                        </ul>
                    </div>
                </div>
                <div className='singlediv shadow-lg p-3 mb-5 bg-body rounded'>
                   
                    <div className='image-text'>
                        <h3>
                        Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                    <div className='justimage'>
                        <img src={imagetext4} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calltoaction
