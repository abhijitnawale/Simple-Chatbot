
function send(){
    var scroll = setInterval(function()
    {window.scrollBy(0, 100)}, 0);//scroll doc 1000 vertically
    var message = document.getElementById('message').value; 
    if(document.getElementById('message').value === ''){
    }else{
    var sb = document.createElement("div");
    var m = document.createTextNode(message);
    var c = document.createAttribute("class");
    c.value = "box sb1";
     sb.setAttributeNode(c);
     sb.appendChild(m);
     document.body.appendChild(sb);
      answer();}
}

function answer(){
    var end = message;
    var message = document.getElementById('message').value;
    var chat = message.substring(0, end);

    document.getElementById('message').value = '';
   
    switch(chat){
    
        case "Hi":
            var ans = "Hello,This is Tony Stark .Ask a Question ?";
        break;
      
        case "what is AI": 
            var ans = "Artificial intelligence is the ability of a computer or a robot controlled by a computer to do tasks that are usually done by humans because  they require human intelligence and discernment.";
        break;
       

        case "what is cloud computing":
            var ans = "Cloud computing is the delivery of different services through the Internet. These resources include tools and applications like data storage, servers, databases, networking, and software. ...";
        break;
       
    
        case "good night":
            var ans = "Good Night 👋";
        break;
       
        case "How old are you?":

            var ans = "I was born 25th November 2018. Now you can calculate.";
        break;
       
        
        case "how are you?":
            var ans = "I'm fine. Thank you and you?";
        break;
       
    
        case "what is machine learning":   
            var ans = "Machine learning is an application of artificial intelligence (AI) that provides systems the ability to automatically learn and improve from experience without being explicitly programmed.";
        break;
       
        case "tell me a joke":
            var ans = 'Patient: "Doctor I am scared. This is my first operation!" Doctor: "Don\'t worry! Mine too."';
        break;
       
    
        case "bye":   
            var ans = 'OK, bye! Have a nice day!!';
        break;
       

        case "yes":   
            var ans = 'Thank you very much! 😃';
        break;

        case "no":   
            var ans = 'Ok, than write please in the comments below, why not.';
        break;
       
        default: var ans = "Sorry, I haven't got an answer for that. 🙁";
        break;
    }
    var sb = document.createElement("div");
    var a = document.createTextNode(ans);
    var c = document.createAttribute("class");
    c.value = "box sb2";
    sb.setAttributeNode(c);
    sb.appendChild(a);
    document.body.appendChild(sb);
}
