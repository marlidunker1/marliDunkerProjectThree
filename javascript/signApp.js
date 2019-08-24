const signApp = {};
signApp.userInput = '';

signApp.signType = () => {
    $('input#sign').on('keyup', (e) => {
        
        signApp.userInput = $('input').val();

        if (e.keyCode !== 13 && signApp.userInput != '') {
            $('h1').text(`${signApp.userInput}`).css('color', 'inherit');
        } else if (e.keyCode !== 13 && signApp.userInput=== ''){
            $('h1').text(`Type!`).css('color', 'red');
            $("form.sizeButtons").css("visibility", "hidden"); 
        }
    });
}

signApp.userSign = () => {
    $('form.sign').on('submit', (e) => {
        e.preventDefault();

        
        if (signApp.userInput !== '') {
            $('input').val('');
            $("form.sizeButtons").css("visibility", "visible"); 
            $('h1').css('color', 'rgba(0, 0, 0, 1)'); 
            // $('.signButton').attr("disabled", true);         
        } else if (signApp.userInput === '') {
            $('h1').text("Type!").css('color', 'red');
            $("form.sizeButtons").css("visibility", "hidden"); 
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
    $('#yinYang').on('click', (e) => {
        e.preventDefault();
        $('html').toggleClass('blackBackground');
        $('h1').toggleClass('yinYang');
    });
    $('#reset').on('click', () => {
    });
}

$(document).ready( () => {
    signApp.signType();
    signApp.userSign();
    signApp.biggerSmaller();
    $('input#sign').focus();
});

