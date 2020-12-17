var name = prompt("please enter your name");

alert("hello" + name);

var age = prompt("please enter your age");

if (age > 18) {

    alert("you are allowed to enter the website");
}
else {
    alert("you are not allowed to enter the webite");
}

var languages = prompt("enter the language you want:");
var German = "German language is being uploaded";
var Arabic = "Arabic language is being uploaded";
var English = "English language is being uploaded";

function language(languages) {

    if(languages == "German"){
        alert(German);
    }else if (languages == "Arabic") {
        alert(Arabic);
    } else {
        alert(English);
    }
}

language(languages);



