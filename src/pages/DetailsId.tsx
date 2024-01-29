import { Link } from "react-router-dom";

function DetailsId() {
  return (
    <>
      <div className="flex justify-between mb-2">
        担当機器詳細
      </div>
      <Link to={`/`} className="block text-blue-600 underline">TOPへ</Link>
    </>
  );
}

export default DetailsId;