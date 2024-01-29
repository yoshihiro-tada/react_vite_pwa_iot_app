import { Link } from "react-router-dom";

function Details() {
  return (
    <>
      <h2 className="w-fit">担当機器一覧<span className="block">details</span></h2>
      <Link to={`/details/id`} className="block text-blue-600 w-fit text-sm mt-2">No.1(仮)へ</Link>
      <Link to={`/`} className="block text-blue-600 w-fit text-sm mt-2">TOPへ</Link>
    </>
  );
}

export default Details;