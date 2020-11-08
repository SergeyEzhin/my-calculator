import {
  action,
  computed,
  makeAutoObservable,
  makeObservable,
  observable,
} from "mobx";

class Store {
  number;

  constructor(number) {
    makeAutoObservable(this);
    this.number = number;
  }

  resetNumber() {
    this.number = this.number + 1;
  }
}

export default Store;
