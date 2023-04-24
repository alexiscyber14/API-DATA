import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Details from './conponents/Details';

describe('Details', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue([
        {
          id: 1,
          name: 'Company A',
          rank: 1,
          year: 2022,
          revenue: 1000,
          profit: 100,
        },
      ]),
    });
  });

  afterEach(() => {
    global.fetch.mockRestore();
  });

  it('renders company details when data is fetched successfully', async () => {
    render(
      <Router>
        <Details />
      </Router>,
    );

    await waitFor(() => {
      const companyElements = screen.queryAllByText('Company A'); // Use queryAllByText to get an array of matching elements
      expect(companyElements).toHaveLength(2); // Assert that there are 2 matching elements
      expect(companyElements[0]).toBeInTheDocument(); // Assert against the first matching element
      expect(companyElements[1]).toBeInTheDocument(); // Assert against the second matching element
      expect(screen.getByText('Fortune 100 Rank:')).toBeInTheDocument();
      expect(screen.getByText('Year:')).toBeInTheDocument();
      expect(screen.getByText('Revenue:')).toBeInTheDocument();
      expect(screen.getByText('Profits:')).toBeInTheDocument();
    });
  });

  // Rest of the test cases remain the same
});
