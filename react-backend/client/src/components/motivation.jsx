import React, { Component } from 'react';

class Motivation extends Component {
  render() {
    return (
      <div className="Motivation">
        <section id="section-motivation" class="section" data-stellar-background-ratio="0.5">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="align-center">
                  <div class="testimonial pad-top40 pad-bot40 clearfix">
                    <h5>
                    “Every hour focus your mind attentively on the performance of the task in hand, with dignity, human sympathy, benevolence and freedom, and leave aside all other thoughts. You will achieve this, if you perform each action as if it were your last.”
                    </h5>
                    <br/>
                    <span class="author">&mdash; Marcus Aurelius</span>
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

export default Motivation;