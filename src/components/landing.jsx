import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <div className="slider">
          <div id="about-slider">
            <div id="carousel-slider" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators visible-xs">
                <li data-target="#carousel-slider" data-slide-to="0" className="active"></li>
              </ol>
            </div>
            <div className="carousel-inner">
              <div className="item active">
                <img src="img/1.jpg" className="img-responsive" alt=""/>
                <div className="carousel-caption">
                  <div className="wow fadeInUp" data-wow-offset="0" data-wow-delay="0.3s">
                    <h2><span>FOUND IN EFFORT</span></h2>
                  </div>
                  <div className="col-md-10 col-md-offset-1">
                    <div className="wow fadeInUp" data-wow-offset="0" data-wow-delay="0.6s">
                      <p>Let's grow together.</p>
                    </div>
                  </div>
                  <div className="wow fadeInUp" data-wow-offset="0" data-wow-delay="0.9s">
                    <form className="form-inline">
                      <div className="form-group">
                        <a href="#section-motivation" id="get-motivated" className="btn btn-primary btn-lg">Get Motivated</a>
                      </div>
                      <div className="form-group">
                        <a href="#section-contact" id="contact-me" className="btn btn-primary btn-lg">Get More Info</a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;