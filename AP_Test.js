var A = 11;
var deckOrig = [11, 11, 11, 11, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
var deck = [];
var player1 = [];
var dealer = [];
var sum = player1.reduce(add, 0);
var sum2 = dealer.reduce(add, 0);

function displayHand() {
    document.getElementById('screen').value = player1;
}

function result(resultId) {
    document.getElementById(resultId).innerHTML = "Test";
}

function dealCard(handsize, player) {
    var card;
    var deal;
    for (var i = 0; i < handsize; i++) {
        card = Math.floor(Math.random() * (deck.length));
        deal = deck[card];
        deck.splice(card, 1)
        console.log(deal);
        player.push(deal);
    }
    displayHand();
}

function newGame() {
    deck = deckOrig;
    player1 = [];
    dealer = [];
}

function hit(player) {
    dealCard(1, player);
    return checkForBust(player);
    displayHand();
    document.write(player);
}

function add(a, b) {
    return a + b;
}

function checkForBust(player) {
    var sum = player.reduce(add, 0);
    if (sum > 21) {
        return "Total: " + sum + " BUSTED!"
        displayHand();
    }
    else {
        return "Total: " + sum
        displayHand();
    }
}

function endTurn() {
    var done = false;
    var sum;
    dealCard(2, dealer);
    do {
        if (dealer.reduce(add, 0) < 17) {
            hit(dealer);
        }
        sum = dealer.reduce(add, 0);
        if (sum >= 17) {
            done = true;
            return checkForBust(dealer) + " " + winner();
        }
    }
    while (done == false)
}

function winner() {
    if (player1.reduce(add, 0) <= 21 && (player1.reduce(add, 0) > dealer.reduce(add, 0) || dealer.reduce(add, 0) > 21)) {
        return "Player1 wins!"
    }
    else {
        return "Dealer wins!"
    }
}
/**function checkForBlackJack(player) {
    var sum = player.reduce(add, 0);
    if (sum = 21) {
        return "BLACKJACK!"
        }
    }
*/
