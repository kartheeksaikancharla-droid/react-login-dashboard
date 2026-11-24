import { useState } from 'react';

const DEMO_EMAIL = 'admin@gmail.com';
const DEMO_PASSWORD = '123456';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(() => localStorage.getItem('dashboardUser') || '');
  const [error, setError] = useState('');

  function handleLogin(e) {
    e.preventDefault();
    setError('');

    // Demo login credentials. Replace this with a secure backend for real users.
    if (email.trim().toLowerCase() === DEMO_EMAIL && password === DEMO_PASSWORD) {
      localStorage.setItem('dashboardUser', email.trim());
      setUser(email.trim());
    } else {
      setError('Invalid email or password. Please try again.');
    }
  }

  function handleLogout() {
    localStorage.removeItem('dashboardUser');
    setUser('');
    setEmail('');
    setPassword('');
    setError('');
  }

  if (user) {
    return (
      <main className="dashboard-page">
        <nav className="navbar">
          <div className="brand">MyDashboard</div>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </nav>
        <section className="welcome">
          <p className="eyebrow">OVERVIEW</p>
          <h1>Welcome to your dashboard!</h1>
          <p className="muted">You are successfully logged in as <strong>{user}</strong>.</p>
          <div className="cards">
            <article className="stat-card"><span>Total Projects</span><strong>12</strong><small>+2 this month</small></article>
            <article className="stat-card"><span>Tasks Completed</span><strong>28</strong><small>Great progress</small></article>
            <article className="stat-card"><span>Notifications</span><strong>5</strong><small>2 unread</small></article>
          </div>
          <article className="activity">
            <h2>Recent Activity</h2>
            <p>✓ You logged in successfully.</p>
            <p>✓ Your dashboard is ready to use.</p>
            <p>✓ You can log out using the button above.</p>
          </article>
        </section>
      </main>
    );
  }

  return (
    <main className="login-page">
      <section className="login-card">
        <div className="logo">M</div>
        <p className="eyebrow">WELCOME BACK</p>
        <h1>Login to your account</h1>
        <p className="muted">Enter your details to continue to the dashboard.</p>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email address</label>
          <input id="email" type="email" placeholder="admin@gmail.com"
            value={email} onChange={e => setEmail(e.target.value)} required />
          <label htmlFor="password">Password</label>
          <input id="password" type="password" placeholder="Enter your password"
            value={password} onChange={e => setPassword(e.target.value)} required />
          {error && <p className="error" role="alert">{error}</p>}
          <button className="login-btn" type="submit">Login</button>
        </form>
        <div className="demo">
          <strong>Demo credentials</strong>
          <span>Email: admin@gmail.com</span>
          <span>Password: 123456</span>
        </div>
      </section>
    </main>
  );
}