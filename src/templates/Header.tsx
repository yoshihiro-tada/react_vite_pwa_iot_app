import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="bg-blue-600">
        <div className="flex justify-between">
          <Link to={`/`} className="text-white">ロゴ</Link>
          <div>メニュー</div>
        </div>
        <div>
          <ul>
            <li><Link to={`/overview`} className="text-white">機械場マップ</Link></li>
            <li><Link to={`/details`} className="text-white">担当機器一覧</Link></li>
            <li><Link to={`/mypage`} className="text-white">マイページ</Link></li>
            <li><Link to={`/tutorial`} className="text-white">チュートリアル</Link></li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;