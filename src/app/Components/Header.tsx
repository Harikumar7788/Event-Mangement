// src/app/Components/Header.tsx
const Header = () => (
    <header className="bg-primary text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Eventify</h1>
        <nav className="space-x-6">
          <a href="/" className="hover:text-accent">Home</a>
          <a href="/events" className="hover:text-accent">Events</a>
          <a href="/login" className="hover:text-accent">Login</a>
          <a href="/register" className="hover:text-accent">Register</a>
        </nav>
      </div>
    </header>
  );
  
  export default Header;
  