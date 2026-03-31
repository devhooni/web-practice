import { useState, useRef, useEffect, createContext } from "react";
import "./App.css";

function App() {
  const firstRef = useRef();
  const aboutRef = useRef();
  const pfRef = useRef();
  const blogRef = useRef();
  const contactRef = useRef();

  return (
    <div className="container">
      <FirstPage
        aboutRef={aboutRef}
        pfRef={pfRef}
        blogRef={blogRef}
        contactRef={contactRef}
        refProp={firstRef}></FirstPage>
      <AboutPage refProp={aboutRef}>
        <AboutContent></AboutContent>
      </AboutPage>
      <PfPage refProp={pfRef}>
        <PfContent></PfContent>
      </PfPage>
      <BlogPage refProp={blogRef}>
        <BlogContent></BlogContent>
      </BlogPage>
      <ContactPage refProp={contactRef}>
        <ContactContent></ContactContent>
      </ContactPage>
    </div>
  );
}

function FirstPage({ aboutRef, pfRef, blogRef, contactRef, refProp }) {
  return (
    <>
      <div className="firstPage" ref={refProp}>
        <div className="btnBox">
          <Btn
            onClick={() =>
              aboutRef.current.scrollIntoView({ behavior: "smooth" })
            }>
            about me
          </Btn>
          <Btn
            onClick={() =>
              pfRef.current.scrollIntoView({ behavior: "smooth" })
            }>
            portfolios
          </Btn>
          <Btn
            onClick={() =>
              blogRef.current.scrollIntoView({ behavior: "smooth" })
            }>
            blog
          </Btn>
          <Btn
            onClick={() =>
              contactRef.current.scrollIntoView({ behavior: "smooth" })
            }>
            contact me
          </Btn>
        </div>
        <div className="firstPage-text-box">
          <div className="firstPage-introE">
            Hi.
            <br />
            I’m Oh Jihun, a <br />
            <a style={{ color: "orange", fontWeight: "bold" }}>FE</a> developer.
          </div>
          <div className="firstPage-introK" id="target">
            안녕하세요.
            <br />
            <a style={{ color: "orange", fontWeight: "bold" }}>
              프론트엔드
            </a>{" "}
            개발자 오지훈입니다.
          </div>
        </div>
      </div>
    </>
  );
}

function Btn({ children, onClick }) {
  return (
    <button className="firstPage-btn" onClick={onClick}>
      {children}
    </button>
  );
}

function AboutPage({ refProp, children }) {
  return (
    <>
      <div className="aboutPage" ref={refProp}>
        {children}
      </div>
    </>
  );
}

function PfPage({ refProp, children }) {
  return (
    <>
      <div className="pfPage" ref={refProp}>
        {children}
      </div>
    </>
  );
}

function BlogPage({ refProp, children }) {
  return (
    <>
      <div className="blogPage" ref={refProp}>
        {children}
      </div>
    </>
  );
}

function ContactPage({ refProp, children }) {
  return (
    <>
      <div className="contactPage" ref={refProp}>
        {children}
      </div>
    </>
  );
}

function AboutContent() {
  return (
    <>
      <div className="contentWrapper">
        <div className="contentBox">
          <div className="contentCategoryBox">
            <div className="goBtn clicked">about me</div>
            <div className="goBtn noneclicked">portfolios</div>
            <div className="goBtn noneclicked">blog</div>
            <div className="goBtn noneclicked">contact</div>
          </div>
          <div className="contentText"></div>
        </div>
      </div>
    </>
  );
}

function PfContent() {
  return (
    <>
      <div className="contentWrapper">
        <div className="contentBox">
          <div className="contentCategoryBox">
            <div className="goBtn noneclicked">about me</div>
            <div className="goBtn clicked">portfolios</div>
            <div className="goBtn noneclicked">blog</div>
            <div className="goBtn noneclicked">contact</div>
          </div>
          <div className="contentText"></div>
        </div>
      </div>
    </>
  );
}

function BlogContent() {
  return (
    <>
      <div className="contentWrapper">
        <div className="contentBox">
          <div className="contentCategoryBox">
            <div className="goBtn noneclicked">about me</div>
            <div className="goBtn noneclicked">portfolios</div>
            <div className="goBtn clicked">blog</div>
            <div className="goBtn noneclicked">contact</div>
          </div>
          <div className="contentText"></div>
        </div>
      </div>
    </>
  );
}

function ContactContent() {
  return (
    <>
      <div className="contentWrapper">
        <div className="contentBox">
          <div className="contentCategoryBox">
            <div className="goBtn noneclicked">about me</div>
            <div className="goBtn noneclicked">portfolios</div>
            <div className="goBtn noneclicked">blog</div>
            <div className="goBtn clicked">contact</div>
          </div>
          <div className="contentText"></div>
        </div>
      </div>
    </>
  );
}

export default App;
