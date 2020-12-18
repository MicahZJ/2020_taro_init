import IndexPage from '../pages/index/store';

class AppStore {
  constructor () {
    this.indexStore = new IndexPage(this);
  }
}

export default new AppStore()
