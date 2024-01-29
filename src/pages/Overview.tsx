import { Link } from "react-router-dom";

function Overview() {
  return (
    <>
      <h2 className="w-fit">機械場マップ<span className="block">overview</span></h2>
      <div className="bg-white border-gray-900 border-2 rounded-lg border-solid">
        <ul className="p-2">
          <li><Link to={`/`} className="block text-red-600 w-fit m-2">■</Link></li>
        </ul>
      </div>
    </>
  );
}

export default Overview;