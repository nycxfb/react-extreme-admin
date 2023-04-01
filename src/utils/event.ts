interface event {
  listen: (eventName: string, callback: Function) => void;
  trigger: (eventName: string, args: any) => void;
  remove: (eventName: string, callback?: Function) => void;
}

interface List {
  [key: string]: Array<Function>;
}

class Event implements event {
  public list: List;

  constructor() {
    this.list = {};
  }

  listen(eventName: string, callback: Function) {
    if (!this.list[eventName]) {
      this.list[eventName] = [];
    }
    this.list[eventName].push(callback);
  }

  trigger(eventName: string, data: any) {
    const fns = this.list[eventName];
    if (!fns || fns.length == 0) {
      throw new Error('This event is not exist !');
    }
    fns.forEach((fnItem: Function) => {
      fnItem.apply(this, [data]);
    });
  }

  remove(eventName: string, callback?: Function) {
    const fns = this.list[eventName];
    if (!fns) {
      throw new Error('This event is not exist !');
    }
    if (!callback) {
      fns && (fns.length = 0);
    } else {
      fns.forEach((item, index) => {
        if (callback === item) {
          fns.splice(index, 1);
        }
      });
    }
  }
}

export default new Event();
