const signApp = {};
signApp.userSubmit = () => {
    $('form').on('click', (e) => {
        e.preventDefault();
        
        const userInput = $('input').val();
        
        if (userInput !== '') {
            $('h1').html(`<h1>${userInput}</h1>`);
            $('input').val('');   
        }
    });
}

 




$(document).ready( () => {
    signApp.userSubmit();
});

