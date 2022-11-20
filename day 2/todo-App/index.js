// $('#btn').click(function(){
//         const item = document.getElementById("inputValue").value
//         const text = document.createTextNode(item);
//         const newItem = document.createElement("li");
//         newItem.appendChild(text);
//         document.getElementById("list").appendChild(newItem);

//         $('li').click(function(){
//             $(this).hide()
//         })
//     });


$(document).ready(function () {
    // $('#btn').click(function () {
        $('#inputValue').change(function () {
            var todo = $(this).val();
            $('ul').append('<li> ' + todo + '<i class="fa-duotone fa-check"></i> <i class="fa-duotone fa-trash"></i> </li>');
            $(this).val('');
        });
        $('ul').on('click','.fa-check',function(){
            $(this).parent('li').fadeOut(2000);
           
        });
        $('ul').on('click','.fa-trash',function(){
            $(this).parent('li').toggleClass('check');
            
        });
    // });
});