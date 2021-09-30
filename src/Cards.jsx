
import React from 'react';
import './App.css';
const Card = (props) => {

    return (
      <>


      <div className="container">
          <div className="row">
            <div className="col-sm-4 py-3 py-sm-0">
              <div className="card">

              

                  <div class="card-body">
                      
                  <img class="card-img-top" src={props.imgsrc} alt={props.imgsrc} height="150px" />
                  <p class="card-title font-weight-bold">  {props.desc}</p>
                      <p class="card-title font-weight-bold">{props.title}</p>
                     
                      

                      <navlink to="" class="btn btn-primary">Click For Login </navlink>
                  </div>

              </div>

          </div>
          <div className="col-sm-4 py-3 py-sm-0">
              <div className="card">

                  

                  <div class="card-body">
                      
                  <img class="card-img-top" src={props.imgsrc} alt={props.imgsrc} height="150px"/>
                  <p class="card-title font-weight-bold">  {props.desc}</p>
                      <p class="card-title font-weight-bold">{props.title}</p>
                   
                      

                      <navlink to="" class="btn btn-primary">Click For Login </navlink>
                  </div>

              </div>

          </div>

          <div className="col-sm-4 py-3 py-sm-0">
              <div className="card">

                  

                  <div class="card-body">
                      
                  <img class="card-img-top" src={props.imgsrc} alt={props.imgsrc} height="150px" />
                  <p class="card-title font-weight-bold">  {props.desc}</p>
                      <p class="card-title font-weight-bold">{props.title}</p>
                     
                      

                      <navlink to="" class="btn btn-primary">Click For Login </navlink>
                  </div>

              </div>

          </div>
      </div>
</div>
  </>
    )

};
export default Card;

