import { render, screen } from '@testing-library/react';
import axios from 'axios';
import App from '../App';
import { fetchData } from '../App'
import mockNewsData from '../mockNewsData.json'

jest.mock('axios')

describe('App tests', () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<App />);
  });

  test('should render the headlines component', () => {
    // eslint-disable-next-line testing-library/no-node-access
    expect(document.querySelector(".headlines")).toBeTruthy();
  });
});

describe('API tests', () => {

  afterEach(() => {
    jest.clearAllMocks();
  })

  test('should call axios and return a response', async () => {
    await axios.get.mockImplementation(() => Promise.resolve(mockNewsData.response.results));
    await expect(fetchData()).resolves.toEqual(mockNewsData.response.results);
    await expect(axios.get).toHaveBeenCalledTimes(1);
  });

  test('should receive error if no data is returned from the API', async () => {
    const errorMessage = 'No data received from the server';

    await axios.get.mockImplementation(() => Promise.reject(new Error(errorMessage)));
    await expect(fetchData()).rejects.toThrow(errorMessage);
  });
})
