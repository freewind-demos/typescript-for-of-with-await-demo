async function delay(ms: number): Promise<void> {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  })
}

const progress: number[] = [];

async function process(num: number) {
  progress.push(num);
  await delay(num);
  progress.push(num + 1);
}

async function main() {
  for (const number of [200, 20, 100]) {
    await process(number);
  }
  console.log('progress', progress);
}

main();
