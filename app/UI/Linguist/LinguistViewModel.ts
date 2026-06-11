import { Subject, type Observable, switchMap } from "rxjs";
import {
  LinguistUseCase,
  type LinguistUseCaseType,
} from "../../Application/Linguist/LinguistUseCase";
import { Linguist } from "../../Domain/Linguist/Linguist";

export class LinguistViewModel {
  useCase: LinguistUseCaseType = new LinguistUseCase();

  static Input = class {
    loadTrigger = new Subject<void>();
  };

  static Output = class {
    linguistListObservable: Observable<Linguist[]>;

    constructor(linguistListObservable: Observable<Linguist[]>) {
      this.linguistListObservable = linguistListObservable;
    }
  };

  transform(
    input: InstanceType<typeof LinguistViewModel.Input>,
  ): InstanceType<typeof LinguistViewModel.Output> {
    const linguistListObservable = input.loadTrigger.pipe(
      switchMap(() => this.useCase.getLinguistList()),
    );

    return new LinguistViewModel.Output(linguistListObservable);
  }
}
