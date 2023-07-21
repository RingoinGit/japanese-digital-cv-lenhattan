"use strict";
const email = document.querySelector(".input-email");
const emailForm = document.querySelector(".form-email");
const personInfo = document.querySelector(".info");
function infoHidden() {}

//Hiển thị thông tin cá nhân khi nhập đúng email,
//Trường hợp người dùng nhập đúng định dạng email thì hiển thị. Nếu không nhập email mà click nút Submit thì :
const submitBtn = document.getElementById("submit-button");
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

submitBtn.addEventListener("click", function () {
  if (email.value.match(regex)) {
    emailForm.classList.add("hidden");
    personInfo.classList.remove("hidden");
  } else if (email.value) {
    alert(`メールアドレスを正しい形式で入力してください。`);
  } else {
    alert(`メールアドレスを入力してください。`);
  }
});

// Nếu không đúng định dạng email thì hiện popup cảnh báo. Hoặc không nhập email mà ấn enter thì không chấp nhận.
email.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && email.value) {
    if (email.value.match(regex)) {
      e.preventDefault(); //Ngăn ngừa trang web reload gây mất hiệu ứng hiển thị thông tin cá nhân
      emailForm.classList.add("hidden");
      personInfo.classList.remove("hidden");
    } else {
      alert(`メールアドレスを正しい形式で入力してください。`);
    }
  }
});

//Bật tắt các khối thông tin trong job-info
const contentList = document.querySelectorAll(".content-list");
const viewBtn = document.querySelectorAll(".viewmore-btn");
function viewmore() {
  for (let i = 0; i < viewBtn.length; i++) {
    //Lấy sự kiện click của mỗi nút
    viewBtn[i].addEventListener("click", function () {
      //chuyển đổi tên nút Viewmore Viewless
      const text =
        viewBtn[i].textContent === "もっと見る ..."
          ? "... 表示を減らす"
          : "もっと見る ...";
      contentList[i].classList.toggle("hidden");
      viewBtn[i].textContent = text;
    });
  }
}

viewmore();
