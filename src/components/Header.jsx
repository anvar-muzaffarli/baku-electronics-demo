import React from 'react'
import MovingText from 'react-moving-text'

const Header = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src="https://www.bakuelectronics.az/assets/cache_image/products/109134/mfe06w50-w-es_260x220_172.jpg"  alt="..."/>
    <MovingText
    className="fromTop"
      type="fadeInFromTop"
      duration="1000ms"
      delay="0s"
      direction="normal"
      timing="ease"
      iteration="1"
      fillMode="none">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui aliquid eveniet a reprehenderit atque magnam.</p>

      </MovingText>

      <MovingText
    className="fromBottom"
      type="fadeInFromBottom"
      duration="1000ms"
      delay="0s"
      direction="normal"
      timing="ease"
      iteration="1"
      fillMode="none">
    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto. <span className='btn btn-warning text-white'>DAXIL OL</span></small>

      </MovingText>



    </div>
    <div className="carousel-item">
      <img src="https://www.bakuelectronics.az/assets/cache_image/products/111666/27049800x0_260x220_172.jpg"  alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.bakuelectronics.az/assets/cache_image/products/104798/new-project-2022-04-15t103116788_260x220_992.png" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Header