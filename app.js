const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumber = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");
const errorBox = document.querySelector("#error-box");
var loadingImg  = document.querySelector('.loading-img');

function compareVlues(sum, luckyNumber){
    if(sum%luckyNumber===0){

        setTimeout(function(){  
           
            loadingImg.style.display = `none`;       
            outputBox.style.display = `block`;    
            outputBox.innerText="Yayyyy!! Your birthday is lucky";
            }, 3000);
            errorBox.style.display = `none`;
            loadingImg.style.display = `block`;      
            outputBox.innerText = 'Hang on our robot is working on it!';
            outputBox.style.display = `block`;


        



    }else{

        setTimeout(function(){  
           
            loadingImg.style.display = `none`;       
            outputBox.style.display = `block`;    
            
        outputBox.innerText="Aww Your birthday is not lucky ( but You're <3)";
            }, 3000);
            errorBox.style.display = `none`;
            loadingImg.style.display = `block`;      
            outputBox.innerText = 'Hang on our robot is working on it!';
            outputBox.style.display = `block`;


        





    }
}


function checkLuckyBirthday() {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    const luckNumber = Number(luckyNumber.value);
    if(sum&&dob&&luckNumber)
    compareVlues(sum, dob, luckNumber);
    
    else
    errorBox.style.display = `block`;
    errorBox.innerText="Please Enter both fields!"
}

function calculateSum(dob) {
    dob = dob.replaceAll("-", "");
    let sum = 0;
    for (let index = 0; index < dob.length; index++) {
        sum = sum + Number(dob.charAt(index));
    }
    return sum;

}


checkNumber.addEventListener('click', checkLuckyBirthday)