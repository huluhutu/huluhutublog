import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as n,d}from"./app.0662e65c.js";const l={},s=d(`<h1 id="\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#\u94FE\u8868" aria-hidden="true">#</a> \u94FE\u8868</h1><h2 id="_1-\u6570\u636E\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_1-\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a> 1-\u6570\u636E\u7ED3\u6784</h2><h3 id="_1-\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#_1-\u6982\u5FF5" aria-hidden="true">#</a> 1.\u6982\u5FF5</h3><blockquote><p>\u94FE\u8868\u4E00\u79CD<code>\u975E\u8FDE\u7EED</code>\u3001<code>\u975E\u987A\u5E8F</code>\u7684\u5B58\u50A8\u7ED3\u6784\uFF0C\u7531\u4E00\u7CFB\u5217\u8282\u70B9\u7EC4\u6210\uFF0C\u8282\u70B9\u95F4\u901A\u8FC7<code>\u6307\u9488\u5B8C\u6210\u4E86\u4E32\u8054</code>\uFF0C\u6BCF\u4E2A\u8282\u70B9\u5305\u542B<code>\u6570\u636E</code>\u548C<code>\u4E0B\u4E00\u4E2A\u8282\u70B9\u6307\u9488</code>\u4E24\u90E8\u5206\u3002</p></blockquote><p><img src="https://raw.githubusercontent.com/huluhutu/blogimg/main/img/image-20211219111510914.a8499032.png" alt="image-20211219111510914" loading="lazy"></p><p>\u6839\u636E\u6307\u9488\u7684\u65B9\u5411\u53EF\u4EE5\u5206\u4E3A\uFF1A</p><ul><li>\u5355\u5411\u94FE\u8868</li><li>\u5FAA\u73AF\u94FE\u8868</li><li>\u53CC\u5411\u94FE\u8868</li><li>\u53CC\u5411\u5FAA\u73AF\u94FE\u8868</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4F18\u52BF\u662F\u4EC0\u4E48\uFF1F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>\u4E0D\u9700\u8981\u8FDE\u7EED\u7A7A\u95F4\uFF0C\u8F83\u7075\u6D3B</li><li><code>\u968F\u673A\u5B58\u50A8</code>\uFF1A\u975E\u987A\u5E8F\u5B58\u50A8</li><li>\u63D2\u5165\uFF0C\u5220\u9664\u65F6\uFF0C\u53EA\u9700\u8981\u66F4\u6539\u6307\u9488\u6307\u5411\u5373\u53EF\uFF0C\u5F00\u9500\u5C0F</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u52A3\u52BF\u662F\u4EC0\u4E48\uFF1F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>\u6BCF\u4E2A\u8282\u70B9\u9664\u4E86\u5B58\u50A8\u6570\u636E\uFF0C\u8FD8\u5B58\u50A8\u6307\u9488\uFF0C\u5360\u7528\u989D\u5916\u7684\u7A7A\u95F4</li><li><code>\u987A\u5E8F\u5B58\u53D6</code>\uFF1A\u5B58\u53D6\u7B2CN\u4E2A\u6570\u636E\u65F6\uFF0C\u5FC5\u987B\u5148\u8BBF\u95EE\u524D(N-1)\u4E2A\u6570\u636E\uFF0C\u6548\u7387\u4F4E</li></ol><h3 id="_2-\u6A21\u62DF\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_2-\u6A21\u62DF\u5B9E\u73B0" aria-hidden="true">#</a> 2.\u6A21\u62DF\u5B9E\u73B0</h3><p><strong>\u94FE\u8868\u9002\u5408\u5199\u591A\u7684\u573A\u666F</strong></p><div class="language-Java ext-Java line-numbers-mode"><pre class="language-Java"><code>public class MsLinkedList&lt;E&gt; implements Iterable&lt;E&gt; {

    private int size;
    private Node&lt;E&gt; first;
    private Node&lt;E&gt; last;

    @Override
    public Iterator&lt;E&gt; iterator() {
        return new MyIterator();
    }
    class MyIterator implements Iterator&lt;E&gt;{
        int index;
        @Override
        public boolean hasNext() {
            return index != size;
        }

        @Override
        public E next() {
            return get(index++);
        }
    }

    private static class Node&lt;E&gt;{
        E item;
        Node&lt;E&gt; prev;
        Node&lt;E&gt; next;

        Node(Node&lt;E&gt; prev,E item,Node&lt;E&gt; next){
            this.prev = prev;
            this.item = item;
            this.next = next;
        }
    }

    public void addLast(E element){
        final Node&lt;E&gt; l = last;
        Node&lt;E&gt; newNode = new Node&lt;&gt;(l,element,null);
        last = newNode;
        if (l == null){
            first = newNode;
        }else{
            l.next = newNode;
        }
        size++;
    }

    public E set(int index, E element){
        Node&lt;E&gt; x = node(index);
        E oldValue = x.item;
        x.item = element;
        return oldValue;
    }

    private Node&lt;E&gt; node(int index) {
        if (index &lt; (size &lt;&lt; 1)){
            Node&lt;E&gt; x = first;
            for (int i = 0;i&lt;index;i++){
                x = x.next;
            }
            return x;
        }else{
            Node&lt;E&gt; x = last;
            for (int i = size - 1;i&gt;index;i--){
                x = x.prev;
            }
            return x;
        }
    }

    public E get(int index){
        return node(index).item;
    }

    public static void main(String[] args) {
        MsLinkedList&lt;String&gt; msLinkedList = new MsLinkedList&lt;&gt;();
        msLinkedList.addLast(&quot;1&quot;);
        msLinkedList.addLast(&quot;2&quot;);
        msLinkedList.addLast(&quot;3&quot;);
        msLinkedList.set(1,&quot;set&quot;);
        System.out.println(msLinkedList.get(1));
        msLinkedList.forEach(s -&gt; {
            System.out.println(s);
        });
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u89E3\u9898\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#_2-\u89E3\u9898\u601D\u8DEF" aria-hidden="true">#</a> 2-\u89E3\u9898\u601D\u8DEF</h2><h2 id="_3-\u4F8B\u9898" tabindex="-1"><a class="header-anchor" href="#_3-\u4F8B\u9898" aria-hidden="true">#</a> 3-\u4F8B\u9898</h2>`,16),a=[s];function t(v,r){return e(),n("div",null,a)}const m=i(l,[["render",t],["__file","2-List.html.vue"]]);export{m as default};
