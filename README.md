# Megabyte School Practice React.
### React Hooks
Hook은 React v16.8에서 새롭게 도입된 기능. <br />
Hook으로 함수 컴포넌트에서 state와 lifecycle features를 연동할 수 있다. 이것으로 더이상 class를 사용하지 않고 React를 사용할 수 있게 되었다.

---

### useState
가장 기본적인 Hook으로 함수형 컴포넌트에 가변적인 state를 가질 수 있게 해준다. class의 `this.state`와 같은 역할을 해준다.<br />
`useState()`는 길이가 2인 배열을 반환하며 배열의 첫 번째는 현재 상태, 두 번째는 상태를 설정하는 함수다. state의 초깃값을 매개변수로 전달받아 배열을 반환한다.

---

#### 실습 코드: [Practice06.tsx](./src/practice/220518/Practice06.tsx)
  - `useState()` 활용해서 1번 input과 2번 input 값을 서로 더하기.

---

### useRef
`useRef`는 함수형 컴포넌트에서 ref를 쉽게 사용할 수 있게 해준다.<br />
state처럼 컴포넌트를 다루는데 필요한 데이터지만 컴포넌트 렌더링 없이 데이터를 다루고 싶을 때 사용할 수 있다.

#### 실습 코드1: [Practice09.jsx](./src/practice/220520/Practice09.jsx)
  - `useRef()`로 input 값 리셋하기.
#### 실습 코드2: [Practice10.jsx](./src/practice/220520/Practice10.jsx)
  - `useRef()`로 회원가입 창 만들기.

---

### useEffect
렌더링시 특정 작업을 하도록 지정하는 Hook.<br />
빈배열을 매개변수로 넣으면 컴포넌트가 화면에 맨 처음 렌더링 될 때만 effects 함수가 실행 되며, 특정 state를 배열의 요소에 넣으면 state가 변경될 때만 effects 함수가 실행된다.<br />
clean-up을 통해 `useEffect()`로 렌더링한 값의 원하는 부분만 출력할 수 있다.

#### 실습 코드1: [Practice11.jsx](./src/practice/220523/Practice11.jsx)
  - `useEffect()`와 `setTimeout()`을 이용해서 input에 입력한 값이 3초 뒤에 출력할 수 있게 작성.
  - 값이 나타나는 3초 동안 카운트 다운을 출력.
  - 만약 3초 이전에 input에 새로운 값이 입력되면 다시 3초부터 카운트다운 하기.

#### 실습 코드2: [Practice12.jsx](./src/practice/220523/Practice12.jsx)
  - `setInterval()` 사용해서 실습 코드1 수정.

---

### React Router DOM
6버전 이후의 React Router DOM 문법 학습.
#### 설치 방법
`$ npm install react-router-dom`
#### Link & Router
  1. `<BrowerRouter></BrowerRouter>`로 Router 범위 적용.
  2. `<Routes></Routes>`내부에 `<Route path="***" element={<Fn />}></Route>`으로 url과 React element 설정.
  3. `<Link to="***"></Link>`로 url 설정. 이후 Link를 클릭하면 일치하는 url 및 React element로 이동.
  4. 예제 코드: [Practice13.jsx](./src/practice/220525/Practice13.jsx)
#### Parameter
  - 가변 parameter의 앞에 콜론을 붙이면 뒤 string을 key로 하는 parameter를 받을 수 있다.
  - 예제 코드: [Practice14.jsx](./src/practice/220525/Practice14.jsx)

#### Wildcard와 Navigative
  - "*"와 <Navigate to="?" />를 활용해서 404 Not Found 페이지 등을 만들 수 있다.

#### 실습코드: [Practice15.jsx](./src/practice/220525/Practice15.jsx)
  - 회원가입 코드 [Main.jsx](./src/practice/220525/Main.jsx)에 아이디와 비밀번호를 입력.
  - 알맞은 아이디와 비밀번호를 입력하면 _Main.jsx_에 입력한 id 값이 나오는 로그인 화면 [Login.jsx](./src/practice/220525/Login.jsx)가 나타나게 하기.

### React 스타일링

### CSS in JS
  - 자바스크립트 코드로 스타일링하는 방법.
  - 외부 파일에 CSS를 정의하는 대신, 자바스크립트와 결합하는 패턴을 가지고 있음.
  - Global Namespace와 Dependencies, Dead Code Elimination, Minification, Sharing Constants, Non-deterministic Resolution, Isolation 등의 이유로 CSS in JS를 사용.

### styled-components
  - CSS in JS를 사용할 수 있게 도와주는 라이브러리.

  ```
  import styled from 'styled-components';

  const Sample = styled.div`
    width: 100px;
    height: 100px;
    background-color: red;
  `;

  export defalut () => (
    <Sample />
  );
  ```

---

### createContext & useContext
  - 단순 props drilling이 아닌, 매 컴포넌트 마다 해당 props를 사용할때 전역상태관리가 필요.
  - 다양한 레벨에 네스팅된 많은 컴포넌트에게 데이터를 전달하기 위한 것.
  - context를 사용하면 컴포넌트를 재사용하기가 어려워짐.

---

### Redux 기초
  - store, reducer, action 개념 학습.
  - createStore 학습.
  - useSelector & useDispatch 학습.