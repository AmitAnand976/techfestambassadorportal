const Login = () => {
    const [activeTab, setActiveTab] = useState('');
 
    ()=>setActiveTab('Login')
     return (

    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Login
      </h2>
      
      <input placeholder="Email"></input>
      <input placeholder="Password"></input>
      <button type="submit">Login</button>
    </div>
  );
};

export default Login;

