const e=JSON.parse('{"key":"v-4e6e68ca","path":"/pages/Java/JavaWeb/3-Servlet%E8%A7%84%E8%8C%83.html","title":"Servlet\u89C4\u8303","lang":"zh-CN","frontmatter":{"order":3,"summary":"Servlet\u89C4\u8303 1-Servlet\u6982\u8FF0 1\u3001 \u4EC0\u4E48\u662F Servlet \u200B\\t\\tServlet \u662F\u57FA\u4E8E Jakarta \u6280\u672F\u7684 Web \u7EC4\u4EF6\uFF0C\u7531\u5BB9\u5668\u7BA1\u7406\uFF0C\u53EF\u751F\u6210\u52A8\u6001\u5185\u5BB9\u3002\u4E0E\u5176\u4ED6\u57FA\u4E8E Jakarta \u6280\u672F\u7684\u7EC4\u4EF6\u4E00\u6837\uFF0Cservlet \u662F\u72EC\u7ACB\u4E8E\u5E73\u53F0\u7684 Java \u7C7B\uFF0C\u5B83\u4EEC\u88AB\u7F16\u8BD1\u4E3A\u4E0E\u5E73\u53F0\u65E0\u5173\u7684\u5B57\u8282\u7801\uFF0C\u8FD9\u4E9B\u5B57\u8282\u7801\u53EF\u4EE5\u52A8\u6001\u52A0\u8F7D\u5230\u652F\u6301 Jakarta \u6280\u672F\u7684 Web \u670D\u52A1\u5668","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/huluhutublog/pages/Java/JavaWeb/3-Servlet%E8%A7%84%E8%8C%83.html"}],["meta",{"property":"og:site_name","content":"huluhutublog"}],["meta",{"property":"og:title","content":"Servlet\u89C4\u8303"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}]]},"excerpt":"","headers":[{"level":2,"title":"1-Servlet\u6982\u8FF0","slug":"_1-servlet\u6982\u8FF0","link":"#_1-servlet\u6982\u8FF0","children":[{"level":3,"title":"1\u3001 \u4EC0\u4E48\u662F Servlet","slug":"_1\u3001-\u4EC0\u4E48\u662F-servlet","link":"#_1\u3001-\u4EC0\u4E48\u662F-servlet","children":[]},{"level":3,"title":"2\u3001 \u4EC0\u4E48\u662F Servlet \u5BB9\u5668","slug":"_2\u3001-\u4EC0\u4E48\u662F-servlet-\u5BB9\u5668","link":"#_2\u3001-\u4EC0\u4E48\u662F-servlet-\u5BB9\u5668","children":[]},{"level":3,"title":"3\u3001 \u4E00\u4E2A\u4F8B\u5B50","slug":"_3\u3001-\u4E00\u4E2A\u4F8B\u5B50","link":"#_3\u3001-\u4E00\u4E2A\u4F8B\u5B50","children":[]},{"level":3,"title":"4\u3001Servlet\u67B6\u6784","slug":"_4\u3001servlet\u67B6\u6784","link":"#_4\u3001servlet\u67B6\u6784","children":[]}]},{"level":2,"title":"2-Servlet\u6838\u5FC3\u6280\u672F","slug":"_2-servlet\u6838\u5FC3\u6280\u672F","link":"#_2-servlet\u6838\u5FC3\u6280\u672F","children":[{"level":3,"title":"1\u3001Servlet\u52A0\u8F7D\u65F6\u673A","slug":"_1\u3001servlet\u52A0\u8F7D\u65F6\u673A","link":"#_1\u3001servlet\u52A0\u8F7D\u65F6\u673A","children":[]},{"level":3,"title":"2\u3001Servlet\u7684\u751F\u547D\u5468\u671F","slug":"_2\u3001servlet\u7684\u751F\u547D\u5468\u671F","link":"#_2\u3001servlet\u7684\u751F\u547D\u5468\u671F","children":[]},{"level":3,"title":"3\u3001\u5B9E\u73B0\u4E00\u4E2AServlet","slug":"_3\u3001\u5B9E\u73B0\u4E00\u4E2Aservlet","link":"#_3\u3001\u5B9E\u73B0\u4E00\u4E2Aservlet","children":[]}]},{"level":2,"title":"3-Servlet\u5339\u914D\u89C4\u5219","slug":"_3-servlet\u5339\u914D\u89C4\u5219","link":"#_3-servlet\u5339\u914D\u89C4\u5219","children":[{"level":3,"title":"1\u3001\u56DB\u79CD\u5339\u914D\u89C4\u5219","slug":"_1\u3001\u56DB\u79CD\u5339\u914D\u89C4\u5219","link":"#_1\u3001\u56DB\u79CD\u5339\u914D\u89C4\u5219","children":[]},{"level":3,"title":"2\u3001\u5339\u914D\u987A\u5E8F","slug":"_2\u3001\u5339\u914D\u987A\u5E8F","link":"#_2\u3001\u5339\u914D\u987A\u5E8F","children":[]},{"level":3,"title":"3\u3001\u9700\u8981\u6CE8\u610F\u7684\u95EE\u9898","slug":"_3\u3001\u9700\u8981\u6CE8\u610F\u7684\u95EE\u9898","link":"#_3\u3001\u9700\u8981\u6CE8\u610F\u7684\u95EE\u9898","children":[]},{"level":3,"title":"4\u3001\u4E3E\u4F8B","slug":"_4\u3001\u4E3E\u4F8B","link":"#_4\u3001\u4E3E\u4F8B","children":[]}]},{"level":2,"title":"4-\u8BF7\u6C42\u548C\u54CD\u5E94","slug":"_4-\u8BF7\u6C42\u548C\u54CD\u5E94","link":"#_4-\u8BF7\u6C42\u548C\u54CD\u5E94","children":[{"level":3,"title":"1\u3001\u8BF7\u6C42-reques","slug":"_1\u3001\u8BF7\u6C42-reques","link":"#_1\u3001\u8BF7\u6C42-reques","children":[]},{"level":3,"title":"2\u3001\u54CD\u5E94-response","slug":"_2\u3001\u54CD\u5E94-response","link":"#_2\u3001\u54CD\u5E94-response","children":[]},{"level":3,"title":"3\u3001\u91CD\u5B9A\u5411\u548C\u8F6C\u53D1\u7684\u533A\u522B","slug":"_3\u3001\u91CD\u5B9A\u5411\u548C\u8F6C\u53D1\u7684\u533A\u522B","link":"#_3\u3001\u91CD\u5B9A\u5411\u548C\u8F6C\u53D1\u7684\u533A\u522B","children":[]},{"level":3,"title":"4\u3001session\u548Ccookie","slug":"_4\u3001session\u548Ccookie","link":"#_4\u3001session\u548Ccookie","children":[]},{"level":3,"title":"5\u3001Servlet\u4E09\u5927\u57DF\u5BF9\u8C61","slug":"_5\u3001servlet\u4E09\u5927\u57DF\u5BF9\u8C61","link":"#_5\u3001servlet\u4E09\u5927\u57DF\u5BF9\u8C61","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":25.57,"words":7672},"filePathRelative":"pages/Java/JavaWeb/3-Servlet\u89C4\u8303.md"}');export{e as data};
