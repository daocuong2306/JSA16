//1 . mảng dữ liệu chứ thông tin của sản phẩm
const arrListProduct = [
    {
        id : 1,
        img : "img/image 26 (3).png",
        name : "Bò",
        price : "100"
    },
    {
        id : 2,
        img : "img/image 26 (3).png",
        name : "Cá",
        price : "200"
    },
    {
        id : 3,
        img : "img/image 26 (3).png",
        name : "bò",
        price : "500"
    },
    {
        id : 4,
        img : "img/image 26 (3).png",
        name : "bò",
        price : "100"
    },
    {
        id : 5,
        img : "img/image 26 (3).png",
        name : "Chim",
        price : "100"
    },
    {
        id : 6,
        img : "img/image 26 (3).png",
        name : "Cá",
        price : "100"
    }
];
//tạo 1 function dùng để show dữ liệu
const showProduct = () => {
    //liên kết đến phần muốn hiện thị ra sản phẩn bên trang html
    let app = document.querySelector(".app");
    //sử dụng for of để sử lý dữ liệu trong mảng
   if(app) {
    for(let item of arrListProduct) {
        //1 : hiện thị sản phẩm bằng innerHTML
        //2 : sử dụng ``
        app.innerHTML += `
        <a href= "detail.html?url=${item.id}">
        <div class="item">
            <img src="${item.img}" alt="">
            <p>${item.name}</p>
        </div>
        </a>
        `
    }
   }
 }
showProduct()

//tạo ra 1 hàm show detail
const showDetail = () =>{
    //liên kết đến phần muốn hiện thị ra sản phẩn bên trang html
    let product = document.querySelector(".product")
    //lấy dữ liệu id đã được đây lên thanh url và gán vào 1 biến
    let id = new URLSearchParams(window.location.search).get("url");
    //tạo ra 1 giá trị mới từ mảng cũ là lọc ra obj có giá trị tương ứng với id
    let newProduct = arrListProduct.find((item)=> item.id==id)
    product.innerHTML = `
    <img src="${newProduct.img}" alt="">
    <h1>${newProduct.name}</h1>
    <p>${newProduct.price} $</p>
    `
}

showDetail()

let url = new URLSearchParams(window.location.search).get("url");
let pro = document.querySelector(".product");

pro.innerHTML = url
