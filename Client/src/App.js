import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "./Routes/Routes";
import MainContext from "./Context/Context";

function App() {
  const router = createBrowserRouter(ROUTES);

  const contextData = {

  }
  
  return (
    <MainContext.Provider value={contextData} >
      <RouterProvider router={router} />
    </MainContext.Provider>
  );
}

export default App;
