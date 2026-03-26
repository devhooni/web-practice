import { useState } from "react";

export default function test() {
  const [like, setLike] = useState(0);
  function addLike() {
    setLike(like + 1);
  }
  return (
    <>
      {like}
      <button
        onClick={() => {
          addLike();
        }}>
        ❤
      </button>
    </>
  );
}
