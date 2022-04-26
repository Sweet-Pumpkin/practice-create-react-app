# Create React App
- `npx install create-react-app` 설치해보기
- 미리 설치된 파일 정리하기
```
// index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

```
- `npm install prop-types` 설치해서 사용해보기