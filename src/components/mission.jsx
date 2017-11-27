import React, { Component } from 'react';

class Mission extends Component {
  render() {
    return (
      <div className="Mission">
      <section id="section-mission">
        <div class="container">
          <div class="about">
            <div class="row mar-bot40">
              <div class="col-md-offset-3 col-md-6">
                <div class="title">
                  <div class="wow bounceIn">

                    <h2 class="section-heading animated" data-animation="bounceInUp">The Mission</h2>


                  </div>
                </div>
              </div>
            </div>
            <div class="row">

              <div class="row-slider">
                <div class="col-lg-6 mar-bot30">
                  <div class="responsive-slider" data-spy="responsive-slider" data-autoplay="true">
                    <div class="slides" data-group="slides">
                      <ul>

                        <div className="slide-body" data-group="slide">
                          <li><img id="ship" alt="" class="img-responsive" src="img/Ship1.png" width="100%" height="350" /></li>
                        </div>
                      </ul>

                    </div>
                  </div>
                </div>

                <div className="col-lg-6 ">
                  <div className="company mar-left10">
                    <p id="mission-text">If you went through your life full of pain, full of tears, and at the end of your life you actually saved somebody's life, is your life worth living? Is the pain worth someone's if you could save somebody?</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>
      </div>
    );
  }
}

export default Mission;