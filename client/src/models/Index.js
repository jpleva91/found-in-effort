import $ from 'jquery';

class Index {
  static all(){
    let request = $.ajax({
      url: "http://foundineffortadmin.herokuapp.com/api/motivations",
      method: 'GET'
    });
    return request;
  }
}

export default Index;