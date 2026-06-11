import { of, type Observable } from "rxjs";
import type { LinguistRepositoryType } from "../../Domain/Linguist/LinguistRepositoryType";
import { Linguist } from "../../Domain/Linguist/Linguist";

export class LinguistRepositoryMock implements LinguistRepositoryType {
  getLinguistList(): Observable<Linguist[]> {
    return of([
      new Linguist(
        "1",
        "John Doe",
        new Date("1990-01-01"),
        "john.doe@example.com",
      ),
      new Linguist(
        "2",
        "Jane Smith",
        new Date("1995-05-15"),
        "jane.smith@example.com",
      ),
      new Linguist(
        "3",
        "Bob Johnson",
        new Date("1988-11-20"),
        "bob.johnson@example.com",
      ),
    ]);
  }
}
