import chai from "chai"
import chaiHttp from "chai-http"
import app from "../index.js"

chai.should();

chai.use(chaiHttp);

// test blog apis

describe('Testing blog', () => {
    it('test get all blogs', (done) => {
      chai
        .request(app)
        .get('/blogs')
        .end((err, res) => {
          chai.expect(res.statusCode).to.equal(200);
        });
      done();
    });
  it('it should delete a blog', () => {

  })

    it('test get one article', (done) => {
      chai
        .request(app)
        .get('/blogs/62334e6cf88b7155585f9df6')
        .end((err, res) => {
          chai.expect(res.statusCode).to.equal(200);
        });
      done();
    });
  });

// users test Apis

describe('Testing User endpoints JWT Error', () => {
  it('test get all Users', (done) => {
    chai
      .request(app)
      .get('/users')
      .end((err, res) => {
        chai.expect(res.statusCode).to.equal(401);
      });
    done();
  });
});

describe('Testing credentials', () => {
  it('test login User with wrong credentials', (done) => {
    const cred = {
      email: 'uyumugaboda@gmial.com',
      password: 'dsjfhdsuifgh',
    };
    chai
      .request(app)
      .post('/user/login')
      .send(cred)
      .end((err, res) => {
        chai.expect(res.statusCode).to.equal(401);
        chai.expect(res.message).to.equal('Incorrect email or password');
      });
    done();
  });

  it('test login User with right credentials', (done) => {
    const cred = {
      email: 'mosesk@gmail.com',
      password: '123pass',
    };
    chai
      .request(app)
      .post('/user/login')
      .send(cred)
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.status).to.equal('welcome');
      });
    done();
  });
});



//   test message apis




describe('Testing Message', () => {
  it('test get all messages', (done) => {
    chai
      .request(app)
      .get('/messages')
      .end((err, res) => {
        chai.expect(res.statusCode).to.equal(401);
      });
    done();
  });

  it('test get one message JWT Error', (done) => {
    chai
      .request(app)
      .get('/messages/623353b6f88b7155585f9e01')
      .end((err, res) => {
        chai.expect(res.statusCode).to.equal(401);
      });
    done();
  });

  it('test post one message', (done) => {
    const message = {
      name: 'moses',
      email: 'mkab@gmail.com',
      subject: 'job',
      message: 'are you ready for a job now',
    };

    chai
      .request(app)
      .post('/messages')
      .send(message)
      .end((err, res) => {
        chai.expect(res.statusCode).to.equal(500);
      });
    done();
  });
});
