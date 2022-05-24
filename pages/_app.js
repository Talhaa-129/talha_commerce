import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../stores";
import axios from "axios";

axios.defaults.baseURL = "https://shielded-wildwood-34672.herokuapp.com";
// axios.defaults.baseURL = "http://localhost:5000";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
