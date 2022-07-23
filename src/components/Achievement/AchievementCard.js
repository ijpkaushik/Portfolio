import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Fade } from "react-awesome-reveal";

import { ThemeContext } from "../../contexts/ThemeContext";

import { BiBuildings } from "react-icons/bi";

import "./Achievement.css";

function AchievementCard({ id, title, details, date, company, link, image }) {
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles((t) => ({
    achievementCard: {
      backgroundColor: theme.primary30,
      "&:hover": {
        backgroundColor: theme.primary50,
      },
    },
  }));

  const classes = useStyles();
  return (
    <Fade bottom delay={100}>
      <div key={id} className={`achievement-card ${classes.achievementCard}`}>
        <a href={link} target="_blank" rel="noreferrer">
          <div className="achievecard-content">
            <div className="achievecard-details1">
              <h2 style={{ color: theme.tertiary }}>{title}</h2>
              <p style={{ color: theme.tertiary80 }}>{details}</p>
            </div>
            <div
              className="achievecard-details2"
              style={{ color: theme.primary }}
            >
              <h5>{date}</h5>
              <div className="achievecard-company">
                <BiBuildings />
                <h5>{company}</h5>
              </div>
            </div>
          </div>
        </a>
        <div className="achievecard-imgcontainer">
          <img src={image} alt="" />
        </div>
      </div>
    </Fade>
  );
}

export default AchievementCard;
