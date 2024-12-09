import './App.css';
import { FormoAnalyticsProvider } from '@formo/analytics';
import MainPage from './components/MainPage';

const API_KEY = process.env.REACT_APP_FORMO_ANALYTICS_API_KEY;

function App() {
  return (
    <FormoAnalyticsProvider apiKey={API_KEY} options={{}}>
      <MainPage />
    </FormoAnalyticsProvider>
  );
}

export default App;
