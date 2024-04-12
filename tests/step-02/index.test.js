const readCSV = require('../../src/csvReader');

test('Read CSV File', async () => {
    const data = await readCSV('./sample.csv');
    expect(data.length).toBeGreaterThan(0);
    expect(data.length).toBe(5);
    expect(data[0].firstname).toBe('Kushal');
    expect(data[0].lastname).toBe('Bansal');
    expect(data[0].gender).toBe('Male');
});