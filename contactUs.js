function formValidate() {
    let name = document.forms["form"]["name"].value;
    let email = document.forms["form"]["email"].value;
    let message = document.forms["form"]["message"].value;

    if(name == "" || email == "" || message == ""){
        window.alert("Please fill in all fileds");
        return false;
    }
    else{
        window.alert("Submitted successfully");
        return true;
    }
}

