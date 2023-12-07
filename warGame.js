// function to create a new deck by combining suits and values of cards 
function Deck() {
    let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
    let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
    let deck = [];
// nested for loop to iterate through suits and ranks of cards and then pushing it to originally empty deck array
        for (let suitCounter=0; suitCounter<4; suitCounter++) {
            for (let rankCounter = 0; rankCounter<13; rankCounter++) {
                // object to hold suit rank and value of card to refer to later for numerical comparison
                let newCard = {
                    suit: suits[suitCounter],
                    ranks: ranks[rankCounter],
                    value: rankCounter,
                }
                // pushing concatenated arrays to deck array
                deck.push(newCard);
                }
            }
            // log out to check accuracy of deck and then return deck to use it when function is called
            console.log(`Unshuffled 52-Card Deck: `, deck);
            return deck;    
    }
// shuffle deck using for loop to iterate through all 52 cards and built-in random method
function shuffleDeck(deck) {
    for (let i = 0; i < 52; i++) {
        let randomCard = deck[i];
        randomIndex = Math.floor(Math.random() * 52);
        deck[i] = deck[randomIndex];
        deck[randomIndex] = randomCard;
    }
}
// create a shuffled game deck using previously created Deck() function and shuffleDeck() function and then print to console to check for accurate shuffling
let gameDeck = Deck();
shuffleDeck(gameDeck);
console.log(`Shuffled Deck: `, gameDeck);

// split game deck into two hands for each player with 26 cards each using slice
let player1Deck = gameDeck.slice(0, 26);
console.log(`Player One Hand: `, player1Deck);
let player2Deck = gameDeck.slice(26, 52);
console.log(`Player Two Hand: `, player2Deck);

// initiate variables to track score of both players
let player1Score = 0;
let player2Score = 0; 
// iterate through 26 rounds and compare values of each players deck until cards run out, return winner of each round and add to score or declare tie
for (let i = 0; i < 26; i ++) {
    if (player1Deck[i].value > player2Deck[i].value) {
        player1Score += 1;
        // log out info for each players card and declare who won the round or if there was a tie
        console.log(`
        Player One Card: ${player1Deck[i].ranks} of ${player1Deck[i].suit}
        Player Two Card: ${player2Deck[i].ranks} of ${player2Deck[i].suit}
        Player One Wins
        `);
    } else if (player1Deck[i].value < player2Deck[i].value) {
        player2Score += 1;
        console.log(`
        Player One Card: ${player1Deck[i].ranks} of ${player1Deck[i].suit}
        Player Two Card: ${player2Deck[i].ranks} of ${player2Deck[i].suit}
        Player Two Wins
        `);
    } else {
        console.log(`
        Player One and Player Two Card: ${player1Deck[i].ranks} of ${player1Deck[i].suit}  
        Tie
        `)
    }
}
// compare score variables to determine who had the higher score or if there was a tie and log out winner/results
if (player1Score>player2Score) {
    console.log(`Player One wins!`);
} else if (player2Score>player1Score) {
    console.log(`Player Two wins!!`);
} else {
    console.log(`It's a TIE`);
}
// End of WAR!
console.log(`End of Game`);