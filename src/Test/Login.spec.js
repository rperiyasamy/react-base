import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Login from "../pages/auth/Login";

test("Welcome UI", () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );
  const welcomeMessage = screen.getByText(/Welcome back!!!/);
  expect(welcomeMessage).toBeInTheDocument();
});

test('"SignIn" heading', () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );
  screen.logTestingPlaygroundURL();
  const heading = screen.getByRole("heading", { name: "SignIn" });
  expect(heading).toBeInTheDocument();
});

// test('"Login" button', () => {
//   render(
//     <MemoryRouter>
//       <Login />
//     </MemoryRouter>
//   );
//   const button = screen.getByRole("link", { name: "Login" });
//   expect(button).toBeInTheDocument();
// });

test("Home button", () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );
  const Home = screen.getByRole("link", { name: "Home" });
  expect(Home).toBeInTheDocument();
});

test("About the page", () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );
  const About = screen.getByText(
    /oneascent elevate uses your office 365 active directory credentials\. please click the login button\./i
  );
  expect(About).toBeInTheDocument();
});

test("Baner", () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );
  const Banner = screen.getByRole("img", { name: /one ascent/i });
  expect(Banner).toBeInTheDocument();
});

test("Login Navigate",()=>{
  
})