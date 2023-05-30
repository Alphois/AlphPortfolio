/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Krishna Dudani",
<<<<<<< HEAD
  title: "College Student in CS",
  email: "krishna.dudani94@qmail.cuny.edu",
  gitHub: "https://github.com/Alphois/",
  instagram: "alphois_",
  linkedIn: "https://www.linkedin.com/in/krishna-dudani-a28842216/",
  medium: "",
  twitter: "",
  youTube: "",
=======
  title: "College student and web developer",
  email: "krishna.dudani94@.qmail.cuny.edu",
  gitHub: "Alphois",
  instagram: "alphois_",
  linkedIn: "Thingylink",
  medium: "",
  twitter: "Dont have this one",
  youTube: "Dont have this either lollll",
>>>>>>> 4272828 (better site)
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
