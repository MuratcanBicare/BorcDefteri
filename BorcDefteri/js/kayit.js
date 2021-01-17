var apiUrl = "http://borc.mcbonair.site/";
var pathname = window.location.pathname;

$(document).ready(function () {
  $("#linkClose").click(function () {
    $("#divError").hide("fade");
  });
  $("#btnRegister").click(function () {
    $.ajax({
      type: "POST",
      url: apiUrl + "api/Account/Register",
      data: {
        email: $("#txtEmail").val(),
        password: $("#txtPassword").val(),
        confirmPassword: $("#txtConfirmPassword").val(),
      },
      success: function () {
        $("#successModal").modal("show");
        $("#txtEmail").val("");
        $("#txtPassword").val("");
        $("#txtConfirmPassword").val("");
        window.location.href = "giris.html";
      },
      error: function (xhr,status,error) {
        $("#divErrorText").text("hata");
        $("#divError").show("fade");
      },
    });
  });
});

