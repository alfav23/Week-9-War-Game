// CREATE A DECK WITH 4 OF EACH VALUE OF CARD (2-10 AND 11-14 FOR J, Q, K, A)
class Deck {
    constructor() {
        // ARRAY OF CARDS IN DECK, 4 OF EACH
        this.deck = [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14];
    }
}
// CARD CLASS TO TAKE VALUES OF DECK AND SHUFFLE THE DECK WITH RANDOMIZE FUNCTION
class Card extends Deck {
    constructor (randomCard){
        super()
        this.card = randomCard;
    }
    // SELECTS RANDOM VALUE FROM DECK AND ASSIGNS IT TO RANDOM CARD VARIABLE
    randomCard(card1, card2) {
        for (this.turn = 1; this.turn <= 52; this.turn ++) {
            let randomCard = this.deck[Math.floor(Math.random()*this.deck.length)];
            // REMOVING CARD FROM DECK ARRAY UNTIL ARRAY HAS 0 ITEMS TO ADHERE TO CORRECT AMOUNT AND TYPE OF CARDS IN A REAL DECK
            this.deck.splice(randomCard, 1)[0];
            if (this.turn%2 == 1){
                card1 = randomCard
                console.log(`Random Card Player 1: `, card1, `Turn: `, this.turn);
            } else {
                card2 = randomCard
                console.log(`Random Card PLayer 2: `, card2, `Turn: `, this.turn);
                player1.addPoints();
            }
        }
    }
}
// PLAYER CLASS TO HOLD SCORE AND TURN COUNTER WHICH ENDS AT 26 TURNS PER INSTANCE OF PLAYER (EACH PLAYER HAS 26 TURNS)
class Player extends Card {
    constructor(turn, score){
        super()
        this.turn = turn; 
        this.score = score;
    }
// DETERMINE THE PLAYER BASED ON IF THE TURN IS EVEN OR ODD AND ASSIGN THAT PLAYER'S CARD VALUE TO THE RANDOM CARD BY CALLING RANDOMCARD() METHOD, END LOOP WHEN TURNS ITERATES 26 TIMES PER INSTANCE
    determineCurrentPlayer() {
        let card1 = new Card
        let card2 = new Card
            for (this.turn = 1; this.turn <=52; this.turn ++) {
            // CREATE INSTANCE OF CARD TO CORRESPOND TO EACH PLAYER
            card1 = player1.randomCard();
            card2 = player2.randomCard();
            // IF TURN IS EVEN
            // if (this.turn %2 === 0) {}
                player1.addPoints();
            // IF TURN IS ODD
            // else if (this.turn%2 === 1) {}
                player2.addPoints();
        }
    }
    // ADD POINTS BY CREATING A VARIABLE TO HOLD POINTS FOR EACH PLAYER AND ADDING POINTS TO THE SCORE COUNT DEPENDING ON RESULTS OF ROUND
    addPoints(card1, card2){
        let player1Score = 0;
        let player2Score = 0;
        if (card1 > card2) {
            player1Score += 1;
            console.log(`Player One Score: `, player1Score);
        }
        else if (card2 > card1) {
            player2Score += 1;
            console.log(`Player 2 Score: `, player2Score);
        } else {
            this.score += 0
            console.log(`Tie`)
        }
    }    
}

let deck = new Deck
let player1 = new Player
let player2 = new Player
player1.determineCurrentPlayer();
player2.determineCurrentPlayer();
// player1.addPoints();
// player2.addPoints();
