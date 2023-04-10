import { MultiCall, ShapeWithLabel } from 'eth-multicall';

export const delay = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms));

// create array with N items
export const arrayFromN = (N: number) => N > 0 ? new Array(N).fill(0).map((_, index) => index) : [];
// create array from N to M itareble
export const arrayNM = (n: number, m: number): number[] => {
  if (m === 0 || m - n < 0) {
    return [];
  }
  const length = Math.abs(n - m) + 1;
  return new Array(length).fill(0).map((_, index) => n + index);
};

export const batchSlices = <T = any>(values: T[], batchSize: number): T[][] => {
  const batches: T[][] = [];
  let currentIndex = 0;
  while (currentIndex <= values.length) {
    const nextIndex = currentIndex + batchSize;
    batches.push([...values.slice(currentIndex, nextIndex)]);
    currentIndex = nextIndex;
  }
  return batches;
};

export const batchAsync = async <T>(cbs: Promise<T>[], batchSize: number, waitingMs = 200) => {
  const batches: Promise<T>[][] = [];
  let currentIndex = 0;
  while (currentIndex <= cbs.length) {
    const nextIndex = currentIndex + batchSize;
    batches.push([...cbs.slice(currentIndex, nextIndex)]);
    currentIndex = nextIndex;
  }
  const results: T[] = [];
  for await (const batch of batches) {
    const batchResults = await Promise.all(batch);
    results.push(...batchResults);
    await delay(waitingMs);
  }

  return results;
};

export const batchMulticall = async (
  multicall: MultiCall,
  calls: ShapeWithLabel[],
  batchSize: number,
  waitingMs = 200
) => {
  const batchCalls = batchSlices(calls, batchSize);
  const results: any[] = [];
  for await (const batch of batchCalls) {
    const [batchResults] = await multicall.all([batch]);
    results.push(...batchResults);
    await delay(waitingMs);
  }

  return results;
};