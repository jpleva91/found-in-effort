import $ from 'jquery';

class Index {
  static all(){
    let request = $.ajax({
      url: "/api",
      method: 'GET'
    });
    return request;
  }
}

export default Index;