$( document ).ready(function() {
    
    Cufon.replace(".maincat a");
    
    $('a.order, a.mail').click(function(){
      $('html, body').animate({ scrollTop: $(document).height() }, "slow");
      $('.order-form #name').focus();
      return false;
    });
    
    // Подсчет количества заголовков и галерей
    galleryCount = 0;
    $('.closedh3 .gallery').each(function(){
      if ($(this).parents('.kataloggallery').length==0) {
        galleryCount++;
        $(this).attr('rel', galleryCount);
      }
    });
    h3Count = 0;
    $('.closedh3 h5').each(function(){
      h3Count++;
      $(this).attr('rel', h3Count);
    });
    // Скрытие/открытие галерей и заголовков
    $('.closedh3 .gallery').each(function(){      
      if ($(this).attr('rel')==1) {
        $(this).addClass('visible');
        $('.closedh3 h5[rel="'+$(this).attr('rel')+'"]').addClass('visible');
      }
      if (!$('.closedh3 h5[rel="'+$(this).attr('rel')+'"]').length) {
        $(this).addClass('visible');
      }
    });  
    $('.closedh3 h5').click(function(){
      galleryContentShowHide($(this).attr('rel'));
    });    
    function galleryContentShowHide(id){
      $('.closedh3 h5[rel="'+id+'"]').toggleClass('visible');
      $('.closedh3 .gallery[rel="'+id+'"]').toggleClass('visible');
    }
    
    $('#orderFormWrapper form').submit(function(){
      yaCounter23297221.reachGoal('ORDER-FORM-2'); 
      //setInterval(function(){
      //  $('#orderFormWrapper form intup[type="submit"]').trigger( "click" );
      //},3000);
      return true;
    });
    
    $('.gbook_form  label').each(function(){
      $('#'+$(this).attr('for')).attr('placeholder', $(this).html());
    });
    
    // Звёздочки в отзывах
    $('.gbook_entry').each(function(){
      for(i=1; i<=parseInt($(this).children('.gbook_entry_title').html(),10);i++) {
        $(this).children('.gbook_entry_stars').append('<div class="star"></div>');
      }         
    });
    
    // Звёздочки в форме отзывов
    $('.gbook_form .star').click(function(){
      $('.star_keeper input').attr('value', $(this).attr('rel'));
      $('.gbook_form .star').removeClass('active');
      for (i=1; i<=$(this).attr('rel');i++){
        $('.gbook_form .star[rel="'+i+'"]').addClass('active');
      }
    });
    
    /* KATALOGGALLERY */
    
    // Нумерация элементов
    kgcount = 0;
    $('.kataloggallery').each(function(){
      $(this).attr('rel', ++kgcount);
      $(this).prepend('<div class="header"></div><div class="kg"></div>');
      kgi = 1;
      $(this).children('h2').each(function(){
        $(this).attr('rel', 'kg'+kgi);
        kgi++;
      });
      kgi = 1;
      $(this).children('.gallery').each(function(){
        $(this).attr('rel', 'kg'+kgi);
        kgi++;
      });
      
      $('.kataloggallery[rel="'+kgcount+'"] .gallery').addClass('hidden');
      $('.kataloggallery[rel="'+kgcount+'"] .gallery[rel="kg1"] .img').clone().appendTo('.kataloggallery[rel="'+kgcount+'"] .kg');
      $('.kataloggallery[rel="'+kgcount+'"] .gallery[rel="kg2"] .img').clone().appendTo('.kataloggallery[rel="'+kgcount+'"] .kg');    
    
    });
    

    
    $('.kataloggallery h2[rel="kg1"]').addClass('active');
    
    $('.kataloggallery').each(function(){
      $(this).children('.header').append($(this).children('h2'));
    });
    // Дальнейший код требует доработки:
    

    
    
    $("#up_link")
    .attr('href', document.location.href+"#")
    .css('opacity', $(document).scrollTop()/(1.5*$(window).height()))
    .live('mouseenter', function(){
      $(this).css('opacity', 1);
    })
    .live('mouseleave', function(){
      $(this).css('opacity', $(document).scrollTop()/(1.5*$(window).height()))
    });
    
    $(window).scroll(function(){
      if (!$("#up_link:hover").length) {
        $("#up_link").css('opacity', $(document).scrollTop()/(1.5*$(window).height()));
      }
    });
    
    /*
    $('#contentwrapper img').each(function(){
      $(this).wrap('<div class="imgwrap"></div>');
    });
    */
    
    $('.kattext').each(function(){
      $(this).append('<div class="back"></div><a href="#" class="openclose">Развернуть</a>')
    });
    
    $('.kattext .openclose').click(function(){
      if ($(this).parent().hasClass('open')) {
        $(this).parent().css('height', 100).removeClass('open');
        $(this).html('Развернуть');
      } else {
        $(this).parent().css('height', 'auto').addClass('open');
        $(this).html('Свернуть');
      }
      return false;
    });
  
  $.each($("#usefull a"), function(){if(this.href == location.href.split('?')[0].split('#')[0]) this.className = "menuactive";});
  
});