const request = require('supertest');
const app = require('../index');

afterAll(async () => {
  const client = require('../db');
  await client.close();
});

describe('Class API Endpoints', () => {
  let createdClassId;

  it('should create a new class', async () => {
    const res = await request(app)
      .post('/api/classes')
      .send({ class_name: 'Math', class_description: 'Mathematics class' });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
    createdClassId = res.body.id;
  });

  it('should get all classes', async () => {
    const res = await request(app).get('/api/classes');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should get a class by ID', async () => {
    const res = await request(app).get(`/api/classes/${createdClassId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id', createdClassId);
  });

  it('should update a class', async () => {
    const res = await request(app)
      .put(`/api/classes/${createdClassId}`)
      .send({ class_name: 'Math Updated', class_description: 'Updated description' });
    expect(res.statusCode).toEqual(200);
    expect(res.body.class_name).toBe('Math Updated');
  });

  it('should delete a class', async () => {
    const res = await request(app).delete(`/api/classes/${createdClassId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Class deleted successfully');
  });

  it('should return 404 for non-existent class', async () => {
    const res = await request(app).get('/api/classes/999999');
    expect(res.statusCode).toEqual(404);
  });
});