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
    //
    const result = results[idx];
    const [hometeam, awayteam] = competitions[idx];

    const winningTeam = result === home_team_won ? hometeam : awayteam;

    updateScores(winningTeam, 3, scores);

    if (scores[winningTeam] > scores[currentBestTeam]) {
      currentBestTeam = winningTeam;
    }
  }
  return currentBestTeam;
}
function updateScores(team, points, scores) {
  if (!(team in scores)) scores[team] = 0;

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
