

let x = document.getElementById("myselect")
let y = document.getElementById("img")


x.addEventListener('change',() =>{

    if ( x.value === "jo") {
    
        document.getElementById("img").className = "jo"
    }else{
    
        document.getElementById("img").className = "p"
    
    }
})
