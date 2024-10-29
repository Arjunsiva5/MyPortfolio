import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiCss3,
  SiAppsignal,
  SiReact,
  SiFigma,
  SiFigshare,
  SiAdobephotoshop,
  SiAdobeindesign,
  SiPostman,
  SiSketch,
  SiAdobeillustrator,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/6r0HrYf/Screenshot-80.png"
                    alt="Weather application"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Weather Application</h2>
                <p>
                  Weather application is a simple project to check a weather details in a specific geographical area using html,css and javascript.
                </p>
                <div>
                <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://arjunsiva5.github.io/Weather-Application/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Arjunsiva5/Weather-Application/tree/master"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/1J7FFr0/Screenshot-81.png"
                    alt="Food Hub"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Food Hub</h2>
                <p>
                  Swiggy is a famous food delivery company in india .In this project,to replicate they website with the name of food hub by using webtechnolgies. 
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <SiMongodb/>
                  <SiReact/>
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://foodhubofficial.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Arjunsiva5/Fooddelivery/tree/main/frontend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src="https://i.ibb.co/54YSt87/Ui.png" alt="" />
                </div>
              </div>
              <div className="project_information">
                <h2>Movie ticket booking app</h2>
                <p>
                  Using a Figma tool to create a modern UI design for ticket booking app to user friendly.This is my first Ui projects to showcase my creativity and designing skills.
                </p>
                <div>
                  <SiFigma />
                  <SiAdobeillustrator />
                  <SiAdobephotoshop />
                </div>
                <div>
                  <a
                    href="https://www.figma.com/proto/OLiNUb1eR6Kupg3N9ayPk5/Movie-ticket-booking-app?node-id=19-34&node-type=canvas&t=gOy5c09BH8YVpOLU-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=19%3A34"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                     See this Live
                    </span>
                  </a>
                  <a
                    href="https://www.figma.com/design/OLiNUb1eR6Kupg3N9ayPk5/Movie-ticket-booking-app?node-id=0-1&m=dev&t=gOy5c09BH8YVpOLU-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      Open Figma
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/DQvmXQ6/Screenshot-84.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Notes App</h2>
                <p>
                  Notes app to organized our data and it  built using NodeJS,
                  Express, Mongoose, MongoDB Atlas and AWS for storage. CRUD operations for users, files and folders.
                </p>
                <div>
                  <SiReact/>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <SiPostman/>
                </div>
                <div>
                  <a
                    href="https://drive-system.herokuapp.com/user/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      URL for the API
                    </span>
                  </a>
                  <a
                    href="https://github.com/Arjunsiva5/Notes-app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
    </>
  );
};
