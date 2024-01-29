import { Link } from "react-router-dom";

function Mypage() {
  return (
    <>
      <div className="flex justify-between mb-2">
        マイページ
      </div>
      <Link to={`/`} className="block text-blue-600 underline">TOPへ</Link>
    </>
  );
}

export default Mypage;