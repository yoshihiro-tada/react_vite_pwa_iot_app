import { Link } from "react-router-dom";

function Overview() {
  return (
    <>
      <div className="flex justify-between mb-2">
        機械場マップ
      </div>
      <Link to={`/`} className="block text-blue-600 w-fit text-sm mt-2">TOPへ</Link>
    </>
  );
}

export default Overview;