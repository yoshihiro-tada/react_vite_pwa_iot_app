import { Link } from "react-router-dom";

function Tutorial() {
  return (
    <>
      <h2 className="text-blue-600 bold w-fit mb-2">チュートリアル<span className="block bold text-sm text-center">tutorial</span></h2>
      <div className="mb-4">
        <h3 className="border-l-4 border-blue-600 pl-1 pt-1 pb-1 mb-1">氏名を登録しよう</h3>
        <p>※左詰め、フルネームでお願いいたします。</p>
      </div>
      <div className="mb-4">
        <h3 className="border-l-4 border-blue-600 pl-1 pt-1 pb-1 mb-1">機器の詳細を確認しよう</h3>
        <p>機械場マップから機器の一覧が確認できます。</p>
      </div>
      <Link to={`/`} className="block text-blue-600 w-fit text-sm">TOPへ</Link>
    </>
  );
}

export default Tutorial;