import React from "react";
import RecipeDetailScreen from "./Screens/Restaurant/RecipeDetailScreen";
import DATA from "./config/Restaurant/DATA";
import WelcomeScreen from "./Screens/Restaurant/WelcomeScreen";
import HomeScreen from "./Screens/Restaurant/HomeScreen"

const App = () => {
  return <RecipeDetailScreen recipe={DATA[0].recipes[1]} />;
  <WelcomeScreen />
  
};

export default App;
