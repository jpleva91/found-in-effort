import React, { Component } from 'react';

class Mentors extends Component {
  render() {
    return (
      <div className="Mentors">
        <section id="section-mentors" class="section appear clearfix">
          <div class="container">

            <div class="row mar-bot40">
              <div class="col-md-offset-3 col-md-6">
                <div class="section-header">
                  <h2 class="section-heading animated" data-animation="bounceInUp">Mentors</h2>
                  <p></p>
                </div>
              </div>
            </div>

            <div class="row">
              <nav id="filter" class="col-md-12 text-center">
                <ul>
                </ul>
              </nav>
              <div class="col-md-12">
                <div class="row">
                  <div class="portfolio-items isotopeWrapper clearfix" id="3">

                    <article class="col-md-4 isotopeItem webdesign">
                      <div class="portfolio-item">
                        <div class="wow rotateInUpLeft" data-animation-delay="4.8s">
                          <iframe width="360" height="200" src="https://www.youtube.com/embed/e1-VEu17BR0" frameborder="0" gesture="media" allowfullscreen></iframe>
                        </div>
                      </div>
                    </article>

                    <article class="col-md-4 isotopeItem photography">
                      <div class="portfolio-item">
                        <div class="wow bounceIn">
                          <iframe width="360" height="200" src="https://www.youtube.com/embed/-WL6DMzRZvc" frameborder="0" gesture="media" allowfullscreen></iframe>
                        </div>
                      </div>
                    </article>


                    <article class="col-md-4 isotopeItem photography">
                      <div class="portfolio-item">
                        <div class="wow rotateInDownRight">
                          <iframe width="360" height="200" src="https://www.youtube.com/embed/6HLdrZQSRuE" frameborder="0" gesture="media" allowfullscreen></iframe>
                        </div>
                      </div>
                    </article>

                    <article class="col-md-4 isotopeItem print">
                      <div class="portfolio-item">
                        <div class="wow rotateInUpLeft">
                          <iframe width="360" height="200" src="https://www.youtube.com/embed/khOaAHK7efc" frameborder="0" gesture="media" allowfullscreen></iframe>
                        </div>
                      </div>
                    </article>

                    <article class="col-md-4 isotopeItem photography">
                      <div class="portfolio-item">
                        <div class="wow bounceIn">
                          <iframe width="360" height="200" src="https://www.youtube.com/embed/pi86Nr9Mdms" frameborder="0" gesture="media" allowfullscreen></iframe>
                        </div>
                      </div>
                    </article>

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

export default Mentors;