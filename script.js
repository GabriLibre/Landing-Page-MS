function darkmode() {
    var v = document.getElementById("v")
    console.log("resultado: ",v.checked)
    if(v.checked == true){
        document.getElementById("butão").style.backgroundColor = "rgb(0, 39, 168)"
        document.getElementById("butão").style.color = "rgb(243, 243, 245)"
        document.getElementById("head").style.backgroundColor = "#012cbb"
        document.getElementById("head").style.color = "#ffffff"
        document.getElementById("tit").style.backgroundColor = "rgb(195, 208, 253)"
        document.getElementById("tit").style.backgroundColor = "rgb(195, 208, 253)"
        document.getElementById("bcont1").style.backgroundColor = "rgb(0, 39, 168)"
        document.getElementById("bcont1").style.color = "rgb(243, 243, 245)"
        document.getElementById("conteudo1").style.backgroundColor = "hsl(227, 100%, 73%)"
        document.getElementById("conteudo2").style.backgroundColor = "#c3d0fd"
        document.getElementById("formulario").style.backgroundColor = "#c3d0fd"
        document.getElementById("Informações").style.backgroundColor = "#c3d0fd"
        document.getElementById("Informações").style.color= "#00030a"
        document.body.style.backgroundColor = "#6183ff"
        document.body.style.color = "#00030a"
        document.getElementById("modo").textContent = "Escuro"
    }
    else{
        document.getElementById("butão").style.backgroundColor = "#00E5FF"
        document.getElementById("butão").style.color = "#050511"
        document.getElementById("head").style.backgroundColor = "#5B82A6"
        document.getElementById("tit").style.backgroundColor = "#1a2136"
        document.getElementById("bcont1").style.backgroundColor = "#00E5FF" 
        document.getElementById("bcont1").style.color = "#050511"
        document.getElementById("conteudo1").style.backgroundColor = "#0A1128"
        document.getElementById("conteudo2").style.backgroundColor = "#1C2541"
        document.getElementById("formulario").style.backgroundColor = "#0D0F12"
        document.getElementById("Informações").style.backgroundColor = "#0D0F12"
        document.getElementById("Informações").style.color= "rgb(255, 255, 255)"
        document.body.style.backgroundColor = "#0A1128"
        document.body.style.color = "rgb(255, 255, 255)"
        document.getElementById("modo").textContent = "Claro"

    }
}
