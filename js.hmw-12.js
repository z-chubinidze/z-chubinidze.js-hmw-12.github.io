function gamotvla(){
    var inputvalue = document.getElementById("times").value;
    var index = 0;

    while(index < inputvalue){
        document.write((index + 1) + " - " + "hello world" + "<br>")
        index++;
    }
}