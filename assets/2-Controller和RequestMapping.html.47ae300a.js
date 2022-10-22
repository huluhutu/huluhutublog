import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as p,d as a,a as n,b as t}from"./app.0662e65c.js";const o={},l=a(`<h1 id="controller\u548Crequestmapping" tabindex="-1"><a class="header-anchor" href="#controller\u548Crequestmapping" aria-hidden="true">#</a> Controller\u548CRequestMapping</h1><h2 id="_1-controller" tabindex="-1"><a class="header-anchor" href="#_1-controller" aria-hidden="true">#</a> 1-@Controller</h2><p>\u7528\u6765\u6807\u6CE8\u5728\u7C7B\u4E0A\uFF0C\u8868\u793A\u8FD9\u4E2A\u7C7B\u662F\u4E00\u4E2A\u63A7\u5236\u5668\u7C7B\uFF0C\u53EF\u4EE5\u7528\u6765\u5904\u7406http\u8BF7\u6C42\uFF0C\u901A\u5E38\u4F1A\u548C@RequestMapping\u4E00\u8D77\u4F7F\u7528\u3002</p><p>\u6E90\u7801\u5982\u4E0B\uFF0C\u8FD9\u4E2A\u6CE8\u89E3\u4E0A\u9762\u6709@Component\u6CE8\u89E3\uFF0C\u8BF4\u660E\u88AB@Controller\u6807\u6CE8\u7684\u7C7B\u4F1A\u88AB\u6CE8\u518C\u5230spring\u5BB9\u5668\u4E2D\uFF0Cvalue\u5C5E\u6027\u7528\u6765\u6307\u5B9A\u8FD9\u4E2Abean\u7684\u540D\u79F0\uFF0C\u4E5F\u53EF\u4EE5\u4E0D\u6307\u5B9A\uFF0C\u7531\u5BB9\u5668\u81EA\u52A8\u751F\u6210\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Controller</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@AliasFor</span><span class="token punctuation">(</span>annotation <span class="token operator">=</span> <span class="token class-name">Component</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
    <span class="token class-name">String</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-requestmapping" tabindex="-1"><a class="header-anchor" href="#_2-requestmapping" aria-hidden="true">#</a> 2-@RequestMapping</h2><h3 id="_1-\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#_1-\u4F5C\u7528" aria-hidden="true">#</a> 1.\u4F5C\u7528</h3><p>\u8868\u793A\u8BF7\u6C42\u6620\u5C04\uFF0C\u4E00\u822C\u7528\u5728\u6211\u4EEC\u81EA\u5B9A\u4E49\u7684Controller\u7C7B\u4E0A\u6216\u8005Controller\u5185\u90E8\u7684\u65B9\u6CD5\u4E0A\u3002</p><p>\u901A\u8FC7\u8FD9\u4E2A\u6CE8\u89E3\u6307\u5B9A\u914D\u7F6E\u4E00\u4E9B\u89C4\u5219\uFF0C\u6EE1\u8DB3\u8FD9\u4E9B\u89C4\u5219\u7684\u8BF7\u6C42\u4F1A\u88AB\u6807\u6CE8\u4E86@RequestMapping\u7684\u65B9\u6CD5\u5904\u7406\u3002</p><h3 id="_2-\u6E90\u7801" tabindex="-1"><a class="header-anchor" href="#_2-\u6E90\u7801" aria-hidden="true">#</a> 2.\u6E90\u7801</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">,</span> <span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">METHOD</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token annotation punctuation">@Mapping</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">RequestMapping</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token annotation punctuation">@AliasFor</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span>
    <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token annotation punctuation">@AliasFor</span><span class="token punctuation">(</span><span class="token string">&quot;value&quot;</span><span class="token punctuation">)</span>
    <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">path</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token class-name">RequestMethod</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">params</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">headers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">produces</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-\u89C4\u5219\u5339\u914D\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_3-\u89C4\u5219\u5339\u914D\u539F\u7406" aria-hidden="true">#</a> 3.\u89C4\u5219\u5339\u914D\u539F\u7406</h3><p><strong>\u5F53springmvc\u5BB9\u5668\u542F\u52A8\u65F6\uFF0C\u4F1A\u626B\u63CF\u6807\u6CE8\u6709@Controller\u6CE8\u89E3\u7684\u7C7B\uFF0C\u5C06\u8FD9\u4E9BController\u4E2D\u6807\u6CE8\u6709@RequestMapping\u7684\u65B9\u6CD5\u6536\u96C6\u8D77\u6765\uFF0C\u5F97\u5230\u4E00\u4E2AMap&lt;@RequestMapping,Method&gt;\uFF08@RequestMapping\u548C\u65B9\u6CD5\u7684\u6620\u5C04\uFF09\uFF0C\u5F53\u4E00\u4E2A\u8BF7\u6C42\u5230\u8FBEDispatcherServlet\u7684\u65F6\u5019\uFF0C\u5176\u5185\u90E8\u4F1A\u6839\u636E\u8BF7\u6C42\u7684\u4FE1\u606F\uFF08url\u3001\u53C2\u6570\u3001header\u3001\u8BF7\u6C42\u7684\u7C7B\u578B\u3010\u901A\u8FC7\u5934\u4E2D\u7684Content-type\u6307\u5B9A\u3011\u3001\u53EF\u4EE5\u63A5\u53D7\u7684\u7C7B\u578B\u3010\u53EF\u4EE5\u901A\u8FC7\u5934\u4E2D\u7684Accept\u6307\u5B9A\u3011\uFF09\u53BB\u8FD9\u4E2AMap\u4E2D\u548C@RequestMapping\u4E2D\u7684\u89C4\u5219\u8FDB\u884C\u5339\u914D\uFF0C\u4ECE\u800C\u5F97\u5230\u53EF\u4EE5\u5904\u7406\u8FD9\u4E2A\u8BF7\u6C42\u7684\u65B9\u6CD5\uFF0C\u7136\u540E\u8FDB\u884C\u8C03\u7528\uFF0C\u6240\u6709\u7684@RequestMapping\u90FD\u5339\u914D\u5931\u8D25\u7684\u65F6\u5019\uFF0C\u4F1A\u8FD4\u56DE404</strong></p><h3 id="_4-\u901A\u8FC7-requestmapping\u53EF\u914D\u7F6E6\u79CD\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#_4-\u901A\u8FC7-requestmapping\u53EF\u914D\u7F6E6\u79CD\u89C4\u5219" aria-hidden="true">#</a> 4.\u901A\u8FC7@RequestMapping\u53EF\u914D\u7F6E6\u79CD\u89C4\u5219</h3><p>@RequestMapping\u652F\u63016\u79CD\u89C4\u5219\uFF0C\u8FD9\u4E9B\u89C4\u5219\u90FD\u662F\u901A\u8FC7@RequestMapping\u4E2D\u7684\u5C5E\u6027\u8FDB\u884C\u914D\u7F6E\u7684\uFF0C\u591A\u4E2A\u5C5E\u6027\u7684\u503C\u662FAND\u5173\u7CFB</p><p>\u4E0B\u9762\u6211\u4EEC\u4E00\u8D77\u6765\u719F\u6089\u8FD96\u79CD\u89C4\u5219\u3002</p><h4 id="\u89C4\u52191-\u901A\u8FC7value\u3001path\u6765\u9650\u5236\u8BF7\u6C42\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#\u89C4\u52191-\u901A\u8FC7value\u3001path\u6765\u9650\u5236\u8BF7\u6C42\u5730\u5740" aria-hidden="true">#</a> \u89C4\u52191\uFF1A\u901A\u8FC7value\u3001path\u6765\u9650\u5236\u8BF7\u6C42\u5730\u5740</h4><h5 id="\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7528\u6CD5" aria-hidden="true">#</a> \u7528\u6CD5</h5><p>\u53EF\u4EE5\u6307\u5B9Avalue\u3001path\u8FD92\u4E2A\u5C5E\u6027\u4E2D\u7684\u4EFB\u610F\u4E00\u4E2A\uFF0C\u4F5C\u7528\u662F\u4E00\u6837\u7684\uFF0C\u7528\u6765\u5BF9\u8BF7\u6C42\u7684url\u8FDB\u884C\u9650\u5236\u3002</p><h5 id="\u591A\u4E2A\u503C\u7684\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#\u591A\u4E2A\u503C\u7684\u5173\u7CFB" aria-hidden="true">#</a> \u591A\u4E2A\u503C\u7684\u5173\u7CFB</h5><p>\u8FD9\u51E0\u4E2A\u5C5E\u6027\u7684\u7C7B\u578B\u90FD\u662FString\u7C7B\u578B\u7684\u6570\u7EC4\uFF0C\u8BF4\u660E\u53EF\u4EE5\u6307\u5B9A\u591A\u4E2A\u503C\uFF0C\u591A\u4E2A\u503C\u4E4B\u95F4\u662FOR\u5173\u7CFB\u3002</p><h5 id="\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B" aria-hidden="true">#</a> \u6848\u4F8B</h5>`,22),i=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"url\u7684\u503C"),n("th",null,"\u8BF4\u660E")])]),n("tbody",null,[n("tr",null,[n("td",{"\u201Cuserinsert\u201D":""}),n("td",null,"\u53EF\u4EE5\u5904\u7406/user/insert\u8FD9\u4E2A\u8BF7\u6C42")]),n("tr",null,[n("td",{"\u201Cuserlist\u201D,\u201DusergetList\u201D":""}),n("td",null,"\u53EF\u4EE5\u540C\u65F6\u5904\u7406/user/list\u548C/user/getList\u8FD92\u4E2A\u8BF7\u6C42")])])],-1),d=a('<h4 id="\u89C4\u52192-\u901A\u8FC7header\u5C5E\u6027\u6765\u9650\u5236\u8BF7\u6C42\u5934" tabindex="-1"><a class="header-anchor" href="#\u89C4\u52192-\u901A\u8FC7header\u5C5E\u6027\u6765\u9650\u5236\u8BF7\u6C42\u5934" aria-hidden="true">#</a> \u89C4\u52192\uFF1A\u901A\u8FC7header\u5C5E\u6027\u6765\u9650\u5236\u8BF7\u6C42\u5934</h4><h5 id="\u7528\u6CD5-1" tabindex="-1"><a class="header-anchor" href="#\u7528\u6CD5-1" aria-hidden="true">#</a> \u7528\u6CD5</h5><p>\u901A\u8FC7header\u5C5E\u6027\u6765\u5BF9\u8BF7\u6C42\u4E2D\u7684header\u8FDB\u884C\u9650\u5236\uFF0C\u6BD4\u5982\u6211\u4EEC\u5E0C\u671B\u8BF7\u6C42\u4E2D\u5FC5\u987B\u5FC5\u987B\u643A\u5E26token\u8FD9\u4E2A\u5934\uFF0C\u90A3\u4E48\u5C31\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E2A\u3002</p><h5 id="\u591A\u4E2A\u503C\u7684\u5173\u7CFB-1" tabindex="-1"><a class="header-anchor" href="#\u591A\u4E2A\u503C\u7684\u5173\u7CFB-1" aria-hidden="true">#</a> \u591A\u4E2A\u503C\u7684\u5173\u7CFB</h5><p>AND\u5173\u7CFB</p><h5 id="\u6848\u4F8B-1" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B-1" aria-hidden="true">#</a> \u6848\u4F8B</h5>',6),c=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"header\u7684\u503C"),n("th",null,"\u8BF4\u660E")])]),n("tbody",null,[n("tr",null,[n("td",{"\u201Cheader1\u201D":""}),n("td",null,"\u8BF7\u6C42\u7684header\u4E2D\u5FC5\u987B\u6709header1\u8FD9\u4E2A\u5934\uFF0C\u503C\u968F\u610F")]),n("tr",null,[n("td",{"\u201Cheader1":"v1\u201D"}),n("td",null,"\u5FC5\u987B\u5305\u542Bheader1\u4E3Av1\u7684\u5934")]),n("tr",null,[n("td",{"\u201C!header1":""}),n("td",null,"\u8FD9\u91CC\u7528\u5230\u4E86!\u7B26\u53F7\uFF0C\u8868\u793A\u5934\u4E2D\u4E0D\u80FD\u6709header1\u8FD9\u4E2A\u5934")]),n("tr",null,[n("td",{"\u201Cheader1\u201D,\u201Cheader2":"v2\u201D"}),n("td",null,"header\u7684\u503C\u662Fand\u5173\u7CFB\uFF0C\u6240\u4EE5\u8FD9\u4E2A\u503C\u8868\u793A\uFF1A\u5934\u4E2D\u5FC5\u987B\u5305\u542Bheader1\u4EE5\u53CAheader2\uFF0C\u4E14header2\u7684\u503C\u4E3Av2")])])],-1),u=a('<h4 id="\u89C4\u52193-\u901A\u8FC7params\u5C5E\u6027\u6765\u9650\u5236\u8BF7\u6C42\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u89C4\u52193-\u901A\u8FC7params\u5C5E\u6027\u6765\u9650\u5236\u8BF7\u6C42\u53C2\u6570" aria-hidden="true">#</a> \u89C4\u52193\uFF1A\u901A\u8FC7params\u5C5E\u6027\u6765\u9650\u5236\u8BF7\u6C42\u53C2\u6570</h4><h5 id="\u7528\u6CD5-2" tabindex="-1"><a class="header-anchor" href="#\u7528\u6CD5-2" aria-hidden="true">#</a> \u7528\u6CD5</h5><p>\u901A\u8FC7params\u5C5E\u6027\u6765\u9650\u5236\u8BF7\u6C42\u4E2D\u7684\u53C2\u6570\uFF0C\u6BD4\u5982\u6211\u4EEC\u5E0C\u671B\u8BF7\u6C42\u4E2D\u5FC5\u987B\u6709\u67D0\u4E9B\u6307\u5B9A\u7684\u53C2\u6570\u65F6\uFF0C\u624D\u80FD\u88AB\u6307\u5B9A\u7684\u65B9\u6CD5\u5904\u7406\uFF0C\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E2A\u3002</p><h5 id="\u591A\u4E2A\u503C\u7684\u5173\u7CFB-2" tabindex="-1"><a class="header-anchor" href="#\u591A\u4E2A\u503C\u7684\u5173\u7CFB-2" aria-hidden="true">#</a> \u591A\u4E2A\u503C\u7684\u5173\u7CFB</h5><p>AND\u5173\u7CFB</p><h5 id="\u6848\u4F8B-2" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B-2" aria-hidden="true">#</a> \u6848\u4F8B</h5>',6),r=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"params\u7684\u503C"),n("th",null,"\u8BF4\u660E")])]),n("tbody",null,[n("tr",null,[n("td",{"\u201Cname\u201D":""}),n("td",null,"\u8BF7\u6C42\u4E2D\u5FC5\u987B\u5305\u542Bname\u53C2\u6570\uFF0C\u503C\u968F\u610F")]),n("tr",null,[n("td",{"\u201Cname":"\u8DEF\u4EBA\u201D"}),n("td",null,[t("\u8BF7\u6C42\u4E2D\u5FC5\u987B\u5305\u542B"),n("code",null,"name"),t("\u8FD9\u4E2A\u53C2\u6570\uFF0C\u4E14\u503C\u5FC5\u987B\u662F"),n("code",null,"\u8DEF\u4EBA")])]),n("tr",null,[n("td",{"\u201Cname\u201D,\u201Dage":"1\u201D"}),n("td",null,"\u8BF7\u6C42\u4E2D\u5FC5\u987B\u5305\u542B\u53C2\u6570name\u548C\u53C2\u6570age\uFF0C\u4E14age\u7684\u503C\u4E3A1")]),n("tr",null,[n("td",{"\u201C!age\u201D":""}),n("td",null,"\u8BF7\u6C42\u4E2D\u4E0D\u80FD\u6709\u53C2\u6570age")])])],-1),h=a('<h4 id="\u89C4\u52194-\u901A\u8FC7method\u5C5E\u6027\u6765\u9650\u5236http\u8BF7\u6C42\u989D\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u89C4\u52194-\u901A\u8FC7method\u5C5E\u6027\u6765\u9650\u5236http\u8BF7\u6C42\u989D\u65B9\u6CD5" aria-hidden="true">#</a> \u89C4\u52194\uFF1A\u901A\u8FC7method\u5C5E\u6027\u6765\u9650\u5236http\u8BF7\u6C42\u989D\u65B9\u6CD5</h4><h5 id="\u7528\u6CD5-3" tabindex="-1"><a class="header-anchor" href="#\u7528\u6CD5-3" aria-hidden="true">#</a> \u7528\u6CD5</h5><p>\u5982\u679C\u9700\u8981\u9650\u5236\u67D0\u4E2A\u65B9\u6CD5\u53EA\u80FD\u5904\u7406http\u7684post\u8BF7\u6C42\uFF0C\u90A3\u4E48\u5C31\u53EF\u4EE5\u901A\u8FC7method\u5C5E\u6027\u6765\u8FDB\u884C\u8BBE\u7F6E\uFF0C\u5982\u679C\u4E0D\u6307\u5B9Amethod\u7684\u503C\uFF0C\u8868\u793A\u5BF9http\u8BF7\u6C42\u989Dmethod\u65E0\u9650\u5236\u3002</p><h5 id="\u591A\u4E2A\u503C\u7684\u5173\u7CFB-3" tabindex="-1"><a class="header-anchor" href="#\u591A\u4E2A\u503C\u7684\u5173\u7CFB-3" aria-hidden="true">#</a> \u591A\u4E2A\u503C\u7684\u5173\u7CFB</h5><p>OR\u5173\u7CFB</p><h5 id="\u6848\u4F8B-3" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B-3" aria-hidden="true">#</a> \u6848\u4F8B</h5>',6),k=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"method\u7684\u503C"),n("th",null,"\u8BF4\u660E")])]),n("tbody",null,[n("tr",null,[n("td",{POST:""}),n("td",null,"\u53EA\u80FD\u63A5\u53D7post\u8BF7\u6C42")]),n("tr",null,[n("td",{"POST,GET":""}),n("td",null,"post\u3001get\u8BF7\u6C42\u90FD\u53EF\u4EE5\u5904\u7406")])])],-1),m=a('<h4 id="\u89C4\u52195-\u901A\u8FC7consumes\u5C5E\u6027\u6765\u9650\u5236\u8BF7\u6C42\u7684\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u89C4\u52195-\u901A\u8FC7consumes\u5C5E\u6027\u6765\u9650\u5236\u8BF7\u6C42\u7684\u7C7B\u578B" aria-hidden="true">#</a> \u89C4\u52195\uFF1A\u901A\u8FC7consumes\u5C5E\u6027\u6765\u9650\u5236\u8BF7\u6C42\u7684\u7C7B\u578B</h4><h5 id="content-type\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#content-type\u662F\u4EC0\u4E48" aria-hidden="true">#</a> Content-Type\u662F\u4EC0\u4E48\uFF1F</h5><p>\u719F\u6089http\u8BF7\u6C42\u7684\u670B\u53CB\u5E94\u8BE5\u5BF9Content-Type\u8FD9\u4E2A\u5C5E\u6027\u6BD4\u8F83\u773C\u719F\u5427\uFF0C\u8FD9\u4E2A\u5C5E\u6027\u662F\u7528\u6765\u505A\u4EC0\u4E48\u7684\uFF1F</p><p>Content-Type\u7528\u6765\u6307\u5B9Ahttp\u8BF7\u6C42\u4E2Dbody\u7684\u6570\u636E\u7684\u7C7B\u578B\uFF0C\u662FJson\u5462\uFF1F\u8FD8\u662F\u6587\u672C\u5462\uFF1F\u8FD8\u662F\u56FE\u7247\u3001pdf\u5462\uFF1F</p><p>\u8FD9\u4E9B\u5C31\u53EF\u4EE5\u901A\u8FC7Content-Type\u6765\u8FDB\u884C\u6307\u5B9A\uFF0C\u8FD9\u6837\u670D\u52A1\u5668\u63A5\u53D7\u5230\u8BF7\u6C42\u7684\u65F6\u5019\uFF0C\u5C31\u77E5\u9053body\u4E2D\u6570\u636E\u7684\u7C7B\u578B\u4E86\uFF0C\u6BD4\u5982application/json\uFF0C\u5C31\u8868\u793Abody\u4E2D\u662F\u4E00\u4E2Ajson\u6570\u636E\uFF0C\u90A3\u4E48\u670D\u52A1\u5668\u5C31\u53EF\u4EE5\u4EE5json\u7684\u65B9\u5F0F\u6765\u89E3\u6790body\u4E2D\u7684\u6570\u636E\u3002</p><p>\u6765\u51E0\u4E2A\u5927\u5BB6\u719F\u6089\u7684</p><table><thead><tr><th>Content-Type\u7684\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>application/x-www-form-urlencoded</td><td>\u8FD9\u4E2A\u662F\u6211\u4EEC\u6700\u5E38\u89C1\u7684\uFF0C\u901A\u5E38\u6211\u4EEC\u5728\u9875\u9762\u4E2D\u901A\u8FC7post\u65B9\u5F0F\u6765\u63D0\u4EA4\u4E00\u4E2A\u8868\u5355\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u8BF7\u6C42\u7684\u7C7B\u578B\u5C31\u662F\u8FD9\u79CD</td></tr><tr><td>multipart/form-data</td><td>\u901A\u8FC7\u8868\u5355\u4E0A\u4F20\u6587\u4EF6\u7528\u7684\u5C31\u662F\u8FD9\u79CD\u7C7B\u578B\uFF0C\u8FD9\u79CD\u8868\u793A\u8BF7\u6C42\u7684body\u6709\u591A\u90E8\u5206\u7EC4\u6210</td></tr><tr><td>application/json</td><td>\u8868\u793Abody\u4E2D\u7684\u6570\u636E\u662F\u4E00\u4E2Ajson\u683C\u5F0F\u7684\u6570\u636E</td></tr><tr><td>image/gif</td><td>\u8868\u793Abody\u4E2D\u7684\u6570\u636E\u662Fgif\u56FE\u7247</td></tr></tbody></table><p>Content-Type\u901A\u5E38\u6709\u4E3B\u7C7B\u578B\u548C\u5B50\u7C7B\u578B\uFF0C\u4E2D\u95F4\u901A\u8FC7/\u5206\u5272\uFF0C\u8FD9\u91CC\u5C31\u4E0D\u8BE6\u7EC6\u5C55\u5F00\u4E86\uFF0C\u6709\u5174\u8DA3\u7684\u670B\u53CB\u53EF\u4EE5\u53BB\u767E\u5EA6\u4E13\u95E8\u7814\u7A76\u4E0B\u3002</p><h5 id="consumes\u5C5E\u6027\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#consumes\u5C5E\u6027\u7528\u6CD5" aria-hidden="true">#</a> consumes\u5C5E\u6027\u7528\u6CD5</h5><p>\u800C@RquestMapping\u4E2D\u7684consumers\u5C31\u662F\u7528\u6765\u5BF9Content-Type\u8FDB\u884C\u9650\u5236\u3002</p><h5 id="\u591A\u4E2A\u503C\u7684\u5173\u7CFB-4" tabindex="-1"><a class="header-anchor" href="#\u591A\u4E2A\u503C\u7684\u5173\u7CFB-4" aria-hidden="true">#</a> \u591A\u4E2A\u503C\u7684\u5173\u7CFB</h5><p>OR\u5173\u7CFB</p><h5 id="\u6848\u4F8B-4" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B-4" aria-hidden="true">#</a> \u6848\u4F8B</h5>',13),g=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"consumes\u7684\u503C"),n("th",null,"\u8BF4\u660E")])]),n("tbody",null,[n("tr",null,[n("td",{"\u201Capplicationx-www-form-urlencoded\u201D":""}),n("td",null,"\u8BF7\u6C42\u4E2DContent-Type\u7684\u7C7B\u578B\u5FC5\u987B\u662Fapplication/x-www-form-urlencoded\u7C7B\u578B")]),n("tr",null,[n("td",{"\u201Capplication*\u201D":""}),n("td",null,"Content-Type\u7684\u7C7B\u578B\u5FC5\u987B\u662Fapplication\u7C7B\u578B\u7684\uFF0C\u6BD4\u5982\uFF1Aapplication/json\u3001application/pdf\u3001application/x-www-form-urlencoded")]),n("tr",null,[n("td",{"\u201Cimagegif\u201D,":"","\u201Cimagepng\u201D":""}),n("td",null,"Content-Type\u7684\u53EF\u4EE5\u662F[\u201Cimage/gif\u201D, \u201Cimage/png\u201D]\u4E2D\u7684\u4EFB\u610F\u4E00\u79CD")])])],-1),b=a(`<h4 id="\u89C4\u52196-\u901A\u8FC7produces\u5C5E\u6027\u6765\u9650\u5236\u5BA2\u6237\u7AEF\u53EF\u4EE5\u63A5\u53D7\u7684\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u89C4\u52196-\u901A\u8FC7produces\u5C5E\u6027\u6765\u9650\u5236\u5BA2\u6237\u7AEF\u53EF\u4EE5\u63A5\u53D7\u7684\u7C7B\u578B" aria-hidden="true">#</a> \u89C4\u52196\uFF1A\u901A\u8FC7produces\u5C5E\u6027\u6765\u9650\u5236\u5BA2\u6237\u7AEF\u53EF\u4EE5\u63A5\u53D7\u7684\u7C7B\u578B</h4><h5 id="accept\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#accept\u662F\u4EC0\u4E48" aria-hidden="true">#</a> Accept\u662F\u4EC0\u4E48\uFF1F</h5><p>\u719F\u6089http\u8BF7\u6C42\u7684\u670B\u53CB\u5E94\u8BE5\u5BF9Accept\u8FD9\u4E2A\u5C5E\u6027\u6BD4\u8F83\u773C\u719F\u5427\uFF0C\u8FD9\u4E2A\u5C5E\u6027\u662F\u7528\u6765\u505A\u4EC0\u4E48\u7684\uFF1F</p><p>\u548CContent-Type\u521A\u597D\u76F8\u53CD\uFF0CContent-Type\u7528\u6765\u6307\u5B9A\u5BA2\u6237\u7AEF\u53D1\u9001\u7684\u6570\u636E\u7684\u7C7B\u578B\uFF0C\u800C<strong>Accept\u662F\u7528\u6765\u6307\u5B9A\u5BA2\u6237\u7AEF\u5E0C\u671B\u63A5\u53D7\u7684\u6570\u636E\u7684\u7C7B\u578B\u7684</strong>\u3002</p><p>\u6BD4\u5982\u5BA2\u6237\u7AEF\u5E0C\u671B\u670D\u52A1\u5668\u7AEF\u8FD4\u56DEjson\u683C\u5F0F\u7684\u6570\u636E\uFF0C\u90A3\u4E48\u53EF\u4EE5\u8FD9\u4E48\u6307\u5B9A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Accept: application/json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u503C\u53EF\u4EE5Content-Type\u7684\u503C\u7C7B\u4F3C\uFF0C\u8FD9\u91CC\u5C31\u4E0D\u4E3E\u4F8B\u4E86\u3002</p><h5 id="produces\u5C5E\u6027\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#produces\u5C5E\u6027\u7528\u6CD5" aria-hidden="true">#</a> produces\u5C5E\u6027\u7528\u6CD5</h5><p>\u6307\u5B9A\u8FD4\u56DE\u7684\u5185\u5BB9\u7C7B\u578B\uFF0C\u4EC5\u5F53request\u8BF7\u6C42\u5934\u4E2D\u7684(Accept)\u7C7B\u578B\u4E2D\u5305\u542B\u8BE5\u6307\u5B9A\u7C7B\u578B\u65F6\uFF0C\u63A5\u53E3\u624D\u80FD\u591F\u6B63\u5E38\u8FD4\u56DE\u3002</p><h5 id="\u591A\u4E2A\u503C\u7684\u5173\u7CFB-5" tabindex="-1"><a class="header-anchor" href="#\u591A\u4E2A\u503C\u7684\u5173\u7CFB-5" aria-hidden="true">#</a> \u591A\u4E2A\u503C\u7684\u5173\u7CFB</h5><p>OR\u5173\u7CFB</p><h5 id="\u6848\u4F8B-5" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B-5" aria-hidden="true">#</a> \u6848\u4F8B</h5>`,12),v=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"produces\u7684\u503C"),n("th",null,"\u8BF4\u660E")])]),n("tbody",null,[n("tr",null,[n("td",{"\u201Capplicationjson\u201D":""}),n("td",null,"\u670D\u52A1\u5668\u7AEF\u652F\u6301\u8FD4\u56DEapplication/json\u7C7B\u578B\u6570\u636E\uFF0C\u6240\u4EE5\u8981\u6C42Accept\u4E5F\u53EF\u4EE5\u63A5\u53D7\u8FD9\u79CD\u7C7B\u578B\u7684\u6570\u636E")]),n("tr",null,[n("td",{"\u201Cimagegif\u201D,":"","\u201Cimagepng\u201D":""}),n("td",null,"\u670D\u52A1\u5668\u7AEF\u652F\u6301\u8FD4\u56DE[\u201Cimage/gif\u201D, \u201Cimage/png\u201D]\u4E2D\u5176\u4E2D\u4E00\u79CD\u7C7B\u578B\u6570\u636E\uFF0C\u6240\u4EE5\u8981\u6C42Accept\u4E5F\u53EF\u4EE5\u63A5\u53D7\u8FD92\u4E2D\u79CD\u7C7B\u578B\u4E2D\u4EFB\u610F\u4E00\u79CD\u5C31\u53EF\u4EE5")])])],-1),f=a('<h2 id="_3-requestmapping\u7684\u516D\u79CD\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#_3-requestmapping\u7684\u516D\u79CD\u89C4\u5219" aria-hidden="true">#</a> 3-@RequestMapping\u7684\u516D\u79CD\u89C4\u5219</h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u591A\u4E2A\u503C\u4E4B\u95F4\u7684\u5173\u7CFB</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>value\u3001path</td><td>OR</td><td>\u9650\u5236url</td></tr><tr><td>header</td><td>AND</td><td>\u9650\u5236\u8BF7\u6C42\u5934</td></tr><tr><td>params</td><td>AND</td><td>\u9650\u5236\u8BF7\u6C42\u7684\u53C2\u6570</td></tr><tr><td>method</td><td>OR</td><td>\u9650\u5236http\u8BF7\u6C42\u7684method</td></tr><tr><td>consumes</td><td>OR</td><td>\u9650\u5236Content-Type\u7684\u7C7B\u578B\uFF08\u5BA2\u6237\u7AEF\u53D1\u9001\u6570\u636E\u7684\u7C7B\u578B\uFF09</td></tr><tr><td>produces</td><td>OR</td><td>\u9650\u5236Aceept\u7684\u7C7B\u578B\uFF08\u5BA2\u6237\u7AEF\u53EF\u63A5\u53D7\u6570\u636E\u7684\u7C7B\u578B\uFF09</td></tr></tbody></table><h2 id="_4-\u5176\u4ED6mapping\u6CE8\u89E3" tabindex="-1"><a class="header-anchor" href="#_4-\u5176\u4ED6mapping\u6CE8\u89E3" aria-hidden="true">#</a> 4-\u5176\u4ED6Mapping\u6CE8\u89E3</h2><table><thead><tr><th>\u6CE8\u89E3</th><th>\u76F8\u5F53\u4E8E</th></tr></thead><tbody><tr><td>@PostMapping</td><td>@RequestMapping(method=RequestMethod.POST)</td></tr><tr><td>@GetMapping</td><td>@RequestMapping(method=RequestMethod.GET)</td></tr><tr><td>@DeleteMapping</td><td>@RequestMapping(method=RequestMethod.DELETE)</td></tr><tr><td>@PutMapping</td><td>@RequestMapping(method=RequestMethod.PUT)</td></tr></tbody></table><h2 id="_5-\u7C7B\u4E0A\u4F7F\u7528-requestmapping" tabindex="-1"><a class="header-anchor" href="#_5-\u7C7B\u4E0A\u4F7F\u7528-requestmapping" aria-hidden="true">#</a> 5-\u7C7B\u4E0A\u4F7F\u7528@RequestMapping</h2><p>\u7528\u4E8E\u5C06\u65B9\u6CD5\u4E0A@RequestMapping\u5171\u6709\u7684\u89C4\u5219\u63D0\u53D6\u51FA\u6765\uFF0C\u653E\u5728\u7C7B\u4E0A\uFF0C\u8D77\u5230\u91CD\u7528\u7684\u4F5C\u7528\uFF0C\u53EF\u4EE5\u7B80\u5316\u4EE3\u7801\u3002 \u5982\u4E0B\u56FE\u7684controller\u4E2D\u67094\u4E2A\u65B9\u6CD5\u90FD\u6709@RequestMapping\uFF0C\u4ED6\u4EEC\u7684value\u5C5E\u6027\u7684\u503C\u90FD\u4EE5<code>/user</code>\u5F00\u5934\uFF0C\u90A3\u4E48\u6211\u4EEC\u5C31\u53EF\u4EE5\u5C06\u8FD9\u90E8\u5206\u63D0\u53D6\u51FA\u6765\u653E\u5728\u8FD9\u4E2A\u7C7B\u4E0A\u9762\u3002</p><p><img src="https://raw.githubusercontent.com/huluhutu/blogimg/main/img/image-20221010094139591.png" alt="image-20221010094139591" loading="lazy"></p><p><img src="https://raw.githubusercontent.com/huluhutu/blogimg/main/img/image-20221011220206359.png" alt="image-20221011220206359" loading="lazy"></p>',8),_=[l,i,d,c,u,r,h,k,m,g,b,v,f];function y(x,q){return e(),p("div",null,_)}const T=s(o,[["render",y],["__file","2-Controller\u548CRequestMapping.html.vue"]]);export{T as default};
