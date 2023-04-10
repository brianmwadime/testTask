import { DEFAULT_CACHE_CALL_TIME_MS } from '@constants/common.constants';

export const isNeedToUpdateData = (cachedData: TCahchedData, cacheTime = DEFAULT_CACHE_CALL_TIME_MS): boolean => {
  if (!cachedData || !cachedData.lastUpdateTime) {
    return true;
  }
  return cachedData.lastUpdateTime.getTime() + cacheTime < Date.now();
};

export type TCahchedData = {
  data: any;
  lastUpdateTime: Date;
}

const cache: { [key: string]: TCahchedData } = {};

// TODO add GC for invalidated cache values

export async function cacheCall<R>(fc: (...params: any) => Promise<R>, params: any[], keys?: any[], cacheTime?: number): Promise<R> {
  const paramsKey = [...(keys && keys.length ? keys : params), fc.name].map((param) => JSON.stringify(param)).join('-');
  if (isNeedToUpdateData(cache[paramsKey], cacheTime)) {
    try {
      const data = await fc(...params);
      cache[paramsKey] = {
        data,
        lastUpdateTime: new Date()
      };
    } catch (err) {
      console.error(`Failed to update cached data. Key: ${paramsKey}, error: ${err}`);
    }
  }

  return cache[paramsKey].data as R;
}
