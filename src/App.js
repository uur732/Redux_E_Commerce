import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Detail from './pages/Detail';
import PageContainer from "./containers/PageContainer";
import { useSelector } from "react-redux";
import Card from './components/Card';


function App() {
  const { drawer } = useSelector(state => state.drawer);

  console.log(drawer);
  return (
    <div>
      <PageContainer>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="detail/:id" element={<Detail />} />
          </Routes>
          {drawer && <Card />}
        </BrowserRouter>
      </PageContainer>
    </div>
  );
}

export default App;
