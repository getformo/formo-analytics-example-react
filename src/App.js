import "./App.css";
import { FormoAnalyticsProvider } from "@formo/analytics";
import MainPage from "./components/MainPage";

const WRITE_KEY = process.env.REACT_APP_FORMO_ANALYTICS_WRITE_KEY;

function App() {
  return (
    <FormoAnalyticsProvider writeKey={WRITE_KEY} options={{}}>
      <MainPage />
    </FormoAnalyticsProvider>
  );
}

export default App;
