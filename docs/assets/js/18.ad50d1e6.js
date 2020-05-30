(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{379:function(a,t,s){"use strict";s.r(t);var e=s(44),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"immuclient"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#immuclient"}},[a._v("#")]),a._v(" immuclient")]),a._v(" "),s("p",[a._v("work in progress")]),a._v(" "),s("h2",{attrs:{id:"contents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[a._v("#")]),a._v(" Contents")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#latest-binaries"}},[a._v("Latest binaries")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#build"}},[a._v("Build")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#docker"}},[a._v("Docker")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#run-immugw"}},[a._v("Use immuclient")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#examples"}},[a._v("Examples")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#auditor"}},[a._v("Auditor")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#license"}},[a._v("License")])])]),a._v(" "),s("h2",{attrs:{id:"latest-binaries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#latest-binaries"}},[a._v("#")]),a._v(" Latest binaries")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/codenotary/immudb/releases/latest",target:"_blank",rel:"noopener noreferrer"}},[a._v("Get the latest builds"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"build"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build"}},[a._v("#")]),a._v(" Build")]),a._v(" "),s("p",[a._v("clone the immudb repository locally")]),a._v(" "),s("p",[s("code",[a._v("git clone https://github.com/codenotary/immudb.git")])]),a._v(" "),s("h3",{attrs:{id:"linux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[a._v("#")]),a._v(" Linux")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GOOS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("linux "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GOARCH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("amd64 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" immuclient-static\n")])])]),s("h3",{attrs:{id:"macos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[a._v("#")]),a._v(" MacOS")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GOOS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("darwin "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GOARCH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("amd64 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" immuclient-static\n")])])]),s("h3",{attrs:{id:"windows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[a._v("#")]),a._v(" Windows")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GOOS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("windows "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GOARCH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("amd64 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" immuclient-static\n")])])]),s("h2",{attrs:{id:"docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[a._v("#")]),a._v(" Docker")]),a._v(" "),s("h3",{attrs:{id:"build-your-own-docker-container-image"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-your-own-docker-container-image"}},[a._v("#")]),a._v(" build your own Docker container image")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("docker build -t myown/immuclient:latest -f Dockerfile.immuclient "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n")])])]),s("h3",{attrs:{id:"run-immuclient-in-a-container"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-immuclient-in-a-container"}},[a._v("#")]),a._v(" run immuclient in a container")]),a._v(" "),s("p",[a._v("As immuclient has a direct command and interactive, you can simply add the immuclient command after docker run.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("docker run -it --rm -name immuclient codenotary/immuclient:latest -a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("immudb host"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[a._v("You can now use the interactive mode of immuclient and type commands until you type exit. Use help to get a command reference.")]),a._v(" "),s("h2",{attrs:{id:"use-immuclient"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-immuclient"}},[a._v("#")]),a._v(" Use immuclient")]),a._v(" "),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[a._v("#")]),a._v(" Examples")]),a._v(" "),s("h2",{attrs:{id:"auditor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#auditor"}},[a._v("#")]),a._v(" Auditor")]),a._v(" "),s("h2",{attrs:{id:"license"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[a._v("#")]),a._v(" License")]),a._v(" "),s("p",[a._v("immuclient is "),s("a",{attrs:{href:"LICENSE"}},[a._v("Apache v2.0 License")]),a._v(".")])])}),[],!1,null,null,null);t.default=r.exports}}]);