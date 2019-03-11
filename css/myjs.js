$("#content li").on("click",function(event){
    $("#content li").removeClass("active");
    $("#content li").find(".collapsible-body").hide();

    $(this).addClass("active");
    $(this).find(".collapsible-body").show();
    event.stopPropagation();
})

$('body').on('click',function(){

    $("#content li").removeClass("active");
    $("#content li").find(".collapsible-body").hide();
})