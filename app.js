const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const username = document.querySelector("#name");
const checkNumber = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");
const notluckyname = document.querySelector(".you-not-lucky")
const errorBox = document.querySelector("#error-box");
var loadingImg = document.querySelector('.loading-img');
var loadingTxt = document.querySelector('.loading-txt');
var Blur = document.querySelector('.blur');
const closeButton = document.querySelectorAll(".reset-button");
const imgDiv = document.querySelector(".imgDiv");

function compareVlues(sum, luckyNumber) {

    if (sum % luckyNumber === 0) {

        setTimeout(function () {
            loadingImg.style.display = `none`;
            outputBox.style.display = `block`;
            loadingTxt.innerText = "";
            Blur.style.filter = "blur(10px)"
            notluckyname.innerHTML = `Yayyyy!! <span>${username.value} </span><br> Your birthday is lucky`;
            imgDiv.innerHTML = ` <img src="./lucky.svg">`
        }, 2000);
        errorBox.style.display = `none`;
        loadingImg.style.display = `block`;
        loadingTxt.innerText = `Hang on we're  working on it!`;
        Blur.style.filter = "blur(10px)"
    } else {

        setTimeout(function () {
            loadingImg.style.display = `none`;
            outputBox.style.display = `block`;
            loadingTxt.innerText = "";
            Blur.style.filter = "blur(10px)"
            notluckyname.innerHTML = `Sorry!! <span>${username.value} </span><br>Your birthday is not lucky,<br><span>but you're 💕</span> `;
            imgDiv.innerHTML = ` <img src="./luckno-y.svg">`
        }, 2000);
        errorBox.style.display = `none`;
        loadingImg.style.display = `block`;
        loadingTxt.innerText = `Hang on we're  working on it!`;
        Blur.style.filter = "blur(10px)"

    }
}


function checkLuckyBirthday() {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    const luckNumber = Number(luckyNumber.value);
    if (username.value && sum && dob && luckNumber > 0)
        compareVlues(sum, luckNumber);

    else
        errorBox.style.display = `block`;
    errorBox.innerText = "Please Enter All fields with valid inputs!"

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

closeButton.forEach(item => {
    item.addEventListener("click", () => {
        username.value = "";
        luckyNumber.value = "";
        dateOfBirth.type = "type";
        dateOfBirth.value = "";
        Blur.style.filter = "none";
        outputBox.style.display = "none";
        console.log("clicked");
        errorBox.innerText = ""
    })
})