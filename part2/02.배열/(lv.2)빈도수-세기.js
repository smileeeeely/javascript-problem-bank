/**
 * [(lv.2)빈도수 세기.js]
 *
 * 1) getFrequency(arr)는 주어진 배열 내 요소들의 등장 횟수를 객체로 반환합니다.
 *    예: getFrequency(["apple", "banana", "apple"]) -> { apple: 2, banana: 1 }
 * 2) reduce, forEach 등을 이용할 수 있습니다.
 * 3) 문자열, 숫자 등 어떤 타입이든 동작하도록 처리하세요.
 *
 * @param {any[]} arr
 * @returns {object} - key: 원소 값, value: 등장 횟수
 */

// TODO: 함수를 작성하세요.
function getFrequency(arr) {
  const map = new Map();

  arr.forEach((item) => {
    let key;
    if (typeof item === "object" && item !== null) {
      key = Array.isArray(item)
        ? `arr:${JSON.stringify(item)}`
        : `obj:${JSON.stringify(item)}`;
    } else if (typeof item === "number") {
      key = Symbol(`num:${item}`);
    } else {
      key = item;
    }
    map.set(key, (map.get(key) || 0) + 1);
  });
  const result = Object.create(null);
  for (const [key, value] of map.entries()) {
    if (typeof key === "symbol") {
      result[Number(key.description.replace("num:", ""))] = value;
    } else {
      console.log('key',key)
      result[key] = value;
    }
  }
  return result;
}
console.log(getFrequency(["1", 1]));
console.log(getFrequency(["1", 1, true, false, true, [], {}, [], {}]));
//아니면 걍 for문 돌리면서 숫자일 땐 숫자 내보내고 그러면 안되나?

// export 를 수정하지 마세요.
export { getFrequency };
