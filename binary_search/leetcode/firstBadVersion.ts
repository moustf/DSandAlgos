/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {

  return function (n: number): number {
    let left = 0;
    let right = n;

    while (left < right) {
      let mid = left + Math.floor((right - left) / 2);

      if (isBadVersion(mid)) {
        right = mid;
      } else if (!isBadVersion(mid)) {
        left = mid + 1;
      }
    }

    return left;
  };
};