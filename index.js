function luhn(cardNo){
    let nDigits = cardNo.length;
    let nSum = 0;
    let isSecond = false;
    for(let i = nDigits-1; i>=0; i--){
        let d = cardNo[i].charCodeAt() - '0'.charCodeAt();
            if(isSecond == true)
                d*=2;

            nSum += parseInt(d/10, 10);
            nSum += d%10;
            isSecond = !isSecond;
    }
    return (nSum % 10 == 0);
}

let cardNo = prompt("Please enter your card no");
if (luhn(cardNo) && cardNo.length == 16)
document.write("This is a valid card");
else
document.write("This is not a valid card");