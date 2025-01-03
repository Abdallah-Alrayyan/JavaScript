let box = document.getElementById("box");
box.style.backgroundColor = "yellow";
box.style.width = "400px";
box.style.height = "100px";
box.style.border = "1px black solid"
box.style.textAlign = "center"


function mv() {
    document.getElementById("box").innerText = "Hello World!";
   

}
function mo() {
    document.getElementById("box").innerText = "Can I Help You?";

}














let test =  document.getElementById("test")
let fonts = document.getElementById("fonts");
let fontSize = document.getElementById("fontSize");






fonts.value ='Times New Roman'; 
fonts.onfocus = function() { fonts.value =''; }; 
fonts.onblur = function() { fonts.value ='Times New Roman'; }; 


fontSize.value = '10px'
fontSize.onfocus = function () {fontSize.value  = '';}
fontSize.onblur = function () {fontSize.value  = '10px';}




console.log(fonts.value);
console.log(fontSize.value);


fonts.addEventListener('change' , () => {
    if (fonts.value == "fantasy") {
        test.style.fontFamily = "fantasy"
    }else {
        test.style.fontFamily = "'Times New Roman', Times, serif"
    }
})

fontSize.addEventListener('change' , () => {
    if (fontSize.value == "15px") {
        test.style.fontSize = "15px"
    }else {
        test.style.fontSize = "10px"
    }
})



let Italic = document.querySelector("input[name=Italic]")
let Bold = document.querySelector("input[name=Bold]")
let Underline = document.querySelector("input[name=Underline]")


Italic.addEventListener('change' , () => {
    if (Italic.checked) {
        test.style.fontStyle = "italic"
    }else {
        test.style.fontStyle = "normal"

    }
})

Bold.addEventListener('change' , () => {
    if (Bold.checked) {
        test.style.fontWeight = "bold"
    }else {
        test.style.fontWeight = "normal"

    }
})

Underline.addEventListener('change' , () => {
    if (Underline.checked) {
        test.style.textDecoration = "underline"
    }else {
        test.style.textDecoration = "none"

    }
})








