import React from "react";
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";

function Header() {
  return (
    <>
      <div className={css(styles.AppHeader)}>
        <img src={logo} className={css(styles.img)} alt="logo" />
        <h1>School dashboard</h1>
      </div>
    </>
  );
}

const styles = StyleSheet.create({
  AppHeader: {
    fontSize: "1.4rem",
    color: "#e0354b",
    display: "flex",
    alignItems: "center",
    borderBottom: "3px solid #e0354b",
    paddingTop: "200px",
  },

  img: {
    width: "200px",
    height: "200px",
  }
});

export default Header;
