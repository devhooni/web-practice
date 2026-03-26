import { createContext, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Navbar,
  Container,
  Nav,
  Row,
  Col,
  Alert,
} from "react-bootstrap";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail.jsx";
import axios from "axios";
import Cart from "./routes/Cart.jsx";
import Test from "./routes/test.jsx";

export let Context1 = createContext();

function App() {
  let [shoes, setShoes] = useState(data);
  let [재고] = useState([10, 11, 12]);

  let navigate = useNavigate();
  const [btnclick, setBtnclick] = useState(0);

  localStorage.setItem("current", JSON.stringify([4]));

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">JH Company</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("");
              }}>
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("detail/0");
              }}>
              Detail
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("cart");
              }}>
              Cart
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <Container style={{ textAlign: "center", alignItems: "center" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  {shoes.map((item, i) => (
                    <Product
                      item={item}
                      i={i}
                      key={i}
                      onClick={() => {
                        navigate(`/detail/${i}`);
                      }}
                    />
                  ))}
                </div>
                <button
                  onClick={() => {
                    if (btnclick == 0) {
                      axios
                        .get("https://codingapple1.github.io/shop/data2.json")
                        .then((result) => {
                          setShoes([...shoes, ...result.data]);
                        })
                        .catch(() => {
                          console.log("실패함ㅅㄱ");
                        });
                    }
                    if (btnclick == 1) {
                      axios
                        .get("https://codingapple1.github.io/shop/data3.json")
                        .then((result) => {
                          setShoes([...shoes, ...result.data]);
                        })
                        .catch(() => {
                          console.log("실패함ㅅㄱ");
                        });
                    }
                    setBtnclick(btnclick + 1);
                  }}>
                  버튼
                </button>
              </Container>
            </>
          }></Route>
        <Route
          path="/detail/:id"
          element={
            <Context1.Provider value={{ 재고, shoes }}>
              <Detail shoes={shoes} />
            </Context1.Provider>
          }></Route>
        <Route
          path="*"
          element={
            <Alert
              variant="danger"
              onClose={() => {
                navigate("");
              }}
              dismissible>
              <Alert.Heading>404 not founded</Alert.Heading>
              <p>주소를 제대로 입력해주세요.</p>
            </Alert>
          }></Route>
        <Route
          path="/cart"
          element={
            <div>
              <Cart />
            </div>
          }
        />
        <Route
          path="/test"
          element={
            <>
              <Test />
            </>
          }
        />
      </Routes>
    </>
  );
}

function Product({ item, i, onClick }) {
  return (
    <div style={{ width: "400px", cursor: "pointer" }} onClick={onClick}>
      <Col>
        <img
          src={`https://codingapple1.github.io/shop/shoes${i + 1}.jpg`}
          style={{ width: "80%" }}
        />
        <h4>{item.title}</h4>
        <p>{item.price}</p>
      </Col>
    </div>
  );
}

export default App;
