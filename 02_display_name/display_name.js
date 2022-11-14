function print_after_end(document, element, word){
    if(document.getElementById("added_text") === null){
        if (word === ""){
            element.insertAdjacentHTML("afterend", "<span id = \"added_text\">Textbox is blank!</span>")
            return;
        }
        str = "<span id = \"added_text\">Hi, " + word + "! Welcome to this website!</span>"
        element.insertAdjacentHTML("afterend", str);
    }else{
        if (word === ""){
            document.getElementById("added_text").innerText = "Textbox is blank!";
            return;
        }
        str = "Hi, " + word + "! Welcome to this website!"
        document.getElementById("added_text").innerText = str;
    }
}