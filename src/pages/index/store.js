import { action, observable, computed, runInAction } from 'mobx';

export default class Store {
  constructor () {
  }

  @observable  overviewData = 1;

  @action
  increment() {
    this.overviewData++
  }

  @action
  decrement() {
    this.overviewData--
  }

  @action
  incrementAsync() {
    setTimeout(() => this.overviewData++, 1000)
  }
  // @computed get c () {
  // }

}
