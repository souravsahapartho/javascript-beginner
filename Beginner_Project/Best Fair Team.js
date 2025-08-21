/*
⚠️ Function Name Must be bestTeam()

In football, it’s not just about goals—fouls, yellow cards, and red cards are also very important!

Two teams played a match. Based on the number of fouls they made, and how many yellow and red cards they received, the referee will decide which team showed better fair play.

👉 Your task is to create a function called bestTeam() that will take the match reports of two teams (as objects) as input, and return the name of the team that broke the rules less — meaning, the team that played more fairly.

Rule:
The team with the lowest total of (foul + yellowCard + redCard) is considered the fairest team.
*/


function bestTeam(team1, team2) {
    if (typeof team1 !== 'object' || typeof team2 !== 'object') {
        return 'Invalid';
    }

    const team1Points = team1.foul + team1.yellowCard + team1.redCard;
    const team2Points = team2.foul + team2.yellowCard + team2.redCard;

    if (team2Points < team1Points) {
        return team2.name;
    }
    else if (team1Points < team2Points) {
        return team1.name;
    }
    else {
        return "Draw";
    }
}


const teamA = { name: 'TeamA', foul: 2, yellowCard: 1, redCard: 0 };
const teamB = { name: 'TeamB', foul: 2, yellowCard: 2, redCard: 0 };

console.log(bestTeam(teamA,teamB));
