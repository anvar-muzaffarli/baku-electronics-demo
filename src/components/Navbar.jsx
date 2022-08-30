import React from 'react'
import {RiSearchEyeLine} from 'react-icons/ri'
import {AiOutlinePhone} from 'react-icons/ai'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src="	https://www.bakuelectronics.az/assets/img/logo.svg" alt="" /></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className="s-input">
        <input type="text" />
        <RiSearchEyeLine className='s-icon' />

      </div>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav mx-auto">
          <a class="nav-link active text-danger" aria-current="page" href="#">Kampaniyalar</a>
          <a class="nav-link" href="#">Mağazalar</a>
          <a class="nav-link" href="#">Balans</a>
          <a class="nav-link" href="#">143 <AiOutlinePhone /></a>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar