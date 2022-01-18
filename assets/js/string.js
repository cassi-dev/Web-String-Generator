let prefix = "[INFO]";

function string() {
    let string = (Math.random() + 1).toString(36).substring(7);
    //console.log(prefix, "String: ", string);

    document.getElementById("string").innerHTML = string;
}

function stringcopy() {
    let stringtext = document.getElementById("string").innerHTML;
    navigator.clipboard.writeText(stringtext).then;
    //console.log(prefix, "String wurde kopiert!")
    //window.alert("Du hast den String kopiert")
}

function log() {
    console.log("%c" + "Online!", "color: #fff; font-size: 40px; font-weight: bold;");
}

//Function Call
log()
string()