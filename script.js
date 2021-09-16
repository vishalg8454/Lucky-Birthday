const dobpicker = document.querySelector("#date-input");
const btn = document.querySelector("#btn");
const msg = document.querySelector("#message");
const txtNumber = document.querySelector("#number-input");

btn.addEventListener("click", clickHandler);

function clickHandler() {
    // console.log("here");
    var date = dobpicker.value;
    var newDate = date.replaceAll("-", "");
    var dateSum = computeSum(newDate);
    var luckyNumber = txtNumber.value;
    
    if (date == "" || luckyNumber == "" || date == 0) {
        showMessage("Please enter both fields");
    } else if (dateSum % luckyNumber == 0) {
        showMessage("You are Lucky!");
    } else {
        showMessage("Uh,Oh. Not Lucky :(");
    }
}
function computeSum(date) {
    var sum = 0;
    for (i in date) {
        // console.log(parseInt(date.charAt(i)));
        sum = sum + parseInt(date.charAt(i));
    }
    return sum;
}
function showMessage(message) {
    msg.textContent = message;
}