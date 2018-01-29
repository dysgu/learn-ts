import { DaoI } from "./daoI";

export class Dao<T> implements DaoI<T> {
  table: string = "";

  insert(object: T): boolean {
    console.log("Method insert");
    return true;
  }
  update(object: T): boolean {
    console.log("Method update");
    return true;
  }
  remove(id: number): T {
    console.log("Method remove");
    return Object();
  }
  select(id: number): T {
    console.log("Method select");
    return Object();
  }
  selectAll(): [T] {
    console.log("Method selectAll");
    return [Object()];
  }
}
