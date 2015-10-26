// JavaScript Document
function evaluser(){
function onSuccess(data, status)
        {
            data = $.trim(data);
            $("#respuesta").html(data);
        }
  
        function onError(data, status)   
        {
            // handle an error
        }        
  
        $(document).ready(function() {
            $("#submit").click(function(){
  
                var formData = $("#entrada").serialize();
  
                $.ajax({
                    type: "POST",
                    url: "http://localhost/comidajaponesa/verificarusuario.php",
                    cache: false,
                    data: formData, 
                    success: onSuccess,
                    error: onError
                });
  
                return false;
            });
        });
}


function solicent(){
function onSuccess(data, status)
        {
            data = $.trim(data);
            $("#respuesta2").html(data);
        }
  
        function onError(data, status)   
        {
            // handle an error
        }        
  
        $(document).ready(function() {
            $("#submit").click(function(){
  
                var formData = $("#Entradas").serialize();
  
                $.ajax({
                    type: "POST",
                    url: "http://localhost/comidajaponesa/ingresarpedido.php",
                    cache: false,
                    data: formData, 
                    success: onSuccess,
                    error: onError
                });
  
                return false;
            });
        });
}
