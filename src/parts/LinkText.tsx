import { Link } from "react-router-dom";

function LinkText() {
  return (
    <>
      <Link to={`/details`} className="block text-blue-600 border-b-2 border-blue-600 w-fit text-sm mt-2">
        もっと見る
      </Link>
    </>
  );
}

export default LinkText;