import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,d as e}from"./app.0662e65c.js";const t={},p=e(`<h1 id="\u6808\u548C\u961F\u5217" tabindex="-1"><a class="header-anchor" href="#\u6808\u548C\u961F\u5217" aria-hidden="true">#</a> \u6808\u548C\u961F\u5217</h1><h2 id="_1-\u6570\u636E\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_1-\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a> 1-\u6570\u636E\u7ED3\u6784</h2><h3 id="_1-\u6808" tabindex="-1"><a class="header-anchor" href="#_1-\u6808" aria-hidden="true">#</a> 1.\u6808</h3><h4 id="\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u6982\u5FF5" aria-hidden="true">#</a> \u6982\u5FF5</h4><blockquote><p>\u53C8\u540D<code>\u5806\u6808</code>\uFF0C\u9650\u5B9A\u4EC5\u5728<code>\u8868\u5C3E\u8FDB\u884C\u63D2\u5165\u548C\u5220\u9664</code>\u64CD\u4F5C\u7684<code>\u7EBF\u6027\u8868</code>\uFF08\u628A\u6240\u6709\u6570\u636E\u7528\u4E00\u6839\u7EBF\u513F\u4E32\u8D77\u6765\uFF0C\u518D\u5B58\u50A8\u5230\u7269\u7406\u7A7A\u95F4\u4E2D\uFF09\u3002</p><p>\u4E0A\u9762\u6210\u4E3A<code>\u6808\u9876</code>\uFF0C\u4E0B\u9762\u79F0\u4E3A<code>\u6808\u5E95</code>\u3002</p><p>\u5411\u6808\u63D2\u5165\u65B0\u5143\u7D20\u79F0\u4E3A<code>\u5165\u6808</code>\uFF0C\u65B0\u5143\u7D20\u653E\u5230\u6808\u9876\uFF1B\u4ECE\u4E00\u4E2A\u6808\u5220\u9664\u5143\u7D20\u53C8\u79F0\u4F5C<code>\u51FA\u6808</code>\uFF0C\u5B83\u662F\u628A\u6808\u9876\u5143\u7D20\u5220\u9664\u6389\uFF0C\u4F7F\u5176\u4E0B\u9762\u76F8\u90BB\u7684\u5143\u7D20\u6210\u4E3A\u65B0\u7684\u6808\u9876\u5143\u7D20\u3002</p></blockquote><p><img src="https://raw.githubusercontent.com/huluhutu/blogimg/main/img/image-20211220003016023.2c35eeca.png" alt="image-20211220003016023" loading="lazy"></p><p>\u6839\u636E\u5E95\u5C42\u7ED3\u6784\u4E0D\u540C\uFF0C\u53EF\u4EE5\u5206\u4E3A\uFF1A</p><ol><li><code>\u6570\u7EC4\u5B9E\u73B0\u7684\u987A\u5E8F\u6808</code></li><li><code>\u94FE\u8868\u5B9E\u73B0\u7684\u94FE\u5F0F\u6808</code></li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4F18\u52BF\u662F\u4EC0\u4E48\uFF1F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>\u5148\u8FDB\u540E\u51FA\uFF0C\u540E\u8FDB\u5148\u51FA</li><li>\u53EA\u80FD\u64CD\u4F5C\u6808\u9876\u5143\u7D20\uFF0C\u53EF\u63A7\u6027\u597D\uFF0C\u9002\u5408\u7279\u6B8A\u573A\u666F</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u52A3\u52BF\u662F\u4EC0\u4E48?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>\u53EA\u80FD\u64CD\u4F5C\u6808\u9876\u5143\u7D20</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5E94\u7528\u573A\u666F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>JVM\u7684\u672C\u5730\u65B9\u6CD5\u6808\uFF0C\u51FD\u6570\u8C03\u7528</li><li>\u6D4F\u89C8\u5668\u7684\u524D\u8FDB\u3001\u540E\u9000</li></ol><h4 id="\u6A21\u62DF\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u6A21\u62DF\u5B9E\u73B0" aria-hidden="true">#</a> <strong>\u6A21\u62DF\u5B9E\u73B0</strong></h4><p>\u6570\u7EC4\u5B9E\u73B0\u6808</p><div class="language-Java ext-Java line-numbers-mode"><pre class="language-Java"><code>public class ArrayStack&lt;E&gt; {

    private Object[] elementData;

    private int topIndex;

    public ArrayStack(int capacity){
        elementData = new Object[capacity];
    }

    /**
     * \u5165\u6808
     * @return
     */
    public boolean push(E element){
        if (topIndex &gt;= elementData.length){
            int newCapacity = elementData.length &lt;&lt; 1;
            elementData = Arrays.copyOf(elementData,newCapacity);
        }
        elementData[topIndex++] = element;
        return true;
    }

    /**
     * \u51FA\u6808 \u5E76\u4E14\u5220\u9664\u6808\u9876\u5143\u7D20
     * @return
     */
    public E pop(){
        if (topIndex &lt;= 0){
            throw new RuntimeException(&quot;\u6808\u4E3A\u7A7A&quot;);
        }
        return (E) elementData[--topIndex];
    }

    /**
     * \u51FA\u6808
     * @return
     */
    public E peek(){
        if (topIndex &lt;= 0){
            throw new RuntimeException(&quot;\u6808\u4E3A\u7A7A&quot;);
        }
        return (E) elementData[topIndex-1];
    }

    public static void main(String[] args) {
        ArrayStack&lt;String&gt; arrayStack = new ArrayStack&lt;&gt;(10);
        arrayStack.push(&quot;1&quot;);
        arrayStack.push(&quot;2&quot;);
        arrayStack.push(&quot;3&quot;);

        System.out.println(arrayStack.pop());
        System.out.println(arrayStack.pop());
        System.out.println(&quot;--------------&quot;);
        System.out.println(arrayStack.peek());
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u94FE\u8868\u5B9E\u73B0\u6808</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LinkedStack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>
        <span class="token class-name">E</span> item<span class="token punctuation">;</span>
        <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> next<span class="token punctuation">;</span>

        <span class="token keyword">public</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token class-name">E</span> item<span class="token punctuation">,</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> next<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>item <span class="token operator">=</span> item<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> header<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> elementCount<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">push</span><span class="token punctuation">(</span><span class="token class-name">E</span> element<span class="token punctuation">)</span><span class="token punctuation">{</span>
        header <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>element<span class="token punctuation">,</span>header<span class="token punctuation">)</span><span class="token punctuation">;</span>
        elementCount<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">E</span> <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>header <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">throw</span>  <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;\u6808\u4E3A\u7A7A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">E</span> item <span class="token operator">=</span> header<span class="token punctuation">.</span>item<span class="token punctuation">;</span>
        <span class="token comment">//\u5220\u9664\u6808\u9876\u5143\u7D20</span>
        header <span class="token operator">=</span> header<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        elementCount<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> item<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">E</span> <span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>header <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">throw</span>  <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;\u6808\u4E3A\u7A7A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> header<span class="token punctuation">.</span>item<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">LinkedStack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> linkedStack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedStack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        linkedStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        linkedStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        linkedStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;-------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> pop <span class="token operator">=</span> linkedStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;pop:&quot;</span><span class="token operator">+</span>pop<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> peek <span class="token operator">=</span> linkedStack<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;peek:&quot;</span><span class="token operator">+</span>peek<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u961F\u5217" tabindex="-1"><a class="header-anchor" href="#_2-\u961F\u5217" aria-hidden="true">#</a> 2.\u961F\u5217</h3><h4 id="\u6982\u5FF5-1" tabindex="-1"><a class="header-anchor" href="#\u6982\u5FF5-1" aria-hidden="true">#</a> \u6982\u5FF5</h4><blockquote><p><code>\u961F\u5217</code>\u662F\u4E00\u79CD\u7279\u6B8A\u7684<code>\u7EBF\u6027\u8868</code>\uFF0C\u53EA\u5141\u8BB8\u5728\u8868\u7684\u524D\u7AEF\u8FDB\u884C\u8BFB\u53D6\u5220\u9664\u64CD\u4F5C\uFF0C\u800C\u5728\u8868\u7684\u540E\u7AEF\u8FDB\u884C\u63D2\u5165\u64CD\u4F5C\u3002</p><p>\u548C\u6808\u4E00\u6837\uFF0C\u961F\u5217\u662F\u4E00\u79CD\u64CD\u4F5C\u53D7\u9650\u5236\u7684\u7EBF\u6027\u8868\u3002</p><p><code>\u63D2\u5165</code>\u7684\u6570\u636E\u653E\u5728<code>\u961F\u5C3E</code>\uFF0C<code>\u8BFB\u53D6\u6570\u636E</code>\u7684\u7AEF\u79F0\u4E3A<code>\u961F\u5934</code>\u3002</p><p>\u961F\u5217\u4E2D\u6CA1\u6709\u5143\u7D20\u65F6\uFF0C\u79F0\u4E3A\u7A7A\u961F\u5217\u3002</p></blockquote><p><img src="https://raw.githubusercontent.com/huluhutu/blogimg/main/img/image-20211220103145837.defcd9ff.png" alt="image-20211220103145837" loading="lazy"></p><p>\u6839\u636E\u5E95\u5C42\u7ED3\u6784\u4E0D\u540C\uFF0C\u53EF\u4EE5\u5206\u4E3A\uFF1A</p><ol><li><code>\u6570\u7EC4\u5B9E\u73B0\u7684\u987A\u5E8F\u961F\u5217</code></li><li><code>\u94FE\u8868\u5B9E\u73B0\u7684\u94FE\u5F0F\u961F\u5217</code></li></ol><p>\u6839\u636E\u652F\u6301\u7684\u9AD8\u7EA7\u7279\u6027\uFF0C\u8FD8\u6709\u4EE5\u4E0B\u961F\u5217\uFF1A</p><ol><li>\u5FAA\u73AF\u961F\u5217</li><li>\u53CC\u7AEF\u961F\u5217</li><li>\u963B\u585E\u961F\u5217</li><li>\u975E\u963B\u585E\u961F\u5217</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4F18\u52BF\u662F\u4EC0\u4E48\uFF1F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>\u5148\u8FDB\u5148\u51FA</li><li>\u89C4\u5219\u56FA\u5B9A\uFF0C\u53EF\u63A7\u6027\u597D\uFF0C\u9002\u5408\u7279\u6B8A\u573A\u666F</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u52A3\u52BF\u662F\u4EC0\u4E48?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>\u4E0D\u80FD\u76F4\u63A5\u64CD\u4F5C\u961F\u5217\u4E2D\u95F4\u7684\u5143\u7D20</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u573A\u666F\u4E3E\u4F8B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>\u9650\u6D41</li><li>\u7EBF\u7A0B\u6C60\uFF0C\u6765\u4E0D\u53CA\u5904\u7406\u7684\u4EFB\u52A1\u4F1A\u653E\u5165\u4EFB\u52A1\u961F\u5217</li><li>Kafka\uFF0CRocketMQ\u7B49\u4EE3\u8868\u7684\u6D88\u606F\u4E2D\u95F4\u4EF6</li></ol><h4 id="\u6A21\u62DF\u5B9E\u73B0-1" tabindex="-1"><a class="header-anchor" href="#\u6A21\u62DF\u5B9E\u73B0-1" aria-hidden="true">#</a> \u6A21\u62DF\u5B9E\u73B0</h4><p>\u6570\u7EC4\u5B9E\u73B0</p><div class="language-Java ext-Java line-numbers-mode"><pre class="language-Java"><code>public class ArrayQueue&lt;E&gt; {

    private int head;

    private int tail;

    private Object[] elementData;

    public ArrayQueue(int capacity){
        elementData = new Object[capacity];
    }

    /**
     * \u5165\u961F
     * @param element
     * @return
     */
    public boolean enQueue(E element){
        if (tail &gt;= elementData.length){
            elementData = Arrays.copyOf(elementData,elementData.length &lt;&lt; 1);
            if (head != 0){
                //\u8FDB\u884C\u4E00\u6B21\u6570\u636E\u8FC1\u79FB
                if (tail - head &gt;= 0) System.arraycopy(elementData, head, elementData, 0, tail - head);
                tail = tail - head;
                head = 0;
            }
        }
        elementData[tail++] = element;
        return true;
    }

    public E deQueue(){
        if (head == tail){
            throw new RuntimeException(&quot;\u961F\u5217\u4E3A\u7A7A&quot;);
        }
        return (E) elementData[head++];
    }

    public static void main(String[] args) {
        ArrayQueue&lt;String&gt; arrayQueue = new ArrayQueue&lt;&gt;(3);
        arrayQueue.enQueue(&quot;1&quot;);
        arrayQueue.enQueue(&quot;2&quot;);
        arrayQueue.enQueue(&quot;3&quot;);
        System.out.println(&quot;---------------------&quot;);
        System.out.println(arrayQueue.deQueue());
        arrayQueue.enQueue(&quot;4&quot;);
        System.out.println(arrayQueue.deQueue());
        System.out.println(arrayQueue.deQueue());
        System.out.println(arrayQueue.deQueue());
        System.out.println(&quot;---------------------&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u94FE\u8868\u5B9E\u73B0</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LinkedQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>
        <span class="token class-name">E</span> item<span class="token punctuation">;</span>
        <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> next<span class="token punctuation">;</span>
        <span class="token keyword">public</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token class-name">E</span> item<span class="token punctuation">,</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> next<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>item <span class="token operator">=</span> item<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">private</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> head<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> tail<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> size<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">LinkedQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">enQueue</span><span class="token punctuation">(</span><span class="token class-name">E</span> element<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>element<span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>tail <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            tail <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
            head <span class="token operator">=</span> tail<span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        tail<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
        tail <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">E</span> <span class="token function">deQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;\u961F\u5217\u4E3A\u7A7A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">E</span> item <span class="token operator">=</span> head<span class="token punctuation">.</span>item<span class="token punctuation">;</span>
        head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token keyword">return</span> item<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">LinkedQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> arrayQueue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        arrayQueue<span class="token punctuation">.</span><span class="token function">enQueue</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        arrayQueue<span class="token punctuation">.</span><span class="token function">enQueue</span><span class="token punctuation">(</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        arrayQueue<span class="token punctuation">.</span><span class="token function">enQueue</span><span class="token punctuation">(</span><span class="token string">&quot;3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;---------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>arrayQueue<span class="token punctuation">.</span><span class="token function">deQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        arrayQueue<span class="token punctuation">.</span><span class="token function">enQueue</span><span class="token punctuation">(</span><span class="token string">&quot;4&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>arrayQueue<span class="token punctuation">.</span><span class="token function">deQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>arrayQueue<span class="token punctuation">.</span><span class="token function">deQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>arrayQueue<span class="token punctuation">.</span><span class="token function">deQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;---------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u89E3\u9898\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#_2-\u89E3\u9898\u601D\u8DEF" aria-hidden="true">#</a> 2-\u89E3\u9898\u601D\u8DEF</h2><h2 id="_3-\u4F8B\u9898" tabindex="-1"><a class="header-anchor" href="#_3-\u4F8B\u9898" aria-hidden="true">#</a> 3-\u4F8B\u9898</h2>`,40),i=[p];function l(c,o){return s(),a("div",null,i)}const r=n(t,[["render",l],["__file","4-StackAndQueue.html.vue"]]);export{r as default};
