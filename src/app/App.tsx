import { Routes, Route, Link } from "react-router-dom";
import {Suspense} from "react";

import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";

import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import "./styles/index.scss";


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
              <Route path="/" element={<MainPage />}/>
              <Route path="/about" element={<AboutPage />}/>
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;