import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="header">
          <section id="header" className="appear">

            <div className="navbar navbar-fixed-top" role="navigation" data-0="line-height:100px; height:100px; background-color:rgba(0,0,0,0.3);" data-300="line-height:60px; height:60px; background-color:rgba(0,0,0,1);">

              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
      						<span className="fa fa-bars color-white"></span>
      					</button>
                <h1><a className="navbar-brand" href="index.html" data-0="line-height:90px;" data-300="line-height:50px;">FOUND IN EFFORT
      					</a></h1>
              </div>
              <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav" data-0="margin-top:20px;" data-300="margin-top:5px;">
                  <li className="active"><a href="#index">Home</a></li>
                  <li><a href="#section-bio">Bio</a></li>
                  <li><a href="#section-motivation">Motivation</a></li>
                  <li><a href="#section-fitness">Fitness</a></li>
                  <li><a href="#section-mentors">Mentors</a></li>
                  <li><a href="#section-workouts">Workouts</a></li>
                  <li><a href="#section-contact">Contact</a></li>
                </ul>
              </div>
            </div>


          </section>
        </div>
      </div>
    );
  }
}

export default Header;