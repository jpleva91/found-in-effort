import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
      <section id="section-contact" class="section appear clearfix">
        <div class="container">

          <div class="row mar-bot40">
            <div class="col-md-offset-3 col-md-6">
              <div class="section-header">
                <h2 class="section-heading animated" data-animation="bounceInUp">Contact me</h2>
                <p></p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-8 col-md-offset-2">
              <div id="sendmessage">Your message has been sent. Thank you!</div>
              <div id="errormessage"></div>
              <form action="" method="post" role="form" class="contactForm">
                <div class="form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                  <div class="validation"></div>
                </div>

                <div class="text-center"><button type="submit" class="line-btn blue">Send Message</button></div>
              </form>
            </div>
          </div>

        </div>
      </section>
      </div>
    );
  }
}

export default Contact;