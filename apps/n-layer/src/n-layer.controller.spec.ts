import { Test, TestingModule } from '@nestjs/testing';
import { NLayerController } from './n-layer.controller';
import { NLayerService } from './n-layer.service';

describe('NLayerController', () => {
  let nLayerController: NLayerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NLayerController],
      providers: [NLayerService],
    }).compile();

    nLayerController = app.get<NLayerController>(NLayerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(nLayerController.getHello()).toBe('Hello World!');
    });
  });
});
