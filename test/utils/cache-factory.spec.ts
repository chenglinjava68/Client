import { buildCacheFactory, CachePolicy } from '@shared/utils/cache-factory';
import rnStorage from '@shared/api/rn-storage.api';

describe('buildCacheFactory', () => {
  describe('result should be cache', () => {
    test.each([
      ['Temporary', CachePolicy.Temporary],
      ['Persistent', CachePolicy.Persistent],
    ])('%s', async (desc: string, policy: CachePolicy) => {
      const testFn = jest.fn((a: string) => {
        return a;
      });

      const cacheTestFn = buildCacheFactory(policy, testFn);

      expect(await cacheTestFn('a')).toBe('a');
      expect(await cacheTestFn('a')).toBe('a');

      expect(testFn.mock.calls.length).toBe(1);

      expect(await cacheTestFn('b')).toBe('b');

      expect(testFn.mock.calls.length).toBe(2);
    });
  });

  test('cache should be save in rnStorage by Temporary CachePolicy', async () => {
    const testFn = jest.fn((a: string) => {
      return a;
    });
    const cacheTestFn = buildCacheFactory(CachePolicy.Persistent, testFn);

    const ret = await cacheTestFn('a', 'b');
    const cachedRet = await rnStorage.get('trpg:a$b');
    expect(cachedRet).toBe(ret);
  });
});
