// this is the default value for the home team
const home_team_won = 1;
// O(n) time | O(k) space - where n is the number
// of competitions and k is the number of teams
function tournamentWinner(competitions, results) {
  // Write your code here.
  //   this counter will keep track of the team with the best score
  let currentBestTeam = "";
  //   we are declaring the currentBestTeam equals to 0 insider the hash table
  const scores = { [currentBestTeam]: 0 };

  //   start the for loop , it will run as long as the indx is less than the lengthe of the competition and int will increment by one
  // on every iteration
  for (let idx = 0; idx < competitions.length; idx++) {
    //this will tell us if the home team of away team won
    const result = results[idx];
    // this is how we are decomposing the hometeam and away team
    const [hometeam, awayteam] = competitions[idx];
    // here we are using the ternary operator where is the winnig team is equals to the result of the home__team_winning otherwise
    // the away team won
    const winningTeam = result === home_team_won ? hometeam : awayteam;
    // this function will update the scores adding 3 pts to the winner
    updateScores(winningTeam, 3, scores);

    // we make the condition to switch the score to the corresponding team like this
    //if the score of the winning team is greater than the currentbestteam then
    // the currentbestTeam will be the winning team score
    if (scores[winningTeam] > scores[currentBestTeam]) {
      currentBestTeam = winningTeam;
    }
  }
  // here i am returning the currentBestTeam
  return currentBestTeam;
}
// we are taking 3 parametes . the team , the points we have to add and the score we need to update
function updateScores(team, points, scores) {
  // if the team is not in the scores tables then ijust have to add it
  if (!(team in scores)) scores[team] = 0;
  // and update the score of the team
  scores[team] += points;
}
console.log(
  tournamentWinner(
    [
      ["HTML", "Java"],
      ["Java", "Python"],
      ["Python", "HTML"],
    ],
    [0, 1, 1]
  )
);
console.log(
  tournamentWinner(
    [
      ["HTML", "Java"],
      ["Java", "Python"],
      ["Python", "HTML"],
      ["C#", "Python"],
      ["Java", "C#"],
      ["C#", "HTML"],
    ],
    [0, 1, 1, 1, 0, 1]
  )
);
console.log(
  tournamentWinner(
    [
      ["HTML", "Java"],
      ["Java", "Python"],
      ["Python", "HTML"],
      ["C#", "Python"],
      ["Java", "C#"],
      ["C#", "HTML"],
      ["SQL", "C#"],
      ["HTML", "SQL"],
      ["SQL", "Python"],
      ["SQL", "Java"],
    ],
    [0, 1, 1, 1, 0, 1, 0, 1, 1, 0]
  )
);
console.log(tournamentWinner([["Bulls", "Eagles"]], [1]));
console.log(
  tournamentWinner(
    [
      ["Bulls", "Eagles"],
      ["Bulls", "Bears"],
      ["Bears", "Eagles"],
    ],
    [0, 0, 0]
  )
);
console.log(
  tournamentWinner(
    [
      ["Bulls", "Eagles"],
      ["Bulls", "Bears"],
      ["Bulls", "Monkeys"],
      ["Eagles", "Bears"],
      ["Eagles", "Monkeys"],
      ["Bears", "Monkeys"],
    ],
    [1, 1, 1, 1, 1, 1]
  )
);
console.log(
  tournamentWinner(
    [
      ["AlgoMasters", "FrontPage Freebirds"],
      ["Runtime Terror", "Static Startup"],
      ["WeC#", "Hypertext Assassins"],
      ["AlgoMasters", "WeC#"],
      ["Static Startup", "Hypertext Assassins"],
      ["Runtime Terror", "FrontPage Freebirds"],
      ["AlgoMasters", "Runtime Terror"],
      ["Hypertext Assassins", "FrontPage Freebirds"],
      ["Static Startup", "WeC#"],
      ["AlgoMasters", "Static Startup"],
      ["FrontPage Freebirds", "WeC#"],
      ["Hypertext Assassins", "Runtime Terror"],
      ["AlgoMasters", "Hypertext Assassins"],
      ["WeC#", "Runtime Terror"],
      ["FrontPage Freebirds", "Static Startup"],
    ],
    [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0]
  )
);
console.log(
  tournamentWinner(
    [
      ["HTML", "Java"],
      ["Java", "Python"],
      ["Python", "HTML"],
      ["C#", "Python"],
      ["Java", "C#"],
      ["C#", "HTML"],
      ["SQL", "C#"],
      ["HTML", "SQL"],
      ["SQL", "Python"],
      ["SQL", "Java"],
    ],
    [0, 0, 0, 0, 0, 0, 1, 0, 1, 1]
  )
);
console.log(tournamentWinner([["A", "B"]], [0]));
