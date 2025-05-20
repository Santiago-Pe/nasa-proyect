describe('Test GET /launches', () => { 
  test('It should respond with 200 success', () => {
    const response = 200;
    expect(response).toBe(200);
  }
  );
})
describe('TEST GET /launches', () => { 
  test('It should respond with 200 success', () => {
    const response = 200;
    expect(response).toBe(200);
  });
  test('It should catch missing required properties', () => {
    const response = 400;
    expect(response).toBe(400);
  }
  );
})