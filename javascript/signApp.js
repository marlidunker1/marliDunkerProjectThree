const signApp = {};
signApp.signType = () => {
    $('input#sign').on('keyup', (e) => {
        let userInput = $('input').val();
            
        if (e.keyCode !== 13) {
            $('h1').text(`${userInput}`);
        }
    });
    // $('input#sign').focus(); //LOOKING TO FOCUS //ALSO SHIFT PROBLEM
}

signApp.userSign = () => {
    $('form.sign').on('submit', (e) => {
        e.preventDefault();

        let userInput = $('input').val();

        if (userInput !== '') {
            $('input').val('');
            $("form.sizeButtons").css("visibility", "visible"); 
            $('h1').css('color', 'rgba(0, 0, 0, 1)');          
        } else if (userInput === '') {
            $('h1').text("Type field above is required").css('color', 'red');
        }
    });
}

signApp.biggerSmaller = () => {
    $('#smaller').on('click', (e) => {
        e.preventDefault();
        $('h1').css('font-size','-=5');
    });
    $('#bigger').on('click', (e) => {
        e.preventDefault();
        $('h1').css('font-size','+=5');
    });
    $('#reset').on('click', () => {
        //THIS IS RUNNING THE DEFAULT SO THE PAGE RESETS WHEN THE BUTTON IS CLICKED
    });
}

$(document).ready( () => {
    signApp.signType();
    signApp.userSign();
    signApp.biggerSmaller();
});

