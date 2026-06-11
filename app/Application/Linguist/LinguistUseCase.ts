import { container } from "tsyringe";
import {
  LinguistRepositoryToken,
  type LinguistRepositoryType,
} from "../../Domain/Linguist/LinguistRepositoryType";
import "../../Infratructure/Linguist/LunguistContainer";

export type LinguistUseCaseType = LinguistRepositoryType;

export class LinguistUseCase implements LinguistUseCaseType {
  linguistRepository = container.resolve<LinguistRepositoryType>(
    LinguistRepositoryToken,
  );

  getLinguistList() {
    return this.linguistRepository.getLinguistList();
  }
}
