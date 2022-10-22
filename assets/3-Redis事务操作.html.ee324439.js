const e=JSON.parse('{"key":"v-4d26a048","path":"/pages/DB/Redis/3-Redis%E4%BA%8B%E5%8A%A1%E6%93%8D%E4%BD%9C.html","title":"3 Redis\u4E8B\u52A1\u64CD\u4F5C","lang":"zh-CN","frontmatter":{"summary":"3 Redis\u4E8B\u52A1\u64CD\u4F5C 1-Redis\u4E8B\u52A1 redis\u4E8B\u52A1\u662F\u4E00\u4E2A\u5355\u72EC\u7684\u9694\u79BB\u64CD\u4F5C\uFF0C\u4E8B\u52A1\u4E2D\u7684\u6240\u6709\u547D\u4EE4\u90FD\u4F1A\u5E8F\u5217\u5316\u3001\u6309\u987A\u5E8F\u5730\u6267\u884C\uFF0C\u4E8B\u52A1\u5728\u6267\u884C\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u4E0D\u4F1A\u88AB\u5176\u4ED6\u5BA2\u6237\u7AEF\u53D1\u9001\u6765\u7684\u547D\u4EE4\u8BF7\u6C42\u6240\u6253\u65AD\u3002 redis\u4E8B\u52A1\u7684\u4E3B\u8981\u4F5C\u7528\u5C31\u662F\u4E32\u8054\u591A\u4E2A\u547D\u4EE4\u9632\u6B62 \u522B\u7684\u547D\u4EE4\u63D2\u961F\u3002 2-Multi\u3001Exec\u3001Discard \u4ECE\u8F93\u5165Multi\u547D\u4EE4\u5F00\u59CB\uFF0C\u8F93\u5165\u7684\u547D\u4EE4\u90FD\u4F1A\u4F9D\u6B21\u8FDB\u5165\u547D\u4EE4\u961F\u5217\u4E2D\uFF0C\u4F46\u4E0D\u4F1A\u6267\u884C\uFF0C","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/huluhutublog/pages/DB/Redis/3-Redis%E4%BA%8B%E5%8A%A1%E6%93%8D%E4%BD%9C.html"}],["meta",{"property":"og:site_name","content":"huluhutublog"}],["meta",{"property":"og:title","content":"3 Redis\u4E8B\u52A1\u64CD\u4F5C"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-06T10:31:37.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-10-06T10:31:37.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1-Redis\u4E8B\u52A1","slug":"_1-redis\u4E8B\u52A1","link":"#_1-redis\u4E8B\u52A1","children":[]},{"level":2,"title":"2-Multi\u3001Exec\u3001Discard","slug":"_2-multi\u3001exec\u3001discard","link":"#_2-multi\u3001exec\u3001discard","children":[{"level":3,"title":"multi\uFF1A\u6807\u8BB0\u4E00\u4E2A\u4E8B\u52A1\u5757\u7684\u5F00\u59CB","slug":"multi-\u6807\u8BB0\u4E00\u4E2A\u4E8B\u52A1\u5757\u7684\u5F00\u59CB","link":"#multi-\u6807\u8BB0\u4E00\u4E2A\u4E8B\u52A1\u5757\u7684\u5F00\u59CB","children":[]},{"level":3,"title":"exec\uFF1A\u6267\u884C\u6240\u6709\u4E8B\u52A1\u5757\u5185\u7684\u547D\u4EE4","slug":"exec-\u6267\u884C\u6240\u6709\u4E8B\u52A1\u5757\u5185\u7684\u547D\u4EE4","link":"#exec-\u6267\u884C\u6240\u6709\u4E8B\u52A1\u5757\u5185\u7684\u547D\u4EE4","children":[]},{"level":3,"title":"discard\uFF1A\u53D6\u6D88\u4E8B\u52A1","slug":"discard-\u53D6\u6D88\u4E8B\u52A1","link":"#discard-\u53D6\u6D88\u4E8B\u52A1","children":[]}]},{"level":2,"title":"3-\u4E8B\u52A1\u7684\u9519\u8BEF\u5904\u7406","slug":"_3-\u4E8B\u52A1\u7684\u9519\u8BEF\u5904\u7406","link":"#_3-\u4E8B\u52A1\u7684\u9519\u8BEF\u5904\u7406","children":[{"level":3,"title":"\u60C5\u51B51\uFF1A\u7EC4\u961F\u4E2D\u547D\u4EE4\u6709\u8BEF\uFF0C\u5BFC\u81F4\u6240\u6709\u547D\u4EE4\u53D6\u6D88\u6267\u884C","slug":"\u60C5\u51B51-\u7EC4\u961F\u4E2D\u547D\u4EE4\u6709\u8BEF-\u5BFC\u81F4\u6240\u6709\u547D\u4EE4\u53D6\u6D88\u6267\u884C","link":"#\u60C5\u51B51-\u7EC4\u961F\u4E2D\u547D\u4EE4\u6709\u8BEF-\u5BFC\u81F4\u6240\u6709\u547D\u4EE4\u53D6\u6D88\u6267\u884C","children":[]},{"level":3,"title":"\u60C5\u51B52\uFF1A\u7EC4\u961F\u4E2D\u6CA1\u6709\u95EE\u9898\uFF0C\u6267\u884C\u4E2D\u90E8\u5206\u6210\u529F\u90E8\u5206\u5931\u8D25","slug":"\u60C5\u51B52-\u7EC4\u961F\u4E2D\u6CA1\u6709\u95EE\u9898-\u6267\u884C\u4E2D\u90E8\u5206\u6210\u529F\u90E8\u5206\u5931\u8D25","link":"#\u60C5\u51B52-\u7EC4\u961F\u4E2D\u6CA1\u6709\u95EE\u9898-\u6267\u884C\u4E2D\u90E8\u5206\u6210\u529F\u90E8\u5206\u5931\u8D25","children":[]}]},{"level":2,"title":"4-\u4E8B\u52A1\u51B2\u7A81\u95EE\u9898","slug":"_4-\u4E8B\u52A1\u51B2\u7A81\u95EE\u9898","link":"#_4-\u4E8B\u52A1\u51B2\u7A81\u95EE\u9898","children":[]},{"level":2,"title":"5-watch key","slug":"_5-watch-key","link":"#_5-watch-key","children":[{"level":3,"title":"1.watch key [key \u2026]","slug":"_1-watch-key-key","link":"#_1-watch-key-key","children":[]},{"level":3,"title":"2.unwatch\uFF1A\u53D6\u6D88\u76D1\u89C6","slug":"_2-unwatch-\u53D6\u6D88\u76D1\u89C6","link":"#_2-unwatch-\u53D6\u6D88\u76D1\u89C6","children":[]}]},{"level":2,"title":"6-redis\u4E8B\u52A1\u4E09\u5927\u7279\u6027","slug":"_6-redis\u4E8B\u52A1\u4E09\u5927\u7279\u6027","link":"#_6-redis\u4E8B\u52A1\u4E09\u5927\u7279\u6027","children":[{"level":3,"title":"1.\u5355\u72EC\u7684\u9694\u79BB\u64CD\u4F5C","slug":"_1-\u5355\u72EC\u7684\u9694\u79BB\u64CD\u4F5C","link":"#_1-\u5355\u72EC\u7684\u9694\u79BB\u64CD\u4F5C","children":[]},{"level":3,"title":"2.\u6CA1\u6709\u9694\u79BB\u7EA7\u522B\u7684\u6982\u5FF5","slug":"_2-\u6CA1\u6709\u9694\u79BB\u7EA7\u522B\u7684\u6982\u5FF5","link":"#_2-\u6CA1\u6709\u9694\u79BB\u7EA7\u522B\u7684\u6982\u5FF5","children":[]},{"level":3,"title":"3.\u4E0D\u80FD\u4FDD\u8BC1\u539F\u5B50\u6027","slug":"_3-\u4E0D\u80FD\u4FDD\u8BC1\u539F\u5B50\u6027","link":"#_3-\u4E0D\u80FD\u4FDD\u8BC1\u539F\u5B50\u6027","children":[]}]}],"git":{"createdTime":1665052297000,"updatedTime":1665052297000,"contributors":[{"name":"huluhutu","email":"842830066@qq.com","commits":1}]},"readingTime":{"minutes":7.72,"words":2316},"filePathRelative":"pages/DB/Redis/3-Redis\u4E8B\u52A1\u64CD\u4F5C.md","localizedDate":"2022\u5E7410\u67086\u65E5"}');export{e as data};
