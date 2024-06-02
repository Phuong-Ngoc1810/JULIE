document.querySelector('.img-btn').addEventListener('click', function()
	{
		document.querySelector('.cont').classList.toggle('s-signup')
	}
);

let dataAccoounta = [
    // { 
    //     id: 1,
    //     username: 'admin',
    //     email: 'admin@gmail.com',
    //     password: '123',
    // },

    // { 
    //     id: 2,
    //     username: 'admin2',
    //     email: 'admin2@gmail.com',
    //     password: '123',
    // }

];
// localStorage.setItem('account', JSON.stringify(dataAccoounta));
var dataAccoount = JSON.parse(localStorage.getItem('account'));
function checkEmail(email, password, type) {
    var exists = false;
    for (let i = 0; i < dataAccoount.length; i++){
        if (email===dataAccoount[i].email){
            if(type === 'login'){
                if (password === dataAccoount[i].password){
                    return exists = true; //return không lập nx nếu tìm đc kết quả r
                }
                else{
                    return exists;
                }
            }
            return exists = true;
        }

        
    }
    return exists;
}


function handleLogin(){
    event.preventDefault();
    let valueEmail = document.getElementById('exampleInputEmail1').value;   
    let valuePassword = document.getElementById('exampleInputPassword1').value;
    if(valueEmail !=='' || valuePassword !==''){
        if(checkEmail(valueEmail, valuePassword, 'login')){
            alert('Login Success');
            window.location.href = 'index.html';
        }
        else{
            alert('Login Failure');
        }
    }
    else{
        alert('Please enter a values');
    }
}

function handleRegister(){
    event.preventDefault();
    let valueEmail = document.getElementById('exampleInputEmail2').value;   
    let valuePassword = document.getElementById('exampleInputPassword2').value;
    let valueConfirmPw = document.getElementById('exampleInputCheckPassword3').value;
    if(valueEmail !==''||valuePassword!=''||valueConfirmPw!==''){
        if(checkEmail(valueEmail)){
            alert('Email already exists !');
        }
        else{
            if(valuePassword === valueConfirmPw){
                dataAccoount.push({
                    id: dataAccoount.length + 1,
                    email: valueEmail,
                    password: valuePassword,
                })
                localStorage.setItem('account', JSON.stringify(dataAccoount));
                alert('Register Success');
                window.location.reload();
            }
            else{
                alert('Confirm Password Failed');
            }
        } 
    }
    else{
        alert('Please enter Email and Password');
    }
}
    

