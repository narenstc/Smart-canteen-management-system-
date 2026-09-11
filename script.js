// ============================================
// SMART CANTEEN ORDERING SYSTEM
// ============================================


// FOOD DATABASE

const foods = [
  {id:1,name:"Classic Popcorn",category:"popcorn",price:120,stock:100,image:"https://images.unsplash.com/photo-1585647347483-22b66260dfff?auto=format&fit=crop&w=900&q=85",description:"Freshly popped salted cinema popcorn"},
  {id:2,name:"Cheese Popcorn",category:"popcorn",price:150,stock:100,image:"https://images.unsplash.com/photo-1585647347483-22b66260dfff?auto=format&fit=crop&w=900&q=85",description:"Crunchy popcorn with cheesy seasoning"},
  {id:3,name:"Caramel Popcorn",category:"popcorn",price:160,stock:100,image:"https://images.unsplash.com/photo-1585647347483-22b66260dfff?auto=format&fit=crop&w=900&q=85",description:"Sweet caramel coated popcorn"},
  {id:4,name:"Nachos with Cheese",category:"snacks",price:140,stock:100,image:"https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=900&q=85",description:"Crispy nachos with warm cheese dip"},
  {id:5,name:"French Fries",category:"snacks",price:110,stock:100,image:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=85",description:"Crispy golden fries"},
  {id:6,name:"Peri Peri Fries",category:"snacks",price:130,stock:100,image:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=85",description:"Fries tossed in spicy peri peri seasoning"},
  {id:7,name:"Chicken Nuggets",category:"chicken",price:160,stock:100,image:"https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=900&q=85",description:"Crispy bite-sized chicken nuggets"},
  {id:8,name:"Chicken Hot Dog",category:"chicken",price:180,stock:100,image:"https://images.unsplash.com/photo-1612392062631-94dd858cba88?auto=format&fit=crop&w=900&q=85",description:"Juicy chicken hot dog with sauces"},
  {id:9,name:"Veg Cheese Burger",category:"burgers",price:170,stock:100,image:"https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=900&q=85",description:"Veg patty with cheese and fresh toppings"},
  {id:10,name:"Chicken Burger",category:"burgers",price:210,stock:100,image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",description:"Crispy chicken burger with cheese"},
  {id:11,name:"Veg Sandwich",category:"snacks",price:120,stock:100,image:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=85",description:"Toasted vegetable and cheese sandwich"},
  {id:12,name:"Cheese Pizza Slice",category:"pizza",price:150,stock:100,image:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=85",description:"Hot cheesy pizza slice"},
  {id:13,name:"Chicken Pizza Slice",category:"pizza",price:190,stock:100,image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=85",description:"Chicken topped pizza slice"},
  {id:14,name:"Samosa",category:"snacks",price:50,stock:100,image:"https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85",description:"Crispy samosa with spicy filling"},
  {id:15,name:"Veg Puff",category:"snacks",price:60,stock:100,image:"https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=85",description:"Flaky vegetable puff"},
  {id:16,name:"Chicken Puff",category:"chicken",price:80,stock:100,image:"https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=85",description:"Flaky chicken puff"},
  {id:17,name:"Coke",category:"drinks",price:70,stock:100,image:"https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=900&q=85",description:"Chilled Coca-Cola"},
  {id:18,name:"Pepsi",category:"drinks",price:70,stock:100,image:"https://images.unsplash.com/photo-1629203849820-fdd70d49c38e?auto=format&fit=crop&w=900&q=85",description:"Chilled Pepsi"},
  {id:19,name:"Fresh Lime Soda",category:"drinks",price:90,stock:100,image:"https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=85",description:"Refreshing lime soda"},
  {id:20,name:"Cold Coffee",category:"drinks",price:120,stock:100,image:"https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=85",description:"Chilled creamy cold coffee"},
  {id:21,name:"Chocolate Milkshake",category:"drinks",price:150,stock:100,image:"https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=85",description:"Rich chocolate milkshake"},
  {id:22,name:"Mineral Water",category:"drinks",price:40,stock:100,image:"https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=900&q=85",description:"Chilled mineral water"},
  {id:23,name:"Ice Cream Cup",category:"desserts",price:100,stock:100,image:"https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=85",description:"Creamy chilled ice cream"},
  {id:24,name:"Chocolate Brownie",category:"desserts",price:130,stock:100,image:"https://images.unsplash.com/photo-1606313564200-e75d5e30476f?auto=format&fit=crop&w=900&q=85",description:"Warm fudgy chocolate brownie"}
];


// STORAGE
// Remove legacy canteen cart data so old foods cannot reappear.
localStorage.removeItem("canteenCart");
localStorage.removeItem("canteenOrders");
localStorage.removeItem("canteenFavorites");
localStorage.removeItem("canteenCoupon");

let cart = JSON.parse(localStorage.getItem("theatreCart")) || [];
cart = cart.filter(item => foods.some(f => f.id === item.id));
localStorage.setItem("theatreCart", JSON.stringify(cart));

let orders =
    JSON.parse(localStorage.getItem("theatreOrders")) || [];

let currentUser = JSON.parse(localStorage.getItem("theatreCustomer")) || null;
if (currentUser && !currentUser.name && currentUser.customerName) currentUser.name=currentUser.customerName;
if (currentUser && !currentUser.customerId && currentUser.studentId) currentUser.customerId=currentUser.studentId;

let latestOrder =
    JSON.parse(localStorage.getItem("latestOrder")) || null;

let favorites = JSON.parse(localStorage.getItem("theatreFavorites")) || [];
let appliedCoupon = JSON.parse(localStorage.getItem("theatreCoupon")) || null;


// PAGE

function showPage(pageName) {

    document.querySelectorAll(".page")
        .forEach(page => page.classList.remove("active"));

    const page = document.getElementById(pageName);

    if (page) {
        page.classList.add("active");
    }

    if (pageName === "menu") displayMenu();

    if (pageName === "cart") displayCart();

    if (pageName === "orders") displayOrders();

    if (pageName === "bill") displayBill();

    if (pageName === "kitchen") displayKitchen();

    if (pageName === "admin") displayAdmin();

    if (pageName === "history") showMyOrderHistory();

    if (pageName === "reports") displayReports();

    if (pageName === "qr") generateSiteQR();
    if (pageName === "coupon") displayCoupon();
    if (pageName === "favorites") displayFavorites();
    if (pageName === "rating") displayRatings();
    if (pageName === "contact") displayContact();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// MENU

function displayMenu() {

    const grid = document.getElementById("menuGrid");

    const search =
        document.getElementById("searchInput")
        .value.toLowerCase();

    const category =
        document.getElementById("categoryFilter").value;


    const filtered = foods.filter(food => {

        return (
            food.name.toLowerCase().includes(search) &&
            (
                category === "all" ||
                food.category === category
            )
        );

    });


    grid.innerHTML = filtered.map(food => {

        const available = food.stock > 0;

        return `

        <div class="food-card">

            <img
                src="${food.image}"
                class="food-img"
                alt="${food.name}"
                onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=900&q=85'"
            >

            <div class="food-info">

                <div class="food-title-row"><h3>${food.name}</h3><button class="favorite-btn ${favorites.includes(food.id) ? "active" : ""}" onclick="toggleFavorite(${food.id})" title="Favourite">${favorites.includes(food.id) ? "♥" : "♡"}</button></div>

                <p>${food.description}</p>

                <span class="${available ? "stock" : "stock out-stock"}">
                    ${available
                        ? `● ${food.stock} available`
                        : "● Out of Stock"}
                </span>

                <div class="food-bottom">

                    <span class="price">
                        ₹${food.price}
                    </span>

                    <button
                        class="add-btn"
                        ${!available ? "disabled" : ""}
                        onclick="addToCart(${food.id})"
                    >
                        ${available ? "+ Add" : "Unavailable"}
                    </button>

                </div>

            </div>

        </div>

        `;

    }).join("");

}


// CART

function addToCart(id) {

    const food =
        foods.find(item => item.id === id);

    if (!food || food.stock <= 0) return;


    const existing =
        cart.find(item => item.id === id);


    if (existing) {

        if (existing.quantity >= food.stock) {

            alert("Maximum available stock reached.");

            return;
        }

        existing.quantity++;

    } else {

        cart.push({
            ...food,
            quantity: 1
        });

    }


    saveCart();

    updateCartCount();

    alert(`${food.name} added to cart!`);

}


function saveCart() {

    localStorage.setItem(
        "theatreCart",
        JSON.stringify(cart)
    );

}


function updateCartCount() {

    const count =
        cart.reduce(
            (sum,item) => sum + item.quantity,
            0
        );

    document.getElementById("cartCount")
        .textContent = count;

}


// DISPLAY CART

function displayCart() {

    const container =
        document.getElementById("cartItems");


    if (cart.length === 0) {

        container.innerHTML = `

            <div class="cart-item">

                <div>
                    <h3>Your cart is empty 🛒</h3>
                    <p>Add some delicious food.</p>
                </div>

                <button
                    class="primary-btn"
                    onclick="showPage('menu')"
                >
                    Browse Menu
                </button>

            </div>

        `;

        document.getElementById("subtotal").textContent = "₹0";
        document.getElementById("discount").textContent = "₹0";
        document.getElementById("gst").textContent = "₹0";
        document.getElementById("total").textContent = "₹0";

        return;
    }


    container.innerHTML = cart.map(item => `

        <div class="cart-item">

            <div class="cart-item-info">

                <img
                    src="${item.image}"
                    class="cart-item-img"
                >

                <div>

                    <h3>${item.name}</h3>

                    <p>₹${item.price} each</p>

                </div>

            </div>


            <div class="quantity">

                <button
                    onclick="changeQuantity(${item.id},-1)"
                >
                    −
                </button>

                <strong>
                    ${item.quantity}
                </strong>

                <button
                    onclick="changeQuantity(${item.id},1)"
                >
                    +
                </button>

            </div>


            <strong>
                ₹${item.price * item.quantity}
            </strong>


            <button
                onclick="removeFromCart(${item.id})"
                style="border:none;background:none;cursor:pointer;font-size:20px"
            >
                🗑️
            </button>

        </div>

    `).join("");


    calculateTotal();

}


function changeQuantity(id, change) {

    const item =
        cart.find(item => item.id === id);

    if (!item) return;


    const food =
        foods.find(food => food.id === id);


    item.quantity += change;


    if (item.quantity > food.stock) {

        item.quantity = food.stock;

        alert("No more stock available.");

    }


    if (item.quantity <= 0) {

        cart =
            cart.filter(item => item.id !== id);

    }


    saveCart();

    updateCartCount();

    displayCart();

}


function removeFromCart(id) {

    cart =
        cart.filter(item => item.id !== id);

    saveCart();

    updateCartCount();

    displayCart();

}


// TOTAL

function getTotals() {

    const subtotal =
        cart.reduce(
            (sum,item) =>
                sum + item.price * item.quantity,
            0
        );


    let discount = subtotal >= 300 ? Math.round(subtotal * 0.10) : 0;

    if (appliedCoupon) {
        if (appliedCoupon.code === "WELCOME15") {
            discount += Math.round(subtotal * 0.15);
        } else if (appliedCoupon.code === "DAILY20" && subtotal >= 100) {
            discount += 20;
        }
    }
    discount = Math.min(discount, subtotal);


    const taxable =
        subtotal - discount;


    const gst =
        Math.round(taxable * 0.05);


    const serviceFee =
        subtotal > 0 ? 2 : 0;


    const total =
        taxable + gst + serviceFee;


    return {
        subtotal,
        discount,
        gst,
        serviceFee,
        total
    };

}


function calculateTotal() {

    const totals = getTotals();


    document.getElementById("subtotal")
        .textContent = `₹${totals.subtotal}`;

    document.getElementById("discount")
        .textContent = `-₹${totals.discount}`;

    document.getElementById("gst")
        .textContent = `₹${totals.gst}`;

    document.getElementById("total")
        .textContent = `₹${totals.total}`;

}


// LOGIN

function openLogin() {

    document.getElementById("loginModal")
        .classList.add("show");

}


function closeLogin() {

    document.getElementById("loginModal")
        .classList.remove("show");

}


function login() {
    const name = document.getElementById("customerName").value.trim();
    const id = document.getElementById("customerId").value.trim();
    const details = document.getElementById("customerDetails").value.trim();
    if (!name || !id || !details) { alert("Please fill Customer Name, Customer ID and Mobile Number / Details."); return; }
    currentUser = { name, customerId:id, customerDetails:details };
    localStorage.setItem("theatreCustomer", JSON.stringify(currentUser));
    document.getElementById("userDisplay").textContent = name;
    closeLogin();
    alert(`Welcome ${name}!`);
}


// CHECKOUT

function checkout() {
    if (!cart.length) { alert("Your cart is empty."); return; }
    if (!currentUser) { openLogin(); alert("Please login before checkout."); return; }
    document.getElementById("checkoutModal").classList.add("show");
    buildSeatGrid();
    updateCheckoutConfirmation();
}


function closeCheckout() {

    document.getElementById("checkoutModal")
        .classList.remove("show");

}


// SEAT SELECTION — 100 seats (A1-J10)
let selectedSeat = localStorage.getItem("theatreSelectedSeat") || "";
function buildSeatGrid() {
    const grid = document.getElementById("seatGrid");
    if (!grid) return;
    const booked = new Set(orders.flatMap(o => o.seat ? [o.seat] : []));
    let html = "";
    for (let r=0; r<10; r++) {
        const row=String.fromCharCode(65+r);
        for (let n=1; n<=10; n++) {
            const seat=row+n, isBooked=booked.has(seat), isSelected=selectedSeat===seat;
            html += `<button type="button" class="seat-btn ${isBooked?'booked':''} ${isSelected?'selected':''}" ${isBooked?'disabled':''} onclick="selectSeat('${seat}')" title="Seat ${seat}">${seat}</button>`;
        }
    }
    grid.innerHTML=html;
    const label=document.getElementById("selectedSeatLabel"); if(label) label.textContent=selectedSeat || "None";
    const hidden=document.getElementById("seatNumber"); if(hidden) hidden.value=selectedSeat;
    const preview=document.getElementById("deliveryPreview"); if(preview) preview.textContent=selectedSeat || "your selected seat";
}
function selectSeat(seat) {
    selectedSeat=seat; localStorage.setItem("theatreSelectedSeat", seat); buildSeatGrid(); updateCheckoutConfirmation();
}
function updateCheckoutConfirmation() {
    const customer=document.getElementById("confirmCustomer");
    const theatre=document.getElementById("confirmTheatre");
    const show=document.getElementById("confirmShow");
    const seat=document.getElementById("confirmSeat");
    const total=document.getElementById("confirmTotal");
    if(customer) customer.textContent=currentUser ? `${currentUser.name} (${currentUser.customerId || '-'})` : "-";
    if(theatre) theatre.textContent=document.getElementById("theatreSelect")?.value || "-";
    if(show) show.textContent=`${document.getElementById("movieSelect")?.value || '-'} • ${document.getElementById("showtimeSelect")?.value || '-'}`;
    if(seat) seat.textContent=`${document.getElementById("screenSelect")?.value || '-'} • ${selectedSeat || 'Select a seat'}`;
    if(total) total.textContent=`₹${getTotals().total}`;
    const upiBtnAmount=document.getElementById("upiButtonAmount"); if(upiBtnAmount) upiBtnAmount.textContent=getTotals().total;
}

// DEMO UPI PAYMENT
let demoUpiPaid = false;
let demoUpiTransactionId = "";
const DEMO_UPI_ID = "smarttheatre@upi";

function openUpiPayment() {
    const total = getTotals().total;
    const modal = document.getElementById("upiPaymentModal");
    if (!modal) return;
    const amountEl = document.getElementById("upiPayAmount");
    const buttonAmount = document.getElementById("upiButtonAmount");
    if (amountEl) amountEl.textContent = `₹${total}`;
    if (buttonAmount) buttonAmount.textContent = total;
    const idEl = document.getElementById("demoUpiId");
    if (idEl) idEl.textContent = DEMO_UPI_ID;
    const qr = document.getElementById("upiQrCode");
    if (qr) {
        qr.innerHTML = "";
        if (typeof QRCode !== "undefined") {
            const upiUrl = `upi://pay?pa=${encodeURIComponent(DEMO_UPI_ID)}&pn=Smart%20Theatre&am=${total}&cu=INR`;
            new QRCode(qr, {text: upiUrl, width:170, height:170});
        } else {
            qr.textContent = "QR library unavailable";
        }
    }
    modal.classList.add("show");
}

function closeUpiPayment() {
    document.getElementById("upiPaymentModal")?.classList.remove("show");
}

function simulateUpiPayment() {
    const total = getTotals().total;
    demoUpiPaid = true;
    demoUpiTransactionId = "UPI-DEMO-" + Date.now().toString().slice(-8);
    const badge = document.getElementById("upiPaidBadge");
    if (badge) { badge.hidden = false; badge.textContent = `✅ UPI Paid • ${demoUpiTransactionId}`; }
    closeUpiPayment();
    updateCheckoutConfirmation();
    alert(`Demo UPI payment successful!\nAmount: ₹${total}\nTransaction ID: ${demoUpiTransactionId}`);
}

// PLACE ORDER

function placeOrder() {
    const paymentEl=document.querySelector('input[name="payment"]:checked');
    if (!paymentEl) { alert("Please select a payment method."); return; }
    if (!selectedSeat) { alert("Please select your theatre seat before confirming the order."); return; }
    const payment=paymentEl.value;
    if (payment === "UPI" && !demoUpiPaid) {
        openUpiPayment();
        alert("Please complete the demo UPI payment first.");
        return;
    }
    const totals=getTotals();
    const token="ST"+String(Math.floor(100+Math.random()*900));
    const invoice="INV-"+Date.now().toString().slice(-7);
    const theatre=document.getElementById("theatreSelect").value;
    const movie=document.getElementById("movieSelect").value;
    const showtime=document.getElementById("showtimeSelect").value;
    const screen=document.getElementById("screenSelect").value;
    const order={
        id:Date.now(), token, invoice, customer:currentUser, student:currentUser,
        theatre, movie, showtime, screen, seat:selectedSeat,
        delivery:{recipientName:currentUser.name,recipientId:currentUser.customerId,seat:selectedSeat,instruction:`Deliver snacks to seat ${selectedSeat}`},
        items:cart.map(item=>({id:item.id,name:item.name,quantity:item.quantity,price:item.price})),
        subtotal:totals.subtotal,discount:totals.discount,gst:totals.gst,serviceFee:totals.serviceFee,total:totals.total,
        coupon:appliedCoupon?.code || "", payment, paymentStatus:payment==="UPI"?"Paid":"Pay at Counter", transactionId:payment==="UPI"?demoUpiTransactionId:"", status:"Placed",
        time:new Date().toLocaleString(), estimatedTime:"10–15 minutes"
    };
    orders.unshift(order);
    order.items.forEach(item=>{const food=foods.find(f=>f.id===item.id);if(food) food.stock=Math.max(0,food.stock-item.quantity);});
    latestOrder=order;
    localStorage.setItem("theatreOrders",JSON.stringify(orders));
    localStorage.setItem("latestOrder",JSON.stringify(latestOrder));
    cart=[]; appliedCoupon=null; demoUpiPaid=false; demoUpiTransactionId=""; localStorage.removeItem("theatreCoupon"); saveCart(); updateCartCount();
    closeCheckout();
    document.getElementById("tokenNumber").textContent=token;
    document.getElementById("successModal").classList.add("show");
}


// SUCCESS

function closeSuccess() {

    document.getElementById("successModal")
        .classList.remove("show");

    showPage("bill");

}


// ORDERS

function displayOrders() {

    const container =
        document.getElementById("ordersList");


    if (orders.length === 0) {

        container.innerHTML = `

            <div class="order-card">

                <h3>No orders yet.</h3>

                <p>
                    Your orders will appear here.
                </p>

            </div>

        `;

        return;
    }


    container.innerHTML =
        orders.map(order => {

            let progress = 20;

            if (order.status === "Preparing")
                progress = 50;

            if (order.status === "Ready")
                progress = 80;

            if (order.status === "Completed")
                progress = 100;


            return `

            <div class="order-card">

                <div class="order-top">

                    <div>

                        <h3>
                            🎫 ${order.token}
                        </h3>

                        <small>${order.time}</small><p class="order-location">🎬 ${order.movie || "Movie"} • 🕒 ${order.showtime || "-"} • 🎞️ ${order.screen || "-"} • 💺 ${order.seat || "-"}</p>

                    </div>

                    <span class="status">
                        ${order.status}
                    </span>

                </div>


                ${order.items.map(item => `

                    <p>
                        🍽️ ${item.name}
                        × ${item.quantity}
                        — ₹${item.price * item.quantity}
                    </p>

                `).join("")}


                <hr style="margin:15px 0">


                <p>
                    Payment:
                    <b>${order.paymentStatus}</b>
                </p>


                <strong>
                    Total: ₹${order.total}
                </strong>


                <div class="progress">

                    <div
                        class="progress-bar"
                        style="width:${progress}%"
                    ></div>

                </div>


                <br>


                ${order.status === "Completed" ? `<button class="secondary-btn" onclick="showPage('rating')">⭐ Rate Food</button>` : ""}

                <button
                    class="primary-btn"
                    onclick="openOrderBill(${order.id})"
                >
                    🧾 View Bill
                </button>

            </div>

            `;

        }).join("");

}


// OPEN SPECIFIC BILL

function openOrderBill(id) {

    latestOrder =
        orders.find(order => order.id === id);

    localStorage.setItem(
        "latestOrder",
        JSON.stringify(latestOrder)
    );

    showPage("bill");

}


// BILL

function displayBill() {
    const container=document.getElementById("billContent");
    if(!latestOrder){container.innerHTML=`<div class="bill"><h2>No bill available.</h2><p>Place an order to generate a bill.</p></div>`;return;}
    const order=latestOrder, customer=order.customer||order.student||{};
    container.innerHTML=`<div class="bill">
      <div class="bill-header">
        <h1>🎬 SMART THEATRE</h1>
        <p>Theatre Food & Snacks</p>
        <p>${order.theatre||"Madurai, Tamil Nadu"}</p>
        <br><h2>INVOICE / BILL</h2>
      </div>
      <div class="bill-meta"><div><b>Invoice No:</b> ${order.invoice}<br><b>Order Token:</b> ${order.token}<br><b>Date:</b> ${order.time}</div>
      <div><b>Customer:</b> ${customer.name||"-"}<br><b>Customer ID:</b> ${customer.customerId||"-"}<br><b>Mobile / Details:</b> ${customer.customerDetails||"-"}</div></div>
      <div class="delivery-bill-box"><h3>🚚 SEAT DELIVERY DETAILS</h3><p><b>Theatre:</b> ${order.theatre||"-"}</p><p><b>Movie:</b> ${order.movie||"-"}</p><p><b>Show Time:</b> ${order.showtime||"-"}</p><p><b>Screen:</b> ${order.screen||"-"}</p><p><b>Seat:</b> <strong>${order.seat||"-"}</strong></p><p><b>Deliver To:</b> ${customer.name||"-"} (${customer.customerId||"-"})</p><p class="delivery-highlight">🍿 Deliver ordered snacks directly to Seat ${order.seat||"-"}</p></div>
      <table class="bill-table"><thead><tr><th>#</th><th>Food Item</th><th>Qty</th><th>Price</th><th>Amount</th></tr></thead><tbody>${order.items.map((item,index)=>`<tr><td>${index+1}</td><td>${item.name}</td><td>${item.quantity}</td><td>₹${item.price}</td><td>₹${item.price*item.quantity}</td></tr>`).join("")}</tbody></table>
      <div class="bill-total"><div><span>Subtotal</span><strong>₹${order.subtotal}</strong></div><div><span>Discount</span><strong>-₹${order.discount}</strong></div><div><span>GST (5%)</span><strong>₹${order.gst}</strong></div><div><span>Service Fee</span><strong>₹${order.serviceFee}</strong></div><div class="grand-total"><span>Grand Total</span><strong>₹${order.total}</strong></div></div>
      <div style="margin-top:20px"><p><b>Payment Method:</b> ${order.payment}</p><p><b>Payment Status:</b> ${order.paymentStatus}</p><p><b>Order Status:</b> ${order.status}</p><p><b>Estimated Preparation:</b> ${order.estimatedTime}</p>${order.coupon?`<p><b>Coupon Applied:</b> ${order.coupon}</p>`:""}</div>
      <div class="bill-contact"><b>📞 Theatre Food Support:</b> +91 98765 43210</div><div class="bill-thanks"><h3>Thank You! 🙏</h3><p>Please keep your token. Delivery staff will bring your snacks to your seat.</p><p>Smart Theatre — Fast • Simple • Smart</p></div>
    </div>`;
}


// PRINT BILL

function printBill() {

    if (!latestOrder) {

        alert("No bill available.");

        return;
    }

    // Download the current bill directly as a PDF.
    if (!window.jspdf || !window.jspdf.jsPDF) {
        alert("PDF library could not be loaded. Please check your internet connection and try again.");
        return;
    }

    const { jsPDF } = window.jspdf;
    const order = latestOrder;
    const doc = new jsPDF();
    let y = 18;

    const money = value => `Rs. ${Number(value || 0).toFixed(2)}`;
    const safe = value => String(value ?? "-");

    doc.setFontSize(18);
    doc.setFont(undefined, "bold");
    doc.text("SMART THEATRE", 105, y, { align: "center" });
    y += 8;

    doc.setFontSize(11);
    doc.setFont(undefined, "normal");
    doc.text("Theatre Food & Snacks", 105, y, { align: "center" });
    y += 6;
    doc.text(safe(order.theatre || "Madurai, Tamil Nadu"), 105, y, { align: "center" });
    y += 10;

    doc.setFontSize(14);
    doc.setFont(undefined, "bold");
    doc.text("INVOICE / BILL", 105, y, { align: "center" });
    y += 10;

    doc.setFontSize(10);
    doc.setFont(undefined, "normal");
    doc.text(`Invoice No: ${safe(order.invoice)}`, 15, y);
    doc.text(`Order Token: ${safe(order.token)}`, 115, y);
    y += 6;
    // Use the exact date/time at the moment the user clicks Print Bill.
    const generatedAt = new Date();
    const pad = value => String(value).padStart(2, "0");
    const generatedDate = `${pad(generatedAt.getDate())}/${pad(generatedAt.getMonth() + 1)}/${generatedAt.getFullYear()}`;
    const generatedTime = `${pad(generatedAt.getHours())}:${pad(generatedAt.getMinutes())}:${pad(generatedAt.getSeconds())}`;
    const generatedDateTime = `${generatedDate} ${generatedTime}`;

    doc.text(`Order Date: ${safe(order.time)}`, 15, y);
    y += 6;
    doc.text(`Generated Date: ${generatedDate}`, 15, y);
    doc.text(`Generated Time: ${generatedTime}`, 115, y);
    y += 6;
    doc.text(`Customer: ${safe((order.customer||order.student)?.name)}`, 15, y);
    y += 6;
    doc.text(`Customer ID: ${safe((order.customer||order.student)?.customerId || (order.customer||order.student)?.studentId)}`, 15, y);
    y += 6;
    doc.text(`Theatre: ${safe(order.theatre)}`, 15, y);
    y += 6;
    doc.text(`Movie: ${safe(order.movie)}  |  Show: ${safe(order.showtime)}`, 15, y);
    y += 6;
    doc.text(`Screen: ${safe(order.screen)}  |  SEAT: ${safe(order.seat)}`, 15, y);
    y += 6;
    doc.text(`DELIVER SNACKS TO SEAT: ${safe(order.seat)}`, 15, y);
    y += 9;

    doc.setFont(undefined, "bold");
    doc.text("#", 15, y);
    doc.text("Food Item", 28, y);
    doc.text("Qty", 125, y);
    doc.text("Price", 145, y);
    doc.text("Amount", 175, y);
    y += 5;
    doc.line(15, y, 195, y);
    y += 7;

    doc.setFont(undefined, "normal");
    order.items.forEach((item, index) => {
        const amount = Number(item.price || 0) * Number(item.quantity || 0);
        const name = safe(item.name);
        const lines = doc.splitTextToSize(name, 88);
        doc.text(String(index + 1), 15, y);
        doc.text(lines, 28, y);
        doc.text(String(item.quantity || 0), 125, y);
        doc.text(money(item.price), 145, y);
        doc.text(money(amount), 175, y);
        y += Math.max(6, lines.length * 5);

        if (y > 270) {
            doc.addPage();
            y = 18;
        }
    });

    y += 3;
    doc.line(120, y, 195, y);
    y += 7;
    doc.text("Subtotal", 130, y);
    doc.text(money(order.subtotal), 175, y);
    y += 6;
    doc.text("Discount", 130, y);
    doc.text(`- ${money(order.discount)}`, 175, y);
    y += 6;
    doc.text("GST (5%)", 130, y);
    doc.text(money(order.gst), 175, y);
    y += 6;
    doc.text("Service Fee", 130, y);
    doc.text(money(order.serviceFee), 175, y);
    y += 7;
    doc.setFont(undefined, "bold");
    doc.text("Grand Total", 130, y);
    doc.text(money(order.total), 175, y);
    y += 10;

    doc.setFont(undefined, "normal");
    doc.text(`Payment Method: ${safe(order.payment)}`, 15, y);
    y += 6;
    doc.text(`Payment Status: ${safe(order.paymentStatus)}`, 15, y);
    y += 6;
    doc.text(`Order Status: ${safe(order.status)}`, 15, y);
    y += 6;
    doc.text(`Estimated Preparation: ${safe(order.estimatedTime)}`, 15, y);
    y += 6;
    doc.text(`Delivery Customer: ${safe((order.customer||order.student)?.name)} (${safe((order.customer||order.student)?.customerId || (order.customer||order.student)?.studentId)})`, 15, y);
    y += 12;

    doc.setFontSize(12);
    doc.setFont(undefined, "bold");
    doc.text("Thank You!", 105, y, { align: "center" });

    const invoiceName = safe(order.invoice).replace(/[^a-z0-9_-]/gi, "_");
    const fileDate = `${generatedAt.getFullYear()}-${pad(generatedAt.getMonth() + 1)}-${pad(generatedAt.getDate())}`;
    doc.save(`Smart_Theatre_Bill_${invoiceName}_${fileDate}.pdf`);

}


// KITCHEN

function displayKitchen() {

    const container =
        document.getElementById("kitchenOrders");


    const pending =
        orders.filter(
            order => order.status === "Placed"
        ).length;


    const preparing =
        orders.filter(
            order => order.status === "Preparing"
        ).length;


    const ready =
        orders.filter(
            order => order.status === "Ready"
        ).length;


    const completed =
        orders.filter(
            order => order.status === "Completed"
        ).length;


    document.getElementById("pendingCount")
        .textContent = pending;

    document.getElementById("preparingCount")
        .textContent = preparing;

    document.getElementById("readyCount")
        .textContent = ready;

    document.getElementById("completedCount")
        .textContent = completed;


    if (orders.length === 0) {

        container.innerHTML = `

            <div class="order-card">

                <h3>No orders available.</h3>

            </div>

        `;

        return;
    }


    container.innerHTML =
        orders.map(order => `

        <div class="kitchen-card">

            <div class="kitchen-header">

                <div>

                    <h3>
                        🎫 ${order.token}
                    </h3>

                    <p>
                        Student:
                        ${order.student.name}
                    </p>

                </div>

                <span class="status">
                    ${order.status}
                </span>

            </div>


            <div class="kitchen-items">

                ${order.items.map(item => `

                    <div>
                        🍽️ ${item.name}
                        × ${item.quantity}
                    </div>

                `).join("")}

            </div>


            <strong>
                Total: ₹${order.total}
            </strong>


            <br><br>


            ${getKitchenButton(order)}

        </div>

        `).join("");

}


function getKitchenButton(order) {

    if (order.status === "Placed") {

        return `

            <button
                class="status-btn"
                onclick="
                    updateOrderStatus(
                        ${order.id},
                        'Preparing'
                    )
                "
            >
                🍳 Start Preparing
            </button>

        `;

    }


    if (order.status === "Preparing") {

        return `

            <button
                class="status-btn"
                onclick="
                    updateOrderStatus(
                        ${order.id},
                        'Ready'
                    )
                "
            >
                ✅ Mark Ready
            </button>

        `;

    }


    if (order.status === "Ready") {

        return `

            <button
                class="status-btn"
                onclick="
                    updateOrderStatus(
                        ${order.id},
                        'Completed'
                    )
                "
            >
                🎉 Complete Order
            </button>

        `;

    }


    return `<b>Completed ✓</b>`;

}


function updateOrderStatus(id,status) {

    const order =
        orders.find(order => order.id === id);


    if (!order) return;


    order.status = status;


    localStorage.setItem(
        "theatreOrders",
        JSON.stringify(orders)
    );


    if (
        latestOrder &&
        latestOrder.id === id
    ) {

        latestOrder.status = status;

        localStorage.setItem(
            "latestOrder",
            JSON.stringify(latestOrder)
        );

    }


    displayKitchen();

}


// ADMIN

function displayAdmin() {

    const sales =
        orders.reduce(
            (sum,order) =>
                sum + order.total,
            0
        );


    const uniqueCustomers =
        new Set(
            orders.map(
                order => order.student.studentId
            )
        ).size;


    document.getElementById("adminOrders")
        .textContent = orders.length;


    document.getElementById("adminSales")
        .textContent = `₹${sales}`;


    document.getElementById("adminItems")
        .textContent = foods.length;


    document.getElementById("adminCustomers")
        .textContent = uniqueCustomers;


    const stock =
        document.getElementById("stockList");


    stock.innerHTML =
        foods.slice(0,10).map(food => `

            <div class="stock-row">

                <span>
                    ${food.name}
                </span>

                <strong>
                    ${food.stock}
                </strong>

            </div>

        `).join("");

}


// ============================================================
// COUPONS, FAVOURITES, RATINGS & CONTACT
// ============================================================
function isFirstOrder() { return !currentUser || getUserOrderHistory().length === 0; }

function displayCoupon() {
    const status = document.getElementById("couponStatus");
    if (!status) return;
    status.textContent = appliedCoupon ? `Applied: ${appliedCoupon.code}` : "No coupon applied. Use WELCOME15 for your first order or DAILY20 for today's offer.";
}

function applyCoupon() {
    const input = document.getElementById("couponInput");
    const code = (input?.value || "").trim().toUpperCase();
    if (!code) return alert("Enter a coupon code.");
    if (code === "WELCOME15" && !isFirstOrder()) return alert("WELCOME15 is only for your first order.");
    if (code === "DAILY20") { appliedCoupon = { code }; }
    else if (code === "WELCOME15") { appliedCoupon = { code }; }
    else return alert("Invalid coupon code.");
    localStorage.setItem("theatreCoupon", JSON.stringify(appliedCoupon));
    displayCoupon();
    alert(`${code} applied successfully!`);
    if (cart.length) displayCart();
}

function removeCoupon() {
    appliedCoupon = null;
    localStorage.removeItem("theatreCoupon");
    displayCoupon();
    if (cart.length) displayCart();
}

function toggleFavorite(id) {
    favorites = favorites.includes(id) ? favorites.filter(x => x !== id) : [...favorites, id];
    localStorage.setItem("theatreFavorites", JSON.stringify(favorites));
    displayMenu();
    if (document.getElementById("favorites")?.classList.contains("active")) displayFavorites();
}

function displayFavorites() {
    const grid = document.getElementById("favoritesGrid");
    if (!grid) return;
    const list = foods.filter(f => favorites.includes(f.id));
    if (!list.length) { grid.innerHTML = `<div class="option-card"><h3>No favourites yet ❤️</h3><p>Tap the heart on any food item to save it here.</p><button class="primary-btn" onclick="showPage('menu')">Browse Menu</button></div>`; return; }
    grid.innerHTML = list.map(food => `
        <div class="food-card"><img src="${food.image}" class="food-img" alt="${food.name}" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=900&q=85'"><div class="food-info">
        <div class="food-title-row"><h3>${food.name}</h3><button class="favorite-btn active" onclick="toggleFavorite(${food.id})">♥</button></div>
        <p>${food.description}</p><span class="price">₹${food.price}</span><div class="food-bottom"><button class="add-btn" onclick="addToCart(${food.id})">+ Add</button></div></div></div>`).join("");
}

function displayRatings() {
    const box = document.getElementById("ratingList");
    if (!box) return;
    const completed = getUserOrderHistory().filter(o => o.status === "Completed");
    if (!completed.length) { box.innerHTML = `<div class="option-card"><h3>⭐ No completed orders yet</h3><p>Rating will appear here after the kitchen marks an order as Completed.</p></div>`; return; }
    box.innerHTML = completed.map(o => `<div class="rating-card"><div><b>🎫 ${o.token}</b><small>${o.time}</small></div>
        <p>${(o.items||[]).map(i => i.name).join(", ")}</p>
        <div class="rating-stars">${[1,2,3,4,5].map(n => `<button onclick="rateOrder(${o.id},${n})" class="star ${Number(o.rating||0)>=n?'selected':''}">★</button>`).join("")}</div>
        <textarea id="review-${o.id}" placeholder="Write a short review...">${o.review || ""}</textarea>
        <button class="primary-btn" onclick="saveReview(${o.id})">Save Review</button></div>`).join("");
}

function rateOrder(id, rating) {
    const order = orders.find(o => o.id === id); if (!order) return;
    order.rating = rating; localStorage.setItem("theatreOrders", JSON.stringify(orders));
    if (latestOrder?.id === id) { latestOrder.rating = rating; localStorage.setItem("latestOrder", JSON.stringify(latestOrder)); }
    displayRatings();
}
function saveReview(id) {
    const order = orders.find(o => o.id === id); if (!order) return;
    const el = document.getElementById(`review-${id}`); order.review = el ? el.value.trim() : "";
    localStorage.setItem("theatreOrders", JSON.stringify(orders));
    alert("Thanks! Your food review has been saved ⭐");
}
function displayContact() { /* Contact is static and also printed on bills. */ }


function attachCheckoutListeners() {
    ["theatreSelect","movieSelect","showtimeSelect","screenSelect"].forEach(id=>document.getElementById(id)?.addEventListener("change",updateCheckoutConfirmation));
    document.querySelectorAll('input[name="payment"]').forEach(el=>el.addEventListener("change",()=>{ if(el.checked && el.value!=="UPI"){ demoUpiPaid=false; demoUpiTransactionId=""; } updateCheckoutConfirmation(); }));
}

// INITIALIZE

document.addEventListener(
    "DOMContentLoaded",
    function() {

        updateCartCount();

        displayMenu();
        attachCheckoutListeners();
        buildSeatGrid();

        displayAdmin();

        if (currentUser) {

            document.getElementById("userDisplay")
                .textContent = currentUser.name;

        }

    }
);

// ============================================================
// EXTRA OPTIONS ADDED: ORDER HISTORY, REPORTS, PDF, SITE QR
// Existing functions above are intentionally left unchanged.
// ============================================================

function getUserOrderHistory() {
    const user = currentUser;
    if (!user || !user.studentId) return [];
    return orders.filter(order => order.student && order.student.studentId === user.studentId);
}

function formatHistoryDate(order) {
    if (!order || !order.time) return "";
    const d = new Date(order.time);
    return isNaN(d.getTime()) ? String(order.time) : d.toLocaleString();
}

function renderHistoryOrders(list, title) {
    const box = document.getElementById("historyList");
    if (!box) return;
    if (!list.length) {
        box.innerHTML = `<div class="empty-state"><h3>${title}</h3><p>No orders found.</p></div>`;
        return;
    }
    box.innerHTML = `<div class="history-grid">${list.slice().reverse().map(order => `
        <div class="history-card">
            <div class="history-head"><strong>Order #${order.id || "-"}</strong><span>${formatHistoryDate(order)}</span></div>
            <p><b>Customer:</b> ${(order.customer||order.student)?.name || "-"} (${(order.customer||order.student)?.customerId || (order.customer||order.student)?.studentId || "-"})</p>
            <p><b>Status:</b> ${order.status || "-"}</p>
            <p><b>Payment:</b> ${order.paymentStatus || order.payment || "-"}</p>
            <div class="history-items">${(order.items || []).map(i => `<div>${i.name} × ${i.quantity} <span>₹${((i.price || 0) * (i.quantity || 0)).toFixed(2)}</span></div>`).join("")}</div>
            <div class="history-total"><b>Total</b><strong>₹${Number(order.total || 0).toFixed(2)}</strong></div>
        </div>`).join("")}</div>`;
}

function showMyOrderHistory() {
    renderHistoryOrders(getUserOrderHistory(), "My Order History");
}

function showAllUsersOrders() {
    renderHistoryOrders(orders, "All Users Orders (Admin View)");
}

function displayReports() {
    const totalOrders = orders.length;
    const totalSales = orders.reduce((sum, o) => sum + Number(o.total || 0), 0);
    const students = new Set(orders.map(o => o.student?.studentId).filter(Boolean)).size;
    const avg = totalOrders ? totalSales / totalOrders : 0;
    const set = (id, value) => { const el = document.getElementById(id); if (el) el.textContent = value; };
    set("reportOrders", totalOrders);
    set("reportSales", `₹${totalSales.toFixed(2)}`);
    set("reportAverage", `₹${avg.toFixed(2)}`);
    set("reportCustomers", students);

    const canvas = document.getElementById("salesChart");
    if (!canvas || typeof Chart === "undefined") return;
    if (window.smartCanteenSalesChart) window.smartCanteenSalesChart.destroy();
    const daily = {};
    orders.forEach(o => {
        const d = new Date(o.time);
        const key = isNaN(d.getTime()) ? "Unknown" : d.toLocaleDateString();
        daily[key] = (daily[key] || 0) + Number(o.total || 0);
    });
    const entries = Object.entries(daily);
    window.smartCanteenSalesChart = new Chart(canvas.getContext("2d"), {
        type: "line",
        data: { labels: entries.map(x => x[0]), datasets: [{ label: "Sales (₹)", data: entries.map(x => x[1]), tension: 0.25 }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: true } }, scales: { y: { beginAtZero: true } } }
    });
}

function exportOrderHistoryPDF() {
    if (!orders.length) { alert("No orders available to export."); return; }
    if (!window.jspdf || !window.jspdf.jsPDF) { alert("PDF library is not loaded. Please check your internet connection and try again."); return; }
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Smart Theatre - Order History", 14, 18);
    doc.setFontSize(9);
    let y = 28;
    orders.slice().reverse().forEach((o, idx) => {
        if (y > 270) { doc.addPage(); y = 18; }
        const student = `${o.student?.name || "-"} (${o.student?.studentId || "-"})`;
        const items = (o.items || []).map(i => `${i.name} x${i.quantity}`).join(", ");
        doc.text(`${idx + 1}. Order ${o.id || "-"} | ${student}`, 14, y); y += 5;
        doc.text(`Date: ${formatHistoryDate(o)} | Status: ${o.status || "-"} | Total: ₹${Number(o.total || 0).toFixed(2)}`, 14, y); y += 5;
        const wrapped = doc.splitTextToSize(`Items: ${items}`, 180);
        doc.text(wrapped, 14, y); y += wrapped.length * 4 + 5;
        doc.line(14, y, 196, y); y += 5;
    });
    doc.save("smart-theatre-order-history.pdf");
}

function generateSiteQR() {
    const box = document.getElementById("siteQrCode");
    const urlBox = document.getElementById("siteQrUrl");
    if (!box) return;
    if (typeof QRCode === "undefined") {
        box.innerHTML = "<p>QR library is not loaded. Please check your internet connection.</p>";
        return;
    }
    box.innerHTML = "";
    const url = window.location.href.split("#")[0];
    new QRCode(box, { text: url, width: 220, height: 220 });
    if (urlBox) urlBox.textContent = url;
}
