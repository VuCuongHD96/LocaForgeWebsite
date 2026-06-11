import type { Linguist } from "./Linguist";
import type { Observable } from "rxjs";

export const LinguistRepositoryToken = Symbol("LinguistRepositoryType");

export interface LinguistRepositoryType {
  getLinguistList(): Observable<Linguist[]>;
}
