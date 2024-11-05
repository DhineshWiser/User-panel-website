import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Products() {
    return (
        <div className=' container' id="categories">
            <div className='row'>
                <div className='col-12 py-5'>
                    <h1 className='display-5 fw-bold '>Categories</h1>
                    <hr />
                </div>

                <div className='buttons d-flex justify=content-center mb-5 pb-5 gap-3'>
                    <a href='#all'><button className='btn btn-outline-dark'>All</button></a>
                    <Link to={"/watch"}>
                        <a href="#watch"><button className='btn btn-outline-dark'>Watch</button></a>
                    </Link>
                    <Link to={"/shoes"}>
                        <a href='#shoes'><button className='btn btn-outline-dark'>Shoes</button></a>
                    </Link>
                    <Link to={"/bags"}>
                        <a href='#bags'><button className='btn btn-outline-dark'>Bags</button></a>
                    </Link>
                </div>
            </div>

            <div className='row'>
                <div className='d-flex justify=content-center gap-3'>
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

            <div className='row mt-4'>
                <div className='d-flex justify=content-center gap-3'>
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

            <div className='row mt-4'>
                <div className='d-flex justify=content-center gap-3'>
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
    )
}

export default Products