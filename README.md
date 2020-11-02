# Shopping-cart

Shopping-cart là 1 trang web login đơn giản mục đích tìm hiểu cách thức hoạt động Session-Token, lưu trữ trực tuyến sử dụng database MongoDB Cloud, server viết bằng NodeJS và hiển thị nhờ template engine ejs.

  - Database MongoDB Cloud
  - Server NodeJS
  - Hiển thị HTML nhờ template engine hbs

![shopping-cart](./public/nodeJS_Session-Token.gif)

### Tech

Shopping-cart sử dụng 1 số open source projects và thư viện:

* [Visual Studio Code] - code editor
* [NodeJS] - server viết backend
* [Express] - node.js framework 
* [mongoose] - một công cụ mô hình hóa đối tượng MongoDB
* [hbs] - một template engine hiển thị HTML
* [morgan] - HTTP request logger middleware
* [cookie-parser] - enable signed cookie
* [csurf] - Node.js CSRF protection middleware.

### Installation

Node-todos cần thiết cài [Node.js](https://nodejs.org/) để chạy.

Cài đặt dependencies and devDependencies và chạy server.

```sh
$ cd shopping-cart
$ npm install
$ npm start
```

Đối với môi trường...

```sh
$ npm install --production
$ NODE_ENV=production node app
```

Xác minh việc triển khai bằng cách điều hướng đến địa chỉ máy chủ của bạn trong trình duyệt ưa thích của bạn:

```sh
127.0.0.1:3000
```

### Todos

 - Write MORE Tests
 - Add Night Mode

### Authors

Nguyễn Quý Chí
nguyenquychi96@gmail.com 