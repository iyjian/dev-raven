import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
// import push from "./../mockData/gitlab/push"

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  // it('/?from=gitlab (gitlab: push event)', () => {
  //   return request(app.getHttpServer())
  //     .post('/?from=gitlab')
  //     .send(push)
  //     // .expect(200)
  //     .expect(res => {
  //       if (!/heads/.test(res.text)) {
  //         throw new Error('failed')
  //       }
  //     })
  // });
});
