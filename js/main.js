$(document).ready(function(){
    $("input").on('change keyup', function(){

        let lista = []

        lista[0] = $("#tl_border").val()
        lista[1] = $("#tr_border").val()
        lista[2] = $("#bl_border").val()
        lista[3] = $("#br_border").val()

        for(i in lista){
            if (lista[i] == ""){
                lista[i] = "0";
            }
        }
        $("#objeto").css({
            "border-radius": lista[0]+"px "+lista[1]+"px "+lista[2]+"px "+lista[3]+"px",
            "-moz-border-radius": lista[0]+"px "+lista[1]+"px "+lista[2]+"px "+lista[3]+"px",
            "-webkit-border-radius": lista[0]+"px "+lista[1]+ "px "+lista[2]+"px "+lista[3]+"px",
            "-o-border-radius": lista[0]+"px "+lista[1]+"px "+lista[2]+"px "+lista[3]+"px",
        });

        $("#fraseObjeto").css({"padding-top": 17+"%"})

        $("#fraseObjeto").html(
            "border-radius: " + lista[0]+"px "+lista[1]+"px "+lista[2]+"px "+lista[3]+"px;<br>" +
            "-moz-border-radius: " + lista[0]+"px "+lista[1]+ "px "+lista[2]+"px "+lista[3]+"px;<br>" +
            "-webkit-border-radius: " + lista[0]+"px "+lista[1]+"px "+lista[2]+"px "+lista[3]+"px;<br>" +
            "-o-border-radius: " + lista[0]+"px "+lista[1]+"px "+lista[2]+"px "+lista[3]+"px;")
    });
    
    
    $("#btn").click(function(){
        $("#sucessDiv").clearQueue().animate({opacity: "1"}, 1500).delay(800)
        $("#sucessDiv").animate({opacity: "0"}, 3000)
    })
});

//Copiando para área de transferência

let copiarTexto = () => {

    const elmtTexto = document.getElementById("fraseObjeto");
    const texto = elmtTexto.innerHTML.replace(/<br>/g, "\n");
    
    let textareaTest = document.createElement("textarea");
    textareaTest.value = texto
    
    document.body.appendChild(textareaTest);

    textareaTest.select();

    document.execCommand('copy');

    document.body.removeChild(textareaTest);
};

