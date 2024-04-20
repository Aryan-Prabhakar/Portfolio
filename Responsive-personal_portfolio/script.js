let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });
    let header=document.querySelector('header');

    header.classList.toggle('sticky',window.screenY>100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
    //reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content,.heading',{origin:'top'});
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1,.about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p,.about-content',{origin:'right'});

const typed = new Typed('.multiple-text',{
    strings:['School student in 10th standard ','Full Stack Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

// Google Apps Script code
function doPost(e) {
  // Get form data
  var formData = e.parameter;
  
  // Modify this line to customize the email subject
  var subject = 'Form Submission Received';
  
  // Modify this line to customize the email body
  var message = 'Form data:\n';
  for (var field in formData) {
    message += field + ': ' + formData[field] + '\n';
  }
  
  // Modify this line to specify your email address
  var emailAddress = 'ak2915285@gmail.com';
  
  // Send email
  MailApp.sendEmail({
    to: emailAddress,
    subject: subject,
    body: message
  });
  
  // Return a success message
  return ContentService.createTextOutput('Form submission received successfully.');
}
