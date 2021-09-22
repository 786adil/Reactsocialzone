
import React from 'react';
import './App.css';
const Card = (props) => {

    return (
      <>


      <div className="container">
          <div className="row">
            <div className="col-sm-4 py-3 py-sm-0">
              <div className="card">

                  <img class="card-img-top" src={props.imgsrc} alt={props.imgsrc} />

                  <div class="card-body">
                      

                  <p class="card-title font-weight-bold">{props.course}</p>
                      <p class="card-title font-weight-bold">{props.title}</p>
                      <p class="card-title font-weight-bold"> Rs {props.price}/=</p>
                      

                      <navlink to="" class="btn btn-primary">Add to cart</navlink>
                  </div>

              </div>

          </div>
          <div className="col-sm-4 py-3 py-sm-0">
              <div className="card">

                  <img class="card-img-top" src={props.imgsrc} alt={props.imgsrc} />

                  <div class="card-body">
                      

                  <p class="card-title font-weight-bold">{props.course}</p>
                      <p class="card-title font-weight-bold">{props.title}</p>
                      <p class="card-title font-weight-bold"> Rs {props.price}/=</p>
                      

                      <navlink to="" class="btn btn-primary">Add to cart</navlink>
                  </div>

              </div>

          </div>

          <div className="col-sm-4 py-3 py-sm-0">
              <div className="card">

                  <img class="card-img-top" src={props.imgsrc} alt={props.imgsrc} />

                  <div class="card-body">
                      

                      <p class="card-title font-weight-bold">{props.course}</p>
                      <p class="card-title font-weight-bold">{props.title}</p>
                      <p class="card-title font-weight-bold"> Rs {props.price}/=</p>
                      

                      <navlink to="" class="btn btn-primary">Add to cart</navlink>
                  </div>

              </div>

          </div>
      </div>
</div>
  </>
    )

};
export default Card;

