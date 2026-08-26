import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function MainLayout() {
  return (
    <div>
      <Navbar />

      <main>
        <h1>Welcome to Library Management System</h1>
        <p>Manage your library efficiently and easily.</p>
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;