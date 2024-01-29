import { Link } from "react-router-dom";

function Mypage() {
  return (
    <>
      <div className="flex justify-between mb-2">
        マイページ
      </div>
      <Link to={`/`} className="block text-blue-600 w-fit text-sm">TOPへ</Link>
    </>
  );
}

export default Mypage;