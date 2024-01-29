import { Link } from "react-router-dom";

function Top() {
  return (
    <>
      <div className="flex justify-between mb-2">
        <div>ようこそゲストさん</div>
        <div>アイコン</div>
      </div>
      <h2 className="font-bold text-lg">担当機器</h2>
      <ul className="flex overflow-x-scroll pb-2">
        <li className="my-2 w-full max-w-xs mr-4 min-w-80">
          <Link to={`/details/id`}>
            <div className="bg-white rounded-lg p-2 shadow-md border-solid border-gray-200 border-1 box-border">
              <div className="text-sm">機器番号：</div>
              <div className="text-sm">稼働状況：</div>
            </div>
          </Link>
        </li>
        <li className="my-2 w-full max-w-xs mr-4 min-w-80">
          <Link to={`/details/id`}>
            <div className="bg-white rounded-lg p-2 shadow-md border-solid border-gray-200 border-1 box-border">
              <div className="text-sm">機器番号：</div>
              <div className="text-sm">稼働状況：</div>
            </div>
          </Link>
        </li>
        <li className="my-2 w-full max-w-xs mr-4 min-w-80">
          <Link to={`/details`} className="block text-blue-600 underline">
            もっと見る
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Top;