function sendMail() {
    var params = {
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_gmzsuwe";
    const templateID = "template_evzdp95";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }