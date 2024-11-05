import React, { useState, useEffect } from 'react'
import Navbarr from './Navbarr'
import Footer from './Footer'


function Shoes() {
    return (
        <div>
            <Navbarr />
            <div class="card bg-dark text-white border-0">
                <img class="card-img" src="/assets/images/shoes-panner.jpg" alt="Card image" height="645px" />
            </div>
            <div className=' container' >
                <div className='row mt-5'>
                <h1 className='fw-bold'>-Shoes-</h1>
                    <div className='d-flex justify=content-center gap-3 mt-5'>
                        <div class="card w-25" >
                            <img src="/assets/images/casual-shoes-white.webp" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">casual white shoes</p>
                                <p>$2.79</p>
                                <div>
                                    <a href='' className='btn btn-outline-dark py-1 px-1'>Buy now</a>
                                </div>
                            </div>
                        </div>
                        <div class="card w-25" >
                            <img src="/assets/images/formal-shoes.jpeg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Formal shoes</p>
                                <p>$2.79</p>
                                <div>
                                    <a href='' className='btn btn-outline-dark py-1 px-1'>Buy now</a>
                                </div>
                            </div>
                        </div>
                        <div class="card w-25" >
                            <img src="/assets/images/boots-shoes.jpeg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Boots shoes</p>
                                <p>$2.79</p>
                                <div>
                                    <a href='' className='btn btn-outline-dark py-1 px-1'>Buy now</a>
                                </div>
                            </div>
                        </div>
                        <div class="card w-25" >
                            <img src="/assets/images/shorts-shoes.jpeg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Shorts shoes</p>
                                <p>$2.79</p>
                                <div>
                                    <a href='' className='btn btn-outline-dark py-1 px-1'>Buy now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Shoes