import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, plusCount } from "../store";

function Cart() {
  let a = useSelector((state) => {
    return state;
  });

  const data = a.data;
  const dispatch = useDispatch();
  console.log(data);

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>안녕</td>
            <td>안녕</td>
            <td>안녕</td>
          </tr>
        </tbody>
        <tbody>
          {data.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.count}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(plusCount(e.id));
                  }}>
                  버튼임
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <button
        onClick={() => {
          dispatch(changeName("hi"));
          console.log(a.user);
        }}>
        버튼임
      </button>
    </div>
  );
}

export default Cart;
