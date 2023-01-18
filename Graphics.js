function firstbutton(){
    console.log("Welcome!")

}
function secondbutton(){
    console.log("About us!")
    var x = document.getElementById("aboutus");
    if (x.innerHTML === ""){
        x.innerHTML = "We are a Clothing company focused on great quality and good service!";
    } else {
        x.innerHTML = "";
    }
    
}
function listitems(){
    var listitems = ["overwatch", "fortnite", "oliver"]
    var list = ""
    for (let i = 0; i < listitems.length; i++) {
        listitems = listitems + i;
      }
console.log(list)
}
