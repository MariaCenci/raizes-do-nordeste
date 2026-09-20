import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const Button = ({
  label,
  onclick,
  className,
  icon,
  iconName,
  link,
  linkProps,
}) => {
  const renderButton = (
    <button className={`btn-${className}`} onClick={onclick}>
      {label}
      {icon && <img className={`icon-${iconName}`} src={icon} />}
    </button>
  );

  if (link) {
    return (
      <Link
        to={link.to}
        className="btn-link"
        spy={link.spy || true}
       // smooth={link.smooth || true}
        duration={link.duration || 900}
        {...linkProps}
      >
        {renderButton}
      </Link>
    );
  }

  return renderButton;
};

export default Button;
