let inner = document.getElementById('z');
let random = document.getElementById('random');
let random2= Math.floor(Math.random()*10000).toString();
random.innerText = random2;
function key2() {
    let pass1 = document.getElementById("b");
    let pass2 = pass1.value;
    let message = document.getElementById("inner");
    if (pass2.length === 11 && !isNaN(pass2) && pass2.charAt(0) === "0" && pass2.charAt(1) === "9") {
        message.innerText = "شماره معتبر است";
        message.style.color = "green";
        pass1.style.borderColor = "green";
    } else {
        message.innerText = "شماره باید حداقل 11 باشد و شماره متن نباشد";
        message.style.color = "red";
        pass1.style.borderColor = "red";
    }
}

function key3() {
    let pass1 = document.getElementById("c");
    let pass2 = pass1.value;
    let message = document.getElementById("innerr");
    if (pass2.length >= 8) {
        message.innerText = "رمز معتبر است";
        message.style.color = "green";
        pass1.style.borderColor = "green";
    } else {
        message.innerText = "رمز باید حداقل 8 حرف باشد";
        message.style.color = "red";
        pass1.style.borderColor = "red";
    }
}

function key4() {
    let tek_ramz = document.getElementById('d');
    let tek_ramz2 = tek_ramz.value;
    let j = document.getElementById('innerrr');
    let pass1 = document.getElementById("c");
    let pass2 = pass1.value;
    if (pass2 === tek_ramz2) {
        j.innerText = 'تکرار رمز صحیح است';
        j.style.color = 'green';
        tek_ramz.style.borderColor = 'green';
    } else {
        j.innerText = 'تکرار رمز صحیح نیست';
        j.style.color = 'red';
        tek_ramz.style.borderColor = 'red';
    }
}
function key5() {
    let tecrar_secrity = document.getElementById("da");
    let javab = document.getElementById("qqq");
    if (tecrar_secrity.value === random2){
        javab.innerText = 'رمز سیکرتی وارد شده صحیح است';
        javab.style.color = 'green';
        tecrar_secrity.style.borderColor = 'green';
    } else{
        javab.innerText = 'رمز سیکرتی وارد شده صحیح نیست';
        javab.style.color = 'red';
        tecrar_secrity.style.borderColor = 'red';
    }
}


function sabtnam() {
    let users = [];
    let name = document.getElementById('a').value.trim();
    let phone = document.getElementById('b').value.trim();
    let pass = document.getElementById('c').value.trim();
    let pass2 = document.getElementById('d').value.trim();
    let code_secrity = document.getElementById('da').value.trim();
    let dokme = document.getElementById('lll');
    if (null === name || phone === null || pass === null || pass2 === null || code_secrity === null || pass !== pass2 || code_secrity !== random2){
        inner.innerText = "ثبت نام انجام نشد";
        inner.style.color = 'red';
        dokme.style.background = "red";
        dokme.style.borderColor = "red";
        setTimeout(function () {
            inner.innerText = "ثبت نام";
            inner.style.color = "black";
            dokme.style.background = "blue";
            dokme.style.borderColor = "blue";
        },2000)
    } else {
        let user = {
            name: name,
            phone: phone
        };
        users.push(user);
        inner.innerText = "ثبت نام انجام شد";
        inner.style.color = "green";
        dokme.style.background = "green";
        dokme.style.borderColor = "green";
        setTimeout(function () {
            inner.innerText = "ثبت نام";
            inner.style.color = "black";
            dokme.style.background = "blue";
            dokme.style.borderColor = "blue";
        },2000);
        console.log(users);
    }
}
