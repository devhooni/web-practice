import { useRef, createContext, useContext, useState } from "react";
import "./App.css";

/* 🔥 Context 생성 */
const RefContext = createContext();

function App() {
  const firstRef = useRef();
  const aboutRef = useRef();
  const pfRef = useRef();
  const blogRef = useRef();
  const contactRef = useRef();

  const refs = {
    aboutRef,
    pfRef,
    blogRef,
    contactRef,
  };

  return (
    <RefContext.Provider value={refs}>
      <div className="container">
        <FirstPage
          aboutRef={aboutRef}
          pfRef={pfRef}
          blogRef={blogRef}
          contactRef={contactRef}
          refProp={firstRef}
        />

        <AboutPage refProp={aboutRef}>
          <AboutContent />
        </AboutPage>

        <PfPage refProp={pfRef}>
          <PfContent />
        </PfPage>

        <BlogPage refProp={blogRef}>
          <BlogContent />
        </BlogPage>

        <ContactPage refProp={contactRef}>
          <ContactContent />
        </ContactPage>
      </div>
    </RefContext.Provider>
  );
}

/* ---------- First Page ---------- */
function FirstPage({ aboutRef, pfRef, blogRef, contactRef, refProp }) {
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
          onClick={() => pfRef.current.scrollIntoView({ behavior: "smooth" })}>
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

function ContactPage({ refProp, children }) {
  return (
    <div className="contactPage" ref={refProp}>
      {children}
    </div>
  );
}

/* ---------- Content들 ---------- */

function AboutContent() {
  const { aboutRef, pfRef, blogRef, contactRef } = useContext(RefContext);

  return (
    <ContentLayout
      active="aboutRef"
      aboutRef={aboutRef}
      pfRef={pfRef}
      blogRef={blogRef}
      contactRef={contactRef}
    />
  );
}

function PfContent() {
  const { aboutRef, pfRef, blogRef, contactRef } = useContext(RefContext);

  return (
    <ContentLayout
      active="pfRef"
      aboutRef={aboutRef}
      pfRef={pfRef}
      blogRef={blogRef}
      contactRef={contactRef}
    />
  );
}

function BlogContent() {
  const { aboutRef, pfRef, blogRef, contactRef } = useContext(RefContext);

  return (
    <ContentLayout
      active="blogRef"
      aboutRef={aboutRef}
      pfRef={pfRef}
      blogRef={blogRef}
      contactRef={contactRef}
    />
  );
}

function ContactContent() {
  const { aboutRef, pfRef, blogRef, contactRef } = useContext(RefContext);

  return (
    <ContentLayout
      active="contactRef"
      aboutRef={aboutRef}
      pfRef={pfRef}
      blogRef={blogRef}
      contactRef={contactRef}
    />
  );
}

/* ---------- 공통 Content ---------- */
function ContentLayout({ active, aboutRef, pfRef, blogRef, contactRef }) {
  const [shake, setShake] = useState(false);

  const handleClick = (ref, key) => {
    if (active === key) {
      // 🔥 같은 페이지 → 흔들기
      setShake(true);
      setTimeout(() => setShake(false), 400);
    } else {
      // 🔥 다른 페이지 → 이동만
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
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
            className={`goBtn ${active === "pfRef" ? "clicked" : "noneclicked"}`}
            onClick={() => handleClick(pfRef, "pfRef")}>
            portfolios
          </div>

          <div
            className={`goBtn ${active === "blogRef" ? "clicked" : "noneclicked"}`}
            onClick={() => handleClick(blogRef, "blogRef")}>
            blog
          </div>

          <div
            className={`goBtn ${active === "contactRef" ? "clicked" : "noneclicked"}`}
            onClick={() => handleClick(contactRef, "contactRef")}>
            contact
          </div>
        </div>

        <div className="contentText"></div>
      </div>
    </div>
  );
}

export default App;
