interface Client_ {
  initEvent: () => void;
}

interface Strategy {
  [key: string]: () => void;
}

class client implements Client_ {
  public strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
    this.initEvent();
  }

  initEvent() {
    this.strategy.process();
  }
}

export default client;
