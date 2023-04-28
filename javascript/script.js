$(document).ready(function () {

    // box //
    $(".Subscribe-box").mouseenter(function () {
        $(".Subscribe-box").css("color", "var(--main-color)");
        $(".Subscribe-box").css("background", "var(--sub-color)");
        $('.Subscribe-text').removeClass('d-block').addClass('d-none');
        $('.form').removeClass('d-none').addClass('d-block');

        $('.Subscribe-check').removeClass('d-block').addClass('d-none');
    });
    $(".Subscribe-box").mouseleave(function () {
        $(".Subscribe-box").css("color", "var(--sub-color)");
        $(".Subscribe-box").css("background", "var(--main-color)");
        $('.Subscribe-text').removeClass('d-none').addClass('d-block');
        $('.form').removeClass('d-block').addClass('d-none');

        $('.Subscribe-check').removeClass('d-block').addClass('d-none');
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
    $('.read-btn-1').on('click', function () {
        $('.read-1').removeClass('d-block').addClass('d-none');
        $('.read-2').removeClass('d-none').addClass('d-block');
    });
    $('.read-btn-2').on('click', function () {
        $('.read-1').removeClass('d-block').addClass('d-none');
        $('.read-3').removeClass('d-none').addClass('d-block');
    });
    $('.read-btn-3').on('click', function () {
        $('.read-1').removeClass('d-none').addClass('d-block');
        $('.read-2').removeClass('d-block').addClass('d-none');
        $('.read-3').removeClass('d-block').addClass('d-none');
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
            var itemquantity = "<div>" +  item.quantity + "</div>";
            $("#cart").append(cartItem);
            alert( itemName + " * " + item.quantity + " 已加入購物車");
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
        hoverBackgroundColor: 'rgba(75, 192, 192, 1)',
        borderColor: 'rgb(75, 192, 192)', // 長條邊框顏色
        borderWidth: 1 // 長條邊框寬度
    }, {
        label: '墨西哥辣椒口味',
        data: [10, 9, 11],
        backgroundColor: 'rgba(255, 99, 132, 0.7)',
        hoverBackgroundColor: 'rgba(255, 99, 132, 1)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1

    }, {
        label: '巧克力杏仁口味',
        data: [8, 12, 10],
        backgroundColor: 'rgba(255, 206, 86, 0.7)',
        hoverBackgroundColor: 'rgba(255, 206, 86, 1)',
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

myBarChart.canvas.addEventListener('click', function (evt) {
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
        $('.product-0').addClass('animated');
        $('.product-1').addClass('animated');
        $('.product-2').addClass('animated');
        $('.product-3').addClass('animated');
        myBarChart.data.datasets[0].backgroundColor = 'rgba(75, 192, 192, 1)';
        myBarChart.data.datasets[1].backgroundColor = 'rgba(255, 99, 132, 0.1)';
        myBarChart.data.datasets[2].backgroundColor = 'rgba(255, 206, 86, 0.1)';
    } else if (activeDatasetIndex === 1) {
        $('.product-0').removeClass('d-block').addClass('d-none');
        $('.product-2').removeClass('d-none').addClass('d-block');
        myBarChart.data.datasets[0].backgroundColor = 'rgba(75, 192, 192, 0.1)';
        myBarChart.data.datasets[1].backgroundColor = 'rgba(255, 99, 132, 1)';
        myBarChart.data.datasets[2].backgroundColor = 'rgba(255, 206, 86, 0.1)';
        $('.product-0').addClass('animated');
        $('.product-1').addClass('animated');
        $('.product-2').addClass('animated');
        $('.product-3').addClass('animated');
    } else if (activeDatasetIndex === 2) {
        $('.product-0').removeClass('d-block').addClass('d-none');
        $('.product-3').removeClass('d-none').addClass('d-block');
        myBarChart.data.datasets[0].backgroundColor = 'rgba(75, 192, 192, 0.1)';
        myBarChart.data.datasets[1].backgroundColor = 'rgba(255, 99, 132, 0.1)';
        myBarChart.data.datasets[2].backgroundColor = 'rgba(255, 206, 86, 1)';
        $('.product-0').addClass('animated');
        $('.product-1').addClass('animated');
        $('.product-2').addClass('animated');
        $('.product-3').addClass('animated');
    } else {
        $('.product-0').removeClass('d-none').addClass('d-block');
        myBarChart.data.datasets[0].backgroundColor = 'rgba(75, 192, 192, 0.7)';
        myBarChart.data.datasets[1].backgroundColor = 'rgba(255, 99, 132, 0.7)';
        myBarChart.data.datasets[2].backgroundColor = 'rgba(255, 206, 86, 0.7)';
        $('.product-0').addClass('animated');
        $('.product-1').addClass('animated');
        $('.product-2').addClass('animated');
        $('.product-3').addClass('animated');
    }

    myBarChart.update();
});

$(document).ready(function () {
    const $chatBotBtn = $("#chat-bot-btn");
    const $chatWindow = $("#chat-window");
    const $chatMessages = $(".chat-messages");
    const $chatInput = $(".chat-input input");
    const $chatSendBtn0 = $(".chat-btn-0");
    const $chatSendBtn1 = $(".chat-btn-1");
    const $chatSendBtn2 = $(".chat-btn-2");
    const $chatSendBtn3 = $(".chat-btn-3");
    const $chatSendBtn4 = $(".chat-btn-4");

    $chatBotBtn.click(function () {
      if ($chatWindow.css("display") == "none") {
        $chatWindow.css("display", "flex");
      } else {
        $chatWindow.css("display", "none");
      }
    });


    $chatSendBtn0.click(function () {
        const message = $chatInput.val();
        
        // add message from user
        const messageMine = $('<div class="chat-message message-mine"></div>');
        messageMine.text("常見問題解答");
        $chatMessages.append(messageMine);
      
        // add message from bot
        const messageYours = $('<div class="chat-message message-bot"></div>');
        messageYours.text("請問您有什麼關於爆米花的疑問嗎？您可以在網站上的常見問題解答頁面找到相關答案，或者告訴我們您的問題，我們會盡快為您解答。");
        $chatMessages.append(messageYours);
      
        // clear input field
        $chatInput.val("");
    });

    $chatSendBtn1.click(function () {
        const message = $chatInput.val();
        
        // add message from user
        const messageMine = $('<div class="chat-message message-mine"></div>');
        messageMine.text("訂單查詢");
        $chatMessages.append(messageMine);
      
        // add message from bot
        const messageYours = $('<div class="chat-message message-bot"></div>');
        messageYours.text("如果您已經在我們的網站上下單，您可以提供訂單編號，我們會幫您查詢訂單狀態、配送進度等相關資訊。");
        $chatMessages.append(messageYours);
      
        // clear input field
        $chatInput.val("");
    });

    $chatSendBtn2.click(function () {
        const message = $chatInput.val();
        
        // add message from user
        const messageMine = $('<div class="chat-message message-mine"></div>');
        messageMine.text("售後服務");
        $chatMessages.append(messageMine);
      
        // add message from bot
        const messageYours = $('<div class="chat-message message-bot"></div>');
        messageYours.text("如果您收到的商品有任何品質問題或運送損壞，請與我們聯繫，我們會儘快處理並為您提供售後服務。");
        $chatMessages.append(messageYours);
      
        // clear input field
        $chatInput.val("");
    });

    $chatSendBtn3.click(function () {
        const message = $chatInput.val();
        
        // add message from user
        const messageMine = $('<div class="chat-message message-mine"></div>');
        messageMine.text("其他相關諮詢");
        $chatMessages.append(messageMine);
      
        // add message from bot
        const messageYours = $('<div class="chat-message message-bot"></div>');
        messageYours.text("如果您對於爆米花以外的其他相關議題有疑問，例如合作、活動、促銷等，請隨時向我們詢問，我們會竭誠為您提供幫助。");
        $chatMessages.append(messageYours);
      
        // clear input field
        $chatInput.val("");
    });

    $chatSendBtn4.click(function () {
      const message = $chatInput.val();
      if (message !== "") {
        // add message from user
        const messageMine = $('<div class="chat-message message-mine"></div>');
        messageMine.text(message);
        $chatMessages.append(messageMine);
 
        // add message from bot
        const messageYours = $('<div class="chat-message message-bot"></div>');
        messageYours.text("感謝您提供建議與問題，稍後將有專人為您服務！");
        $chatMessages.append(messageYours);

        // clear input field
        $chatInput.val("");
      }
    });
});

$(window).scroll(function(){
    let h = $(window).scrollTop();
    console.log(h);
    if(h > 300 && h < 3700){
        $('.fix-btn').fadeIn();
    }
    else{
        $('.fix-btn').fadeOut();
    }
})

$(window).scroll(function(){
    let h = $(window).scrollTop();
    if(h > 900 && h < 4000){
        $('.nav').fadeIn();
    }
    else{
        $('.nav').fadeOut();
    }
})

$('.chat-messages').on('DOMSubtreeModified', function(){
    $(this).scrollTop($(this).prop('scrollHeight'));
});

$(document).ready(function() {
    // Hide .box-2 initially
    $('.form').addClass('d-none');

    // Add input event listener to email input
    $('input[type="email"]').on('input', function() {
        var email = $(this).val();
        var isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (isValidEmail) {
            // Enable submit button
            $('.submit').prop('disabled', false);
        } else {
            // Disable submit button
            $('.submit').prop('disabled', true);
        }
    });

    // Add click event listener to submit button
    $('.submit').on('click', function(event) {
        event.preventDefault();
        // Show .box-2 by removing d-none class and adding d-block class
        $('.form').removeClass('d-block').addClass('d-none');
        $('.Subscribe-check').removeClass('d-none').addClass('d-block');
        // Clear email input
        $('input[type="email"]').val('');
        // Disable submit button
        $(this).prop('disabled', true);
    });
});

$(".nav-link-0").click(function() {
    $("html, body").animate({scrollTop: 0}, 1);
});
$(".nav-link-1").click(function() {
    $("html, body").animate({scrollTop: 1000}, 1);
});
$(".nav-link-2").click(function() {
    $("html, body").animate({scrollTop: 1800}, 1);
});
$(".nav-link-3").click(function() {
    $("html, body").animate({scrollTop: 2500}, 1);
});
$(".nav-link-4").click(function() {
    $("html, body").animate({scrollTop: 3200}, 1);
});
$(".nav-link-5").click(function() {
    $("html, body").animate({scrollTop: 4153}, 1);
});

let autoPlayInterval;

function startAutoPlay() {
  autoPlayInterval = setInterval(function () {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
  }, 4500);
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

startAutoPlay();