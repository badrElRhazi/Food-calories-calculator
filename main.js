
        var painCheck=document.getElementById("painID"),
            viandeCheck=document.getElementById("viandeID"),
            legumeCheck=document.getElementById("legumeID"),
            bananeCheck=document.getElementById("bananeID"),
            pommeCheck=document.getElementById("pommeID"),
            yaourtCheck=document.getElementById("yaourtID"),
            /*------------------TEXT--------------------*/
            painText=document.getElementById("painTXT"),
            viandeText=document.getElementById("viandeTXT"),
            legumeText=document.getElementById("legumeTXT"),
            bananeText=document.getElementById("bananeTXT"),
            pommeText=document.getElementById("pommeTXT"),
            yaourtText=document.getElementById("yaourtTXT"),
            calculer=document.getElementById("calculerBTN")
            result=document.getElementById("resultFinal"),
            total=0
            //numbers = /^[0-9]+$/; 
            ;
            
        calculer.addEventListener("click",calF);
        function calF(){
            total=0;
            if(painCheck.checked==false&&viandeCheck.checked==false&&legumeCheck.checked==false&&bananeCheck.checked==false&&pommeCheck.checked==false&&yaourtCheck.checked==false){
                //alert(eroor);
                document.getElementById("errorLab").innerHTML="Error, please choose at least one !";
                return;
            }
            
            if(painCheck.checked){
                total+=painText.value*2.75;
            }
            if(viandeCheck.checked){
                total+=viandeText.value*1.8;
            }
            if(legumeCheck.checked){
                total+=legumeText.value*0.4;
            }
            if(bananeCheck.checked){
                total+=bananeText.value*116;
            }
            if(pommeCheck.checked){
                total+=pommeText.value*80;
            }
            if(yaourtCheck.checked){
                total+=yaourtText.value*140;
            }
            result.value=total;
}
        
