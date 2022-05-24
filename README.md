# Megabyte School Practice React.
### React Hooks
Hook은 React v16.8에서 새롭게 도입된 기능. <br />
Hook으로 함수 컴포넌트에서 state와 lifecycle features를 연동할 수 있다. 이것으로 더이상 class를 사용하지 않고 React를 사용할 수 있게 되었다.
### useState
가장 기본적인 Hook으로 함수형 컴포넌트에 가변적인 state를 가질 수 있게 해준다. class의 `this.state`와 같은 역할을 해준다.<br />
`useState()`는 길이가 2인 배열을 반환하며 배열의 첫 번째는 현재 상태, 두 번째는 상태를 설정하는 함수다. state의 초깃값을 매개변수로 전달받아 배열을 반환한다.

#### 연습한 코드: [Practice06.tsx](./src/practice/220518/Practice06.tsx)
  - `useState()` 활용해서 1번 input과 2번 input 값을 서로 더하기.

### useRef
`useRef`는 함수형 컴포넌트에서 ref를 쉽게 사용할 수 있게 해준다.<br />
state처럼 컴포넌트를 다루는데 필요한 데이터지만 컴포넌트 렌더링 없이 데이터를 다루고 싶을 때 사용할 수 있다.

#### 연습한 코드1: [Practice09.jsx](./src/practice/220520/Practice09.jsx)
  - `useRef()`로 input 값 리셋하기.
#### 연습한 코드2: [Practice10.jsx](./src/practice/220520/Practice10.jsx)
  - `useRef()`로 회원가입 창 만들기.

### useEffect
렌더링시 특정 작업을 하도록 지정하는 Hook.<br />
빈배열을 매개변수로 넣으면 컴포넌트가 화면에 맨 처음 렌더링 될 때만 effects 함수가 실행 되며, 특정 state를 배열의 요소에 넣으면 state가 변경될 때만 effects 함수가 실행된다.<br />
clean-up을 통해 `useEffect()`로 렌더링한 값의 원하는 부분만 출력할 수 있다.

#### 연습한 코드: [Practice11.jsx](./src/practice/220523/Practice11.jsx)
  - `useEffect()`와 `setTimeout()`을 이용해서 input에 입력한 값이 3초 뒤에 출력할 수 있게 작성.
  - 값이 나타나는 3초 동안 카운트 다운을 출력.
  - 만약 3초 이전에 input에 새로운 값이 입력되면 다시 3초부터 카운트다운 하기.

