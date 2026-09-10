import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

<button onClick={() => setCoins(100)} style={{position: 'fixed', top: 10, left: 10, zIndex: 9999, background: 'red', color: 'white', padding: '10px'}}>
  🧪 치트키: 코인 100개 채우기
</button>

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter basename={__BASE_PATH__}>
        <AppRoutes />
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
