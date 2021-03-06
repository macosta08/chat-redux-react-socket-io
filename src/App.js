import { Provider } from "react-redux";
import "./App.css";
import { AppRouter } from "./routers/AppRouter";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <AppRouter />
        </header>
      </div>
    </Provider>
  );
}

export default App;
