import React, { Component } from 'react';
import Index from '../models/Index'

class Motivation extends Component {
  constructor(){
    super()
    this.state = {
    }
  }
  componentDidMount(){
    this.fetchData()
  }
  fetchData(){
    Index.all().then( (res) => {
      const data = res.data.reverse();
      this.setState ({
        content: data[0].content,
        author: data[0].author
      });
    });
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
                  <h5>"{this.state.content}"</h5>
                  <br/>
                  <span class="author">&mdash; {this.state.author}</span>
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