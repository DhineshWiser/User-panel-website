import React, { useState, useEffect } from 'react'
import Navbarr from './Navbarr'
import Footer from './Footer'


function Watch() {
    return (
        <div>
            <Navbarr />
            <div class="card bg-dark text-white border-0">
                <img class="card-img" src="/assets/images/watch-panner.jpg" alt="Card image" height="645px" />
            </div>
            <div className=' container'>
                <div className='row mt-5'>
                    <h1 className='fw-bold'>-Watches-</h1>
                    <div className='d-flex justify=content-center gap-3 mt-5'>
                        <div class="card w-25" >
                            <img src="/assets/images/oip (1).jpeg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Metalic watch</p>
                                <p>$2.79</p>
                                <div>
                                    <a href='' className='btn btn-outline-dark py-1 px-1'>Buy now</a>
                                </div>
                            </div>
                        </div>
                        <div class="card w-25" >
                            <img src="/assets/images/watch2.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Leather watch</p>
                                <p>$2.79</p>
                                <div>
                                    <a href='' className='btn btn-outline-dark py-1 px-1'>Buy now</a>
                                </div>
                            </div>
                        </div>
                        <div class="card w-25" >
                            <img src="/assets/images/watch3.jpeg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Digital watch</p>
                                <p>$2.79</p>
                                <div>
                                    <a href='' className='btn btn-outline-dark py-1 px-1'>Buy now</a>
                                </div>
                            </div>
                        </div>
                        <div class="card w-25" >
                            <img src="/assets/images/watch4.jpeg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Smart watch</p>
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

export default Watch