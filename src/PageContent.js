import React, { Component } from "react";
import { ThemeContext } from "./contexts/ThemeContexts";

export default class PageContent extends Component {
  static contextType = ThemeContext;
  render() {
    const { isDarkMode } = this.context;
    const styles = {
      backgroundColor: isDarkMode ? "black" : "white",
      height: "100vh",
      width: "100vw"
    };
    return (
    <div style={{backgroundColor: isDarkMode ? "black" : "white"}}>
    {this.props.children}
    </div>
    )
  }
}