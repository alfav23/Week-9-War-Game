// set a variable equal to chai function to use later
var expect = chai.expect;
// describe function(s) being tested
describe('War Game Functions', function() {
    // testing function that generates a deck of 52 cards for war game
    describe('Create Deck', function() {
        // defining what the function should do
        it('should create an array of cards', function() {
            // creating variable to hold function call
            var result = Deck();
            // expect function from chai using variable defined at beginning of test code
            expect(result).to.equal(result);
            // deck function from war game should return...?
            // HOW DO I SET IT EQUAL TO AN ARRAY THAT IS RANDOMIZED IN MY CODE?
            // if i use the variable deck it says not defined, 
            // and variable gamedeck is randomized, output is different each time
        });
    });
});
