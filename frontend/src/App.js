import {useEffect} from "react";
const tg = window.Telegram.WebApp

function App() {

    useEffect(() => {
        tg.ready();
    })

    const onClose = () => {
        tg.close();
    }

  return (
    <div className="App">
      <button onClick={onClose}>Закрыть</button>
        {tg.initDataUnsafe?.user?.username}
    </div>
  );
}

export default App;
