import { SpecificationRepository } from '../../repositories/implementations/SpecificationRepositories';
import { CreateSpecificationController } from './CreateSpecificationController';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

export default () => {
  const specificationRepository = new SpecificationRepository();

  const createSpecificationUseCase = new CreateSpecificationUseCase(
    specificationRepository,
  );

  const createSpecificationController = new CreateSpecificationController(
    createSpecificationUseCase,
  );

  return createSpecificationController;
};
