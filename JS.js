function addTask(){
		
    // 1-Create h2 element 
    const h2 = document.createElement("h2");
    
    // 2-Get the text from the input filed 
    const list_item = document.getElementById("input_feild").value;
    
    // 3-Add the text to the h2 element
    h2.innerText=list_item;
    
    // 4-Append the h2 element to the third div 
    document.getElementById("list_items").appendChild(h2);
    
    // clear input feild
    document.getElementById("input_feild").value = "";
}