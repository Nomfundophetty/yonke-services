import React from 'react';

  function Content() {
    return (
       <div>
         <section class="">
              <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                     <img class="d-block w-100" src="Images/banner-1.jpg" alt="First slide" style={{height:"auto"}}/>
                  </div>
                  <div class="carousel-item">
                     <img class="d-block w-100 " src="Images/banner-1.jpg" alt="Second slide" style={{height:"auto"}}/>
                  </div>
                  <div class="carousel-item">
                     <img class="d-block w-100" src="Images/banner-1.jpg" alt="Third slide" style={{height:"auto"}}/>
                  </div>
                </div>
               </div>
        </section>   

        <section class="bg-light" id="about">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12">
                 <h3 class="text-center mt-4 text-secondary">Know about us</h3>
               </div>
              </div>
             <div class="row">
                <p class="mt-4 mb-5">If you want to advertise on our platform, list of things needed ................................................................................................ and .............................................. thank you for choosing us </p>
             </div>   
          </div>   
        </section>   

        <section class="" id="destinations">   
         <div class="container">
             <div class="row">
              <div class="col-sm-12 col-md-12">
                 <h3 class="text-center mt-4 text-secondary">Trending Events Around Your Place</h3>
               </div>
              </div>
              <div class="row">
                 <div class="col-sm-4 mb-5">
                    <div class="card mt-4">
                       <img class="card-img-top" src="Images/ig-3.jpg" alt=""/>
                       <div class="card-body">
                          <h4 class="card-title text-secondary">Theatre </h4>
                          <p class="card-text text-secondary">This are all your Theatre events that you can choose from.</p>
                       </div>
                       <div class="card-footer">
                          <a href="#" class="btn btn-primary">See Events</a>
                       </div>
                    </div>
                 </div>
                 <div class="col-sm-4 mb-5">
                    <div class="card mt-4">
                       <img class="card-img-top" src="Images/t-2.jpg" alt=""/>
                       <div class="card-body">
                          <h4 class="card-title text-secondary">Music </h4>
                          <p class="card-text text-secondary">This are all your Music events that you can choose from.</p>
                       </div>
                       <div class="card-footer">
                          <a href="#" class="btn btn-primary">See Events</a>
                       </div>
                    </div>
                 </div>
                 <div class="col-sm-4 mb-5">
                    <div class="card mt-4">
                       <img class="card-img-top" src="Images/t-1.jpg" alt=""/>
                       <div class="card-body">
                          <h4 class="card-title text-secondary">Dance </h4>
                          <p class="card-text text-secondary">This are all your Dance events that you can choose from.</p>
                       </div>
                       <div class="card-footer">
                          <a href="#" class="btn btn-primary">See Events</a>
                       </div>
                    </div>
                 </div>
              </div>
        </div>
       </section>  


       <section class=""  id="places">
        <div class="container">
          <div class="col-sm-12 col-md-12 mb-4">
             <h3 class="text-center text-secondary mt-4">Places and Description</h3>
         </div>
       <div class="accordion" id="accordionExample">
        <div class="card">
         <div class="card-header" id="headingOne">
            <h2 class="mb-0">
            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               Tourist Places
            </button>
            </h2>
         </div>

         <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body">
            This is where u can Advertise more 
            </div>
         </div>
      </div>
      <div class="card">
         <div class="card-header" id="headingTwo">
            <h2 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Best Destination
            </button>
            </h2>
         </div>
         <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div class="card-body">
            This is where u can Advertise more 
            </div>
         </div>
      </div>
      <div class="card">
         <div class="card-header" id="headingThree">
            <h2 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
               Best Heritages
            </button>
            </h2>
         </div>
         <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div class="card-body">
            This is where u can Advertise more 
            </div>
         </div>
      </div>
      </div>
    </div> 
    </section>

    
    <section class="bg-light mt-5" id="tourist">    
     <div class="container">
      <div class="row text-center">
        <div class="col-sm-12 col-md-12 mb-4">
            <h3 class="text-center mt-4 text-secondary">Services Rendered by Others</h3>
         </div>
        <div class="col-md-4">
          <div class="testimonial mb-5">
           <div class="avatar mx-auto">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg" class="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 class="font-weight-bold dark-grey-text mt-4">Plumbling for You</h4>
          <h6 class="font-weight-bold blue-text my-3">Plumbling</h6>
          <p class="font-weight-normal dark-grey-text">
            This are our highly advertised services.</p>
        </div>
      </div>

      <div class="col-md-4">
        <div class="testimonial mb-5">
          <div class="avatar mx-auto">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg" class="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 class="font-weight-bold dark-grey-text mt-4">House and builders</h4>
          <h6 class="font-weight-bold blue-text my-3">Constructions and Renovations</h6>
          <p class="font-weight-normal dark-grey-text">This are our highly advertised services</p>
        </div>

      </div>
      <div class="col-md-4">
        <div class="testimonial mb-5">
          <div class="avatar mx-auto">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" class="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 class="font-weight-bold dark-grey-text mt-4">Clothing Runner</h4>
          <h6 class="font-weight-bold blue-text my-3">Clothes Market</h6>
          <p class="font-weight-normal dark-grey-text">
          This are our highly advertised services</p>
        </div>
        </div>
      </div>
    </div> 
   </section> 
   </div>
    );
  }
  
  export default Content;