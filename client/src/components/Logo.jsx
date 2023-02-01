import React from "react";
import "./Logo.css";

const Logo = () => {
  return (
    <button data-text="Awesome" class="button">
      <span class="actual-text">&nbsp;Pratbha Dental&nbsp;</span>
      <span class="hover-text" aria-hidden="true">
        &nbsp;Pratibha Dental&nbsp;
      </span>
    </button>
  );
};

export default Logo;
