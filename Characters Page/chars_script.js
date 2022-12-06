$(document).ready(()=>{
    console.log("document ready!")

    $("#show-dirk").hide();
    $("#show-keqing").hide();
    $("#show-ganyu").hide();
    $("#show-barbara").hide();
    $("#show-eula").hide();
    $("#show-noelle").hide();
    $("#show-kaeya").hide();
    var curr = document.getElementById("show-jean")
    $('#btn-eula').click(function(){
        console.log("HEllO!")
        $(curr).hide();
        curr = document.getElementById("show-eula")
        $(curr).show();
    })

    $('#btn-dirk').click(function(){
        console.log("HEllO!")
        $(curr).hide();
        curr = document.getElementById("show-dirk")
        $(curr).show();
    })

    $('#btn-keqing').click(function(){
        console.log("HEllO!")
        $(curr).hide();
        curr = document.getElementById("show-keqing")
        $(curr).show();
    })
    $('#btn-ganyu').click(function(){
        console.log("HEllO!")
        $(curr).hide();
        curr = document.getElementById("show-ganyu")
        $(curr).show();
    })
    $('#btn-barbara').click(function(){
        console.log("HEllO!")
        $(curr).hide();
        curr = document.getElementById("show-barbara")
        $(curr).show();
    })
    $('#btn-jean').click(function(){
        console.log("HEllO!")
        $(curr).hide();
        curr = document.getElementById("show-jean")
        $(curr).show();
    })
    $('#btn-noelle').click(function(){
        console.log("HEllO!")
        $(curr).hide();
        curr = document.getElementById("show-noelle")
        $(curr).show();
    })
    $('#btn-kaeya').click(function(){
        console.log("HEllO!")
        $(curr).hide();
        curr = document.getElementById("show-kaeya")
        $(curr).show();
    })






})

 


