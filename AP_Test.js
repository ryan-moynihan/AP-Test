  var deckOrig = [11, 11, 11, 11, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
  var deck = [];
  var player1 = [];
  var dealer = [];
  var sum = player1.reduce(add, 0);
  var sum2 = dealer.reduce(add, 0);

  function displayP1Hand() {
      document.getElementById('screen').value = player1;
  }

  function displayDHand() {
      document.getElementById('screen2').value = dealer;
  }

  function displayWinner() {
      document.getElementById('screen3').value = winner();
  }

  function displayBust() {
      document.getElementById('screen4').value = checkForBust();
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
          deck.splice(card, 1);
          console.log(deal);
          player.push(deal);
      }
      displayP1Hand();
  }

  function newGame() {
      deck = deckOrig;
      player1 = [];
      dealer = [];
      displayP1Hand();
      displayDHand();
      displayWinner();
  }

  function hit(player) {
      dealCard(1, player);
      return checkForBust(player);
      displayP1Hand();
      displayDHand();
      document.write(player);
  }

  function add(a, b) {
      return a + b;
  }

  function checkForBust(player) {
      if (player.reduce(add, 0) > 21) {
          return "BUSTED!"
          displayP1Hand();
          displayDHand();
      }
      else {
          return ""
          displayP1Hand();
          displayDHand();
      }
  }

  function endTurn() {
      var done = false;
      var sum;
      dealCard(2, dealer);
      displayDHand();
      do {
          if (dealer.reduce(add, 0) < 17) {
              hit(dealer);
              displayDHand();
          }
          sum = dealer.reduce(add, 0);
          if (sum >= 17) {
              done = true;
              displayDHand();
              return checkForBust(dealer) + "</br>" + winner();
          }
      }
      while (done == false)
      displayDHand();
  }

  function winner() {
      if (player1.reduce(add, 0) <= 21 && (player1.reduce(add, 0) > dealer.reduce(add, 0) || dealer.reduce(add, 0) > 21)) {
          return "Player wins!"
      }
      else if (player1.reduce(add, 0) == 0 && dealer.reduce(add, 0) == 0) {
          return ""
      }
      else {
          return "Dealer wins!"
      }
  }
  /**function checkForBlackJack(player) {
      var sum = player.reduce(add, 0);
      if (player.length = 2 && sum = 21) {
          return "BLACKJACK!";
          console.log("Blackjack!");
          }
  }
  */
