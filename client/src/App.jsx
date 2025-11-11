import { Routes, Route } from 'react-router-dom';
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';

function App() {
  return (
    <Routes>
      <Route path="/" element={<OnboardingScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/dashboard" element={<DashboardScreen />} />
    </Routes>
  );
}

export default App;
