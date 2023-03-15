window.onload = function(){
    var itens = document.getElementsByTagName('li');
    alert("Itens: " + itens.length);

    for (let index = 0; index < itens.length; index++) {
        const element = itens[index];
        
        element.innerText = "Professor " + element.innerText;

        element.onclick = function(){   };
    }

    if( confirm("Fechar?")){
        this.close();
    }
}

