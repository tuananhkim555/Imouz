// Carousel
document.addEventListener("DOMContentLoaded", function() {
  var carouselItems = document.querySelectorAll('.carousel-item');
  var prevButton = document.querySelector('.carousel-control-prev');
  var nextButton = document.querySelector('.carousel-control-next');
  var slideButtons = document.querySelectorAll('.round-slide-button');

  var currentSlide = 0;

  // Hiển thị slide đầu tiên
  showSlide(currentSlide);

  // Click vào nút prev
  prevButton.addEventListener('click', function() {
      currentSlide = (currentSlide === 0) ? (carouselItems.length - 1) : (currentSlide - 1);
      showSlide(currentSlide);
  });

  // Click vào nút next
  nextButton.addEventListener('click', function() {
      currentSlide = (currentSlide === carouselItems.length - 1) ? 0 : (currentSlide + 1);
      showSlide(currentSlide);
  });

  // Click vào các nút slide
  slideButtons.forEach(function(button, index) {
      button.addEventListener('click', function() {
          currentSlide = index;
          showSlide(currentSlide);
      });
  });

  // Hiển thị slide
  function showSlide(index) {
      // Loại bỏ lớp active khỏi tất cả các slide
      carouselItems.forEach(function(item) {
          item.classList.remove('active');
      });
      // Thêm lớp active cho slide được chọn
      carouselItems[index].classList.add('active');
  }
});



//! Service

// // Mảng các màu cho các icon
// const colors = ['red', 'blue', 'green', 'black'];

// // Lấy danh sách các icon
// const icons = document.querySelectorAll('svg');

// // Duyệt qua từng icon và thay đổi màu
// icons.forEach((icon, index) => {
//     // Chọn màu từ mảng colors
//     const color = colors[index % colors.length];
//     // Thay đổi màu của icon
//     icon.style.color = color;
// });

//! PortFolio



//!About
function showContent(contentId) {
    // Ẩn tất cả các nội dung
    var contents = document.getElementsByClassName("content");
    for (var i = 0; i < contents.length; i++) {
      contents[i].style.display = "none";
    }
    
    // Hiển thị nội dung được chọn
    var content = document.getElementById(contentId);
    content.style.display = "block";
  }
  document.addEventListener("DOMContentLoaded", function() {
    // Lấy danh sách các button menu
    var buttons = document.querySelectorAll(".menu-buttons button");

    // Lặp qua từng button và thêm sự kiện click
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            // Loại bỏ lớp active từ tất cả các button
            buttons.forEach(function(btn) {
                btn.classList.remove("active");
            });
            // Thêm lớp active vào button được click
            button.classList.add("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
  // Lấy danh sách các button menu
  var buttons = document.querySelectorAll(".menu-buttons button");

  // Lặp qua từng button và thêm sự kiện click
  buttons.forEach(function(button) {
      button.addEventListener("click", function() {
          // Loại bỏ lớp active từ tất cả các button
          buttons.forEach(function(btn) {
              btn.classList.remove("active");
          });
          // Thêm lớp active vào button được click
          button.classList.add("active");

          // Lấy ID của nội dung tương ứng với button được click
          var contentId = button.getAttribute("data-content");
          // Lấy danh sách các nội dung
          var contents = document.querySelectorAll(".content");
          // Loại bỏ lớp active từ tất cả các nội dung
          contents.forEach(function(content) {
              content.classList.remove("active");
          });
          // Thêm lớp active vào nội dung tương ứng với button được click
          document.getElementById(contentId).classList.add("active");
      });
  });
});


//! Comment

document.addEventListener("DOMContentLoaded", function () {
  const imageBoxes = document.querySelectorAll(".image-box");
  
  // Mặc định chỉ có ảnh đầu tiên được hiển thị
  imageBoxes[0].classList.add("active");

  imageBoxes.forEach((box) => {
    box.addEventListener("click", function () {
      // Loại bỏ lớp active từ tất cả các image-box
      imageBoxes.forEach((box) => {
        box.classList.remove("active");
      });
      // Thêm lớp active vào image-box được click
      box.classList.add("active");
    });
  });
});

function displayText(contentId, title, description) {
  var contentBox = document.getElementById(contentId);
  contentBox.innerHTML = '<h3>' + title + '</h3><p>' + description + '</p>';
  contentBox.style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
  var tabThumbs = document.querySelectorAll(".testimonial-thumb-wrapper .nav-link");
  var tabContents = document.querySelectorAll(".rn-testimonial-content .tab-pane");

  tabThumbs.forEach(function(tabThumb, index) {
      tabThumb.addEventListener("click", function(event) {
          event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ a

          // Ẩn tất cả các tab content
          tabContents.forEach(function(content) {
              content.classList.remove("active", "show");
          });

          // Hiển thị tab content tương ứng với tab thumb được click
          var contentToShow = document.getElementById(tabThumb.getAttribute("aria-controls"));
          contentToShow.classList.add("active", "show");
      });
  });
});

//! Back top Top

document.addEventListener("DOMContentLoaded", function() {
  var backToTopButton = document.getElementById('backToTopButton');
  
  backToTopButton.addEventListener('mouseenter', function() {
      // Thay đổi màu border của nút từ màu đỏ sang màu trắng
      var interval = setInterval(function() {
          var computedStyle = getComputedStyle(backToTopButton);
          var currentColor = computedStyle.borderColor;
          var rgbValues = currentColor.match(/\d+/g);
          var redValue = parseInt(rgbValues[0]);
          var greenValue = parseInt(rgbValues[1]);
          var blueValue = parseInt(rgbValues[2]);

          if (redValue > 255 * 0.1) {
              redValue -= 1;
              greenValue -= 1;
              blueValue -= 1;
              backToTopButton.style.borderColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
          } else {
              clearInterval(interval);
          }
      }, 5);
  });

  backToTopButton.addEventListener('mouseleave', function() {
      // Khôi phục màu border ban đầu (10% màu đỏ và 90% màu trắng)
      backToTopButton.style.borderColor = 'rgba(255, 255, 255, 0.1)';
  });

  backToTopButton.addEventListener('click', function() {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
});

