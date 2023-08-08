var input = document.getElementsByTagName('input');
for(var i =0; i < input.length; i++){
    input[i].addEventListener("click", function(){
        this.classList.toggle("active");
        //toggle nhay 2 lan tro lai nhu cu
        // this.classList.add("active");
        //k tro lai nhu cu
    })

}