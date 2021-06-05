import React from "react";

import './title.scss';

function Title({ setLightTheme, isLightTheme }) {
  const changeTheme = () => {
    !isLightTheme ? setLightTheme(true) : setLightTheme(false);
  }

  return (
    <div className="content__title-block title-block">
      <h1 className="title">TODO</h1>

      <input id="theme-checkbox" type="checkbox"/>
      <label className="theme-toggler" htmlFor="theme-checkbox" onClick={changeTheme}></label>
    </div>
  )
}

export default Title;
