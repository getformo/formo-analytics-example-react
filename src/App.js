import "./App.css";
import { FormoAnalyticsProvider } from "@formo/analytics";
import MainPage from "./components/MainPage";

const WRITE_KEY = process.env.REACT_APP_FORMO_ANALYTICS_WRITE_KEY;

function App() {
  return (
    <FormoAnalyticsProvider
      writeKey={WRITE_KEY}
      options={{
        logger: {
          enabled: true,
          levels: ["debug", "info", "error"],
        },
      }}
    >
      <MainPage />
    </FormoAnalyticsProvider>
  );
}

export default App;
