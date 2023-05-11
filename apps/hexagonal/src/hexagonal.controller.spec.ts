import { Test, TestingModule } from '@nestjs/testing';
import { HexagonalController } from './hexagonal.controller';
import { HexagonalService } from './hexagonal.service';

describe('HexagonalController', () => {
  let hexagonalController: HexagonalController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HexagonalController],
      providers: [HexagonalService],
    }).compile();

    hexagonalController = app.get<HexagonalController>(HexagonalController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(hexagonalController.getHello()).toBe('Hello World!');
    });
  });
});
