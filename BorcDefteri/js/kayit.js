var apiUrl = "https://borc.mcbonair.site/";
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
        window.location.href = "./giris.html";
      },
      error: function (xhr,status,error) {
        if(xhr.responseJSON.ModelState["model.ConfirmPassword"]){
          $("#divErrorText").text("Girilen şifreler birbiriyle uyuşmuyor.");
          $("#divError").show("fade");
        }
        else if(xhr.responseJSON.ModelState[""][1]){
          $("#divErrorText").text("Bu email adresi sisteme kayıtlı.");
          $("#divError").show("fade");
        }
      },
    });
  });
});

