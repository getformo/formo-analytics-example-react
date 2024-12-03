import './App.css';
import { FormoAnalyticsProvider } from '@formo/analytics';
import MainPage from './components/MainPage';

const API_KEY = process.env.REACT_APP_FORMO_ANALYTICS_API_KEY;
const PROJECT_ID = process.env.REACT_APP_FORMO_ANALYTICS_PROJECT_ID;

function App() {
  return (
    <FormoAnalyticsProvider apiKey={API_KEY} projectId={PROJECT_ID}>
      <MainPage />
    </FormoAnalyticsProvider>
  );
}

export default App;
