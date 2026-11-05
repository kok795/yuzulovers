// 右クリックメニューを無効化
document.addEventListener("contextmenu", function(e) {
  e.preventDefault();
});

// 画像のドラッグを禁止
document.addEventListener("dragstart", function(e) {
  if (e.target.tagName === "IMG") {
    e.preventDefault();
  }
});
