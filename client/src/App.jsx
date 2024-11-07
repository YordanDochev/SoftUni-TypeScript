import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ProjectsList from "./components/ProjectsList/ProjectsList";
import CalculatorList from "./components/CalculatorList/CalculatorList";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import Loading from "./components/Loaders/Loading";
import { useUser } from "./contexts/UserContext.jsx";
import Navigation from "./components/Navigation/Navigation";
import Certificate from "./components/Certificate/Certificate.jsx";
import Auth from "./components/Auth/Auth.jsx";

function App() {
  const { loading } = useUser();

  if (loading) return <Loading />;

  return (
    <>
      <div className="site bg-gray-100 h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/login" element={<Auth />} />
          <Route path="/users/register" element={<Auth />} />
          <Route path="/projects" element={<ProjectsList />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/calculator" element={<CalculatorList />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/:id/calculator" element={<CalculatorList />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
