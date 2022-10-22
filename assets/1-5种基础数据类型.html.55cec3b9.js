import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as n,d}from"./app.0662e65c.js";const s={},a=d(`<h1 id="_1-5\u79CD\u57FA\u7840\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_1-5\u79CD\u57FA\u7840\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> 1 5\u79CD\u57FA\u7840\u6570\u636E\u7C7B\u578B</h1><p><img src="https://raw.githubusercontent.com/huluhutu/blogimg/main/img/image-20221001192123941.png" alt="image-20221001192123941" loading="lazy"></p><h2 id="_1-redis-key" tabindex="-1"><a class="header-anchor" href="#_1-redis-key" aria-hidden="true">#</a> 1-Redis Key</h2><table><thead><tr><th>\u547D\u4EE4</th><th>\u4F5C\u7528</th></tr></thead><tbody><tr><td>keys*</td><td>\u67E5\u770B\u5F53\u524D\u5E93\u6240\u6709\u7684key</td></tr><tr><td>exist key</td><td>\u5224\u65AD\u67D0\u4E2Akey\u662F\u5426\u5B58\u5728</td></tr><tr><td>type key</td><td>\u67E5\u770B\u5F53\u524Dkey\u662F\u4EC0\u4E48\u7C7B\u578B</td></tr><tr><td>unlink key</td><td>\u6839\u636Evalue\u5220\u9664\u975E\u963B\u585E\u5220\u9664\uFF0C\u4EC5\u4EC5\u5C06keys\u4ECEkeyspace\u5143\u6570\u636E\u4E2D\u5220\u9664\uFF0C\u771F\u6B63\u7684\u5220\u9664\u4F1A\u5728\u540E\u7EED\u5F02\u6B65\u4E2D\u64CD\u4F5C\u3002</td></tr><tr><td>expire key 10</td><td>\u4E3A\u6307\u5B9A\u7684key\u8BBE\u7F6E\u6709\u6548\u671F10\u79D2</td></tr><tr><td>ttl key</td><td>\u67E5\u770B\u6307\u5B9A\u7684key\u8FD8\u6709\u591A\u5C11\u79D2\u8FC7\u671F\uFF0C-1\uFF1A\u8868\u793A\u6C38\u4E0D\u8FC7\u671F\uFF0C-2\uFF1A\u8868\u793A\u5DF2\u8FC7\u671F</td></tr><tr><td>select dbindex</td><td>\u5207\u6362\u6570\u636E\u5E93\u30100-15\u3011\uFF0C\u9ED8\u8BA4\u4E3A0</td></tr><tr><td>dbsize</td><td>\u67E5\u770B\u5F53\u524D\u6570\u636E\u5E93key\u7684\u6570\u91CF</td></tr><tr><td>flushdb</td><td>\u6E05\u7A7A\u5F53\u524D\u5E93</td></tr><tr><td>flushall</td><td>\u901A\u6740\u5168\u90E8\u5E93</td></tr></tbody></table><h2 id="_2-string" tabindex="-1"><a class="header-anchor" href="#_2-string" aria-hidden="true">#</a> 2-String</h2><h3 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1.\u7B80\u4ECB</h3><p>String\u662FRedis\u6700\u57FA\u672C\u7684\u7C7B\u578B\uFF0C\u4F60\u53EF\u4EE5\u7406\u89E3\u6210\u4E0EMemcached\u4E00\u6A21\u4E00\u6837\u7684\u7C7B\u578B\uFF0C\u4E00\u4E2Akey\u5BF9\u5E94\u4E00\u4E2Avalue\u3002</p><p><strong>String\u7C7B\u578B\u662F\u4E8C\u8FDB\u5236\u5B89\u5168\u7684</strong>\u3002\u610F\u5473\u7740Redis\u7684string\u53EF\u4EE5\u5305\u542B\u4EFB\u4F55\u6570\u636E\u3002\u6BD4\u5982jpg\u56FE\u7247\u6216\u8005\u5E8F\u5217\u5316\u7684\u5BF9\u8C61\u3002</p><p>String\u7C7B\u578B\u662FRedis\u6700\u57FA\u672C\u7684\u6570\u636E\u7C7B\u578B\uFF0C<strong>\u4E00\u4E2ARedis\u4E2D\u5B57\u7B26\u4E32value\u6700\u591A\u53EF\u4EE5\u662F512M</strong></p><h3 id="_2-\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_2-\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> 2.\u5E38\u7528\u547D\u4EE4</h3><h4 id="set-\u6DFB\u52A0\u952E\u503C\u5BF9" tabindex="-1"><a class="header-anchor" href="#set-\u6DFB\u52A0\u952E\u503C\u5BF9" aria-hidden="true">#</a> set\uFF1A\u6DFB\u52A0\u952E\u503C\u5BF9</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; set key value [EX seconds|PX milliseconds|EXAT timestamp|PXAT milliseconds-timestamp|KEEPTTL] [NX|XX] [GET]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>NX\uFF1A\u5F53\u6570\u636E\u5E93\u4E2Dkey\u4E0D\u5B58\u5728\u65F6\uFF0C\u53EF\u4EE5\u5C06key-value\u6DFB\u52A0\u5230\u6570\u636E\u5E93</li><li>XX\uFF1A\u5F53\u6570\u636E\u5E93\u4E2Dkey\u5B58\u5728\u65F6\uFF0C\u53EF\u4EE5\u5C06key-value\u6DFB\u52A0\u6570\u636E\u5E93\uFF0C\u4E0ENX\u53C2\u6570\u4E92\u65A5</li><li>EX\uFF1Akey\u7684\u8D85\u65F6\u79D2\u6570</li><li>PX\uFF1Akey\u7684\u8D85\u65F6\u6BEB\u79D2\u6570\uFF0C\u4E0EEX\u4E92\u65A5</li><li>value\u4E2D\u82E5\u5305\u542B\u7A7A\u683C\u3001\u7279\u6B8A\u5B57\u7B26\uFF0C\u9700\u7528\u53CC\u5F15\u53F7\u5305\u88F9</li></ul><h4 id="get-\u83B7\u53D6\u503C" tabindex="-1"><a class="header-anchor" href="#get-\u83B7\u53D6\u503C" aria-hidden="true">#</a> get\uFF1A\u83B7\u53D6\u503C</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>get &lt;key&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; set name ready
OK
127.0.0.1:6379&gt; get name
&quot;ready&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="apend-\u8FFD\u52A0\u503C" tabindex="-1"><a class="header-anchor" href="#apend-\u8FFD\u52A0\u503C" aria-hidden="true">#</a> apend\uFF1A\u8FFD\u52A0\u503C</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>append &lt;key&gt; &lt;value&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u5C06\u7ED9\u5B9A\u7684value\u8FFD\u52A0\u5230\u539F\u503C\u7684\u672B\u5C3E\u3002</p></blockquote><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>27.0.0.1:6379&gt; set k1 hello
OK
127.0.0.1:6379&gt; append k1 &quot; world&quot;
(integer) 11
127.0.0.1:6379&gt; get k1
&quot;hello world&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="strlen-\u83B7\u53D6\u503C\u7684\u957F\u5EA6" tabindex="-1"><a class="header-anchor" href="#strlen-\u83B7\u53D6\u503C\u7684\u957F\u5EA6" aria-hidden="true">#</a> strlen\uFF1A\u83B7\u53D6\u503C\u7684\u957F\u5EA6</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>strlen &lt;key&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; set name ready
OK
127.0.0.1:6379&gt; strlen name
(integer) 5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="setnx-key\u4E0D\u5B58\u5728\u65F6-\u8BBE\u7F6Ekey\u7684\u503C" tabindex="-1"><a class="header-anchor" href="#setnx-key\u4E0D\u5B58\u5728\u65F6-\u8BBE\u7F6Ekey\u7684\u503C" aria-hidden="true">#</a> setnx\uFF1Akey\u4E0D\u5B58\u5728\u65F6\uFF0C\u8BBE\u7F6Ekey\u7684\u503C</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>setnx &lt;key&gt; &lt;value&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; flushdb #\u6E05\u7A7Adb\uFF0C\u65B9\u4FBF\u6D4B\u8BD5
OK
127.0.0.1:6379&gt; setnx site &quot;itsoku.com&quot; #site\u4E0D\u5B58\u5728\uFF0C\u8FD4\u56DE1\uFF0C\u8868\u793A\u8BBE\u7F6E\u6210\u529F
(integer) 1
127.0.0.1:6379&gt; setnx site &quot;itsoku.com&quot; #\u518D\u6B21\u901A\u8FC7setnx\u8BBE\u7F6Esite\uFF0C\u7531\u4E8E\u5DF2\u7ECF\u5B58\u5728\u4E86\uFF0C\u6240\u4EE5\u8BBE\u7F6E\u5931\u8D25\uFF0C\u8FD4\u56DE0
(integer) 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="incr-\u539F\u5B50\u9012\u589E1" tabindex="-1"><a class="header-anchor" href="#incr-\u539F\u5B50\u9012\u589E1" aria-hidden="true">#</a> incr\uFF1A\u539F\u5B50\u9012\u589E1</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>incr &lt;key&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u5C06key\u4E2D\u5B58\u50A8\u7684\u503C\u589E1\uFF0C\u53EA\u80FD\u5BF9\u6570\u5B57\u503C\u64CD\u4F5C\uFF0C\u5982\u679Ckey\u4E0D\u5B58\u5728\uFF0C\u5219\u4F1A\u65B0\u5EFA\u4E00\u4E2A\uFF0C\u503C\u4E3A1</p></blockquote><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; flushdb #\u6E05\u7A7Adb\uFF0C\u65B9\u4FBF\u6D4B\u8BD5
OK
127.0.0.1:6379&gt; set age 30 #age\u503C\u4E3A30
OK
127.0.0.1:6379&gt; incr age #age\u589E\u52A01\uFF0C\u8FD4\u56DE31
(integer) 31
127.0.0.1:6379&gt; get age #\u83B7\u53D6age\u7684\u503C
&quot;31&quot;
127.0.0.1:6379&gt; incr salary #salary\u4E0D\u5B58\u5728\uFF0C\u81EA\u52A8\u521B\u5EFA\u4E00\u4E2A\uFF0C\u503C\u4E3A1
(integer) 1
127.0.0.1:6379&gt; get salary #\u83B7\u53D6salary\u7684\u503C
&quot;1&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="decr-\u539F\u5B50\u9012\u51CF1" tabindex="-1"><a class="header-anchor" href="#decr-\u539F\u5B50\u9012\u51CF1" aria-hidden="true">#</a> decr\uFF1A\u539F\u5B50\u9012\u51CF1</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>decr &lt;key&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u5C06key\u4E2D\u5B58\u50A8\u7684\u503C\u51CF1\uFF0C\u53EA\u80FD\u5BF9\u6570\u5B57\u503C\u64CD\u4F5C\uFF0C\u5982\u679C\u4E3A\u7A7A\uFF0C\u65B0\u589E\u503C\u4E3A-1</p></blockquote><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; flushdb #\u6E05\u7A7Adb\uFF0C\u65B9\u4FBF\u6D4B\u8BD5
OK
127.0.0.1:6379&gt; set age 30 #age\u503C\u4E3A30
OK
127.0.0.1:6379&gt; decr age #age\u9012\u51CF1\uFF0C\u8FD4\u56DE29
(integer) 29
127.0.0.1:6379&gt; get age #\u83B7\u53D6age\u7684\u503C
&quot;29&quot;
127.0.0.1:6379&gt; decr salary #salary\u4E0D\u5B58\u5728\uFF0C\u81EA\u52A8\u521B\u5EFA\u4E00\u4E2A\uFF0C\u503C\u4E3A-1
(integer) -1
127.0.0.1:6379&gt; get salary #\u83B7\u53D6salary
&quot;-1&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="incrby-decrby-\u9012\u589E\u6216\u8005\u9012\u51CF\u6307\u5B9A\u7684\u6570\u5B57" tabindex="-1"><a class="header-anchor" href="#incrby-decrby-\u9012\u589E\u6216\u8005\u9012\u51CF\u6307\u5B9A\u7684\u6570\u5B57" aria-hidden="true">#</a> incrby/decrby\uFF1A\u9012\u589E\u6216\u8005\u9012\u51CF\u6307\u5B9A\u7684\u6570\u5B57</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>incrby/decrby &lt;key&gt; &lt;\u6B65\u957F&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u5C06key\u4E2D\u5B58\u50A8\u7684\u6570\u5B57\u503C\u9012\u589E\u6307\u5B9A\u7684\u6B65\u957F\uFF0C\u82E5key\u4E0D\u5B58\u5728\uFF0C\u5219\u76F8\u5F53\u4E8E\u5728\u539F\u503C\u4E3A0\u7684\u503C\u4E0A\u9012\u589E\u6307\u5B9A\u7684\u6B65\u957F\u3002</p></blockquote><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; set salary 10000 #\u8BBE\u7F6Esalary\u4E3A10000
OK
127.0.0.1:6379&gt; incrby salary 5000 #salary\u6DFB\u52A05000\uFF0C\u8FD4\u56DE15000
(integer) 15000
127.0.0.1:6379&gt; get salary #\u83B7\u53D6salary
&quot;15000&quot;
127.0.0.1:6379&gt; decrby salary 800 #salary\u51CF\u53BB800\uFF0C\u8FD4\u56DE14200
(integer) 14200
127.0.0.1:6379&gt; get salary #\u83B7\u53D6salary
&quot;14200&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="mset-\u540C\u65F6\u8BBE\u7F6E\u591A\u4E2Akey-value" tabindex="-1"><a class="header-anchor" href="#mset-\u540C\u65F6\u8BBE\u7F6E\u591A\u4E2Akey-value" aria-hidden="true">#</a> mset\uFF1A\u540C\u65F6\u8BBE\u7F6E\u591A\u4E2Akey-value</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mset &lt;key1&gt; &lt;value1&gt; &lt;key2&gt; &lt;value2&gt; ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; mset name ready age 30
OK
127.0.0.1:6379&gt; get name
&quot;ready&quot;
127.0.0.1:6379&gt; get age
&quot;30&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="mget-\u83B7\u53D6\u591A\u4E2Akey\u5BF9\u5E94\u7684\u503C" tabindex="-1"><a class="header-anchor" href="#mget-\u83B7\u53D6\u591A\u4E2Akey\u5BF9\u5E94\u7684\u503C" aria-hidden="true">#</a> mget\uFF1A\u83B7\u53D6\u591A\u4E2Akey\u5BF9\u5E94\u7684\u503C</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mget &lt;key1&gt; &lt;key2&gt; ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; mset name ready age 30 #\u540C\u65F6\u8BBE\u7F6Ename\u548Cage
OK
127.0.0.1:6379&gt; mget name age #\u540C\u65F6\u8BFB\u53D6name\u548Cage\u7684\u503C
1) &quot;ready&quot;
2) &quot;30&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="msetnx-\u5F53\u591A\u4E2Akey\u90FD\u4E0D\u5B58\u5728\u65F6-\u5219\u8BBE\u7F6E\u6210\u529F" tabindex="-1"><a class="header-anchor" href="#msetnx-\u5F53\u591A\u4E2Akey\u90FD\u4E0D\u5B58\u5728\u65F6-\u5219\u8BBE\u7F6E\u6210\u529F" aria-hidden="true">#</a> msetnx\uFF1A\u5F53\u591A\u4E2Akey\u90FD\u4E0D\u5B58\u5728\u65F6\uFF0C\u5219\u8BBE\u7F6E\u6210\u529F</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>msetnx &lt;key1&gt; &lt;value1&gt; &lt;key2&gt; &lt;value2&gt; ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u539F\u5B50\u6027\u7684\uFF0C\u8981\u4E48\u90FD\u6210\u529F\uFF0C\u6216\u8005\u90FD\u5931\u8D25\u3002</p></blockquote><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; flushdb #\u6E05\u7A7Adb\uFF0C\u65B9\u4FBF\u6D4B\u8BD5
OK
127.0.0.1:6379&gt; set k1 v1 #\u8BBE\u7F6Ek1
OK
127.0.0.1:6379&gt; msetnx k1 v1 k2 v2 #\u5F53k1\u548Ck2\u90FD\u4E0D\u5B58\u5728\u7684\u65F6\u5019\uFF0C\u540C\u65F6\u8BBE\u7F6Ek1\u548Ck2\uFF0C\u7531\u4E8Ek1\u5DF2\u5B58\u5728\uFF0C\u6240\u4EE5\u8FD9\u4E2A\u64CD\u4F5C\u5931\u8D25
(integer) 0
127.0.0.1:6379&gt; mget k1 k2 #\u83B7\u53D6k1\u3001k2\uFF0Ck2\u4E0D\u5B58\u5728
1) &quot;v1&quot;
2) (nil)
127.0.0.1:6379&gt; msetnx k2 v2 k3 v3 #\u5F53k2\u3001h3\u90FD\u4E0D\u5B58\u5728\u7684\u65F6\u5019\uFF0C\u540C\u65F6\u8BBE\u7F6Ek2\u548Ck3\uFF0C\u8BBE\u7F6E\u6210\u529F
(integer) 1
127.0.0.1:6379&gt; mget k1 k2 k3 #\u540E\u53BBk1\u3001k2\u3001k3\u7684\u503C
1) &quot;v1&quot;
2) &quot;v2&quot;
3) &quot;v3&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="getrange-\u83B7\u53D6\u503C\u7684\u8303\u56F4-\u7C7B\u4F3Cjava\u4E2D\u7684substring" tabindex="-1"><a class="header-anchor" href="#getrange-\u83B7\u53D6\u503C\u7684\u8303\u56F4-\u7C7B\u4F3Cjava\u4E2D\u7684substring" aria-hidden="true">#</a> getrange\uFF1A\u83B7\u53D6\u503C\u7684\u8303\u56F4\uFF0C\u7C7B\u4F3Cjava\u4E2D\u7684substring</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>getrange key start end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u83B7\u53D6[start,end]\u8FD4\u56DE\u4E3A\u7684\u5B57\u7B26\u4E32</p></blockquote><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; set k1 helloworld
OK
127.0.0.1:6379&gt; getrange k1 0 4
&quot;hello&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="setrange-\u8986\u76D6\u6307\u5B9A\u4F4D\u7F6E\u7684\u503C" tabindex="-1"><a class="header-anchor" href="#setrange-\u8986\u76D6\u6307\u5B9A\u4F4D\u7F6E\u7684\u503C" aria-hidden="true">#</a> setrange\uFF1A\u8986\u76D6\u6307\u5B9A\u4F4D\u7F6E\u7684\u503C</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>setrange &lt;key&gt; &lt;\u8D77\u59CB\u4F4D\u7F6E&gt; &lt;value&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; set k1 helloworld
OK
127.0.0.1:6379&gt; getrange k1 0 4
&quot;hello&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="setex-\u8BBE\u7F6E\u952E\u503C-\u8FC7\u671F\u65F6\u95F4-\u79D2" tabindex="-1"><a class="header-anchor" href="#setex-\u8BBE\u7F6E\u952E\u503C-\u8FC7\u671F\u65F6\u95F4-\u79D2" aria-hidden="true">#</a> setex\uFF1A\u8BBE\u7F6E\u952E\u503C&amp;\u8FC7\u671F\u65F6\u95F4\uFF08\u79D2\uFF09</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>setex &lt;key&gt; &lt;\u8FC7\u671F\u65F6\u95F4(\u79D2)&gt; &lt;value&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; setex k1 100 v1 #\u8BBE\u7F6Ek1\u7684\u503C\u4E3Av1\uFF0C\u6709\u6548\u671F100\u79D2
OK
127.0.0.1:6379&gt; get k1 #\u83B7\u53D6k1\u7684\u503C
&quot;v1&quot;
127.0.0.1:6379&gt; ttl k1 #\u83B7\u53D6k1\u8FD8\u6709\u591A\u5C11\u79D2\u5931\u6548
(integer) 96
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="getset-\u4EE5\u65B0\u6362\u65E7-\u8BBE\u7F6E\u65B0\u503C\u540C\u65F6\u8FD4\u56DE\u65E7\u503C" tabindex="-1"><a class="header-anchor" href="#getset-\u4EE5\u65B0\u6362\u65E7-\u8BBE\u7F6E\u65B0\u503C\u540C\u65F6\u8FD4\u56DE\u65E7\u503C" aria-hidden="true">#</a> getset\uFF1A\u4EE5\u65B0\u6362\u65E7\uFF0C\u8BBE\u7F6E\u65B0\u503C\u540C\u65F6\u8FD4\u56DE\u65E7\u503C</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; set name ready #\u8BBE\u7F6Ename\u4E3Aready
OK
127.0.0.1:6379&gt; getset name tom #\u8BBE\u7F6Ename\u4E3Atom\uFF0C\u8FD4\u56DEname\u7684\u65E7\u503C
&quot;ready&quot;
127.0.0.1:6379&gt; getset age 30 #\u8BBE\u7F6Eage\u4E3A30\uFF0Cage\u672A\u8BBE\u7F6E\u8FC7\uFF0C\u8FD4\u56DEage\u7684\u65E7\u503C\u4E3Anull
(nil)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-\u6570\u636E\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_3-\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a> 3.\u6570\u636E\u7ED3\u6784</h3><p>String\u7684\u6570\u636E\u7ED3\u6784\u4E3A\u7B80\u5355\u52A8\u6001\u5B57\u7B26\u4E32\uFF08Simple Dynamic String\uFF0C\u7F29\u5199SDS\uFF09\u3002\u662F\u53EF\u4EE5\u4FEE\u6539\u7684\u5B57\u7B26\u4E32\uFF0C\u5185\u90E8\u7ED3\u6784\u4E0A\u7C7B\u4F3C\u4E8EJava\u7684ArrayList\uFF0C\u91C7\u7528\u5206\u914D\u5197\u4F59\u7A7A\u95F4\u7684\u65B9\u5F0F\u6765\u51CF\u5C11\u5185\u5B58\u7684\u9891\u7E41\u5206\u914D\u3002</p><p><img src="https://raw.githubusercontent.com/huluhutu/blogimg/main/img/image-20221001185833447.png" alt="image-20221001185833447" loading="lazy"></p><p>\u5982\u56FE\u6240\u793A\uFF0C\u5185\u90E8\u4E3A\u5F53\u524D\u5B57\u7B26\u4E32\u5B9E\u9645\u5206\u914D\u7684\u7A7A\u95F4capacity\u4E00\u822C\u8981\u9AD8\u4E8E\u5B9E\u9645\u5B57\u7B26\u4E32\u957F\u5EA6len\u3002\u5F53\u5B57\u7B26\u4E32\u957F\u5EA6\u5C0F\u4E8E1M\u65F6\uFF0C\u6269\u5BB9\u90FD\u662F\u52A0\u500D\u73B0\u6709\u7684\u7A7A\u95F4\uFF0C\u5982\u679C\u8D85\u8FC71M\uFF0C\u6269\u5BB9\u65F6\u4E00\u6B21\u4F1A\u591A\u6269\u5BB91M\u7684\u7A7A\u95F4\u3002</p><h2 id="_3-list" tabindex="-1"><a class="header-anchor" href="#_3-list" aria-hidden="true">#</a> 3-List</h2><h3 id="_1-\u7B80\u4ECB-1" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB-1" aria-hidden="true">#</a> 1.\u7B80\u4ECB</h3><p>\u5355\u952E\u591A\u503C</p><p>redis\u5217\u8868\u662F\u7B80\u5355\u7684\u5B57\u7B26\u4E32\u5217\u8868\uFF0C\u6309\u7167\u63D2\u5165\u987A\u5E8F\u6392\u5E8F\u3002</p><p>\u4F60\u53EF\u4EE5\u6DFB\u52A0\u4E00\u4E2A\u5143\u7D20\u5230\u5217\u8868\u7684\u5934\u90E8\uFF08\u5DE6\u8FB9\uFF09\u6216\u8005\u5C3E\u90E8\uFF08\u53F3\u8FB9\uFF09\u3002</p><p>\u5B83\u7684\u5E95\u5C42\u5B9E\u9645\u4E0A\u662F\u4F7F\u7528\u53CC\u5411\u94FE\u8868\u5B9E\u73B0\u7684\uFF0C\u5BF9\u4E24\u7AEF\u7684\u64CD\u4F5C\u6027\u80FD\u5F88\u9AD8\uFF0C\u901A\u8FC7\u7D22\u5F15\u4E0B\u6807\u64CD\u4F5C\u4E2D\u95F4\u8282\u70B9\u6027\u80FD\u4F1A\u8F83\u5DEE\u3002</p><h3 id="_2-\u5E38\u7528\u547D\u4EE4-1" tabindex="-1"><a class="header-anchor" href="#_2-\u5E38\u7528\u547D\u4EE4-1" aria-hidden="true">#</a> 2.\u5E38\u7528\u547D\u4EE4</h3><h4 id="lpush-rpush-\u4ECE\u5DE6\u8FB9\u6216\u8005\u53F3\u8FB9\u63D2\u5165\u4E00\u4E2A\u6216\u591A\u4E2A\u503C" tabindex="-1"><a class="header-anchor" href="#lpush-rpush-\u4ECE\u5DE6\u8FB9\u6216\u8005\u53F3\u8FB9\u63D2\u5165\u4E00\u4E2A\u6216\u591A\u4E2A\u503C" aria-hidden="true">#</a> lpush/rpush\uFF1A\u4ECE\u5DE6\u8FB9\u6216\u8005\u53F3\u8FB9\u63D2\u5165\u4E00\u4E2A\u6216\u591A\u4E2A\u503C</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>lpush/rpush &lt;key1&gt; &lt;value1&gt; &lt;key2&gt; &lt;value2&gt; ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; flushdb #\u6E05\u7A7Adb\uFF0C\u65B9\u4FBF\u6D4B\u8BD5
OK
127.0.0.1:6379&gt; rpush name java spring &quot;springboot&quot; &quot;spring cloud&quot; #\u5217\u8868name\u7684\u5DE6\u8FB9\u63D2\u51654\u4E2A\u5143\u7D20
(integer) 4
127.0.0.1:6379&gt; lrange name 1 2 #\u4ECE\u5DE6\u8FB9\u53D6\u51FA\u7D22\u5F15\u4F4D\u4E8E[1,2]\u8303\u56F4\u5185\u7684\u5143\u7D20
1) &quot;spring&quot;
2) &quot;springboot&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="lrange-\u4ECE\u5217\u8868\u5DE6\u8FB9\u83B7\u53D6\u6307\u5B9A\u8303\u56F4\u5185\u7684\u503C" tabindex="-1"><a class="header-anchor" href="#lrange-\u4ECE\u5217\u8868\u5DE6\u8FB9\u83B7\u53D6\u6307\u5B9A\u8303\u56F4\u5185\u7684\u503C" aria-hidden="true">#</a> lrange\uFF1A\u4ECE\u5217\u8868\u5DE6\u8FB9\u83B7\u53D6\u6307\u5B9A\u8303\u56F4\u5185\u7684\u503C</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>lrange &lt;key&gt; &lt;star&gt; &lt;stop&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u8FD4\u56DE\u5217\u8868 <code>key</code> \u4E2D\u6307\u5B9A\u533A\u95F4\u5185\u7684\u5143\u7D20\uFF0C\u533A\u95F4\u4EE5\u504F\u79FB\u91CF <code>start</code> \u548C <code>stop</code> \u6307\u5B9A\u3002</p><p>\u4E0B\u6807(index)\u53C2\u6570 <code>start</code> \u548C <code>stop</code> \u90FD\u4EE5 <code>0</code> \u4E3A\u5E95\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4EE5 <code>0</code> \u8868\u793A\u5217\u8868\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\uFF0C\u4EE5 <code>1</code> \u8868\u793A\u5217\u8868\u7684\u7B2C\u4E8C\u4E2A\u5143\u7D20\uFF0C\u4EE5\u6B64\u7C7B\u63A8\u3002</p><p>\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528\u8D1F\u6570\u4E0B\u6807\uFF0C\u4EE5 <code>-1</code> \u8868\u793A\u5217\u8868\u7684\u6700\u540E\u4E00\u4E2A\u5143\u7D20\uFF0C <code>-2</code> \u8868\u793A\u5217\u8868\u7684\u5012\u6570\u7B2C\u4E8C\u4E2A\u5143\u7D20\uFF0C\u4EE5\u6B64\u7C7B\u63A8\u3002</p><p><strong>\u8FD4\u56DE\u503C:</strong></p><p>\u4E00\u4E2A\u5217\u8868\uFF0C\u5305\u542B\u6307\u5B9A\u533A\u95F4\u5185\u7684\u5143\u7D20\u3002</p></blockquote><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; flushdb
OK
127.0.0.1:6379&gt; rpush course java c c++ php js nodejs #course\u96C6\u5408\u7684\u53F3\u8FB9\u63D2\u51656\u4E2A\u5143\u7D20
(integer) 6
127.0.0.1:6379&gt; lrange course 0 -1 #\u53D6\u51FAcourse\u96C6\u5408\u4E2D\u6240\u6709\u5143\u7D20
1) &quot;java&quot;
2) &quot;c&quot;
3) &quot;c++&quot;
4) &quot;php&quot;
5) &quot;js&quot;
6) &quot;nodejs&quot;
127.0.0.1:6379&gt; lrange course 1 3 #\u83B7\u53D6course\u96C6\u5408\u7D22\u5F15[1,3]\u8303\u56F4\u5185\u7684\u5143\u7D20
1) &quot;c&quot;
2) &quot;c++&quot;
3) &quot;php&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="lpop-rpop-\u4ECE\u5DE6\u8FB9\u6216\u8005\u53F3\u8FB9\u5F39\u51FA\u591A\u4E2A\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#lpop-rpop-\u4ECE\u5DE6\u8FB9\u6216\u8005\u53F3\u8FB9\u5F39\u51FA\u591A\u4E2A\u5143\u7D20" aria-hidden="true">#</a> lpop/rpop\uFF1A\u4ECE\u5DE6\u8FB9\u6216\u8005\u53F3\u8FB9\u5F39\u51FA\u591A\u4E2A\u5143\u7D20</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>lpop/rpop &lt;key&gt; &lt;count&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>count\uFF1A\u53EF\u4EE5\u7701\u7565\uFF0C\u9ED8\u8BA4\u503C\u4E3A1</p><p>lpop/rpop \u64CD\u4F5C\u4E4B\u540E\uFF0C\u5F39\u51FA\u6765\u7684\u503C\u4F1A\u4ECE\u5217\u8868\u4E2D\u5220\u9664</p><p>\u503C\u5728\u952E\u5728\uFF0C\u503C\u5149\u952E\u4EA1\u3002</p></blockquote><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; flushdb
OK
127.0.0.1:6379&gt; rpush course java c++ php js node js #\u96C6\u5408course\u53F3\u8FB9\u52A0\u51656\u4E2A\u5143\u7D20
(integer) 6
127.0.0.1:6379&gt; lpop course #\u4ECE\u5DE6\u8FB9\u5F39\u51FA1\u4E2A\u5143\u7D20
&quot;java&quot;
127.0.0.1:6379&gt; rpop course 2 #\u4ECE\u53F3\u8FB9\u5F39\u51FA2\u4E2A\u5143\u7D20
1) &quot;js&quot;
2) &quot;node&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="rpoplpush-\u4ECE\u4E00\u4E2A\u5217\u8868\u53F3\u8FB9\u5F39\u51FA\u4E00\u4E2A\u5143\u7D20\u653E\u5230\u53E6\u5916\u4E00\u4E2A\u5217\u8868\u4E2D" tabindex="-1"><a class="header-anchor" href="#rpoplpush-\u4ECE\u4E00\u4E2A\u5217\u8868\u53F3\u8FB9\u5F39\u51FA\u4E00\u4E2A\u5143\u7D20\u653E\u5230\u53E6\u5916\u4E00\u4E2A\u5217\u8868\u4E2D" aria-hidden="true">#</a> rpoplpush\uFF1A\u4ECE\u4E00\u4E2A\u5217\u8868\u53F3\u8FB9\u5F39\u51FA\u4E00\u4E2A\u5143\u7D20\u653E\u5230\u53E6\u5916\u4E00\u4E2A\u5217\u8868\u4E2D</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>rpoplpush source destination
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u4ECEsource\u7684\u53F3\u8FB9\u5F39\u51FA\u4E00\u4E2A\u5143\u7D20\u653E\u5230destination\u5217\u8868\u7684\u5DE6\u8FB9</p></blockquote><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; flushdb
OK
127.0.0.1:6379&gt; rpush k1 1 2 3 #\u5217\u8868k1\u7684\u53F3\u8FB9\u6DFB\u52A03\u4E2A\u5143\u7D20[1,2,3]
(integer) 3
127.0.0.1:6379&gt; lrange k1 0 -1 #\u4ECE\u5DE6\u5230\u53F3\u8F93\u51FAk1\u5217\u8868\u4E2D\u7684\u5143\u7D20
1) &quot;1&quot;
2) &quot;2&quot;
3) &quot;3&quot;
127.0.0.1:6379&gt; rpush k2 4 5 6 #\u5217\u8868k2\u7684\u53F3\u8FB9\u6DFB\u52A03\u4E2A\u5143\u7D20[4,5,6]
(integer) 3
127.0.0.1:6379&gt; lrange k2 0 -1 #\u4ECE\u5DE6\u5230\u53F3\u8F93\u51FAk2\u5217\u8868\u4E2D\u7684\u5143\u7D20
1) &quot;4&quot;
2) &quot;5&quot;
3) &quot;6&quot;
127.0.0.1:6379&gt; rpoplpush k1 k2 #\u4ECEk1\u7684\u53F3\u8FB9\u5F39\u51FA\u4E00\u4E2A\u5143\u7D20\u653E\u5230k2\u7684\u5DE6\u8FB9
&quot;3&quot;
127.0.0.1:6379&gt; lrange k1 0 -1 #k1\u4E2D\u5269\u4E0B2\u4E2A\u5143\u7D20\u4E86
1) &quot;1&quot;
2) &quot;2&quot;
127.0.0.1:6379&gt; lrange k2 0 -1 #k2\u4E2D\u53D8\u62104\u4E2A\u5143\u7D20\u4E86
1) &quot;3&quot;
2) &quot;4&quot;
3) &quot;5&quot;
4) &quot;6&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="lindex-\u83B7\u53D6\u6307\u5B9A\u7D22\u5F15\u4F4D\u7F6E\u7684\u5143\u7D20-\u4ECE\u5DE6\u5230\u53F3" tabindex="-1"><a class="header-anchor" href="#lindex-\u83B7\u53D6\u6307\u5B9A\u7D22\u5F15\u4F4D\u7F6E\u7684\u5143\u7D20-\u4ECE\u5DE6\u5230\u53F3" aria-hidden="true">#</a> lindex\uFF1A\u83B7\u53D6\u6307\u5B9A\u7D22\u5F15\u4F4D\u7F6E\u7684\u5143\u7D20\uFF08\u4ECE\u5DE6\u5230\u53F3\uFF09</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>lindex key index
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u8FD4\u56DE\u5217\u8868 <code>key</code> \u4E2D\uFF0C\u4E0B\u6807\u4E3A <code>index</code> \u7684\u5143\u7D20\u3002</p><p>\u4E0B\u6807(index)\u53C2\u6570 <code>start</code> \u548C <code>stop</code> \u90FD\u4EE5 <code>0</code> \u4E3A\u5E95\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4EE5 <code>0</code> \u8868\u793A\u5217\u8868\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\uFF0C\u4EE5 <code>1</code> \u8868\u793A\u5217\u8868\u7684\u7B2C\u4E8C\u4E2A\u5143\u7D20\uFF0C\u4EE5\u6B64\u7C7B\u63A8\u3002</p><p>\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528\u8D1F\u6570\u4E0B\u6807\uFF0C\u4EE5 <code>-1</code> \u8868\u793A\u5217\u8868\u7684\u6700\u540E\u4E00\u4E2A\u5143\u7D20\uFF0C <code>-2</code> \u8868\u793A\u5217\u8868\u7684\u5012\u6570\u7B2C\u4E8C\u4E2A\u5143\u7D20\uFF0C\u4EE5\u6B64\u7C7B\u63A8\u3002</p><p>\u5982\u679C <code>key</code> \u4E0D\u662F\u5217\u8868\u7C7B\u578B\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u9519\u8BEF\u3002</p><p><strong>\u8FD4\u56DE\u503C:</strong></p><p>\u5217\u8868\u4E2D\u4E0B\u6807\u4E3A <code>index</code> \u7684\u5143\u7D20\u3002</p><p>\u5982\u679C <code>index</code> \u53C2\u6570\u7684\u503C\u4E0D\u5728\u5217\u8868\u7684\u533A\u95F4\u8303\u56F4\u5185(out of range)\uFF0C\u8FD4\u56DE <code>nil</code></p></blockquote><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; flushdb
OK
127.0.0.1:6379&gt; rpush course java c c++ php #\u5217\u8868course\u4E2D\u653E\u51654\u4E2A\u5143\u7D20
(integer) 4
127.0.0.1:6379&gt; lindex course 2 #\u8FD4\u56DE\u7D22\u5F15\u4F4D\u7F6E2\u7684\u5143\u7D20
&quot;c++&quot;
127.0.0.1:6379&gt; lindex course 200 #\u8FD4\u56DE\u7D22\u5F15\u4F4D\u7F6E200\u7684\u5143\u7D20\uFF0C\u6CA1\u6709
(nil)
127.0.0.1:6379&gt; lindex course -1 #\u8FD4\u56DE\u6700\u540E\u4E00\u4E2A\u5143\u7D20
&quot;php&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="llen-\u83B7\u5F97\u5217\u8868\u957F\u5EA6" tabindex="-1"><a class="header-anchor" href="#llen-\u83B7\u5F97\u5217\u8868\u957F\u5EA6" aria-hidden="true">#</a> llen\uFF1A\u83B7\u5F97\u5217\u8868\u957F\u5EA6</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>llen key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u8FD4\u56DE\u5217\u8868 <code>key</code> \u7684\u957F\u5EA6\u3002</p><p>\u5982\u679C <code>key</code> \u4E0D\u5B58\u5728\uFF0C\u5219 <code>key</code> \u88AB\u89E3\u91CA\u4E3A\u4E00\u4E2A\u7A7A\u5217\u8868\uFF0C\u8FD4\u56DE <code>0</code> .</p><p>\u5982\u679C <code>key</code> \u4E0D\u662F\u5217\u8868\u7C7B\u578B\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u9519\u8BEF\u3002</p></blockquote><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; flushdb
OK
127.0.0.1:6379&gt; rpush name ready tom jack
(integer) 3
127.0.0.1:6379&gt; llen name
(integer) 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="linsert-\u5728\u67D0\u4E2A\u503C\u7684\u524D\u6216\u8005\u540E\u9762\u63D2\u5165\u4E00\u4E2A\u503C" tabindex="-1"><a class="header-anchor" href="#linsert-\u5728\u67D0\u4E2A\u503C\u7684\u524D\u6216\u8005\u540E\u9762\u63D2\u5165\u4E00\u4E2A\u503C" aria-hidden="true">#</a> linsert\uFF1A\u5728\u67D0\u4E2A\u503C\u7684\u524D\u6216\u8005\u540E\u9762\u63D2\u5165\u4E00\u4E2A\u503C</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>linsert &lt;key&gt; before|after &lt;value&gt; &lt;newvalue&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u5C06\u503C <code>newvalue</code> \u63D2\u5165\u5230\u5217\u8868 <code>key</code> \u5F53\u4E2D\uFF0C\u4F4D\u4E8E\u503C <code>value</code>\u4E4B\u524D\u6216\u4E4B\u540E\u3002</p><p>\u5F53 <code>value</code> \u4E0D\u5B58\u5728\u4E8E\u5217\u8868 <code>key</code> \u65F6\uFF0C\u4E0D\u6267\u884C\u4EFB\u4F55\u64CD\u4F5C\u3002</p><p>\u5F53 <code>key</code> \u4E0D\u5B58\u5728\u65F6\uFF0C <code>key</code> \u88AB\u89C6\u4E3A\u7A7A\u5217\u8868\uFF0C\u4E0D\u6267\u884C\u4EFB\u4F55\u64CD\u4F5C\u3002</p><p>\u5982\u679C <code>key</code> \u4E0D\u662F\u5217\u8868\u7C7B\u578B\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u9519\u8BEF\u3002</p><p><strong>\u8FD4\u56DE\u503C:</strong></p><p>\u5982\u679C\u547D\u4EE4\u6267\u884C\u6210\u529F\uFF0C\u8FD4\u56DE\u63D2\u5165\u64CD\u4F5C\u5B8C\u6210\u4E4B\u540E\uFF0C\u5217\u8868\u7684\u957F\u5EA6\u3002</p><p>\u5982\u679C\u6CA1\u6709\u627E\u5230 <code>value</code> \uFF0C\u8FD4\u56DE <code>-1</code> \u3002</p><p>\u5982\u679C <code>key</code> \u4E0D\u5B58\u5728\u6216\u4E3A\u7A7A\u5217\u8868\uFF0C\u8FD4\u56DE <code>0</code> \u3002</p></blockquote><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; flushdb
OK
127.0.0.1:6379&gt; rpush name ready tom jack #\u5217\u8868name\u4E2D\u6DFB\u52A03\u4E2A\u5143\u7D20
(integer) 3
127.0.0.1:6379&gt; lrange name 0 -1 #name\u5217\u8868\u6240\u6709\u5143\u7D20
1) &quot;ready&quot;
2) &quot;tom&quot;
3) &quot;jack&quot;
127.0.0.1:6379&gt; linsert name before tom lily #tom\u524D\u9762\u6DFB\u52A0lily
(integer) 4
127.0.0.1:6379&gt; lrange name 0 -1 #name\u5217\u8868\u6240\u6709\u5143\u7D20
1) &quot;ready&quot;
2) &quot;lily&quot;
3) &quot;tom&quot;
4) &quot;jack&quot;
127.0.0.1:6379&gt; linsert name before xxx lucy # \u5728\u5143\u7D20xxx\u524D\u9762\u63D2\u5165lucy\uFF0C\u7531\u4E8Exxx\u5143\u7D20\u4E0D\u5B58\u5728\uFF0C\u63D2\u5165\u5931\u8D25\uFF0C\u8FD4\u56DE-1
(integer) -1
127.0.0.1:6379&gt; lrange name 0 -1
1) &quot;ready&quot;
2) &quot;lily&quot;
3) &quot;tom&quot;
4) &quot;jack&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="lrem-\u5220\u9664\u6307\u5B9A\u6570\u91CF\u7684\u67D0\u4E2A\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#lrem-\u5220\u9664\u6307\u5B9A\u6570\u91CF\u7684\u67D0\u4E2A\u5143\u7D20" aria-hidden="true">#</a> lrem\uFF1A\u5220\u9664\u6307\u5B9A\u6570\u91CF\u7684\u67D0\u4E2A\u5143\u7D20</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>LREM key count value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u6839\u636E\u53C2\u6570 <code>count</code> \u7684\u503C\uFF0C\u79FB\u9664\u5217\u8868\u4E2D\u4E0E\u53C2\u6570 <code>value</code> \u76F8\u7B49\u7684\u5143\u7D20\u3002</p><p><code>count</code> \u7684\u503C\u53EF\u4EE5\u662F\u4EE5\u4E0B\u51E0\u79CD\uFF1A</p><ul><li><code>count &gt; 0</code> : \u4ECE\u8868\u5934\u5F00\u59CB\u5411\u8868\u5C3E\u641C\u7D22\uFF0C\u79FB\u9664\u4E0E <code>value</code> \u76F8\u7B49\u7684\u5143\u7D20\uFF0C\u6570\u91CF\u4E3A <code>count</code> \u3002</li><li><code>count &lt; 0</code> : \u4ECE\u8868\u5C3E\u5F00\u59CB\u5411\u8868\u5934\u641C\u7D22\uFF0C\u79FB\u9664\u4E0E <code>value</code> \u76F8\u7B49\u7684\u5143\u7D20\uFF0C\u6570\u91CF\u4E3A <code>count</code> \u7684\u7EDD\u5BF9\u503C\u3002</li><li><code>count = 0</code> : \u79FB\u9664\u8868\u4E2D\u6240\u6709\u4E0E <code>value</code> \u76F8\u7B49\u7684\u503C\u3002</li></ul><p><strong>\u8FD4\u56DE\u503C\uFF1A</strong></p><p>\u88AB\u79FB\u9664\u5143\u7D20\u7684\u6570\u91CF\u3002</p><p>\u56E0\u4E3A\u4E0D\u5B58\u5728\u7684 <code>key</code> \u88AB\u89C6\u4F5C\u7A7A\u8868(empty list)\uFF0C\u6240\u4EE5\u5F53 <code>key</code> \u4E0D\u5B58\u5728\u65F6\uFF0C\u603B\u662F\u8FD4\u56DE <code>0</code> \u3002</p></blockquote><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; flushdb #\u6E05\u7A7Adb\uFF0C\u65B9\u4FBF\u6D4B\u8BD5
OK
127.0.0.1:6379&gt; rpush k1 v1 v2 v3 v2 v2 v1 #k1\u5217\u8868\u4E2D\u63D2\u51656\u4E2A\u5143\u7D20
(integer) 6
127.0.0.1:6379&gt; lrange k1 0 -1 #\u8F93\u51FAk1\u96C6\u5408\u4E2D\u6240\u6709\u5143\u7D20
1) &quot;v1&quot;
2) &quot;v2&quot;
3) &quot;v3&quot;
4) &quot;v2&quot;
5) &quot;v2&quot;
6) &quot;v1&quot;
127.0.0.1:6379&gt; lrem k1 2 v2 #k1\u96C6\u5408\u4E2D\u4ECE\u5DE6\u8FB9\u5220\u96642\u4E2Av2
(integer) 2
127.0.0.1:6379&gt; lrange k1 0 -1 #\u8F93\u51FA\u5217\u8868\uFF0C\u5217\u8868\u4E2D\u8FD8\u67091\u4E2Av2\uFF0C\u524D\u97622\u4E2Av2\u5E72\u6389\u4E86
1) &quot;v1&quot;
2) &quot;v3&quot;
3) &quot;v2&quot;
4) &quot;v1&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="lset-\u66FF\u6362\u6307\u5B9A\u4F4D\u7F6E\u7684\u503C" tabindex="-1"><a class="header-anchor" href="#lset-\u66FF\u6362\u6307\u5B9A\u4F4D\u7F6E\u7684\u503C" aria-hidden="true">#</a> lset\uFF1A\u66FF\u6362\u6307\u5B9A\u4F4D\u7F6E\u7684\u503C</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>lset &lt;key&gt; &lt;index&gt; &lt;value&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u5C06\u5217\u8868 <code>key</code> \u4E0B\u6807\u4E3A <code>index</code> \u7684\u5143\u7D20\u7684\u503C\u8BBE\u7F6E\u4E3A <code>value</code> \u3002</p><p>\u5F53 <code>index</code> \u53C2\u6570\u8D85\u51FA\u8303\u56F4\uFF0C\u6216\u5BF9\u4E00\u4E2A\u7A7A\u5217\u8868( <code>key</code> \u4E0D\u5B58\u5728)\u8FDB\u884Clset\u65F6\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u9519\u8BEF\u3002</p><p><strong>\u8FD4\u56DE\u503C\uFF1A</strong></p><p>\u64CD\u4F5C\u6210\u529F\u8FD4\u56DE <code>ok</code> \uFF0C\u5426\u5219\u8FD4\u56DE\u9519\u8BEF\u4FE1\u606F\u3002</p></blockquote><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; flushdb #\u6E05\u7A7Adb\uFF0C\u65B9\u4FBF\u6D4B\u8BD5
OK
127.0.0.1:6379&gt; rpush name tom jack ready #name\u96C6\u5408\u4E2D\u653E\u51653\u4E2A\u5143\u7D20
(integer) 3
127.0.0.1:6379&gt; lrange name 0 -1 #\u8F93\u51FAname\u96C6\u5408\u5143\u7D20
1) &quot;tom&quot;
2) &quot;jack&quot;
3) &quot;ready&quot;
127.0.0.1:6379&gt; lset name 1 lily #\u5C06name\u96C6\u5408\u4E2D\u7B2C2\u4E2A\u5143\u7D20\u66FF\u6362\u4E3Aliy
OK
127.0.0.1:6379&gt; lrange name 0 -1 #\u8F93\u51FAname\u96C6\u5408\u5143\u7D20
1) &quot;tom&quot;
2) &quot;lily&quot;
3) &quot;ready&quot;
127.0.0.1:6379&gt; lset name 10 lily #\u7D22\u5F15\u8D85\u51FA\u8303\u56F4\uFF0C\u62A5\u9519
(error) ERR index out of range
127.0.0.1:6379&gt; lset course 1 java #course\u96C6\u5408\u4E0D\u5B58\u5728\uFF0C\u62A5\u9519
(error) ERR no such key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-\u6570\u636E\u7ED3\u6784-1" tabindex="-1"><a class="header-anchor" href="#_3-\u6570\u636E\u7ED3\u6784-1" aria-hidden="true">#</a> 3.\u6570\u636E\u7ED3\u6784</h3><p>List\u7684\u6570\u636E\u7ED3\u6784\u4E3A\u5FEB\u901F\u94FE\u8868quickList</p><p>\u9996\u5148\u5728\u5217\u8868\u5143\u7D20\u8F83\u5C11\u7684\u60C5\u51B5\u4E0B\u4F1A\u4F7F\u7528\u4E00\u5757\u8FDE\u7EED\u7684\u5185\u5B58\u5B58\u50A8\uFF0C\u8FD9\u4E2A\u7ED3\u6784\u662Fziplist\uFF0C\u4E5F\u5C31\u662F\u538B\u7F29\u5217\u8868\u3002</p><p>\u5B83\u5C06\u6240\u6709\u7684\u5143\u7D20\u7D27\u6328\u7740\u4E00\u8D77\u5B58\u50A8\uFF0C\u5206\u914D\u7684\u662F\u4E00\u5757\u8FDE\u7EED\u7684\u5185\u5B58\u3002</p><p>\u5F53\u5C31\u6BD4\u8F83\u591A\u7684\u65F6\u5019\u624D\u4F1A\u6539\u6210quickList\u3002</p><p>\u56E0\u4E3A\u666E\u901A\u7684\u94FE\u8868\u9700\u8981\u7684\u9644\u52A0\u6307\u9488\u7A7A\u95F4\u592A\u5927\uFF0C\u4F1A\u6BD4\u8F83\u6D6A\u8D39\u7A7A\u95F4\uFF0C\u6BD4\u5982\u8FD9\u4E2A\u5217\u8868\u91CC\u5B58\u50A8\u7684\u53EA\u662Fint\u7C7B\u578B\u7684\u4E66\uFF0C\u7ED3\u6784\u4E0A\u8FD8\u9700\u89812\u4E2A\u989D\u5916\u7684\u6307\u9488prev\u548Cnext\u3002</p><p><img src="https://raw.githubusercontent.com/huluhutu/blogimg/main/img/image-20221001190136434.png" alt="image-20221001190136434" loading="lazy"></p><p>redis\u5C06\u94FE\u8868\u548Cziplist\u7ED3\u5408\u8D77\u6765\u7EC4\u6210\u4E86quicklist\u3002\u4E5F\u5C31\u662F\u5C06\u591A\u4E2Aziplist\u4F7F\u7528\u53CC\u5411\u6307\u9488\u4E32\u8D77\u6765\u4F7F\u7528\uFF0C\u8FD9\u6837\u65E2\u6EE1\u8DB3\u4E86\u5FEB\u901F\u7684\u63D2\u5165\u5220\u9664\u6027\u80FD\uFF0C\u53C8\u4E0D\u4F1A\u51FA\u73B0\u592A\u5927\u7684\u7A7A\u95F4\u5197\u4F59\u3002</p><h2 id="_4-set" tabindex="-1"><a class="header-anchor" href="#_4-set" aria-hidden="true">#</a> 4-Set</h2><h3 id="_1-\u7B80\u4ECB-2" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB-2" aria-hidden="true">#</a> 1.\u7B80\u4ECB</h3><p>redis set\u5BF9\u5916\u63D0\u4F9B\u7684\u529F\u4E0Elist\u7C7B\u4F3C\uFF0C\u662F\u4E00\u4E2A\u5217\u8868\u7684\u529F\u80FD\uFF0C\u7279\u6B8A\u4E4B\u5904\u5728\u4E8Eset\u662F\u53EF\u4EE5\u81EA\u52A8\u6392\u91CD\u7684\uFF0C\u5F53\u4F60\u9700\u8981\u5B58\u50A8\u4E00\u4E2A\u5217\u8868\u6570\u636E\uFF0C\u53C8\u4E0D\u5E0C\u671B\u51FA\u73B0\u91CD\u590D\u6570\u636E\u65F6\uFF0Cset\u662F\u4E00\u4E2A\u5F88\u597D\u7684\u9009\u62E9\u3002</p><p>redis\u7684set\u662Fstring\u7C7B\u578B\u7684<strong>\u65E0\u5E8F\u96C6\u5408</strong>\uFF0C\u4ED6\u7684<strong>\u5E95\u5C42\u5B9E\u9645\u662F\u4E00\u4E2Avalue\u4E3Anull\u7684hash\u8868</strong>\uFF0C\u6536\u76CA\u6DFB\u52A0\uFF0C\u5220\u9664\uFF0C\u67E5\u627E\u590D\u6742\u5EA6\u90FD\u662FO(1)\u3002</p><p>\u4E00\u4E2A\u7B97\u6CD5\uFF0C\u5982\u679C\u65F6\u95F4\u590D\u6742\u5EA6\u662FO(1)\uFF0C\u90A3\u4E48\u968F\u7740\u6570\u636E\u7684\u589E\u52A0\uFF0C\u67E5\u627E\u6570\u636E\u7684\u65F6\u95F4\u4E0D\u53D8\uFF0C\u4E5F\u5C31\u662F\u4E0D\u7BA1\u6570\u636E\u591A\u5C11\uFF0C\u67E5\u627E\u65F6\u95F4\u90FD\u662F\u4E00\u6837</p><h3 id="_2-\u5E38\u7528\u547D\u4EE4-2" tabindex="-1"><a class="header-anchor" href="#_2-\u5E38\u7528\u547D\u4EE4-2" aria-hidden="true">#</a> 2.\u5E38\u7528\u547D\u4EE4</h3><h4 id="sadd-\u6DFB\u52A0\u4E00\u4E2A\u6216\u591A\u4E2A\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#sadd-\u6DFB\u52A0\u4E00\u4E2A\u6216\u591A\u4E2A\u5143\u7D20" aria-hidden="true">#</a> sadd\uFF1A\u6DFB\u52A0\u4E00\u4E2A\u6216\u591A\u4E2A\u5143\u7D20</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sadd &lt;key&gt; &lt;value1&gt; &lt;value2&gt; ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; flushdb
OK
127.0.0.1:6379&gt; sadd k1 v1 v2 v1 v3 v2 #k1\u4E2D\u653E\u51655\u4E2A\u5143\u7D20\uFF0C\u4F1A\u81EA\u52A8\u53BB\u91CD\uFF0C\u6210\u529F\u63D2\u51653\u4E2A
(integer) 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="smembers-\u53D6\u51FA\u6240\u6709\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#smembers-\u53D6\u51FA\u6240\u6709\u5143\u7D20" aria-hidden="true">#</a> smembers\uFF1A\u53D6\u51FA\u6240\u6709\u5143\u7D20</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>smembers &lt;key&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; flushdb
OK
127.0.0.1:6379&gt; sadd k1 v1 v2 v1 v3 v2 #k1\u4E2D\u653E\u51655\u4E2A\u5143\u7D20\uFF0C\u4F1A\u81EA\u52A8\u53BB\u91CD\uFF0C\u6210\u529F\u63D2\u51653\u4E2A
(integer) 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="sismember-\u5224\u65AD\u96C6\u5408\u4E2D\u662F\u5426\u6709\u67D0\u4E2A\u503C" tabindex="-1"><a class="header-anchor" href="#sismember-\u5224\u65AD\u96C6\u5408\u4E2D\u662F\u5426\u6709\u67D0\u4E2A\u503C" aria-hidden="true">#</a> sismember\uFF1A\u5224\u65AD\u96C6\u5408\u4E2D\u662F\u5426\u6709\u67D0\u4E2A\u503C</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sismember &lt;key&gt; &lt;value&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u5224\u65AD\u96C6\u5408key\u4E2D\u662F\u5426\u5305\u542B\u5143\u7D20value\uFF0C1\uFF1A\u6709\uFF0C0\uFF1A\u6CA1\u6709</p></blockquote><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; flushdb
OK
127.0.0.1:6379&gt; sadd k1 v1 v2 v1 v3 v2 #k1\u4E2D\u653E\u51655\u4E2A\u5143\u7D20\uFF0C\u4F1A\u81EA\u52A8\u53BB\u91CD\uFF0C\u6210\u529F\u63D2\u51653\u4E2A
(integer) 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="scard-\u8FD4\u56DE\u96C6\u5408\u4E2D\u5143\u7D20\u7684\u4E2A\u6570" tabindex="-1"><a class="header-anchor" href="#scard-\u8FD4\u56DE\u96C6\u5408\u4E2D\u5143\u7D20\u7684\u4E2A\u6570" aria-hidden="true">#</a> scard\uFF1A\u8FD4\u56DE\u96C6\u5408\u4E2D\u5143\u7D20\u7684\u4E2A\u6570</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>scard &lt;key&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u8FD4\u56DE\u96C6\u5408 <code>key</code> \u7684\u57FA\u6570(\u96C6\u5408\u4E2D\u5143\u7D20\u7684\u6570\u91CF)</p><p><strong>\u8FD4\u56DE\u503C\uFF1A</strong></p><p>\u96C6\u5408\u7684\u57FA\u6570\u3002</p><p>\u5F53 <code>key</code> \u4E0D\u5B58\u5728\u65F6\uFF0C\u8FD4\u56DE <code>0</code> \u3002</p></blockquote><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; flushdb
OK
127.0.0.1:6379&gt; sadd k1 v1 v2 v1 v3 v2
(integer) 3
127.0.0.1:6379&gt; scard k1
(integer) 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="srem-\u5220\u9664\u591A\u4E2A\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#srem-\u5220\u9664\u591A\u4E2A\u5143\u7D20" aria-hidden="true">#</a> srem\uFF1A\u5220\u9664\u591A\u4E2A\u5143\u7D20</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>srem key member [member ...]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u79FB\u9664\u96C6\u5408 <code>key</code> \u4E2D\u7684\u4E00\u4E2A\u6216\u591A\u4E2A <code>member</code> \u5143\u7D20\uFF0C\u4E0D\u5B58\u5728\u7684 <code>member</code> \u5143\u7D20\u4F1A\u88AB\u5FFD\u7565\u3002</p><p>\u5F53 <code>key</code> \u4E0D\u662F\u96C6\u5408\u7C7B\u578B\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u9519\u8BEF\u3002</p><p><strong>\u8FD4\u56DE\u503C:</strong></p><p>\u88AB\u6210\u529F\u79FB\u9664\u7684\u5143\u7D20\u7684\u6570\u91CF\uFF0C\u4E0D\u5305\u62EC\u88AB\u5FFD\u7565\u7684\u5143\u7D20\u3002</p></blockquote><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; flushdb #\u6E05\u7A7Adb\uFF0C\u65B9\u6D4B\u8BD5
OK
127.0.0.1:6379&gt; sadd course java c c++ python #\u96C6\u5408course\u4E2D\u6DFB\u52A04\u4E2A\u5143\u7D20
(integer) 4
127.0.0.1:6379&gt; smembers course #\u83B7\u53D6course\u96C6\u5408\u6240\u6709\u5143\u7D20
1) &quot;python&quot;
2) &quot;java&quot;
3) &quot;c++&quot;
4) &quot;c&quot;
127.0.0.1:6379&gt; srem course java c #\u5220\u9664course\u96C6\u5408\u4E2D\u7684java\u548Cc
(integer) 2
127.0.0.1:6379&gt; smembers course #\u83B7\u53D6course\u96C6\u5408\u6240\u6709\u5143\u7D20\uFF0C\u5269\u4E0B2\u4E2A\u4E86
1) &quot;python&quot;
2) &quot;c++&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="spop-\u968F\u673A\u5F39\u51FA\u591A\u4E2A\u503C" tabindex="-1"><a class="header-anchor" href="#spop-\u968F\u673A\u5F39\u51FA\u591A\u4E2A\u503C" aria-hidden="true">#</a> spop\uFF1A\u968F\u673A\u5F39\u51FA\u591A\u4E2A\u503C</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>spop &lt;key&gt; &lt;count&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u968F\u673A\u4ECEkey\u96C6\u5408\u4E2D\u5F39\u51FAcount\u4E2A\u5143\u7D20\uFF0Ccount\u9ED8\u8BA4\u503C\u4E3A1</p><p><strong>\u8FD4\u56DE\u503C:</strong></p><p>\u88AB\u79FB\u9664\u7684\u968F\u673A\u5143\u7D20\u3002</p><p>\u5F53 <code>key</code> \u4E0D\u5B58\u5728\u6216 <code>key</code> \u662F\u7A7A\u96C6\u65F6\uFF0C\u8FD4\u56DE <code>nil</code></p></blockquote><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; flushdb
OK
127.0.0.1:6379&gt; sadd course java c c++ python #course\u96C6\u5408\u4E2D\u6DFB\u52A04\u4E2A\u5143\u7D20
(integer) 4
127.0.0.1:6379&gt; smembers course #\u83B7\u53D6course\u96C6\u5408\u4E2D\u6240\u6709\u5143\u7D20
1) &quot;python&quot;
2) &quot;java&quot;
3) &quot;c++&quot;
4) &quot;c&quot;
127.0.0.1:6379&gt; spop course #\u968F\u673A\u5F39\u51FA1\u4E2A\u5143\u7D20\uFF0C\u88AB\u5F39\u51FA\u7684\u5143\u7D20\u4F1A\u88AB\u5220\u9664
&quot;c++&quot;
127.0.0.1:6379&gt; spop course 2 #\u968F\u673A\u5F39\u51FA2\u4E2A\u5143\u7D20
1) &quot;java&quot;
2) &quot;python&quot;
127.0.0.1:6379&gt; smembers course #\u8F93\u51FA\u5269\u4E0B\u7684\u5143\u7D20
1) &quot;c&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="srandmember-\u968F\u673A\u83B7\u53D6\u591A\u4E2A\u5143\u7D20-\u4E0D\u4F1A\u4ECE\u96C6\u5408\u4E2D\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#srandmember-\u968F\u673A\u83B7\u53D6\u591A\u4E2A\u5143\u7D20-\u4E0D\u4F1A\u4ECE\u96C6\u5408\u4E2D\u5220\u9664" aria-hidden="true">#</a> srandmember\uFF1A\u968F\u673A\u83B7\u53D6\u591A\u4E2A\u5143\u7D20\uFF0C\u4E0D\u4F1A\u4ECE\u96C6\u5408\u4E2D\u5220\u9664</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>srandmember &lt;key&gt; &lt;count&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u4ECEkey\u6307\u5B9A\u7684\u96C6\u5408\u4E2D\u968F\u673A\u8FD4\u56DEcount\u4E2A\u5143\u7D20\uFF0Ccount\u53EF\u4EE5\u4E0D\u6307\u5B9A\uFF0C\u9ED8\u8BA4\u503C\u662F1\u3002</p><p><strong>srandmember \u548C spop\u7684\u533A\u522B\uFF1A</strong></p><p>\u90FD\u53EF\u4EE5\u968F\u673A\u83B7\u53D6\u591A\u4E2A\u5143\u7D20\uFF0Csrandmember \u4E0D\u4F1A\u5220\u9664\u5143\u7D20\uFF0C\u800Cspop\u4F1A\u5220\u9664\u5143\u7D20\u3002</p><p><strong>\u8FD4\u56DE\u503C:</strong></p><p>\u53EA\u63D0\u4F9B <code>key</code> \u53C2\u6570\u65F6\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u5143\u7D20\uFF1B\u5982\u679C\u96C6\u5408\u4E3A\u7A7A\uFF0C\u8FD4\u56DE <code>nil</code> \u3002</p><p>\u5982\u679C\u63D0\u4F9B\u4E86 <code>count</code> \u53C2\u6570\uFF0C\u90A3\u4E48\u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\uFF1B\u5982\u679C\u96C6\u5408\u4E3A\u7A7A\uFF0C\u8FD4\u56DE\u7A7A\u6570\u7EC4\u3002</p></blockquote><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; flushdb #\u6E05\u7A7Adb\uFF0C\u65B9\u4FBF\u6D4B\u8BD5
OK
127.0.0.1:6379&gt; sadd course java c c++ python #course\u4E2D\u653E\u51655\u4E2A\u5143\u7D20
(integer) 4
127.0.0.1:6379&gt; smembers course #\u8F93\u51FAcourse\u96C6\u5408\u4E2D\u6240\u6709\u5143\u7D20
1) &quot;python&quot;
2) &quot;java&quot;
3) &quot;c++&quot;
4) &quot;c&quot;
127.0.0.1:6379&gt; srandmember course 3 #\u968F\u673A\u83B7\u53D63\u4E2A\u5143\u7D20\uFF0C\u5143\u7D20\u5E76\u4E0D\u4F1A\u88AB\u5220\u9664
1) &quot;python&quot;
2) &quot;c++&quot;
3) &quot;c&quot;
127.0.0.1:6379&gt; smembers course #\u8F93\u51FAcourse\u96C6\u5408\u4E2D\u6240\u6709\u5143\u7D20\uFF0C\u5143\u7D20\u4E2A\u6570\u672A\u53D8
1) &quot;python&quot;
2) &quot;java&quot;
3) &quot;c++&quot;
4) &quot;c&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="smove-\u5C06\u67D0\u4E2A\u539F\u521B\u4ECE\u4E00\u4E2A\u96C6\u5408\u79FB\u52A8\u5230\u53E6\u4E00\u4E2A\u96C6\u5408" tabindex="-1"><a class="header-anchor" href="#smove-\u5C06\u67D0\u4E2A\u539F\u521B\u4ECE\u4E00\u4E2A\u96C6\u5408\u79FB\u52A8\u5230\u53E6\u4E00\u4E2A\u96C6\u5408" aria-hidden="true">#</a> smove\uFF1A\u5C06\u67D0\u4E2A\u539F\u521B\u4ECE\u4E00\u4E2A\u96C6\u5408\u79FB\u52A8\u5230\u53E6\u4E00\u4E2A\u96C6\u5408</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>smove &lt;source&gt; &lt;destination&gt; member
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u5C06 <code>member</code> \u5143\u7D20\u4ECE <code>source</code> \u96C6\u5408\u79FB\u52A8\u5230 <code>destination</code> \u96C6\u5408\u3002</p><p>smove \u662F\u539F\u5B50\u6027\u64CD\u4F5C\u3002</p><p>\u5982\u679C <code>source</code> \u96C6\u5408\u4E0D\u5B58\u5728\u6216\u4E0D\u5305\u542B\u6307\u5B9A\u7684 <code>member</code> \u5143\u7D20\uFF0C\u5219 smove \u547D\u4EE4\u4E0D\u6267\u884C\u4EFB\u4F55\u64CD\u4F5C\uFF0C\u4EC5\u8FD4\u56DE <code>0</code> \u3002\u5426\u5219\uFF0C <code>member</code> \u5143\u7D20\u4ECE <code>source</code> \u96C6\u5408\u4E2D\u88AB\u79FB\u9664\uFF0C\u5E76\u6DFB\u52A0\u5230 <code>destination</code> \u96C6\u5408\u4E2D\u53BB\u3002</p><p>\u5F53 <code>destination</code> \u96C6\u5408\u5DF2\u7ECF\u5305\u542B <code>member</code> \u5143\u7D20\u65F6\uFF0Csmove \u547D\u4EE4\u53EA\u662F\u7B80\u5355\u5730\u5C06 <code>source</code> \u96C6\u5408\u4E2D\u7684 <code>member</code> \u5143\u7D20\u5220\u9664\u3002</p><p>\u5F53 <code>source</code> \u6216 <code>destination</code> \u4E0D\u662F\u96C6\u5408\u7C7B\u578B\u65F6\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u9519\u8BEF\u3002</p><p><strong>\u8FD4\u56DE\u503C:</strong></p><p>\u5982\u679C <code>member</code> \u5143\u7D20\u88AB\u6210\u529F\u79FB\u9664\uFF0C\u8FD4\u56DE <code>1</code> \u3002</p><p>\u5982\u679C <code>member</code> \u5143\u7D20\u4E0D\u662F <code>source</code> \u96C6\u5408\u7684\u6210\u5458\uFF0C\u5E76\u4E14\u6CA1\u6709\u4EFB\u4F55\u64CD\u4F5C\u5BF9 <code>destination</code> \u96C6\u5408\u6267\u884C\uFF0C\u90A3\u4E48\u8FD4\u56DE <code>0</code> \u3002</p></blockquote><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; flushdb #\u6E05\u7A7Adb\uFF0C\u65B9\u4FBF\u6D4B\u8BD5
OK
127.0.0.1:6379&gt; sadd course1 java php js #\u96C6\u5408course1\u4E2D\u653E\u51653\u4E2A\u5143\u7D20[java,php,js]
(integer) 3
127.0.0.1:6379&gt; sadd course2 c c++ #\u96C6\u5408course2\u4E2D\u653E\u51652\u4E2A\u5143\u7D20[c,c++]
(integer) 2
127.0.0.1:6379&gt; smove course1 course2 js #\u5C06course1\u4E2D\u7684js\u79FB\u52A8\u5230course2
(integer) 1
127.0.0.1:6379&gt; smembers course1 #\u8F93\u51FAcourse1\u4E2D\u7684\u5143\u7D20
1) &quot;java&quot;
2) &quot;php&quot;
127.0.0.1:6379&gt; smembers course2 #\u8F93\u51FAcourse2\u4E2D\u7684\u5143\u7D20
1) &quot;js&quot;
2) &quot;c++&quot;
3) &quot;c&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="sinter-\u53D6\u591A\u4E2A\u96C6\u5408\u7684\u4EA4\u96C6" tabindex="-1"><a class="header-anchor" href="#sinter-\u53D6\u591A\u4E2A\u96C6\u5408\u7684\u4EA4\u96C6" aria-hidden="true">#</a> sinter\uFF1A\u53D6\u591A\u4E2A\u96C6\u5408\u7684\u4EA4\u96C6</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sinter key [key ...]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; flushdb #\u6E05\u7A7Adb\uFF0C\u65B9\u4FBF\u6D4B\u8BD5
OK
127.0.0.1:6379&gt; sadd course1 java php js #\u96C6\u5408course1\u4E2D\u653E\u51653\u4E2A\u5143\u7D20[java,php,js]
(integer) 3
127.0.0.1:6379&gt; sadd course2 c c++ #\u96C6\u5408course2\u4E2D\u653E\u51652\u4E2A\u5143\u7D20[c,c++]
(integer) 2
127.0.0.1:6379&gt; smove course1 course2 js #\u5C06course1\u4E2D\u7684js\u79FB\u52A8\u5230course2
(integer) 1
127.0.0.1:6379&gt; smembers course1 #\u8F93\u51FAcourse1\u4E2D\u7684\u5143\u7D20
1) &quot;java&quot;
2) &quot;php&quot;
127.0.0.1:6379&gt; smembers course2 #\u8F93\u51FAcourse2\u4E2D\u7684\u5143\u7D20
1) &quot;js&quot;
2) &quot;c++&quot;
3) &quot;c&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="sinterstore-\u5C06\u591A\u4E2A\u96C6\u5408\u7684\u4EA4\u96C6\u653E\u5230\u4E00\u4E2A\u65B0\u7684\u96C6\u5408\u4E2D" tabindex="-1"><a class="header-anchor" href="#sinterstore-\u5C06\u591A\u4E2A\u96C6\u5408\u7684\u4EA4\u96C6\u653E\u5230\u4E00\u4E2A\u65B0\u7684\u96C6\u5408\u4E2D" aria-hidden="true">#</a> sinterstore\uFF1A\u5C06\u591A\u4E2A\u96C6\u5408\u7684\u4EA4\u96C6\u653E\u5230\u4E00\u4E2A\u65B0\u7684\u96C6\u5408\u4E2D</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sinterstore destination key [key ...]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u8FD9\u4E2A\u547D\u4EE4\u7C7B\u4F3C\u4E8E<code>sinter</code>\u547D\u4EE4\uFF0C\u4F46\u5B83\u5C06\u7ED3\u679C\u4FDD\u5B58\u5230 <code>destination</code> \u96C6\u5408\uFF0C\u800C\u4E0D\u662F\u7B80\u5355\u5730\u8FD4\u56DE\u7ED3\u679C\u96C6\u3002</p><p><strong>\u8FD4\u56DE\u503C:</strong></p><p>\u7ED3\u679C\u96C6\u4E2D\u7684\u6210\u5458\u6570\u91CF\u3002</p></blockquote><h4 id="sunion-\u53D6\u591A\u4E2A\u96C6\u5408\u7684\u5E76\u96C6-\u81EA\u52A8\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#sunion-\u53D6\u591A\u4E2A\u96C6\u5408\u7684\u5E76\u96C6-\u81EA\u52A8\u53BB\u91CD" aria-hidden="true">#</a> sunion\uFF1A\u53D6\u591A\u4E2A\u96C6\u5408\u7684\u5E76\u96C6\uFF0C\u81EA\u52A8\u53BB\u91CD</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sunion key [key ...]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; flushdb
OK
127.0.0.1:6379&gt; sadd course1 java php js #\u96C6\u5408course1\uFF1A[java,php,js]
(integer) 3
127.0.0.1:6379&gt; sadd course2 c c++ js #\u96C6\u5408course2\uFF1A[c,c++,js]
(integer) 3
127.0.0.1:6379&gt; sadd course3 js html #\u96C6\u5408course3\uFF1A[js,html]
(integer) 2
127.0.0.1:6379&gt; sunion course1 course2 course3 #\u8FD4\u56DE3\u4E2A\u96C6\u5408\u7684\u5E76\u96C6\uFF0C\u4F1A\u81EA\u52A8\u53BB\u91CD
1) &quot;php&quot;
2) &quot;js&quot;
3) &quot;java&quot;
4) &quot;html&quot;
5) &quot;c++&quot;
6) &quot;c&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="sunionstore-\u5C06\u591A\u4E2A\u96C6\u5408\u7684\u5E76\u96C6\u653E\u5230\u4E00\u4E2A\u65B0\u7684\u96C6\u5408\u4E2D" tabindex="-1"><a class="header-anchor" href="#sunionstore-\u5C06\u591A\u4E2A\u96C6\u5408\u7684\u5E76\u96C6\u653E\u5230\u4E00\u4E2A\u65B0\u7684\u96C6\u5408\u4E2D" aria-hidden="true">#</a> sunionstore\uFF1A\u5C06\u591A\u4E2A\u96C6\u5408\u7684\u5E76\u96C6\u653E\u5230\u4E00\u4E2A\u65B0\u7684\u96C6\u5408\u4E2D</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sinterstore destination key [key ...]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u8FD9\u4E2A\u547D\u4EE4\u7C7B\u4F3C\u4E8E sunion \u547D\u4EE4\uFF0C\u4F46\u5B83\u5C06\u7ED3\u679C\u4FDD\u5B58\u5230 <code>destination</code> \u96C6\u5408\uFF0C\u800C\u4E0D\u662F\u7B80\u5355\u5730\u8FD4\u56DE\u7ED3\u679C\u96C6\u3002</p><p><strong>\u8FD4\u56DE\u503C:</strong></p><p>\u7ED3\u679C\u96C6\u4E2D\u7684\u6210\u5458\u6570\u91CF\u3002</p></blockquote><h4 id="sdiff-\u53D6\u591A\u4E2A\u96C6\u5408\u7684\u5DEE\u96C6" tabindex="-1"><a class="header-anchor" href="#sdiff-\u53D6\u591A\u4E2A\u96C6\u5408\u7684\u5DEE\u96C6" aria-hidden="true">#</a> sdiff\uFF1A\u53D6\u591A\u4E2A\u96C6\u5408\u7684\u5DEE\u96C6</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SDIFF key [key ...]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u8FD4\u56DE\u4E00\u4E2A\u96C6\u5408\u7684\u5168\u90E8\u6210\u5458\uFF0C\u8BE5\u96C6\u5408\u662F\u6240\u6709\u7ED9\u5B9A\u96C6\u5408\u4E4B\u95F4\u7684\u5DEE\u96C6\u3002</p><p>\u4E0D\u5B58\u5728\u7684 <code>key</code> \u88AB\u89C6\u4E3A\u7A7A\u96C6\u3002</p></blockquote><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; flushdb
OK
127.0.0.1:6379&gt; sadd course1 java php js #\u96C6\u5408course1\uFF1A[java,php,js]
(integer) 3
127.0.0.1:6379&gt; sadd course2 c c++ js #\u96C6\u5408course2\uFF1A[c,c++,js]
(integer) 3
127.0.0.1:6379&gt; sadd course3 js html #\u96C6\u5408course3\uFF1A[js,html]
(integer) 2
127.0.0.1:6379&gt; sunion course1 course2 course3 #\u8FD4\u56DE3\u4E2A\u96C6\u5408\u7684\u5E76\u96C6\uFF0C\u4F1A\u81EA\u52A8\u53BB\u91CD
1) &quot;php&quot;
2) &quot;js&quot;
3) &quot;java&quot;
4) &quot;html&quot;
5) &quot;c++&quot;
6) &quot;c&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="sdiffstore-\u5C06\u591A\u4E2A\u96C6\u5408\u7684\u5DEE\u96C6\u653E\u5230\u4E00\u4E2A\u65B0\u7684\u96C6\u5408\u4E2D" tabindex="-1"><a class="header-anchor" href="#sdiffstore-\u5C06\u591A\u4E2A\u96C6\u5408\u7684\u5DEE\u96C6\u653E\u5230\u4E00\u4E2A\u65B0\u7684\u96C6\u5408\u4E2D" aria-hidden="true">#</a> sdiffstore\uFF1A\u5C06\u591A\u4E2A\u96C6\u5408\u7684\u5DEE\u96C6\u653E\u5230\u4E00\u4E2A\u65B0\u7684\u96C6\u5408\u4E2D</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sdiffstore destination key [key ...]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u8FD9\u4E2A\u547D\u4EE4\u7C7B\u4F3C\u4E8E sdiff \u547D\u4EE4\uFF0C\u4F46\u5B83\u5C06\u7ED3\u679C\u4FDD\u5B58\u5230 <code>destination</code> \u96C6\u5408\uFF0C\u800C\u4E0D\u662F\u7B80\u5355\u5730\u8FD4\u56DE\u7ED3\u679C\u96C6\u3002</p><p><strong>\u8FD4\u56DE\u503C:</strong></p><p>\u7ED3\u679C\u96C6\u4E2D\u7684\u6210\u5458\u6570\u91CF\u3002</p></blockquote><h3 id="_3-\u6570\u636E\u7ED3\u6784-2" tabindex="-1"><a class="header-anchor" href="#_3-\u6570\u636E\u7ED3\u6784-2" aria-hidden="true">#</a> 3.\u6570\u636E\u7ED3\u6784</h3><p>set\u6570\u636E\u7ED3\u6784\u662F\u5B57\u5178\uFF0C\u5B57\u5178\u662F\u7528hash\u8868\u5B9E\u73B0\u7684\u3002</p><p>Java\u4E2D\u7684HashSet\u7684\u5185\u90E8\u5B9E\u73B0\u4F7F\u7528HashMap\uFF0C\u53EA\u4E0D\u8FC7\u6240\u6709\u7684value\u90FD\u6307\u5411\u540C\u4E00\u4E2A\u5BF9\u8C61\u3002</p><p>Redis\u7684set\u7ED3\u6784\u4E5F\u662F\u4E00\u6837\u7684\uFF0C\u5B83\u7684\u5185\u90E8\u4E5F\u4F7F\u7528hash\u7ED3\u6784\uFF0C\u6240\u6709\u7684value\u90FD\u6307\u5411\u540C\u4E00\u4E2A\u5185\u90E8\u503C\u3002</p><h2 id="_5-hash" tabindex="-1"><a class="header-anchor" href="#_5-hash" aria-hidden="true">#</a> 5-Hash</h2><h3 id="_1-\u7B80\u4ECB-3" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB-3" aria-hidden="true">#</a> 1.\u7B80\u4ECB</h3><p>Redis hash\u662F\u4E00\u4E2A\u952E\u503C\u5BF9\u96C6\u5408\u3002</p><p>Redis hash\u662F\u4E00\u4E2Astring\u7C7B\u578B\u7684field\u548Cvalue\u7684\u6620\u5C04\u8868\uFF0Chash\u7279\u522B\u9002\u5408\u7528\u4E8E\u5B58\u50A8\u5BF9\u8C61\u3002</p><p>\u7C7B\u4F3C\u4E8Ejava\u91CC\u9762\u7684Map&lt;String,Object&gt;</p><h3 id="_2-\u5E38\u7528\u547D\u4EE4-3" tabindex="-1"><a class="header-anchor" href="#_2-\u5E38\u7528\u547D\u4EE4-3" aria-hidden="true">#</a> 2.\u5E38\u7528\u547D\u4EE4</h3><h4 id="hset-\u8BBE\u7F6E\u591A\u4E2Afield\u7684\u503C" tabindex="-1"><a class="header-anchor" href="#hset-\u8BBE\u7F6E\u591A\u4E2Afield\u7684\u503C" aria-hidden="true">#</a> hset\uFF1A\u8BBE\u7F6E\u591A\u4E2Afield\u7684\u503C</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>hset key field value [field value ...]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u5C06\u54C8\u5E0C\u8868 <code>key</code> \u4E2D\u7684\u57DF <code>field</code> \u7684\u503C\u8BBE\u4E3A <code>value</code> \u3002</p><p>\u5982\u679C <code>key</code> \u4E0D\u5B58\u5728\uFF0C\u4E00\u4E2A\u65B0\u7684\u54C8\u5E0C\u8868\u88AB\u521B\u5EFA\u5E76\u8FDB\u884C hset \u64CD\u4F5C\u3002</p><p>\u5982\u679C\u57DF <code>field</code> \u5DF2\u7ECF\u5B58\u5728\u4E8E\u54C8\u5E0C\u8868\u4E2D\uFF0C\u65E7\u503C\u5C06\u88AB\u8986\u76D6\u3002</p><p><strong>\u8FD4\u56DE\u503C\uFF1A</strong></p><p>\u5982\u679C <code>field</code> \u662F\u54C8\u5E0C\u8868\u4E2D\u7684\u4E00\u4E2A\u65B0\u5EFA\u57DF\uFF0C\u5E76\u4E14\u503C\u8BBE\u7F6E\u6210\u529F\uFF0C\u8FD4\u56DE <code>1</code> \u3002</p><p>\u5982\u679C\u54C8\u5E0C\u8868\u4E2D\u57DF <code>field</code> \u5DF2\u7ECF\u5B58\u5728\u4E14\u65E7\u503C\u5DF2\u88AB\u65B0\u503C\u8986\u76D6\uFF0C\u8FD4\u56DE <code>0</code> \u3002</p></blockquote><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; flushdb #\u6E05\u7A7Adb\uFF0C\u65B9\u4FBF\u6D4B\u8BD5
OK
127.0.0.1:6379&gt; hset user name ready age 30 #\u54C8\u5E0C\u8868user\u4E2D\u8BBE\u7F6E2\u4E2A\u57DF\uFF1Aname\u548Cage\uFF0Cname\u7684\u503C\u4E3Aready\uFF0Cage\u7684\u503C\u4E3A30
(integer) 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="hget-\u83B7\u53D6\u6307\u5B9Afiled\u7684\u503C" tabindex="-1"><a class="header-anchor" href="#hget-\u83B7\u53D6\u6307\u5B9Afiled\u7684\u503C" aria-hidden="true">#</a> hget\uFF1A\u83B7\u53D6\u6307\u5B9Afiled\u7684\u503C</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>hget key field
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; flushdb #\u6E05\u7A7Adb\uFF0C\u65B9\u4FBF\u6D4B\u8BD5
OK
127.0.0.1:6379&gt; hset user name ready age 30 #\u54C8\u5E0C\u8868user\u4E2D\u8BBE\u7F6E2\u4E2A\u57DF\uFF1Aname\u548Cage\uFF0Cname\u7684\u503C\u4E3Aready\uFF0Cage\u7684\u503C\u4E3A30
(integer) 2
127.0.0.1:6379&gt; hget user name #\u83B7\u53D6user\u4E2D\u7684name
&quot;ready&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="hgetall-\u8FD4\u56DEhash\u8868\u6240\u6709\u7684\u57DF\u548C\u503C" tabindex="-1"><a class="header-anchor" href="#hgetall-\u8FD4\u56DEhash\u8868\u6240\u6709\u7684\u57DF\u548C\u503C" aria-hidden="true">#</a> hgetall\uFF1A\u8FD4\u56DEhash\u8868\u6240\u6709\u7684\u57DF\u548C\u503C</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>hgetall key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; flushdb #\u6E05\u7A7Adb\uFF0C\u65B9\u4FBF\u6D4B\u8BD5
OK
127.0.0.1:6379&gt; hset user name ready age 30 #\u54C8\u5E0C\u8868user\u4E2D\u8BBE\u7F6E2\u4E2A\u57DF\uFF1Aname\u548Cage\uFF0Cname\u7684\u503C\u4E3Aready\uFF0Cage\u7684\u503C\u4E3A30
(integer) 2
127.0.0.1:6379&gt; hgetall user #\u83B7\u53D6user\u6240\u6709\u4FE1\u606F
1) &quot;name&quot;
2) &quot;ready&quot;
3) &quot;age&quot;
4) &quot;30&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="hmset-\u548Chset\u7C7B\u4F3C-\u5DF2\u5F03\u7528" tabindex="-1"><a class="header-anchor" href="#hmset-\u548Chset\u7C7B\u4F3C-\u5DF2\u5F03\u7528" aria-hidden="true">#</a> hmset\uFF1A\u548Chset\u7C7B\u4F3C\uFF08\u5DF2\u5F03\u7528\uFF09</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>hmset key field value [field value ...]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="hexists-\u5224\u65AD\u7ED9\u5B9A\u7684field\u662F\u5426\u5B58\u5728-1-\u5B58\u5728-0-\u4E0D\u5B58\u5728" tabindex="-1"><a class="header-anchor" href="#hexists-\u5224\u65AD\u7ED9\u5B9A\u7684field\u662F\u5426\u5B58\u5728-1-\u5B58\u5728-0-\u4E0D\u5B58\u5728" aria-hidden="true">#</a> hexists\uFF1A\u5224\u65AD\u7ED9\u5B9A\u7684field\u662F\u5426\u5B58\u5728\uFF0C1\uFF1A\u5B58\u5728\uFF0C0\uFF1A\u4E0D\u5B58\u5728</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>hexists key field
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u67E5\u770B\u54C8\u5E0C\u8868 <code>key</code> \u4E2D\uFF0C\u7ED9\u5B9A\u57DF <code>field</code> \u662F\u5426\u5B58\u5728\u3002</p><p><strong>\u8FD4\u56DE\u503C\uFF1A</strong></p><p>\u5982\u679C\u54C8\u5E0C\u8868\u542B\u6709\u7ED9\u5B9A\u57DF\uFF0C\u8FD4\u56DE <code>1</code> \u3002</p><p>\u5982\u679C\u54C8\u5E0C\u8868\u4E0D\u542B\u6709\u7ED9\u5B9A\u57DF\uFF0C\u6216 <code>key</code> \u4E0D\u5B58\u5728\uFF0C\u8FD4\u56DE <code>0</code> \u3002</p></blockquote><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; flushdb #\u6E05\u7A7Adb\uFF0C\u65B9\u4FBF\u6D4B\u8BD5
OK
127.0.0.1:6379&gt; hset user name ready age 30 #\u54C8\u5E0C\u8868user\u4E2D\u8BBE\u7F6E2\u4E2A\u57DF\uFF1Aname\u548Cage\uFF0Cname\u7684\u503C\u4E3Aready\uFF0Cage\u7684\u503C\u4E3A30
(integer) 2
127.0.0.1:6379&gt; hexists user name #user\u4E2D\u5B58\u5728name\u57DF
(integer) 1
127.0.0.1:6379&gt; hexists user address #user\u4E2D\u4E0D\u5B58\u5728address\u57DF\uFF0C\u8FD4\u56DE0
(integer) 0
127.0.0.1:6379&gt; hexists user1 address #user1\u8FD9\u4E2Akey\u4E0D\u5B58\u5728\uFF0C\u8FD4\u56DE0
(integer) 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="hkeys-\u5217\u51FA\u6240\u6709\u7684filed" tabindex="-1"><a class="header-anchor" href="#hkeys-\u5217\u51FA\u6240\u6709\u7684filed" aria-hidden="true">#</a> hkeys\uFF1A\u5217\u51FA\u6240\u6709\u7684filed</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>hkeys key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; flushdb #\u6E05\u7A7Adb\uFF0C\u65B9\u4FBF\u6D4B\u8BD5
OK
127.0.0.1:6379&gt; hset user name ready age 30 #\u54C8\u5E0C\u8868user\u4E2D\u8BBE\u7F6E2\u4E2A\u57DF\uFF1Aname\u548Cage\uFF0Cname\u7684\u503C\u4E3Aready\uFF0Cage\u7684\u503C\u4E3A30
(integer) 2
127.0.0.1:6379&gt; hkeys user #\u83B7\u53D6user\u4E2D\u7684\u6240\u6709filed
1) &quot;name&quot;
2) &quot;age&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="hvals-\u5217\u51FA\u6240\u6709\u7684value" tabindex="-1"><a class="header-anchor" href="#hvals-\u5217\u51FA\u6240\u6709\u7684value" aria-hidden="true">#</a> hvals\uFF1A\u5217\u51FA\u6240\u6709\u7684value</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>hvals key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; flushdb #\u6E05\u7A7Adb\uFF0C\u65B9\u4FBF\u6D4B\u8BD5
OK
127.0.0.1:6379&gt; hset user name ready age 30 #\u54C8\u5E0C\u8868user\u4E2D\u8BBE\u7F6E2\u4E2A\u57DF\uFF1Aname\u548Cage\uFF0Cname\u7684\u503C\u4E3Aready\uFF0Cage\u7684\u503C\u4E3A30
(integer) 2
127.0.0.1:6379&gt; hvals user #\u83B7\u53D6user\u4E2D\u7684\u6240\u6709filed\u7684\u503C\u5217\u8868
1) &quot;ready&quot;
2) &quot;30&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="hlen-\u8FD4\u56DEfiled\u7684\u6570\u91CF" tabindex="-1"><a class="header-anchor" href="#hlen-\u8FD4\u56DEfiled\u7684\u6570\u91CF" aria-hidden="true">#</a> hlen\uFF1A\u8FD4\u56DEfiled\u7684\u6570\u91CF</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>HLEN key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u8FD4\u56DE\u54C8\u5E0C\u8868 <code>key</code> \u4E2D\u57DF\u7684\u6570\u91CF\u3002</p><p><strong>\u8FD4\u56DE\u503C\uFF1A</strong></p><p>\u54C8\u5E0C\u8868\u4E2D\u57DF\u7684\u6570\u91CF\u3002</p><p>\u5F53 <code>key</code> \u4E0D\u5B58\u5728\u65F6\uFF0C\u8FD4\u56DE <code>0</code> \u3002</p></blockquote><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; flushdb #\u6E05\u7A7Adb\uFF0C\u65B9\u4FBF\u6D4B\u8BD5
OK
127.0.0.1:6379&gt; hset user name ready age 30 #\u54C8\u5E0C\u8868user\u4E2D\u8BBE\u7F6E2\u4E2A\u57DF\uFF1Aname\u548Cage\uFF0Cname\u7684\u503C\u4E3Aready\uFF0Cage\u7684\u503C\u4E3A30
(integer) 2
127.0.0.1:6379&gt; hlen user
(integer) 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="hincrby-filed\u7684\u503C\u52A0\u4E0A\u6307\u5B9A\u7684\u589E\u91CF" tabindex="-1"><a class="header-anchor" href="#hincrby-filed\u7684\u503C\u52A0\u4E0A\u6307\u5B9A\u7684\u589E\u91CF" aria-hidden="true">#</a> hincrby\uFF1Afiled\u7684\u503C\u52A0\u4E0A\u6307\u5B9A\u7684\u589E\u91CF</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>hincrby key field increment
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u4E3A\u54C8\u5E0C\u8868 key \u4E2D\u7684\u57DF field \u7684\u503C\u52A0\u4E0A\u589E\u91CF increment \u3002</p><p>\u589E\u91CF\u4E5F\u53EF\u4EE5\u4E3A\u8D1F\u6570\uFF0C\u76F8\u5F53\u4E8E\u5BF9\u7ED9\u5B9A\u57DF\u8FDB\u884C\u51CF\u6CD5\u64CD\u4F5C\u3002</p><p>\u5982\u679C key \u4E0D\u5B58\u5728\uFF0C\u4E00\u4E2A\u65B0\u7684\u54C8\u5E0C\u8868\u88AB\u521B\u5EFA\u5E76\u6267\u884C HINCRBY \u547D\u4EE4\u3002</p><p>\u5982\u679C\u57DF field \u4E0D\u5B58\u5728\uFF0C\u90A3\u4E48\u5728\u6267\u884C\u547D\u4EE4\u524D\uFF0C\u57DF\u7684\u503C\u88AB\u521D\u59CB\u5316\u4E3A 0 \u3002</p><p>\u5BF9\u4E00\u4E2A\u50A8\u5B58\u5B57\u7B26\u4E32\u503C\u7684\u57DF field \u6267\u884C HINCRBY \u547D\u4EE4\u5C06\u9020\u6210\u4E00\u4E2A\u9519\u8BEF\u3002</p><p><strong>\u8FD4\u56DE\u503C\uFF1A</strong></p><p>\u6267\u884C hincrby \u547D\u4EE4\u4E4B\u540E\uFF0C\u54C8\u5E0C\u8868 <code>key</code> \u4E2D\u57DF <code>field</code> \u7684\u503C\u3002</p></blockquote><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; flushdb #\u6E05\u7A7Adb\uFF0C\u65B9\u4FBF\u6D4B\u8BD5
OK
127.0.0.1:6379&gt; hset siteInfo site itsoku.com pv 1000 #hash\u8868siteInfo\u4E2D\u67092\u4E2A\u57DF\uFF1A{site:&quot;itsoku.com&quot;,pv:1000}
(integer) 2
127.0.0.1:6379&gt; hget siteInfo pv #\u83B7\u53D6siteInfo\u4E2Dpv\u7684\u503C
&quot;1000&quot;
127.0.0.1:6379&gt; hincrby siteInfo pv 10 #siteInfo\u4E2D\u7684pv\u503C\u589E\u52A010
(integer) 1010
127.0.0.1:6379&gt; hget siteInfo pv #\u83B7\u53D6siteInfo\u4E2D\u7684pv
&quot;1010&quot;
127.0.0.1:6379&gt; hincrby siteInfo uv 500 #siteInfo\u4E2D\u7684uv\u503C\u589E\u52A0500\uFF0Cuv\u8FD9\u4E2A\u57DF\u4E0D\u5B58\u5728\uFF0C\u5219\u4F1A\u5148\u6DFB\u52A0\uFF0C\u7136\u540E\u518D\u6267\u884Chincrby
(integer) 500
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="hsetnx-\u5F53filed\u4E0D\u5B58\u5728\u7684\u65F6\u5019-\u8BBE\u7F6Efiled\u7684\u503C" tabindex="-1"><a class="header-anchor" href="#hsetnx-\u5F53filed\u4E0D\u5B58\u5728\u7684\u65F6\u5019-\u8BBE\u7F6Efiled\u7684\u503C" aria-hidden="true">#</a> hsetnx\uFF1A\u5F53filed\u4E0D\u5B58\u5728\u7684\u65F6\u5019\uFF0C\u8BBE\u7F6Efiled\u7684\u503C</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>hsetnx key field value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u5C06\u54C8\u5E0C\u8868 <code>key</code> \u4E2D\u7684\u57DF <code>field</code> \u7684\u503C\u8BBE\u7F6E\u4E3A <code>value</code> \uFF0C\u5F53\u4E14\u4EC5\u5F53\u57DF <code>field</code> \u4E0D\u5B58\u5728\u3002</p><p>\u82E5\u57DF <code>field</code> \u5DF2\u7ECF\u5B58\u5728\uFF0C\u8BE5\u64CD\u4F5C\u65E0\u6548\u3002</p><p>\u5982\u679C <code>key</code> \u4E0D\u5B58\u5728\uFF0C\u4E00\u4E2A\u65B0\u54C8\u5E0C\u8868\u88AB\u521B\u5EFA\u5E76\u6267\u884C hsetnx \u547D\u4EE4\u3002</p><p><strong>\u8FD4\u56DE\u503C\uFF1A</strong></p><p>\u8BBE\u7F6E\u6210\u529F\uFF0C\u8FD4\u56DE <code>1</code> \u3002</p><p>\u5982\u679C\u7ED9\u5B9A\u57DF\u5DF2\u7ECF\u5B58\u5728\u4E14\u6CA1\u6709\u64CD\u4F5C\u88AB\u6267\u884C\uFF0C\u8FD4\u56DE <code>0</code> \u3002</p></blockquote><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; flushdb #\u6E05\u7A7Adb\uFF0C\u65B9\u4FBF\u6D4B\u8BD5
OK
127.0.0.1:6379&gt; hset user name ready age 30 #\u521B\u5EFAuser\uFF0C\u5305\u542B2\u4E2A\u57DF\uFF1Aname\u3001age
(integer) 2
127.0.0.1:6379&gt; hsetnx user name tom #name\u5DF2\u5B58\u5728\uFF0C\u8BBE\u7F6E\u5931\u8D25\uFF0C\u8FD4\u56DE0
(integer) 0
127.0.0.1:6379&gt; hget user name #name\u4F9D\u65E7\u662Fready
&quot;ready&quot;
127.0.0.1:6379&gt; hsetnx user address shanghai #address\u4E0D\u5B58\u5728\uFF0C\u8BBE\u7F6E\u6210\u529F
(integer) 1
127.0.0.1:6379&gt; hget user address #\u8F93\u51FAaddress\u7684\u503C
&quot;shanghai&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-\u6570\u636E\u7ED3\u6784-3" tabindex="-1"><a class="header-anchor" href="#_3-\u6570\u636E\u7ED3\u6784-3" aria-hidden="true">#</a> 3.\u6570\u636E\u7ED3\u6784</h3><p>Hash\u7C7B\u578B\u5BF9\u5E94\u7684\u6570\u636E\u7ED3\u6784\u662F2\u4E2D\uFF1Aziplist\uFF08\u538B\u7F29\u5217\u8868\uFF09\uFF0Chashtable\uFF08\u54C8\u5E0C\u8868\uFF09\u3002</p><p>\u5F53field-value\u957F\u5EA6\u8F83\u77ED\u4E2A\u6570\u8F83\u5C11\u65F6\uFF0C\u4F7F\u7528ziplist\uFF0C\u5426\u5219\u4F7F\u7528hashtable\u3002</p><h2 id="_6-zset" tabindex="-1"><a class="header-anchor" href="#_6-zset" aria-hidden="true">#</a> 6-Zset</h2><h3 id="_1-\u7B80\u4ECB-4" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB-4" aria-hidden="true">#</a> 1.\u7B80\u4ECB</h3><p>redis\u6709\u5E8F\u96C6\u5408zset\u4E0E\u666E\u901A\u96C6\u5408set\u975E\u5E38\u76F8\u4F3C\uFF0C\u662F\u4E00\u4E2A\u6CA1\u6709\u91CD\u590D\u5143\u7D20\u7684\u5B57\u7B26\u4E32\u96C6\u5408\u3002</p><p>\u4E0D\u540C\u4E4B\u5904\u662F\u6709\u5E8F\u96C6\u5408\u7684\u6BCF\u4E2A\u6210\u5458\u90FD\u5173\u8054\u4E86\u4E00\u4E2A\u8BC4\u5206\uFF08score\uFF09\uFF0C\u8FD9\u4E2A\u8BC4\u5206\uFF08score\uFF09\u88AB\u7528\u6765\u6309\u7167\u4ECE\u6700\u4F4E\u5206\u5230\u6700\u9AD8\u5206\u7684\u65B9\u5F0F\u6392\u5E8F\u96C6\u5408\u4E2D\u7684\u6210\u5458\u3002</p><p>\u96C6\u5408\u7684\u6210\u5458\u662F\u552F\u4E00\u7684\uFF0C\u4F46\u662F\u8BC4\u5206\u662F\u53EF\u4EE5\u91CD\u590D\u7684\u3002</p><p>\u56E0\u4E3A\u5143\u7D20\u662F\u6709\u5E8F\u7684\uFF0C\u6240\u4EE5\u4F60\u53EF\u4EE5\u5F88\u5FEB\u7684\u6839\u636E\u8BC4\u5206\uFF08score\uFF09\u6216\u8005\u6B21\u5E8F\uFF08position\uFF09\u6765\u83B7\u53D6\u4E00\u4E2A\u8303\u56F4\u7684\u5143\u7D20\u3002</p><p>\u8BBF\u95EE\u6709\u5E8F\u96C6\u5408\u4E2D\u7684\u4E2D\u95F4\u5143\u7D20\u4E5F\u662F\u975E\u5E38\u5FEB\u7684\uFF0C\u56E0\u4E3A\u4F60\u80FD\u591F\u4F7F\u7528\u6709\u5E8F\u96C6\u5408\u4F5C\u4E3A\u4E00\u4E2A\u6CA1\u6709\u91CD\u590D\u6210\u5458\u4F60\u7684\u667A\u80FD\u5217\u8868\u3002</p><h3 id="_2-\u5E38\u7528\u547D\u4EE4-4" tabindex="-1"><a class="header-anchor" href="#_2-\u5E38\u7528\u547D\u4EE4-4" aria-hidden="true">#</a> 2.\u5E38\u7528\u547D\u4EE4</h3><h4 id="zadd-\u6DFB\u52A0\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#zadd-\u6DFB\u52A0\u5143\u7D20" aria-hidden="true">#</a> zadd\uFF1A\u6DFB\u52A0\u5143\u7D20</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>zadd &lt;key&gt; &lt;score1&gt; &lt;member1&gt; &lt;score2&gt; &lt;member2&gt; ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u5C06\u4E00\u4E2A\u6216\u591A\u4E2A <code>member</code> \u5143\u7D20\u53CA\u5176 <code>score</code> \u503C\u52A0\u5165\u5230\u6709\u5E8F\u96C6 <code>key</code> \u5F53\u4E2D\u3002</p><p>\u5982\u679C\u67D0\u4E2A <code>member</code> \u5DF2\u7ECF\u662F\u6709\u5E8F\u96C6\u7684\u6210\u5458\uFF0C\u90A3\u4E48\u66F4\u65B0\u8FD9\u4E2A <code>member</code> \u7684 <code>score</code> \u503C\uFF0C\u5E76\u901A\u8FC7\u91CD\u65B0\u63D2\u5165\u8FD9\u4E2A <code>member</code> \u5143\u7D20\uFF0C\u6765\u4FDD\u8BC1\u8BE5 <code>member</code> \u5728\u6B63\u786E\u7684\u4F4D\u7F6E\u4E0A\u3002</p><p><code>score</code> \u503C\u53EF\u4EE5\u662F\u6574\u6570\u503C\u6216\u53CC\u7CBE\u5EA6\u6D6E\u70B9\u6570\u3002</p><p>\u5982\u679C <code>key</code> \u4E0D\u5B58\u5728\uFF0C\u5219\u521B\u5EFA\u4E00\u4E2A\u7A7A\u7684\u6709\u5E8F\u96C6\u5E76\u6267\u884C zadd \u64CD\u4F5C\u3002</p><p>\u5F53 <code>key</code> \u5B58\u5728\u4F46\u4E0D\u662F\u6709\u5E8F\u96C6\u7C7B\u578B\u65F6\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u9519\u8BEF\u3002</p><p><strong>\u8FD4\u56DE\u503C:</strong></p><p>\u88AB\u6210\u529F\u6DFB\u52A0\u7684\u65B0\u6210\u5458\u7684\u6570\u91CF\uFF0C\u4E0D\u5305\u62EC\u90A3\u4E9B\u88AB\u66F4\u65B0\u7684\u3001\u5DF2\u7ECF\u5B58\u5728\u7684\u6210\u5458\u3002</p></blockquote><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; flushdb #\u6E05\u7A7Adb\uFF0C\u65B9\u4FBF\u6D4B\u8BD5
OK
127.0.0.1:6379&gt; zadd topn 100 java 80 c 90 c++ 50 php 70 js #\u521B\u5EFA\u540D\u79F0\u4E3Atopn\u7684zset\uFF0C\u6DFB\u52A0\u4E865\u4E2A\u5143\u7D20
(integer) 5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="zrange-score\u5347\u5E8F-\u83B7\u53D6\u6307\u5B9A\u7D22\u5F15\u8303\u56F4\u7684\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#zrange-score\u5347\u5E8F-\u83B7\u53D6\u6307\u5B9A\u7D22\u5F15\u8303\u56F4\u7684\u5143\u7D20" aria-hidden="true">#</a> zrange\uFF1Ascore\u5347\u5E8F\uFF0C\u83B7\u53D6\u6307\u5B9A\u7D22\u5F15\u8303\u56F4\u7684\u5143\u7D20</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>zrange key start top [withscores]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><ul><li><p>\u8FD4\u56DE\u5B58\u50A8\u5728\u6709\u5E8F\u96C6\u5408<code>key</code>\u4E2D\u7684\u6307\u5B9A\u8303\u56F4\u7684\u5143\u7D20\u3002 \u8FD4\u56DE\u7684\u5143\u7D20\u53EF\u4EE5\u8BA4\u4E3A\u662F\u6309score\u4ECE\u6700\u4F4E\u5230\u6700\u9AD8\u6392\u5217\uFF0C\u5982\u679C\u5F97\u5206\u76F8\u540C\uFF0C\u5C06\u6309\u5B57\u5178\u6392\u5E8F\u3002</p></li><li><p>\u4E0B\u6807\u53C2\u6570 <code>start</code> \u548C <code>stop</code> \u90FD\u4EE5 <code>0</code> \u4E3A\u5E95\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4EE5 <code>0</code> \u8868\u793A\u6709\u5E8F\u96C6\u7B2C\u4E00\u4E2A\u6210\u5458\uFF0C\u4EE5 <code>1</code> \u8868\u793A\u6709\u5E8F\u96C6\u7B2C\u4E8C\u4E2A\u6210\u5458\uFF0C\u4EE5\u6B64\u7C7B\u63A8\u3002</p><p>\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528\u8D1F\u6570\u4E0B\u6807\uFF0C\u4EE5 <code>-1</code> \u8868\u793A\u6700\u540E\u4E00\u4E2A\u6210\u5458\uFF0C <code>-2</code> \u8868\u793A\u5012\u6570\u7B2C\u4E8C\u4E2A\u6210\u5458\uFF0C\u4EE5\u6B64\u7C7B\u63A8\u3002</p></li><li><p>zrange key 0 -1\uFF1A\u53EF\u4EE5\u83B7\u53D6\u6240\u6709\u5143\u7D20</p></li><li><p>withscores\uFF1A\u8BA9\u6210\u5458\u548C\u5B83\u7684 <code>score</code> \u503C\u4E00\u5E76\u8FD4\u56DE\uFF0C\u8FD4\u56DE\u5217\u8868\u4EE5 <code>value1,score1, ..., valueN,scoreN</code> \u7684\u683C\u5F0F\u8868\u793A</p></li></ul><p><strong>\u53EF\u7528\u7248\u672C\uFF1A</strong></p><p>&gt;= 1.2.0</p><p><strong>\u65F6\u95F4\u590D\u6742\u5EA6:</strong></p><p>O(log(N)+M)\uFF0C <code>N</code> \u4E3A\u6709\u5E8F\u96C6\u7684\u57FA\u6570\uFF0C\u800C <code>M</code> \u4E3A\u7ED3\u679C\u96C6\u7684\u57FA\u6570\u3002</p><p><strong>\u8FD4\u56DE\u503C:</strong></p><p>\u6307\u5B9A\u533A\u95F4\u5185\uFF0C\u5E26\u6709 <code>score</code> \u503C(\u53EF\u9009)\u7684\u6709\u5E8F\u96C6\u6210\u5458\u7684\u5217\u8868\u3002</p></blockquote><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; flushdb #\u6E05\u7A7Adb\uFF0C\u65B9\u4FBF\u6D4B\u8BD5
OK
127.0.0.1:6379&gt; zadd topn 100 java 80 c 90 c++ 50 php 70 js #\u521B\u5EFA\u540D\u79F0\u4E3Atopn\u7684zset\uFF0C\u6DFB\u52A0\u4E865\u4E2A\u5143\u7D20
(integer) 5
127.0.0.1:6379&gt; zrange topn 0 -1 #\u6309score\u5347\u5E8F\uFF0C\u8FD4\u56DEtopn\u4E2D\u6240\u6709\u5143\u7D20\u7684\u503C
1) &quot;php&quot;
2) &quot;js&quot;
3) &quot;c&quot;
4) &quot;c++&quot;
5) &quot;java&quot;
127.0.0.1:6379&gt; zrange topn 0 -1 withscores #\u6309score\u5347\u5E8F\uFF0C\u8FD4\u56DE\u6240\u6709\u5143\u7D20\u7684\u503C\u4EE5\u53CAscore
 1) &quot;php&quot;
 2) &quot;50&quot;
 3) &quot;js&quot;
 4) &quot;70&quot;
 5) &quot;c&quot;
 6) &quot;80&quot;
 7) &quot;c++&quot;
 8) &quot;90&quot;
 9) &quot;java&quot;
10) &quot;100&quot;
127.0.0.1:6379&gt; zrange topn 2 4 #\u8FD4\u56DE\u7D22\u5F15\u8303\u56F4[2,4]\u5185\u76843\u4E2A\u5143\u7D20
1) &quot;c&quot;
2) &quot;c++&quot;
3) &quot;java&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="zrevrange-score\u964D\u5E8F-\u83B7\u53D6\u6307\u5B9A\u7D22\u5F15\u8303\u56F4\u7684\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#zrevrange-score\u964D\u5E8F-\u83B7\u53D6\u6307\u5B9A\u7D22\u5F15\u8303\u56F4\u7684\u5143\u7D20" aria-hidden="true">#</a> zrevrange\uFF1Ascore\u964D\u5E8F\uFF0C\u83B7\u53D6\u6307\u5B9A\u7D22\u5F15\u8303\u56F4\u7684\u5143\u7D20</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>zrevrange key start stop [WITHSCORES]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><ul><li><p>\u8FD4\u56DE\u5B58\u50A8\u5728\u6709\u5E8F\u96C6\u5408<code>key</code>\u4E2D\u7684\u6307\u5B9A\u8303\u56F4\u7684\u5143\u7D20\u3002 \u8FD4\u56DE\u7684\u5143\u7D20\u53EF\u4EE5\u8BA4\u4E3A\u662F\u6309score\u6700\u9AD8\u5230\u6700\u4F4E\u6392\u5217\uFF0C \u5982\u679C\u5F97\u5206\u76F8\u540C\uFF0C\u5C06\u6309\u5B57\u5178\u6392\u5E8F\u3002</p></li><li><p>\u4E0B\u6807\u53C2\u6570 <code>start</code> \u548C <code>stop</code> \u90FD\u4EE5 <code>0</code> \u4E3A\u5E95\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4EE5 <code>0</code> \u8868\u793A\u6709\u5E8F\u96C6\u7B2C\u4E00\u4E2A\u6210\u5458\uFF0C\u4EE5 <code>1</code> \u8868\u793A\u6709\u5E8F\u96C6\u7B2C\u4E8C\u4E2A\u6210\u5458\uFF0C\u4EE5\u6B64\u7C7B\u63A8\u3002</p><p>\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528\u8D1F\u6570\u4E0B\u6807\uFF0C\u4EE5 <code>-1</code> \u8868\u793A\u6700\u540E\u4E00\u4E2A\u6210\u5458\uFF0C <code>-2</code> \u8868\u793A\u5012\u6570\u7B2C\u4E8C\u4E2A\u6210\u5458\uFF0C\u4EE5\u6B64\u7C7B\u63A8\u3002</p></li><li><p>withscores\uFF1A\u8BA9\u6210\u5458\u548C\u5B83\u7684 <code>score</code> \u503C\u4E00\u5E76\u8FD4\u56DE\uFF0C\u8FD4\u56DE\u5217\u8868\u4EE5 <code>value1,score1, ..., valueN,scoreN</code> \u7684\u683C\u5F0F\u8868\u793A</p></li></ul></blockquote><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; flushdb #\u6E05\u7A7Adb\uFF0C\u65B9\u4FBF\u6D4B\u8BD5
OK
127.0.0.1:6379&gt; zadd topn 100 java 80 c 90 c++ 50 php 70 js #\u521B\u5EFA\u540D\u79F0\u4E3Atopn\u7684zset\uFF0C\u6DFB\u52A0\u4E865\u4E2A\u5143\u7D20
(integer) 5
127.0.0.1:6379&gt; zrevrange topn 0 -1 #\u6309\u7167score\u964D\u5E8F\u83B7\u53D6\u6240\u6709\u5143\u7D20
1) &quot;java&quot;
2) &quot;c++&quot;
3) &quot;c&quot;
4) &quot;js&quot;
5) &quot;php&quot;
127.0.0.1:6379&gt; zrevrange topn 0 2 #\u6309\u7167score\u964D\u5E8F\u83B7\u53D6\u524D3\u540D
1) &quot;java&quot;
2) &quot;c++&quot;
3) &quot;c&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="zrangebyscore-\u6309\u7167score\u5347\u5E8F-\u8FD4\u56DE\u6307\u5B9Ascore\u8303\u56F4\u5185\u7684\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#zrangebyscore-\u6309\u7167score\u5347\u5E8F-\u8FD4\u56DE\u6307\u5B9Ascore\u8303\u56F4\u5185\u7684\u6570\u636E" aria-hidden="true">#</a> zrangebyscore\uFF1A\u6309\u7167score\u5347\u5E8F\uFF0C\u8FD4\u56DE\u6307\u5B9Ascore\u8303\u56F4\u5185\u7684\u6570\u636E</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>zrangebyscore key min max [WITHSCORES] [LIMIT offset count]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u8FD4\u56DE\u6709\u5E8F\u96C6 <code>key</code> \u4E2D\uFF0C\u6240\u6709 <code>score</code> \u503C\u4ECB\u4E8E <code>min</code> \u548C <code>max</code> \u4E4B\u95F4(\u5305\u62EC\u7B49\u4E8E <code>min</code> \u6216 <code>max</code> )\u7684\u6210\u5458\u3002\u6709\u5E8F\u96C6\u6210\u5458\u6309 <code>score</code> \u503C\u9012\u589E(\u4ECE\u5C0F\u5230\u5927)\u6B21\u5E8F\u6392\u5217\u3002</p><p>\u5177\u6709\u76F8\u540C <code>score</code> \u503C\u7684\u6210\u5458\u6309\u5B57\u5178\u5E8F\u6765\u6392\u5217(\u8BE5\u5C5E\u6027\u662F\u6709\u5E8F\u96C6\u63D0\u4F9B\u7684\uFF0C\u4E0D\u9700\u8981\u989D\u5916\u7684\u8BA1\u7B97)\u3002</p><p>\u53EF\u9009\u7684 <code>LIMIT</code> \u53C2\u6570\u6307\u5B9A\u8FD4\u56DE\u7ED3\u679C\u7684\u6570\u91CF\u53CA\u533A\u95F4(\u5C31\u50CFSQL\u4E2D\u7684 <code>SELECT LIMIT offset, count</code> )\uFF0C\u6CE8\u610F\u5F53 <code>offset</code> \u5F88\u5927\u65F6\uFF0C\u5B9A\u4F4D <code>offset</code> \u7684\u64CD\u4F5C\u53EF\u80FD\u9700\u8981\u904D\u5386\u6574\u4E2A\u6709\u5E8F\u96C6\uFF0C\u6B64\u8FC7\u7A0B\u6700\u574F\u590D\u6742\u5EA6\u4E3A O(N) \u65F6\u95F4\u3002</p><p>\u53EF\u9009\u7684 <code>WITHSCORES</code> \u53C2\u6570\u51B3\u5B9A\u7ED3\u679C\u96C6\u662F\u5355\u5355\u8FD4\u56DE\u6709\u5E8F\u96C6\u7684\u6210\u5458\uFF0C\u8FD8\u662F\u5C06\u6709\u5E8F\u96C6\u6210\u5458\u53CA\u5176 <code>score</code> \u503C\u4E00\u8D77\u8FD4\u56DE\u3002</p></blockquote><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; flushdb #\u6E05\u7A7Adb\uFF0C\u65B9\u4FBF\u6D4B\u8BD5
OK
127.0.0.1:6379&gt; zadd topn 100 java 80 c 90 c++ 50 php 70 js #\u521B\u5EFA\u540D\u79F0\u4E3Atopn\u7684zset\uFF0C\u6DFB\u52A0\u4E865\u4E2A\u5143\u7D20
(integer) 5
127.0.0.1:6379&gt; zrangebyscore topn 70 90 #score\u5347\u5E8F\uFF0C\u83B7\u53D6score\u4F4D\u4E8E[70,90]\u533A\u95F4\u4E2D\u7684\u5143\u7D20\u503C
1) &quot;js&quot;
2) &quot;c&quot;
3) &quot;c++&quot;
127.0.0.1:6379&gt; zrangebyscore topn 70 90 withscores #score\u5347\u5E8F\uFF0C\u83B7\u53D6score\u4F4D\u4E8E[70,90]\u533A\u95F4\u4E2D\u7684\u5143\u7D20\u503C\u53CAscore
1) &quot;js&quot;
2) &quot;70&quot;
3) &quot;c&quot;
4) &quot;80&quot;
5) &quot;c++&quot;
6) &quot;90&quot;
127.0.0.1:6379&gt; zrangebyscore topn 70 90 withscores limit 1 2 #\u76F8\u5F53\u4E8E\uFF1Aselect value,score from topn\u96C6\u5408 where score&gt;=70 and score&lt;=90 order by score asc limit 1,2
1) &quot;c&quot;
2) &quot;80&quot;
3) &quot;c++&quot;
4) &quot;90&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="zrevrangebyscore-\u6309\u7167score\u964D\u5E8F-\u8FD4\u56DE\u6307\u5B9Ascore\u8303\u56F4\u5185\u7684\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#zrevrangebyscore-\u6309\u7167score\u964D\u5E8F-\u8FD4\u56DE\u6307\u5B9Ascore\u8303\u56F4\u5185\u7684\u6570\u636E" aria-hidden="true">#</a> zrevrangebyscore\uFF1A\u6309\u7167score\u964D\u5E8F\uFF0C\u8FD4\u56DE\u6307\u5B9Ascore\u8303\u56F4\u5185\u7684\u6570\u636E</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>zrevrangebyscore key max min [WITHSCORES] [LIMIT offset count]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u8FD4\u56DE\u6709\u5E8F\u96C6 <code>key</code> \u4E2D\uFF0C <code>score</code> \u503C\u4ECB\u4E8E <code>max</code> \u548C <code>min</code> \u4E4B\u95F4(\u9ED8\u8BA4\u5305\u62EC\u7B49\u4E8E <code>max</code> \u6216 <code>min</code> )\u7684\u6240\u6709\u7684\u6210\u5458\u3002\u6709\u5E8F\u96C6\u6210\u5458\u6309 <code>score</code> \u503C\u9012\u51CF(\u4ECE\u5927\u5230\u5C0F)\u7684\u6B21\u5E8F\u6392\u5217\u3002</p><p>\u5177\u6709\u76F8\u540C <code>score</code> \u503C\u7684\u6210\u5458\u6309\u5B57\u5178\u5E8F\u7684\u9006\u5E8F\u6392\u5217\u3002</p><p>\u9664\u4E86\u6210\u5458\u6309 <code>score</code> \u503C\u9012\u51CF\u7684\u6B21\u5E8F\u6392\u5217\u8FD9\u4E00\u70B9\u5916\uFF0C zrevrangebyscore \u547D\u4EE4\u7684\u5176\u4ED6\u65B9\u9762\u548C zrangebyscore \u547D\u4EE4\u4E00\u6837\u3002</p></blockquote><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; flushdb #\u6E05\u7A7Adb\uFF0C\u65B9\u4FBF\u6D4B\u8BD5
OK
127.0.0.1:6379&gt; zadd topn 100 java 80 c 90 c++ 50 php 70 js #\u521B\u5EFA\u540D\u79F0\u4E3Atopn\u7684zset\uFF0C\u6DFB\u52A0\u4E865\u4E2A\u5143\u7D20
(integer) 5
127.0.0.1:6379&gt; zrevrangebyscore topn 100 90 #score\u964D\u5E8F\uFF0C\u83B7\u53D6score\u4F4D\u4E8E[70,90]\u533A\u95F4\u4E2D\u7684\u5143\u7D20\u503C
1) &quot;java&quot;
2) &quot;c++&quot;
127.0.0.1:6379&gt; zrevrangebyscore topn 100 90 withscores #score\u964D\u5E8F\uFF0C\u83B7\u53D6score\u4F4D\u4E8E[70,90]\u533A\u95F4\u4E2D\u7684\u5143\u7D20\u503C\u53CAscore
1) &quot;java&quot;
2) &quot;100&quot;
3) &quot;c++&quot;
4) &quot;90&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="zincrby-\u4E3A\u6307\u5B9A\u5143\u7D20\u7684score\u52A0\u4E0A\u6307\u5B9A\u7684\u589E\u91CF" tabindex="-1"><a class="header-anchor" href="#zincrby-\u4E3A\u6307\u5B9A\u5143\u7D20\u7684score\u52A0\u4E0A\u6307\u5B9A\u7684\u589E\u91CF" aria-hidden="true">#</a> zincrby\uFF1A\u4E3A\u6307\u5B9A\u5143\u7D20\u7684score\u52A0\u4E0A\u6307\u5B9A\u7684\u589E\u91CF</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>zincrby key increment member
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u4E3A\u6709\u5E8F\u96C6 <code>key</code> \u7684\u6210\u5458 <code>member</code> \u7684 <code>score</code> \u503C\u52A0\u4E0A\u589E\u91CF <code>increment</code> \u3002</p><p>\u53EF\u4EE5\u901A\u8FC7\u4F20\u9012\u4E00\u4E2A\u8D1F\u6570\u503C <code>increment</code> \uFF0C\u8BA9 <code>score</code> \u51CF\u53BB\u76F8\u5E94\u7684\u503C\uFF0C\u6BD4\u5982 <code>ZINCRBY key -5 member</code> \uFF0C\u5C31\u662F\u8BA9 <code>member</code> \u7684 <code>score</code> \u503C\u51CF\u53BB <code>5</code> \u3002</p><p>\u5F53 <code>key</code> \u4E0D\u5B58\u5728\uFF0C\u6216 <code>member</code> \u4E0D\u662F <code>key</code> \u7684\u6210\u5458\u65F6\uFF0C <code>ZINCRBY key increment member</code> \u7B49\u540C\u4E8E <code>ZADD key increment member</code> \u3002</p><p>\u5F53 <code>key</code> \u4E0D\u662F\u6709\u5E8F\u96C6\u7C7B\u578B\u65F6\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u9519\u8BEF\u3002</p><p><code>score</code> \u503C\u53EF\u4EE5\u662F\u6574\u6570\u503C\u6216\u53CC\u7CBE\u5EA6\u6D6E\u70B9\u6570\u3002</p></blockquote><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; flushdb #\u6E05\u7A7Adb\uFF0C\u65B9\u4FBF\u6D4B\u8BD5
OK
127.0.0.1:6379&gt; zadd topx 90 java 70 c 80 c++ #\u96C6\u5408topx\u4E2D\u6DFB\u52A03\u4E2A\u5143\u7D20\uFF1Ajava\u3001c\u3001c++\uFF0C\u5BF9\u5E94\u7684score\u5206\u522B\u662F\uFF1A90\u300170\u300180
(integer) 3
127.0.0.1:6379&gt; zrevrange topx 0 -1 withscores #\u8F93\u51FA\u96C6\u5408topx\u4E2D\u7684\u5143\u7D20\uFF0C\u5305\u542Bscore
1) &quot;java&quot;
2) &quot;90&quot;
3) &quot;c++&quot;
4) &quot;80&quot;
5) &quot;c&quot;
6) &quot;70&quot;
127.0.0.1:6379&gt; zincrby topx 5 java #\u5BF9topx\u4E2D\u7684\u5143\u7D20java\u7684score\u52A05\uFF0C\u53D8\u621095\u4E86
&quot;95&quot;
127.0.0.1:6379&gt; zrevrange topx 0 -1 withscores # \u8F93\u51FA\u96C6\u5408\u5143\u7D20\uFF0C\u6CE8\u610Fjava\u7684score\u662F95\u4E86
1) &quot;java&quot;
2) &quot;95&quot;
3) &quot;c++&quot;
4) &quot;80&quot;
5) &quot;c&quot;
6) &quot;70&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="zrem-\u5220\u9664\u96C6\u5408\u4E2D\u591A\u4E2A\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#zrem-\u5220\u9664\u96C6\u5408\u4E2D\u591A\u4E2A\u5143\u7D20" aria-hidden="true">#</a> zrem\uFF1A\u5220\u9664\u96C6\u5408\u4E2D\u591A\u4E2A\u5143\u7D20</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>zrem key member [member ...]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u79FB\u9664\u6709\u5E8F\u96C6 <code>key</code> \u4E2D\u7684\u4E00\u4E2A\u6216\u591A\u4E2A\u6210\u5458\uFF0C\u4E0D\u5B58\u5728\u7684\u6210\u5458\u5C06\u88AB\u5FFD\u7565\u3002</p><p>\u5F53 <code>key</code> \u5B58\u5728\u4F46\u4E0D\u662F\u6709\u5E8F\u96C6\u7C7B\u578B\u65F6\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u9519\u8BEF\u3002</p></blockquote><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; flushdb #\u6E05\u7A7Adb\uFF0C\u65B9\u4FBF\u6D4B\u8BD5
OK
127.0.0.1:6379&gt; zadd topx 90 java 70 c 80 c++ #\u96C6\u5408topx\u4E2D\u6DFB\u52A03\u4E2A\u5143\u7D20\uFF1Ajava\u3001c\u3001c++\uFF0C\u5BF9\u5E94\u7684score\u5206\u522B\u662F\uFF1A90\u300170\u300180
(integer) 3
127.0.0.1:6379&gt; zrevrange topx 0 -1 withscores #\u8F93\u51FA\u96C6\u5408topx\u4E2D\u7684\u5143\u7D20\uFF0C\u5305\u542Bscore
1) &quot;java&quot;
2) &quot;90&quot;
3) &quot;c++&quot;
4) &quot;80&quot;
5) &quot;c&quot;
6) &quot;70&quot;
127.0.0.1:6379&gt; zincrby topx 5 java #\u5BF9topx\u4E2D\u7684\u5143\u7D20java\u7684score\u52A05\uFF0C\u53D8\u621095\u4E86
&quot;95&quot;
127.0.0.1:6379&gt; zrevrange topx 0 -1 withscores # \u8F93\u51FA\u96C6\u5408\u5143\u7D20\uFF0C\u6CE8\u610Fjava\u7684score\u662F95\u4E86
1) &quot;java&quot;
2) &quot;95&quot;
3) &quot;c++&quot;
4) &quot;80&quot;
5) &quot;c&quot;
6) &quot;70&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="zremrangebyrank-\u6839\u636E\u7D22\u5F15\u8303\u56F4\u5220\u9664\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#zremrangebyrank-\u6839\u636E\u7D22\u5F15\u8303\u56F4\u5220\u9664\u5143\u7D20" aria-hidden="true">#</a> zremrangebyrank\uFF1A\u6839\u636E\u7D22\u5F15\u8303\u56F4\u5220\u9664\u5143\u7D20</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>zremrangebyrank key start stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u79FB\u9664\u6709\u5E8F\u96C6 <code>key</code> \u4E2D\uFF0C\u6307\u5B9A\u6392\u540D(rank)\u533A\u95F4\u5185\u7684\u6240\u6709\u6210\u5458\u3002</p><p>\u533A\u95F4\u5206\u522B\u4EE5\u4E0B\u6807\u53C2\u6570 <code>start</code> \u548C <code>stop</code> \u6307\u51FA\uFF0C\u5305\u542B <code>start</code> \u548C <code>stop</code> \u5728\u5185\u3002</p><p>\u4E0B\u6807\u53C2\u6570 <code>start</code> \u548C <code>stop</code> \u90FD\u4EE5 <code>0</code> \u4E3A\u5E95\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4EE5 <code>0</code> \u8868\u793A\u6709\u5E8F\u96C6\u7B2C\u4E00\u4E2A\u6210\u5458\uFF0C\u4EE5 <code>1</code> \u8868\u793A\u6709\u5E8F\u96C6\u7B2C\u4E8C\u4E2A\u6210\u5458\uFF0C\u4EE5\u6B64\u7C7B\u63A8\u3002</p><p>\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528\u8D1F\u6570\u4E0B\u6807\uFF0C\u4EE5 <code>-1</code> \u8868\u793A\u6700\u540E\u4E00\u4E2A\u6210\u5458\uFF0C <code>-2</code> \u8868\u793A\u5012\u6570\u7B2C\u4E8C\u4E2A\u6210\u5458\uFF0C\u4EE5\u6B64\u7C7B\u63A8\u3002</p></blockquote><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; flushdb #\u6E05\u7A7Adb\uFF0C\u65B9\u4FBF\u6D4B\u8BD5
OK
127.0.0.1:6379&gt; zadd topx 90 java 70 c 80 c++ #\u96C6\u5408topx\u4E2D\u6DFB\u52A03\u4E2A\u5143\u7D20\uFF1Ajava\u3001c\u3001c++\uFF0C\u5BF9\u5E94\u7684score\u5206\u522B\u662F\uFF1A90\u300170\u300180
(integer) 3
127.0.0.1:6379&gt; zrange topx 0 -1 #\u8F93\u51FA\u96C6\u5408topx\u4E2D\u6240\u6709\u5143\u7D20
1) &quot;c&quot;
2) &quot;c++&quot;
3) &quot;java&quot;
127.0.0.1:6379&gt; zremrangebyrank topx 0 1 #\u5220\u9664\u7D22\u5F15\u8303\u56F4[0,1]\u7684\u6570\u636E
(integer) 2
127.0.0.1:6379&gt; zrange topx 0 -1 #\u8F93\u51FA\u9782topx\u4E2D\u6240\u6709\u5143\u7D20
1) &quot;java&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="zremrangebyscore-\u6839\u636Escore\u7684\u8303\u56F4\u5220\u9664\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#zremrangebyscore-\u6839\u636Escore\u7684\u8303\u56F4\u5220\u9664\u5143\u7D20" aria-hidden="true">#</a> zremrangebyscore\uFF1A\u6839\u636Escore\u7684\u8303\u56F4\u5220\u9664\u5143\u7D20</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>zremrangebyscore key min max
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u79FB\u9664\u6709\u5E8F\u96C6 <code>key</code> \u4E2D\uFF0C\u6240\u6709 <code>score</code> \u503C\u4ECB\u4E8E <code>min</code> \u548C <code>max</code> \u4E4B\u95F4(\u5305\u62EC\u7B49\u4E8E <code>min</code> \u6216 <code>max</code> )\u7684\u6210\u5458</p></blockquote><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; flushdb #\u6E05\u7A7Adb\uFF0C\u65B9\u4FBF\u6D4B\u8BD5
OK
127.0.0.1:6379&gt; zadd topx 90 java 70 c 80 c++ 50 php #topx\u96C6\u5408\u4E2D\u6DFB\u52A04\u4E2A\u5143\u7D20
(integer) 4
127.0.0.1:6379&gt; zrange topx 0 -1 withscores #\u8F93\u51FAtopx\u4E2D\u6240\u6709\u5143\u7D20\u503C\u3001score
1) &quot;php&quot;
2) &quot;50&quot;
3) &quot;c&quot;
4) &quot;70&quot;
5) &quot;c++&quot;
6) &quot;80&quot;
7) &quot;java&quot;
8) &quot;90&quot;
127.0.0.1:6379&gt; zremrangebyscore topx 70 80 #\u5220\u9664score\u4F4D\u4E8E[70,80]\u533A\u95F4\u7684\u5143\u7D20
(integer) 2
127.0.0.1:6379&gt; zrange topx 0 -1 withscores #\u8F93\u51FA\u5269\u4E0B\u7684\u5143\u7D20
1) &quot;php&quot;
2) &quot;50&quot;
3) &quot;java&quot;
4) &quot;90&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="zcount-\u7EDF\u8BA1\u6307\u5B9Ascore\u8303\u56F4\u5185\u5143\u7D20\u7684\u4E2A\u6570" tabindex="-1"><a class="header-anchor" href="#zcount-\u7EDF\u8BA1\u6307\u5B9Ascore\u8303\u56F4\u5185\u5143\u7D20\u7684\u4E2A\u6570" aria-hidden="true">#</a> zcount\uFF1A\u7EDF\u8BA1\u6307\u5B9Ascore\u8303\u56F4\u5185\u5143\u7D20\u7684\u4E2A\u6570</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>zcount key min max
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u8FD4\u56DE\u6709\u5E8F\u96C6 <code>key</code> \u4E2D\uFF0C <code>score</code> \u503C\u5728 <code>min</code> \u548C <code>max</code> \u4E4B\u95F4(\u9ED8\u8BA4\u5305\u62EC <code>score</code> \u503C\u7B49\u4E8E <code>min</code> \u6216 <code>max</code> )\u7684\u6210\u5458\u7684\u6570\u91CF</p></blockquote><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; flushdb #\u6E05\u7A7Adb\uFF0C\u65B9\u4FBF\u6D4B\u8BD5
OK
127.0.0.1:6379&gt; zadd topx 90 java 70 c 80 c++ 50 php #topx\u96C6\u5408\u4E2D\u6DFB\u52A04\u4E2A\u5143\u7D20
(integer) 4
127.0.0.1:6379&gt; zcount topx 80 100 #\u7EDF\u8BA1score\u4F4D\u4E8E[80,100]\u533A\u95F4\u4E2D\u7684\u5143\u7D20\u4E2A\u6570
(integer) 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="zrank-\u6309\u7167score\u5347\u5E8F-\u8FD4\u56DE\u67D0\u4E2A\u5143\u7D20\u5728\u96C6\u5408\u4E2D\u7684\u6392\u540D" tabindex="-1"><a class="header-anchor" href="#zrank-\u6309\u7167score\u5347\u5E8F-\u8FD4\u56DE\u67D0\u4E2A\u5143\u7D20\u5728\u96C6\u5408\u4E2D\u7684\u6392\u540D" aria-hidden="true">#</a> zrank\uFF1A\u6309\u7167score\u5347\u5E8F\uFF0C\u8FD4\u56DE\u67D0\u4E2A\u5143\u7D20\u5728\u96C6\u5408\u4E2D\u7684\u6392\u540D</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>zrank key member
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u8FD4\u56DE\u6709\u5E8F\u96C6 <code>key</code> \u4E2D\u6210\u5458 <code>member</code> \u7684\u6392\u540D\u3002\u5176\u4E2D\u6709\u5E8F\u96C6\u6210\u5458\u6309 <code>score</code> \u503C\u9012\u589E(\u4ECE\u5C0F\u5230\u5927)\u987A\u5E8F\u6392\u5217\u3002</p><p>\u6392\u540D\u4EE5 <code>0</code> \u4E3A\u5E95\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C <code>score</code> \u503C\u6700\u5C0F\u7684\u6210\u5458\u6392\u540D\u4E3A <code>0</code> \u3002</p></blockquote><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; flushdb #\u6E05\u7A7Adb\uFF0C\u65B9\u4FBF\u6D4B\u8BD5
OK
127.0.0.1:6379&gt; zadd topx 90 java 70 c 80 c++ 50 php #topx\u96C6\u5408\u4E2D\u6DFB\u52A04\u4E2A\u5143\u7D20
(integer) 4
127.0.0.1:6379&gt; zrank topx c #\u83B7\u53D6\u5143\u7D20c\u7684\u6392\u540D\uFF0C\u8FD4\u56DE1\u8868\u793A\u6392\u540D\u7B2C2
(integer) 1
127.0.0.1:6379&gt; zrange topx 0 -1 #\u8F93\u51FA\u96C6\u5408\u4E2D\u6240\u6709\u5143\u7D20\uFF0C\u770B\u4E00\u4E0Bc\u7684\u4F4D\u7F6E\u786E\u5B9E\u662F2
1) &quot;php&quot;
2) &quot;c&quot;
3) &quot;c++&quot;
4) &quot;java&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="zrevrank-\u6309\u7167score\u964D\u5E8F-\u8FD4\u56DE\u67D0\u4E2A\u5143\u7D20\u5728\u96C6\u5408\u4E2D\u7684\u6392\u540D" tabindex="-1"><a class="header-anchor" href="#zrevrank-\u6309\u7167score\u964D\u5E8F-\u8FD4\u56DE\u67D0\u4E2A\u5143\u7D20\u5728\u96C6\u5408\u4E2D\u7684\u6392\u540D" aria-hidden="true">#</a> zrevrank\uFF1A\u6309\u7167score\u964D\u5E8F\uFF0C\u8FD4\u56DE\u67D0\u4E2A\u5143\u7D20\u5728\u96C6\u5408\u4E2D\u7684\u6392\u540D</h4><blockquote><p>\u8FD4\u56DE\u6709\u5E8F\u96C6 <code>key</code> \u4E2D\u6210\u5458 <code>member</code> \u7684\u6392\u540D\u3002\u5176\u4E2D\u6709\u5E8F\u96C6\u6210\u5458\u6309 <code>score</code> \u503C\u9012\u51CF(\u4ECE\u5927\u5230\u5C0F)\u6392\u5E8F\u3002</p><p>\u6392\u540D\u4EE5 <code>0</code> \u4E3A\u5E95\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C <code>score</code> \u503C\u6700\u5927\u7684\u6210\u5458\u6392\u540D\u4E3A <code>0</code> \u3002</p></blockquote><p>\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; flushdb #\u6E05\u7A7Adb\uFF0C\u65B9\u4FBF\u6D4B\u8BD5
OK
127.0.0.1:6379&gt; zadd topx 90 java 70 c 80 c++ 50 php #topx\u96C6\u5408\u4E2D\u6DFB\u52A04\u4E2A\u5143\u7D20
(integer) 4
127.0.0.1:6379&gt; zrange topx 0 -1
1) &quot;php&quot;
2) &quot;c&quot;
3) &quot;c++&quot;
4) &quot;java&quot;
127.0.0.1:6379&gt; zrevrank topx java #score\u964D\u5E8F\uFF0C\u5F97\u5230java\u7684\u6392\u540D\uFF0C\u6392\u5728\u7B2C1\u4F4D
(integer) 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="zscore-\u8FD4\u56DE\u96C6\u5408\u4E2D\u6307\u5B9A\u5143\u7D20\u7684score" tabindex="-1"><a class="header-anchor" href="#zscore-\u8FD4\u56DE\u96C6\u5408\u4E2D\u6307\u5B9A\u5143\u7D20\u7684score" aria-hidden="true">#</a> zscore\uFF1A\u8FD4\u56DE\u96C6\u5408\u4E2D\u6307\u5B9A\u5143\u7D20\u7684score</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>zscore key member
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u8FD4\u56DE\u6709\u5E8F\u96C6 <code>key</code> \u4E2D\uFF0C\u6210\u5458 <code>member</code> \u7684 <code>score</code> \u503C\u3002</p><p>\u5982\u679C <code>member</code> \u5143\u7D20\u4E0D\u662F\u6709\u5E8F\u96C6 <code>key</code> \u7684\u6210\u5458\uFF0C\u6216 <code>key</code> \u4E0D\u5B58\u5728\uFF0C\u8FD4\u56DE <code>nil</code> \u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379&gt; flushdb #\u6E05\u7A7Adb\uFF0C\u65B9\u4FBF\u6D4B\u8BD5
OK
127.0.0.1:6379&gt; zadd topx 90 java 70 c 80 c++ 50 php #topx\u96C6\u5408\u4E2D\u6DFB\u52A04\u4E2A\u5143\u7D20
(integer) 4
127.0.0.1:6379&gt; zrange topx 0 -1
1) &quot;php&quot;
2) &quot;c&quot;
3) &quot;c++&quot;
4) &quot;java&quot;
127.0.0.1:6379&gt; zrevrank topx java #score\u964D\u5E8F\uFF0C\u5F97\u5230java\u7684\u6392\u540D\uFF0C\u6392\u5728\u7B2C1\u4F4D
(integer) 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-\u6570\u636E\u7ED3\u6784-4" tabindex="-1"><a class="header-anchor" href="#_3-\u6570\u636E\u7ED3\u6784-4" aria-hidden="true">#</a> 3.\u6570\u636E\u7ED3\u6784</h3><p>SortedSet\uFF08zset\uFF09\u662Fredis\u63D0\u4F9B\u7684\u4E00\u4E2A\u975E\u5E38\u7279\u522B\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u5185\u90E8\u4F7F\u7528\u5230\u4E862\u79CD\u6570\u636E\u7ED3\u6784\u3002</p><p><strong>1\u3001hash\u8868</strong></p><p>\u7C7B\u4F3C\u4E8Ejava\u4E2D\u7684Map&lt;String,score&gt;\uFF0Ckey\u4E3A\u96C6\u5408\u4E2D\u7684\u5143\u7D20\uFF0Cvalue\u4E3A\u5143\u7D20\u5BF9\u5E94\u7684score\uFF0C\u53EF\u4EE5\u7528\u6765\u5FEB\u901F\u5B9A\u4F4D\u5143\u7D20\u5B9A\u4E49\u7684score\uFF0C\u65F6\u95F4\u590D\u6742\u5EA6\u4E3AO(1)</p><p><strong>2\u3001\u8DF3\u8868</strong></p><p>\u8DF3\u8868\uFF08skiplist\uFF09\u662F\u4E00\u4E2A\u975E\u5E38\u4F18\u79C0\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u5B9E\u73B0\u7B80\u5355\uFF0C\u63D2\u5165\u3001\u5220\u9664\u3001\u67E5\u627E\u7684\u590D\u6742\u5EA6\u5747\u4E3AO(logN)\u3002</p><p>\u7C7B\u4F3Cjava\u4E2D\u7684ConcurrentSkipListSet\uFF0C\u6839\u636Escore\u7684\u503C\u6392\u5E8F\u540E\u751F\u6210\u7684\u4E00\u4E2A\u8DF3\u8868\uFF0C\u53EF\u4EE5\u5FEB\u901F\u6309\u7167\u4F4D\u7F6E\u7684\u987A\u5E8F\u6216\u8005score\u7684\u987A\u5E8F\u67E5\u8BE2\u5143\u7D20\u3002</p><p>\u8FD9\u91CC\u6211\u4EEC\u6765\u770B\u4E00\u4E0B\u8DF3\u8868\u7684\u539F\u7406\uFF1A</p><p>\u9996\u5148\u4ECE\u8003\u8651\u4E00\u4E2A\u6709\u5E8F\u8868\u5F00\u59CB\uFF1A</p><p><img src="https://raw.githubusercontent.com/huluhutu/blogimg/main/img/image-20221001190915080.png" alt="image-20221001190915080" loading="lazy"></p><p>\u4ECE\u8BE5\u6709\u5E8F\u8868\u4E2D\u641C\u7D22\u5143\u7D20 &lt; 23, 43, 59 &gt; \uFF0C\u9700\u8981\u6BD4\u8F83\u7684\u6B21\u6570\u5206\u522B\u4E3A &lt; 2, 4, 6 &gt;\uFF0C\u603B\u5171\u6BD4\u8F83\u7684\u6B21\u6570\u4E3A 2 + 4 + 6 = 12 \u6B21\u3002\u6709\u6CA1\u6709\u4F18\u5316\u7684\u7B97\u6CD5\u5417? \u94FE\u8868\u662F\u6709\u5E8F\u7684\uFF0C\u4F46\u4E0D\u80FD\u4F7F\u7528\u4E8C\u5206\u67E5\u627E\u3002\u7C7B\u4F3C\u4E8C\u53C9\u641C\u7D22\u6811\uFF0C\u6211\u4EEC\u628A\u4E00\u4E9B\u8282\u70B9\u63D0\u53D6\u51FA\u6765\uFF0C\u4F5C\u4E3A\u7D22\u5F15\u3002\u5F97\u5230\u5982\u4E0B\u7ED3\u6784\uFF1A</p><p><img src="https://raw.githubusercontent.com/huluhutu/blogimg/main/img/image-20221001190923515.png" alt="image-20221001190923515" loading="lazy"></p><p>\u8FD9\u91CC\u6211\u4EEC\u628A &lt; 14, 34, 50, 72 &gt; \u63D0\u53D6\u51FA\u6765\u4F5C\u4E3A\u4E00\u7EA7\u7D22\u5F15\uFF0C\u8FD9\u6837\u641C\u7D22\u7684\u65F6\u5019\u5C31\u53EF\u4EE5\u51CF\u5C11\u6BD4\u8F83\u6B21\u6570\u4E86\u3002\u6211\u4EEC\u8FD8\u53EF\u4EE5\u518D\u4ECE\u4E00\u7EA7\u7D22\u5F15\u63D0\u53D6\u4E00\u4E9B\u5143\u7D20\u51FA\u6765\uFF0C\u4F5C\u4E3A\u4E8C\u7EA7\u7D22\u5F15\uFF0C\u53D8\u6210\u5982\u4E0B\u7ED3\u6784\uFF1A</p><p><img src="https://raw.githubusercontent.com/huluhutu/blogimg/main/img/image-20221001190934062.png" alt="image-20221001190934062" loading="lazy"></p><p>\u8FD9\u91CC\u5143\u7D20\u4E0D\u591A\uFF0C\u4F53\u73B0\u4E0D\u51FA\u4F18\u52BF\uFF0C\u5982\u679C\u5143\u7D20\u8DB3\u591F\u591A\uFF0C\u8FD9\u79CD\u7D22\u5F15\u7ED3\u6784\u5C31\u80FD\u4F53\u73B0\u51FA\u4F18\u52BF\u6765\u4E86\u3002</p>`,344),l=[a];function t(r,c){return i(),n("div",null,l)}const v=e(s,[["render",t],["__file","1-5\u79CD\u57FA\u7840\u6570\u636E\u7C7B\u578B.html.vue"]]);export{v as default};
