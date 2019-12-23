function register(voxaApp) {
  voxaApp.onIntent("WelcomeIntent", voxaEvent => {
    return { text: "Launch.Welcome.text" };
  });

  voxaApp.onIntent("GeneralFoodIntent", voxaEvent => {
    return { text: "FoodInfo.General.text" };
  });

  voxaApp.onIntent("FallbackIntent", voxaEvent => {
    return { text: "FallBack.Misunderstood.text" };
  });

  voxaApp.onIntent("FoodTypeIntent", voxaEvent => {
    return { text: "FoodInfo.Suggestion.text" };
  });

  voxaApp.onIntent("HelpIntent", voxaEvent => {
    return { text: "Help.text" };
  });

  voxaApp.onIntent("JokeIntent", voxaEvent => {
    return { text: "Joke.Response.text" };
  });

  voxaApp.onIntent("CancelIntent", voxaEvent => {
    return { text: "Cancel.text" };
  });

  voxaApp.onIntent("YesIntent", voxaEvent => {
    return { text: "Yes.text" };
  });

  voxaApp.onIntent("NoIntent", voxaEvent => {
    return { text: "No.text" };
  });

  // voxaApp.onState("FoodHandler",voxaEvent=>{
  // handle yes
  // handle no
  //  return {to:'entry'}
  // })
}

module.exports = register;
