// function to create a new deck by combining suits and values of cards 
function Deck() {
    let suits = ['H', 'C', 'D', 'S'];
    let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
    let deck = [];
// nested for loop to iterate through suits and ranks of cards and then pushing it to originally empty deck array
        for (let suitCounter=0; suitCounter<4; suitCounter++) {
            for (let rankCounter = 0; rankCounter<13; rankCounter++) {
                deck.push(suits[suitCounter] + ranks[rankCounter])
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



