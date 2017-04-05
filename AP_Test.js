var J = 10;
var Q = 10;
var K = 10;
var deck = [A,A,A,A,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,J,J,J,J,Q,Q,Q,Q,K,K,K,K]
var player1 = [];

function dealCard(handsize) {
    for (var i = 0; i < handsize; i++){
        var card = Math.floor(Math.random * (deck.length + 1));
        var deal = deck.splice(deck.indexOf(card), 1)[0];
        player1.push(deal);
    }
}

function hit(){
    dealCard(1)
}
