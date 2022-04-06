function inizio(){
    for(i=0;i<1000;i++){
        if(i%10==0){    
            numero.innerHTML += ("<span style='color: red;'>" + i + "</span>" + " ");
        }
        else{
            numero.innerHTML += ("<span style='color: black;'>" + i + "</span>" + " ");
        }

    }
}