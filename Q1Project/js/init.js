document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
  var elems1 = document.querySelectorAll('.modal0');
  var instances = M.Modal.init(elems1);
  let form = document.getElementsByTagName("form")[0]
  // console.log(form)
  form.addEventListener("submit", function(){
    event.preventDefault();
    document.getElementById("email-input").style.color = "white";
    document.getElementById("password-input").style.color = "white";
    document.getElementById("tel-input").style.color = "white";
    let email = document.getElementById("email-input").value
    let name = document.getElementById("password-input").value
    let tel = document.getElementById("tel-input").value
    let emailStorage=localStorage.setItem('email', email)
    let nameStorage=localStorage.setItem('name', name)
    let telStorage=localStorage.setItem('tel', tel)
    if (name.value != "" && email.value != ""){
      M.toast({html: 'Thank you for submitting your information!'})
    } else {
      return M.toast({html: 'Please enter in valid Information'})
    }

  })
});
(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space
