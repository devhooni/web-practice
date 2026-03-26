import { useParams } from "react-router-dom";
import data from "../data";
import { useContext, useEffect, useState } from "react";
import { Nav } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../store.jsx";

import { Context1 } from "../App.jsx";

function Detail(props) {
  let { 재고 } = useContext(Context1);

  const dispatch = useDispatch();

  let { id } = useParams();
  let good = data.find((data) => data.id === Number(id));
  let [탭, 탭변경] = useState(0);

  const [disappear, setDisappear] = useState(true);
  const [input, setInput] = useState("");

  var before = localStorage.getItem("arr");
  var after = JSON.parse(before);
  if (after[after.length - 1] != good.id) {
    after.push(good.id);
  }

  localStorage.setItem("arr", JSON.stringify(after));

  //useEffect는 html렌더링 후에 동작합니다. 그래서 시간 소요가 오래 걸리는 연산은 여기에 ㄱㄱ
  // //1. 어려운 연산 2. 서버에서 데이터 가져오는 작업 3. 타이머 장착
  useEffect(() => {
    if (input === "") {
      setDisappear(true);
      return;
    }
    if (/[0-9]/.test(input)) {
      setDisappear(true);
      return;
    }

    setDisappear(false);

    const timer = setTimeout(() => {
      setDisappear(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [input]);

  return (
    <div className="container">
      <div className="row">
        {!disappear && (
          <div className="alert alert-warning">숫자만 입력해 주세요.</div>
        )}

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${good.id + 1}.jpg`}
            style={{ width: "100%" }}
          />
        </div>

        <div className="col-md-6">
          <h4 className="pt-5">{good.title}</h4>
          <p>{good.content}</p>
          <p>{good.price}원</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              alert("주문이 완료돼었습니다. 장바구니 페이지로 이동해주세요.");
              dispatch(addItem({ id: 1, name: "Red Knit", count: 1 }));
            }}>
            주문하기
          </button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={() => 탭변경(0)}>
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={() => 탭변경(1)}>
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2" onClick={() => 탭변경(2)}>
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent shoes={props.shoes} 탭={탭} />
    </div>
  );
}

function TabContent(props) {
  let [fade, setFade] = useState("");
  useEffect(() => {
    let a = setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      clearTimeout(a);
      setFade("");
    };
  }, [props.탭]);

  return (
    <div className={`start ${fade}`}>
      {
        [
          <div>{props.shoes[0].title}</div>,
          <div>{props.shoes[1].title}</div>,
          <div>{props.shoes[2].title}</div>,
        ][props.탭]
      }
    </div>
  );
}
export default Detail;
