let button = document.querySelector("button")
let p = document.querySelector("p")
let count = 0;
button.addEventListener('click', function(){
    count++

    p.innerText = count.toString()

    

})