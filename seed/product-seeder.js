//create data product in mongodb

var Product = require("../models/product");
var mongoose = require("mongoose");
var config = require("../config");

mongoose.connect(config.getDbConnectionString());

var products = [
    new Product({
        imagePath: "https://vnexpress.net/galaxy-note20-duoc-chao-gia-35-trieu-dong-4135888.html",
        title: "Galaxy Note 20",
        description: "Galaxy Note20 được chào giá 35 triệu đồng",
        price: 35000000
    }),
    new Product({
        imagePath: "https://vnexpress.net/apple-bat-dau-san-xuat-iphone-11-o-an-do-4136093.html",
        title: "iPhone 11",
        description: "Apple bắt đầu sản xuất iPhone 11 ở Ấn Độ",
        price: 20000000
    }),
    new Product({
        imagePath: "https://vnexpress.net/iphone-12-co-the-ra-mat-ngay-8-9-4136146.html",
        title: "iPhone 12",
        description: "iPhone 12 có thể ra mắt ngày 8/9",
        price: 25000000
    })
]

var done = 0;

for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        done++;
        if (done === products.length){
            mongoose.disconnect();
        }
    })
}