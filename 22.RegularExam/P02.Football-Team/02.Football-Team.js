class footballTeam{
    constructor(clubName, country ){
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = []; 
    }

    newAdditions(footballPlayers){
        footballPlayers.forEach(player =>{
            let [name, age, playerValue] = player.split("/");

            age = Number(age),
            playerValue = Number(playerValue)
            let currPlayer = this.invitedPlayers.find(pl => pl.name === name);

            if(!currPlayer){
                this.invitedPlayers.push({
                    name,
                    age,
                    playerValue
                })
            } else {
                if(currPlayer.playerValue < playerValue){
                    let index = this.invitedPlayers.indexOf(player);
                    this.invitedPlayers[index].playerValue = playerValue;
                }
            }
            
        });
            this.invitedPlayers.forEach(player => buff.push(player.name))
            let uniqueArray = [...new Set(invitedPlayers)];
            return `You successfully invite ${uniqueArray.join(", ")}.`;
    }

    signContract(selectedPlayer){
        let [name, playerOffer] = selectedPlayer.split("/");
        let currentPlayer = this.invitedPlayers.find(x => x.name === name);

        if(!currentPlayer){
            throw Error (`${name} is not invited to the selection list!`);
        }

        if(playerOffer > currentPlayer.playerOffer){
            let priceDifference  = playerValue - playerOffer;
            throw Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`)
        }

        let index = this.invitedPlayers.indexOf(player);
        this.invitedPlayers[index].playerValue = "Bought";
   

        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`
    }

    ageLimit(name, age){
        let currentPlayer = this.invitedPlayers.find(pl => pl.name === name);

        if(!currentPlayer){
            throw new Error(`${name} is not invited to the selection list!`)
        }

        if(currentPlayer.age < age){
           let ageDifference = age - currentPlayer.age;
            if(ageDifference < 5){
                return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`
            }
            return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
        }

        return `${name} is above age limit!`
    }

    transferWindowResult(){
        let buff = "Players list:\n";

        this.invitedPlayers.sort((a,b) => a.price - b.price)
        .forEach(pl => buff += `Player ${pl.name}-${pl.playerValue}\n`);

        return buff;
    }

}
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());