$(document).ready(function () {

    // box //
    $(".Subscribe-box").mouseenter(function () {
        $(".Subscribe-box").css("color", "var(--main-color)");
        $(".Subscribe-box").css("background", "var(--sub-color)");
    });
    $(".Subscribe-box").mouseleave(function () {
        $(".Subscribe-box").css("color", "var(--sub-color)");
        $(".Subscribe-box").css("background", "var(--main-color)");
    });
    $(".follow-box").mouseenter(function () {
        $(".follow-box").css("color", "var(--main-color)");
        $(".follow-box").css("background", "var(--sub-color)");
        $(".link").css("color", "var(--main-color)");
    });
    $(".follow-box").mouseleave(function () {
        $(".follow-box").css("color", "var(--sub-color)");
        $(".follow-box").css("background", "var(--main-color)");
        $(".link").css("color", "var(--sub-color)");
    });
    // box //

    // icon //
    $(".bi-youtube").mouseenter(function () {
        $(".follow-box").css("background", "#FF0000");
        $(".follow-box h2").text("Youtube")
    });
    $(".bi-youtube").mouseleave(function () {
        $(".follow-box").css("background", "var(--sub-color)");
        $(".follow-box h2").text("選擇社交平台")
    });
    $(".bi-twitter").mouseenter(function () {
        $(".follow-box").css("background", "#1DA1F2");
        $(".follow-box h2").text("Twitter")
    });
    $(".bi-twitter").mouseleave(function () {
        $(".follow-box").css("background", "var(--sub-color)");
        $(".follow-box h2").text("選擇社交平台")
    });
    $(".bi-instagram").mouseenter(function () {
        $(".follow-box").css("background", "#E1306C");
        $(".follow-box h2").text("Instagram")
    });
    $(".bi-instagram").mouseleave(function () {
        $(".follow-box").css("background", "var(--sub-color)");
        $(".follow-box h2").text("選擇社交平台")
    });
    // icon //    
});

$(document).ready(function () {
    $('.circle-1').on('click', function () {
        if ($('.circle-1').hasClass('bi-1-circle')) {
            $('.circle-1').removeClass('bi-1-circle').addClass('bi-1-circle-fill');
            // 移除其他 //
            $('.circle-2').removeClass('bi-2-circle-fill').addClass('bi-2-circle');
            $('.circle-3').removeClass('bi-3-circle-fill').addClass('bi-3-circle');
            // 切換其他 //
            $('.about-1').removeClass('d-none').addClass('d-flex');
            $('.about-2').removeClass('d-flex').addClass('d-none');
            $('.about-3').removeClass('d-flex').addClass('d-none');

            $('.about-img-1').addClass('animated');
            $('.about-h1-1').addClass('animated');
            $('.about-p-1').addClass('animated');
            $('.about-btn-1').addClass('animated');

        }
    });
    $('.circle-2').on('click', function () {
        if ($('.circle-2').hasClass('bi-2-circle')) {
            $('.circle-2').removeClass('bi-2-circle').addClass('bi-2-circle-fill');
            // 移除其他 //
            $('.circle-1').removeClass('bi-1-circle-fill').addClass('bi-1-circle');
            $('.circle-3').removeClass('bi-3-circle-fill').addClass('bi-3-circle');
            // 切換其他 //
            $('.about-1').removeClass('d-flex').addClass('d-none');
            $('.about-2').removeClass('d-none').addClass('d-flex');
            $('.about-3').removeClass('d-flex').addClass('d-none');

            $('.about-img-2').addClass('animated');
            $('.about-h1-2').addClass('animated');
            $('.about-p-2').addClass('animated');
            $('.about-btn-2').addClass('animated');

        }
    });
    $('.about-btn-1').on('click', function () {
        if ($('.circle-2').hasClass('bi-2-circle')) {
            $('.circle-2').removeClass('bi-2-circle').addClass('bi-2-circle-fill');
            // 移除其他 //
            $('.circle-1').removeClass('bi-1-circle-fill').addClass('bi-1-circle');
            $('.circle-3').removeClass('bi-3-circle-fill').addClass('bi-3-circle');
            // 切換其他 //
            $('.about-1').removeClass('d-flex').addClass('d-none');
            $('.about-2').removeClass('d-none').addClass('d-flex');
            $('.about-3').removeClass('d-flex').addClass('d-none');

            $('.about-img-2').addClass('animated');
            $('.about-h1-2').addClass('animated');
            $('.about-p-2').addClass('animated');
            $('.about-btn-2').addClass('animated');

        }
    });
    $('.circle-3').on('click', function () {
        if ($('.circle-3').hasClass('bi-3-circle')) {
            $('.circle-3').removeClass('bi-3-circle').addClass('bi-3-circle-fill');
            // 移除其他 //
            $('.circle-1').removeClass('bi-1-circle-fill').addClass('bi-1-circle');
            $('.circle-2').removeClass('bi-2-circle-fill').addClass('bi-2-circle');
            // 切換其他 //
            $('.about-1').removeClass('d-flex').addClass('d-none');
            $('.about-2').removeClass('d-flex').addClass('d-none');
            $('.about-3').removeClass('d-none').addClass('d-flex');

            $('.about-img-3').addClass('animated');
            $('.about-h1-3').addClass('animated');
            $('.about-p-3').addClass('animated');
            $('.about-btn-3').addClass('animated');
        }
    });
    $('.about-btn-2').on('click', function () {
        if ($('.circle-3').hasClass('bi-3-circle')) {
            $('.circle-3').removeClass('bi-3-circle').addClass('bi-3-circle-fill');
            // 移除其他 //
            $('.circle-1').removeClass('bi-1-circle-fill').addClass('bi-1-circle');
            $('.circle-2').removeClass('bi-2-circle-fill').addClass('bi-2-circle');
            // 切換其他 //
            $('.about-1').removeClass('d-flex').addClass('d-none');
            $('.about-2').removeClass('d-flex').addClass('d-none');
            $('.about-3').removeClass('d-none').addClass('d-flex');

            $('.about-img-3').addClass('animated');
            $('.about-h1-3').addClass('animated');
            $('.about-p-3').addClass('animated');
            $('.about-btn-3').addClass('animated');
        }
    });
});

$(document).ready(function () {
    $('.i-arrow').on('click', function () {
        $('.buy-box').toggleClass('col-lg-1 col-lg-11');
        $('.buy-show').toggleClass('d-none d-block');
        $('.checkout-show').toggleClass('d-none d-block');
        $('.product-list-box').addClass('animated');
        $('.checkout-show').addClass('animated');
    });
    $('.arrow-show').on('click', function () {
        $('.arrow-show').toggleClass('d-none d-block');
    });

});

$(document).ready(function () {
    var cartItems = {}; // 儲存購物車內容的物件
    // 點擊加入購物車按鈕
    $(".cart-btn").on("click", function () {
        var product = $(this).parent();
        var productName = product.find(".product-name").text();
        var productPrice = parseInt(product.find(".product-price").text().replace(/\$/g, ""));

        if (cartItems.hasOwnProperty(productName)) {
            cartItems[productName].quantity++;
        } else {
            cartItems[productName] = {
                price: productPrice,
                quantity: 1
            };
        }
        renderCart();
    });

    // 渲染購物車
    function renderCart() {
        $("#cart").empty();
        var totalPrice = 0;
        for (var itemName in cartItems) {
            var item = cartItems[itemName];
            var itemTotalPrice = item.price * item.quantity;
            totalPrice += itemTotalPrice;
            var cartItem = "<div>" + itemName + " * " + item.quantity + " - $" + itemTotalPrice + "</div>" + "<hr>";
            $("#cart").append(cartItem);
        }
        var totalText = "總金額: $" + totalPrice;
        $("#cart").append("<div><strong>" + totalText + "</strong></div>");
    }

    // 點擊結帳按鈕
    $("#checkout").on("click", function () {
        var totalPrice = 0;
        for (var itemName in cartItems) {
            var item = cartItems[itemName];
            var itemTotalPrice = item.price * item.quantity;
            totalPrice += itemTotalPrice;
        }
        alert("總金額: $" + totalPrice + " 感謝您的購買");
    });
});

var data = {
    labels: ['2020', '2021', '2022'],
    datasets: [{
        label: '古早味黑糖口味',
        data: [12, 15, 13],
        backgroundColor: 'rgba(75, 192, 192, 0.7)', // 長條顏色
        borderColor: 'rgb(75, 192, 192)', // 長條邊框顏色
        borderWidth: 1 // 長條邊框寬度
    }, {
        label: '墨西哥辣椒口味',
        data: [10, 9, 11],
        backgroundColor: 'rgba(255, 99, 132, 0.7)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1

    }, {
        label: '巧克力杏仁口味',
        data: [8, 12, 10],
        backgroundColor: 'rgba(255, 206, 86, 0.7)',
        borderColor: 'rgb(255, 206, 86)',
        borderWidth: 1

    }]
};

// 選項
var options = {
    responsive: true, // 響應式
    scales: {
        y: {
            beginAtZero: true // y 軸從 0 開始
        }
    }
};

// 創建長條圖
var ctx = document.getElementById('barChart').getContext('2d');
var myBarChart = new Chart(ctx, {
    type: 'bar', // 使用長條圖
    data: data,
    options: options
});

myBarChart.canvas.addEventListener('mousemove', function (evt) {
    var activePoints = myBarChart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);
    var activeDatasetIndex;
    if (activePoints.length) {
        var activeIndex = activePoints[0].index;
        activeDatasetIndex = activePoints[0].datasetIndex;
    } else {
        activeDatasetIndex = -1;
    }

    $('.product-1, .product-2, .product-3').removeClass('d-block').addClass('d-none');

    if (activeDatasetIndex === 0) {
        $('.product-0').removeClass('d-block').addClass('d-none');
        $('.product-1').removeClass('d-none').addClass('d-block');
        myBarChart.data.datasets[0].backgroundColor = 'rgba(75, 192, 192, 1)';
        myBarChart.data.datasets[1].backgroundColor = 'rgba(255, 99, 132, 0.2)';
        myBarChart.data.datasets[2].backgroundColor = 'rgba(255, 206, 86, 0.2)';
    } else if (activeDatasetIndex === 1) {
        $('.product-0').removeClass('d-block').addClass('d-none');
        $('.product-2').removeClass('d-none').addClass('d-block');
        myBarChart.data.datasets[0].backgroundColor = 'rgba(75, 192, 192, 0.2)';
        myBarChart.data.datasets[1].backgroundColor = 'rgba(255, 99, 132, 1)';
        myBarChart.data.datasets[2].backgroundColor = 'rgba(255, 206, 86, 0.2)';
    } else if (activeDatasetIndex === 2) {
        $('.product-0').removeClass('d-block').addClass('d-none');
        $('.product-3').removeClass('d-none').addClass('d-block');
        myBarChart.data.datasets[0].backgroundColor = 'rgba(75, 192, 192, 0.2)';
        myBarChart.data.datasets[1].backgroundColor = 'rgba(255, 99, 132, 0.2)';
        myBarChart.data.datasets[2].backgroundColor = 'rgba(255, 206, 86, 1)';
    } else {
        $('.product-0').removeClass('d-none').addClass('d-block');
        myBarChart.data.datasets[0].backgroundColor = 'rgba(75, 192, 192, 0.7)';
        myBarChart.data.datasets[1].backgroundColor = 'rgba(255, 99, 132, 0.7)';
        myBarChart.data.datasets[2].backgroundColor = 'rgba(255, 206, 86, 0.7)';
    }

    myBarChart.update();
});