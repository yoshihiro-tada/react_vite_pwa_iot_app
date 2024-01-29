import { Link } from "react-router-dom";

function Tutorial() {
  return (
    <>
      <h2 className="text-blue-600 bold w-fit mb-2">チュートリアル<span className="block bold text-sm text-center">tutorial</span></h2>
      <div className="mb-4">
        <h3 className="border-l-4 border-blue-600 pl-1 pt-1 pb-1 mb-1">氏名を登録しよう</h3>
        <p>※左詰め、フルネームでお願いいたします。</p>
        <div className="my-4">
          <div>氏名を登録する</div>
          <div className="flex">
            <input className="mr-2 border-gray-400 border-2 border-solid rounded-lg" type="text" placeholder="氏名"></input>
            <button className="text-white bg-blue-600 px-2 py-1 rounded-lg shadow-md">確定する</button>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="border-l-4 border-blue-600 pl-1 pt-1 pb-1 mb-1">機器の詳細を確認しよう</h3>
        <p>機械場マップから機器の一覧が確認できます。</p>
        <Link to={`/overview`} className="block text-blue-600 w-fit text-sm">機械場マップへ</Link>
      </div>
      <Link to={`/`} className="block text-blue-600 w-fit text-sm">TOPへ</Link>
    </>
  );
}

export default Tutorial;