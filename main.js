// Bài Tập 1
function grossSalary() {
  //Đầu vào:  gọi biến số ngày làm, lương mỗi ngày
  var workingDay = document.getElementById("workingDay").value * 1;
  var dailySalary = document.getElementById("dailySalary").value * 1;

  // Xử lý:
  // B1: gọi biến lương tổng grossSalary
  // B2: công thức tính grossSalary = workingDay * dailySalary
  // B3: thêm dòng kết quả.
  var grossSalary = workingDay * dailySalary;
  var result1 = "Your Gross Salary: " + grossSalary;

  // Đầu ra: In ra giá trị grossSalary khi nhấn nút Result
  document.getElementById("showSalary").innerHTML = result1;
}

// Bài Tập 2
function average() {
  // Đầu vào: gọi biến 5 số ngẫu nhiên
  var number1 = document.getElementById("number1").value * 1;
  var number2 = document.getElementById("number2").value * 1;
  var number3 = document.getElementById("number3").value * 1;
  var number4 = document.getElementById("number4").value * 1;
  var number5 = document.getElementById("number5").value * 1;

  // Xử lý:
  // B1: Gọi biến trung bình average
  // B2: Tính theo công thức average = (number1 + number2 + number3 + number4 + number5)/5
  // B3: thêm dòng kết quả
  var average = (number1 + number2 + number3 + number4 + number5) / 5;
  var result2 = "Avarage = " + average;

  // Đầu ra: In ra giá trị average khi nhấn nút Result
  document.getElementById("showAverage").innerHTML = result2;
}

// Bài Tập 3
function totalExchanged() {
  // Đầu Vào: Gọi biến USD
  var usdCurrentcy = document.getElementById("usdCurrentcy").value * 1;

  // Xử lý;
  // B1: gọi biến tổng số tiền quy đổi được totalExchanged
  // B2:  totalExchanged = usdCurrentcy * 23500
  // B3: format cho đơn vị tiền tề VND
  // B4: thêm dòng kết quả
  var totalExchanged = usdCurrentcy * 23500;
  var currentcyFormat = new Intl.NumberFormat("vn-VN");
  var result3 =
    "Your Total Exchange:  " + currentcyFormat.format(totalExchanged) + " VND";

  // Đầu ra: In ra giá trị kết quả
  document.getElementById("showVND").innerHTML = result3;
}

// Bài Tập 4
document.getElementById("btnResult").onclick = function () {
  // Đầu vào: gọi biến chiều dài và chiều rộng
  var length = document.getElementById("length").value * 1;
  var width = document.getElementById("width").value * 1;

  // Xử lý:
  // B1: GỌi biến diện tích area, biến chu vi perimeter
  // B2: công thức diện tích HCN: area = length * width
  // B3: công thức chu vi HCN: perimeter = (length + width) * 2
  // B4: tạo thẻ chứa kết quả ở card footer
  var area = length * width;
  var perimeter = (length + width) * 2;
  var result4 = "";
  result4 += "<div class='bg-light'>";
  result4 += "<p>Area of Rectangel :</p>";
  result4 += "<p>" + area + "</p>";
  result4 += "<p>Perimeter of Rectangel :</p>";
  result4 += "<p>" + perimeter + "</p>";
  result4 += "</div>";

  // Đầu ra:
  document.getElementById("showResult").innerHTML = result4;
};

// Bài tập 5
document.getElementById("btnNumber").onclick = function () {
  // Đầu vào
  // Gọi biến số có 2 chữ số
  var number = document.getElementById("number").value * 1;

  // Xử lý
  // B1: gọi biến hàng chục ten, biến hàng đơn vị unit
  // B2: gọi biến tổng sum
  // B3: lấy số hàng chục: ten%10
  // B4: Lấy số hàng đơn vị: unit/10
  // B5: công thức tổng: sum = ten + unit
  var ten = Math.floor(number / 10);
  var unit = number % 10;
  var sum = ten + unit;
  var resutl5 = "";
  resutl5 += "<div>"
  resutl5 += "<p>Tens of your number</p>";
  resutl5 += "<p>" + ten + "</p>";
  resutl5 += "<p>Units of your number</p>";
  resutl5 += "<p>" + unit + "</p>";
  resutl5 += "<p>Sumary Value</p>";
  resutl5 += "<p>" + sum + "</p>";
  resutl5 += "</div>"

  // Đầu ra: in ra kết quả
  document.getElementById("showValue").innerHTML = resutl5;
}
