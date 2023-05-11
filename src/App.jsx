import Client from "./Components/Client/Client";
import ClientContext from "./Components/ContextApi/ClientContext";

function App() {
  const [clientData, setClientData] = useState({});

  return (
    <ClientContext.Provider value={{ clientData, setClientData }}>
      {/* Your components go here */}
      <Client />
    </ClientContext.Provider>
  );
}
export default App;
