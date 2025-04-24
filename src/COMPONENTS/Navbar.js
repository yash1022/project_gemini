import React from 'react';
import "../COMPONENTS/navbar.css";


export default function Navbar({prop}) {
  return (
    <div>
      <nav className="navbar nav" style={{ backgroundColor: '#1b1919' }} data-bs-theme="dark">
        <div className="container-fluid name ">

        <button class="btn btn-primary arrow" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
            </svg>
          </button>

          <div class="offcanvas offcanvas-start " data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel" style={{width:"292px", border:"none"}}>
            <div class="offcanvas-header">
            
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <div className="newchat">

                <button type="button" class="btn btn-dark new-button" style={{display:"flex", alignItems:"center", justifyContent:"start"}} onClick={prop}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="grey" class="bi bi-plus-lg plus-icon" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                  </svg>

                 
                  <p id="new">New chat</p>
                
                  
                </button>
                  

               </div>


               <div class="container  recent-container">

                <p id="recent">Recent</p>


        <div class="row">
            <div class="col">
            Initial Greeting
            </div>
        </div>
        <div class="row">
            <div class="col">
            McLaren F1 GTR
            </div>
        </div>
        <div class="row">
            <div class="col">
            Polymorphism in Programming
            </div>
        </div>
        <div class="row">
            <div class="col">
            Generate an image of a futuris..
            </div>
        </div>
        <div class="row">
            <div class="col">
            visualize the sleep cycle throug..
            </div>
        </div>
    </div>


            </div>
          </div>



          <a className="navbar-brand title" href="#">
            Gemini
          </a>


          <button type="button" className="btn btn-dark ms-auto account" style={{ marginTop: "-60px" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
            </svg>
          </button>



          
        </div>
      </nav>
    </div>
  );
}
