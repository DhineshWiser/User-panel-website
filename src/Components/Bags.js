import React, { useState, useEffect } from 'react'
import Navbarr from './Navbarr'
import Footer from './Footer'


function Bags() {
    return (
        <div>
            <Navbarr />
            <div class="card bg-dark text-white border-0">
                <img class="card-img" src="/assets/images/bag-panner.jpg" alt="Card image" height="645px" />
            </div>
            <div className=' container'>
                <div className='row mt-5'>
                <h1 className='fw-bold'>-Bags-</h1>
                    <div className='d-flex justify=content-center gap-3 mt-5'>
                        <div class="card w-25" >
                            <img src="/assets/images/laptop-bag.webp" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Laptop bag</p>
                                <p>$2.79</p>
                                <div>
                                    <a href='' className='btn btn-outline-dark py-1 px-1'>Buy now</a>
                                </div>
                            </div>
                        </div>
                        <div class="card w-25" >
                            <img src="/assets/images/travel-bag.webp" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Travel bag</p>
                                <p>$2.79</p>
                                <div>
                                    <a href='' className='btn btn-outline-dark py-1 px-1'>Buy now</a>
                                </div>
                            </div>
                        </div>
                        <div class="card w-25" >
                            <img src="/assets/images/office-bag.webp" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">office bag</p>
                                <p>$2.79</p>
                                <div>
                                    <a href='' className='btn btn-outline-dark py-1 px-1'>Buy now</a>
                                </div>
                            </div>
                        </div>
                        <div class="card w-25" >
                            <img src="/assets/images/college-bag.webp" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">college bag</p>
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

export default Bags