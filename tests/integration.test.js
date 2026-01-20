describe('Simple Integration Test', () => {
  test('The sum works correctly', () => {
    const sum = (a, b) => a + b;
    expect(sum(2, 3)).toBe(5);
  });
});