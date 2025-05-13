//bước 1: dùng fetch() call api để lấy dữ liệu
//bước 2: Hiển thị sản phẩm ra giao diện (dùng forEach duyệt qua mảng)
//bước 3: sau khi có danh sách sản phẩm, viết hàm tìm kiếm sp(bắt sự kiện click cho nút search) sau đó call api lấy dữ liệu sp
//bước 4: viết hàm xem chi tiết sp, call api lấy dữ liệu sp thông qua id sau đó hiển thị chi tiết sp ra màn hình
//bước 5: viết hàm sắp xếp sp theo giá bắt sk change sau đó dùng sort để sắp xếp

const prevPage = document.getElementById("prevPage");
const pageNumbers = document.getElementById("pageNumbers");
const nextPage = document.getElementById("nextPage");
const list = document.getElementById("productList");

fetch(" https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    const products = data.products;
    currentProducts = data.products;
    renderProductList(products);
    renderProductList(currentProducts);
  });

function renderProductList(products) {
  list.innerHTML = "";

  products.forEach((product) => {
    const shortDesc = product.description.slice(0, 50) + "...";
    list.innerHTML += `
            <div class="product-card">
                <img src="${product.thumbnail}" alt="${product.title}">
        <div class="product-info">
          <h3>${product.title}</h3>
          <p>${shortDesc}</p>
          <p class="price">${product.price} $</p>
          <button class="btn-detail" onclick="viewDetail(${product.id})">Xem chi tiết</button>
        </div>
            </div>
        `;
  });
}

const search = document.getElementById("searchBtn");
search.addEventListener("click", () => {
  const query = document.getElementById("searchInput").value;
  searchProduct(query);
});
function searchProduct(query) {
  fetch(`https://dummyjson.com/products/search?q=${encodeURIComponent(query)}`)
    .then((res) => res.json())
    .then((data) => renderProductList(data.products));
}

function viewDetail(id) {
  fetch(`https://dummyjson.com/products/${id}`)
    .then((res) => res.json())
    .then((product) => {
      document.getElementById("modalTitle").innerText = product.title;
      document.getElementById("modalImage").src = product.thumbnail;
      document.getElementById("modalDescription").innerText =
        product.description;
      document.getElementById(
        "modalPrice"
      ).innerText = `Giá: ${product.price} $`;

      document.getElementById("productModal").style.display = "block";
    });

  document.querySelector(".close").onclick = function () {
    document.getElementById("productModal").style.display = "none";
  };

  window.onclick = function (event) {
    const modal = document.getElementById("productModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
}

let currentProducts = [];
document.getElementById("sortSelect").addEventListener("change", (e) => {
  const value = e.target.value;
  if (value === "asc") {
    currentProducts.sort((a, b) => a.price - b.price);
  } else if (value === "desc") {
    currentProducts.sort((a, b) => b.price - a.price);
  }
  renderProductList(currentProducts);
});

let page = 1;
let limit = 10;
let skip = (page - 1) * limit;
let totalProducts

async function paginateProducts(limit = 10, skip = 0) {
  try {
    const res = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    );
    const { products, total } = await res.json();
    totalProducts = total;
    renderProductList(products);
  } catch (error) {
    console.log(error);
  }
}

paginateProducts();

pageNumbers.innerText = page;

prevPage.addEventListener('click', function(){
    if(page > 1){
        page--;
        pageNumbers.innerText = page;
        skip = (page - 1) * limit;
        paginateProducts(limit, skip)
    }
})
nextPage.addEventListener('click', function(){
    pageMax = totalProducts / limit
    if(page < +pageMax){
        page++
        pageNumbers.innerText = page;
        skip = (page - 1) * limit;
        paginateProducts(limit, skip);
    }
})