var miau = new Audio("../mew.wav");
var turn = 'X';
function akcja(btn) {
    if (btn.value == ' ' ) {
        btn.value = turn;
        turn = (turn == 'X') ? 'O' : 'X';
    }
}