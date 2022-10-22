import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,d as t}from"./app.0662e65c.js";const p={},e=t(`<h1 id="\u6811" tabindex="-1"><a class="header-anchor" href="#\u6811" aria-hidden="true">#</a> \u6811</h1><h2 id="_1-\u6570\u636E\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_1-\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a> 1-\u6570\u636E\u7ED3\u6784</h2><h3 id="_1-\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#_1-\u6982\u5FF5" aria-hidden="true">#</a> 1.\u6982\u5FF5</h3><blockquote><p>\u6811\u662FN (N &gt;= 0 )\u4E2A\u8282\u70B9\u7684\u6709\u9650\u96C6\u5408,N = 0 \u65F6,\u79F0\u4E3A\u7A7A\u6811\u3002</p><p>\u6811\u4E0A\u7684\u6BCF\u4E00\u4E2A\u5143\u7D20\u79F0\u4E3A\u8282\u70B9\uFF0C\u8282\u70B9\u4E0E\u8282\u70B9\u4E4B\u95F4\u6709\u4E00\u5B9A\u7684\u5173\u7CFB\uFF0C\u4E0A\u4E0B\u79F0\u4E3A<code>\u7236\u5B50\u8282\u70B9</code>\uFF0C\u5DE6\u53F3\u79F0\u4E3A<code>\u5144\u5F1F\u8282\u70B9</code>\u3002</p></blockquote><p><img src="https://raw.githubusercontent.com/huluhutu/blogimg/main/img/image-20211220232136976.72d7abcf.png" alt="image-20211220232136976" loading="lazy"></p><p>\u6309\u7167\u6811\u7684\u8868\u73B0\u7ED3\u6784\uFF0C\u53EF\u4EE5\u5177\u4F53\u5206\u4E3A\u4EE5\u4E0B\u51E0\u79CD\u7C7B\u578B\uFF1A</p><ol><li>\u4E8C\u53C9\u6811</li><li>\u5E73\u8861\u4E8C\u53C9\u6811</li><li>\u6EE1\u4E8C\u53C9\u6811</li><li>\u5B8C\u5168\u4E8C\u53C9\u6811</li><li>\u9012\u5F52\u6811</li><li>\u7EA2\u9ED1\u6811</li><li>B- \u6811</li><li>B+ \u6811</li></ol><p><strong>\u6BCF\u4E2A\u8282\u70B9\u5305\u542B\uFF1A\u6570\u636E\u503C\uFF0C\u5DE6\u5B50\u8282\u70B9\u6307\u9488\uFF0C\u53F3\u5B50\u8282\u70B9\u6307\u9488</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4F18\u52BF\u662F\u4EC0\u4E48\uFF1F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>\u6811\u5F62\u7ED3\u6784\uFF0C\u652F\u6301\u6570\u636E\u7684\u5FEB\u901F\u63D2\u5165\u3001\u67E5\u627E\u3001\u5220\u9664</li><li>\u652F\u6301\u591A\u79CD\u904D\u5386\u65B9\u5F0F\uFF1A\u524D\u5E8F\u904D\u5386\uFF08\u6839\u5DE6\u53F3\uFF09\u3001\u4E2D\u5E8F\u904D\u5386\uFF08\u5DE6\u6839\u53F3\uFF09\u3001\u540E\u5E8F\u904D\u5386\uFF08\u5DE6\u53F3\u6839\uFF09</li><li>\u7ED3\u6784\u7279\u6B8A\uFF0C\u9002\u5408\u7528\u9012\u5F52\u6765\u5B9E\u73B0</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u52A3\u52BF\u662F\u4EC0\u4E48?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>\u5220\u9664\u8282\u70B9\u9EBB\u70E6</li><li>\u5220\u9664\u8282\u70B9-\u7269\u7406\u5220\u9664\uFF0C\u9700\u8981\u91CD\u65B0\u6784\u9020\u6811\u7ED3\u6784</li><li>\u5220\u9664\u8282\u70B9-\u903B\u8F91\u5220\u9664\uFF0C\u4EA7\u751F\u5185\u5B58\u788E\u7247</li></ol><h3 id="_2-\u6A21\u62DF\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_2-\u6A21\u62DF\u5B9E\u73B0" aria-hidden="true">#</a> 2.\u6A21\u62DF\u5B9E\u73B0</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Tree</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token class-name">E</span> item<span class="token punctuation">;</span>
    <span class="token class-name">Tree</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> left<span class="token punctuation">;</span>
    <span class="token class-name">Tree</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> right<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Tree</span><span class="token punctuation">(</span><span class="token class-name">E</span> item<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>item <span class="token operator">=</span> item<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Tree</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token function">buildLeft</span><span class="token punctuation">(</span><span class="token class-name">E</span> item<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Tree</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>left<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Tree</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token function">buildRight</span><span class="token punctuation">(</span><span class="token class-name">E</span> item<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Tree</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>right<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">printPreOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>item <span class="token operator">+</span> <span class="token string">&quot;&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token class-name">Tree</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> node<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>item <span class="token operator">+</span> <span class="token string">&quot;&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">print</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">print</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Tree</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Tree</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Tree</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> left <span class="token operator">=</span> root<span class="token punctuation">.</span><span class="token function">buildLeft</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Tree</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> left1 <span class="token operator">=</span> left<span class="token punctuation">.</span><span class="token function">buildLeft</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        left1<span class="token punctuation">.</span><span class="token function">buildLeft</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        left<span class="token punctuation">.</span><span class="token function">buildRight</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Tree</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> right <span class="token operator">=</span> root<span class="token punctuation">.</span><span class="token function">buildRight</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        right<span class="token punctuation">.</span><span class="token function">buildLeft</span><span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        right<span class="token punctuation">.</span><span class="token function">buildRight</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        root<span class="token punctuation">.</span><span class="token function">printPreOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u89E3\u9898\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#_2-\u89E3\u9898\u601D\u8DEF" aria-hidden="true">#</a> 2-\u89E3\u9898\u601D\u8DEF</h2><h2 id="_3-\u4F8B\u9898" tabindex="-1"><a class="header-anchor" href="#_3-\u4F8B\u9898" aria-hidden="true">#</a> 3-\u4F8B\u9898</h2>`,16),c=[e];function o(l,i){return s(),a("div",null,c)}const r=n(p,[["render",o],["__file","6-Tree.html.vue"]]);export{r as default};
