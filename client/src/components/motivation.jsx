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
                    $.ajax({
                      type: 'get',
                      url: '/api'
                    })
                    .done(function(data) {
                      console.log(data);
                    });
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