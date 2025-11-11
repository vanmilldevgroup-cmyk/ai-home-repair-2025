import { Routes, Route } from 'react-router-dom';
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import NewRepairRequestScreen from './screens/NewRepairRequestScreen';
import AvailableContractorsScreen from './screens/AvailableContractorsScreen';
import QuotesScreen from './screens/QuotesScreen';
import MyBookingsScreen from './screens/MyBookingsScreen';
import SettingsScreen from './screens/SettingsScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<OnboardingScreen />} />
      <Route path="/login" element={<LoginScreen />} />

      {/* Protected Routes */}
      <Route path="" element={<PrivateRoute />}>
        <Route path="/dashboard" element={<DashboardScreen />} />
        <Route path="/new-request" element={<NewRepairRequestScreen />} />
        <Route path="/contractors" element={<AvailableContractorsScreen />} />
        <Route path="/quotes" element={<QuotesScreen />} />
        <Route path="/bookings" element={<MyBookingsScreen />} />
        <Route path="/settings" element={<SettingsScreen />} />
        <Route path="/checkout" element={<CheckoutScreen />} />
        <Route path="/notifications" element={<NotificationsScreen />} />
      </Route>
    </Routes>
  );
}

export default App;
