$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "/api",
    datatype: "json",
  }).then((res) => {
    console.log(res);
  });
  $.ajax({
    type: "GET",
    url: "/api/proof",
    datatype: "json",
  }).then((res) => {
    console.log(res);
  });
});
