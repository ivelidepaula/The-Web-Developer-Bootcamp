var lis = document.querySelectorAll("li"); //This gives me my first li

for(var i = 0; i < lis.length;i++) {
    lis[i].addEventListener("mouseover", function(){
        this.classList.add("selected");        //The keyword 'this' refers to the item/element that the event was triggered on, instead of all the elements.
    });

    lis[i].addEventListener("mouseout", function(){
        this.classList.remove("selected");  
    });
    
    lis[i].addEventListener("click", function(){
        this.classList.toggle("done");
    });
}
