import { callMsGraph } from "../globals/graph";
import { graphConfig } from "../globals/authConfig";

describe("callMsGraph", () => {
  beforeAll(() => {
    global.fetch = jest.fn();
  });

  test("returns user information when given a valid access token", async () => {
    // Set up mock data
    const mockAccessToken = "kalyan";
    const mockResponse = { id: "1", displayName: "kalyan" };
    const mockJsonPromise = Promise.resolve(mockResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    global.fetch.mockImplementation(() => mockFetchPromise);

    // Call the function with mock data
    const result = await callMsGraph(mockAccessToken);

    // Expectations
    expect(global.fetch).toHaveBeenCalledWith(graphConfig.graphMeEndpoint, {
      method: "GET",
      headers: new Headers({ Authorization: `Bearer ${mockAccessToken}` }),
    });

    expect(result).toEqual(mockResponse);
  });

  test("returns an error message when fetch fails", async () => {
    // Set up mock data
    const mockAccessToken = "kalyan";
    const mockError = new Error("Fetch failed");
    global.fetch.mockImplementation(() => Promise.reject(mockError));
    console.log = jest.fn();

    // Call the function with mock data
    const result = await callMsGraph(mockAccessToken);

    // Expectations
    expect(global.fetch).toHaveBeenCalledWith(graphConfig.graphMeEndpoint, {
      method: "GET",
      headers: new Headers({ authorization: `Bearer ${mockAccessToken}` }), // use lowercase for header name
    });
    expect(result).toBeUndefined();
    expect(console.log).toHaveBeenCalledWith(mockError);
  });
});
