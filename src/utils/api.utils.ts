import wait from './wait.utils';

export async function apiCallWithFallbacks(urls: string[]): Promise<any> {
  for await (const url of urls) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (error) {
      console.warn('Fallback api call error: ', error);
      await wait(500);
    }
  }
}

export async function apiCallWithRetries(url: string, retries = 1, currentRetry = 1): Promise<any> {
  if (retries < 1) throw new Error('retries count is less than 1');
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    await wait(1000);
    if (currentRetry === retries) {
      throw error;
    } else {
      await apiCallWithRetries(url, retries, currentRetry + 1);
    }
  }
}