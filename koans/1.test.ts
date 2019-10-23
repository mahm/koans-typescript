// # 配列同士の結合
//
// ## 問題
// 交互に要素を取ることで、2つの配列を結合する関数を作成してください。
// 例えば ["a", "b", "c"] と [1, 2, 3] という2つの配列を与えると、
// 関数は [["a", 1], ["b", 2], ["c", 3]] を返します。
//
// ## テスト
// node_modules/.bin/jest koans/1.test.ts

// テストが通るように、この関数の型や実装を変更してください
const zip = (array1: any, array2: any): any => {
  return [];
};

test("結合される配列が同じ型のとき", () => {
  const array1 = [1, 2, 3];
  const array2 = [2, 3, 4];
  expect(zip(array1, array2)).toEqual([[1, 2], [2, 3], [3, 4]]);
});

test("1番目に結合される配列より2番目に結合される配列の要素数が多いとき", () => {
  const array1 = [1, 2, 3];
  const array2 = [2, 3, 4, 5];
  expect(zip(array1, array2)).toEqual([[1, 2], [2, 3], [3, 4]]);
});

test("2番目に結合される配列より1番目に結合される配列の要素数が多いとき", () => {
  const array1 = [1, 2, 3, 4];
  const array2 = [2, 3, 4];
  expect(zip(array1, array2)).toEqual([[1, 2], [2, 3], [3, 4], [4, null]]);
});

test("異なる型の配列を結合するとき", () => {
  const array1 = [1, 2, 3];
  const array2 = ["a", "b", "c"];
  expect(zip(array1, array2)).toEqual([[1, "a"], [2, "b"], [3, "c"]]);
});
