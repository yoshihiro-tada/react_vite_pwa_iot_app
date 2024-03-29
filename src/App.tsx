// templates
import Header from "./templates/Header"
import Footer from "./templates/Footer"
// pagesの内容がOutletのコンポーネントに子コンポーネントとして表示される
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main className="bg-gray-100 h-full">
        <div className="p-2 max-w-5xl my-o mx-auto w-full">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;