import { Link } from 'react-router'

function Navbar() {
  return (
    <header>
      <h2>Library Management System</h2>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  )
}

export default Navbar