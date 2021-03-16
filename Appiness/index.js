function submitfunc() {
    var fullname = document.getElementById('Fullname').value;
    var email = document.getElementById('Email').value;
    if( fullname!="" && email!="" ){
      alert('Login Sucessfully');
    }
    else if( fullname!="" && ( email=="" || email==undefined ) ){
      document.getElementById('Email').className="card_Error";
    }
    else if( (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) && ( fullname=="" || fullname==undefined ) ){   
      document.getElementById('Fullname').className="card_Error";
    }
    else {
      document.getElementById('Email').className="card_Error";
      document.getElementById('Fullname').className="card_Error";
    }        
  }

  function changeBorder() {
    document.getElementById("Fullname").className = "card_input";
    document.getElementById("Email").className = "card_input";
  }

  function bookAnOppointment() {
    alert('Please Login to Book an appointment')
  }