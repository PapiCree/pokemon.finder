alert("Thank you for coming")

function clickme(){
    $("#pokemon").show("slow"); 
    $("#MLGDOGE").show("fast");
}

const password = "DOGERULZ"
 
function verify(){
    
    const input = $("#pass").val();
        
    if (input == password){
        alert("doge says right password!")
        $(".hide").hide("fast")
        $("#pikachu").html("<a href='file2.html'>pikachu</a>")
    }else{
         alert("doge says wrong password!")
         
    }
}
   