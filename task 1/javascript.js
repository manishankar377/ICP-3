$(function() {
    $("button").click(function () {
        let us = $(this).attr('id');
        play(us);
    });
})

function play(us) {
    let opp = Math.random();
    let oppon='';
    if (opp<0.34)
        oppon='r';
    else if (opp<0.67)
        oppon='p';
    else
        oppon='s';

    if (us === oppon)
        alert( "Its a tie! Try again");
    else if (us == "r")
        if (oppon == "s")
            alert( "Congrats You Won !!! Your opponent had scissors");
        else
            alert("Sorry You Lost !!! Your opponent had Papers");
    else if (us == "p")
        if (oppon == "r")
            alert( "Congrats You Won !!! Your opponent had rock");
        else
            alert("Sorry You Lost !!! Your opponent had scissors") ;
    else if (us == "s")
        if (oppon == "p")
            alert("Congrats You Won !!! Your opponent had paper");
        else
            alert("Sorry You Lost !!! Your opponent had rock");
}