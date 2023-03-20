import Issuer from "../pages/issuer/Dashboard";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { rest } from "msw";
import axios from "axios";
import { MemoryRouter } from "react-router-dom";
import Table from "../components/Table/Table";
import apiGetCall from "../globals/apiGetCall";

describe("Watch List page", () => {
  test("apicall", async () => {
    const logSpy = jest.spyOn(console, "log");
    const data = await apiGetCall(
      "api/Issuer/GetWatchLists?userId=e321affa-1857-46c6-81e2-20dd13254c84"
    )
      .then((res) => {
        expect(logSpy).toHaveBeenCalledWith("api response", res);
        //console.log(res);
      })
      .catch((e) => {
        expect(logSpy).toHaveBeenCalledWith("api response", e);
      });
  });
  test("Issuer Ui ", () => {
    render(
      <MemoryRouter>
        <Issuer />
      </MemoryRouter>
    );
    const Homebtn = screen.getByRole("tab", {
      name: /home/i,
    });
    expect(Homebtn).toBeInTheDocument();
    const Userbtn = screen.getByRole("tab", {
      name: /user review/i,
    });
    expect(Userbtn).toBeInTheDocument();
    const System = screen.getByRole("tab", {
      name: /user review/i,
    });
    expect(System).toBeInTheDocument();
    const Issuerheading = screen.getByRole("heading", {
      name: /issuer/i,
    });
    expect(Issuerheading).toBeInTheDocument();

    const ElimateChangeheading = screen.getByRole("heading", {
      name: /eliminate changes/i,
    });
    expect(ElimateChangeheading).toBeInTheDocument();
    const savedSearch = screen.getByRole("heading", {
      name: /saved search/i,
    });
    expect(savedSearch).toBeInTheDocument();
  });

  test("renders table with data", async () => {
    render(
      <MemoryRouter>
        <Table />
      </MemoryRouter>
    );
    const data = [
      {
        id: 1,
        name: "Watchlist 1",
        createdBy: "John Doe",
        lastModified: "2022-03-15T18:23:45.123Z",
        showDelete: true,
      },
      {
        id: 2,
        name: "Watchlist 2",
        createdBy: "Jane Smith",
        lastModified: "2022-03-16T09:12:34.567Z",
        showDelete: false,
      },
    ];
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });

    render(<Table data={data} onclick={() => {}} />);

    expect(await screen.findByText("NAME")).toBeInTheDocument();
    expect(await screen.findByText("CREATED BY")).toBeInTheDocument();
    expect(await screen.findByText("LAST MODIFIED")).toBeInTheDocument();
    expect(await screen.findByText("Watchlist 1")).toBeInTheDocument();
    expect(await screen.findByText("John Doe")).toBeInTheDocument();
    expect(await screen.findByText("15 Mar, 2022")).toBeInTheDocument();
    expect(screen.queryByText("Watchlist 2")).toBeInTheDocument();
    expect(screen.queryByText("Jane Smith")).toBeInTheDocument();

    global.fetch.mockRestore();
  });
});
