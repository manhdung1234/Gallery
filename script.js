function upDate(previewPic) {
  console.log("upDate được gọi");
  console.log(previewPic.alt, previewPic.src);

  const box = document.getElementById("image");
  box.innerHTML = previewPic.alt;
  box.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
  const box = document.getElementById("image");
  box.style.backgroundImage = "url('')";
  box.innerHTML = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
}
