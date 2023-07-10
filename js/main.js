$(function(){
    /*スマホメニュー*/
    $('.toggle_btn').on('click',function() {
        if ($('#header').hasClass('open')) {
            $('#header').removeClass('open');
        } else {
            $('#header').addClass('open');
        }
    });
    
    
    /*#maskエリアをクリックしたときにメニューを閉じる*/
    $('#mask').on('click',function() {
        $('#header').removeClass('open');
    });
    
    
    /*リンクをクリックしたときメニューを閉じる*/
    $('#navi a').on('click',function() {
        $('#header').removeClass('open');
    });

    /*スムーススクロール*/
    //ページ内リンクイベント
    $('a[href^="#"]').click(function() {
        //リンクを習得
        let href=$(this).attr("href");
    //ジャンプ先のid名をセット
    let target = $(href == "#" || href == "" ? 'html' : href);
    //トップからジャンプ先の要素までの距離を習得
    let position = target.offset().top;
    //anitimeでスムーススクロールを行う
    //600はスクロール速度で単位はミリ秒
    $("html,body").animate({scrollTop:position},600,"swing");
    return false;
    });
    /*PICK UP スライダー*/
    //カルーセル用jQueryプラグイン[slick]の設定
    //マニュアル：https://kenwheeler.github.io/slick/
    $('.slick-area').slick( {
        arrows:false,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 3,
        responsive: [
        {
            breakpoint: 768,
            settings: {
            centerPadding: '50px',
         slidesToShow: 1
          }
        }
      ]
    });

    //スクロール時のイベント
    $(window).scroll(function() {
        //fadeinクラスに対して順に処理を行う
        $('.fadein').each(function() {
            //スクロールした距離
            let scroll = $(window).scrollTop();
            //fadeinクラスの要素までの距離
            let target = $(this).offset().top;
            //画面の高さ
            let windowHeight = $(window).height();
            //fadeinクラスの要素が画面下に来てから200px通過した
            //タイミングで要素を表示
            if (scroll > target - windowHeight + 200) {
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
    });
});
