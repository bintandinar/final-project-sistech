import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Navbar';
import CategoryList from './components/CategoryList';
import DetailCategory from './components/DetailCategory';
import DetailThread from './components/DetailThread';
import AddCategory from './components/AddCategory';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/Login`} element={<Login />} />
          <Route path={`/Navbar`} element={<Navbar />} />
          <Route path={`/CategoryList`} element={<CategoryList />} />
          <Route path={`/DetailCategory`} element={<DetailCategory />} />
          <Route path={`/DetailThread`} element={<DetailThread />} />
          <Route path={`/AddCategory`} element={<AddCategory />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App;
