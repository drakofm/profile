const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent) ? true : false;

if (isMobile) {
  document.querySelector('#users-list-and-chat').style.maxHeight = 'calc(100vh - 160px - 60px)';
}