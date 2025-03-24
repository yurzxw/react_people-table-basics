import './App.scss';
import { Navigation } from './components/Navigation/Navigation';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';
import { PeoplePage } from './components/PeoplePage/PeoplePage';
import { NotFoundPage } from './components/NotFoundPage/notFoundPage';

export const App = () => (
  <div data-cy="app">
    <Navigation />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/people" element={<PeoplePage />} />
      <Route path="/home" element={<Navigate to="/" replace={true} />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </div>
);
