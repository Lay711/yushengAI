export function runQueue(queue, iter, end) {
    const step = index => {
      if (index >= queue.length) {
        end();
      } else {
        if (queue[index]) {
            //iter迭代器
          iter(queue[index], () => {
            step(index + 1);
          });
        } else {
          step(index + 1);
        }
      }
    };
  
    step(0);
  }
  // 构造同步执行的队列函数