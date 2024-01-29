import { Link } from "react-router-dom";

function Mypage() {
  return (
    <>
      <h2 className="w-fit">マイページ<span className="block">my page</span></h2>
      <div className="my-4">
        <div>氏名を変更する</div>
        <div className="flex">
          <input className="mr-2 border-gray-400 border-2 border-solid rounded-lg" type="text" placeholder="氏名"></input>
          <button className="text-white bg-blue-600 px-2 py-1 rounded-lg shadow-md">確定する</button>
        </div>
      </div>
      <div className="my-4">
        <Link to={`/details`} className="text-white bg-blue-600 px-2 py-1 rounded-lg shadow-md block my-2 w-fit">担当機器一覧へ</Link>
        <button className="text-white bg-blue-600 px-2 py-1 rounded-lg shadow-md block my-2">ログアウトする</button>
      </div>
    </>
  );
}

export default Mypage;