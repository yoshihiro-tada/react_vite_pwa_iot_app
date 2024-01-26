import { Link } from "react-router-dom";

function Top() {
  return (
    <>
      <div className="flex justify-between mb-2">
        <div>ようこそゲストさん</div>
        <div>アイコン</div>
      </div>
      <h2 className="font-bold text-lg">担当機器</h2>
      <div className="bg-white rounded-lg p-2 shadow-md border-solid border-gray-400 margin-top: 0.5rem;
margin-bottom: 0.5rem;">
        <div className="text-sm">機器番号：</div>
        <div className="text-sm">稼働状況：</div>
      </div>
      <Link to={`/details`}>詳細へ</Link>
    </>
  );
}

export default Top;