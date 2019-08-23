const signApp = {};
signApp.userSign = () => {
    $('form.sign').on('submit', (e) => {
        e.preventDefault();

        const userInput = $('input').val();

        // $(userInput).bind('keydown keypress', () => {
        //     setTimeout(() => {
        //         $('h1').text(input.val());
        //     }, 0.5);
        // });
        
        if (userInput !== '') {
            $('h1').html(`<h1>${userInput}</h1>`);
            $('input').val('');
            $("form.sizeButtons").css("visibility", "visible"); 
            $('h1').css('color', 'rgba(0, 0, 0, 1)');          
        } else {
            //NEED TO ERROR HANDLE HERE
        }
    });
}

signApp.biggerSmaller = () => {
    $('form.sizeButtons').on('submit', (e) => {
        e.preventDefault();
        
    });
    $('#smaller').on('click', () => {
        $('h1').css('font-size','-=5');
    });
    $('#bigger').on('click', () => {
        $('h1').css('font-size','+=5');
    });
}




$(document).ready( () => {
    signApp.userSign();
    signApp.biggerSmaller();
});

