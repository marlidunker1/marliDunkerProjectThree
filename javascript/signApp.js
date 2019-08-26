const signApp = {};
signApp.signType = () => {
    $('input#sign').on('keydown', (e) => {
        if (e.keyCode === 32 &&  e.target.selectionStart === 0) {
            return false;
        }
    });

    $('input#sign').on('keyup', (e) => {
        
        signApp.userInput = $('input').val(); 


        if ((e.keyCode !== 13 && signApp.userInput != '') && $('html').hasClass('')) {
            $('h1').text(`${signApp.userInput}`).addClass('black').removeClass('error');
        } else if ((e.keyCode !== 13 && signApp.userInput != '') && $('html').hasClass('blackBackground')) {
            $('h1').text(`${signApp.userInput}`).addClass('white').removeClass('error');
        } else if (e.keyCode !== 13 && signApp.userInput === ''){
            $('h1').text(`Type!`).addClass('error');
            $("form.sizeButtons").css("visibility", "hidden"); 
        } 
    });
}

signApp.userSign = () => {
    $('form.sign').on('submit', (e) => {
        e.preventDefault();

        
        if ((signApp.userInput !== '') && $('html').hasClass('')) {
            $('input').val('');
            $("form.sizeButtons").css("visibility", "visible"); 
            $('h1').addClass('black').removeClass('error'); 
        } else if ((signApp.userInput !== '') && $('html').hasClass('blackBackground')) {
            $('input').val('');
            $("form.sizeButtons").css("visibility", "visible"); 
            $('h1').addClass('white').removeClass('error');
        } else if (signApp.userInput === '') {
            $('h1').text("Type!").addClass('error');
            $("form.sizeButtons").css("visibility", "hidden"); 
        }
    });
}

signApp.biggerSmaller = () => {
    $('#smaller').on('click', (e) => {
        e.preventDefault();
        $('h1').css('font-size','-=10');
    });
    $('#bigger').on('click', (e) => {
        e.preventDefault();
        $('h1').css('font-size','+=10');
    });
    $('#yinYang').on('click', (e) => {
        e.preventDefault();
        $('html').toggleClass('blackBackground');
        $('h1').toggleClass('white', 'black');
    });
}

$(document).ready( () => {
    signApp.signType();
    signApp.userSign();
    signApp.biggerSmaller();
    $('input#sign').focus();
});

