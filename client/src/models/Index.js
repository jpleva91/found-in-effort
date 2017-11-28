import $ from 'jquery';

class Index {
  static all(){
    let request = $.ajax({
      url: "https://pure-bastion-10383.herokuapp.com/daily_motivations",
      method: 'GET'
    });
    return request;
  }
}

export default Index;