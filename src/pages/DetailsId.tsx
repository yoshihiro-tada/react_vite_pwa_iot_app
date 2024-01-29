import { Link } from "react-router-dom";

function DetailsId() {
  return (
    <>
      <h2 className="w-fit">担当機器()詳細<span className="block">detail</span></h2>
      <Link to={`/`} className="block text-blue-600 w-fit text-sm">TOPへ</Link>
    </>
  );
}

export default DetailsId;