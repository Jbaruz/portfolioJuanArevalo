(function () {
    function start() {
        console.log("App started!");
        let deleteButton = document.querySelectorAll('.btn-danger')
        for(button of deleteButton)
        {
            button.addEventListener('click', (event) => {
                if(!confirm("Are you sure you want to delete this item?"))
                {
                    event.preventDefault();
                    window.location.assign('/contactList');
                }
            });
        }
    }
    window.addEventListener("load", start);
})();