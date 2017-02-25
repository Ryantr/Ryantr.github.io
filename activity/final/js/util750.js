window.util = (function(win, doc) {
	var UA = navigator.userAgent;

	return {
		isAndroid: / android|adr/gi.test(UA),
		isIos: /iphone|ipod/gi.test(UA),

		/**
		 * 缩放页面
		 */
		fixScreen: function() {
			var width = 750,
				iw = win.innerWidth || width,
				ow = win.outerHeight || iw,
				sw = win.screen.width || iw,
				saw = win.screen.availWidth || iw,
				ih = win.innerHeight || width,
				oh = win.outerHeight || ih,
				ish = win.screen.height || ih,
				sah = win.screen.availHeight || ih,
				w = Math.min(iw,ow,sw,saw,ih,oh,ish,sah),
				ratio = w / width,
				dpr = win.devicePixelRatio;

			ratio = Math.min(ratio,dpr);
			if ( ratio < 1 ) {
				var ctt = ',initial-scale=' + ratio + ',maximum-scale=' + ratio,
					metas = doc.getElementsByTagName('meta'),
					us;

				if ( this.isIos ) {
					us = ',user-scalable=no';
				}
				if ( this.isAndroid ) {
					us = '';
				}

				ctt += us;
				for ( var i = 0, meta; i < metas.length; i++) {
					meta = metas[i];
					if ( meta.name == 'viewport' ) {
						meta.content += ctt;
					}
				}
			}
		}

	};
})(window, document);

// 默认直接适配页面
util.fixScreen();