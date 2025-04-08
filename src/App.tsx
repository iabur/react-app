import { useEffect } from "react";

function App() {
  const connect = () => console.log("connecting to server");
  const disconnect = () => console.log("disconnecting from server");
  useEffect(() => {
    connect();
    // Cleanup function to disconnect from the server
    // when the component unmounts
    // or when the dependencies change
    // This is important to prevent memory leaks
    // and to ensure that the connection is closed properly

    return () => disconnect();
  }, []);

  return <div>Chat server</div>;
}

export default App;
