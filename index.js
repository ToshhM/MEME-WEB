var bg = $("#particles-js"); //selection du bg
$(document).keydown(function(){
    $(bg).css("background-color",getRandomColor);
});

$(".img").on("click",function(){
    // PREMIERE ACTION
    var name=$(this).attr("name"); //this fait reférence à img pour eviter de le réecrire en met le this = objet courant
    $("#titre").text(name);// .text pour selectionner le texte et lui passer l'attribut name selectionné au dessus comme chaque image à un attribut name
    $('#titre').css('textTransform', 'capitalize');  //transforme la premiere lettre en capital.
    
    /*const firstLetter= name.charAt(0).toUpperCase();
    const nameCapitalized = firstLetter + name.slice(1); // on prend la premiere lettre de chq chaine et le reste on lui rajoute pas deffet
    $("titre").text(nameCapitalized);*/ //méthode Compliqué 
    
    // SECONDE ACTION
    $(this).toggleClass("flash"); //propriété Css rajouté sur les images

    //Troisième ACTION
    var music = $(this).attr("name");
    music += ".mp3";
    playMusic(music);
}) 
function playMusic(music){ // on crée un objet(newAudio), on a donc accès à une methode qui est la méthode play qui va nous permettre de lancer la musique
    var audio = new Audio(music);
    audio.play();
}
$("#btn").click(function(){
    var artist = $("#input").val();
    console.log(artist);
    var music = artist + ".mp3";
    playMusic(music);
})
function getRandomColor(){
    var letters = "0123456789ABCDEF";
    var color ="#";
    for(var i=0; i<6;i++){
        color+=letters[Math.floor(Math.random()*16)];
    }
    return color;
}
var bg = document.getElementById('particles-js');
document.addEventListener("keydown",function(event){ //notre but est de changer le background à chq fois que l'on appuie sur une lettre
    bg.style.backgroundColor = getRandomColor();
    var key = event.key; // récupérer la lettre sur laquelle je vais appuyé
    playMusic(key);
    console.log(event); // nous donnes les evenement précisément
}) ; //click  keydown 
function playMusic(key){ //clé en paramètre
    switch(key){
        case "b":
            var audio = new Audio("/MEME/Ora.mp3");
            audio.play();                             //objet Audio Javascript {play: function()joue moi la musique}
            break;
        case "g":
            var audio = new Audio("/MEME/Genji.mp3");
            audio.play();                             //objet Audio Javascript {play: function()joue moi la musique}
            break;
        case "j":
            var audio = new Audio("/MEME/Jet.mp3");
            audio.play();                             //objet Audio Javascript {play: function()joue moi la musique}
            break;
        case "c":
            var audio = new Audio("/MEME/Continued.mp3");
            audio.play();                             //objet Audio Javascript {play: function()joue moi la musique}
            break;
        case "t":
            var audio = new Audio("/MEME/Gta5.mp3");
            audio.play();                             //objet Audio Javascript {play: function()joue moi la musique}
            break;
        case "o":
            var audio = new Audio("/MEME/ok.mp3");
            audio.play();                             //objet Audio Javascript {play: function()joue moi la musique}
            break;
        case "w":
            var audio = new Audio("/MEME/WhyMeme.mp3");
            audio.play();                             //objet Audio Javascript {play: function()joue moi la musique}
            break;
        case "i":
            var audio = new Audio("/MEME/WOW.mp3");
            audio.play();                             //objet Audio Javascript {play: function()joue moi la musique}
            break;
        
        case "v":
            var audio = new Audio("/MEME/Jeff.mp4");
            audio.play();                             //objet Audio Javascript {play: function()joue moi la musique}
            break;
        case "x":
            var audio = new Audio("/MEME/WhyGay.mp4");
            audio.play();                             //objet Audio Javascript {play: function()joue moi la musique}
            break;
        case "l":
            var audio = new Audio("/MEME/Bully.mp4");
            audio.play();                             //objet Audio Javascript {play: function()joue moi la musique}
            break;
    

    }
}