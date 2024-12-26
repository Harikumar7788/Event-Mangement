const Login = () => (
    <section className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <form className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border-gray-300 rounded shadow-sm focus:ring-primary focus:border-primary"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full border-gray-300 rounded shadow-sm focus:ring-primary focus:border-primary"
          />
        </div>
        <button className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-blue-700">
          Log In
        </button>
      </form>
    </section>
  );
  
  export default Login;
  