(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{463:function(_,t,e){"use strict";e.r(t);var s=e(2),a=Object(s.a)({},(function(){var _=this,t=_._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h2",{attrs:{id:"kmp-算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kmp-算法"}},[_._v("#")]),_._v(" KMP 算法")]),_._v(" "),t("p",[_._v("主串P： a b a c b c a b a b a b b c b c")]),_._v(" "),t("p",[_._v("模式串S：a b a c b c a")]),_._v(" "),t("br"),_._v(" "),t("p",[_._v("第一步：计算模式串S的前缀码")]),_._v(" "),t("p",[_._v("规则: 前后缀码必须一致且是最长，不能超过模式串本身。\n"),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/b43f6a20fb704ef1a58bd13f476077dd.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5bKB5pyI5Y-v6LS1,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center",alt:"在这里插入图片描述"}})]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/5d17bdf07cef495db0640502c27f92f7.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5bKB5pyI5Y-v6LS1,size_17,color_FFFFFF,t_70,g_se,x_16#pic_center",alt:"在这里插入图片描述"}})]),_._v(" "),t("br"),_._v(" "),t("p",[_._v("第二步：列好表格进行匹配，如下：")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/1a9f15456acf417f82808d369167ce85.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5bKB5pyI5Y-v6LS1,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center",alt:"在这里插入图片描述"}})]),_._v(" "),t("p",[_._v("比较开始：")]),_._v(" "),t("p",[_._v("从模式串S[0] 和主串P[0]，开始匹配，相同。则 i++，j++；直到不匹配。")]),_._v(" "),t("p",[_._v("第一遍匹配到：S[3] 不等于 P[3]")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/f869d700c79e4ab290cd4ab8e2045ca3.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5bKB5pyI5Y-v6LS1,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center",alt:"在这里插入图片描述"}})]),_._v(" "),t("p",[_._v("此时找到模式串S[3]对应的next 值为 1，主串匹配位不变，模式串移动到 S[1]（即字符串"),t("code",[_._v("b")]),_._v("）")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/897160ff471649b2852f1a8e38d0c3dc.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5bKB5pyI5Y-v6LS1,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center",alt:"在这里插入图片描述"}})]),_._v(" "),t("p",[_._v("此时还是不等，接着上一步的操作，即 S[0] 和 P[3] 进行比较")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/6e82f69a37d5488aa6b47d6ee529cf28.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5bKB5pyI5Y-v6LS1,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center",alt:"在这里插入图片描述"}})]),_._v(" "),t("p",[_._v("这里需要注意的地方是：此时 S[0] 和 P[3] 不等。而对应模式串S位置上的next值为 -1。")]),_._v(" "),t("p",[_._v("到了这一步说明在主串P从开始匹配位置（即0）到结束匹配位置（即3）没有匹配到与模式串一致。")]),_._v(" "),t("blockquote",[t("p",[_._v("换句话说：当匹配到next值为-1时，就结束匹配。")])]),_._v(" "),t("p",[_._v("这时，主串 j++ （即 j = 4）与 模式串的开头比较（即S[0]）")]),_._v(" "),t("p",[_._v("此时，S[4] 不等于 S[0]，由于 S[0] 的 next 值（即 -1），故 j++，S[5] 与 P[0] 比较")]),_._v(" "),t("p",[_._v("还是不等，继续重复上一步操作 S[6] 与 P[0] 比较，此时：S[6] 等于 P[0]")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/af0fcf5c02ea410986a7b639f3c45bc9.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5bKB5pyI5Y-v6LS1,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center",alt:"在这里插入图片描述"}})]),_._v(" "),t("p",[_._v("i++， j++ 继续比较，比较到 S[12] 等于 P[6]，此时：主串S 从 [6] 到 [12] 都等于 模式串[0] 到 [6]，并且当前模式串匹配位到达上限，因此匹配成功")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/47e419b2d6e84b56810e6c91dfb1e5d6.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5bKB5pyI5Y-v6LS1,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center",alt:"在这里插入图片描述"}})]),_._v(" "),t("p",[_._v("如果最终结果匹配到主串的上限，并且模式串没有到达上限时，说明主串不存在模式串。")])])}),[],!1,null,null,null);t.default=a.exports}}]);