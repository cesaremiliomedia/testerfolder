import React, { useState, useEffect } from 'react'
import Shoes from './Shoes'
import Accessories from './Accessories'
import Bags from './Bags'

export default function App() {
  return (
    <div className="" style={{ background: 'white' }}>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
        style={{ minHeight: '400px' }}
      >
        <ol className="carousel-indicators">
          <li data-target="slide-1" data-slide-to="0" className="active"></li>
          <li data-target="slide-2" data-slide-to="1"></li>
          <li data-target="slide-3" data-slide-to="2"></li>
        </ol>
        <div style={{}} className="carousel-inner w-100">
          <div className="carousel-item active">
            <h1>Footwear</h1>

            <Shoes></Shoes>
          </div>
          <div id="slide-2" className="carousel-item">
            <h1>Bags</h1>
            <Bags></Bags>
          </div>
          <div className="carousel-item">
            <h1>accessories</h1>
            <Accessories></Accessories>
          </div>
        </div>
        <a
          style={{ color: 'red' }}
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <i
            style={{ color: 'black' }}
            class="fa fa-chevron-left"
            aria-hidden="true"
          ></i>

          <span className="sr-only">Previous</span>
        </a>
        <a
          style={{ color: 'black' }}
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <i class="fa fa-chevron-right" aria-hidden="true"></i>

          <span className=" sr-only">Next</span>
        </a>
      </div>
    </div>
  )
}
