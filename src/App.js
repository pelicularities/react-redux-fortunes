import { Provider } from "react-redux";
import store from "./store";
import FortuneList from "./components/FortuneList";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <FortuneList />
      </div>
    </Provider>
  );
}

export default App;
