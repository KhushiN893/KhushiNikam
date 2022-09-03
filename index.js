//for navbar
$('.menu-btn').click(function(){
            $('.navbar .menu').toggleClass("active");
            $('.menu-btn i').toggleClass("active");
        });

//for mail
function sendMail() {
       

    
    if(!(document.getElementById("topic").value=="")){
        if(!(document.getElementById("name").value=="")){
        if(!(document.getElementById("message").value=="")){
        if(!(   document.getElementById("email").value=="")){

            emailjs.init('p97pgnUkvChKsPF0E')
             var mails={
                    subject:document.getElementById("topic").value,
                        from_name: document.getElementById("name").value,
                    message:document.getElementById("message").value,    
                    email_id:document.getElementById("email").value
                    }
                
                    emailjs.send("service_a6vsmb9","template_crf5txi",mails).then(function(re){
                    document.getElementById("alert").style.visibility="visible";
                    document.getElementById("topic").value="";
                    document.getElementById("name").value="";
                    document.getElementById("message").value=""; 
                    document.getElementById("email").value="";
                    })
        }}}
    }
}

//resume unavilable
function myresume() {
        document.getElementById("alert2").style.visibility="visible";
        }
  