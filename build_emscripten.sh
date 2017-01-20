source ~/Source/emsdk/emsdk_env.sh
mkdir -p emscripten
emcc -s WASM=1 -s TOTAL_MEMORY=1073741824 -Wall --bind --memory-init-file 0 -std=c++11 -o emscripten/ripser.js -O3 -D NDEBUG ripser.cpp
