window.ONS=(function(){var F={tax:"tax_fact.json",aud:"aud_fact.json",taxResign:"tax_resign.json",audResign:"aud_resign.json",accResign:"acc_resign.json",meta:"meta.json"};
function get(f){return fetch("data/"+f).then(function(r){if(!r.ok)throw new Error("HTTP "+r.status+" for data/"+f);return r.json();});}
function load(){var o={};return Promise.all(Object.keys(F).map(function(k){return get(F[k]).then(function(j){o[k]=j;});})).then(function(){o.source="live";return o;});}
function refresh(){return Promise.reject(new Error("Demo: no back end"));}
return {load:load,refresh:refresh,FUNC_BASE:""};})();