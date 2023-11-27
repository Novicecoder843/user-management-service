import request from 'supertest';
import app from '../src/app';

describe('User Routes', () => {
  it('should fetch users on GET /users', async () => {
    const response = await request(app).get('/api/users');
    expect(response.status).toBe(200);
    
  });

  it('should create a user on POST /users', async () => {
    const userData = {
      name: 'Test User',
      email: 'test@example.com',
      phoneNumber: '1234567890',
    };

    const response = await request(app).post('/api/users').send(userData);
    expect(response.status).toBe(201);
    
  });

  it('should update users on PATCH /users', async () => {
    const query = { phoneNumber: '1234567890' };
    const updatedData = { name: 'Updated User' };

    const response = await request(app)
      .patch('/api/users')
      .query(query)
      .send(updatedData);
    expect(response.status).toBe(200);
    
  });

  it('should delete users on DELETE /users', async () => {
    const query = { phoneNumber: '1234567890' };

    const response = await request(app).delete('/api/users').query(query);
    expect(response.status).toBe(204);
    
  });

  
});
