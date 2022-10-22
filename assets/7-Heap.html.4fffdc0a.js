import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,d as p}from"./app.0662e65c.js";const t={},e=p(`<h1 id="\u5806" tabindex="-1"><a class="header-anchor" href="#\u5806" aria-hidden="true">#</a> \u5806</h1><h2 id="_1-\u6570\u636E\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_1-\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a> 1-\u6570\u636E\u7ED3\u6784</h2><h3 id="_1-\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#_1-\u6982\u5FF5" aria-hidden="true">#</a> 1.\u6982\u5FF5</h3><blockquote><p>\u4E00\u79CD\u7279\u6B8A\u7684\u4E8C\u53C9\u6811\u3002\u9700\u8981\u6EE1\u8DB3\u4E24\u4E2A\u6761\u4EF6\uFF1A</p><ol><li>\u662F\u4E00\u68F5\u5B8C\u5168\u4E8C\u53C9\u6811</li><li>\u5806\u4E2D\u6BCF\u4E2A\u8282\u70B9\u7684\u503C\u5FC5\u987B&gt;=\u6216&lt;=\u5176\u5DE6\u53F3\u5B50\u8282\u70B9\u7684\u503C\u3002</li></ol></blockquote><p><img src="https://raw.githubusercontent.com/huluhutu/blogimg/main/img/image-20211221000959435.24efc3c0.png" alt="image-20211221000959435" loading="lazy"></p><p>\u6839\u636E\u6BCF\u4E2A\u8282\u70B9\u7684\u503C\u662F&gt;= \u8FD8\u662F &lt;= \u5B50\u6811\u4E2D\u6BCF\u4E2A\u8282\u70B9\u7684\u503C\uFF0C\u5206\u4E3A</p><ol><li>\u5927\u9876\u5806</li><li>\u5C0F\u9876\u5806</li></ol><p><strong>\u8282\u70B9\u7684\u503C\u53EA\u80FD\u6BD4\u5DE6\u53F3\u5B50\u8282\u70B9\uFF0C\u5927\u6216\u8005\u5C0F \u53EA\u80FD\u9009\u62E9\u4E00\u4E2A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4F18\u52BF\u662F\u4EC0\u4E48\uFF1F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>\u65F6\u95F4\u590D\u6742\u5EA6\u8F83\u4F4E</li><li>\u83B7\u53D6\u5806\u9876\u5143\u7D20\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(1)</li><li>\u5047\u8BBE\u5B8C\u5168\u4E8C\u53C9\u6811\u5305\u542Bn\u4E2A\u8282\u70B9\uFF0C\u63D2\u5165\u5143\u7D20\u3001\u5220\u9664\u5143\u7D20\uFF0C\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(logn)</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u52A3\u52BF\u662F\u4EC0\u4E48\uFF1F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>\u7279\u6B8A\u7684\u4E8C\u53C9\u6811\uFF0C\u53EA\u80FD\u7528\u4E8E\u7279\u5B9A\u573A\u666F</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u573A\u666F\u4E3E\u4F8B\uFF1A
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>\u5806\u6392\u5E8F</li><li>\u4F18\u5148\u7EA7\u961F\u5217</li><li>\u6C42 TOP K</li><li>\u6C42\u4E2D\u4F4D\u6570</li></ol><h3 id="_2-\u6A21\u62DF\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_2-\u6A21\u62DF\u5B9E\u73B0" aria-hidden="true">#</a> 2.\u6A21\u62DF\u5B9E\u73B0</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HeapNode</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> heap<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> size<span class="token punctuation">;</span>

    <span class="token keyword">public</span>  <span class="token class-name">HeapNode</span><span class="token punctuation">(</span><span class="token keyword">int</span> capacity<span class="token punctuation">)</span><span class="token punctuation">{</span>
        heap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>capacity<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">offer</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> size<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">int</span> parent <span class="token operator">=</span> <span class="token punctuation">(</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> v <span class="token operator">=</span> heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&gt;=</span> v<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> v<span class="token punctuation">;</span>
            i <span class="token operator">=</span> parent<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> n<span class="token punctuation">;</span>
        size<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//\u5C06\u5806\u9876\u5143\u7D20 \u5F39\u51FA\uFF0C\u5E76\u4E14\u5220\u9664</span>
        <span class="token comment">//\u9700\u8981\u91CD\u65B0\u6784\u5EFA\u5806</span>
        <span class="token keyword">int</span> top <span class="token operator">=</span> heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> newHeap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>size<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">arraycopy</span><span class="token punctuation">(</span>heap<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span>newHeap<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>size<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        heap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>heap<span class="token punctuation">.</span>length<span class="token punctuation">]</span><span class="token punctuation">;</span>
        size<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">:</span> newHeap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">offer</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> top<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">HeapNode</span> heapNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HeapNode</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        heapNode<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        heapNode<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        heapNode<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        heapNode<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        heapNode<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        heapNode<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>heapNode<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>heapNode<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        heapNode<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>heapNode<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u793A\u4F8B\uFF1A\u4ECE10\u4EBF\u4E2A\u6570\u636E\u4E2D\u627E\u5230\u6700\u5927\u7684\u524D10\u4E2A\uFF1F</strong></p><ul><li>\u5047\u8BBE10\u4EBF\u4E2A\u6570\u636E\u5B58\u5728\u6570\u7EC4\u4E2D</li><li>\u53D6\u524D10\u4E2A\u6570\u636E\uFF0C\u6784\u5EFA\u4E00\u4E2A\u5C0F\u9876\u5806\uFF0C\u90A3\u4E48\u6839\u8282\u70B9\u662F\u6700\u5C0F\u7684</li><li>\u7136\u540E\uFF0C\u4ECE\u6570\u7EC4\u4E2D\u4F9D\u6B21\u53D6\u51FA\u4E00\u4E2A\u6570\u636E\u4E0E\u5806\u9876\u6BD4\u8F83\uFF0C\u5982\u679C\u5927\u4E8E\uFF0C\u66FF\u6362\u6389\u5806\u9876\u5143\u7D20\uFF0C\u5806\u5185\u90E8\u8C03\u6574\uFF1B\u5982\u679C\u5C0F\u4E8E\u7B49\u4E8E\u5806\u9876\uFF0C\u4E0D\u505A\u5904\u7406</li><li>\u540C\u6837\u903B\u8F91\uFF0C\u4F9D\u6B21\u5FAA\u73AF\u5904\u7406\u6570\u7EC4\u4E2D\u6BCF\u4E00\u4E2A\u5143\u7D20\u3002</li><li>\u5F5310\u4EBF\u4E2A\u6570\u636E\u5904\u7406\u5B8C\u540E\uFF0C\u5806\u4E2D\u7684\u6570\u636E\u5C31\u662FTop 10</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HeapTopK</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">topKMax</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//\u8F93\u51FA\uFF1A[2, 3, 4, 5, 6]</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">//\u5BFB\u627E\u524Dk\u4E2A\u6700\u5927\u7684\u6570--\u4F7F\u7528\u5C0F\u9876\u5806</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token function">topKMax</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">//\u5BFB\u627E\u524Dk\u4E2A\u6700\u5C0F\u6570\uFF0C\u56E0\u6B64\u5C06\u5C0F\u9876\u5806\u5927\u5C0F\u5B9A\u4E49\u4E3Ak</span>
		<span class="token class-name">HeapNode</span> pq <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HeapNode</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">&lt;</span>k<span class="token punctuation">)</span><span class="token punctuation">{</span>
				pq<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//\u524Dk\u4E2A\u6570\uFF0C\u76F4\u63A5\u5165\u5806</span>
			<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">&gt;</span>pq<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>	<span class="token comment">//\u5982\u679C\u5F53\u524D\u5143\u7D20\u6BD4\u5806\u9876\u5143\u7D20\u5927</span>
				pq<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//\u8BF4\u660E\u5806\u9876\u5143\u7D20\uFF08\u5806\u4E2D\u6700\u5C0F\u5143\u7D20\uFF09\u4E00\u5B9A\u4E0D\u5C5E\u4E8E\u524Dk\u5927\u7684\u6570\uFF0C\u51FA\u5806</span>
				pq<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//\u5F53\u524D\u5143\u7D20\u6709\u53EF\u80FD\u5C5E\u4E8E\u524Dk\u5927\uFF0C\u5165\u5806</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		
		<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> ans <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span>pq<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			ans<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>pq<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> ans<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u89E3\u9898\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#_2-\u89E3\u9898\u601D\u8DEF" aria-hidden="true">#</a> 2-\u89E3\u9898\u601D\u8DEF</h2><h2 id="_3-\u4F8B\u9898" tabindex="-1"><a class="header-anchor" href="#_3-\u4F8B\u9898" aria-hidden="true">#</a> 3-\u4F8B\u9898</h2>`,21),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","7-Heap.html.vue"]]);export{r as default};
