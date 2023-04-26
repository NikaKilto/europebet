  let cashGames = document.getElementById("active");
  let newYearSeries = document.getElementById("new-year-series-div");
  let finalStage = document.getElementById("final-stage-div");
  let firstPage = document.getElementsByClassName("cash-games-page");
  let secondPage = document.getElementsByClassName("new-year-series-page");
  let thirdPage = document.getElementsByClassName("final-stage-page");
  let leaderboardSection = document.getElementById("leaderboard-tables-id");
  let additionalInfo = document.getElementById("additional-info-id");
  let cashGamesProperties = document.getElementById("cash-games-properties");
  let cashGamesNewYearProperties = document.getElementById("cash-games-new-year-properties");


  function firstPageShow(){
    newYearSeries.removeAttribute('id');
    finalStage.removeAttribute('id');
    cashGames.id = 'active';

    Array.from(secondPage).forEach((x) => {
        x.style.display = "none";
    })
    Array.from(thirdPage).forEach((x) => {
        x.style.display = "none";
    })
  
    Array.from(firstPage).forEach(x => x.style.display = "block");
    leaderboardSection.style.display = "block";
    leaderboardSection.style.paddingBottom = "5px";
    cashGamesProperties.style.marginBottom = "-5px";
    cashGamesNewYearProperties.style.marginBottom = "-5px";
    cashGamesProperties.style.marginLeft = "4px";
  }

  function secondPageShow(){
    cashGames.removeAttribute('id');
    finalStage.removeAttribute('id');
    newYearSeries.id = 'active';

    Array.from(firstPage).forEach((x) => {
        x.style.display = "none";
    })
    Array.from(thirdPage).forEach((x) => {
        x.style.display = "none";
    })

    Array.from(secondPage).forEach(x => x.style.display = "block");
    leaderboardSection.style.display = "block";
    cashGamesProperties.style.marginBottom = "-5px";
    cashGamesNewYearProperties.style.marginBottom = "-5px";
    leaderboardSection.style.paddingBottom = "5px";
  }

  function thirdPageShow(){
    cashGames.removeAttribute('id');
    newYearSeries.removeAttribute('id');
    finalStage.id = 'active';

    Array.from(firstPage).forEach((x) => {
      x.style.display = "none";
    })
  
    Array.from(secondPage).forEach((x) => {
      x.style.display = "none";
    })

    leaderboardSection.style.display = "none";
    additionalInfo.style.display = "none";

    Array.from(thirdPage).forEach(x => x.style.display = "block");

  }