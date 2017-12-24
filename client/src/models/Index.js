import $ from 'jquery';

class Index {
  static all(){
    let request = $.ajax({
      url: "https://foundineffortadmin.herokuapp.com/api/motivations",
      method: 'GET',
      crossDomain: true,
    });
    return request;
  }
}

export default Index;