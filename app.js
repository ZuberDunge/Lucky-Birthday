const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumber = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");

function compareVlues(sum, luckyNumber){
    if(sum%luckyNumber===0){
        outputBox.innerText="Your birthday is lucky";
    }else{
        outputBox.innerText="Your birthday is not lucky";
    }
}
---

function checkLuckyBirthday() {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if(sum&&dob)
    compareVlues(sum, luckyNumber.value);
    else
    outputBox.innerText="Please Enter both fields!"
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