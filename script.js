var button1=document.getElementById("try_button");
button1.addEventListener("click", function()
{
    var intext=document.getElementById("txt").value;
    var outtext=intext.toUpperCase();
    document.getElementById("txt").value=outtext;
})
//Funktion till knapp, omvandlar små bokstäver till stora.