const fetchCompany = async () => {
  const response = await fetch('https://588fc30f7458d612002df0d2.mockapi.io/api/v1/companies?filter=Chevron');
  const company = await response.json();
  return company;
};

describe('fetchCompany', () => {
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
    const company = await fetchCompany();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      'https://588fc30f7458d612002df0d2.mockapi.io/api/v1/companies?filter=Chevron',
    );
    expect(company).toBeDefined();
    expect(Array.isArray(company)).toBe(true);
    expect(company.length).toBe(1);
  });
});
