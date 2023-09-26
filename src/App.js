import React from "react";
import GlobalStyle from "./Styles";
import styled from "styled-components";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Leistungen from "./components/Leistungen/Leistungen";
import Vermittlung from "./components/Vermittlung/Vermittlung";
import Workshop from "./components/Workshop/Workshop";
import Beratung from "./components/Beratung/Beratung";
import FAQ from "./components/FAQ/FAQ";
import Kontakt from "./components//Kontakt/Kontakt";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Impressum from "./pages/Impressum";
import Datenschutzerklärung from "./pages/Datenschutzerklärung";
import ErrorPage from "./pages/ErrorPage";

export function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
    },
    {
      path: "Impressum",
      element: <Impressum />,
    },
    { path: "datenschutzerklärung", element: <Datenschutzerklärung /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

const Root = () => {
  return (
    <>
      <div>
        <GlobalStyle />
        <NavBar />
        <Wrapper>
          <Home />
          <AboutUs />
          <Leistungen />
          <Vermittlung />
          {/* <Workshop /> */}
          <Beratung />
          <FAQ />
          <Kontakt />
        </Wrapper>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;
