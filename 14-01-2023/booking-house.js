// Bookmaker’s
// In your IDE of choice, create a new JavaScript file named booking-house.js and make it so
// that all code written in the file follows JS strict mode.
// Create an anonymous immediately-invoking function that will hold main execution of all program
// calls. Make sure that functions that you write in this function are pure functions.
// Create constructor functions with properties representing the following:
// ● Country - name, odds, continent (EU, AS, AF, SA, NA, AU)
// ● Person - name, surname, date of birth
// Player - person (instance of Person), bet amount, country (instance of Country)
// Address - country, city, postal code, street and number
// ● BettingPlace - address and list of players (initially empty)
// ● BettingHouse - competition, list of betting places (initially empty) and number of players
// Create continents as constants (objects that can not change). So, when passing a continent as a
// parameter, you should pass Continent.ASIA.
// Add a method to Person that returns a formatted string containing the name, surname and date
// of birth of the person (date of birth in dd.mm.yy format).
// Add a method to Address that returns a formatted string like the following one:
// Nemanjina 4, 11000 Beograd, SR
// Add a method to Player that returns a formatted string containing a country, expected win
// amount (odds * bet amount) and person data.
// SR, 1050.00 eur, Pera Peric, 29 years
// Add a method to BettingPlace that returns a formatted string containing a street (without a
// number), postal code and city, and sum of all bet amounts of that place.
// Nemanjina, 11000 Belgrade, sum of all bets: 50000eur
// Add a method to BettingPlace that adds a player to the players list of a betting place.
// Inside your immediately-invoking function, add a function that returns a created Player.
// Inside your immediately-invoking function, add a function that creates a BettingPlace.
// Create an instance of the BettingHouse that receives the name of competition.
// Create four players with random data. Create two betting places. Add created players as you wish
// to Betting places. Add betting places to the betting house.
// Display all betting house data in the following manner:

// Football World Cup Winner, 2 betting places, 4 bets
// Nemanjina, 11000 Belgrade, sum of all bets: 2100eur
// SR, 1050.00 eur, Pera Peric, 29 years
// SR, 1050.00 eur, Pera Peric, 29 years
// Nemanjina, 11000 Belgrade, sum of all bets: 2100eur
// GR, 1050.00 eur, Pera Peric, 29 years
// SR, 1050.00 eur, Pera Peric, 29 years

// There are 3 bets on Serbia

'use strict';

const Continent = { EU: "EU", AS: "AS", AF: "AF", SA: "SA", NA: "NA", AU: "AU" };

(function() {
    class Country {
        constructor(name, odds, continent) {
            this.name = name;
            this.odds = odds;
            this.continent = continent;
        }
    }
    class Person {
        constructor(name, surname, dob) {
            this.name = name;
            this.surname = surname;
            this.dob = dob;
        }
        getFormattedString() {
            return `${this.name} ${this.surname}, ${this.dob.getDate()}.${this.dob.getMonth()}.${this.dob.getFullYear()}`;
        }
    }

    class Player {
        constructor(person, betAmount, country) {
            this.person = person;
            this.betAmount = betAmount;
            this.country = country;
        }
        getPlayerData() {
            return `${this.country.name}, ${this.country.odds * this.betAmount} eur, ${this.person.getFormattedString()}`;
        }
    }

    class Address {
        constructor(country, city, postalCode, street, number) {
            this.country = country;
            this.city = city;
            this.postalCode = postalCode;
            this.street = street;
            this.number = number;
        }
        getFormattedString() {
            return `${this.number} ${this.street}, ${this.postalCode} ${this.city}, ${this.country}`;
        }
    }

    class BettingPlace {
        constructor(address) {
            this.address = address;
            this.players = [];
        }
        getPlaceData() {
            let sum = 0;
            for (let player of this.players) {
                sum += player.betAmount;
            }
            return `${this.address.street}, ${this.address.postalCode} ${this.address.city}, sum of all bets: ${sum}eur`;
        }
        addPlayer(player) {
            this.players.push(player);
        }
    }

    class BettingHouse {
        constructor(competition) {
            this.competition = competition;
            this.bettingPlaces = [];
            this.numberOfPlayers = 0;
        }
        addBettingPlace(bettingPlace) {
            this.bettingPlaces.push(bettingPlace);
            this.numberOfPlayers += bettingPlace.players.length;
        }
        getHouseData(){
            let data = this.competition + ", " + this.bettingPlaces.length + " betting places, " + this.numberOfPlayers + " bets \n";
            for (let i = 0; i < this.bettingPlaces.length; i++) {
                data += "\t" + this.bettingPlaces[i].getPlaceData() + "\n";
                for (let j = 0; j < this.bettingPlaces[i].players.length; j++) {
                    data += "\t" +"\t" +this.bettingPlaces[i].players[j].getPlayerData() +"\n";
                }
            }
            // Count the number of bets on Serbia
            let srBets = 0;
            for (let i = 0; i < this.bettingPlaces.length; i++) {
                for (let j = 0; j < this.bettingPlaces[i].players.length; j++) {
                    if (this.bettingPlaces[i].players[j].country.name === "SR") {
                        srBets++;
                    }
                }
            }
            data += "There are " + srBets + " bets on Serbia";
            return data;
        }
}
//main functions

function createPlayer(name, surname, dob, betAmount, country) {
    let person = new Person(name, surname, new Date(dob));
    return new Player(person, betAmount, country);
}

function createBettingPlace(country, city, postalCode, street, number) {
    let address = new Address(country, city, postalCode, street, number);
    return new BettingPlace(address);
}

let country1= new Country("SR", 89, Continent.AS)

let player1 = createPlayer("Pera", "Peric","1998-02-01",500, country1);
let player2 = createPlayer("Laza", "Lazic","1986-07-11",788, country1);
let player3 = createPlayer("Sima", "Simic","1991-09-01",76, country1);
let player4 = createPlayer("Mika", "Mikic","1978-01-09",22, country1);

let bettingPlace1 = createBettingPlace(country1,'Belgrade', '11000','Nemanjina',22 );
let bettingPlace2 = createBettingPlace(country1,' Nis',' 18000','BulevarNemanjica',33);

bettingPlace1.addPlayer(player1);
bettingPlace1.addPlayer(player2);
bettingPlace1.addPlayer(player3);
bettingPlace2.addPlayer(player4);

let bettingHouse = new BettingHouse("Football World Cup Winner");
bettingHouse.addBettingPlace(bettingPlace1);
bettingHouse.addBettingPlace(bettingPlace2);

console.log(bettingHouse.getHouseData());
})();