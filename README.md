# Web Front End Test By Hyenatek

## 技術

- VueJS (使用vue-cli webpack創建項目)
- lodash
- bootstrap

## 需求 [已完成]

- [x] 1. 透過API取得資料，render table
- [x] 2. **(加分)**  在table header點選 (contact，country，created)，進行排序 
- [x] 3. Search contact name 可過濾
- [x] 4. Contact點選後，會進入下一個頁面
- [x] 5. Info區塊資料會直接由前頁點選資料提供
- [x] 6. Info以下資料，會透過上一個API取得，並且render

## 說明及如何實現

- 使用原生JS fetch API get 資料
- 使用第三方library **lodash** orderBy進行排序
- 使用原生JS filter 來過濾資料
- 使用vue-router plugin來讀取點選contact name後， 傳入參數給**/info**，取得參數裡資料。達到無需refresh。
- 當在info頁面，可以點擊左上方 nav breadcrumb -> Home，回到Service point 頁面
- **[注意]** 此API，每天請求次數不能超過200次以上。

> 題外，發現vue-cli已更新成3.0，查看2.x和3.x差別 [官網](https://cli.vuejs.org/)


## Build Setup

``` bash
# switch folder
cd frontend-test

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
