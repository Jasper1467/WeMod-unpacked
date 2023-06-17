"use strict";
(global.webpackChunkWeMod = global.webpackChunkWeMod || []).push([
  [1856],
  {
    48736: (t, e, r) => {
      r.d(e, { v: () => s });
      const i = new Map();
      function n(t) {
        let e = i.get(t);
        if (!e) {
          const r = [];
          for (let e = 0; e < t.length; e++) {
            const i = t.charAt(e);
            i >= "A" && i <= "Z" ? r.push("_", i.toLowerCase()) : r.push(i);
          }
          (e = r.join("")), i.set(t, e);
        }
        return e;
      }
      function s(t) {
        return "object" == typeof t && null !== t
          ? Array.isArray(t)
            ? t.map(s)
            : Object.fromEntries(
                Object.entries(t).map(([t, e]) => [n(t), s(e)])
              )
          : t;
      }
    },
    11912: (t, e, r) => {
      r.d(e, {
        $L: () => i.$L,
        HB: () => n,
        JD: () => i.JD,
        K4: () => i.K4,
        Q7: () => i.Q7,
        UC: () => i.UC,
        ie: () => i.ie,
        rk: () => i.rk,
        tI: () => i.tI,
        wK: () => i.wK,
        yM: () => i.yM,
      });
      var i = r(339);
      function n(t, e, r) {
        return t.on(e, r), (0, i.JD)(() => t.off(e, r));
      }
    },
    67645: (t, e, r) => {
      r.d(e, { H: () => s });
      var i = r(20259);
      async function n(t) {
        try {
          const e = await i.QT.load(t),
            r = await e.ntHeaders.getResourceDirectory(t);
          if (!r) throw new Error("Resource directory not found.");
          const n = r.getVersionInfo();
          if (!n) throw new Error("Version info not found.");
          return n.fileVersion;
        } catch {
          return null;
        }
      }
      async function s(t) {
        const e = `${t}\\Microsoft.NET\\Framework\\v4.0.30319\\mscorlib.dll`,
          r = `${t}\\Microsoft.NET\\Framework64\\v4.0.30319\\mscorlib.dll`,
          i = (await n(r)) || (await n(e));
        if (null === i) return !1;
        const s = i.split("."),
          o = parseInt(s[0], 10);
        if (o > 4) return !0;
        if (o < 4) return !1;
        const a = parseInt(s[1], 10);
        return a > 7 || (!(a < 7) && parseInt(s[2], 10) >= 2556);
      }
    },
    950: (t, e, r) => {
      r.d(e, { O: () => s, c: () => n });
      var i = r(56901);
      class n {
        constructor(t, e) {
          (this.handle = t),
            (this.buffer = e),
            (this.position = 0),
            (this.bufferPosition = null),
            (this.bufferLength = 0),
            (this.overflowBuffer = null);
        }
        static async open(t, e = 262144) {
          return new n(await i.promises.open(t, "r"), Buffer.alloc(e));
        }
        async close() {
          await this.handle.close(), (this.handle = null);
        }
        async loadBuffer() {
          const t = this.position - (this.position % this.buffer.length);
          if (t === this.bufferPosition) return !1;
          {
            this.bufferPosition = t;
            const e = await this.handle.read(
              this.buffer,
              0,
              this.buffer.length,
              this.bufferPosition
            );
            return (this.bufferLength = e.bytesRead), !0;
          }
        }
        async read(t) {
          await this.loadBuffer();
          const e = this.position - this.bufferPosition;
          if (t <= this.bufferLength - e) {
            const r = this.buffer.slice(e, e + t);
            return (this.position += t), r;
          }
          {
            const r =
              null === this.overflowBuffer || this.overflowBuffer.length < t
                ? (this.overflowBuffer = Buffer.alloc(t))
                : this.overflowBuffer;
            let i = 0,
              n = this.buffer.copy(r, 0, e, this.bufferLength);
            this.position += n;
            let s = t - n;
            for (; s > 0 && 0 !== n && (await this.loadBuffer()); )
              (i += n),
                (n = this.buffer.copy(r, i, 0, Math.min(s, this.bufferLength))),
                (this.position += n),
                (s -= n);
            return r.slice(0, t - s);
          }
        }
      }
      class s {
        constructor(t, e = 0) {
          (this.buffer = t), (this.position = e);
        }
        readByte() {
          return this.readNumber("readUInt8", 1);
        }
        readInt32() {
          return this.readNumber("readInt32LE", 4);
        }
        readUInt32() {
          return this.readNumber("readUInt32LE", 4);
        }
        readUInt64() {
          return this.readNumber("readBigUInt64LE", 8);
        }
        readInt64() {
          return this.readNumber("readBigInt64LE", 8);
        }
        readFloat() {
          return this.readNumber("readFloatLE", 4);
        }
        readNumber(t, e) {
          const r = this.buffer[t](this.position);
          return (this.position += e), r;
        }
        readNullTerminatedString(t) {
          const e = this.buffer.indexOf(0, this.position),
            r = this.buffer.toString(t, this.position, e);
          return (this.position = e + 1), r;
        }
      }
    },
    77995: (t, e, r) => {
      r.d(e, { G: () => i });
      class i {
        #t;
        #e;
        #r;
        #i;
        #n;
        #s;
        #o;
        constructor(t) {
          (this.#n = []),
            (this.#s = []),
            this.#n.push({ type: "text", text: t });
        }
        setScenario(t) {
          return (this.#t = t), this;
        }
        setDuration(t) {
          return (this.#e = t), this;
        }
        setActivationType(t) {
          return (this.#r = t), this;
        }
        setLaunchString(t) {
          return (this.#i = t), this;
        }
        addText(t, e) {
          return this.#n.push({ type: "text", text: t, placement: e }), this;
        }
        addImage(t, e, r) {
          return (
            this.#n.push({
              type: "image",
              src: t,
              placement: e ?? void 0,
              hints: { crop: r },
            }),
            this
          );
        }
        addAction(t) {
          return this.#s.push(t), this;
        }
        setAudio(t) {
          return (this.#o = t), this;
        }
        toXml() {
          const t = document.implementation.createDocument("", "", null),
            e = t.createElement("toast");
          this.#t && e.setAttribute("scenario", this.#t),
            this.#e && e.setAttribute("duration", this.#e),
            this.#r && e.setAttribute("activationType", this.#r),
            this.#i && e.setAttribute("launch", this.#i);
          const r = t.createElement("visual"),
            i = t.createElement("binding");
          i.setAttribute("template", "ToastGeneric");
          for (const e of this.#n) {
            const r = t.createElement(e.type);
            "text" === e.type &&
              ((r.textContent = e.text),
              e.placement && r.setAttribute("placement", e.placement),
              e.hints &&
                e.hints.maxLines &&
                r.setAttribute("hint-maxLines", e.hints.maxLines.toString())),
              "image" === e.type &&
                (r.setAttribute("src", e.src),
                e.placement && r.setAttribute("placement", e.placement),
                e.hints &&
                  e.hints.crop &&
                  r.setAttribute("hint-crop", e.hints.crop)),
              i.appendChild(r);
          }
          if ((r.appendChild(i), e.appendChild(r), this.#s.length > 0)) {
            const r = t.createElement("actions");
            for (const e of this.#s) {
              const i = t.createElement("action");
              i.setAttribute("content", e.content),
                i.setAttribute("arguments", e.arguments.toString()),
                e.activationType &&
                  i.setAttribute("activationType", e.activationType),
                e.placement && i.setAttribute("placement", e.placement),
                e.imageUri && i.setAttribute("imageUri", e.imageUri),
                e.hints &&
                  (e.hints.inputId &&
                    i.setAttribute("hint-intputId", e.hints.inputId),
                  e.hints.buttonStyle &&
                    i.setAttribute("hint-buttonStyle", e.hints.buttonStyle),
                  e.hints.toolTip &&
                    i.setAttribute("hint-toolTip", e.hints.toolTip)),
                r.appendChild(i);
            }
            e.appendChild(r);
          }
          if (this.#o) {
            const r = t.createElement("audio");
            this.#o.src && r.setAttribute("src", this.#o.src),
              this.#o.loop &&
                r.setAttribute("loop", this.#o.loop ? "true" : "false"),
              this.#o.silent &&
                r.setAttribute("silent", this.#o.silent ? "true" : "false"),
              e.appendChild(r);
          }
          return (
            t.appendChild(e),
            new XMLSerializer().serializeToString(t.documentElement)
          );
        }
      }
    },
    57638: (t, e, r) => {
      r.d(e, {
        DZ: () => a,
        EZ: () => s,
        XX: () => o,
        YP: () => f,
        v_: () => u,
      });
      function i(t) {
        return 47 === t || 92 === t;
      }
      function n(t) {
        return (t >= 65 && t <= 90) || (t >= 97 && t <= 122);
      }
      function s(t, e) {
        let r = 0,
          s = -1,
          o = !0;
        if (
          (t.length >= 2 &&
            n(t.charCodeAt(0)) &&
            58 === t.charCodeAt(1) &&
            (r = 2),
          void 0 !== e && e.length > 0 && e.length <= t.length)
        ) {
          if (e === t) return "";
          let n = e.length - 1,
            a = -1;
          for (let f = t.length - 1; f >= r; --f) {
            const u = t.charCodeAt(f);
            if (i(u)) {
              if (!o) {
                r = f + 1;
                break;
              }
            } else
              -1 === a && ((o = !1), (a = f + 1)),
                n >= 0 &&
                  (u === e.charCodeAt(n)
                    ? -1 == --n && (s = f)
                    : ((n = -1), (s = a)));
          }
          r === s ? (s = a) : -1 === s && (s = t.length);
        } else {
          for (let e = t.length - 1; e >= r; --e)
            if (i(t.charCodeAt(e))) {
              if (!o) {
                r = e + 1;
                break;
              }
            } else -1 === s && ((o = !1), (s = e + 1));
          if (-1 === s) return "";
        }
        return t.slice(r, s);
      }
      function o(t) {
        const e = t.length;
        if (0 === e) return ".";
        let r = -1,
          s = 0;
        const o = t.charCodeAt(0);
        if (1 === e) return i(o) ? t : ".";
        if (i(o)) {
          if (((r = s = 1), i(t.charCodeAt(1)))) {
            let n = 2,
              o = n;
            for (; n < e && !i(t.charCodeAt(n)); ) n++;
            if (n < e && n !== o) {
              for (o = n; n < e && i(t.charCodeAt(n)); ) n++;
              if (n < e && n !== o) {
                for (o = n; n < e && !i(t.charCodeAt(n)); ) n++;
                if (n === e) return t;
                n !== o && (r = s = n + 1);
              }
            }
          }
        } else
          n(o) &&
            58 === t.charCodeAt(1) &&
            ((r = e > 2 && i(t.charCodeAt(2)) ? 3 : 2), (s = r));
        let a = -1,
          f = !0;
        for (let r = e - 1; r >= s; --r)
          if (i(t.charCodeAt(r))) {
            if (!f) {
              a = r;
              break;
            }
          } else f = !1;
        if (-1 === a) {
          if (-1 === r) return ".";
          a = r;
        }
        return t.slice(0, a);
      }
      function a(t) {
        let e = 0,
          r = -1,
          s = 0,
          o = -1,
          a = !0,
          f = 0;
        t.length >= 2 &&
          58 === t.charCodeAt(1) &&
          n(t.charCodeAt(0)) &&
          (e = s = 2);
        for (let n = t.length - 1; n >= e; --n) {
          const e = t.charCodeAt(n);
          if (i(e)) {
            if (!a) {
              s = n + 1;
              break;
            }
          } else
            -1 === o && ((a = !1), (o = n + 1)),
              46 === e
                ? -1 === r
                  ? (r = n)
                  : 1 !== f && (f = 1)
                : -1 !== r && (f = -1);
        }
        return -1 === r ||
          -1 === o ||
          0 === f ||
          (1 === f && r === o - 1 && r === s + 1)
          ? ""
          : t.slice(r, o);
      }
      function f(t) {
        const e = t.length;
        if (0 === e) return !1;
        const r = t.charCodeAt(0);
        return (
          i(r) ||
          (e > 2 && n(r) && 58 === t.charCodeAt(1) && i(t.charCodeAt(2)))
        );
      }
      function u(...t) {
        if (0 === t.length) return ".";
        let e, r;
        for (const i of t)
          i.length > 0 && (void 0 === e ? (e = r = i) : (e += `\\${i}`));
        if (void 0 === e) return ".";
        let s = !0,
          o = 0;
        if (i(r.charCodeAt(0))) {
          ++o;
          const t = r.length;
          t > 1 &&
            i(r.charCodeAt(1)) &&
            (++o, t > 2 && (i(r.charCodeAt(2)) ? ++o : (s = !1)));
        }
        if (s) {
          for (; o < e.length && i(e.charCodeAt(o)); ) o++;
          o >= 2 && (e = `\\${e.slice(o)}`);
        }
        return (function (t) {
          const e = t.length;
          if (0 === e) return ".";
          const r = t.charCodeAt(0);
          if (1 === e) return 47 === r ? "\\" : t;
          let s,
            o = 0,
            a = !1;
          if (i(r))
            if (((a = !0), i(t.charCodeAt(1)))) {
              let r = 2,
                n = r;
              for (; r < e && !i(t.charCodeAt(r)); ) r++;
              if (r < e && r !== n) {
                const a = t.slice(n, r);
                for (n = r; r < e && i(t.charCodeAt(r)); ) r++;
                if (r < e && r !== n) {
                  for (n = r; r < e && !i(t.charCodeAt(r)); ) r++;
                  if (r === e) return `\\\\${a}\\${t.slice(n)}\\`;
                  r !== n && ((s = `\\\\${a}\\${t.slice(n, r)}`), (o = r));
                }
              }
            } else o = 1;
          else
            n(r) &&
              58 === t.charCodeAt(1) &&
              ((s = t.slice(0, 2)),
              (o = 2),
              e > 2 && i(t.charCodeAt(2)) && ((a = !0), (o = 3)));
          let f =
            o < e
              ? (function (t, e) {
                  let r = "",
                    n = 0,
                    s = -1,
                    o = 0,
                    a = 0;
                  for (let f = 0; f <= t.length; ++f) {
                    if (f < t.length) a = t.charCodeAt(f);
                    else {
                      if (i(a)) break;
                      a = 47;
                    }
                    if (i(a)) {
                      if (s === f - 1 || 1 === o);
                      else if (2 === o) {
                        if (
                          r.length < 2 ||
                          2 !== n ||
                          46 !== r.charCodeAt(r.length - 1) ||
                          46 !== r.charCodeAt(r.length - 2)
                        ) {
                          if (r.length > 2) {
                            const t = r.lastIndexOf("\\");
                            -1 === t
                              ? ((r = ""), (n = 0))
                              : ((r = r.slice(0, t)),
                                (n = r.length - 1 - r.lastIndexOf("\\"))),
                              (s = f),
                              (o = 0);
                            continue;
                          }
                          if (0 !== r.length) {
                            (r = ""), (n = 0), (s = f), (o = 0);
                            continue;
                          }
                        }
                        e && ((r += r.length > 0 ? "\\.." : ".."), (n = 2));
                      } else
                        r.length > 0
                          ? (r += `\\${t.slice(s + 1, f)}`)
                          : (r = t.slice(s + 1, f)),
                          (n = f - s - 1);
                      (s = f), (o = 0);
                    } else 46 === a && -1 !== o ? ++o : (o = -1);
                  }
                  return r;
                })(t.slice(o), !a)
              : "";
          return (
            0 !== f.length || a || (f = "."),
            f.length > 0 && i(t.charCodeAt(e - 1)) && (f += "\\"),
            void 0 === s ? (a ? `\\${f}` : f) : a ? `${s}\\${f}` : `${s}${f}`
          );
        })(e);
      }
    },
    20259: (t, e, r) => {
      r.d(e, { J: () => i, QT: () => o });
      var i,
        n,
        s = r(56901);
      class o {
        #a;
        constructor(t) {
          this.#a = t;
        }
        static async load(t) {
          const e = await s.promises.open(t, "r");
          try {
            const t = Buffer.alloc(2048),
              r = await e.read(t, 0, t.length, 0),
              i = new o(r.buffer);
            if (2048 === r.bytesRead && 23117 === i.dosHeader.magic) return i;
          } finally {
            await e.close();
          }
          throw new Error("Not a PE image.");
        }
        get dosHeader() {
          return new a(this.#a);
        }
        get ntHeaders() {
          return new f(this.#a.slice(this.dosHeader.lfanew));
        }
      }
      class a {
        #a;
        constructor(t) {
          this.#a = t;
        }
        get magic() {
          return this.#a.readUInt16LE(0);
        }
        get lfanew() {
          return this.#a.readUInt32LE(60);
        }
        get stub() {
          return this.#a.slice(64, this.lfanew - 64);
        }
      }
      class f {
        #a;
        constructor(t) {
          this.#a = t;
        }
        get signature() {
          return this.#a.readUInt32LE(0);
        }
        get fileHeader() {
          return new u(this.#a.slice(4, 24));
        }
        get optionalHeader() {
          return new h(
            this.#a.slice(24, 24 + this.fileHeader.sizeOfOptionalHeader)
          );
        }
        get sectionHeaders() {
          return new c(
            this.#a.slice(24 + this.fileHeader.sizeOfOptionalHeader),
            this.fileHeader.numberOfSections
          );
        }
        async getResourceDirectory(t) {
          const e = this.optionalHeader.directories[2].rva;
          if (0 === e) return null;
          const r = this.sectionHeaders
              .all()
              .find((t) => t.virtualAddress === e),
            i = await s.promises.open(t, "r");
          try {
            const t = Buffer.alloc(r.sizeOfRawData),
              e = await i.read(t, 0, t.length, r.pointerToRawData);
            return e.bytesRead !== r.sizeOfRawData
              ? null
              : new l(e.buffer, r.virtualAddress);
          } finally {
            await i.close();
          }
        }
      }
      !(function (t) {
        (t[(t.I386 = 332)] = "I386"),
          (t[(t.IA64 = 512)] = "IA64"),
          (t[(t.AMD64 = 34404)] = "AMD64");
      })(i || (i = {})),
        (function (t) {
          (t[(t.RELOCS_STRIPPED = 1)] = "RELOCS_STRIPPED"),
            (t[(t.EXECUTABLE_IMAGE = 2)] = "EXECUTABLE_IMAGE"),
            (t[(t.LINE_NUMS_STRIPPED = 4)] = "LINE_NUMS_STRIPPED"),
            (t[(t.IMAGE_FILE_LOCAL_SYMS_STRIPPED = 8)] =
              "IMAGE_FILE_LOCAL_SYMS_STRIPPED"),
            (t[(t.AGGRESIVE_WS_TRIM = 16)] = "AGGRESIVE_WS_TRIM"),
            (t[(t.LARGE_ADDRESS_AWARE = 32)] = "LARGE_ADDRESS_AWARE"),
            (t[(t.BYTES_REVERSED_LO = 128)] = "BYTES_REVERSED_LO"),
            (t[(t.X32BIT_MACHINE = 256)] = "X32BIT_MACHINE"),
            (t[(t.DEBUG_STRIPPED = 512)] = "DEBUG_STRIPPED"),
            (t[(t.REMOVABLE_RUN_FROM_SWAP = 1024)] = "REMOVABLE_RUN_FROM_SWAP"),
            (t[(t.NET_RUN_FROM_SWAP = 2048)] = "NET_RUN_FROM_SWAP"),
            (t[(t.SYSTEM = 4096)] = "SYSTEM"),
            (t[(t.DLL = 8192)] = "DLL"),
            (t[(t.UP_SYSTEM_ONLY = 16384)] = "UP_SYSTEM_ONLY"),
            (t[(t.BYTES_REVERSED_HI = 32768)] = "BYTES_REVERSED_HI");
        })(n || (n = {}));
      class u {
        #a;
        constructor(t) {
          this.#a = t;
        }
        get machine() {
          return this.#a.readUInt16LE(0);
        }
        get numberOfSections() {
          return this.#a.readUInt16LE(2);
        }
        get timestamp() {
          return this.#a.readUInt32LE(4);
        }
        get pointerToSymbolTable() {
          return this.#a.readUInt32LE(8);
        }
        get numberOfSymbols() {
          return this.#a.readUInt32LE(12);
        }
        get sizeOfOptionalHeader() {
          return this.#a.readUInt16LE(16);
        }
        get characteristics() {
          return this.#a.readUInt16LE(18);
        }
      }
      class h {
        #a;
        constructor(t) {
          this.#a = t;
        }
        get magic() {
          return this.#a.readUInt16LE(0);
        }
        get majorLinkerVersion() {
          return this.#a.readUInt8(2);
        }
        get minorLinkerVersion() {
          return this.#a.readUInt8(3);
        }
        get linkerVersion() {
          return `${this.majorLinkerVersion}.${this.minorLinkerVersion}`;
        }
        get directories() {
          const t = [];
          for (let e = 0; e < 16; e++) t[e] = this.directoryInfo(e);
          return t;
        }
        directoryInfo(t) {
          const e = this.#f(t);
          return {
            rva: this.#a.readUInt32LE(e),
            size: this.#a.readUInt32LE(e + 4),
          };
        }
        #f(t) {
          return (267 === this.magic ? 96 : 112) + 8 * t;
        }
      }
      class c {
        #a;
        #u;
        constructor(t, e) {
          (this.#a = t), (this.#u = e);
        }
        find(t) {
          for (let e = 0; e < this.#u; e++) {
            const r = 40 * e;
            let i = this.#a.toString("ascii", r, r + 7);
            if (((i = i.substring(0, i.indexOf("\0"))), i === t))
              return this.#h(e);
          }
          return null;
        }
        all() {
          const t = [];
          for (let e = 0; e < this.#u; e++) t.push(this.#h(e));
          return t;
        }
        #h(t) {
          const e = 40 * t,
            r = this.#a.toString("ascii", e, e + 7);
          return {
            name: r.substring(0, r.indexOf("\0")),
            virtualSize: this.#a.readUInt32LE(e + 8),
            virtualAddress: this.#a.readUInt32LE(e + 12),
            sizeOfRawData: this.#a.readUInt32LE(e + 16),
            pointerToRawData: this.#a.readUInt32LE(e + 20),
            pointerToRelocations: this.#a.readUInt32LE(e + 24),
            pointerToLineNumbers: this.#a.readUInt32LE(e + 28),
            numberOfRelocations: this.#a.readUInt16LE(e + 32),
            numberOfLineNumbers: this.#a.readUInt16LE(e + 34),
            characteristics: this.#a.readUInt32LE(e + 36),
          };
        }
      }
      class l {
        #a;
        #c;
        #l;
        constructor(t, e, r = 0) {
          (this.#a = t), (this.#c = e), (this.#l = r);
        }
        get characteristics() {
          return this.#a.readUInt32LE(this.#l + 0);
        }
        get timestamp() {
          return this.#a.readUInt32LE(this.#l + 4);
        }
        get resourceMajorVersion() {
          return this.#a.readUInt16LE(this.#l + 8);
        }
        get resourceMinorVersion() {
          return this.#a.readUInt16LE(this.#l + 10);
        }
        get resourceVersionString() {
          return `${this.resourceMajorVersion}.${this.resourceMinorVersion}`;
        }
        get numberOfNamedEntries() {
          return this.#a.readUInt16LE(this.#l + 12);
        }
        get numberOfIdEntries() {
          return this.#a.readUInt16LE(this.#l + 14);
        }
        get numberOfEntries() {
          return this.numberOfNamedEntries + this.numberOfIdEntries;
        }
        getVersionInfo() {
          const t = this.entries().find((t) => 16 === t.id && t.isSubdirectory);
          if (!t) return null;
          let e = t.subdirectory.entries();
          if (0 === e.length || !e[0].isSubdirectory) return null;
          if (
            ((e = e[0].subdirectory.entries()), 0 === e.length || !e[0].isData)
          )
            return null;
          const r = e[0].data,
            i = r.rva - this.#c,
            n = this.#a.slice(i, i + r.size);
          return new b(n);
        }
        entries() {
          const t = this.numberOfEntries,
            e = [];
          for (let r = 0; r < t; r++)
            e.push(new d(this.#a, this.#c, this.#l + 16 + 8 * r));
          return e;
        }
      }
      class d {
        #a;
        #c;
        #l;
        constructor(t, e, r) {
          (this.#a = t), (this.#c = e), (this.#l = r);
        }
        get name() {
          let t = this.#a.readInt32LE(this.#l);
          if (t >= 0) return null;
          t &= 2147483647;
          const e = this.#a.readUInt16LE(t);
          return this.#a.toString("utf16le", t + 2, t + 2 + e);
        }
        get id() {
          const t = this.#a.readInt32LE(this.#l);
          return t >= 0 ? t : null;
        }
        get hasName() {
          return null === this.id;
        }
        get location() {
          return 2147483647 & this.#a.readUInt32LE(this.#l + 4);
        }
        get isSubdirectory() {
          return this.#a.readInt32LE(this.#l + 4) < 0;
        }
        get isData() {
          return !this.isSubdirectory;
        }
        get subdirectory() {
          return this.isSubdirectory
            ? new l(this.#a, this.#c, this.location)
            : null;
        }
        get data() {
          if (!this.isData) return null;
          const t = this.location;
          return {
            rva: this.#a.readUInt32LE(t),
            size: this.#a.readUInt32LE(t + 4),
            codePage: this.#a.readUInt32LE(t + 8),
            reserved: this.#a.readUInt32LE(t + 12),
          };
        }
      }
      class b {
        #a;
        #l;
        constructor(t) {
          this.#a = t;
          let e = 38;
          const r = e + 32;
          for (; e <= r && 4277077181 !== t.readUInt32LE(e); ) e++;
          if (e > r) throw new Error("Invalid VS_VERSION_INFO structure.");
          this.#l = e;
        }
        #d(t) {
          return [
            this.#a.readUInt16LE(t + 2),
            this.#a.readUInt16LE(t),
            this.#a.readUInt16LE(t + 6),
            this.#a.readUInt16LE(t + 4),
          ].join(".");
        }
        get fileVersion() {
          return this.#d(this.#l + 8);
        }
        get productVersion() {
          return this.#d(this.#l + 16);
        }
      }
    },
    51674: (t, e, r) => {
      r.d(e, { N: () => s });
      var i = r(75817);
      const n = [48, 32, 16];
      function s(t) {
        return i.Z.read(t)
          .then((t) => {
            const e = t.bitmap,
              r = e.width;
            if (t._originalMime !== i.Z.MIME_PNG || r !== e.height)
              throw new Error("Please give me an png image of 256x256 pixels.");
            256 !== r && t.resize(256, 256, i.Z.RESIZE_BICUBIC);
            const s = n.map((e) => t.clone().resize(e, e, i.Z.RESIZE_BICUBIC));
            return Promise.all(s.concat(t));
          })
          .then(o);
      }
      function o(t) {
        const e = (function (t) {
            const e = Buffer.alloc(6);
            return (
              e.writeUInt16LE(0, 0),
              e.writeUInt16LE(1, 2),
              e.writeUInt16LE(t, 4),
              e
            );
          })(t.length),
          r = [e],
          i = [];
        let n = e.length,
          s = e.length + 16 * t.length;
        return (
          t.forEach((t) => {
            const e = (function (t, e) {
                const r = Buffer.alloc(16),
                  i = t.bitmap,
                  n = i.data.length + 40,
                  s = i.width >= 256 ? 0 : i.width,
                  o = s;
                return (
                  r.writeUInt8(s, 0),
                  r.writeUInt8(o, 1),
                  r.writeUInt8(0, 2),
                  r.writeUInt8(0, 3),
                  r.writeUInt16LE(1, 4),
                  r.writeUInt16LE(32, 6),
                  r.writeUInt32LE(n, 8),
                  r.writeUInt32LE(e, 12),
                  r
                );
              })(t, s),
              o = (function (t) {
                const e = Buffer.alloc(40),
                  r = t.bitmap.width,
                  i = 2 * r;
                return (
                  e.writeUInt32LE(40, 0),
                  e.writeInt32LE(r, 4),
                  e.writeInt32LE(i, 8),
                  e.writeUInt16LE(1, 12),
                  e.writeUInt16LE(32, 14),
                  e.writeUInt32LE(0, 16),
                  e.writeUInt32LE(0, 20),
                  e.writeInt32LE(0, 24),
                  e.writeInt32LE(0, 28),
                  e.writeUInt32LE(0, 32),
                  e.writeUInt32LE(0, 36),
                  e
                );
              })(t),
              a = (function (t) {
                const e = t.bitmap,
                  r = e.data.length,
                  i = e.width,
                  n = i,
                  s =
                    (function (t) {
                      return t % 32 == 0 ? t / 8 : 4 * (Math.floor(t / 32) + 1);
                    })(i) * n,
                  o = Buffer.alloc(r + s);
                for (let e = 0; e < n; e++)
                  for (let r = 0; r < i; r++) {
                    const s = t.getPixelColor(r, e),
                      a =
                        ((s >> 8) & 255) |
                        (((s >> 16) & 255) << 8) |
                        (((s >> 24) & 255) << 16) |
                        ((255 & s) << 24),
                      f = 4 * ((n - e - 1) * i + r);
                    o.writeInt32LE(a, f);
                  }
                for (let e = 0; e < n; e++)
                  for (let s = 0; s < i; s++) {
                    const a = (255 & t.getPixelColor(s, e)) > 0 ? 0 : 1,
                      f = (n - e - 1) * i + s,
                      u =
                        i % 32 == 0
                          ? Math.floor(i / 32)
                          : Math.floor(i / 32) + 1,
                      h = Math.floor(f / i),
                      c = Math.floor(f % i),
                      l = 1 & a,
                      d = r + h * u * 4 + Math.floor(c / 8),
                      b = o.readUInt8(d) | (l << (7 - (c % 8)));
                    o.writeUInt8(b, d);
                  }
                return o;
              })(t);
            r.push(e),
              i.push(o, a),
              (n += e.length + o.length + a.length),
              (s += o.length + a.length);
          }),
          Buffer.concat(r.concat(i), n)
        );
      }
    },
    78219: (t, e, r) => {
      r.d(e, { V: () => s, i: () => n });
      var i = r(6113);
      function n(t, e) {
        return s(60 * t, 60 * e);
      }
      function s(t, e) {
        return i.randomInt(1e3 * t, 1e3 * e);
      }
    },
    9288: (t, e, r) => {
      r.d(e, { y: () => s });
      var i = r(74221);
      function n(t, e, r) {
        return t.item[r].toLowerCase().startsWith(e) ? 1 : 0;
      }
      function s(t, e, r, s) {
        if (!e || "string" != typeof e) return t.slice(0);
        const o = e.toLowerCase();
        return new i.Z(t, {
          includeScore: !0,
          includeMatches: !0,
          threshold: 0.18,
          minMatchCharLength: 1,
          keys: r,
          shouldSort: !0,
          ignoreFieldNorm: !0,
          ignoreLocation: !0,
        })
          .search(e)
          .sort((t, e) => (s ? t.item[s].localeCompare(e.item[s]) : 0))
          .sort((t, e) => (s ? n(e, o, s) - n(t, o, s) : 0))
          .map((t) => t.item);
      }
    },
    52180: (t, e, r) => {
      r.d(e, { G: () => n });
      const i = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/;
      class n {
        constructor(t, e, r, i) {
          (this.major = t),
            (this.minor = e),
            (this.build = r),
            (this.revision = i);
        }
        static parse(t) {
          const e = i.exec(t);
          return e
            ? new this(Number(e[1]), Number(e[2]), Number(e[3]), Number(e[4]))
            : null;
        }
        compare(t) {
          return (
            this.major - t.major ||
            this.minor - t.minor ||
            this.build - t.build ||
            this.revision - t.revision
          );
        }
        eq(t) {
          return 0 === this.compare(t);
        }
        gt(t) {
          return this.compare(t) > 0;
        }
        gte(t) {
          return this.compare(t) >= 0;
        }
        lt(t) {
          return this.compare(t) < 0;
        }
        lte(t) {
          return this.compare(t) <= 0;
        }
      }
    },
    40903: (t, e, r) => {
      r.d(e, { I: () => n });
      var i = r(56901);
      async function n(t) {
        const e = await i.promises.open(t, "r");
        try {
          const t = Buffer.alloc(14);
          return (await e.read(t, 0, t.length, 0)).bytesRead === t.length &&
            67324752 === t.readUInt32LE(0)
            ? (function (t, e) {
                const r = t.toString(2).padStart(16, "0"),
                  i = [
                    parseInt(r.substring(0, 7), 2) + 1980,
                    parseInt(r.substring(7, 11), 2),
                    parseInt(r.substring(11, 16), 2),
                  ].join("-"),
                  n = e.toString(2).padStart(16, "0"),
                  s = [
                    parseInt(n.substring(0, 5), 2),
                    parseInt(n.substring(5, 11), 2),
                    2 * parseInt(n.substring(11, 16), 2),
                  ].join(":");
                return new Date(`${i} ${s} GMT+0`);
              })(t.readUInt16LE(12), t.readUInt16LE(10))
            : null;
        } finally {
          await e.close();
        }
      }
    },
  },
]);
