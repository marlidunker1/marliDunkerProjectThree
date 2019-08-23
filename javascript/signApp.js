const signApp = {};
signApp.userSign = () => {
    $('form.sign').on('submit', (e) => {
        e.preventDefault();

        const userInput = $('input').val();
        
        if (userInput !== '') {
            $('h1').html(`<h1>${userInput}</h1>`);
            $('input').val('');
            $("form.sizeButtons").css("visibility", "visible");            
        } else {
            //NEED TO ERROR HANDLE HERE
        }
    });
}




$(document).ready( () => {
    signApp.userSign();
});

