var Module = {};

          var xhr = new XMLHttpRequest();
          xhr.open('GET', 'emscripten/ripser.wasm', true);
          xhr.responseType = 'arraybuffer';
          xhr.onload = function() {
            Module.wasmBinary = xhr.response;
            importScripts('emscripten/ripser.js');
          };
          xhr.send(null);



addEventListener('message', function(e) {
    var data = e.data;
    tic = (new Date()).getTime();
    Module.ripser_emscripten(data.file, data.dim, data.threshold, data.format);
    toc = (new Date()).getTime();

	postMessage(null);
}, false);
