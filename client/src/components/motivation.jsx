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
      const response = res.reverse();
      console.log(response);
      console.log(response.data);
      console.log(res.data);
      // console.log(res.data.content);
      // console.log(res[0].data.author);
      this.setState ({
        content: '',
        author: ''
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
                  <h5>{this.state.content}</h5>
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