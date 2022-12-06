function validateEmail(email) {
    if(!email.endsWith('.com')){
        return false
    }else if(!email.includes('@')){
        return false
    }else if(email.startsWith('@') || email.startsWith('.')){
        return false
    }
    return true
}

function validatePassword(password){
    var thisLowerCase = false
    var thisUpperCase = false
    var thisNumeric = false
    for(let i = 0; i < password.length; i++){
        if(password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122) {
            thisLowerCase = true
        }else if(password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 97){
            thisUpperCase = true
        }
        else if(password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57){
            thisNumeric = true
        }
    }
    if(thisLowerCase && thisUpperCase && thisNumeric){
        return true
    }   
    else{
         return false
    } 
}
function validateConfirmpassword(confirmpassword){
    var thisLowerCase = false
    var thisUpperCase = false
    var thisNumeric = false
    for(let i = 0; i < confirmpassword.length; i++){
        if(confirmpassword.charCodeAt(i) >= 97 && confirmpassword.charCodeAt(i) <= 122) {
            thisLowerCase = true
        }else if(confirmpassword.charCodeAt(i) >= 65 && confirmpassword.charCodeAt(i) <= 97){
            thisUpperCase = true
        }
        else if(confirmpassword.charCodeAt(i) >= 48 && confirmpassword.charCodeAt(i) <= 57){
            thisNumeric = true
        }
    }
    if(thisLowerCase && thisUpperCase && thisNumeric){
        return true
    }   
    else{
         return false
    } 
}
var submitBtn = document.getElementById('submit-btn')
submitBtn.addEventListener('click', function(e){
    e.preventDefault()
    var username = document.getElementById('username').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var confirmpassword = document.getElementById('confirmpassword').value
    var agree = document.getElementById('agree').checked

    if(username.length < 6 || username.length > 15){
        alert('Username must be 6 - 15 characters long')
        // var usernameError = document.getElementById('username-error')
        // usernameError.innerText = 'Username must be 6 - 15 characters long'
        // usernameError.style.color = 'red'
        // usernameError.style.display = 'block'
    }
    else if(!validateEmail(email)){
        alert('Email must be using `.com`')
    }
    else if(!validatePassword(password)){
        alert('Password must be alphabet, numeric, and upper lower case')
    }
    else if(!validateConfirmpassword(confirmpassword)){
        alert('Password not same')
    }
    else if(!agree){
        alert('You must agree to the terms and condition')
    }else{
        alert('Account has been registered')
    }
})
