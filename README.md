This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

從 create-react-app eject 後的 SPA 模板

目前功能

1. router
2. redux

### `npm start`

Runs the app in the development mode.<br> Open
[http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br> You will also see any lint errors in
the console.

### `npm build`

如果不沒有要部署到 git page，執行 build 的時候要先把 package.json 的 homepage 刪
除否則會有問題

### `部署git page`

先執行 npm run predeploy 再 npm run deploy 並且設定好 homepage 參數
