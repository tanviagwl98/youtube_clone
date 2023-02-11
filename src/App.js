import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header.js";
import MainContainer from "./components/MainContainer";
import WatchVideo from "./components/WatchVideo";
import store from "./utils/store";

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>
      },

      {
        path:"watch",
        element:<WatchVideo/>
      }
    ]
  }
])
function App() {
  return (
    <Provider store={store}>
    <div>
    <Header />
    <RouterProvider router={appRouter}/>
  {/**

    Head
    Body
      Sidebar
        MenuList
      Main Container  
        ButtonList
        Video Card
          Video COntainer
**/}
     
    </div>
    </Provider>
  );
}

export default App;
