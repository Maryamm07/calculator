let Input = document.getElementById('inputBox');
let btns = document.querySelectorAll('button');
let string = "";
let arr = Array.from(btns);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            string = eval(string);
            Input.value = string;
        }else if(e.target.innerHTML == 'AC'){
            string = "";
            Input.value = string;
        }else if(e.target.innerHTML == 'DEL'){
            string = Input.value.slice(0, -1);
            Input.value = string;
        }
        else{
        string += e.target.innerHTML;
        Input.value = string;
        }
    })
})

