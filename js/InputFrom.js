const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');

output.textContent=salary.nodeValue;
salary.addEventListener('input',function(){
    output.textContent=salary.nodeValue;

});

const text =document.querySelector('#text');
const textError =document.querySelector('.texterror');

text.addEventListener('input',function(){
    let nameRegex = RegExp('^[A-Z]{1}[A-Za-z]{2,}$');
    if (nameRegex.test(test.value)) {
        textError.textContent="";
    }
    else{
        textError.textContent="Name is incorrect"
    }
});