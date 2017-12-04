#####------------------------------------------ STUDY Ajax ----------------------------------------------------------------------------------------------------------------------------------------
- cập nhật trang web mà ko cần load lại trang
- yêu cầu dữ liệu từ máy chủ sau khi trang đã được nạp
- nhận dữ liệu từ máy chủ sau khi trang đã được nạp
- gởi một dữ liệu máy chủ trong nền

function loadDoc() {
  var xhttp = new XMLHttpRequest();    // trao đổi dữ liệu với một máy chủ
  // sự kiện
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText; // nhận được những phản hồi từ máy chủ
    }
  };
  // gửi yêu cầu đến một máy chủ
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}