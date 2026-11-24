import * as import1 from "env"
import * as import2 from "env"
import * as import3 from "env"
import * as import4 from "env"
import * as import5 from "env"
import * as import6 from "env"
import * as import7 from "env"
import * as import8 from "env"
import * as import9 from "env"
import * as import10 from "env"
import * as import11 from "env"
import * as import12 from "env"
import * as import13 from "env"
import * as import14 from "env"
import * as import15 from "env"
import * as import16 from "env"
import * as import17 from "env"
import * as import18 from "env"
import * as import19 from "env"
import * as import20 from "env"
import * as import21 from "env"
import * as import22 from "env"
import * as import23 from "env"
import * as import24 from "env"
import * as import25 from "env"
import * as import26 from "env"
import * as import27 from "env"
import * as import28 from "env"
import * as import29 from "env"
import * as import30 from "env"
import * as import31 from "env"
import * as import32 from "env"
import * as import33 from "env"
import * as import34 from "env"
import * as import35 from "env"
import * as import36 from "env"
import * as import37 from "env"
import * as import38 from "env"
import * as import39 from "env"
import * as import40 from "env"
import * as import41 from "env"
import * as import42 from "env"
import * as import43 from "env"
import * as import44 from "env"
import * as import45 from "env"
import * as import46 from "env"
import * as import47 from "env"
import * as import48 from "env"
import * as import49 from "env"
import * as import50 from "env"
import * as import51 from "env"
import * as import52 from "env"
import * as import53 from "env"
import * as import54 from "env"
import * as import55 from "env"
import * as import56 from "env"
import * as import57 from "env"
import * as import58 from "env"
import * as import59 from "env"
import * as import60 from "env"
import * as import61 from "env"
import * as import62 from "env"
import * as import63 from "env"
import * as import64 from "env"
import * as import65 from "env"
import * as import66 from "env"
import * as import67 from "env"
import * as import68 from "env"
import * as import69 from "env"
import * as import70 from "env"
import * as import71 from "env"
import * as import72 from "env"
import * as import73 from "env"
import * as import74 from "env"
import * as import75 from "env"
import * as import76 from "env"
import * as import77 from "env"
import * as import78 from "env"
import * as import79 from "env"
import * as import80 from "env"
import * as import81 from "env"
import * as import82 from "env"
import * as import83 from "env"
import * as import84 from "env"
import * as import85 from "env"
import * as import86 from "env"
import * as import87 from "env"
import * as import88 from "env"
import * as import89 from "env"
import * as import90 from "env"
import * as import91 from "env"
import * as import92 from "env"
import * as import93 from "env"
import * as import94 from "env"
import * as import95 from "env"
import * as import96 from "env"
import * as import97 from "env"
import * as import98 from "env"
import * as import99 from "env"
import * as import100 from "env"
import * as import101 from "env"
import * as import102 from "env"
import * as import103 from "env"
import * as import104 from "env"
import * as import105 from "env"
import * as import106 from "env"
import * as import107 from "env"

function __wbg_get_imports() {
    const import0 = {
        __proto__: null,
        __wbg___wbindgen_debug_string_f249a2a76caa9a55: function(arg0, arg1) {
            const ret = debugString(arg1);
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 1, len1, true);
            getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 0, ptr1, true);
        },
        __wbg___wbindgen_string_get_7ce8eee7fd327545: function(arg0, arg1) {
            const obj = arg1;
            const ret = typeof(obj) === 'string' ? obj : undefined;
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 1, len1, true);
            getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 0, ptr1, true);
        },
        __wbg___wbindgen_throw_4c88d8bf264fd984: function(arg0, arg1) {
            throw new Error(getStringFromWasm0(arg0, arg1));
        },
        __wbg__wbg_cb_unref_09736879a3f67559: function(arg0) {
            arg0._wbg_cb_unref();
        },
        __wbg_createRoom_3d4e8b108b6ad360: function() {
            const ret = createRoom();
            return ret;
        },
        __wbg_error_757e9472f8410341: function(arg0, arg1) {
            let deferred0_0;
            let deferred0_1;
            try {
                deferred0_0 = arg0;
                deferred0_1 = arg1;
                console.error(getStringFromWasm0(arg0, arg1));
            } finally {
                wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
            }
        },
        __wbg_isConnected_78962205201a7428: function() {
            const ret = isConnected();
            return ret;
        },
        __wbg_joinRoom_15924fdc1d3b5b72: function(arg0, arg1) {
            const ret = joinRoom(getStringFromWasm0(arg0, arg1));
            return ret;
        },
        __wbg_new_bb74001155cb8ca8: function() {
            const ret = new Error();
            return ret;
        },
        __wbg_pollPacket_1a86ba62075b1a97: function(arg0) {
            const ret = pollPacket();
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 1, len1, true);
            getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 0, ptr1, true);
        },
        __wbg_sendPacket_09d64198550d487f: function(arg0, arg1) {
            sendPacket(getStringFromWasm0(arg0, arg1));
        },
        __wbg_stack_575c4e0918581b9c: function(arg0, arg1) {
            const ret = arg1.stack;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 1, len1, true);
            getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 0, ptr1, true);
        },
        __wbg_then_656f253a5dd7d8ea: function(arg0, arg1, arg2) {
            const ret = arg0.then(arg1, arg2);
            return ret;
        },
        __wbindgen_generic_0000000000000001: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [Externref], shim_idx: 237, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_84df2d7dc6f28eed___convert__closures_____invoke___wasm_bindgen_84df2d7dc6f28eed___JsValue__core_d941ad8722425d2e___result__Result_____wasm_bindgen_84df2d7dc6f28eed___JsError___true_);
            return ret;
        },
        __wbindgen_init_externref_table: function() {
            const table = wasm.__wbindgen_externrefs;
            table.set(0, undefined);
            table.set(1024, undefined);
            table.set(1025, null);
            table.set(1026, true);
            table.set(1027, false);
        },
    };
    return {
        __proto__: null,
        "./ultimate-chicken-horse_bg.js": import0,
        "env": import1,
        "env": import2,
        "env": import3,
        "env": import4,
        "env": import5,
        "env": import6,
        "env": import7,
        "env": import8,
        "env": import9,
        "env": import10,
        "env": import11,
        "env": import12,
        "env": import13,
        "env": import14,
        "env": import15,
        "env": import16,
        "env": import17,
        "env": import18,
        "env": import19,
        "env": import20,
        "env": import21,
        "env": import22,
        "env": import23,
        "env": import24,
        "env": import25,
        "env": import26,
        "env": import27,
        "env": import28,
        "env": import29,
        "env": import30,
        "env": import31,
        "env": import32,
        "env": import33,
        "env": import34,
        "env": import35,
        "env": import36,
        "env": import37,
        "env": import38,
        "env": import39,
        "env": import40,
        "env": import41,
        "env": import42,
        "env": import43,
        "env": import44,
        "env": import45,
        "env": import46,
        "env": import47,
        "env": import48,
        "env": import49,
        "env": import50,
        "env": import51,
        "env": import52,
        "env": import53,
        "env": import54,
        "env": import55,
        "env": import56,
        "env": import57,
        "env": import58,
        "env": import59,
        "env": import60,
        "env": import61,
        "env": import62,
        "env": import63,
        "env": import64,
        "env": import65,
        "env": import66,
        "env": import67,
        "env": import68,
        "env": import69,
        "env": import70,
        "env": import71,
        "env": import72,
        "env": import73,
        "env": import74,
        "env": import75,
        "env": import76,
        "env": import77,
        "env": import78,
        "env": import79,
        "env": import80,
        "env": import81,
        "env": import82,
        "env": import83,
        "env": import84,
        "env": import85,
        "env": import86,
        "env": import87,
        "env": import88,
        "env": import89,
        "env": import90,
        "env": import91,
        "env": import92,
        "env": import93,
        "env": import94,
        "env": import95,
        "env": import96,
        "env": import97,
        "env": import98,
        "env": import99,
        "env": import100,
        "env": import101,
        "env": import102,
        "env": import103,
        "env": import104,
        "env": import105,
        "env": import106,
        "env": import107,
    };
}

function wasm_bindgen_84df2d7dc6f28eed___convert__closures_____invoke___wasm_bindgen_84df2d7dc6f28eed___JsValue__core_d941ad8722425d2e___result__Result_____wasm_bindgen_84df2d7dc6f28eed___JsError___true_(arg0, arg1, arg2) {
    const ret = wasm.wasm_bindgen_84df2d7dc6f28eed___convert__closures_____invoke___wasm_bindgen_84df2d7dc6f28eed___JsValue__core_d941ad8722425d2e___result__Result_____wasm_bindgen_84df2d7dc6f28eed___JsError___true_(arg0, arg1, arg2);
    if (ret[1]) {
        throw takeFromExternrefTable0(ret[0]);
    }
}

const CLOSURE_DTORS = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(state => wasm.__wbindgen_destroy_closure(state.a, state.b));

function debugString(val) {
    switch (typeof val) {
        // primitive types
        case 'number':
        case 'boolean':
        case 'undefined':
        return `${val}`;
        case 'string':
        return JSON.stringify(val);
        case 'bigint':
        return `${val}n`;
        case 'symbol':
        return val.description !== undefined
            ? `Symbol(${val.description})`
            : 'Symbol';
        case 'function':
        return typeof val.name === 'string' && val.name !== ''
            ? `Function(${val.name})`
            : 'Function';
        case 'object': {
            if (val === null) {
                return 'null';
            }
            // objects
            if (Array.isArray(val)) {
                return '[' + Array.from(val, debugString).join(', ') + ']';
            }
            // errors
            if (val instanceof Error) {
                return `${val.name}: ${val.message}\n${val.stack}`;
            }

            const toStringOutput = toString.call(val);
            // Test for built-in
            const className = /\[object ([^\]]+)\]/.exec(toStringOutput)?.[1];

            // Failed to match the standard '[object ClassName]'
            if (className === undefined) {
                return toStringOutput;
            }
            if (className === 'Object') {
                // we're a user defined class or Object
                // JSON.stringify avoids problems with cycles, and is generally much
                // easier than looping through ownProperties of `val`.
                try {
                    return 'Object(' + JSON.stringify(val) + ')';
                } catch (_) {
                    return 'Object';
                }
            }
            // TODO we could test for more things here, like `Set`s and `Map`s.
            return className;
        }
        // Per MDN: 'This list of values is exhaustive.'
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#description
    }
}

let cachedDataViewMemory0 = null;
function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return decodeText(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function makeMutClosure(arg0, arg1, f) {
    const state = { a: arg0, b: arg1, cnt: 1 };
    const real = (...args) => {

        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            state.a = a;
            real._wbg_cb_unref();
        }
    };
    real._wbg_cb_unref = () => {
        if (--state.cnt === 0) {
            wasm.__wbindgen_destroy_closure(state.a, state.b);
            state.a = 0;
            CLOSURE_DTORS.unregister(state);
        }
    };
    CLOSURE_DTORS.register(real, state, state);
    return real;
}

function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }
    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = cachedTextEncoder.encodeInto(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function takeFromExternrefTable0(idx) {
    const value = wasm.__wbindgen_externrefs.get(idx);
    wasm.__externref_table_dealloc(idx);
    return value;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true });
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(bytes) {
    numBytesDecoded += bytes.length;
    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
        cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true });
        cachedTextDecoder.decode();
        numBytesDecoded = bytes.length;
    }
    return cachedTextDecoder.decode(bytes);
}

const cachedTextEncoder = new TextEncoder();

if (!('encodeInto' in cachedTextEncoder)) {
    cachedTextEncoder.encodeInto = function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    };
}

let WASM_VECTOR_LEN = 0;

let wasmModule, wasmInstance, wasm;
function __wbg_finalize_init(instance, module) {
    wasmInstance = instance;
    wasm = instance.exports;
    wasmModule = module;
    cachedDataViewMemory0 = null;
    cachedUint8ArrayMemory0 = null;
    wasm.__wbindgen_start();
    return wasm;
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (!module.ok) {
            throw new Error(`failed to fetch Wasm: ${module.status} ${module.statusText} fetching '${module.url}'`);
        }

        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);
            } catch (e) {
                const validResponse = expectedResponseType(module.type);

                if (validResponse && module.headers.get('Content-Type') !== 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else { throw e; }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);
    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };
        } else {
            return instance;
        }
    }

    function expectedResponseType(type) {
        switch (type) {
            case 'basic': case 'cors': case 'default': return true;
        }
        return false;
    }
}

function initSync(module) {
    if (wasm !== undefined) return wasm;


    if (module !== undefined) {
        if (Object.getPrototypeOf(module) === Object.prototype) {
            ({module} = module)
        } else {
            console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
        }
    }

    const imports = __wbg_get_imports();
    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }
    const instance = new WebAssembly.Instance(module, imports);
    return __wbg_finalize_init(instance, module);
}

let __wbg_init_promise;
async function __wbg_init(module_or_path) {
    if (wasm !== undefined) return wasm;
    if (__wbg_init_promise === undefined) {
        __wbg_init_promise = __wbg_init_once(module_or_path);
        __wbg_init_promise.catch(() => { __wbg_init_promise = undefined; });
    }
    return __wbg_init_promise;
}

async function __wbg_init_once(module_or_path) {

    if (module_or_path !== undefined) {
        if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
            ({module_or_path} = module_or_path)
        } else {
            console.warn('using deprecated parameters for the initialization function; pass a single object instead')
        }
    }

    if (module_or_path === undefined) {
        module_or_path = new URL('ultimate-chicken-horse_bg.wasm', import.meta.url);
    }
    const imports = __wbg_get_imports();

    if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
        module_or_path = fetch(module_or_path);
    }

    const { instance, module } = await __wbg_load(await module_or_path, imports);

    return __wbg_finalize_init(instance, module);
}

export { initSync, __wbg_init as default };
