import request from 'supertest'
import {app} from "../index"

describe('POST /api/v1/user/signin', () => {
  it('responds with 200 and a success message if credentials are correct', (done) => {
    request(app)
      .post('/api/v1/user/signin')
      .send({ username: 'test1@email.com', password: '123454678' })
      .expect('Content-Type', /json/)
      .expect(200)
      .expect((res) => {
        // console.log(res)
        // const { data, message } = res.body;
        // if (message == 'Singin successfully!') {
        //   throw new Error('Invalid response');
        // }
      })
      .end(done);
  });

});
