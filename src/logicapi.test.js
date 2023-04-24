const fetchCompanies = async () => {
  const response = await fetch('https://588fc30f7458d612002df0d2.mockapi.io/api/v1/companies');
  const companies = await response.json();
  return companies;
};

describe('fetchCompanies', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve([
        {
          id: 1,
          name: 'Chevron',
        },
      ]),
    }));
  });

  afterEach(() => {
    global.fetch.mockClear();
    delete global.fetch;
  });

  it('should fetch company from the fortune 100 api', async () => {
    const companies = await fetchCompanies();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      'https://588fc30f7458d612002df0d2.mockapi.io/api/v1/companies',
    );
    expect(companies).toBeDefined();
    expect(Array.isArray(companies)).toBe(true);
    expect(companies.length).toBeGreaterThan(0);
  });
});
