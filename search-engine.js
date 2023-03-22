const products = document.querySelectorAll('.product-card');
const searchInput = document.querySelector('#search-input');
const found = document.querySelector('.nofound');

searchInput.addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase();
  products.forEach(product => {
    const productName = product.getAttribute('data-name').toLowerCase();
    const productPrice = product.getAttribute('data-price');
    const productCategory = product.getAttribute('data-category').toLowerCase();
    if (productName.includes(searchTerm) || productPrice == searchTerm || productCategory.includes(searchTerm)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
      found.innerHTML = "No Item Is Found"
    
 
    }
  });
});
function like(){
  var element = document.querySelector('.heart');
  element.classList.add("liked");
}
function add(){
  alert("Successfully added to the cart")
}




// <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Welcome to online Lodhi Fabrics</title>
//         <link rel="stylesheet" href="bootstrap\bootstrap-icons\bootstrap-icons.css">
//         <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
//         <link rel="stylesheet" href="bootstrap/bootstrap-icons/fonts/bootstrap-icons.woff">
//         <script src="bootstrap/js/bootstrap.bundle.min.js"></script>
//         <link rel="stylesheet" href="Resources\css\style.css">
//         <link rel="stylesheet" href="Resources\css\Header.css">
//         <link rel="icon" type="image/x-icon" href="Images/fav.png">
//         <style>
//       .product-container {
//         display: flex;
//         flex-wrap: wrap;
//         justify-content: space-between;
//       }
//        .product-card {
//         /* width: calc(33.33% - 20px);
//         padding: 20px; */
//         background-color: #f2f2f2;
//         box-sizing: border-box;
//         margin: 1rem auto;
//         text-align: center;
//       } 
//       .product-card h3 {
//         margin-top: 0;
//         margin-bottom: 20px;
//       }
//       input{
//         padding: .5rem;
//         display: flex;
//         width: 18rem;
//         margin: 1rem auto;
//       }
//     </style>
//   </head>
//   <body>
//     <div class="container-fluid">
//       <div class="row text-center">
//         <div class="col-12">
//           <h1 >Product Search Engine</h1>
//         </div>
//    <div class="col-md-12">
//     <input type="text" id="search-input" placeholder="Search by name,Category and Price">
//    </div>
//    </div>
//     <div class=" row product-container g-3">
//       <div class="col-12 col-sm-4 col-md-3 col-lg-2" data-name="hat" data-price="999" data-category="fashion" style="margin:1rem 0">
//         <div class="card bg-transparent  p-2" >
//           <img src="Images\Girls\g1.webp "   class="card-img-top" alt="...">
//           <div class="card-body d-flex justify-content-between align-items-center">
//       <div><h5 class="card-title my-0 fw-md-bold"style="color:#00c2cb; font-size:.9rem;">Stylish Hat</h5>
//       <small class="card-text text-capitalize text-secondary" >Fashion</small>
//       <p class="card-text fw-bold text-danger">RS.999</p>
//       </div>
//             <div> <a href="#" style="color:#00c2cb;"> <i class="bi bi-cart3 p-2 border rounded-circle" onclick="call()"></i></a></div>
//             </div>
         
//         </div>
//       </div>
//       <div class="col-12 col-sm-4 col-md-3 col-lg-2" data-name="jeans jacket" data-price="1,999" data-category="fashion" style="margin:1rem 0">
//         <div class="card bg-transparent  p-2" >
//           <img src="Images\Girls\g2.webp "   class="card-img-top" alt="...">
//           <div class="card-body d-flex justify-content-between align-items-center">
//       <div><h5 class="card-title my-0 fw-md-bold"style="color:#00c2cb; font-size:.9rem;">Jeans & Jacket</h5>
//       <small class="card-text text-capitalize text-secondary" >Fashion</small>
//       <p class="card-text fw-bold text-danger">RS. 1,999</p>
//       </div>
//             <div> <a href="#" style="color:#00c2cb;"> <i class="bi bi-cart3 p-2 border rounded-circle" onclick="call()"></i></a></div>
//             </div>
         
//         </div>
//       </div>
//       <div class="col-12 col-sm-4 col-md-3 col-lg-2" data-name="jeans" data-price="1,499" data-category="fashion" style="margin:1rem 0">
//         <div class="card bg-transparent  p-2" >
//           <img src="Images\Girls\g5.webp "   class="card-img-top" alt="...">
//           <div class="card-body d-flex justify-content-between align-items-center">
//       <div><h5 class="card-title my-0 fw-md-bold"style="color:#00c2cb; font-size:.9rem;">Blue Jeans</h5>
//       <small class="card-text text-capitalize text-secondary" >Fashion</small>
//       <p class="card-text fw-bold text-danger">RS. 1,499</p>
//       </div>
//             <div> <a href="#" style="color:#00c2cb;"> <i class="bi bi-cart3 p-2 border rounded-circle" onclick="call()"></i></a></div>
//             </div>
         
//         </div>
//       </div>
//       <div class="col-12 col-sm-4 col-md-3 col-lg-2" data-name="jackets" data-price="2999" data-category="fashion" style="margin:1rem 0">
//         <div class="card bg-transparent  p-2" >
//           <img src="Images\Girls\g6.webp "   class="card-img-top" alt="...">
//           <div class="card-body d-flex justify-content-between align-items-center">
//       <div><h5 class="card-title my-0 fw-md-bold"style="color:#00c2cb; font-size:.9rem;">Red Jacket</h5>
//       <small class="card-text text-capitalize text-secondary" >Fashion</small>
//       <p class="card-text fw-bold text-danger">RS. 2,999</p>
//       </div>
//             <div> <a href="#" style="color:#00c2cb;"> <i class="bi bi-cart3 p-2 border rounded-circle" onclick="call()"></i></a></div>
//             </div>
         
//         </div>
//       </div>
     
//     </div>
//   </div>
//  </div>
//     <script src="search-engine.js"></script>
//   </body>
// </html>
