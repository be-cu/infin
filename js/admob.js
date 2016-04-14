var admobid = {};
if( /(android)/i.test(navigator.userAgent) ) {
    admobid = { // for Android
      banner: 'ca-app-pub-4052984890763114/2564669658',
      interstitial: 'ca-app-pub-4052984890763114/4041402859'
    };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
    admobid = { // for iOS
      banner: 'ca-app-pub-4052984890763114/2564669658',
      interstitial: 'ca-app-pub-4052984890763114/4041402859'
    };
} else {
    admobid = { // for Windows Phone
      banner: 'ca-app-pub-4052984890763114/2564669658',
      interstitial: 'ca-app-pub-4052984890763114/4041402859'
    };
}

if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
    document.addEventListener('deviceready', initApp, false);
}

function initApp() {
    if (! AdMob ) { console.error( 'admob plugin not ready' ); return; }

    AdMob.createBanner( {
        adId: admobid.banner,
        isTesting: false,
        overlap: false,
        offsetTopBar: false,
        position: AdMob.AD_POSITION.BOTTOM_CENTER
    } );

    AdMob.prepareInterstitial({
        adId: admobid.interstitial,
        autoShow: true
    });
}
