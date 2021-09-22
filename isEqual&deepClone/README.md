# assignment - isEqual, deepColne

- isEqual: 깊은 비교를 통해 두 값(객체)이 동일한 값인지 확인하는 함수

  1. 원시값, 일반 객체, 배열을 대상으로 깊은 비교한다. 그 외의 객체(함수, Date, RegExp, Set, Map, Promise 등)은 ===으로 단순 비교한다.
  2. 객체는 enumerable한 자체 프로퍼티(상속된 프로퍼티 제외)만 비교한다.
  3. NaN === NaN은 false로 평가되지만 isEqual(NaN, NaN)은 true를 반환한다.
  4. 0 === -0은 true로 평가되지만 isEqual(0, -0)은 false를 반환한다.

  - type 체크 방법 참고

    https://poiemaweb.com/js-type-check#2-objectprototypetostring

- deepClone: 객체를 깊은 복사하는 함수

  1. 함수는 클론하지 않는다.
