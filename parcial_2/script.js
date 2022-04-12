var nameError = document.getElementById('name-error')
var ageError = document.getElementById('age-error')
var phoneError = document.getElementById('phone-error')
var emailError = document.getElementById('email-error')
var passwordError = document.getElementById('password-error')
var submitError = document.getElementById('submit-error')

function validateName(){
    var name = document.getElementById('user-name').value;
    if(name.length == 0){
        nameError.innerHTML = 'name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'write full name';
        return false;
    } 
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>'; 
    return true; 
} 

function validateAge(){
    var age = document.getElementById('user-age').value;
    if(age.length == 0){
        ageError.innerHTML = 'age is required';
        return false;
    }
    if(!age.match(/^[0-9]+$/)){
        ageError.innerHTML = 'only numbers';
        return false;
    }
    ageError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true
}

function validatePhone(){
    var phone = document.getElementById('user-phone').value;
    if(phone.length == 0){
        phoneError.innerHTML = 'phone no is required';
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = 'phone should be 10 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'only numbers';
        return false;
    }
    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById('user-email').value;
    if(email.length == 0){
        emailError.innerHTML = 'email is required';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'email must be complete';
        return false;    
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validatePassword(){
    var password = document.getElementById('user-password').value;
    if(password.length == 0){
        passwordError.innerHTML = 'password is required';
        return false;
    }
    if(!password.match(/^[A-Za-z0-9]{8,}$/)){
        passwordError.innerHTML = 'password should be at least 8 characters';
        return false;
    }
    passwordError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validatePassword()){
        submitError.innerHTML = 'please register to continue';
        return false;
    }
    window.open(".html")
    return true;
}

