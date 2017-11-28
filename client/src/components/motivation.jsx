import React, { Component } from 'react';
import Index from '../models/Index'

class Motivation extends Component {
  constructor(){
    super()
    this.state = {
      daily_motivations: []
    }
  }
  componentDidMount(){
    this.fetchData()
  }
  fetchData(){
    Index.all().then( (res) => {
      this.setState ({
        daily_motivations: res
      })
      console.log('response:',res)
    })
  }
  render(){
    return (
      <div className="Motivation">
        <section id="section-motivation" class="section" data-stellar-background-ratio="0.5">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="align-center">
                  <div class="testimonial pad-top40 pad-bot40 clearfix">
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