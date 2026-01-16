import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import Bills from "./pages/Bills";
import Requests from "./pages/Requests";
import Approvals from "./pages/Approvals";
import Settings from "./pages/Settings";

function App() {

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Logged in user:", result.user.email);

      // later you can redirect to dashboard
      // navigate("/dashboard");

    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/bills" element={<Bills />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/approvals" element={<Approvals />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;


