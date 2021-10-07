bu script kodunu index.html içerisine yada ayrı bir js dosyayısı içerisine girerek linkini sayfaya ekleyip kullanabilirsiniz.


<script>
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            loop: true,     //sliderın otomatik ilerlemesi
            autoplay: true,   //otomatik başlar
            smartSpeed: 300,  //hareket hızı
            autoplayHoverPause: true,   //mouse ile üstüne geldiğin zaman durur
            nav: true,    // alt geçiş iconlarını nava çevirir sonra css ile kaynağını bularak stil verilebilir
            dots: false,  // yuvarlak geçiş simgelerini kaldırır
            items: 1    //kaç slide ın gözükeceği

        });
    });
  </script>
