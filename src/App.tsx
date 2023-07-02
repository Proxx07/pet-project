import { Routes, Route, Link } from "react-router-dom";
import {Suspense} from "react";
import {MainPageAsync} from "./pages/MainPage/MainLazy";
import {AboutPageAsync} from "./pages/AboutPage/AboutLazy";
import "./styles/index.scss";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";


const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to="/"> Главная </Link>
      <Link to="/about"> О сайте </Link>

      <button onClick={toggleTheme}>
        Toggle theme
      </button>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
              <Route path="/" element={<MainPageAsync />}/>
              <Route path="/about" element={<AboutPageAsync />}/>
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;