import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import AboutUs from "./components/AboutUs.js";
import ContactUs from "./components/ContactUs.js";
import Error from "./components/Error.js";
import RestaurentBody from "./components/RestaurentBody.js";
import { useEffect, useState } from "react";
import userContext from "./utils/userContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js";

const AboutUs = lazy(() => import("./components/AboutUs.js"));

const AppLayOut = () => {
    const [userName, setUsername] = useState();

useEffect(() => {
  const data = {
    name: "Sai Durgesh",
  };
  setUsername(data.name);
}, []);
  return (
    <Provider store={appStore}>
    <userContext.Provider value={{ userLoggedIn: userName , setUsername }}>
      <div className="AppLayOut">
        <Header />
        <Outlet />
      </div>
    </userContext.Provider>
    </Provider>
  );
};
const root = ReactDom.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayOut />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/aboutus",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <AboutUs />
          </Suspense>
        ),
      },
      { path: "/contactus", element: <ContactUs /> },
      { path: "/restaurentBody/:resID", element: <RestaurentBody /> },
      { path: "/cart", element:<Cart/>}
    ],
    errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
