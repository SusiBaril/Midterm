//Navbar hover
let menuIcon = document.querySelector('#menu-icon');
let navbars = document.querySelector('.navbars');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbars.classList.toggle('active');
}


//Nav bar toggle
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('nav a[href="#' + id + '"]').classList.add('active');
        }
    });
};

//alert that the message is sent
function sendMessage() {
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    setTimeout(function() {
      alert("Message sent!");
    }, 1000);
  }
