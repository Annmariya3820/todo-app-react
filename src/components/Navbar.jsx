import React from 'react'

const Navbar = () => {
  return (
    <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">TODO APP</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
             
              <li class="nav-item">
                <a class="nav-link" href="/">Add</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/delete">Delete</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/search">Search</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/view">view</a>
              </li>
            </ul>
           
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
