(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{464:function(t,e,v){"use strict";v.r(e);var i=v(2),_=Object(i.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"vite"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vite"}},[t._v("#")]),t._v(" Vite")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/82b3d7b8fa897d51aa55557c7d92be27.png",alt:""}})]),t._v(" "),e("p",[t._v("Vite 是一种新型"),e("strong",[t._v("前端构建工具")]),t._v("，能够显著提升前端开发体验。它主要由两部分组成：")]),t._v(" "),e("ul",[e("li",[t._v("一个开发服务器，它基于 原生 ES 模块 提供了 丰富的内建功能，如速度快到惊人的 模块热更新（HMR）。")]),t._v(" "),e("li",[t._v("一套构建指令，它使用 Rollup 打包你的代码，并且它是预配置的，可以输出用于生产环境的优化过的静态资源。")])]),t._v(" "),e("h2",{attrs:{id:"vite-可以解决的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vite-可以解决的问题"}},[t._v("#")]),t._v(" Vite 可以解决的问题")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/621ed327bfe903375ba90674ea56e3c2.png",alt:""}})]),t._v(" "),e("p",[t._v("       在这之前，前端项目打包工具主要是 Webpack、Rollup 等工具，但随着项目不断完善，项目的体积也由此增大。从而导致项目在打包编译过程中，使得项目打包时长过长。即使使用了 HMR，可以将其降低到几秒后在浏览器中显示出来，但如此循环，打包编译时间也会增加。")]),t._v(" "),e("p",[t._v("       由此就诞生了 Vite，"),e("strong",[t._v("Vite 最大的特点就是快")]),t._v("。并且"),e("strong",[t._v("开箱即用")]),t._v("（内部已经给我们集成了大量的插件），"),e("strong",[t._v("生态丰富")]),t._v("（兼容 Rollup 生态和 ESbuild 编译模式），Rollup 的开发是早于 Webpack，"),e("strong",[t._v("超高速热重载")]),t._v("（HMR）。")]),t._v(" "),e("p",[t._v("       正是超高速热重载原因使得 Vite 能够在所有前端构建工具中能够脱颖而出。")]),t._v(" "),e("p",[t._v("       为什么说 Vite 就具有超高速热重载，主要跟构建工具内部的打包的方式有关系。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("传统构建方式：每个项目文件都进行打包编译构建")]),t._v("。\n"),e("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/8ba3b88f77778f9e1be6b7e0e873a1de.png",alt:""}})]),t._v(" "),e("li",[e("strong",[t._v("Vite 少了每个文件都进行打包编译构建的这个环节（按需打包编译构建）")]),t._v(" "),e("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/61d2e5077a9a39d1d591bfb87c93ff44.png",alt:""}}),t._v("\n       并且在 Vite 的编译中， Vite 内部还依赖于 "),e("strong",[t._v("esbuild 编译模式")]),t._v("（go 语言编写），下图很明显看出，esbuild 的编译模式的速度要快于其他模式的编译。并且，随着项目的不断增大，编译速度方面并没有太大的影响。\n"),e("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/7434e09ba0d0f89a3df2f78b3d1e3f3c.png",alt:""}})])]),t._v(" "),e("h2",{attrs:{id:"与其他传统构建工具比较-webpack、rollup、vue-cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#与其他传统构建工具比较-webpack、rollup、vue-cli"}},[t._v("#")]),t._v(" 与其他传统构建工具比较（Webpack、Rollup、Vue-cli）")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/79c47d1d42a640471e635b688e713366.png",alt:""}})]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Webpack 更全面")])]),t._v(" "),e("li",[e("strong",[t._v("Rollup 更专一")])]),t._v(" "),e("li",[e("strong",[t._v("Vite 更好用")])])]),t._v(" "),e("p",[t._v("       Webpack 和 Rollup 生态很丰富，集成了大量的插件，导致刚入门的开发者"),e("strong",[t._v("学习成本高")]),t._v("。并且随着项目的不断增大，资源也要被不断地细分。导致出现数个不同的 Webpack 配置。最重要的速度慢。")]),t._v(" "),e("p",[t._v("       而对于 Vue-cli 来说虽然配置项只需要配置 configureWebpack 和 chainWebpack 相对于 Webpack 要少一些。但本质上还是基于 Webpack 来配置的，一旦遇到一些问题，还是需要 Webpack 的方面的知识点。并且与 Vite 相比较下要差点，而且 Vue-cli 只能是在 Vue 的生态下创建。"),e("strong",[t._v("不能跨框架使用")]),t._v("。")]),t._v(" "),e("p",[e("strong",[t._v("在 Vite 1 的版本中是基于 vue 项目的，无法是跨框架使用的")]),t._v("。但目前的 "),e("strong",[t._v("vite 2 是完全可以跨框架的")]),t._v("（Vue3、Vue2、React 等）。虽然说兼容了 Rollup 生态，但 "),e("strong",[t._v("Vite 有其内部的插件系统，我们无需学习 Rollup 插件，直接学习 Vite 自身的语法即可，学习成本低")]),t._v("。")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://vitejs.cn/guide/why.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考资料"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/c35884fb7313cf8de73d706d08d4e19f.png",alt:""}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/eb88fa12fe9d4653266bc5656f34f93e.png",alt:""}}),t._v("\n补充： Webpack 更新到现在已经到版本 5 了，而 Vite 2 发布到现在不到一年，势头快赶超 Webpack")]),t._v(" "),e("p",[t._v("总结一句话："),e("strong",[t._v("Vite 是为项目而生，Webpack 是为构建而生")]),t._v("。")])])}),[],!1,null,null,null);e.default=_.exports}}]);