let LoadingHtml = '<div id="loadingbox"><img id="loading" src="../pictures/leave-loading/load.png"><h1 id="loadingtext">请稍等...</h1></div>';
//呈现loading效果
document.write(LoadingHtml);
//监听加载状态改变
document.onreadystatechange = completeLoading;
//加载状态为complete时移除loading效果
function completeLoading() {
  if (document.readyState == "complete") {
 var loadingMask = document.getElementById('loadingbox');
 loadingMask.parentNode.removeChild(loadingMask);
  }
}