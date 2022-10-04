const strikebutton = document.getElementById('strike');
const resetbutton = document.getElementById('reset');
const $team1Score = document.getElementById('score-team1');
const $team1wicket = document.getElementById('wickets-team1');
const $team2Score = document.getElementById('score-team2');
const $team2wicket = document.getElementById('wickets-team2');

const strikeAudio = new Audio("http://bit.ly/so-ball-hit");
const gameOverAudio = new Audio("http://bit.ly/so-crowd-cheer");

const possibleOutcomes=[0,1,2,3,4,5,6,'W'];

var team1Score = 0;
var team1wicket = 0;
var team2Score = 0;
var team2wicket = 0;
var team1ballsfaced = 0;
var team2ballsfaced = 0;
var turn = 1;

function updateScore()
{
    $team1Score.textContent = team1Score;
    $team2Score.textContent = team2Score;
    $team1wicket.textContent = team1wicket;
    $team2wicket.textContent = team2wicket;
}

function gameOver()
{
    gameOverAudio.play()
    if(team1Score>team2Score)
    {
        alert('India Wins')
    }
    else if(team1Score<team2Score)
    {
        alert('Rain Stops Play')
    }
}



resetbutton.onclick=()=>{
    window.location.reload();
}
strikebutton.onclick=()=>
{
    strikeAudio.play()
    const randomElement = possibleOutcomes[Math.floor(Math.random()*possibleOutcomes.length)];

    if(turn===2){
        team2ballsfaced++;
        document.querySelector(`#team2-superover div:nth-Child(${team2ballsfaced})`).textContent=randomElement;

        if(randomElement==='W')
        {
            team2wicket++;
        }
        else
        {
            team2Score+=randomElement;
        }
    }
    if(team2ballsfaced===6 || team2wicket===2 || team2Score>team1Score)
    {
        turn=3;
    gameOver();
    }
    if(turn===1)
    {
        team1ballsfaced++;
        document.querySelector(`#team1-superover div:nth-Child(${team1ballsfaced})`).textContent=randomElement;
        if(randomElement==='W')
        {
            team1wicket++;
        }
        else{
            team1Score+=randomElement;
        }
        if(team1ballsfaced===6 || team1wicket===2)
        {
            turn=2;
        }
    }
    updateScore();
}