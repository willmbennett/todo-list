$(document).ready(function(){
    // Check off specific to-dos by clicking
    $('ul').on("click", 'li', function(){
        $(this).toggleClass("completed");
    });

    //Click on x to delete todo
    $('ul').on("click", 'span', function(event){
        $(this).parent().fadeOut(500,function(){
            $(this).remove();
        });
        event.stopPropagation();
    });

    //Add listener to input
    $('input[type="text"]').keypress(function(event){
        if(event.which === 13 && $(this).val() != "") {
            //Grab new todo
            var newTodo = $(this).val();
            $(this).val("");
            //Add todo to end of list
            $('ul').append("<li><span><i class='fas fa-trash-alt'></i></span> " + newTodo + "</li>");
        }
    });

    $('.fa-plus').click(function(){
        $('input[type="text"]').fadeToggle();
    });
});