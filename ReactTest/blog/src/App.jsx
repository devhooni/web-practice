import { useRef, createContext, useContext, useState, useEffect } from "react";
import "./App.css";

const RefContext = createContext();

function App() {
  const firstRef = useRef();
  const aboutRef = useRef();
  const skillRef = useRef();
  const pfRef = useRef();
  const blogRef = useRef();

  const refs = {
    aboutRef,
    skillRef,
    pfRef,
    blogRef,
  };

  return (
    <RefContext.Provider value={refs}>
      <div className="container">
        <FirstPage
          aboutRef={aboutRef}
          skillRef={skillRef}
          pfRef={pfRef}
          blogRef={blogRef}
          refProp={firstRef}
        />

        <AboutPage refProp={aboutRef}>
          <AboutContent />
        </AboutPage>

        <SkillPage refProp={skillRef}>
          <SkillContent />
        </SkillPage>

        <PfPage refProp={pfRef}>
          <PfContent />
        </PfPage>

        <BlogPage refProp={blogRef}>
          <BlogContent />
        </BlogPage>
      </div>
    </RefContext.Provider>
  );
}

/* ---------- First Page ---------- */
function FirstPage({ aboutRef, skillRef, pfRef, blogRef, refProp }) {
  return (
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
            skillRef.current.scrollIntoView({ behavior: "smooth" })
          }>
          skills
        </Btn>
        <Btn
          onClick={() => pfRef.current.scrollIntoView({ behavior: "smooth" })}>
          portfolios
        </Btn>
        <Btn
          onClick={() =>
            blogRef.current.scrollIntoView({ behavior: "smooth" })
          }>
          blog
        </Btn>
      </div>

      <div className="firstPage-text-box">
        <div className="firstPage-introE">
          Hi.
          <br />
          I’m Oh Jihun, a <br />
          <span style={{ color: "orange", fontWeight: "bold" }}>FE</span>{" "}
          developer.
        </div>

        <div className="firstPage-introK">
          안녕하세요.
          <br />
          <span style={{ color: "orange", fontWeight: "bold" }}>
            프론트엔드
          </span>{" "}
          개발자 오지훈입니다.
        </div>
      </div>
    </div>
  );
}

function Btn({ children, onClick }) {
  return (
    <button className="firstPage-btn" onClick={onClick}>
      {children}
    </button>
  );
}

/* ---------- Pages ---------- */
function AboutPage({ refProp, children }) {
  return (
    <div className="aboutPage" ref={refProp}>
      {children}
    </div>
  );
}

function SkillPage({ refProp, children }) {
  return (
    <div className="skillPage" ref={refProp}>
      {children}
    </div>
  );
}

function PfPage({ refProp, children }) {
  return (
    <div className="pfPage" ref={refProp}>
      {children}
    </div>
  );
}

function BlogPage({ refProp, children }) {
  return (
    <div className="blogPage" ref={refProp}>
      {children}
    </div>
  );
}

/* ---------- Content들 ---------- */

function AboutContent() {
  const { aboutRef, pfRef, blogRef, skillRef } = useContext(RefContext);

  return (
    <ContentLayout
      active="aboutRef"
      aboutRef={aboutRef}
      pfRef={pfRef}
      blogRef={blogRef}
      skillRef={skillRef}
    />
  );
}

function PfContent() {
  const { aboutRef, pfRef, blogRef, skillRef } = useContext(RefContext);

  return (
    <ContentLayout
      active="pfRef"
      aboutRef={aboutRef}
      pfRef={pfRef}
      blogRef={blogRef}
      skillRef={skillRef}
    />
  );
}

function BlogContent() {
  const { aboutRef, pfRef, blogRef, skillRef } = useContext(RefContext);

  return (
    <ContentLayout
      active="blogRef"
      aboutRef={aboutRef}
      pfRef={pfRef}
      blogRef={blogRef}
      skillRef={skillRef}
    />
  );
}

function SkillContent() {
  const { aboutRef, pfRef, blogRef, skillRef } = useContext(RefContext);

  return (
    <ContentLayout
      active="skillRef"
      aboutRef={aboutRef}
      pfRef={pfRef}
      blogRef={blogRef}
      skillRef={skillRef}
    />
  );
}

/* ---------- 공통 Content ---------- */
function ContentLayout({ active, aboutRef, pfRef, blogRef, skillRef }) {
  const [shake, setShake] = useState(false);

  const handleClick = (ref, key) => {
    if (active === key) {
      setShake(true);
      setTimeout(() => setShake(false), 400);
    } else {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const contentMap = {
    aboutRef: <AboutDetail />,
    skillRef: <SkillDetail />,
    pfRef: <PfDetail />,
    blogRef: <BlogDetail />,
  };

  return (
    <div className="contentWrapper">
      <div className={`contentBox ${shake ? "shake" : ""}`}>
        <div className="contentCategoryBox">
          <div
            className={`goBtn ${active === "aboutRef" ? "clicked" : "noneclicked"}`}
            onClick={() => handleClick(aboutRef, "aboutRef")}>
            about me
          </div>

          <div
            className={`goBtn ${active === "skillRef" ? "clicked" : "noneclicked"}`}
            onClick={() => handleClick(skillRef, "skillRef")}>
            skills
          </div>

          <div
            className={`goBtn ${active === "pfRef" ? "clicked" : "noneclicked"}`}
            onClick={() => handleClick(pfRef, "pfRef")}>
            portfolios
          </div>

          <div
            className={`goBtn ${active === "blogRef" ? "clicked" : "noneclicked"}`}
            onClick={() => handleClick(blogRef, "blogRef")}>
            blog
          </div>
        </div>
        <div className="contentText">{contentMap[active]}</div>
      </div>
    </div>
  );
}

function AboutDetail() {
  return (
    <>
      <div className="about-left">
        <img src="avatar.svg" style={{ width: "240px", marginLeft: "20px" }} />
        <p style={{ fontSize: "40px", marginTop: "20px" }}>OH JI HUN 오지훈</p>
        <p style={{ fontSize: "24px" }}>Hongik University, Seoul</p>
        <div className="linkbox1">
          <div className="linkbox2">
            <img src="github.svg" style={{ width: "40px" }} />
            <p style={{ fontSize: "32px" }}>@devhooni</p>
          </div>
          <img src="link.svg" style={{ width: "40px" }} />
        </div>
        <div className="linkbox3">
          <div className="linkbox2">
            <img src="email.svg" style={{ width: "40px" }} />
            <p style={{ fontSize: "32px" }}>mail@mail.com</p>
          </div>
          <img src="link.svg" style={{ width: "40px" }} />
        </div>
      </div>
      <div className="about-right">
        <div className="about-box">
          <div className="about-title">안녕하세요, 개발자 오지훈입니다 😎</div>
          <div className="about-text">
            현재 홍익대학교에 재학중이며, 프론트엔드 개발을 공부하고 있습니다.
            <br /> IT, 사회, 경제에 관심이 있고 혼자서 생각하는 것을 좋아합니다.
          </div>
        </div>
        <div className="about-box">
          <div className="about-title">Skills</div>
          <div className="about-text">html js react</div>
        </div>
        <div className="about-box">
          <div className="about-title">목표/공부 방향</div>
          <div className="about-text">
            현재 React 심화와 Typescript, Next.js를 학습중입니다.
            <br /> 향후 백엔드와 AI도 학습하여 풀스택 개발자가 되는 것이
            목표입니다.
          </div>
        </div>
        <div className="about-box">
          <div className="about-title">Timelines</div>
          <div className="about-text">
            KDMHS WP (2023.03~2026.01)
            <br /> Deplois, inc. (2026.03~)
            <br /> Hongik University (2026.03~)
            <br /> GDG on Campus Hongik University (2026.03~)
          </div>
        </div>
      </div>
    </>
  );
}

function SkillDetail() {
  return <></>;
}
function PfDetail() {
  return <></>;
}
function BlogDetail() {
  return <></>;
}

export default App;
