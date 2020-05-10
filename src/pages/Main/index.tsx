import React, { FC, useState, useEffect } from "react";
import * as SC from "./styles";
import CircleButton from "../../components/CircleButton";
import {
  HomeTwoTone,
  ContactsTwoTone,
  ProjectTwoTone,
} from "@ant-design/icons";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import Home from "./tabs/Home";
import Projects from "./tabs/Projects";
import Contact from "./tabs/Contact";
const Main: FC = () => {
  const history = useHistory();
  const [tabSelected, setTab] = useState(2);
  const [animateButtons, setAnimate] = useState({
    projects: {},
    home: {},
    contact: {},
  });
  const [styleTabs, setStyle] = useState({});

  const rotateAnimation = (tabSelect: string) => {
    let rotate = 0;
    let rotateCompleted = false;
    setInterval(() => {
      if (rotate >= 50) {
        clearInterval();
        if (!rotateCompleted) {
          phase2(rotate);
          rotateCompleted = true;
        }
      } else {
        rotate += 2;
        setAnimate((prevAnimateButtons) => {
          return {
            ...prevAnimateButtons,
            [tabSelect]: { transform: `rotate(${rotate}deg)` },
          };
        });
      }
    }, 1);
    const phase2 = (rotate: number) => {
      let phase3Completed = false;
      setInterval(() => {
        if (rotate <= -50) {
          clearInterval();
          if (!phase3Completed) {
            phase3(rotate);
            phase3Completed = true;
          }
        } else {
          rotate -= 2;
          setAnimate((prevAnimateButtons) => {
            return {
              ...prevAnimateButtons,
              [tabSelect]: { transform: `rotate(${rotate}deg)` },
            };
          });
        }
      }, 1);
    };
    const phase3 = (rotate: number) => {
      setInterval(() => {
        if (rotate > 0) {
          clearInterval();
        } else {
          rotate += 2;
          setAnimate((prevAnimateButtons) => {
            return {
              ...prevAnimateButtons,
              [tabSelect]: { transform: `rotate(${rotate}deg)` },
            };
          });
        }
      }, 1);
    };
  };
  useEffect(() => {

  }, [tabSelected]);
  const getTabName = (tab: number) => {
    switch (tab) {
      case 1:
        return "projects";
        break;
      case 2:
        return "home";
        break;
      case 3:
        return "contact";
        break;
    }
    return "";
  };
  const handleTabChange = (tab: number) => {
    const tabString = getTabName(tab);
    if (tabSelected === tab) {
      rotateAnimation(tabString);
    } else {
      setTab(tab);
    }
    switch (tab) {
      case 1:
        history.push("/Projects");
        setStyle({
          width: '70vw',
          height: '60vh'
        })
        break;
      case 2:
        setStyle({
          width: '25vw',
          height: '40vh'
        })

        history.push("/Home");
        break;
      case 3:
        setStyle({
          width: '50vw',
          height: '50vh'
        })
        history.push("/Contact");
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <SC.Background />
      <SC.MainContainer>
        <SC.Box style={styleTabs}>
          {/* <SC.AnimatedText>
                <p>Hola</p>
                <p>Soy Blas</p>
                <p>Un mesaje</p>
                <p>Otro mensaje</p>
                <p>Otro mas</p>
            </SC.AnimatedText> */}
          <Switch>
            <Route exact path="/">
              <Redirect to="/Home" />
            </Route>
            <Route exact path="/Home" component={Home}  />
            <Route exact path="/Projects" component={Projects} />
            <Route exact path="/Contact" component={Contact} />
          </Switch>
          <SC.BottomButtomBar>
            <CircleButton
              icon={<ProjectTwoTone />}
              primary={tabSelected === 1 ? true : false}
              onClick={() => handleTabChange(1)}
              style={animateButtons.projects}
              buttonPosition={1}
            />
            <CircleButton
              icon={<HomeTwoTone />}
              primary={tabSelected === 2 ? true : false}
              onClick={() => handleTabChange(2)}
              style={animateButtons.home}
            />
            <CircleButton
              icon={<ContactsTwoTone />}
              primary={tabSelected === 3 ? true : false}
              onClick={() => handleTabChange(3)}
              style={animateButtons.contact}
              buttonPosition={3}
            />
          </SC.BottomButtomBar>
        </SC.Box>
      </SC.MainContainer>
    </div>
  );
};

export default Main;
