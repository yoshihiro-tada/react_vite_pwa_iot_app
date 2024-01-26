import { Link } from "react-router-dom";

function Details() {
  return (
    <>
      <div className="flex justify-between mb-2">
        機器詳細
      </div>
      <Link to={`/`}>TOPへ</Link>
    </>
  );
}

export default Details;