import { Link } from "react-router-dom";

function Tutorial() {
  return (
    <>
      <div className="flex justify-between mb-2">
        チュートリアル
      </div>
      <Link to={`/`} className="block text-blue-600 w-fit text-sm">TOPへ</Link>
    </>
  );
}

export default Tutorial;