import React, { Component } from 'react';

class Bio extends Component {
  render() {
    return (
      <div className="Bio">
      <section id="section-bio">
        <div class="container">
          <div class="about">
            <div class="row mar-bot40">
              <div class="col-md-offset-3 col-md-6">
                <div class="title">
                  <div class="wow bounceIn">

                    <h2 class="section-heading animated" data-animation="bounceInUp">Bio</h2>


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
                          <li><img id="bio-pic" alt="" class="img-responsive" src="img/FBpic.jpg" width="100%" height="350" /></li>
                        </div>
                      </ul>

                    </div>
                  </div>
                </div>

                <div className="col-lg-6 ">
                  <div className="company mar-left10">
                    <p id="bio-text">I haven't always known that I had the potential to be someone that others looked up to for advice. I see myself still growing and developing into the person that will day by day help as many people as I can to see that they can make improvements in their lives. Truthfully I relate more than ever because that is what I am doing. I quit my General manager job at my restaurant I had been at for 6 years not because it was a bottomless comfortable pit, but because it was hindering my self development. So all I'm focusing on in my life now is finding a way to add more value to myself than anybody else does and I'll never have to worry about anything. To be the person that does more for others and life will be anything I want out of it. Everyday I'm working harder on myself than anything else. If I become more intelligent, more valuable and more skilled then I can add more value to other people's lives.</p>
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

export default Bio;