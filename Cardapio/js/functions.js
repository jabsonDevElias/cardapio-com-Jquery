$(function(){

    function condicaoSabor(){
        $('.sabores-1').click(function(){
           var condicao = $('.sabores-1').val();
           if(condicao == '---'){
                $('#outroSabor').prop('checked', false);
                $('.sabores-2').attr("disabled", true);
                $('.sabores-2').val("---");
               
           }
        });
    }
    
    function libera2Sabor(){
        $('#outroSabor').click(function(){
            var sabores1 = $('.sabores-1').val();
            if(sabores1 == '---'){
                $('.acoes').fadeIn();
                $('#outroSabor').prop('checked', false);
                $('.sabores-2').attr("disabled", true);
                $('.sabores-2').val("---");
                $('.alert').eq(0).append('<h3>Atencão! Adicione o primeiro sabor!</h3>');

            }else{

                if($('#outroSabor').is(':checked')){
                    $('.sabores-2').attr("disabled", false);
                } else {
                    $('.sabores-2').attr("disabled", true);
                    $('.sabores-2').val("---");
                }
            }
        });

    }

    function liberarSaborBorda(){

        $('#comBordas').click(function(){
            
            if($('#comBordas').is(':checked')){
                $('.sabores-borda').attr("disabled", false);
            } else {
                $('.sabores-borda').attr("disabled", true);
                $('.sabores-borda').val("Sem Borda");

            }
        });
    }
    
    function fecharModal(){
        $('.fechar').click(function(){
            $('.acoes').fadeOut();
        });
    }

    $('body').click(function(){
        var fatias = $("input[name='TamanhoPizza']:checked").val();
        var sabor = $('.sabores-1').val();
        var sabor2 = $('.sabores-2').val();
        var bordas = $('.sabores-borda').val();

        if($('#semPizza').is(':checked')){
            $('textarea').val('');

         } 
        
        
        $('textarea').val('Pizza de '+sabor+' / '+sabor2+'.\n'+fatias+'\n Borda: '+bordas);
        

    });

    libera2Sabor();
    liberarSaborBorda();
    fecharModal();
    condicaoSabor();
    
   
    


});