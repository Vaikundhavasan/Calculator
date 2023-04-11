const button_input = document.querySelectorAll(".input-button");
const input = document.getElementById("input");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");
const erase = document.getElementById("erase");


button_input.forEach((button_class) => {
    button_class.addEventListener('click' , () => {
        input.value += button_class.value;
    });
});

equal.addEventListener('click' , () => {
    let solution = eval(input.value);
    input.value = solution;
});

clear.addEventListener('click' , () => {
    input.value='';
});

erase.addEventListener('click' , () => {
    input.value = input.value.substr(0, input.value.length-1);
})