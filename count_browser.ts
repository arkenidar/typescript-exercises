import count_wovels from "./count.js"

$(function(){

    function check(){
        let value=$("#phrase").val()
        if(typeof value==="undefined") return
        value=value.toString()
        let out=JSON.stringify(count_wovels(value))
        $("#counter").text(out)
    }

    check();
    $("#phrase").on("input",check)
    
})
