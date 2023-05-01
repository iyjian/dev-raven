import { Test, TestingModule } from '@nestjs/testing';
import { SenderService } from './sender.service';

describe('SenderService', () => {
  let service: SenderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SenderService],
    }).compile();

    service = module.get<SenderService>(SenderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
