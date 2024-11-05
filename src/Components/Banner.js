import Card from 'react-bootstrap/Card';
import { LiaShippingFastSolid } from "react-icons/lia";
import { TbClock24 } from "react-icons/tb";
import { RiMoneyDollarCircleLine } from "react-icons/ri";


function Banner() {
  return (
    <div>
      <div class="card bg-dark text-white border-0">
        <img class="card-img" src="https://flone.jamstacktemplates.dev/assets/img/slider/slider-2.jpg" alt="Card image" height="645px" />
        <div class="card-img-overlay d-flex flex-column justify-content-center text-end">
          <div className='container'>
            <h5 class="card-title display-2 text-black fw-bolder">Men's fashions</h5>
            <p class="card-text text-black fs-3">___stylish___</p>
            <div>
              <a href='' className='btn btn-outline-dark py-1 px-1 fw-bold'>shop now</a>
            </div>
          </div>
        </div>
      </div>
      

      <div className='container'>
        {/* <div className='row'>
          <div className='col-4'>
            <img className='w-100' src="/assets/images/panner1.jpg"  />
          </div>
          <div className='col-4'>
          <img className='w-100' src="/assets/images/panner2.jpg"  />
          </div>
          <div className='col-4'>
          <img className='w-100' src="/assets/images/panner3.jpeg"  />
          </div>
        </div> */}
        <div className='row mt-5'>
          <div className='col-4 '>
            <LiaShippingFastSolid className='fs-1'/>
            <h3>Free Shipping</h3>
            <p >Lorem ipsum dolor sit amet consectetu adipisicing elit sed</p>
          </div>
          <div className='col-4'>
          <TbClock24 className='fs-1'/>
            <h3>Support 24/7</h3>
            <p > Lorem ipsum dolor sit amet consectetu adipisicing elit sed</p>
          </div>
          <div className='col-4'>
          <RiMoneyDollarCircleLine className='fs-1'/>
            <h3>Money Return</h3>
            <p >Lorem ipsum dolor sit amet consectetu adipisicing elit sed</p>
          </div>
        </div>
      </div>

    </div>
  );
}
export default Banner;