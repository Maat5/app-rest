// JavaScript Document

function onSuccess(data, status)
        {
            data = $.trim(data);
            $("#Respuesta").text(data);
        }
  
        function onError(data, status)   
        {
            // handle an error
        }        
  
        $(document).ready(function() {
            $("#envio").click(function(){
  
                var formData = $("#AjaxCuenta").serialize();
  
                $.ajax({
                    type: "POST",
                    url: "http://localhost/Ajax/Servcio.php",
                    cache: false,
                    data: formData, 
                    success: onSuccess,
                    error: onError
                });
  
                return false;
            });
        });