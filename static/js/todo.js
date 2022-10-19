let todoForm = $('.todoForm');
let todoBtn = $('.todoBtn');
let todoInput = $('.todoInput');
let todoList = $('.todoList');



// todo list function
todoBtn.on('click', function(e){
    e.preventDefault();
    let val = todoInput.val();
    if (val !== ''){
        let elem = $("<li class='todoLi'></li><br>").text(val);
        elem.append("<button class='removeBtn'>X</button>");
        todoList.append(elem);
        todoInput.val("");
        $('.removeBtn').on('click', function () {
            $(this).parent().remove();
        });
    }
});

// sidebar function
let todoLogo = $('.todoLogo');

todoLogo.on('click', function () {
    let todoCon = $('.todoContainer');
    todoCon.removeClass('todoOn');
    todoLogo.addClass('todoOn');
});

let todoOff = $('.todoOff');

todoOff.on('click', function () {
    let todoCon = $('.todoContainer');
    todoCon.addClass('todoOn');
    todoLogo.removeClass('todoOn');
});