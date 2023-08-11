function isLeapYear(year) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}
function dayOfmonth(month, year) {
  let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (month < 1 || month > 12 || year < 1) {
    console.log("Tháng hoặc năm không hợp lệ");
    return;
  }
  if (month == 2 && isLeapYear(year)) {
    days[1]++;
  }
  console.log("Số ngày trong tháng " + month + " của năm " + year + " là: " + days[month - 1]);
}
dayOfmonth(0,1998);
