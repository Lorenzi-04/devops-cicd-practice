const request = require('supertest');
const { app } = require('./app');

describe('API Endpoints', () => {
  test('GET / - debe devolver mensaje Hola Mundo', async () => {
    const response = await request(app).get('/');
    
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Hola Mundo!');
    expect(response.body.version).toBe('1.0.0');
    expect(response.body.timestamp).toBeDefined();
  });

  test('GET /health - debe devolver status OK', async () => {
    const response = await request(app).get('/health');
    
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('OK');
    expect(response.body.message).toBe('Aplicación funcionando correctamente');
  });

  test('GET /ruta-inexistente - debe devolver 404', async () => {
    const response = await request(app).get('/ruta-inexistente');
    expect(response.statusCode).toBe(404);
  });
});
