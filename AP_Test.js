var J = 10;
var Q = 10;
var K = 10;
var A = 11;
var deckOrig = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
var deck = [];
var player1 = [];
var dealer = [];

function dealCard(handsize, player) {
    var card;
    var deal;
    for (var i = 0; i < handsize; i++) {
        card = Math.floor(Math.random() * (deck.length));
        console.log(i);
        console.log(card);
        deal = deck[card];
        deck.splice(card, 1);
        console.log(i);
        console.log(deal);
        player.push(deal);
    }
}

function newGame() {
    deck = deckOrig;
}

function hit(player) {
    dealCard(1, player);
    return checkForBust(player);
}

function add(a, b) {
    return a + b;
}

function checkForBust(player) {
    var sum = player.reduce(add, 0);
    if (sum > 21) {
        return "Total: " + sum + " BUSTED!"
    }
    else {
        return "Total: " + sum
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
            return checkForBust(dealer);
        }
    }
    while (done == false)
}

function acesOrBust {
    if (player1.reduce(add, 0) > 21 && player1.indexOf(A) >= 0) {
        A = 1
    }
    if (dealer.reduce(add, 0) > 21 && dealer.indexOf(A) >= 0) {
        A =
    }
}

function initialize() {}

function nextTurn() {}
