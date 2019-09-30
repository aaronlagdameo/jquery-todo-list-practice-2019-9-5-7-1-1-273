$(document).ready(function () {

    function generateUUID() {
        /*jshint bitwise:false */
        var i,
            random;
        var uuid = '';

        for (i = 0; i < 32; i++) {
            random = Math.random() * 16 | 0;
            if (i === 8 || i === 12 || i === 16 || i === 20) {
                uuid += '-';
            }
            uuid += (i === 12 ?
                4 :
                (i === 16 ?
                    (random & 3 | 8) :
                    random)).toString(16);
        }
        return uuid;
    }

    let addButton = $('div[id=button]');
    let taskList = $('ol[id=tasks]');

    addButton.on('click', function () {
        let task = $('input[name=ListItem]');
        let taskItem = '<li id="' + generateUUID() + '" class="unchecked">' +
            '<input name="done-todo" type="checkbox" class="done-todo">' +
            task.val() + '</li>';

        taskList.append(taskItem);
        $(task).val('');
    });
});
