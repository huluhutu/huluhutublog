import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as a,d as p}from"./app.0662e65c.js";const t={},o=p(`<h1 id="rest-\u63A5\u53E3\u8BBE\u8BA1" tabindex="-1"><a class="header-anchor" href="#rest-\u63A5\u53E3\u8BBE\u8BA1" aria-hidden="true">#</a> Rest \u63A5\u53E3\u8BBE\u8BA1</h1><h2 id="\u63A5\u53E3\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3\u8BF4\u660E" aria-hidden="true">#</a> \u63A5\u53E3\u8BF4\u660E</h2><h4 id="\u8FD4\u56DE\u503C" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u503C" aria-hidden="true">#</a> \u8FD4\u56DE\u503C</h4><p>state:&quot;success&quot; \u4E3A\u6210\u529F</p><p>\u5F53 state \u7684\u503C\u4E3A &quot;success&quot; \u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 data \u5C5E\u6027\uFF0C\u83B7\u53D6\u67E5\u8BE2\u7684\u7ED3\u679C\u96C6\u3002</p><p>state:&quot;error&quot; \u5931\u8D25</p><p>\u5F53 state \u7684\u503C\u4E3A &quot;error&quot; \u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 message \u5C5E\u6027\uFF0C\u83B7\u53D6\u9519\u8BEF\u4FE1\u606F\u3002</p><h4 id="\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u9A8C\u8BC1" aria-hidden="true">#</a> \u9A8C\u8BC1</h4><p>\u6700\u7EC8\u7248\u7684\u670D\u52A1\u63A5\u53E3\u9664\u4E86 &quot;/login&quot;\u3001&quot;/regist&quot;\u3001&quot;/show*&quot; \u4EE5\u5916\uFF0C\u5168\u90E8\u5F00\u542F\u4E86\u9A8C\u8BC1\u529F\u80FD\uFF0C\u8BBF\u95EE\u65F6\u9700\u8981\u5148\u767B\u5F55\u83B7\u53D6 token\u3002\u5728\u8BF7\u6C42\u9700\u8981\u9A8C\u8BC1\u7684\u63A5\u53E3\u65F6\uFF0C\u9700\u8981\u5728\u8BF7\u6C42\u5934\u4E0A\u643A\u5E26 token\u3002</p><p>\u6848\u4F8B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">userId</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">orderId</span><span class="token operator">:</span> <span class="token number">28</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">authorization</span><span class="token operator">:</span> <span class="token string">&quot;\u767B\u5F55\u65F6\u83B7\u53D6\u7684 token&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;url&quot;</span><span class="token punctuation">,</span> obj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">//...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7528\u6237\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u6A21\u5757" aria-hidden="true">#</a> \u7528\u6237\u6A21\u5757</h2><h3 id="\u767B\u5F55\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u767B\u5F55\u63A5\u53E3" aria-hidden="true">#</a> \u767B\u5F55\u63A5\u53E3</h3><p>\u8BF4\u660E\uFF1A</p><p>\u7528\u6237\u767B\u5F55\u529F\u80FD\uFF0C\u901A\u8FC7\u8F93\u5165\u7528\u6237\u540D\u548C\u5BC6\u7801\u8FDB\u884C\u767B\u5F55\u3002</p><p>url\uFF1A/datas/shop/login</p><p>\u8BF7\u6C42\u65B9\u6CD5\uFF1APOST</p><p>\u53C2\u6570\uFF1A user \uFF1AUser</p><p>\u6D4B\u8BD5\u6848\u4F8B</p><ul><li>\u6D4B\u8BD5 URL</li></ul><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>/datas/shop/login
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE JSON \u6570\u636E</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;userId&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;userName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;userImgUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3.png&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;realname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;phone&quot;</span><span class="token operator">:</span> <span class="token string">&quot;11234444484&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTVUJKRUNUIiwidXNlcklkIjoxLCJ1c2VyTmFtZSI6InpoYW5nc2FuIiwidXNlckltZ1VybCI6IjMucG5nIiwiaWF0IjoxNjUzOTg1OTMzLCJleHAiOjE2NTQ1OTA3MzN9.o3rJjpv7pgrByWzH05Xifqk-ojY8cdxvQoYKokoimUs&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6CE8\u518C\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u518C\u65B9\u6CD5" aria-hidden="true">#</a> \u6CE8\u518C\u65B9\u6CD5</h3><p>\u8BF4\u660E\uFF1A</p><p>\u7528\u6237\u8F93\u5165\u6CE8\u518C\u4FE1\u606F\u8FDB\u884C\u6CE8\u518C\u3002</p><p>url:/datas/shop/regist</p><p>\u8BF7\u6C42\u65B9\u6CD5\uFF1APOST</p><p>\u8BF7\u6C42\u53C2\u6570\uFF1A</p><p>data\uFF1ARegister</p><p>\u6D4B\u8BD5\u6848\u4F8B</p><ul><li>\u6D4B\u8BD5 URL</li></ul><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>/datas/shop/regist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE JSON \u6570\u636E</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">{</span>
    state    <span class="token string">&quot;success&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6211\u7684\u4E3B\u9875" tabindex="-1"><a class="header-anchor" href="#\u6211\u7684\u4E3B\u9875" aria-hidden="true">#</a> \u6211\u7684\u4E3B\u9875</h3><p>\u8BF4\u660E\uFF1A</p><p>\u767B\u5F55\u7684\u7528\u6237\uFF0C\u8FDB\u5165\u4E3B\u9875\u67E5\u770B\u5F53\u524D\u767B\u5F55\u8005\u4FE1\u606F\u3002</p><p>url\uFF1A/datas/shop/my</p><p>\u8BF7\u6C42\u65B9\u6CD5\uFF1AGET</p><p>\u53C2\u6570\uFF1A userId\uFF1ALong (\u767B\u5F55\u8005)</p><p>\u6D4B\u8BD5\u6848\u4F8B</p><ul><li>\u6D4B\u8BD5 URL</li></ul><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>/datas/shop/my?userId=1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE JSON \u6570\u636E</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5F20\u4E09&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5546\u54C1\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u5546\u54C1\u6A21\u5757" aria-hidden="true">#</a> \u5546\u54C1\u6A21\u5757</h2><h3 id="\u67E5\u8BE2\u5546\u5E97" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u5546\u5E97" aria-hidden="true">#</a> \u67E5\u8BE2\u5546\u5E97</h3><p>\u8BF4\u660E\uFF1A\u6839\u636E\u5546\u5E97\u4E3B\u952E\u67E5\u5BFB\u5546\u5E97\u4FE1\u606F\u3002</p><p>url:/datas/shop/showShopByShopId</p><p>\u8BF7\u6C42\u65B9\u6CD5\uFF1AGET</p><p>\u8BF7\u6C42\u53C2\u6570\uFF1A</p><p>shopId\uFF1ALong</p><p>userId\uFF1A Long</p><p>\u6D4B\u8BD5\u6848\u4F8B</p><ul><li>\u6D4B\u8BD5 URL</li></ul><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>/datas/shop/showShopByShopId?shopId=2&amp;userId=2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE JSON \u6570\u636E</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u519C\u8D38\u83DC\u573A&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">&quot;categoryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5546\u54C1&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;parentId&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token property">&quot;categoryDesc&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token property">&quot;categoryImgUrl&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;imgUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;imgs/near.png&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;sales&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
    <span class="token property">&quot;expressLimit&quot;</span><span class="token operator">:</span> <span class="token number">121</span><span class="token punctuation">,</span>
    <span class="token property">&quot;slogan&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2312&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;expressPrice&quot;</span><span class="token operator">:</span> <span class="token number">3123</span><span class="token punctuation">,</span>
    <span class="token property">&quot;products&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;productId&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;expressLimit&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;expressPrice&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
        <span class="token property">&quot;poductImgUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;imgs/cherry.png&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;productName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6A31\u6843&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;shop&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;sales&quot;</span><span class="token operator">:</span> <span class="token number">501</span><span class="token punctuation">,</span>
        <span class="token property">&quot;stock&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
        <span class="token property">&quot;oldprice&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
        <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
        <span class="token property">&quot;unit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token property">&quot;categoryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5546\u54C1&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;parentId&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
          <span class="token property">&quot;categoryDesc&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
          <span class="token property">&quot;categoryImgUrl&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;productId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;expressLimit&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;expressPrice&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
        <span class="token property">&quot;poductImgUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;imgs/crab.png&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;productName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5E1D\u738B\u87F9&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;shop&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;sales&quot;</span><span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span>
        <span class="token property">&quot;stock&quot;</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
        <span class="token property">&quot;oldprice&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">1800</span><span class="token punctuation">,</span>
        <span class="token property">&quot;unit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token property">&quot;categoryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5546\u54C1&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;parentId&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
          <span class="token property">&quot;categoryDesc&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
          <span class="token property">&quot;categoryImgUrl&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;productId&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;expressLimit&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;expressPrice&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
        <span class="token property">&quot;poductImgUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;imgs/orange.png&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;productName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6A59\u5B50&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;shop&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;sales&quot;</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
        <span class="token property">&quot;stock&quot;</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
        <span class="token property">&quot;oldprice&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
        <span class="token property">&quot;unit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token property">&quot;categoryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5546\u54C1&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;parentId&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
          <span class="token property">&quot;categoryDesc&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
          <span class="token property">&quot;categoryImgUrl&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;productId&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
        <span class="token property">&quot;expressLimit&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;expressPrice&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
        <span class="token property">&quot;poductImgUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;imgs/tomato.png&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;productName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u897F\u7EA2\u67FF&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;shop&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;sales&quot;</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
        <span class="token property">&quot;stock&quot;</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
        <span class="token property">&quot;oldprice&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
        <span class="token property">&quot;unit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token property">&quot;categoryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5546\u54C1&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;parentId&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
          <span class="token property">&quot;categoryDesc&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
          <span class="token property">&quot;categoryImgUrl&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;isFollowEd&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u67E5\u8BE2\u9644\u8FD1\u7684\u5546\u5E97" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u9644\u8FD1\u7684\u5546\u5E97" aria-hidden="true">#</a> \u67E5\u8BE2\u9644\u8FD1\u7684\u5546\u5E97</h3><p>\u8BF4\u660E\uFF1A</p><p>\u67E5\u8BE2\u9644\u8FD1\u7684\u5546\u5E97\u4FE1\u606F\u3002</p><p>url\uFF1A/datas/shop/showNearShops</p><p>\u8BF7\u6C42\u65B9\u6CD5\uFF1AGET</p><p>userId\uFF1A Long</p><p>\u6D4B\u8BD5\u6848\u4F8B</p><ul><li>\u6D4B\u8BD5 URL</li></ul><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>/datas/shop/showNearShops
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE JSON \u6570\u636E\uFF1A</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u519C\u8D38\u83DC\u573A&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;categoryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5546\u54C1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;parentId&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;categoryDesc&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;categoryImgUrl&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;imgUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;imgs/near.png&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sales&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
      <span class="token property">&quot;expressLimit&quot;</span><span class="token operator">:</span> <span class="token number">121</span><span class="token punctuation">,</span>
      <span class="token property">&quot;slogan&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2312&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;expressPrice&quot;</span><span class="token operator">:</span> <span class="token number">3123</span><span class="token punctuation">,</span>
      <span class="token property">&quot;products&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6C38\u8F89\u8D85\u5E02&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;categoryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5546\u54C1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;parentId&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;categoryDesc&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;categoryImgUrl&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;imgUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;imgs/yh.jpg&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sales&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
      <span class="token property">&quot;expressLimit&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
      <span class="token property">&quot;slogan&quot;</span><span class="token operator">:</span> <span class="token string">&quot;12&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;expressPrice&quot;</span><span class="token operator">:</span> <span class="token number">1231</span><span class="token punctuation">,</span>
      <span class="token property">&quot;products&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8FDB\u5165\u5546\u5E97" tabindex="-1"><a class="header-anchor" href="#\u8FDB\u5165\u5546\u5E97" aria-hidden="true">#</a> \u8FDB\u5165\u5546\u5E97</h3><p>\u8BF4\u660E\uFF1A</p><p>\u6839\u636E\u5546\u5E97\u7684\u4E3B\u952E\u67E5\u8BE2\u67D0\u5546\u5E97\u7684\u4EA7\u54C1\u3002</p><p>url\uFF1A/datas/shop/showProductsByShopId</p><p>\u8BF7\u6C42\u65B9\u6CD5\uFF1AGET</p><p>\u53C2\u6570\uFF1A shopId\uFF1ALong</p><p>userId\uFF1A Long \uFF08\u53EF\u9009 \u767B\u5F55\u8005\uFF09</p><p>\u6D4B\u8BD5\u6848\u4F8B</p><ul><li>\u6D4B\u8BD5 URL</li></ul><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>/datas/shop/showProductsByShopId?shopId=2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE JSON \u6570\u636E</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;productId&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;expressLimit&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;expressPrice&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
      <span class="token property">&quot;poductImgUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;productName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;shop&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sales&quot;</span><span class="token operator">:</span> <span class="token number">501</span><span class="token punctuation">,</span>
      <span class="token property">&quot;stock&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
      <span class="token property">&quot;oldprice&quot;</span><span class="token operator">:</span> <span class="token number">123.0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">123.0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;unit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;categoryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u4EA7\u54C1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;parentId&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;categoryDesc&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;categoryImgUrl&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;productId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">&quot;expressLimit&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;expressPrice&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
      <span class="token property">&quot;poductImgUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;productName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;21&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;shop&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sales&quot;</span><span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span>
      <span class="token property">&quot;stock&quot;</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
      <span class="token property">&quot;oldprice&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">123.0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;unit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;categoryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u4EA7\u54C1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;parentId&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;categoryDesc&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;categoryImgUrl&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;isFollowEd&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6309\u9009\u5361\u67E5\u8BE2\u5546\u54C1" tabindex="-1"><a class="header-anchor" href="#\u6309\u9009\u5361\u67E5\u8BE2\u5546\u54C1" aria-hidden="true">#</a> \u6309\u9009\u5361\u67E5\u8BE2\u5546\u54C1</h3><p>\u8BF4\u660E\uFF1A</p><p>\u6839\u636E\u5DE6\u8FB9\u7684\u9009\u5361\u6765\u8FD4\u56DE\u5546\u54C1\u4FE1\u606F\uFF0C\u8FD9\u91CC\u6839\u636E\u6708\u9500\u552E\u989D\u5224\u65AD\u662F\u5426\u4E3A\u70ED\u95E8\u4EA7\u54C1\u3002</p><p>url\uFF1A/datas/shop/showProducts</p><p>\u8BF7\u6C42\u65B9\u6CD5\uFF1AGET</p><p>\u53C2\u6570\uFF1A tab\uFF1AString</p><p>shopId\uFF1ALong</p><p>\u6D4B\u8BD5\u6848\u4F8B</p><ul><li>\u6D4B\u8BD5 URL</li></ul><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>/datas/shop/showProducts?tab=all&amp;shopId=2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE JSON \u6570\u636E</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;expressLimit&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;expressPrice&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
      <span class="token property">&quot;imgUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;imgs/cherry.png&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6A31\u6843&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;shop&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sales&quot;</span><span class="token operator">:</span> <span class="token number">501</span><span class="token punctuation">,</span>
      <span class="token property">&quot;stock&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
      <span class="token property">&quot;oldPrice&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
      <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
      <span class="token property">&quot;unit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;categoryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5546\u54C1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;parentId&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;categoryDesc&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;categoryImgUrl&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">&quot;expressLimit&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;expressPrice&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
      <span class="token property">&quot;imgUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;imgs/crab.png&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5E1D\u738B\u87F9&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;shop&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sales&quot;</span><span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span>
      <span class="token property">&quot;stock&quot;</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
      <span class="token property">&quot;oldPrice&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">1800</span><span class="token punctuation">,</span>
      <span class="token property">&quot;unit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;categoryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5546\u54C1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;parentId&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;categoryDesc&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;categoryImgUrl&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5173\u6CE8\u5546\u94FA\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u5173\u6CE8\u5546\u94FA\u67E5\u8BE2" aria-hidden="true">#</a> \u5173\u6CE8\u5546\u94FA\u67E5\u8BE2</h3><p>\u8BF4\u660E\uFF1A</p><p>\u6839\u636E userId \u67E5\u770B\u5173\u6CE8\u7684\u5546\u5E97\uFF0C\u7528\u6237\u4E3A\u767B\u5F55\u72B6\u6001\u65F6\uFF0C\u7528\u4E8E\u8FDB\u5165\u3010\u6211\u7684\u5173\u6CE8\u3011\u6765\u4F7F\u7528\u6B64\u63A5\u53E3\u3002</p><p>url: /datas/shop/showMyFollows</p><p>\u8BF7\u6C42\u65B9\u6CD5\uFF1A GET</p><p>\u8BF7\u6C42\u53C2\u6570\uFF1A</p><p>userId: Long</p><p>\u6D4B\u8BD5\u6848\u4F8B</p><ul><li>\u6D4B\u8BD5 URL</li></ul><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>/datas/shop/showMyFollows?userId=1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE JSON \u6570\u636E</li></ul><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>{
    &quot;data&quot;: [
        {
            &quot;followId&quot;: 1,
            &quot;user&quot;: {
                &quot;userId&quot;: 1,
                &quot;userName&quot;: &quot;zhangsan&quot;,
                &quot;password&quot;: &quot;123&quot;,
                &quot;userImgUrl&quot;: &quot;3.png&quot;,
                &quot;realname&quot;: &quot;\u5F20\u4E09&quot;,
                &quot;phone&quot;: &quot;123&quot;
            },
            &quot;shop&quot;: {
                &quot;shopId&quot;: 3,
                &quot;shopnName&quot;: &quot;\u670D\u88C5\u5E97&quot;,
                &quot;category&quot;: {
                    &quot;categoryId&quot;: 2,
                    &quot;categoryName&quot;: &quot;\u4EA7\u54C1&quot;,
                    &quot;parentId&quot;: null,
                    &quot;categoryDesc&quot;: null,
                    &quot;categoryImgUrl&quot;: null
                },
                &quot;shopImgUrl&quot;: &quot;12&quot;,
                &quot;shopSales&quot;: 123,
                &quot;expressLimit&quot;: 123,
                &quot;slogan&quot;: &quot;12&quot;,
                &quot;expressPrice&quot;: 1231
            }
        },
        {
            &quot;followId&quot;: 2,
            &quot;user&quot;: {
                &quot;userId&quot;: 1,
                &quot;userName&quot;: &quot;zhangsan&quot;,
                &quot;password&quot;: &quot;123&quot;,
                &quot;userImgUrl&quot;: &quot;3.png&quot;,
                &quot;realname&quot;: &quot;\u5F20\u4E09&quot;,
                &quot;phone&quot;: &quot;123&quot;
            },
            &quot;shop&quot;: {
                &quot;shopId&quot;: 2,
                &quot;shopnName&quot;: &quot;\u7259\u818F&quot;,
                &quot;category&quot;: {
                    &quot;categoryId&quot;: 2,
                    &quot;categoryName&quot;: &quot;\u4EA7\u54C1&quot;,
                    &quot;parentId&quot;: null,
                    &quot;categoryDesc&quot;: null,
                    &quot;categoryImgUrl&quot;: null
                },
                &quot;shopImgUrl&quot;: &quot;123&quot;,
                &quot;shopSales&quot;: 123,
                &quot;expressLimit&quot;: 121,
                &quot;slogan&quot;: &quot;2312&quot;,
                &quot;expressPrice&quot;: 3123
            }
        }
    ],
    &quot;state&quot;: &quot;success&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5173\u6CE8\u5546\u94FA" tabindex="-1"><a class="header-anchor" href="#\u5173\u6CE8\u5546\u94FA" aria-hidden="true">#</a> \u5173\u6CE8\u5546\u94FA</h3><p>\u8BF4\u660E\uFF1A</p><p>\u5173\u6CE8\u7684\u672C\u8D28\u5C31\u662F\u5411\u5173\u6CE8\u8868\u6DFB\u52A0\u4E00\u6761\u8BB0\u5F55\u3002\u8FD9\u91CC\u6839\u636E userId \u548C shopId \u5411 \u5173\u6CE8\u8868 \u63D2\u5165\u6570\u636E</p><p>url\uFF1A/datas/shop/saveFollow</p><p>\u8BF7\u6C42\u65B9\u6CD5\uFF1A POST</p><p>\u53C2\u6570\uFF1A</p><p>userId\uFF1ALong</p><p>shopId\uFF1ALong</p><p>\u6D4B\u8BD5\u6848\u4F8B</p><ul><li>\u6D4B\u8BD5 URL</li></ul><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>/datas/shop/saveFollow?userId=1&amp;shopId=2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE JSON \u6570\u636E</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u53D6\u6D88\u5173\u6CE8\u5546\u94FA" tabindex="-1"><a class="header-anchor" href="#\u53D6\u6D88\u5173\u6CE8\u5546\u94FA" aria-hidden="true">#</a> \u53D6\u6D88\u5173\u6CE8\u5546\u94FA</h3><p>\u8BF4\u660E\uFF1A</p><p>\u53D6\u6D88\u5173\u6CE8\u7684\u672C\u8D28\u5C31\u662F\u5220\u9664\u5173\u6CE8\u8868\u7684\u4E00\u6761\u8BB0\u5F55\u3002\u8FD9\u91CC\u6839\u636E\u767B\u5F55\u8005\uFF08userId\uFF09\u548C\u5546\u5E97\u4E3B\u952E\uFF08shopId\uFF09\u5220\u9664\u5173\u6CE8\u8868\u4E00\u6761\u8BB0\u5F55\u3002</p><p>url: /datas/shop/deleteFollow</p><p>\u8BF7\u6C42\u65B9\u6CD5\uFF1A POST</p><p>\u53C2\u6570\uFF1A</p><p>userId\uFF1ALong</p><p>shopId\uFF1ALong</p><p>\u6D4B\u8BD5\u6848\u4F8B</p><ul><li>\u6D4B\u8BD5 URL</li></ul><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>/datas/shop/deleteFollow?userId=1&amp;shopId=2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE JSON \u6570\u636E</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4EA7\u54C1\u7C7B\u522B\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u4EA7\u54C1\u7C7B\u522B\u67E5\u8BE2" aria-hidden="true">#</a> \u4EA7\u54C1\u7C7B\u522B\u67E5\u8BE2</h3><p>\u8BF4\u660E\uFF1A</p><p>\u67E5\u8BE2\u4E0D\u540C\u7C7B\u578B\u4EA7\u54C1\u7684\u7C7B\u578B\u3002</p><p>url: /datas/shop/showProductCategorys</p><p>\u8BF7\u6C42\u65B9\u6CD5\uFF1A GET</p><p>\u53C2\u6570\uFF1A\u65E0</p><p>\u6D4B\u8BD5\u6848\u4F8B</p><ul><li>\u6D4B\u8BD5 URL</li></ul><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>/datas/shop/showProductCategorys
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE JSON \u6570\u636E</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;data&quot;: [
        {
            &quot;categoryId&quot;: 3,
            &quot;categoryName&quot;: &quot;\u670D\u88C5\u7C7B\u578B&quot;,
            &quot;parentId&quot;: 2,
            &quot;categoryDesc&quot;: null,
            &quot;categoryImgUrl&quot;: null
        }
    ],
    &quot;state&quot;: &quot;success&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5546\u5E97\u7C7B\u522B\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u5546\u5E97\u7C7B\u522B\u67E5\u8BE2" aria-hidden="true">#</a> \u5546\u5E97\u7C7B\u522B\u67E5\u8BE2</h3><p>\u8BF4\u660E\uFF1A</p><p>\u67E5\u8BE2\u4E0D\u540C\u7C7B\u578B\u5546\u5E97\u7684\u7C7B\u578B</p><p>url\uFF1A/datas/shop/showShopCategorys</p><p>\u8BF7\u6C42\u65B9\u6CD5\uFF1AGET</p><p>\u53C2\u6570\uFF1A null</p><p>\u6D4B\u8BD5\u6848\u4F8B</p><ul><li>\u6D4B\u8BD5 URL</li></ul><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>/datas/shop/showShopCategorys
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE JSON \u6570\u636E</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token property">&quot;categoryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5546\u5E97\u7C7B\u578B&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;parentId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">&quot;categoryDesc&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token property">&quot;categoryImgUrl&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8BA2\u5355\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u8BA2\u5355\u6A21\u5757" aria-hidden="true">#</a> \u8BA2\u5355\u6A21\u5757</h2><h3 id="\u6DFB\u52A0\u6536\u8D27\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u6536\u8D27\u5730\u5740" aria-hidden="true">#</a> \u6DFB\u52A0\u6536\u8D27\u5730\u5740</h3><p>\u8BF4\u660E\uFF1A</p><p>\u6839\u636E\u7528\u6237\u63D0\u4EA4\u7684\u6536\u83B7\u5730\u5740\u4FE1\u606F\uFF0C\u5411\u6570\u636E\u5E93 t_address \u6DFB\u52A0\u6536\u83B7\u5730\u5740\u3002</p><p>URL: /datas/shop/saveAddress</p><p>\u8BF7\u6C42\u65B9\u6CD5\uFF1APOST</p><p>\u53C2\u6570\uFF1A</p><p>city\uFF1AString\uFF08\u57CE\u5E02\uFF09</p><p>department\uFF1AString\uFF08\u5C0F\u533A\uFF09</p><p>houseNumber\uFF1AInt\uFF08\u95E8\u724C\u53F7\uFF09</p><p>realName\uFF1AString \uFF08\u6536\u83B7\u4EBA\u59D3\u540D\uFF09</p><p>phone:String\uFF08\u8054\u7CFB\u7535\u8BDD\uFF09</p><p>userId\uFF1ALong\uFF08\u6240\u5C5E\u7528\u6237\uFF09</p><p>isdefault\uFF1ABoolean\uFF08\u662F\u5426\u8BBE\u7F6E\u4E3A\u9ED8\u8BA4\uFF09</p><p>\u6D4B\u8BD5\u6848\u4F8B\uFF1A</p><ul><li>\u6D4B\u8BD5 URL</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>/datas/shop/saveAddress?city<span class="token operator">=</span>\u5317\u4EAC<span class="token operator">&amp;</span><span class="token assign-left variable">department</span><span class="token operator">=</span>\u65B0\u534E\u5F00\u53D1\u533A<span class="token operator">&amp;</span><span class="token assign-left variable">houseNumber</span><span class="token operator">=</span><span class="token number">1202</span><span class="token operator">&amp;</span><span class="token assign-left variable">realName</span><span class="token operator">=</span>\u5F20\u4E09<span class="token operator">&amp;</span><span class="token assign-left variable">phone</span><span class="token operator">=</span><span class="token number">13912323232</span><span class="token operator">&amp;</span><span class="token assign-left variable">userId</span><span class="token operator">=</span><span class="token number">1</span><span class="token operator">&amp;</span><span class="token assign-left variable">isdefault</span><span class="token operator">=</span>false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE JSON \u6570\u636E</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">{</span>
    <span class="token string">&quot;state&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;success&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5220\u9664\u6536\u83B7\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u6536\u83B7\u5730\u5740" aria-hidden="true">#</a> \u5220\u9664\u6536\u83B7\u5730\u5740</h3><p>\u8BF4\u660E\uFF1A</p><p>\u6839\u636E\u7528\u6237\u4F20\u5165\u7684 addressId \u5220\u9664\u5730\u5740\u4FE1\u606F\u3002</p><p>URL\uFF1A/datas/shop/deleteAddress</p><p>\u8BF7\u6C42\u65B9\u6CD5\uFF1ADELETE</p><p>\u53C2\u6570\uFF1A</p><p>addressId\uFF1ALong\uFF08\u5730\u5740\u8868\u4E3B\u952E\uFF09</p><p>\u6D4B\u8BD5\u6848\u4F8B\uFF1A</p><ul><li>\u6D4B\u8BD5 url</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>/datas/shop/deleteAddress?addressId<span class="token operator">=</span><span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE JSON \u6570\u636E</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4FEE\u6539\u6536\u83B7\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u6536\u83B7\u5730\u5740" aria-hidden="true">#</a> \u4FEE\u6539\u6536\u83B7\u5730\u5740</h3><p>\u8BF4\u660E\uFF1A</p><p>\u6839\u636E\u7528\u6237\u63D0\u4EA4\u65B0\u7684\u6536\u83B7\u5730\u5740\u4FE1\u606F\u4FEE\u6539\u6536\u83B7\u5730\u5740\u3002</p><p>URL\uFF1A/datas/shop/updateAddress</p><p>\u8BF7\u6C42\u65B9\u6CD5\uFF1APOST</p><p>\u53C2\u6570\uFF1A</p><p>addressId\uFF1ALong\uFF08\u5730\u5740\u8868\u4E3B\u952E\uFF09</p><p>city\uFF1AString\uFF08\u57CE\u5E02\uFF09</p><p>department\uFF1AString\uFF08\u5C0F\u533A\uFF09</p><p>houseNumber\uFF1AInt\uFF08\u95E8\u724C\u53F7\uFF09</p><p>realName\uFF1AString \uFF08\u6536\u83B7\u4EBA\u59D3\u540D\uFF09</p><p>phone:String\uFF08\u8054\u7CFB\u7535\u8BDD\uFF09</p><p>userId\uFF1ALong\uFF08\u6240\u5C5E\u7528\u6237\uFF09</p><p>isdefault\uFF1ABoolean\uFF08\u662F\u5426\u8BBE\u7F6E\u4E3A\u9ED8\u8BA4\uFF09</p><p>\u6D4B\u8BD5\u6848\u4F8B\uFF1A</p><ul><li>\u6D4B\u8BD5 URL</li></ul><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>/datas/shop/updateAddress?city=\u5317\u4EAC&amp;department=\u65B0\u534E\u5F00\u53D1\u533A&amp;houseNumber=1202&amp;realName=\u5F20\u4E09&amp;phone=13912323232&amp;userId=1&amp;isdefault=true&amp;addressId=4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE JSON \u6570\u636E</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u67E5\u770B\u6211\u7684\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6211\u7684\u5730\u5740" aria-hidden="true">#</a> \u67E5\u770B\u6211\u7684\u5730\u5740</h3><p>\u8BF4\u660E\uFF1A</p><p>\u67E5\u8BE2\u5F53\u524D\u7528\u6237\u6240\u6709\u7684\u5730\u5740\u4FE1\u606F\u3002</p><p>URL\uFF1A/datas/shop/showAddresses</p><p>\u8BF7\u6C42\u65B9\u6CD5\uFF1AGET</p><p>\u53C2\u6570\uFF1A</p><p>userId\uFF1ALong \uFF08\u767B\u5F55\u8005\uFF09</p><p>\u6D4B\u8BD5\u6848\u4F8B\uFF1A</p><ul><li>\u6D4B\u8BD5 URL</li></ul><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>    /datas/shop/showAddresses?userId=1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE JSON \u6570\u636E</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;city&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u4E0A\u6D77&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;department&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u957F\u8FDC\u8BF7\u5C0F\u533A&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;houseNumber&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1688&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;phone&quot;</span><span class="token operator">:</span> <span class="token string">&quot;12134567654&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;updatedAt&quot;</span><span class="token operator">:</span> <span class="token number">1631531476000</span><span class="token punctuation">,</span>
      <span class="token property">&quot;createdAt&quot;</span><span class="token operator">:</span> <span class="token number">1631735792000</span><span class="token punctuation">,</span>
      <span class="token property">&quot;isdefault&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">&quot;userId&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">&quot;city&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u676D\u5DDE&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;department&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u676D\u5DDE\u7535\u5B50\u79D1\u6280\u5927\u5B66&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;houseNumber&quot;</span><span class="token operator">:</span> <span class="token string">&quot;9\u53F7\u697C712&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u674E\u56DB&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;phone&quot;</span><span class="token operator">:</span> <span class="token string">&quot;19858106573&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;updatedAt&quot;</span><span class="token operator">:</span> <span class="token number">1631531488000</span><span class="token punctuation">,</span>
      <span class="token property">&quot;createdAt&quot;</span><span class="token operator">:</span> <span class="token number">1631735792000</span><span class="token punctuation">,</span>
      <span class="token property">&quot;isdefault&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">&quot;userId&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token property">&quot;city&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u676D\u5DDE&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;department&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6D59\u6C5F\u5927\u5B66\u7D2B\u8346\u6E2F\u6821\u533A&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;houseNumber&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u7B03\u884C\u697C318&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u738B\u4E94&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;phone&quot;</span><span class="token operator">:</span> <span class="token string">&quot;17326051238&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;updatedAt&quot;</span><span class="token operator">:</span> <span class="token number">1631531489000</span><span class="token punctuation">,</span>
      <span class="token property">&quot;createdAt&quot;</span><span class="token operator">:</span> <span class="token number">1631700334000</span><span class="token punctuation">,</span>
      <span class="token property">&quot;isdefault&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">&quot;userId&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
      <span class="token property">&quot;city&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;department&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;houseNumber&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;phone&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;updatedAt&quot;</span><span class="token operator">:</span> <span class="token number">1654015649000</span><span class="token punctuation">,</span>
      <span class="token property">&quot;createdAt&quot;</span><span class="token operator">:</span> <span class="token number">1653986849000</span><span class="token punctuation">,</span>
      <span class="token property">&quot;isdefault&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">&quot;userId&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u67E5\u770B\u67D0\u4E2A\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u67D0\u4E2A\u5730\u5740" aria-hidden="true">#</a> \u67E5\u770B\u67D0\u4E2A\u5730\u5740</h3><p>\u8BF4\u660E\uFF1A</p><p>\u6839\u636E\u5730\u5740\u8868\u4E3B\u952E\uFF0C\u67E5\u770B\u5F53\u524D\u7528\u6237\u7684\u5730\u5740\u4FE1\u606F\u3002</p><p>URL\uFF1A/datas/shop/showAddress</p><p>\u8BF7\u6C42\u65B9\u6CD5\uFF1AGET</p><p>\u53C2\u6570\uFF1A</p><p>addressId\uFF1ALong\uFF08\u5730\u5740\u4E3B\u952E\uFF09</p><p>\u6D4B\u8BD5\u6848\u4F8B</p><ul><li>\u6D4B\u8BD5 URL</li></ul><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>/datas/shop/showAddress?addressId=4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE JSON \u6570\u636E</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;addressId&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token property">&quot;city&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5317\u4EAC&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;department&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u65B0\u534E\u5F00\u53D1\u533A&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;houseNumber&quot;</span><span class="token operator">:</span> <span class="token number">1202</span><span class="token punctuation">,</span>
    <span class="token property">&quot;realName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;phone&quot;</span><span class="token operator">:</span> <span class="token string">&quot;13912323232&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;updatedAt&quot;</span><span class="token operator">:</span> <span class="token number">1632294701000</span><span class="token punctuation">,</span>
    <span class="token property">&quot;createdAt&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;isdefault&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;userId&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u67E5\u8BE2\u6211\u7684\u8D2D\u7269\u8F66" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u6211\u7684\u8D2D\u7269\u8F66" aria-hidden="true">#</a> \u67E5\u8BE2\u6211\u7684\u8D2D\u7269\u8F66</h3><p>\u8BF4\u660E\uFF1A</p><p>\u7528\u6237\u4E3A\u767B\u5F55\u72B6\u6001\u65F6\uFF0C\u67E5\u770B\u6211\u7684\u8D2D\u7269\u8F66\u4FE1\u606F\u3002</p><p>url:/datas/shop/showMycars</p><p>\u8BF7\u6C42\u65B9\u6CD5\uFF1AGET</p><p>\u53C2\u6570\uFF1AuserId\uFF1ALong(\u767B\u5F55\u8005)</p><p>\u6D4B\u8BD5\u6848\u4F8B\uFF1A</p><ul><li>\u6D4B\u8BD5 url</li></ul><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>/datas/shop/showMycars?userId=1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE JSON \u6570\u636E</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;data&quot;: [
        {
            &quot;orderId&quot;: null,
            &quot;address&quot;: null,
            &quot;user&quot;: null,
            &quot;updatedAt&quot;: 1631697425000,
            &quot;createdAt&quot;: 1631692966000,
            &quot;shop&quot;: null,
            &quot;orderTotalPrice&quot;: 100.0,
            &quot;isCanceled&quot;: &quot;0&quot;,
            &quot;orderDetails&quot;: [
                {
                    &quot;detailId&quot;: 203,
                    &quot;product&quot;: {
                        &quot;productId&quot;: 1,
                        &quot;expressLimit&quot;: 1,
                        &quot;expressPrice&quot;: 123,
                        &quot;poductImgUrl&quot;: &quot;123&quot;,
                        &quot;productName&quot;: &quot;\u97E9\u7248\u5185\u8863&quot;,
                        &quot;shop&quot;: null,
                        &quot;sales&quot;: 501,
                        &quot;stock&quot;: 123,
                        &quot;oldprice&quot;: 123.0,
                        &quot;price&quot;: 123.0,
                        &quot;unit&quot;: &quot;123&quot;,
                        &quot;category&quot;: {
                            &quot;categoryId&quot;: 2,
                            &quot;categoryName&quot;: &quot;\u5546\u54C1&quot;,
                            &quot;parentId&quot;: null,
                            &quot;categoryDesc&quot;: null,
                            &quot;categoryImgUrl&quot;: null
                        }
                    },
                    &quot;orderSales&quot;: 16,
                    &quot;orderId&quot;: null
                },
                {
                    &quot;detailId&quot;: 204,
                    &quot;product&quot;: {
                        &quot;productId&quot;: 2,
                        &quot;expressLimit&quot;: 1,
                        &quot;expressPrice&quot;: 123,
                        &quot;poductImgUrl&quot;: &quot;123&quot;,
                        &quot;productName&quot;: &quot;\u97E9\u7248\u5916\u5957&quot;,
                        &quot;shop&quot;: null,
                        &quot;sales&quot;: 600,
                        &quot;stock&quot;: 13,
                        &quot;oldprice&quot;: 1.0,
                        &quot;price&quot;: 123.0,
                        &quot;unit&quot;: &quot;123&quot;,
                        &quot;category&quot;: {
                            &quot;categoryId&quot;: 2,
                            &quot;categoryName&quot;: &quot;\u5546\u54C1&quot;,
                            &quot;parentId&quot;: null,
                            &quot;categoryDesc&quot;: null,
                            &quot;categoryImgUrl&quot;: null
                        }
                    },
                    &quot;orderSales&quot;: 13,
                    &quot;orderId&quot;: null
                }
            ],
            &quot;ordernumber&quot;: &quot;1_1631693238470&quot;
        }
    ],
    &quot;state&quot;: &quot;success&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6DFB\u52A0\u8D2D\u7269\u8F66" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u8D2D\u7269\u8F66" aria-hidden="true">#</a> \u6DFB\u52A0\u8D2D\u7269\u8F66</h3><p>\u8BF4\u660E\uFF1A</p><p>\u7528\u6237\u6DFB\u52A0\u8D2D\u7269\u8F66\u529F\u80FD\u3002</p><p>url: /datas/shop/addMyCar</p><p>\u8BF7\u6C42\u65B9\u6CD5\uFF1APOST</p><p>\u8BF7\u6C42\u53C2\u6570\uFF1A</p><p>productIds: String (\u503C\u6848\u4F8B\uFF1A1,2)</p><p>orderSaleses\uFF1AString \uFF08\u503C\u6848\u4F8B\uFF1A2,3\uFF09</p><p>totalPrice: Float \u603B\u4EF7</p><p>userId: Long \u8D2D\u4E70\u8005 Id</p><p>shopId: Long \u5546\u94FA Id</p><p>\u6D4B\u8BD5\u6848\u4F8B:</p><ul><li>\u6D4B\u8BD5 URL</li></ul><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>/datas/shop/addMyCar?productIds=1,2&amp;orderSaleses=2,3&amp;totalPrice=300&amp;userId=1&amp;shopId=2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE JSON \u6570\u636E</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4FEE\u6539\u8D2D\u7269\u8F66" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u8D2D\u7269\u8F66" aria-hidden="true">#</a> \u4FEE\u6539\u8D2D\u7269\u8F66</h3><p>\u8BF4\u660E\uFF1A</p><p>\u4FEE\u6539\u8D2D\u7269\u8F66\u529F\u80FD\u3002</p><p>url: /datas/shop/updateMyCar</p><p>\u8BF7\u6C42\u65B9\u6CD5\uFF1APOST</p><p>\u8BF7\u6C42\u53C2\u6570\uFF1A</p><p>productIds: String (\u503C\u6848\u4F8B\uFF1A1,2)</p><p>orderSaleses\uFF1AString \uFF08\u503C\u6848\u4F8B\uFF1A2,3\uFF09</p><p>totalPrice: Float \u603B\u4EF7</p><p>carId: Long (\u8D2D\u7269\u8F66 Id)</p><p>\u6D4B\u8BD5\u6848\u4F8B</p><ul><li>\u6D4B\u8BD5 URL</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/datas/shop/updateMyCar?productIds=1,2&amp;orderSaleses=6,3&amp;totalPrice=900&amp;carId=28
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD4\u56DE JSON \u6570\u636E</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u751F\u6210\u8BA2\u5355" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u8BA2\u5355" aria-hidden="true">#</a> \u751F\u6210\u8BA2\u5355</h3><p>\u8BF4\u660E\uFF1A</p><p>\u751F\u6210\u8BA2\u5355\u529F\u80FD\u3002</p><p>url\uFF1A/datas/shop/buidOrder</p><p>\u8BF7\u6C42\u65B9\u6CD5\uFF1APOST</p><p>\u53C2\u6570\uFF1A</p><p>data\uFF1ABuildOrderInfo</p><p>\u6D4B\u8BD5\u6848\u4F8B\uFF1A</p><ul><li>\u6D4B\u8BD5 URL</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/datas/shop/buidOrder
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE\u6570\u636E\u6848\u4F8B\uFF1A</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;orderId&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;addressId&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;userId&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;createdAt&quot;</span><span class="token operator">:</span> <span class="token number">1653987187379</span><span class="token punctuation">,</span>
    <span class="token property">&quot;shop&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;shopId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;orderTotalPrice&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
    <span class="token property">&quot;isCanceled&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ordernumber&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1_1653987187379&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u67E5\u8BE2\u6211\u7684\u6240\u6709-\u5168\u90E8-\u8BA2\u5355" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u6211\u7684\u6240\u6709-\u5168\u90E8-\u8BA2\u5355" aria-hidden="true">#</a> \u67E5\u8BE2\u6211\u7684\u6240\u6709\uFF08\u5168\u90E8\uFF09\u8BA2\u5355</h3><p>\u8BF4\u660E\uFF1A</p><p>\u7528\u6237\u4E3A\u767B\u5F55\u72B6\u6001\u65F6\uFF0C\u67E5\u770B\u6211\u7684\u6240\u6709\u8BA2\u5355\u529F\u80FD\u3002</p><p>url:/datas/shop/showMyOrder</p><p>\u8BF7\u6C42\u65B9\u6CD5\uFF1AGET</p><p>\u53C2\u6570\uFF1AuserId\uFF1ALong(\u767B\u5F55\u8005)</p><p>\u6D4B\u8BD5\u6848\u4F8B</p><ul><li>\u6D4B\u8BD5 URL</li></ul><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>/datas/shop/showMyOrder?userId=1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE JSON \u6570\u636E\uFF1A</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;city&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u676D\u5DDE&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;department&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u676D\u5DDE\u7535\u5B50\u79D1\u6280\u5927\u5B66&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;houseNumber&quot;</span><span class="token operator">:</span> <span class="token string">&quot;9\u53F7\u697C712&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u674E\u56DB&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;phone&quot;</span><span class="token operator">:</span> <span class="token string">&quot;19858106573&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;updatedAt&quot;</span><span class="token operator">:</span> <span class="token number">1631531488000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;createdAt&quot;</span><span class="token operator">:</span> <span class="token number">1631735792000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;isdefault&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;userId&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;shopId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">&quot;shopName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u519C\u8D38\u83DC\u573A&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;isCanceled&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;products&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;orderSales&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;product&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;expressLimit&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;expressPrice&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
            <span class="token property">&quot;img&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./imgs/cherry.png&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6A31\u6843&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;shop&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;sales&quot;</span><span class="token operator">:</span> <span class="token number">501</span><span class="token punctuation">,</span>
            <span class="token property">&quot;stock&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
            <span class="token property">&quot;oldPrice&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
            <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
            <span class="token property">&quot;unit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5546\u54C1&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;parentId&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryDesc&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryImgUrl&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;orderSales&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
          <span class="token property">&quot;product&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;expressLimit&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;expressPrice&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
            <span class="token property">&quot;img&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./imgs/crab.png&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5E1D\u738B\u87F9&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;shop&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;sales&quot;</span><span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span>
            <span class="token property">&quot;stock&quot;</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
            <span class="token property">&quot;oldPrice&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">1800</span><span class="token punctuation">,</span>
            <span class="token property">&quot;unit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5546\u54C1&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;parentId&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryDesc&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryImgUrl&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;orderSales&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;product&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token property">&quot;expressLimit&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;expressPrice&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
            <span class="token property">&quot;img&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./imgs/orange.png&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6A59\u5B50&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;shop&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;sales&quot;</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
            <span class="token property">&quot;stock&quot;</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
            <span class="token property">&quot;oldPrice&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
            <span class="token property">&quot;unit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5546\u54C1&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;parentId&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryDesc&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryImgUrl&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;city&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u4E0A\u6D77&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;department&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u957F\u8FDC\u8BF7\u5C0F\u533A&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;houseNumber&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1688&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;phone&quot;</span><span class="token operator">:</span> <span class="token string">&quot;12134567654&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;updatedAt&quot;</span><span class="token operator">:</span> <span class="token number">1631531476000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;createdAt&quot;</span><span class="token operator">:</span> <span class="token number">1631735792000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;isdefault&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;userId&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;shopId&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token property">&quot;shopName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6C38\u8F89\u8D85\u5E02&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;isCanceled&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;products&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;orderSales&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;product&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;expressLimit&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;expressPrice&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
            <span class="token property">&quot;img&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./imgs/cherry.png&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6A31\u6843&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;shop&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;sales&quot;</span><span class="token operator">:</span> <span class="token number">501</span><span class="token punctuation">,</span>
            <span class="token property">&quot;stock&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
            <span class="token property">&quot;oldPrice&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
            <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
            <span class="token property">&quot;unit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5546\u54C1&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;parentId&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryDesc&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryImgUrl&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;orderSales&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;product&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token property">&quot;expressLimit&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;expressPrice&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
            <span class="token property">&quot;img&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./imgs/tomato.png&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u897F\u7EA2\u67FF&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;shop&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;sales&quot;</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
            <span class="token property">&quot;stock&quot;</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
            <span class="token property">&quot;oldPrice&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
            <span class="token property">&quot;unit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5546\u54C1&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;parentId&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryDesc&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryImgUrl&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;city&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u4E0A\u6D77&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;department&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u957F\u8FDC\u8BF7\u5C0F\u533A&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;houseNumber&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1688&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;phone&quot;</span><span class="token operator">:</span> <span class="token string">&quot;12134567654&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;updatedAt&quot;</span><span class="token operator">:</span> <span class="token number">1631531476000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;createdAt&quot;</span><span class="token operator">:</span> <span class="token number">1631735792000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;isdefault&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;userId&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;shopId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">&quot;shopName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u519C\u8D38\u83DC\u573A&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;isCanceled&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;products&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;orderSales&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;product&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token property">&quot;expressLimit&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;expressPrice&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
            <span class="token property">&quot;img&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./imgs/tomato.png&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u897F\u7EA2\u67FF&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;shop&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;sales&quot;</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
            <span class="token property">&quot;stock&quot;</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
            <span class="token property">&quot;oldPrice&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
            <span class="token property">&quot;unit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5546\u54C1&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;parentId&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryDesc&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryImgUrl&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;city&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u4E0A\u6D77&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;department&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u957F\u8FDC\u8BF7\u5C0F\u533A&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;houseNumber&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1688&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;phone&quot;</span><span class="token operator">:</span> <span class="token string">&quot;12134567654&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;updatedAt&quot;</span><span class="token operator">:</span> <span class="token number">1631531476000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;createdAt&quot;</span><span class="token operator">:</span> <span class="token number">1631735792000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;isdefault&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;userId&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;shopId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">&quot;shopName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u519C\u8D38\u83DC\u573A&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;isCanceled&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;products&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;orderSales&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;product&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token property">&quot;expressLimit&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;expressPrice&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
            <span class="token property">&quot;img&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./imgs/tomato.png&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u897F\u7EA2\u67FF&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;shop&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;sales&quot;</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
            <span class="token property">&quot;stock&quot;</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
            <span class="token property">&quot;oldPrice&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
            <span class="token property">&quot;unit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5546\u54C1&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;parentId&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryDesc&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryImgUrl&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u67E5\u8BE2\u6211\u7684\u5386\u53F2\u8BA2\u5355-\u5DF2\u5B8C\u6210\u8BA2\u5355" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u6211\u7684\u5386\u53F2\u8BA2\u5355-\u5DF2\u5B8C\u6210\u8BA2\u5355" aria-hidden="true">#</a> \u67E5\u8BE2\u6211\u7684\u5386\u53F2\u8BA2\u5355\uFF08\u5DF2\u5B8C\u6210\u8BA2\u5355\uFF09</h3><p>\u8BF4\u660E\uFF1A</p><p>\u7528\u6237\u4E3A\u767B\u5F55\u72B6\u6001\u65F6\uFF0C\u67E5\u770B\u6211\u7684\u5386\u53F2\u8BA2\u5355(\u5DF2\u5B8C\u6210\u8BA2\u5355)\u529F\u80FD\u3002</p><p>url:/datas/shop/showHistoryOrders</p><p>\u8BF7\u6C42\u65B9\u6CD5\uFF1AGET</p><p>\u53C2\u6570\uFF1AuserId\uFF1ALong(\u767B\u5F55\u8005)</p><p>\u6D4B\u8BD5\u6848\u4F8B</p><ul><li>\u6D4B\u8BD5 URL</li></ul><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>datas/shop/showHistoryOrders?userId=1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE JSON \u6570\u636E\uFF1A</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;city&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u676D\u5DDE&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;department&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u676D\u5DDE\u7535\u5B50\u79D1\u6280\u5927\u5B66&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;houseNumber&quot;</span><span class="token operator">:</span> <span class="token string">&quot;9\u53F7\u697C712&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u674E\u56DB&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;phone&quot;</span><span class="token operator">:</span> <span class="token string">&quot;19858106573&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;updatedAt&quot;</span><span class="token operator">:</span> <span class="token number">1631531488000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;createdAt&quot;</span><span class="token operator">:</span> <span class="token number">1631735792000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;isdefault&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;userId&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;shopId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">&quot;shopName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u519C\u8D38\u83DC\u573A&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;isCanceled&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;products&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;orderSales&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;product&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;expressLimit&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;expressPrice&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
            <span class="token property">&quot;img&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./imgs/cherry.png&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6A31\u6843&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;shop&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;sales&quot;</span><span class="token operator">:</span> <span class="token number">501</span><span class="token punctuation">,</span>
            <span class="token property">&quot;stock&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
            <span class="token property">&quot;oldPrice&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
            <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
            <span class="token property">&quot;unit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5546\u54C1&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;parentId&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryDesc&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryImgUrl&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;orderSales&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
          <span class="token property">&quot;product&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;expressLimit&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;expressPrice&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
            <span class="token property">&quot;img&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./imgs/crab.png&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5E1D\u738B\u87F9&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;shop&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;sales&quot;</span><span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span>
            <span class="token property">&quot;stock&quot;</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
            <span class="token property">&quot;oldPrice&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">1800</span><span class="token punctuation">,</span>
            <span class="token property">&quot;unit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5546\u54C1&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;parentId&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryDesc&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryImgUrl&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;orderSales&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;product&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token property">&quot;expressLimit&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;expressPrice&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
            <span class="token property">&quot;img&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./imgs/orange.png&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6A59\u5B50&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;shop&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;sales&quot;</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
            <span class="token property">&quot;stock&quot;</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
            <span class="token property">&quot;oldPrice&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
            <span class="token property">&quot;unit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5546\u54C1&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;parentId&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryDesc&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryImgUrl&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;city&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u4E0A\u6D77&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;department&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u957F\u8FDC\u8BF7\u5C0F\u533A&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;houseNumber&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1688&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;phone&quot;</span><span class="token operator">:</span> <span class="token string">&quot;12134567654&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;updatedAt&quot;</span><span class="token operator">:</span> <span class="token number">1631531476000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;createdAt&quot;</span><span class="token operator">:</span> <span class="token number">1631735792000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;isdefault&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;userId&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;shopId&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token property">&quot;shopName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6C38\u8F89\u8D85\u5E02&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;isCanceled&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;products&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;orderSales&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;product&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;expressLimit&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;expressPrice&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
            <span class="token property">&quot;img&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./imgs/cherry.png&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6A31\u6843&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;shop&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;sales&quot;</span><span class="token operator">:</span> <span class="token number">501</span><span class="token punctuation">,</span>
            <span class="token property">&quot;stock&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
            <span class="token property">&quot;oldPrice&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
            <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
            <span class="token property">&quot;unit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5546\u54C1&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;parentId&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryDesc&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryImgUrl&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;orderSales&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;product&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token property">&quot;expressLimit&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;expressPrice&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
            <span class="token property">&quot;img&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./imgs/tomato.png&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u897F\u7EA2\u67FF&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;shop&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;sales&quot;</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
            <span class="token property">&quot;stock&quot;</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
            <span class="token property">&quot;oldPrice&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
            <span class="token property">&quot;unit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5546\u54C1&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;parentId&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryDesc&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryImgUrl&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;city&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u4E0A\u6D77&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;department&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u957F\u8FDC\u8BF7\u5C0F\u533A&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;houseNumber&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1688&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;phone&quot;</span><span class="token operator">:</span> <span class="token string">&quot;12134567654&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;updatedAt&quot;</span><span class="token operator">:</span> <span class="token number">1631531476000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;createdAt&quot;</span><span class="token operator">:</span> <span class="token number">1631735792000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;isdefault&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;userId&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;shopId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">&quot;shopName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u519C\u8D38\u83DC\u573A&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;isCanceled&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;products&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;orderSales&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;product&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token property">&quot;expressLimit&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;expressPrice&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
            <span class="token property">&quot;img&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./imgs/tomato.png&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u897F\u7EA2\u67FF&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;shop&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;sales&quot;</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
            <span class="token property">&quot;stock&quot;</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
            <span class="token property">&quot;oldPrice&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
            <span class="token property">&quot;unit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5546\u54C1&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;parentId&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryDesc&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryImgUrl&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;city&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u4E0A\u6D77&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;department&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u957F\u8FDC\u8BF7\u5C0F\u533A&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;houseNumber&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1688&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;phone&quot;</span><span class="token operator">:</span> <span class="token string">&quot;12134567654&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;updatedAt&quot;</span><span class="token operator">:</span> <span class="token number">1631531476000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;createdAt&quot;</span><span class="token operator">:</span> <span class="token number">1631735792000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;isdefault&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;userId&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;shopId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">&quot;shopName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u519C\u8D38\u83DC\u573A&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;isCanceled&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;products&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;orderSales&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;product&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token property">&quot;expressLimit&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;expressPrice&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
            <span class="token property">&quot;img&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./imgs/tomato.png&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u897F\u7EA2\u67FF&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;shop&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;sales&quot;</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
            <span class="token property">&quot;stock&quot;</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
            <span class="token property">&quot;oldPrice&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
            <span class="token property">&quot;unit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5546\u54C1&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;parentId&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryDesc&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryImgUrl&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5F85\u652F\u4ED8" tabindex="-1"><a class="header-anchor" href="#\u5F85\u652F\u4ED8" aria-hidden="true">#</a> \u5F85\u652F\u4ED8</h3><p>\u8BF4\u660E\uFF1A</p><p>\u7528\u6237\u4E3A\u767B\u5F55\u72B6\u6001\u65F6\uFF0C\u67E5\u770B\u672A\u5B8C\u6210\u7684\u8BA2\u5355\u3002</p><p>url:/datas/shop/showNoFinishiOrders</p><p>\u8BF7\u6C42\u65B9\u6CD5\uFF1AGET</p><p>\u53C2\u6570\uFF1AuserId\uFF1ALong(\u767B\u5F55\u8005)</p><p>\u6D4B\u8BD5\u6848\u4F8B</p><ul><li>\u6D4B\u8BD5 URL</li></ul><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>/datas/shop/showNoFinishiOrders?userId=1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE JSON \u6570\u636E\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;data&quot;: [
        {
            &quot;orderId&quot;: 29,
            &quot;address&quot;: null,
            &quot;user&quot;: null,
            &quot;updatedAt&quot;: 1631697429000,
            &quot;createdAt&quot;: 1631265367000,
            &quot;shop&quot;: null,
            &quot;orderTotalPrice&quot;: 1123.0,
            &quot;isCanceled&quot;: &quot;1&quot;,
            &quot;orderDetails&quot;: null,
            &quot;ordernumber&quot;: null
        }
    ],
    &quot;state&quot;: &quot;success&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5F85\u53D1\u8D27" tabindex="-1"><a class="header-anchor" href="#\u5F85\u53D1\u8D27" aria-hidden="true">#</a> \u5F85\u53D1\u8D27</h3><p>\u8BF4\u660E\uFF1A</p><p>\u7528\u6237\u4ED8\u5B8C\u6B3E\u540E\uFF0C\u67E5\u770B\u7B49\u5F85\u53D1\u8D27\u7684\u6240\u6709\u8BA2\u5355\u3002</p><p>url:/datas/shop/showNoSendOrders</p><p>\u8BF7\u6C42\u65B9\u6CD5\uFF1AGET</p><p>\u53C2\u6570\uFF1AuserId\uFF1ALong(\u767B\u5F55\u8005)</p><p>\u6D4B\u8BD5\u6848\u4F8B</p><ul><li>\u6D4B\u8BD5 URL</li></ul><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>/datas/shop/showNoSendOrders?userId=1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE JSON \u6570\u636E\uFF1A</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;orderId&quot;</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token property">&quot;updatedAt&quot;</span><span class="token operator">:</span> <span class="token number">1631697402000</span><span class="token punctuation">,</span>
      <span class="token property">&quot;createdAt&quot;</span><span class="token operator">:</span> <span class="token number">1631697363000</span><span class="token punctuation">,</span>
      <span class="token property">&quot;shop&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token property">&quot;orderTotalPrice&quot;</span><span class="token operator">:</span> <span class="token number">211.0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;isCanceled&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;orderDetails&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token property">&quot;ordernumber&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5F85\u6536\u8D27-\u8FDB\u884C\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u5F85\u6536\u8D27-\u8FDB\u884C\u4E2D" aria-hidden="true">#</a> \u5F85\u6536\u8D27\uFF08\u8FDB\u884C\u4E2D\uFF09</h3><p>\u8BF4\u660E\uFF1A</p><p>\u7528\u6237\u4ED8\u5B8C\u6B3E\u540E\uFF0C\u67E5\u770B\u7B49\u5F85\u6536\u8D27\u7684\u6240\u6709\u8BA2\u5355\u3002</p><p>url:/datas/shop/showSendOrders</p><p>\u8BF7\u6C42\u65B9\u6CD5\uFF1AGET</p><p>\u53C2\u6570\uFF1AuserId\uFF1ALong(\u767B\u5F55\u8005)</p><p>\u6D4B\u8BD5\u6848\u4F8B</p><ul><li>\u6D4B\u8BD5 URL</li></ul><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>/datas/shop/showSendOrders?userId=1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u8FD4\u56DE JSON \u6570\u636E\uFF1A</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;city&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u676D\u5DDE&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;department&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u676D\u5DDE\u7535\u5B50\u79D1\u6280\u5927\u5B66&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;houseNumber&quot;</span><span class="token operator">:</span> <span class="token string">&quot;9\u53F7\u697C712&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u674E\u56DB&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;phone&quot;</span><span class="token operator">:</span> <span class="token string">&quot;19858106573&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;updatedAt&quot;</span><span class="token operator">:</span> <span class="token number">1631531488000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;createdAt&quot;</span><span class="token operator">:</span> <span class="token number">1631735792000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;isdefault&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;userId&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;shopId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">&quot;shopName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u519C\u8D38\u83DC\u573A&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;isCanceled&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;products&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;orderSales&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;product&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;expressLimit&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;expressPrice&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
            <span class="token property">&quot;img&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./imgs/cherry.png&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6A31\u6843&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;shop&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;sales&quot;</span><span class="token operator">:</span> <span class="token number">501</span><span class="token punctuation">,</span>
            <span class="token property">&quot;stock&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
            <span class="token property">&quot;oldPrice&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
            <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
            <span class="token property">&quot;unit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5546\u54C1&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;parentId&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryDesc&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryImgUrl&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;orderSales&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
          <span class="token property">&quot;product&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;expressLimit&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;expressPrice&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
            <span class="token property">&quot;img&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./imgs/crab.png&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5E1D\u738B\u87F9&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;shop&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;sales&quot;</span><span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span>
            <span class="token property">&quot;stock&quot;</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
            <span class="token property">&quot;oldPrice&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">1800</span><span class="token punctuation">,</span>
            <span class="token property">&quot;unit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5546\u54C1&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;parentId&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryDesc&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryImgUrl&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;orderSales&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;product&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token property">&quot;expressLimit&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;expressPrice&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
            <span class="token property">&quot;img&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./imgs/orange.png&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6A59\u5B50&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;shop&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;sales&quot;</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
            <span class="token property">&quot;stock&quot;</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
            <span class="token property">&quot;oldPrice&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
            <span class="token property">&quot;unit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5546\u54C1&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;parentId&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryDesc&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryImgUrl&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;city&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u4E0A\u6D77&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;department&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u957F\u8FDC\u8BF7\u5C0F\u533A&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;houseNumber&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1688&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;phone&quot;</span><span class="token operator">:</span> <span class="token string">&quot;12134567654&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;updatedAt&quot;</span><span class="token operator">:</span> <span class="token number">1631531476000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;createdAt&quot;</span><span class="token operator">:</span> <span class="token number">1631735792000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;isdefault&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;userId&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;shopId&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token property">&quot;shopName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6C38\u8F89\u8D85\u5E02&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;isCanceled&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;products&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;orderSales&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;product&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;expressLimit&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;expressPrice&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
            <span class="token property">&quot;img&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./imgs/cherry.png&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6A31\u6843&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;shop&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;sales&quot;</span><span class="token operator">:</span> <span class="token number">501</span><span class="token punctuation">,</span>
            <span class="token property">&quot;stock&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
            <span class="token property">&quot;oldPrice&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
            <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
            <span class="token property">&quot;unit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5546\u54C1&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;parentId&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryDesc&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryImgUrl&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;orderSales&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;product&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token property">&quot;expressLimit&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;expressPrice&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
            <span class="token property">&quot;img&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./imgs/tomato.png&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u897F\u7EA2\u67FF&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;shop&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;sales&quot;</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
            <span class="token property">&quot;stock&quot;</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
            <span class="token property">&quot;oldPrice&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
            <span class="token property">&quot;unit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5546\u54C1&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;parentId&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryDesc&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryImgUrl&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;city&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u4E0A\u6D77&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;department&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u957F\u8FDC\u8BF7\u5C0F\u533A&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;houseNumber&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1688&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;phone&quot;</span><span class="token operator">:</span> <span class="token string">&quot;12134567654&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;updatedAt&quot;</span><span class="token operator">:</span> <span class="token number">1631531476000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;createdAt&quot;</span><span class="token operator">:</span> <span class="token number">1631735792000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;isdefault&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;userId&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;shopId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">&quot;shopName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u519C\u8D38\u83DC\u573A&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;isCanceled&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;products&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;orderSales&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;product&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token property">&quot;expressLimit&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;expressPrice&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
            <span class="token property">&quot;img&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./imgs/tomato.png&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u897F\u7EA2\u67FF&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;shop&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;sales&quot;</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
            <span class="token property">&quot;stock&quot;</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
            <span class="token property">&quot;oldPrice&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
            <span class="token property">&quot;unit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5546\u54C1&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;parentId&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryDesc&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryImgUrl&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;city&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u4E0A\u6D77&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;department&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u957F\u8FDC\u8BF7\u5C0F\u533A&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;houseNumber&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1688&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;phone&quot;</span><span class="token operator">:</span> <span class="token string">&quot;12134567654&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;updatedAt&quot;</span><span class="token operator">:</span> <span class="token number">1631531476000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;createdAt&quot;</span><span class="token operator">:</span> <span class="token number">1631735792000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;isdefault&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;userId&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;shopId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">&quot;shopName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u519C\u8D38\u83DC\u573A&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;isCanceled&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;products&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;orderSales&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;product&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token property">&quot;expressLimit&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;expressPrice&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
            <span class="token property">&quot;img&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./imgs/tomato.png&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u897F\u7EA2\u67FF&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;shop&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;sales&quot;</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
            <span class="token property">&quot;stock&quot;</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
            <span class="token property">&quot;oldPrice&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
            <span class="token property">&quot;unit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;categoryId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5546\u54C1&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;parentId&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryDesc&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
              <span class="token property">&quot;categoryImgUrl&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,337),e=[o];function l(u,r){return n(),a("div",null,e)}const d=s(t,[["render",l],["__file","3-\u63A5\u53E3\u6587\u6863.html.vue"]]);export{d as default};
