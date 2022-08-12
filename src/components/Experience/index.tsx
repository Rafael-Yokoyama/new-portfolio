import Title from "../Title";
import { Container } from "./styles";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {GiSandsOfTime } from "react-icons/gi";
import { MdWorkOff } from "react-icons/md";

import logo from "../../assets/logo.svg";

const Experience = () => {
  return (
    <Container id="experience">
      <div data-title="Minhas" className="title">
        <Title font={"30px"} text={"Experiencias"} Color={"#1a7f81"} />
      </div>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background:
              "linear-gradient(to right top, #6d327c, #485DA6, #00a1ba, #00BF98, #36C486",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #1a7f81" }}
          date="2022 - atual"
          iconStyle={{
            background:
              "linear-gradient(to right top, #6d327c, #485DA6, #00a1ba, #00BF98, #36C486",
          }}
          icon={<MdWorkOff />}
        >
          <div className="skils-span">
            <span>React / Vue</span>
          </div>

          <h3 className="vertical-timeline-element-title">Smart Innovation </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Desenvolvedor de sistemas
          </h4>
      
          <div className="skils">
            <div className="w-100 hidden  py-3" id="section-03">
              <h6 className="slider-text-1 flex-start-row">
                React
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  data-inject-url="https://www.nyousefali.com.br/svg/icon-4star.svg"
                  className="w-auto mx"
                  style={{ minWidth: "32px" }}
                >
                  <path
                    d="M16.4899 7.89358L17.584 13.2467C17.7044 13.8355 18.1645 14.2956 18.7533 14.416L24.1064 15.5101C24.6396 15.6191 24.6396 16.3809 24.1064 16.4899L18.7533 17.584C18.1645 17.7044 17.7044 18.1645 17.584 18.7533L16.4899 24.1064C16.3809 24.6396 15.6191 24.6396 15.5101 24.1064L14.416 18.7533C14.2956 18.1645 13.8355 17.7044 13.2467 17.584L7.89359 16.4899C7.36041 16.3809 7.36042 15.6191 7.89358 15.5101L13.2467 14.416C13.8355 14.2956 14.2956 13.8355 14.416 13.2467L15.5101 7.89359C15.6191 7.36041 16.3809 7.36042 16.4899 7.89358Z"
                    fill="url(#paint0_linear--inject-25)"
                    stroke="url(#paint1_linear--inject-25)"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear--inject-25"
                      x1="29"
                      y1="3"
                      x2="3"
                      y2="29"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2DC7ED"></stop>
                      <stop
                        offset="1"
                        stopColor="#538BF0"
                      stopOpacity="0"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear--inject-25"
                      x1="29"
                      y1="3"
                      x2="3"
                      y2="29"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2DC7ED"></stop>
                      <stop
                        offset="1"
                        stopColor="#538BF0"
                      stopOpacity="0"
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg>
                Vue
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  data-inject-url="https://www.nyousefali.com.br/svg/icon-4star.svg"
                  className="w-auto mx"
                  style={{ minWidth: "32px" }}
                >
                  <path
                    d="M16.4899 7.89358L17.584 13.2467C17.7044 13.8355 18.1645 14.2956 18.7533 14.416L24.1064 15.5101C24.6396 15.6191 24.6396 16.3809 24.1064 16.4899L18.7533 17.584C18.1645 17.7044 17.7044 18.1645 17.584 18.7533L16.4899 24.1064C16.3809 24.6396 15.6191 24.6396 15.5101 24.1064L14.416 18.7533C14.2956 18.1645 13.8355 17.7044 13.2467 17.584L7.89359 16.4899C7.36041 16.3809 7.36042 15.6191 7.89358 15.5101L13.2467 14.416C13.8355 14.2956 14.2956 13.8355 14.416 13.2467L15.5101 7.89359C15.6191 7.36041 16.3809 7.36042 16.4899 7.89358Z"
                    fill="url(#paint0_linear--inject-29)"
                    stroke="url(#paint1_linear--inject-29)"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear--inject-29"
                      x1="29"
                      y1="3"
                      x2="3"
                      y2="29"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2DC7ED"></stop>
                      <stop
                        offset="1"
                        stopColor="#538BF0"
                      stopOpacity="0"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear--inject-29"
                      x1="29"
                      y1="3"
                      x2="3"
                      y2="29"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2DC7ED"></stop>
                      <stop
                        offset="1"
                        stopColor="#538BF0"
                      stopOpacity="0"
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg>
                JavaScript
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  data-inject-url="https://www.nyousefali.com.br/svg/icon-4star.svg"
                  className="w-auto mx"
                  style={{ minWidth: "32px" }}
                >
                  <path
                    d="M16.4899 7.89358L17.584 13.2467C17.7044 13.8355 18.1645 14.2956 18.7533 14.416L24.1064 15.5101C24.6396 15.6191 24.6396 16.3809 24.1064 16.4899L18.7533 17.584C18.1645 17.7044 17.7044 18.1645 17.584 18.7533L16.4899 24.1064C16.3809 24.6396 15.6191 24.6396 15.5101 24.1064L14.416 18.7533C14.2956 18.1645 13.8355 17.7044 13.2467 17.584L7.89359 16.4899C7.36041 16.3809 7.36042 15.6191 7.89358 15.5101L13.2467 14.416C13.8355 14.2956 14.2956 13.8355 14.416 13.2467L15.5101 7.89359C15.6191 7.36041 16.3809 7.36042 16.4899 7.89358Z"
                    fill="url(#paint0_linear--inject-14)"
                    stroke="url(#paint1_linear--inject-14)"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear--inject-14"
                      x1="29"
                      y1="3"
                      x2="3"
                      y2="29"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2DC7ED"></stop>
                      <stop
                        offset="1"
                        stopColor="#538BF0"
                      stopOpacity="0"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear--inject-14"
                      x1="29"
                      y1="3"
                      x2="3"
                      y2="29"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2DC7ED"></stop>
                      <stop
                        offset="1"
                        stopColor="#538BF0"
                      stopOpacity="0"
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg>
                TypeScripty
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  data-inject-url="https://www.nyousefali.com.br/svg/icon-4star.svg"
                  className="w-auto mx"
                  style={{ minWidth: "32px" }}
                >
                  <path
                    d="M16.4899 7.89358L17.584 13.2467C17.7044 13.8355 18.1645 14.2956 18.7533 14.416L24.1064 15.5101C24.6396 15.6191 24.6396 16.3809 24.1064 16.4899L18.7533 17.584C18.1645 17.7044 17.7044 18.1645 17.584 18.7533L16.4899 24.1064C16.3809 24.6396 15.6191 24.6396 15.5101 24.1064L14.416 18.7533C14.2956 18.1645 13.8355 17.7044 13.2467 17.584L7.89359 16.4899C7.36041 16.3809 7.36042 15.6191 7.89358 15.5101L13.2467 14.416C13.8355 14.2956 14.2956 13.8355 14.416 13.2467L15.5101 7.89359C15.6191 7.36041 16.3809 7.36042 16.4899 7.89358Z"
                    fill="url(#paint0_linear--inject-37)"
                    stroke="url(#paint1_linear--inject-37)"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear--inject-37"
                      x1="29"
                      y1="3"
                      x2="3"
                      y2="29"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2DC7ED"></stop>
                      <stop
                        offset="1"
                        stopColor="#538BF0"
                      stopOpacity="0"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear--inject-37"
                      x1="29"
                      y1="3"
                      x2="3"
                      y2="29"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2DC7ED"></stop>
                      <stop
                        offset="1"
                        stopColor="#538BF0"
                      stopOpacity="0"
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg>
                Developer Front-End
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  data-inject-url="https://www.nyousefali.com.br/svg/icon-4star.svg"
                  className="w-auto mx"
                  style={{ minWidth: "32px" }}
                >
                  <path
                    d="M16.4899 7.89358L17.584 13.2467C17.7044 13.8355 18.1645 14.2956 18.7533 14.416L24.1064 15.5101C24.6396 15.6191 24.6396 16.3809 24.1064 16.4899L18.7533 17.584C18.1645 17.7044 17.7044 18.1645 17.584 18.7533L16.4899 24.1064C16.3809 24.6396 15.6191 24.6396 15.5101 24.1064L14.416 18.7533C14.2956 18.1645 13.8355 17.7044 13.2467 17.584L7.89359 16.4899C7.36041 16.3809 7.36042 15.6191 7.89358 15.5101L13.2467 14.416C13.8355 14.2956 14.2956 13.8355 14.416 13.2467L15.5101 7.89359C15.6191 7.36041 16.3809 7.36042 16.4899 7.89358Z"
                    fill="url(#paint0_linear--inject-30)"
                    stroke="url(#paint1_linear--inject-30)"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear--inject-30"
                      x1="29"
                      y1="3"
                      x2="3"
                      y2="29"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2DC7ED"></stop>
                      <stop
                        offset="1"
                        stopColor="#538BF0"
                      stopOpacity="0"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear--inject-30"
                      x1="29"
                      y1="3"
                      x2="3"
                      y2="29"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2DC7ED"></stop>
                      <stop
                        offset="1"
                        stopColor="#538BF0"
                      stopOpacity="0"
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </h6>
            </div>
            {/* <span>React - Vue - TypeScript - JavaScript - Sass - Styled Components - dhsahdshadhsa</span> */}
            {/* <span>Vue</span>
  <span>Tyspanescrispant</span>
  <span>Javascrispant</span>
  <span>Sass</span>
  <span>Styled Comspononents</span> */}
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background:
              "linear-gradient(to right top, #6d327c, #485DA6, #00a1ba, #00BF98, #36C486",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #1a7f81" }}
          date="2021 - 2022"
          iconStyle={{
            background:
              "linear-gradient(to right top, #6d327c, #485DA6, #00a1ba, #00BF98, #36C486",
            color: "#fff",
          }}
          icon={<MdWorkOff />}
        >
          <div className="skils-span">
            <span>React / Material ui</span>
          </div>

          <h3 className="vertical-timeline-element-title">Callflex</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Desenvolvedor Júnior
          </h4>
        
          <div className="skils">
            <div className="w-100 hidden  py-3" id="section-03">
              <h6 className="slider-text-1 flex-start-row">
                React
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  data-inject-url="https://www.nyousefali.com.br/svg/icon-4star.svg"
                  className="w-auto mx"
                  style={{ minWidth: "32px" }}
                >
                  <path
                    d="M16.4899 7.89358L17.584 13.2467C17.7044 13.8355 18.1645 14.2956 18.7533 14.416L24.1064 15.5101C24.6396 15.6191 24.6396 16.3809 24.1064 16.4899L18.7533 17.584C18.1645 17.7044 17.7044 18.1645 17.584 18.7533L16.4899 24.1064C16.3809 24.6396 15.6191 24.6396 15.5101 24.1064L14.416 18.7533C14.2956 18.1645 13.8355 17.7044 13.2467 17.584L7.89359 16.4899C7.36041 16.3809 7.36042 15.6191 7.89358 15.5101L13.2467 14.416C13.8355 14.2956 14.2956 13.8355 14.416 13.2467L15.5101 7.89359C15.6191 7.36041 16.3809 7.36042 16.4899 7.89358Z"
                    fill="url(#paint0_linear--inject-25)"
                    stroke="url(#paint1_linear--inject-25)"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear--inject-25"
                      x1="29"
                      y1="3"
                      x2="3"
                      y2="29"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2DC7ED"></stop>
                      <stop
                        offset="1"
                        stopColor="#538BF0"
                      stopOpacity="0"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear--inject-25"
                      x1="29"
                      y1="3"
                      x2="3"
                      y2="29"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2DC7ED"></stop>
                      <stop
                        offset="1"
                        stopColor="#538BF0"
                      stopOpacity="0"
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg>
                Material ui
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  data-inject-url="https://www.nyousefali.com.br/svg/icon-4star.svg"
                  className="w-auto mx"
                  style={{ minWidth: "32px" }}
                >
                  <path
                    d="M16.4899 7.89358L17.584 13.2467C17.7044 13.8355 18.1645 14.2956 18.7533 14.416L24.1064 15.5101C24.6396 15.6191 24.6396 16.3809 24.1064 16.4899L18.7533 17.584C18.1645 17.7044 17.7044 18.1645 17.584 18.7533L16.4899 24.1064C16.3809 24.6396 15.6191 24.6396 15.5101 24.1064L14.416 18.7533C14.2956 18.1645 13.8355 17.7044 13.2467 17.584L7.89359 16.4899C7.36041 16.3809 7.36042 15.6191 7.89358 15.5101L13.2467 14.416C13.8355 14.2956 14.2956 13.8355 14.416 13.2467L15.5101 7.89359C15.6191 7.36041 16.3809 7.36042 16.4899 7.89358Z"
                    fill="url(#paint0_linear--inject-29)"
                    stroke="url(#paint1_linear--inject-29)"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear--inject-29"
                      x1="29"
                      y1="3"
                      x2="3"
                      y2="29"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2DC7ED"></stop>
                      <stop
                        offset="1"
                        stopColor="#538BF0"
                      stopOpacity="0"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear--inject-29"
                      x1="29"
                      y1="3"
                      x2="3"
                      y2="29"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2DC7ED"></stop>
                      <stop
                        offset="1"
                        stopColor="#538BF0"
                      stopOpacity="0"
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg>
                JavaScript
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  data-inject-url="https://www.nyousefali.com.br/svg/icon-4star.svg"
                  className="w-auto mx"
                  style={{ minWidth: "32px" }}
                >
                  <path
                    d="M16.4899 7.89358L17.584 13.2467C17.7044 13.8355 18.1645 14.2956 18.7533 14.416L24.1064 15.5101C24.6396 15.6191 24.6396 16.3809 24.1064 16.4899L18.7533 17.584C18.1645 17.7044 17.7044 18.1645 17.584 18.7533L16.4899 24.1064C16.3809 24.6396 15.6191 24.6396 15.5101 24.1064L14.416 18.7533C14.2956 18.1645 13.8355 17.7044 13.2467 17.584L7.89359 16.4899C7.36041 16.3809 7.36042 15.6191 7.89358 15.5101L13.2467 14.416C13.8355 14.2956 14.2956 13.8355 14.416 13.2467L15.5101 7.89359C15.6191 7.36041 16.3809 7.36042 16.4899 7.89358Z"
                    fill="url(#paint0_linear--inject-14)"
                    stroke="url(#paint1_linear--inject-14)"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear--inject-14"
                      x1="29"
                      y1="3"
                      x2="3"
                      y2="29"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2DC7ED"></stop>
                      <stop
                        offset="1"
                        stopColor="#538BF0"
                      stopOpacity="0"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear--inject-14"
                      x1="29"
                      y1="3"
                      x2="3"
                      y2="29"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2DC7ED"></stop>
                      <stop
                        offset="1"
                        stopColor="#538BF0"
                      stopOpacity="0"
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg>
                TypeScripty
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  data-inject-url="https://www.nyousefali.com.br/svg/icon-4star.svg"
                  className="w-auto mx"
                  style={{ minWidth: "32px" }}
                >
                  <path
                    d="M16.4899 7.89358L17.584 13.2467C17.7044 13.8355 18.1645 14.2956 18.7533 14.416L24.1064 15.5101C24.6396 15.6191 24.6396 16.3809 24.1064 16.4899L18.7533 17.584C18.1645 17.7044 17.7044 18.1645 17.584 18.7533L16.4899 24.1064C16.3809 24.6396 15.6191 24.6396 15.5101 24.1064L14.416 18.7533C14.2956 18.1645 13.8355 17.7044 13.2467 17.584L7.89359 16.4899C7.36041 16.3809 7.36042 15.6191 7.89358 15.5101L13.2467 14.416C13.8355 14.2956 14.2956 13.8355 14.416 13.2467L15.5101 7.89359C15.6191 7.36041 16.3809 7.36042 16.4899 7.89358Z"
                    fill="url(#paint0_linear--inject-37)"
                    stroke="url(#paint1_linear--inject-37)"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear--inject-37"
                      x1="29"
                      y1="3"
                      x2="3"
                      y2="29"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2DC7ED"></stop>
                      <stop
                        offset="1"
                        stopColor="#538BF0"
                      stopOpacity="0"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear--inject-37"
                      x1="29"
                      y1="3"
                      x2="3"
                      y2="29"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2DC7ED"></stop>
                      <stop
                        offset="1"
                        stopColor="#538BF0"
                      stopOpacity="0"
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg>
                Developer Front-End
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  data-inject-url="https://www.nyousefali.com.br/svg/icon-4star.svg"
                  className="w-auto mx"
                  style={{ minWidth: "32px" }}
                >
                  <path
                    d="M16.4899 7.89358L17.584 13.2467C17.7044 13.8355 18.1645 14.2956 18.7533 14.416L24.1064 15.5101C24.6396 15.6191 24.6396 16.3809 24.1064 16.4899L18.7533 17.584C18.1645 17.7044 17.7044 18.1645 17.584 18.7533L16.4899 24.1064C16.3809 24.6396 15.6191 24.6396 15.5101 24.1064L14.416 18.7533C14.2956 18.1645 13.8355 17.7044 13.2467 17.584L7.89359 16.4899C7.36041 16.3809 7.36042 15.6191 7.89358 15.5101L13.2467 14.416C13.8355 14.2956 14.2956 13.8355 14.416 13.2467L15.5101 7.89359C15.6191 7.36041 16.3809 7.36042 16.4899 7.89358Z"
                    fill="url(#paint0_linear--inject-30)"
                    stroke="url(#paint1_linear--inject-30)"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear--inject-30"
                      x1="29"
                      y1="3"
                      x2="3"
                      y2="29"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2DC7ED"></stop>
                      <stop
                        offset="1"
                        stopColor="#538BF0"
                      stopOpacity="0"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear--inject-30"
                      x1="29"
                      y1="3"
                      x2="3"
                      y2="29"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2DC7ED"></stop>
                      <stop
                        offset="1"
                        stopColor="#538BF0"
                      stopOpacity="0"
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </h6>
            </div>
         
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background:
              "linear-gradient(to right top, #6d327c, #485DA6, #00a1ba, #00BF98, #36C486",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #1a7f81" }}
          date="2021-2022"
          iconStyle={{
            background:
              "linear-gradient(to right top, #6d327c, #485DA6, #00a1ba, #00BF98, #36C486",
          }}
          icon={<MdWorkOff />}
        >
          <div className="skils-span">
            <span>React / Boostrap</span>
          </div>

          <h3 className="vertical-timeline-element-title">Smart Innovation </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Estagiário de desenvolvimento Web
          </h4>
          {/* <pclassName="p-skils">
    Desenvolvedor Front end 
    implementar novas funcionalidades e dar manutenções sob demanda
    </pclassName=> */}
          <div className="skils">
            <div className="w-100 hidden  py-3" id="section-03">
              <h6 className="slider-text-1 flex-start-row">
                React
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  data-inject-url="https://www.nyousefali.com.br/svg/icon-4star.svg"
                  className="w-auto mx"
                  style={{ minWidth: "32px" }}
                >
                  <path
                    d="M16.4899 7.89358L17.584 13.2467C17.7044 13.8355 18.1645 14.2956 18.7533 14.416L24.1064 15.5101C24.6396 15.6191 24.6396 16.3809 24.1064 16.4899L18.7533 17.584C18.1645 17.7044 17.7044 18.1645 17.584 18.7533L16.4899 24.1064C16.3809 24.6396 15.6191 24.6396 15.5101 24.1064L14.416 18.7533C14.2956 18.1645 13.8355 17.7044 13.2467 17.584L7.89359 16.4899C7.36041 16.3809 7.36042 15.6191 7.89358 15.5101L13.2467 14.416C13.8355 14.2956 14.2956 13.8355 14.416 13.2467L15.5101 7.89359C15.6191 7.36041 16.3809 7.36042 16.4899 7.89358Z"
                    fill="url(#paint0_linear--inject-25)"
                    stroke="url(#paint1_linear--inject-25)"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear--inject-25"
                      x1="29"
                      y1="3"
                      x2="3"
                      y2="29"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2DC7ED"></stop>
                      <stop
                        offset="1"
                        stopColor="#538BF0"
                      stopOpacity="0"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear--inject-25"
                      x1="29"
                      y1="3"
                      x2="3"
                      y2="29"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2DC7ED"></stop>
                      <stop
                        offset="1"
                        stopColor="#538BF0"
                      stopOpacity="0"
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg>
                Sass
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  data-inject-url="https://www.nyousefali.com.br/svg/icon-4star.svg"
                  className="w-auto mx"
                  style={{ minWidth: "32px" }}
                >
                  <path
                    d="M16.4899 7.89358L17.584 13.2467C17.7044 13.8355 18.1645 14.2956 18.7533 14.416L24.1064 15.5101C24.6396 15.6191 24.6396 16.3809 24.1064 16.4899L18.7533 17.584C18.1645 17.7044 17.7044 18.1645 17.584 18.7533L16.4899 24.1064C16.3809 24.6396 15.6191 24.6396 15.5101 24.1064L14.416 18.7533C14.2956 18.1645 13.8355 17.7044 13.2467 17.584L7.89359 16.4899C7.36041 16.3809 7.36042 15.6191 7.89358 15.5101L13.2467 14.416C13.8355 14.2956 14.2956 13.8355 14.416 13.2467L15.5101 7.89359C15.6191 7.36041 16.3809 7.36042 16.4899 7.89358Z"
                    fill="url(#paint0_linear--inject-29)"
                    stroke="url(#paint1_linear--inject-29)"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear--inject-29"
                      x1="29"
                      y1="3"
                      x2="3"
                      y2="29"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2DC7ED"></stop>
                      <stop
                        offset="1"
                        stopColor="#538BF0"
                      stopOpacity="0"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear--inject-29"
                      x1="29"
                      y1="3"
                      x2="3"
                      y2="29"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2DC7ED"></stop>
                      <stop
                        offset="1"
                        stopColor="#538BF0"
                      stopOpacity="0"
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg>
                JavaScript
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  data-inject-url="https://www.nyousefali.com.br/svg/icon-4star.svg"
                  className="w-auto mx"
                  style={{ minWidth: "32px" }}
                >
                  <path
                    d="M16.4899 7.89358L17.584 13.2467C17.7044 13.8355 18.1645 14.2956 18.7533 14.416L24.1064 15.5101C24.6396 15.6191 24.6396 16.3809 24.1064 16.4899L18.7533 17.584C18.1645 17.7044 17.7044 18.1645 17.584 18.7533L16.4899 24.1064C16.3809 24.6396 15.6191 24.6396 15.5101 24.1064L14.416 18.7533C14.2956 18.1645 13.8355 17.7044 13.2467 17.584L7.89359 16.4899C7.36041 16.3809 7.36042 15.6191 7.89358 15.5101L13.2467 14.416C13.8355 14.2956 14.2956 13.8355 14.416 13.2467L15.5101 7.89359C15.6191 7.36041 16.3809 7.36042 16.4899 7.89358Z"
                    fill="url(#paint0_linear--inject-14)"
                    stroke="url(#paint1_linear--inject-14)"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear--inject-14"
                      x1="29"
                      y1="3"
                      x2="3"
                      y2="29"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2DC7ED"></stop>
                      <stop
                        offset="1"
                        stopColor="#538BF0"
                      stopOpacity="0"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear--inject-14"
                      x1="29"
                      y1="3"
                      x2="3"
                      y2="29"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2DC7ED"></stop>
                      <stop
                        offset="1"
                        stopColor="#538BF0"
                      stopOpacity="0"
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg>
                Boostrap
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  data-inject-url="https://www.nyousefali.com.br/svg/icon-4star.svg"
                  className="w-auto mx"
                  style={{ minWidth: "32px" }}
                >
                  <path
                    d="M16.4899 7.89358L17.584 13.2467C17.7044 13.8355 18.1645 14.2956 18.7533 14.416L24.1064 15.5101C24.6396 15.6191 24.6396 16.3809 24.1064 16.4899L18.7533 17.584C18.1645 17.7044 17.7044 18.1645 17.584 18.7533L16.4899 24.1064C16.3809 24.6396 15.6191 24.6396 15.5101 24.1064L14.416 18.7533C14.2956 18.1645 13.8355 17.7044 13.2467 17.584L7.89359 16.4899C7.36041 16.3809 7.36042 15.6191 7.89358 15.5101L13.2467 14.416C13.8355 14.2956 14.2956 13.8355 14.416 13.2467L15.5101 7.89359C15.6191 7.36041 16.3809 7.36042 16.4899 7.89358Z"
                    fill="url(#paint0_linear--inject-37)"
                    stroke="url(#paint1_linear--inject-37)"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear--inject-37"
                      x1="29"
                      y1="3"
                      x2="3"
                      y2="29"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2DC7ED"></stop>
                      <stop
                        offset="1"
                        stopColor="#538BF0"
                      stopOpacity="0"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear--inject-37"
                      x1="29"
                      y1="3"
                      x2="3"
                      y2="29"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2DC7ED"></stop>
                      <stop
                        offset="1"
                        stopColor="#538BF0"
                      stopOpacity="0"
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg>
                Developer Front-End
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  data-inject-url="https://www.nyousefali.com.br/svg/icon-4star.svg"
                  className="w-auto mx"
                  style={{ minWidth: "32px" }}
                >
                  <path
                    d="M16.4899 7.89358L17.584 13.2467C17.7044 13.8355 18.1645 14.2956 18.7533 14.416L24.1064 15.5101C24.6396 15.6191 24.6396 16.3809 24.1064 16.4899L18.7533 17.584C18.1645 17.7044 17.7044 18.1645 17.584 18.7533L16.4899 24.1064C16.3809 24.6396 15.6191 24.6396 15.5101 24.1064L14.416 18.7533C14.2956 18.1645 13.8355 17.7044 13.2467 17.584L7.89359 16.4899C7.36041 16.3809 7.36042 15.6191 7.89358 15.5101L13.2467 14.416C13.8355 14.2956 14.2956 13.8355 14.416 13.2467L15.5101 7.89359C15.6191 7.36041 16.3809 7.36042 16.4899 7.89358Z"
                    fill="url(#paint0_linear--inject-30)"
                    stroke="url(#paint1_linear--inject-30)"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear--inject-30"
                      x1="29"
                      y1="3"
                      x2="3"
                      y2="29"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2DC7ED"></stop>
                      <stop
                        offset="1"
                        stopColor="#538BF0"
                      stopOpacity="0"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear--inject-30"
                      x1="29"
                      y1="3"
                      x2="3"
                      y2="29"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2DC7ED"></stop>
                      <stop
                        offset="1"
                        stopColor="#538BF0"
                      stopOpacity="0"
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </h6>
            </div>
            {/* <span>React - Vue - TypeScript - JavaScript - Sass - Styled Components - dhsahdshadhsa</span> */}
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background:
              "linear-gradient(to right top, #6d327c, #485DA6, #00a1ba, #00BF98, #36C486",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #1a7f81" }}
          date="2020 - 2021"
          iconStyle={{
            background:
              "linear-gradient(to right top, #6d327c, #485DA6, #00a1ba, #00BF98, #36C486",
            color: "#fff",
          }}
          icon={<MdWorkOff />}
        >
          <div className="skils-span">
            <span>Jquery / Boostrap</span>
          </div>

          <h3 className="vertical-timeline-element-title">
            Autônomo · Freelance{" "}
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Desenvolvedor de software
          </h4>
          {/* <pclassName="p-skils">
    Desenvolvedor Front end 
    implementar novas funcionalidades e dar manutenções sob demanda
    </pclassName=> */}
          <div className="skils">
            <div className="w-100 hidden py-3" id="section-03">
              <h6 className="slider-text-1 flex-start-row">
                Jquery
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  data-inject-url="https://www.nyousefali.com.br/svg/icon-4star.svg"
                  className="w-auto mx"
                  style={{ minWidth: "32px" }}
                >
                  <path
                    d="M16.4899 7.89358L17.584 13.2467C17.7044 13.8355 18.1645 14.2956 18.7533 14.416L24.1064 15.5101C24.6396 15.6191 24.6396 16.3809 24.1064 16.4899L18.7533 17.584C18.1645 17.7044 17.7044 18.1645 17.584 18.7533L16.4899 24.1064C16.3809 24.6396 15.6191 24.6396 15.5101 24.1064L14.416 18.7533C14.2956 18.1645 13.8355 17.7044 13.2467 17.584L7.89359 16.4899C7.36041 16.3809 7.36042 15.6191 7.89358 15.5101L13.2467 14.416C13.8355 14.2956 14.2956 13.8355 14.416 13.2467L15.5101 7.89359C15.6191 7.36041 16.3809 7.36042 16.4899 7.89358Z"
                    fill="url(#paint0_linear--inject-25)"
                    stroke="url(#paint1_linear--inject-25)"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear--inject-25"
                      x1="29"
                      y1="3"
                      x2="3"
                      y2="29"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2DC7ED"></stop>
                      <stop
                        offset="1"
                        stopColor="#538BF0"
                      stopOpacity="0"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear--inject-25"
                      x1="29"
                      y1="3"
                      x2="3"
                      y2="29"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2DC7ED"></stop>
                      <stop
                        offset="1"
                        stopColor="#538BF0"
                      stopOpacity="0"
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg>
                Git
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  data-inject-url="https://www.nyousefali.com.br/svg/icon-4star.svg"
                  className="w-auto mx"
                  style={{ minWidth: "32px" }}
                >
                  <path
                    d="M16.4899 7.89358L17.584 13.2467C17.7044 13.8355 18.1645 14.2956 18.7533 14.416L24.1064 15.5101C24.6396 15.6191 24.6396 16.3809 24.1064 16.4899L18.7533 17.584C18.1645 17.7044 17.7044 18.1645 17.584 18.7533L16.4899 24.1064C16.3809 24.6396 15.6191 24.6396 15.5101 24.1064L14.416 18.7533C14.2956 18.1645 13.8355 17.7044 13.2467 17.584L7.89359 16.4899C7.36041 16.3809 7.36042 15.6191 7.89358 15.5101L13.2467 14.416C13.8355 14.2956 14.2956 13.8355 14.416 13.2467L15.5101 7.89359C15.6191 7.36041 16.3809 7.36042 16.4899 7.89358Z"
                    fill="url(#paint0_linear--inject-29)"
                    stroke="url(#paint1_linear--inject-29)"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear--inject-29"
                      x1="29"
                      y1="3"
                      x2="3"
                      y2="29"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2DC7ED"></stop>
                      <stop
                        offset="1"
                        stopColor="#538BF0"
                      stopOpacity="0"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear--inject-29"
                      x1="29"
                      y1="3"
                      x2="3"
                      y2="29"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2DC7ED"></stop>
                      <stop
                        offset="1"
                        stopColor="#538BF0"
                      stopOpacity="0"
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg>
                JavaScript
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  data-inject-url="https://www.nyousefali.com.br/svg/icon-4star.svg"
                  className="w-auto mx"
                  style={{ minWidth: "32px" }}
                >
                  <path
                    d="M16.4899 7.89358L17.584 13.2467C17.7044 13.8355 18.1645 14.2956 18.7533 14.416L24.1064 15.5101C24.6396 15.6191 24.6396 16.3809 24.1064 16.4899L18.7533 17.584C18.1645 17.7044 17.7044 18.1645 17.584 18.7533L16.4899 24.1064C16.3809 24.6396 15.6191 24.6396 15.5101 24.1064L14.416 18.7533C14.2956 18.1645 13.8355 17.7044 13.2467 17.584L7.89359 16.4899C7.36041 16.3809 7.36042 15.6191 7.89358 15.5101L13.2467 14.416C13.8355 14.2956 14.2956 13.8355 14.416 13.2467L15.5101 7.89359C15.6191 7.36041 16.3809 7.36042 16.4899 7.89358Z"
                    fill="url(#paint0_linear--inject-14)"
                    stroke="url(#paint1_linear--inject-14)"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear--inject-14"
                      x1="29"
                      y1="3"
                      x2="3"
                      y2="29"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2DC7ED"></stop>
                      <stop
                        offset="1"
                        stopColor="#538BF0"
                      stopOpacity="0"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear--inject-14"
                      x1="29"
                      y1="3"
                      x2="3"
                      y2="29"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2DC7ED"></stop>
                      <stop
                        offset="1"
                        stopColor="#538BF0"
                      stopOpacity="0"
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg>
                Boostrap
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  data-inject-url="https://www.nyousefali.com.br/svg/icon-4star.svg"
                  className="w-auto mx"
                  style={{ minWidth: "32px" }}
                >
                  <path
                    d="M16.4899 7.89358L17.584 13.2467C17.7044 13.8355 18.1645 14.2956 18.7533 14.416L24.1064 15.5101C24.6396 15.6191 24.6396 16.3809 24.1064 16.4899L18.7533 17.584C18.1645 17.7044 17.7044 18.1645 17.584 18.7533L16.4899 24.1064C16.3809 24.6396 15.6191 24.6396 15.5101 24.1064L14.416 18.7533C14.2956 18.1645 13.8355 17.7044 13.2467 17.584L7.89359 16.4899C7.36041 16.3809 7.36042 15.6191 7.89358 15.5101L13.2467 14.416C13.8355 14.2956 14.2956 13.8355 14.416 13.2467L15.5101 7.89359C15.6191 7.36041 16.3809 7.36042 16.4899 7.89358Z"
                    fill="url(#paint0_linear--inject-37)"
                    stroke="url(#paint1_linear--inject-37)"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear--inject-37"
                      x1="29"
                      y1="3"
                      x2="3"
                      y2="29"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2DC7ED"></stop>
                      <stop
                        offset="1"
                        stopColor="#538BF0"
                      stopOpacity="0"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear--inject-37"
                      x1="29"
                      y1="3"
                      x2="3"
                      y2="29"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2DC7ED"></stop>
                      <stop
                        offset="1"
                        stopColor="#538BF0"
                      stopOpacity="0"
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg>
                Developer Front-End
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  data-inject-url="https://www.nyousefali.com.br/svg/icon-4star.svg"
                  className="w-auto mx"
                  style={{ minWidth: "32px" }}
                >
                  <path
                    d="M16.4899 7.89358L17.584 13.2467C17.7044 13.8355 18.1645 14.2956 18.7533 14.416L24.1064 15.5101C24.6396 15.6191 24.6396 16.3809 24.1064 16.4899L18.7533 17.584C18.1645 17.7044 17.7044 18.1645 17.584 18.7533L16.4899 24.1064C16.3809 24.6396 15.6191 24.6396 15.5101 24.1064L14.416 18.7533C14.2956 18.1645 13.8355 17.7044 13.2467 17.584L7.89359 16.4899C7.36041 16.3809 7.36042 15.6191 7.89358 15.5101L13.2467 14.416C13.8355 14.2956 14.2956 13.8355 14.416 13.2467L15.5101 7.89359C15.6191 7.36041 16.3809 7.36042 16.4899 7.89358Z"
                    fill="url(#paint0_linear--inject-30)"
                    stroke="url(#paint1_linear--inject-30)"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear--inject-30"
                      x1="29"
                      y1="3"
                      x2="3"
                      y2="29"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2DC7ED"></stop>
                      <stop
                        offset="1"
                        stopColor="#538BF0"
                      stopOpacity="0"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear--inject-30"
                      x1="29"
                      y1="3"
                      x2="3"
                      y2="29"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2DC7ED"></stop>
                      <stop
                        offset="1"
                        stopColor="#538BF0"
                      stopOpacity="0"
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </h6>
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Início"
          iconStyle={{
            background:
              "linear-gradient(to right top, #6d327c, #485DA6, #00a1ba, #00BF98, #36C486",
            color: "#fff",
          }}
          icon={<GiSandsOfTime />}
        ></VerticalTimelineElement>
      </VerticalTimeline>

      <div className="w-100 hidden bt-gray bb-gray py-3" id="section-03">
        <div>
          <h6 className="slider-text flex-start-row">
            React
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              data-inject-url="https://www.nyousefali.com.br/svg/icon-4star.svg"
              className="w-auto mx"
              style={{ minWidth: "32px" }}
            >
              <path
                d="M16.4899 7.89358L17.584 13.2467C17.7044 13.8355 18.1645 14.2956 18.7533 14.416L24.1064 15.5101C24.6396 15.6191 24.6396 16.3809 24.1064 16.4899L18.7533 17.584C18.1645 17.7044 17.7044 18.1645 17.584 18.7533L16.4899 24.1064C16.3809 24.6396 15.6191 24.6396 15.5101 24.1064L14.416 18.7533C14.2956 18.1645 13.8355 17.7044 13.2467 17.584L7.89359 16.4899C7.36041 16.3809 7.36042 15.6191 7.89358 15.5101L13.2467 14.416C13.8355 14.2956 14.2956 13.8355 14.416 13.2467L15.5101 7.89359C15.6191 7.36041 16.3809 7.36042 16.4899 7.89358Z"
                fill="url(#paint0_linear--inject-14)"
                stroke="url(#paint1_linear--inject-14)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear--inject-14"
                  x1="29"
                  y1="3"
                  x2="3"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2DC7ED"></stop>
                  <stop offset="1" stopColor="#538BF0" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear--inject-14"
                  x1="29"
                  y1="3"
                  x2="3"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2DC7ED"></stop>
                  <stop offset="1" stopColor="#538BF0" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
            Interface
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              data-inject-url="https://www.nyousefali.com.br/svg/icon-4star.svg"
              className="w-auto mx-5"
              style={{ minWidth: "32px" }}
            >
              <path
                d="M16.4899 7.89358L17.584 13.2467C17.7044 13.8355 18.1645 14.2956 18.7533 14.416L24.1064 15.5101C24.6396 15.6191 24.6396 16.3809 24.1064 16.4899L18.7533 17.584C18.1645 17.7044 17.7044 18.1645 17.584 18.7533L16.4899 24.1064C16.3809 24.6396 15.6191 24.6396 15.5101 24.1064L14.416 18.7533C14.2956 18.1645 13.8355 17.7044 13.2467 17.584L7.89359 16.4899C7.36041 16.3809 7.36042 15.6191 7.89358 15.5101L13.2467 14.416C13.8355 14.2956 14.2956 13.8355 14.416 13.2467L15.5101 7.89359C15.6191 7.36041 16.3809 7.36042 16.4899 7.89358Z"
                fill="url(#paint0_linear--inject-37)"
                stroke="url(#paint1_linear--inject-37)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear--inject-37"
                  x1="29"
                  y1="3"
                  x2="3"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2DC7ED"></stop>
                  <stop offset="1" stopColor="#538BF0" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear--inject-37"
                  x1="29"
                  y1="3"
                  x2="3"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2DC7ED"></stop>
                  <stop offset="1" stopColor="#538BF0" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
            Javascript
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              data-inject-url="https://www.nyousefali.com.br/svg/icon-4star.svg"
              className="w-auto mx-5"
              style={{ minWidth: "32px" }}
            >
              <path
                d="M16.4899 7.89358L17.584 13.2467C17.7044 13.8355 18.1645 14.2956 18.7533 14.416L24.1064 15.5101C24.6396 15.6191 24.6396 16.3809 24.1064 16.4899L18.7533 17.584C18.1645 17.7044 17.7044 18.1645 17.584 18.7533L16.4899 24.1064C16.3809 24.6396 15.6191 24.6396 15.5101 24.1064L14.416 18.7533C14.2956 18.1645 13.8355 17.7044 13.2467 17.584L7.89359 16.4899C7.36041 16.3809 7.36042 15.6191 7.89358 15.5101L13.2467 14.416C13.8355 14.2956 14.2956 13.8355 14.416 13.2467L15.5101 7.89359C15.6191 7.36041 16.3809 7.36042 16.4899 7.89358Z"
                fill="url(#paint0_linear--inject-31)"
                stroke="url(#paint1_linear--inject-31)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear--inject-31"
                  x1="29"
                  y1="3"
                  x2="3"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2DC7ED"></stop>
                  <stop offset="1" stopColor="#538BF0" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear--inject-31"
                  x1="29"
                  y1="3"
                  x2="3"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2DC7ED"></stop>
                  <stop offset="1" stopColor="#538BF0" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
            Typescript
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              data-inject-url="https://www.nyousefali.com.br/svg/icon-4star.svg"
              className="w-auto mx-5"
              style={{ minWidth: "32px" }}
            >
              <path
                d="M16.4899 7.89358L17.584 13.2467C17.7044 13.8355 18.1645 14.2956 18.7533 14.416L24.1064 15.5101C24.6396 15.6191 24.6396 16.3809 24.1064 16.4899L18.7533 17.584C18.1645 17.7044 17.7044 18.1645 17.584 18.7533L16.4899 24.1064C16.3809 24.6396 15.6191 24.6396 15.5101 24.1064L14.416 18.7533C14.2956 18.1645 13.8355 17.7044 13.2467 17.584L7.89359 16.4899C7.36041 16.3809 7.36042 15.6191 7.89358 15.5101L13.2467 14.416C13.8355 14.2956 14.2956 13.8355 14.416 13.2467L15.5101 7.89359C15.6191 7.36041 16.3809 7.36042 16.4899 7.89358Z"
                fill="url(#paint0_linear--inject-20)"
                stroke="url(#paint1_linear--inject-20)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear--inject-20"
                  x1="29"
                  y1="3"
                  x2="3"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2DC7ED"></stop>
                  <stop offset="1" stopColor="#538BF0" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear--inject-20"
                  x1="29"
                  y1="3"
                  x2="3"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2DC7ED"></stop>
                  <stop offset="1" stopColor="#538BF0" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
            Developer Front-End
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              data-inject-url="https://www.nyousefali.com.br/svg/icon-4star.svg"
              className="w-auto mx-5"
              style={{ minWidth: "32px" }}
            >
              <path
                d="M16.4899 7.89358L17.584 13.2467C17.7044 13.8355 18.1645 14.2956 18.7533 14.416L24.1064 15.5101C24.6396 15.6191 24.6396 16.3809 24.1064 16.4899L18.7533 17.584C18.1645 17.7044 17.7044 18.1645 17.584 18.7533L16.4899 24.1064C16.3809 24.6396 15.6191 24.6396 15.5101 24.1064L14.416 18.7533C14.2956 18.1645 13.8355 17.7044 13.2467 17.584L7.89359 16.4899C7.36041 16.3809 7.36042 15.6191 7.89358 15.5101L13.2467 14.416C13.8355 14.2956 14.2956 13.8355 14.416 13.2467L15.5101 7.89359C15.6191 7.36041 16.3809 7.36042 16.4899 7.89358Z"
                fill="url(#paint0_linear--inject-29)"
                stroke="url(#paint1_linear--inject-29)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear--inject-29"
                  x1="29"
                  y1="3"
                  x2="3"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2DC7ED"></stop>
                  <stop offset="1" stopColor="#538BF0" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear--inject-29"
                  x1="29"
                  y1="3"
                  x2="3"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2DC7ED"></stop>
                  <stop offset="1" stopColor="#538BF0" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
            Material UI
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              data-inject-url="https://www.nyousefali.com.br/svg/icon-4star.svg"
              className="w-auto mx-5"
              style={{ minWidth: "32px" }}
            >
              <path
                d="M16.4899 7.89358L17.584 13.2467C17.7044 13.8355 18.1645 14.2956 18.7533 14.416L24.1064 15.5101C24.6396 15.6191 24.6396 16.3809 24.1064 16.4899L18.7533 17.584C18.1645 17.7044 17.7044 18.1645 17.584 18.7533L16.4899 24.1064C16.3809 24.6396 15.6191 24.6396 15.5101 24.1064L14.416 18.7533C14.2956 18.1645 13.8355 17.7044 13.2467 17.584L7.89359 16.4899C7.36041 16.3809 7.36042 15.6191 7.89358 15.5101L13.2467 14.416C13.8355 14.2956 14.2956 13.8355 14.416 13.2467L15.5101 7.89359C15.6191 7.36041 16.3809 7.36042 16.4899 7.89358Z"
                fill="url(#paint0_linear--inject-33)"
                stroke="url(#paint1_linear--inject-33)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear--inject-33"
                  x1="29"
                  y1="3"
                  x2="3"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2DC7ED"></stop>
                  <stop offset="1" stopColor="#538BF0" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear--inject-33"
                  x1="29"
                  y1="3"
                  x2="3"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2DC7ED"></stop>
                  <stop offset="1" stopColor="#538BF0" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
            Styled Components
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              data-inject-url="https://www.nyousefali.com.br/svg/icon-4star.svg"
              className="w-auto mx-5"
              style={{ minWidth: "32px" }}
            >
              <path
                d="M16.4899 7.89358L17.584 13.2467C17.7044 13.8355 18.1645 14.2956 18.7533 14.416L24.1064 15.5101C24.6396 15.6191 24.6396 16.3809 24.1064 16.4899L18.7533 17.584C18.1645 17.7044 17.7044 18.1645 17.584 18.7533L16.4899 24.1064C16.3809 24.6396 15.6191 24.6396 15.5101 24.1064L14.416 18.7533C14.2956 18.1645 13.8355 17.7044 13.2467 17.584L7.89359 16.4899C7.36041 16.3809 7.36042 15.6191 7.89358 15.5101L13.2467 14.416C13.8355 14.2956 14.2956 13.8355 14.416 13.2467L15.5101 7.89359C15.6191 7.36041 16.3809 7.36042 16.4899 7.89358Z"
                fill="url(#paint0_linear--inject-16)"
                stroke="url(#paint1_linear--inject-16)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear--inject-16"
                  x1="29"
                  y1="3"
                  x2="3"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2DC7ED"></stop>
                  <stop offset="1" stopColor="#538BF0" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear--inject-16"
                  x1="29"
                  y1="3"
                  x2="3"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2DC7ED"></stop>
                  <stop offset="1" stopColor="#538BF0" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
            Vue
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              data-inject-url="https://www.nyousefali.com.br/svg/icon-4star.svg"
              className="w-auto mx-5"
              style={{ minWidth: "32px" }}
            >
              <path
                d="M16.4899 7.89358L17.584 13.2467C17.7044 13.8355 18.1645 14.2956 18.7533 14.416L24.1064 15.5101C24.6396 15.6191 24.6396 16.3809 24.1064 16.4899L18.7533 17.584C18.1645 17.7044 17.7044 18.1645 17.584 18.7533L16.4899 24.1064C16.3809 24.6396 15.6191 24.6396 15.5101 24.1064L14.416 18.7533C14.2956 18.1645 13.8355 17.7044 13.2467 17.584L7.89359 16.4899C7.36041 16.3809 7.36042 15.6191 7.89358 15.5101L13.2467 14.416C13.8355 14.2956 14.2956 13.8355 14.416 13.2467L15.5101 7.89359C15.6191 7.36041 16.3809 7.36042 16.4899 7.89358Z"
                fill="url(#paint0_linear--inject-34)"
                stroke="url(#paint1_linear--inject-34)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear--inject-34"
                  x1="29"
                  y1="3"
                  x2="3"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2DC7ED"></stop>
                  <stop offset="1" stopColor="#538BF0" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear--inject-34"
                  x1="29"
                  y1="3"
                  x2="3"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2DC7ED"></stop>
                  <stop offset="1" stopColor="#538BF0" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
            React
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              data-inject-url="https://www.nyousefali.com.br/svg/icon-4star.svg"
              className="w-auto mx-5"
              style={{ minWidth: "32px" }}
            >
              <path
                d="M16.4899 7.89358L17.584 13.2467C17.7044 13.8355 18.1645 14.2956 18.7533 14.416L24.1064 15.5101C24.6396 15.6191 24.6396 16.3809 24.1064 16.4899L18.7533 17.584C18.1645 17.7044 17.7044 18.1645 17.584 18.7533L16.4899 24.1064C16.3809 24.6396 15.6191 24.6396 15.5101 24.1064L14.416 18.7533C14.2956 18.1645 13.8355 17.7044 13.2467 17.584L7.89359 16.4899C7.36041 16.3809 7.36042 15.6191 7.89358 15.5101L13.2467 14.416C13.8355 14.2956 14.2956 13.8355 14.416 13.2467L15.5101 7.89359C15.6191 7.36041 16.3809 7.36042 16.4899 7.89358Z"
                fill="url(#paint0_linear--inject-23)"
                stroke="url(#paint1_linear--inject-23)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear--inject-23"
                  x1="29"
                  y1="3"
                  x2="3"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2DC7ED"></stop>
                  <stop offset="1" stopColor="#538BF0" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear--inject-23"
                  x1="29"
                  y1="3"
                  x2="3"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2DC7ED"></stop>
                  <stop offset="1" stopColor="#538BF0" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
            Interface
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              data-inject-url="https://www.nyousefali.com.br/svg/icon-4star.svg"
              className="w-auto mx-5"
              style={{ minWidth: "32px" }}
            >
              <path
                d="M16.4899 7.89358L17.584 13.2467C17.7044 13.8355 18.1645 14.2956 18.7533 14.416L24.1064 15.5101C24.6396 15.6191 24.6396 16.3809 24.1064 16.4899L18.7533 17.584C18.1645 17.7044 17.7044 18.1645 17.584 18.7533L16.4899 24.1064C16.3809 24.6396 15.6191 24.6396 15.5101 24.1064L14.416 18.7533C14.2956 18.1645 13.8355 17.7044 13.2467 17.584L7.89359 16.4899C7.36041 16.3809 7.36042 15.6191 7.89358 15.5101L13.2467 14.416C13.8355 14.2956 14.2956 13.8355 14.416 13.2467L15.5101 7.89359C15.6191 7.36041 16.3809 7.36042 16.4899 7.89358Z"
                fill="url(#paint0_linear--inject-27)"
                stroke="url(#paint1_linear--inject-27)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear--inject-27"
                  x1="29"
                  y1="3"
                  x2="3"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2DC7ED"></stop>
                  <stop offset="1" stopColor="#538BF0" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear--inject-27"
                  x1="29"
                  y1="3"
                  x2="3"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2DC7ED"></stop>
                  <stop offset="1" stopColor="#538BF0" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
            Javascript
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              data-inject-url="https://www.nyousefali.com.br/svg/icon-4star.svg"
              className="w-auto mx-5"
              style={{ minWidth: "32px" }}
            >
              <path
                d="M16.4899 7.89358L17.584 13.2467C17.7044 13.8355 18.1645 14.2956 18.7533 14.416L24.1064 15.5101C24.6396 15.6191 24.6396 16.3809 24.1064 16.4899L18.7533 17.584C18.1645 17.7044 17.7044 18.1645 17.584 18.7533L16.4899 24.1064C16.3809 24.6396 15.6191 24.6396 15.5101 24.1064L14.416 18.7533C14.2956 18.1645 13.8355 17.7044 13.2467 17.584L7.89359 16.4899C7.36041 16.3809 7.36042 15.6191 7.89358 15.5101L13.2467 14.416C13.8355 14.2956 14.2956 13.8355 14.416 13.2467L15.5101 7.89359C15.6191 7.36041 16.3809 7.36042 16.4899 7.89358Z"
                fill="url(#paint0_linear--inject-28)"
                stroke="url(#paint1_linear--inject-28)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear--inject-28"
                  x1="29"
                  y1="3"
                  x2="3"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2DC7ED"></stop>
                  <stop offset="1" stopColor="#538BF0" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear--inject-28"
                  x1="29"
                  y1="3"
                  x2="3"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2DC7ED"></stop>
                  <stop offset="1" stopColor="#538BF0" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
            Typescript
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              data-inject-url="https://www.nyousefali.com.br/svg/icon-4star.svg"
              className="w-auto mx-5"
              style={{ minWidth: "32px" }}
            >
              <path
                d="M16.4899 7.89358L17.584 13.2467C17.7044 13.8355 18.1645 14.2956 18.7533 14.416L24.1064 15.5101C24.6396 15.6191 24.6396 16.3809 24.1064 16.4899L18.7533 17.584C18.1645 17.7044 17.7044 18.1645 17.584 18.7533L16.4899 24.1064C16.3809 24.6396 15.6191 24.6396 15.5101 24.1064L14.416 18.7533C14.2956 18.1645 13.8355 17.7044 13.2467 17.584L7.89359 16.4899C7.36041 16.3809 7.36042 15.6191 7.89358 15.5101L13.2467 14.416C13.8355 14.2956 14.2956 13.8355 14.416 13.2467L15.5101 7.89359C15.6191 7.36041 16.3809 7.36042 16.4899 7.89358Z"
                fill="url(#paint0_linear--inject-22)"
                stroke="url(#paint1_linear--inject-22)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear--inject-22"
                  x1="29"
                  y1="3"
                  x2="3"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2DC7ED"></stop>
                  <stop offset="1" stopColor="#538BF0" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear--inject-22"
                  x1="29"
                  y1="3"
                  x2="3"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2DC7ED"></stop>
                  <stop offset="1" stopColor="#538BF0" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
            Developer Front-End
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              data-inject-url="https://www.nyousefali.com.br/svg/icon-4star.svg"
              className="w-auto mx-5"
              style={{ minWidth: "32px" }}
            >
              <path
                d="M16.4899 7.89358L17.584 13.2467C17.7044 13.8355 18.1645 14.2956 18.7533 14.416L24.1064 15.5101C24.6396 15.6191 24.6396 16.3809 24.1064 16.4899L18.7533 17.584C18.1645 17.7044 17.7044 18.1645 17.584 18.7533L16.4899 24.1064C16.3809 24.6396 15.6191 24.6396 15.5101 24.1064L14.416 18.7533C14.2956 18.1645 13.8355 17.7044 13.2467 17.584L7.89359 16.4899C7.36041 16.3809 7.36042 15.6191 7.89358 15.5101L13.2467 14.416C13.8355 14.2956 14.2956 13.8355 14.416 13.2467L15.5101 7.89359C15.6191 7.36041 16.3809 7.36042 16.4899 7.89358Z"
                fill="url(#paint0_linear--inject-35)"
                stroke="url(#paint1_linear--inject-35)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear--inject-35"
                  x1="29"
                  y1="3"
                  x2="3"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2DC7ED"></stop>
                  <stop offset="1" stopColor="#538BF0" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear--inject-35"
                  x1="29"
                  y1="3"
                  x2="3"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2DC7ED"></stop>
                  <stop offset="1" stopColor="#538BF0" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
            Sass
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              data-inject-url="https://www.nyousefali.com.br/svg/icon-4star.svg"
              className="w-auto mx-5"
              style={{ minWidth: "32px" }}
            >
              <path
                d="M16.4899 7.89358L17.584 13.2467C17.7044 13.8355 18.1645 14.2956 18.7533 14.416L24.1064 15.5101C24.6396 15.6191 24.6396 16.3809 24.1064 16.4899L18.7533 17.584C18.1645 17.7044 17.7044 18.1645 17.584 18.7533L16.4899 24.1064C16.3809 24.6396 15.6191 24.6396 15.5101 24.1064L14.416 18.7533C14.2956 18.1645 13.8355 17.7044 13.2467 17.584L7.89359 16.4899C7.36041 16.3809 7.36042 15.6191 7.89358 15.5101L13.2467 14.416C13.8355 14.2956 14.2956 13.8355 14.416 13.2467L15.5101 7.89359C15.6191 7.36041 16.3809 7.36042 16.4899 7.89358Z"
                fill="url(#paint0_linear--inject-19)"
                stroke="url(#paint1_linear--inject-19)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear--inject-19"
                  x1="29"
                  y1="3"
                  x2="3"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2DC7ED"></stop>
                  <stop offset="1" stopColor="#538BF0" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear--inject-19"
                  x1="29"
                  y1="3"
                  x2="3"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2DC7ED"></stop>
                  <stop offset="1" stopColor="#538BF0" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
            Styled Components
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              data-inject-url="https://www.nyousefali.com.br/svg/icon-4star.svg"
              className="w-auto mx-5"
              style={{ minWidth: "32px" }}
            >
              <path
                d="M16.4899 7.89358L17.584 13.2467C17.7044 13.8355 18.1645 14.2956 18.7533 14.416L24.1064 15.5101C24.6396 15.6191 24.6396 16.3809 24.1064 16.4899L18.7533 17.584C18.1645 17.7044 17.7044 18.1645 17.584 18.7533L16.4899 24.1064C16.3809 24.6396 15.6191 24.6396 15.5101 24.1064L14.416 18.7533C14.2956 18.1645 13.8355 17.7044 13.2467 17.584L7.89359 16.4899C7.36041 16.3809 7.36042 15.6191 7.89358 15.5101L13.2467 14.416C13.8355 14.2956 14.2956 13.8355 14.416 13.2467L15.5101 7.89359C15.6191 7.36041 16.3809 7.36042 16.4899 7.89358Z"
                fill="url(#paint0_linear--inject-36)"
                stroke="url(#paint1_linear--inject-36)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear--inject-36"
                  x1="29"
                  y1="3"
                  x2="3"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2DC7ED"></stop>
                  <stop offset="1" stopColor="#538BF0" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear--inject-36"
                  x1="29"
                  y1="3"
                  x2="3"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2DC7ED"></stop>
                  <stop offset="1" stopColor="#538BF0" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
            Vue
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              data-inject-url="https://www.nyousefali.com.br/svg/icon-4star.svg"
              className="w-auto mx-5"
              style={{ minWidth: "32px" }}
            >
              <path
                d="M16.4899 7.89358L17.584 13.2467C17.7044 13.8355 18.1645 14.2956 18.7533 14.416L24.1064 15.5101C24.6396 15.6191 24.6396 16.3809 24.1064 16.4899L18.7533 17.584C18.1645 17.7044 17.7044 18.1645 17.584 18.7533L16.4899 24.1064C16.3809 24.6396 15.6191 24.6396 15.5101 24.1064L14.416 18.7533C14.2956 18.1645 13.8355 17.7044 13.2467 17.584L7.89359 16.4899C7.36041 16.3809 7.36042 15.6191 7.89358 15.5101L13.2467 14.416C13.8355 14.2956 14.2956 13.8355 14.416 13.2467L15.5101 7.89359C15.6191 7.36041 16.3809 7.36042 16.4899 7.89358Z"
                fill="url(#paint0_linear--inject-25)"
                stroke="url(#paint1_linear--inject-25)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear--inject-25"
                  x1="29"
                  y1="3"
                  x2="3"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2DC7ED"></stop>
                  <stop offset="1" stopColor="#538BF0" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear--inject-25"
                  x1="29"
                  y1="3"
                  x2="3"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2DC7ED"></stop>
                  <stop offset="1" stopColor="#538BF0" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
            React
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              data-inject-url="https://www.nyousefali.com.br/svg/icon-4star.svg"
              className="w-auto mx-5"
              style={{ minWidth: "32px" }}
            >
              <path
                d="M16.4899 7.89358L17.584 13.2467C17.7044 13.8355 18.1645 14.2956 18.7533 14.416L24.1064 15.5101C24.6396 15.6191 24.6396 16.3809 24.1064 16.4899L18.7533 17.584C18.1645 17.7044 17.7044 18.1645 17.584 18.7533L16.4899 24.1064C16.3809 24.6396 15.6191 24.6396 15.5101 24.1064L14.416 18.7533C14.2956 18.1645 13.8355 17.7044 13.2467 17.584L7.89359 16.4899C7.36041 16.3809 7.36042 15.6191 7.89358 15.5101L13.2467 14.416C13.8355 14.2956 14.2956 13.8355 14.416 13.2467L15.5101 7.89359C15.6191 7.36041 16.3809 7.36042 16.4899 7.89358Z"
                fill="url(#paint0_linear--inject-24)"
                stroke="url(#paint1_linear--inject-24)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear--inject-24"
                  x1="29"
                  y1="3"
                  x2="3"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2DC7ED"></stop>
                  <stop offset="1" stopColor="#538BF0" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear--inject-24"
                  x1="29"
                  y1="3"
                  x2="3"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2DC7ED"></stop>
                  <stop offset="1" stopColor="#538BF0" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
            Interface
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              data-inject-url="https://www.nyousefali.com.br/svg/icon-4star.svg"
              className="w-auto mx-5"
              style={{ minWidth: "32px" }}
            >
              <path
                d="M16.4899 7.89358L17.584 13.2467C17.7044 13.8355 18.1645 14.2956 18.7533 14.416L24.1064 15.5101C24.6396 15.6191 24.6396 16.3809 24.1064 16.4899L18.7533 17.584C18.1645 17.7044 17.7044 18.1645 17.584 18.7533L16.4899 24.1064C16.3809 24.6396 15.6191 24.6396 15.5101 24.1064L14.416 18.7533C14.2956 18.1645 13.8355 17.7044 13.2467 17.584L7.89359 16.4899C7.36041 16.3809 7.36042 15.6191 7.89358 15.5101L13.2467 14.416C13.8355 14.2956 14.2956 13.8355 14.416 13.2467L15.5101 7.89359C15.6191 7.36041 16.3809 7.36042 16.4899 7.89358Z"
                fill="url(#paint0_linear--inject-18)"
                stroke="url(#paint1_linear--inject-18)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear--inject-18"
                  x1="29"
                  y1="3"
                  x2="3"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2DC7ED"></stop>
                  <stop offset="1" stopColor="#538BF0" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear--inject-18"
                  x1="29"
                  y1="3"
                  x2="3"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2DC7ED"></stop>
                  <stop offset="1" stopColor="#538BF0" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
            Javascript
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              data-inject-url="https://www.nyousefali.com.br/svg/icon-4star.svg"
              className="w-auto mx-5"
              style={{ minWidth: "32px" }}
            >
              <path
                d="M16.4899 7.89358L17.584 13.2467C17.7044 13.8355 18.1645 14.2956 18.7533 14.416L24.1064 15.5101C24.6396 15.6191 24.6396 16.3809 24.1064 16.4899L18.7533 17.584C18.1645 17.7044 17.7044 18.1645 17.584 18.7533L16.4899 24.1064C16.3809 24.6396 15.6191 24.6396 15.5101 24.1064L14.416 18.7533C14.2956 18.1645 13.8355 17.7044 13.2467 17.584L7.89359 16.4899C7.36041 16.3809 7.36042 15.6191 7.89358 15.5101L13.2467 14.416C13.8355 14.2956 14.2956 13.8355 14.416 13.2467L15.5101 7.89359C15.6191 7.36041 16.3809 7.36042 16.4899 7.89358Z"
                fill="url(#paint0_linear--inject-26)"
                stroke="url(#paint1_linear--inject-26)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear--inject-26"
                  x1="29"
                  y1="3"
                  x2="3"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2DC7ED"></stop>
                  <stop offset="1" stopColor="#538BF0" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear--inject-26"
                  x1="29"
                  y1="3"
                  x2="3"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2DC7ED"></stop>
                  <stop offset="1" stopColor="#538BF0" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
            Typescript
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              data-inject-url="https://www.nyousefali.com.br/svg/icon-4star.svg"
              className="w-auto mx-5"
              style={{ minWidth: "32px" }}
            >
              <path
                d="M16.4899 7.89358L17.584 13.2467C17.7044 13.8355 18.1645 14.2956 18.7533 14.416L24.1064 15.5101C24.6396 15.6191 24.6396 16.3809 24.1064 16.4899L18.7533 17.584C18.1645 17.7044 17.7044 18.1645 17.584 18.7533L16.4899 24.1064C16.3809 24.6396 15.6191 24.6396 15.5101 24.1064L14.416 18.7533C14.2956 18.1645 13.8355 17.7044 13.2467 17.584L7.89359 16.4899C7.36041 16.3809 7.36042 15.6191 7.89358 15.5101L13.2467 14.416C13.8355 14.2956 14.2956 13.8355 14.416 13.2467L15.5101 7.89359C15.6191 7.36041 16.3809 7.36042 16.4899 7.89358Z"
                fill="url(#paint0_linear--inject-21)"
                stroke="url(#paint1_linear--inject-21)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear--inject-21"
                  x1="29"
                  y1="3"
                  x2="3"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2DC7ED"></stop>
                  <stop offset="1" stopColor="#538BF0" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear--inject-21"
                  x1="29"
                  y1="3"
                  x2="3"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2DC7ED"></stop>
                  <stop offset="1" stopColor="#538BF0" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
            Developer Front-End
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              data-inject-url="https://www.nyousefali.com.br/svg/icon-4star.svg"
              className="w-auto mx-5"
              style={{ minWidth: "32px" }}
            >
              <path
                d="M16.4899 7.89358L17.584 13.2467C17.7044 13.8355 18.1645 14.2956 18.7533 14.416L24.1064 15.5101C24.6396 15.6191 24.6396 16.3809 24.1064 16.4899L18.7533 17.584C18.1645 17.7044 17.7044 18.1645 17.584 18.7533L16.4899 24.1064C16.3809 24.6396 15.6191 24.6396 15.5101 24.1064L14.416 18.7533C14.2956 18.1645 13.8355 17.7044 13.2467 17.584L7.89359 16.4899C7.36041 16.3809 7.36042 15.6191 7.89358 15.5101L13.2467 14.416C13.8355 14.2956 14.2956 13.8355 14.416 13.2467L15.5101 7.89359C15.6191 7.36041 16.3809 7.36042 16.4899 7.89358Z"
                fill="url(#paint0_linear--inject-15)"
                stroke="url(#paint1_linear--inject-15)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear--inject-15"
                  x1="29"
                  y1="3"
                  x2="3"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2DC7ED"></stop>
                  <stop offset="1" stopColor="#538BF0" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear--inject-15"
                  x1="29"
                  y1="3"
                  x2="3"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2DC7ED"></stop>
                  <stop offset="1" stopColor="#538BF0" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
            Sass
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              data-inject-url="https://www.nyousefali.com.br/svg/icon-4star.svg"
              className="w-auto mx-5"
              style={{ minWidth: "32px" }}
            >
              <path
                d="M16.4899 7.89358L17.584 13.2467C17.7044 13.8355 18.1645 14.2956 18.7533 14.416L24.1064 15.5101C24.6396 15.6191 24.6396 16.3809 24.1064 16.4899L18.7533 17.584C18.1645 17.7044 17.7044 18.1645 17.584 18.7533L16.4899 24.1064C16.3809 24.6396 15.6191 24.6396 15.5101 24.1064L14.416 18.7533C14.2956 18.1645 13.8355 17.7044 13.2467 17.584L7.89359 16.4899C7.36041 16.3809 7.36042 15.6191 7.89358 15.5101L13.2467 14.416C13.8355 14.2956 14.2956 13.8355 14.416 13.2467L15.5101 7.89359C15.6191 7.36041 16.3809 7.36042 16.4899 7.89358Z"
                fill="url(#paint0_linear--inject-32)"
                stroke="url(#paint1_linear--inject-32)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear--inject-32"
                  x1="29"
                  y1="3"
                  x2="3"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2DC7ED"></stop>
                  <stop offset="1" stopColor="#538BF0" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear--inject-32"
                  x1="29"
                  y1="3"
                  x2="3"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2DC7ED"></stop>
                  <stop offset="1" stopColor="#538BF0" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
            Styled Components
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              data-inject-url="https://www.nyousefali.com.br/svg/icon-4star.svg"
              className="w-auto mx-5"
              style={{ minWidth: "32px" }}
            >
              <path
                d="M16.4899 7.89358L17.584 13.2467C17.7044 13.8355 18.1645 14.2956 18.7533 14.416L24.1064 15.5101C24.6396 15.6191 24.6396 16.3809 24.1064 16.4899L18.7533 17.584C18.1645 17.7044 17.7044 18.1645 17.584 18.7533L16.4899 24.1064C16.3809 24.6396 15.6191 24.6396 15.5101 24.1064L14.416 18.7533C14.2956 18.1645 13.8355 17.7044 13.2467 17.584L7.89359 16.4899C7.36041 16.3809 7.36042 15.6191 7.89358 15.5101L13.2467 14.416C13.8355 14.2956 14.2956 13.8355 14.416 13.2467L15.5101 7.89359C15.6191 7.36041 16.3809 7.36042 16.4899 7.89358Z"
                fill="url(#paint0_linear--inject-17)"
                stroke="url(#paint1_linear--inject-17)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear--inject-17"
                  x1="29"
                  y1="3"
                  x2="3"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2DC7ED"></stop>
                  <stop offset="1" stopColor="#538BF0" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear--inject-17"
                  x1="29"
                  y1="3"
                  x2="3"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2DC7ED"></stop>
                  <stop offset="1" stopColor="#538BF0" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
            Vue
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              data-inject-url="https://www.nyousefali.com.br/svg/icon-4star.svg"
              className="w-auto mx"
              style={{ minWidth: "32px" }}
            >
              <path
                d="M16.4899 7.89358L17.584 13.2467C17.7044 13.8355 18.1645 14.2956 18.7533 14.416L24.1064 15.5101C24.6396 15.6191 24.6396 16.3809 24.1064 16.4899L18.7533 17.584C18.1645 17.7044 17.7044 18.1645 17.584 18.7533L16.4899 24.1064C16.3809 24.6396 15.6191 24.6396 15.5101 24.1064L14.416 18.7533C14.2956 18.1645 13.8355 17.7044 13.2467 17.584L7.89359 16.4899C7.36041 16.3809 7.36042 15.6191 7.89358 15.5101L13.2467 14.416C13.8355 14.2956 14.2956 13.8355 14.416 13.2467L15.5101 7.89359C15.6191 7.36041 16.3809 7.36042 16.4899 7.89358Z"
                fill="url(#paint0_linear--inject-30)"
                stroke="url(#paint1_linear--inject-30)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear--inject-30"
                  x1="29"
                  y1="3"
                  x2="3"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2DC7ED"></stop>
                  <stop offset="1" stopColor="#538BF0" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear--inject-30"
                  x1="29"
                  y1="3"
                  x2="3"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2DC7ED"></stop>
                  <stop offset="1" stopColor="#538BF0" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
          </h6>
        </div>
      </div>
      <section className="container hidden" id="section-04">
        <div className="grid-12 my-8 relative">
          <div data-title="Meus" className="title">
            <Title font={"30px"} text={"Contatos"} Color={"#1a7f81"} />
          </div>

          <div>
            <h3 className="mt-6 text-center color-blue">
              rafaelgava921@gmail.com
            </h3>
          </div>
          <div className="wrapper">
          <a href="https://www.linkedin.com/in/rafael-yokoyama/" target="_blank" className="icon" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/Rafael-Yokoyama" target="_blank" className="icon" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.instagram.com/dev_yokoyama/" target="_blank" className="icon" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <svg
            width="220"
            height="80"
            viewBox="0 0 220 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-ny"
          >
            <path
              d="M30.2452 16.5029L11.681 11.018C11.295 10.9039 10.9393 11.2695 11.0639 11.6523L16.9707 29.7946C17.0862 30.1495 17.5358 30.2572 17.7997 29.9933L30.4571 17.3359C30.7252 17.0678 30.6089 16.6103 30.2452 16.5029Z"
              fill="url(#paint0_linear_503_2)"
              stroke="url(#paint1_linear_503_2)"
            />
            <path
              d="M198 32.5H40C35.8579 32.5 32.5 35.8579 32.5 40V64C32.5 68.1421 35.8579 71.5 40 71.5H198C202.142 71.5 205.5 68.1421 205.5 64V40C205.5 35.8579 202.142 32.5 198 32.5Z"
              fill="url(#paint2_linear_503_2)"
              stroke="url(#paint3_linear_503_2)"
            />
            <path
              d="M49.6875 58H46.321V47.0909H49.8366C50.8949 47.0909 51.8004 47.3093 52.5533 47.7461C53.3061 48.1793 53.8832 48.8026 54.2844 49.6158C54.6857 50.4254 54.8864 51.3949 54.8864 52.5241C54.8864 53.6605 54.6839 54.6388 54.2791 55.4592C53.8743 56.2759 53.2848 56.9045 52.5107 57.3448C51.7365 57.7816 50.7955 58 49.6875 58ZM47.642 56.8281H49.6023C50.5043 56.8281 51.2518 56.6541 51.8448 56.3061C52.4379 55.9581 52.88 55.4627 53.1712 54.82C53.4624 54.1772 53.608 53.4119 53.608 52.5241C53.608 51.6435 53.4641 50.8853 53.1765 50.2496C52.8888 49.6104 52.4592 49.1204 51.8874 48.7795C51.3157 48.435 50.6037 48.2628 49.7514 48.2628H47.642V56.8281ZM60.3622 58.1705C59.5739 58.1705 58.8938 57.9964 58.3221 57.6484C57.7539 57.2969 57.3153 56.8068 57.0064 56.1783C56.701 55.5462 56.5483 54.8111 56.5483 53.973C56.5483 53.1349 56.701 52.3963 57.0064 51.7571C57.3153 51.1143 57.745 50.6136 58.2955 50.255C58.8494 49.8928 59.4957 49.7116 60.2344 49.7116C60.6605 49.7116 61.0813 49.7827 61.4968 49.9247C61.9123 50.0668 62.2905 50.2976 62.6314 50.6172C62.9723 50.9332 63.244 51.3523 63.4464 51.8743C63.6488 52.3963 63.75 53.0391 63.75 53.8026V54.3352H57.4432V53.2486H62.4716C62.4716 52.7869 62.3793 52.375 62.1946 52.0128C62.0135 51.6506 61.7543 51.3647 61.4169 51.1552C61.0831 50.9457 60.6889 50.8409 60.2344 50.8409C59.7337 50.8409 59.3004 50.9652 58.9347 51.2138C58.5724 51.4588 58.2937 51.7784 58.0984 52.1726C57.9031 52.5668 57.8054 52.9893 57.8054 53.4403V54.1648C57.8054 54.7827 57.9119 55.3065 58.125 55.7362C58.3416 56.1623 58.6417 56.4872 59.0252 56.7109C59.4087 56.9311 59.8544 57.0412 60.3622 57.0412C60.6925 57.0412 60.9908 56.995 61.2571 56.9027C61.527 56.8068 61.7596 56.6648 61.9549 56.4766C62.1502 56.2848 62.3011 56.0469 62.4077 55.7628L63.6222 56.1037C63.4943 56.5156 63.2795 56.8778 62.9776 57.1903C62.6758 57.4993 62.3029 57.7408 61.859 57.9148C61.4151 58.0852 60.9162 58.1705 60.3622 58.1705ZM72.1036 49.8182L69.078 58H67.7996L64.7741 49.8182H66.1377L68.3962 56.3381H68.4814L70.74 49.8182H72.1036ZM78.1521 58V47.0909H81.8382C82.6904 47.0909 83.39 47.2365 83.9369 47.5277C84.4838 47.8153 84.8886 48.2113 85.1514 48.7156C85.4142 49.2198 85.5455 49.7933 85.5455 50.4361C85.5455 51.0788 85.4142 51.6488 85.1514 52.146C84.8886 52.6431 84.4855 53.0337 83.9422 53.3178C83.3989 53.5984 82.7046 53.7386 81.8595 53.7386H78.8765V52.5455H81.8169C82.3992 52.5455 82.868 52.4602 83.2231 52.2898C83.5818 52.1193 83.841 51.8778 84.0008 51.5653C84.1642 51.2493 84.2458 50.8729 84.2458 50.4361C84.2458 49.9993 84.1642 49.6175 84.0008 49.2908C83.8374 48.9641 83.5764 48.712 83.2178 48.5344C82.8591 48.3533 82.385 48.2628 81.7955 48.2628H79.4731V58H78.1521ZM83.287 53.0994L85.9717 58H84.4376L81.7955 53.0994H83.287ZM89.984 58.1918C89.4656 58.1918 88.995 58.0941 88.5724 57.8988C88.1499 57.6999 87.8143 57.4141 87.5657 57.0412C87.3171 56.6648 87.1928 56.2102 87.1928 55.6776C87.1928 55.2088 87.2852 54.8288 87.4698 54.5376C87.6545 54.2429 87.9013 54.0121 88.2102 53.8452C88.5192 53.6783 88.8601 53.554 89.233 53.4723C89.6094 53.3871 89.9876 53.3196 90.3675 53.2699C90.8647 53.206 91.2678 53.158 91.5767 53.1261C91.8892 53.0906 92.1165 53.032 92.2585 52.9503C92.4041 52.8686 92.4769 52.7266 92.4769 52.5241V52.4815C92.4769 51.956 92.3331 51.5476 92.0455 51.2564C91.7614 50.9652 91.3299 50.8196 90.7511 50.8196C90.1509 50.8196 89.6804 50.951 89.3395 51.2138C88.9986 51.4766 88.7589 51.7571 88.6204 52.0554L87.4272 51.6293C87.6403 51.1321 87.9244 50.745 88.2795 50.468C88.6381 50.1875 89.0288 49.9922 89.4513 49.8821C89.8775 49.7685 90.2965 49.7116 90.7085 49.7116C90.9712 49.7116 91.2731 49.7436 91.614 49.8075C91.9585 49.8679 92.2905 49.994 92.6101 50.1857C92.9332 50.3775 93.2013 50.6669 93.4144 51.054C93.6275 51.4411 93.734 51.9595 93.734 52.6094V58H92.4769V56.892H92.413C92.3278 57.0696 92.1857 57.2596 91.9869 57.462C91.788 57.6644 91.5234 57.8366 91.1932 57.9787C90.8629 58.1207 90.4599 58.1918 89.984 58.1918ZM90.1758 57.0625C90.6729 57.0625 91.092 56.9648 91.4329 56.7695C91.7773 56.5742 92.0366 56.3221 92.2106 56.0131C92.3881 55.7042 92.4769 55.3793 92.4769 55.0384V53.8878C92.4237 53.9517 92.3065 54.0103 92.1254 54.0636C91.9478 54.1133 91.7418 54.1577 91.5075 54.1967C91.2766 54.2322 91.0511 54.2642 90.831 54.2926C90.6143 54.3175 90.4386 54.3388 90.3036 54.3565C89.9769 54.3991 89.6715 54.4684 89.3874 54.5643C89.1069 54.6566 88.8796 54.7969 88.7056 54.9851C88.5352 55.1697 88.4499 55.4219 88.4499 55.7415C88.4499 56.1783 88.6115 56.5085 88.9347 56.7322C89.2614 56.9524 89.6751 57.0625 90.1758 57.0625ZM99.672 49.8182V50.8835H95.2615V49.8182H99.672ZM96.5825 58V48.6889C96.5825 48.2202 96.6926 47.8295 96.9127 47.517C97.1329 47.2045 97.4188 46.9702 97.7703 46.8139C98.1219 46.6577 98.493 46.5795 98.8836 46.5795C99.1926 46.5795 99.4447 46.6044 99.64 46.6541C99.8353 46.7038 99.9809 46.75 100.077 46.7926L99.7146 47.8793C99.6507 47.858 99.5619 47.8313 99.4482 47.7994C99.3382 47.7674 99.1926 47.7514 99.0115 47.7514C98.596 47.7514 98.2959 47.8562 98.1112 48.0657C97.9301 48.2752 97.8396 48.5824 97.8396 48.9872V58H96.5825ZM103.607 58.1918C103.089 58.1918 102.618 58.0941 102.195 57.8988C101.773 57.6999 101.437 57.4141 101.189 57.0412C100.94 56.6648 100.816 56.2102 100.816 55.6776C100.816 55.2088 100.908 54.8288 101.093 54.5376C101.278 54.2429 101.524 54.0121 101.833 53.8452C102.142 53.6783 102.483 53.554 102.856 53.4723C103.232 53.3871 103.611 53.3196 103.991 53.2699C104.488 53.206 104.891 53.158 105.2 53.1261C105.512 53.0906 105.74 53.032 105.882 52.9503C106.027 52.8686 106.1 52.7266 106.1 52.5241V52.4815C106.1 51.956 105.956 51.5476 105.669 51.2564C105.384 50.9652 104.953 50.8196 104.374 50.8196C103.774 50.8196 103.303 50.951 102.963 51.2138C102.622 51.4766 102.382 51.7571 102.243 52.0554L101.05 51.6293C101.263 51.1321 101.547 50.745 101.903 50.468C102.261 50.1875 102.652 49.9922 103.074 49.8821C103.501 49.7685 103.92 49.7116 104.331 49.7116C104.594 49.7116 104.896 49.7436 105.237 49.8075C105.581 49.8679 105.914 49.994 106.233 50.1857C106.556 50.3775 106.824 50.6669 107.037 51.054C107.251 51.4411 107.357 51.9595 107.357 52.6094V58H106.1V56.892H106.036C105.951 57.0696 105.809 57.2596 105.61 57.462C105.411 57.6644 105.146 57.8366 104.816 57.9787C104.486 58.1207 104.083 58.1918 103.607 58.1918ZM103.799 57.0625C104.296 57.0625 104.715 56.9648 105.056 56.7695C105.4 56.5742 105.66 56.3221 105.834 56.0131C106.011 55.7042 106.1 55.3793 106.1 55.0384V53.8878C106.047 53.9517 105.93 54.0103 105.748 54.0636C105.571 54.1133 105.365 54.1577 105.131 54.1967C104.9 54.2322 104.674 54.2642 104.454 54.2926C104.237 54.3175 104.062 54.3388 103.927 54.3565C103.6 54.3991 103.295 54.4684 103.01 54.5643C102.73 54.6566 102.503 54.7969 102.329 54.9851C102.158 55.1697 102.073 55.4219 102.073 55.7415C102.073 56.1783 102.235 56.5085 102.558 56.7322C102.884 56.9524 103.298 57.0625 103.799 57.0625ZM113.082 58.1705C112.294 58.1705 111.614 57.9964 111.042 57.6484C110.474 57.2969 110.035 56.8068 109.726 56.1783C109.421 55.5462 109.268 54.8111 109.268 53.973C109.268 53.1349 109.421 52.3963 109.726 51.7571C110.035 51.1143 110.465 50.6136 111.015 50.255C111.569 49.8928 112.215 49.7116 112.954 49.7116C113.38 49.7116 113.801 49.7827 114.217 49.9247C114.632 50.0668 115.01 50.2976 115.351 50.6172C115.692 50.9332 115.964 51.3523 116.166 51.8743C116.369 52.3963 116.47 53.0391 116.47 53.8026V54.3352H110.163V53.2486H115.191C115.191 52.7869 115.099 52.375 114.914 52.0128C114.733 51.6506 114.474 51.3647 114.137 51.1552C113.803 50.9457 113.409 50.8409 112.954 50.8409C112.453 50.8409 112.02 50.9652 111.654 51.2138C111.292 51.4588 111.013 51.7784 110.818 52.1726C110.623 52.5668 110.525 52.9893 110.525 53.4403V54.1648C110.525 54.7827 110.632 55.3065 110.845 55.7362C111.061 56.1623 111.361 56.4872 111.745 56.7109C112.128 56.9311 112.574 57.0412 113.082 57.0412C113.412 57.0412 113.71 56.995 113.977 56.9027C114.247 56.8068 114.479 56.6648 114.675 56.4766C114.87 56.2848 115.021 56.0469 115.127 55.7628L116.342 56.1037C116.214 56.5156 115.999 56.8778 115.697 57.1903C115.396 57.4993 115.023 57.7408 114.579 57.9148C114.135 58.0852 113.636 58.1705 113.082 58.1705ZM119.639 47.0909V58H118.382V47.0909H119.639ZM125.393 47.0909H126.906L129.932 52.1832H130.059L133.085 47.0909H134.598L130.656 53.5043V58H129.335V53.5043L125.393 47.0909ZM138.303 58.1705C137.564 58.1705 136.916 57.9947 136.358 57.6431C135.804 57.2915 135.371 56.7997 135.059 56.1676C134.75 55.5355 134.595 54.7969 134.595 53.9517C134.595 53.0994 134.75 52.3555 135.059 51.7198C135.371 51.0842 135.804 50.5906 136.358 50.239C136.916 49.8874 137.564 49.7116 138.303 49.7116C139.041 49.7116 139.688 49.8874 140.241 50.239C140.799 50.5906 141.232 51.0842 141.541 51.7198C141.854 52.3555 142.01 53.0994 142.01 53.9517C142.01 54.7969 141.854 55.5355 141.541 56.1676C141.232 56.7997 140.799 57.2915 140.241 57.6431C139.688 57.9947 139.041 58.1705 138.303 58.1705ZM138.303 57.0412C138.864 57.0412 139.325 56.8974 139.688 56.6097C140.05 56.3221 140.318 55.9439 140.492 55.4751C140.666 55.0064 140.753 54.4986 140.753 53.9517C140.753 53.4048 140.666 52.8952 140.492 52.4229C140.318 51.9506 140.05 51.5689 139.688 51.2777C139.325 50.9865 138.864 50.8409 138.303 50.8409C137.741 50.8409 137.28 50.9865 136.918 51.2777C136.555 51.5689 136.287 51.9506 136.113 52.4229C135.939 52.8952 135.852 53.4048 135.852 53.9517C135.852 54.4986 135.939 55.0064 136.113 55.4751C136.287 55.9439 136.555 56.3221 136.918 56.6097C137.28 56.8974 137.741 57.0412 138.303 57.0412ZM145.101 55.017L145.079 53.4616H145.335L148.915 49.8182H150.47L146.656 53.6747H146.55L145.101 55.017ZM143.929 58V47.0909H145.186V58H143.929ZM149.128 58L145.932 53.9517L146.827 53.0781L150.726 58H149.128ZM155.075 58.1705C154.336 58.1705 153.688 57.9947 153.131 57.6431C152.577 57.2915 152.144 56.7997 151.831 56.1676C151.522 55.5355 151.368 54.7969 151.368 53.9517C151.368 53.0994 151.522 52.3555 151.831 51.7198C152.144 51.0842 152.577 50.5906 153.131 50.239C153.688 49.8874 154.336 49.7116 155.075 49.7116C155.814 49.7116 156.46 49.8874 157.014 50.239C157.571 50.5906 158.005 51.0842 158.314 51.7198C158.626 52.3555 158.782 53.0994 158.782 53.9517C158.782 54.7969 158.626 55.5355 158.314 56.1676C158.005 56.7997 157.571 57.2915 157.014 57.6431C156.46 57.9947 155.814 58.1705 155.075 58.1705ZM155.075 57.0412C155.636 57.0412 156.098 56.8974 156.46 56.6097C156.822 56.3221 157.09 55.9439 157.264 55.4751C157.438 55.0064 157.525 54.4986 157.525 53.9517C157.525 53.4048 157.438 52.8952 157.264 52.4229C157.09 51.9506 156.822 51.5689 156.46 51.2777C156.098 50.9865 155.636 50.8409 155.075 50.8409C154.514 50.8409 154.052 50.9865 153.69 51.2777C153.328 51.5689 153.06 51.9506 152.886 52.4229C152.712 52.8952 152.625 53.4048 152.625 53.9517C152.625 54.4986 152.712 55.0064 152.886 55.4751C153.06 55.9439 153.328 56.3221 153.69 56.6097C154.052 56.8974 154.514 57.0412 155.075 57.0412ZM161.218 61.0682C161.005 61.0682 160.815 61.0504 160.648 61.0149C160.481 60.983 160.366 60.951 160.302 60.919L160.621 59.8111C160.927 59.8892 161.197 59.9176 161.431 59.8963C161.665 59.875 161.873 59.7702 162.054 59.582C162.239 59.3974 162.408 59.0973 162.56 58.6818L162.795 58.0426L159.769 49.8182H161.133L163.391 56.3381H163.477L165.735 49.8182H167.099L163.626 59.1932C163.469 59.6158 163.276 59.9656 163.045 60.2425C162.814 60.5231 162.546 60.7308 162.241 60.8658C161.939 61.0007 161.598 61.0682 161.218 61.0682ZM170.917 58.1918C170.398 58.1918 169.928 58.0941 169.505 57.8988C169.082 57.6999 168.747 57.4141 168.498 57.0412C168.25 56.6648 168.125 56.2102 168.125 55.6776C168.125 55.2088 168.218 54.8288 168.402 54.5376C168.587 54.2429 168.834 54.0121 169.143 53.8452C169.452 53.6783 169.793 53.554 170.166 53.4723C170.542 53.3871 170.92 53.3196 171.3 53.2699C171.797 53.206 172.2 53.158 172.509 53.1261C172.822 53.0906 173.049 53.032 173.191 52.9503C173.337 52.8686 173.41 52.7266 173.41 52.5241V52.4815C173.41 51.956 173.266 51.5476 172.978 51.2564C172.694 50.9652 172.263 50.8196 171.684 50.8196C171.084 50.8196 170.613 50.951 170.272 51.2138C169.931 51.4766 169.691 51.7571 169.553 52.0554L168.36 51.6293C168.573 51.1321 168.857 50.745 169.212 50.468C169.571 50.1875 169.961 49.9922 170.384 49.8821C170.81 49.7685 171.229 49.7116 171.641 49.7116C171.904 49.7116 172.206 49.7436 172.547 49.8075C172.891 49.8679 173.223 49.994 173.543 50.1857C173.866 50.3775 174.134 50.6669 174.347 51.054C174.56 51.4411 174.667 51.9595 174.667 52.6094V58H173.41V56.892H173.346C173.26 57.0696 173.118 57.2596 172.919 57.462C172.721 57.6644 172.456 57.8366 172.126 57.9787C171.796 58.1207 171.392 58.1918 170.917 58.1918ZM171.108 57.0625C171.606 57.0625 172.025 56.9648 172.366 56.7695C172.71 56.5742 172.969 56.3221 173.143 56.0131C173.321 55.7042 173.41 55.3793 173.41 55.0384V53.8878C173.356 53.9517 173.239 54.0103 173.058 54.0636C172.88 54.1133 172.674 54.1577 172.44 54.1967C172.209 54.2322 171.984 54.2642 171.764 54.2926C171.547 54.3175 171.371 54.3388 171.236 54.3565C170.91 54.3991 170.604 54.4684 170.32 54.5643C170.04 54.6566 169.812 54.7969 169.638 54.9851C169.468 55.1697 169.383 55.4219 169.383 55.7415C169.383 56.1783 169.544 56.5085 169.867 56.7322C170.194 56.9524 170.608 57.0625 171.108 57.0625ZM176.961 58V49.8182H178.176V51.0966H178.282C178.453 50.6598 178.728 50.3207 179.108 50.0792C179.488 49.8342 179.944 49.7116 180.477 49.7116C181.017 49.7116 181.466 49.8342 181.824 50.0792C182.187 50.3207 182.469 50.6598 182.671 51.0966H182.757C182.966 50.674 183.28 50.3384 183.699 50.0898C184.118 49.8377 184.621 49.7116 185.207 49.7116C185.938 49.7116 186.537 49.9407 187.002 50.3988C187.467 50.8533 187.7 51.5618 187.7 52.5241V58H186.443V52.5241C186.443 51.9205 186.278 51.489 185.947 51.2298C185.617 50.9705 185.228 50.8409 184.781 50.8409C184.205 50.8409 183.76 51.0149 183.444 51.3629C183.128 51.7074 182.97 52.1442 182.97 52.6733V58H181.691V52.3963C181.691 51.9311 181.54 51.5565 181.238 51.2724C180.937 50.9847 180.548 50.8409 180.072 50.8409C179.745 50.8409 179.44 50.9279 179.156 51.1019C178.875 51.2759 178.648 51.5174 178.474 51.8263C178.303 52.1317 178.218 52.4851 178.218 52.8864V58H176.961ZM192.406 58.1918C191.887 58.1918 191.417 58.0941 190.994 57.8988C190.572 57.6999 190.236 57.4141 189.988 57.0412C189.739 56.6648 189.615 56.2102 189.615 55.6776C189.615 55.2088 189.707 54.8288 189.892 54.5376C190.076 54.2429 190.323 54.0121 190.632 53.8452C190.941 53.6783 191.282 53.554 191.655 53.4723C192.031 53.3871 192.409 53.3196 192.789 53.2699C193.287 53.206 193.69 53.158 193.999 53.1261C194.311 53.0906 194.538 53.032 194.68 52.9503C194.826 52.8686 194.899 52.7266 194.899 52.5241V52.4815C194.899 51.956 194.755 51.5476 194.467 51.2564C194.183 50.9652 193.752 50.8196 193.173 50.8196C192.573 50.8196 192.102 50.951 191.761 51.2138C191.42 51.4766 191.181 51.7571 191.042 52.0554L189.849 51.6293C190.062 51.1321 190.346 50.745 190.701 50.468C191.06 50.1875 191.451 49.9922 191.873 49.8821C192.299 49.7685 192.718 49.7116 193.13 49.7116C193.393 49.7116 193.695 49.7436 194.036 49.8075C194.38 49.8679 194.712 49.994 195.032 50.1857C195.355 50.3775 195.623 50.6669 195.836 51.054C196.049 51.4411 196.156 51.9595 196.156 52.6094V58H194.899V56.892H194.835C194.75 57.0696 194.608 57.2596 194.409 57.462C194.21 57.6644 193.945 57.8366 193.615 57.9787C193.285 58.1207 192.882 58.1918 192.406 58.1918ZM192.598 57.0625C193.095 57.0625 193.514 56.9648 193.855 56.7695C194.199 56.5742 194.458 56.3221 194.632 56.0131C194.81 55.7042 194.899 55.3793 194.899 55.0384V53.8878C194.846 53.9517 194.728 54.0103 194.547 54.0636C194.37 54.1133 194.164 54.1577 193.929 54.1967C193.699 54.2322 193.473 54.2642 193.253 54.2926C193.036 54.3175 192.86 54.3388 192.725 54.3565C192.399 54.3991 192.093 54.4684 191.809 54.5643C191.529 54.6566 191.301 54.7969 191.127 54.9851C190.957 55.1697 190.872 55.4219 190.872 55.7415C190.872 56.1783 191.033 56.5085 191.357 56.7322C191.683 56.9524 192.097 57.0625 192.598 57.0625Z"
              fill="#FAFCFC"
            />
            <defs>
              <linearGradient
                id="paint0_linear_503_2"
                x1="10.0001"
                y1="9.99997"
                x2="31.4944"
                y2="31.9942"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2DC7ED" />
                <stop offset="1" stopColor="#538BF0" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_503_2"
                x1="10.0001"
                y1="9.99997"
                x2="31.4944"
                y2="31.9942"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2DC7ED" />
                <stop offset="1" stopColor="#538BF0" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_503_2"
                x1="206"
                y1="32"
                x2="188.532"
                y2="107.984"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2DC7ED" />
                <stop offset="1" stopColor="#538BF0" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_503_2"
                x1="206"
                y1="32"
                x2="188.532"
                y2="107.984"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2DC7ED" />
                <stop offset="1" stopColor="#538BF0" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
      <div className="bb-gray"></div>
      <footer id="contact" className="container py-6">
        <div className="grid-12 p-0 flex-center">
          <img src={logo} alt="" />
        </div>
        <div className="grid-12 p-0 pt-2 flex-center">
          <p>Rafael Yokoyama © 2022</p> <br />
        </div>
      </footer>
    </Container>
  );
};

export default Experience;
