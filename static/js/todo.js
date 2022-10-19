let todoForm = $('.todoForm');
let todoBtn = $('.todoBtn');
let todoInput = $('.todoInput');
let todoList = $('.todoList');



todoBtn.on('click', function(e){
    e.preventDefault();
    let val = todoInput.val();
    if (val !== ''){
        let elem = $("<li></li>").text(val);
        elem.append("<button class='removeBtn'>X</button>");
        todoList.append(elem);
        todoInput.val("");
        $('.removeBtn').on('click', function () {
            $(this).parent().remove();
        });
    }
});
