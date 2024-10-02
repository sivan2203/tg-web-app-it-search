import {useEffect} from "react";
const tg = window.Telegram.WebApp
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import MainPage from "./pages/Main";
import VacancyListPage from "./pages/VacancyListPage";
import VacancyPage from "./pages/VacancyPage";
import './App.css'

function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <VacancyListPage/>,
        },
        // {
        //     path: "vacancies",
        //     element: <VacancyListPage/>,
        // },
        {
            path: "vacancy/:id",
            element: <VacancyPage/>,
        },
    ]);

    useEffect(() => {
        tg.ready();
    })

    const onClose = () => {
        tg.close();
    }

  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
