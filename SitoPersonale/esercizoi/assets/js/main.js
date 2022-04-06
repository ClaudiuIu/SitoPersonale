function inizio(){
    for(i=0;i<1000;i++){
        if(i%10==0){   
            if(i%2==0) {
                numero.innerHTML += ("<span style='color: red; font-weight: bold;'>" + i + "</span>" + " ");
            }
            else{
                numero.innerHTML += ("<span style='color: red;'>" + i + "</span>" + " ");
            }
        }
        else{
            if(i%2==0) {
            numero.innerHTML += ("<span style='color: black; font-weight: bold;'>" + i + "</span>" + " ");
            }
            else{
                numero.innerHTML += ("<span style='color: black;'>" + i + "</span>" + " ");
            }
        }

    }
}
