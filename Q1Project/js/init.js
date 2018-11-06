document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
  var elems1 = document.querySelectorAll('.modal1');
  var instances = M.Modal.init(elems1);
  let form = document.getElementsByTagName("form")[0]
  // console.log(form)
  form.addEventListener("submit", function(){
    event.preventDefault();

    let email = document.getElementById("email-input").value
    let name = document.getElementById("password-input").value
    let tel = document.getElementById("tel-input").value
    let emailStorage=localStorage.setItem('email', email)
    let nameStorage=localStorage.setItem('name', name)
    let telStorage=localStorage.setItem('tel', tel)
    if (name.value != "" && email.value != ""){
      alert('Thank you for your information! We will contact you as soon as possible.')
    } else {
      return alert('Please enter valid name and e-mail')
    }

  })
});
(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space
