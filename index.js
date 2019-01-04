$(document).ready(function($){

    $("#celular").mask("(99) 99999-9999");
    $('#celular').blur(function (event) {
      if ($(this).val().length == 15) { // Celular com 9 dígitos + 2 dígitos DDD e 4 da máscara
        $('#celular').mask('(99) 99999-9999');
      } else {
        $('#celular').mask('(99) 9999-99999');
      }
    });


    $("#btn").click(function () {
      var phone = $("#celular").val().replace(/[^\d]+/g,'');
      window.location.href = "https://api.whatsapp.com/send?phone=55" + phone + "&text=sua%20mensagem";

    });

  });
