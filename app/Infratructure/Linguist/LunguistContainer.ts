import { container } from "tsyringe";
import { LinguistRepositoryToken } from "../../Domain/Linguist/LinguistRepositoryType";
import { LinguistRepositoryMock } from "./LinguistRepositoryMock";

container.register(LinguistRepositoryToken, {
  useClass: LinguistRepositoryMock,
});
