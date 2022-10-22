import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as d,a as t,b as n,e as a,d as e,r as u}from"./app.0662e65c.js";const r={},c=e(`<h1 id="el\u4E0Ejstl" tabindex="-1"><a class="header-anchor" href="#el\u4E0Ejstl" aria-hidden="true">#</a> EL\u4E0EJSTL</h1><h2 id="_1-el\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#_1-el\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> 1-EL\u8868\u8FBE\u5F0F</h2><h3 id="_1\u3001\u7279\u70B9" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u7279\u70B9" aria-hidden="true">#</a> 1\u3001\u7279\u70B9</h3><p>\uFF081\uFF09\u662F\u4E00\u4E2A\u7531java\u5F00\u53D1\u7684\u5DE5\u5177\u5305</p><p>\uFF082\uFF09\u7528\u4E8E\u4ECE\u7279\u5B9A\u57DF\u5BF9\u8C61\u4E2D\u8BFB\u53D6\u6570\u636E\uFF0C\u4E0D\u80FD\u5411\u57DF\u5BF9\u8C61\u4E2D\u5199\u5165\u3002</p><p>\uFF083\uFF09EL\u5DE5\u5177\u5305\u81EA\u52A8\u5B58\u5728Tomcat\u7684lib\u4E2D\uFF08el-api.jar\uFF09\uFF0C\u5F00\u53D1\u662F\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\uFF0C\u65E0\u9700\u5176\u4ED6\u989D\u5916\u7684\u5305\u3002</p><p>\uFF084\uFF09\u6807\u51C6\u683C\u5F0F \uFF1A \${\u57DF\u5BF9\u8C61\u522B\u540D.\u5173\u952E\u5B57} \u5230\u6307\u5B9A\u7684\u57DF\u4E2D\u83B7\u53D6\u76F8\u5E94\u5173\u952E\u5B57\u7684\u5185\u5BB9\uFF0C\u5E76\u5C06\u5176\u5199\u5165\u5230\u54CD\u5E94\u4F53\u3002</p><h3 id="_2\u3001\u57DF\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u57DF\u5BF9\u8C61" aria-hidden="true">#</a> 2\u3001\u57DF\u5BF9\u8C61</h3><table><thead><tr><th>jsp</th><th>el</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>application</td><td>applicationScope</td><td>\u5168\u5C40\u4F5C\u7528\u57DF\u5BF9\u8C61</td></tr><tr><td>session</td><td>sessionScope</td><td>\u4F1A\u8BDD\u4F5C\u7528\u57DF</td></tr><tr><td>request</td><td>requestScope</td><td>\u8BF7\u6C42\u4F5C\u7528\u57DF\u5BF9\u8C61</td></tr><tr><td>pageContext</td><td>pageScope</td><td>\u5F53\u524D\u9875\u4F5C\u7528\u57DF\u5BF9\u8C61</td></tr></tbody></table><p><strong>\u6CE8\uFF1A\u4F7F\u7528\u65F6\u53EF\u4EE5\u7701\u7565\u57DF\u5BF9\u8C61\u522B\u540D</strong></p><p>\u9ED8\u8BA4\u67E5\u627E\u987A\u5E8F\uFF1A pageScope -&gt; requestScope -&gt; sessionScope -&gt; applicationScope</p><p><strong>\u6700\u597D\u53EA\u5728pageScope\u4E2D\u7701\u7565</strong></p><p>\u6CE8\uFF1A\u5BF9\u5E94\u6848\u4F8B</p><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;jsp&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;%
    application.setAttribute(&quot;name&quot;,&quot;application&quot;);
    session.setAttribute(&quot;name&quot;,&quot;session&quot;);
    request.setAttribute(&quot;name&quot;,&quot;request&quot;);
    pageContext.setAttribute(&quot;name&quot;,&quot;pageContext&quot;);
  %&gt;
  &lt;br&gt;--------------------\u4F7F\u7528java\u8BED\u8A00---------------------------&lt;br&gt;
  application\u4E2D\u7684\u503C\uFF1A&lt;%= application.getAttribute(&quot;name&quot;) %&gt; &lt;br&gt;
  session\u4E2D\u7684\u503C\uFF1A&lt;%= session.getAttribute(&quot;name&quot;) %&gt; &lt;br&gt;
  request\u4E2D\u7684\u503C\uFF1A&lt;%= request.getAttribute(&quot;name&quot;) %&gt; &lt;br&gt;
  pageContext\u4E2D\u7684\u503C\uFF1A&lt;%= pageContext.getAttribute(&quot;name&quot;) %&gt; &lt;br&gt;

  &lt;br&gt;--------------------\u4F7F\u7528EL\u8868\u8FBE\u5F0F---------------------------&lt;br&gt;
  application\u4E2D\u7684\u503C\uFF1A\${applicationScope.name} &lt;br&gt;
  session\u4E2D\u7684\u503C\uFF1A\${sessionScope.name} &lt;br&gt;
  request\u4E2D\u7684\u503C\uFF1A\${requestScope.name} &lt;br&gt;
  pageContext\u4E2D\u7684\u503C\uFF1A\${pageScope.name} &lt;br&gt;

  &lt;br&gt;----------------\u4F7F\u7528EL\u8868\u8FBE\u5F0F,\u7701\u7565\u57DF\u5BF9\u8C61---------------------&lt;br&gt;
  application\u4E2D\u7684\u503C\uFF1A\${name} &lt;br&gt;

&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3\u3001\u652F\u6301\u7684\u8FD0\u7B97" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u652F\u6301\u7684\u8FD0\u7B97" aria-hidden="true">#</a> 3\u3001\u652F\u6301\u7684\u8FD0\u7B97</h3><p>\uFF081\uFF09\u6570\u5B66\u8FD0\u7B97</p><p>\uFF082\uFF09\u6BD4\u8F83\u8FD0\u7B97 &gt; gt &lt; lt &gt;= ge &lt;= le == eq != !=</p><p>\uFF083\uFF09\u903B\u8F91\u9884\u7B97 &amp;&amp; || \uFF01</p><p>\u6CE8\uFF1A\u5BF9\u5E94\u6848\u4F8B</p><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;EL\u8FD0\u7B97&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;%
    request.setAttribute(&quot;num1&quot;,&quot;12&quot;);
    request.setAttribute(&quot;num2&quot;,&quot;14&quot;);

    application.setAttribute(&quot;flag1&quot;,true);
    application.setAttribute(&quot;flag2&quot;,false);
%&gt;
&lt;br&gt;--------------------\u4F7F\u7528java\u8BED\u8A00---------------------------&lt;br&gt;
&lt;%
    String num1 = (String)request.getAttribute(&quot;num1&quot;);
    String num2 = (String)request.getAttribute(&quot;num2&quot;);
    int num3 = Integer.parseInt(num1) + Integer.parseInt(num2);
    
    boolean flag1 = (Boolean) application.getAttribute(&quot;flag1&quot;);
    boolean flag2 = (Boolean) application.getAttribute(&quot;flag2&quot;);
    boolean flag3 = flag1 &amp;&amp; flag2;
    //\u8F93\u51FA\u65B9\u5F0F\u4E00
    out.write(Boolean.toString(flag3));
%&gt;
&lt;!-- \u8F93\u51FA\u65B9\u5F0F\u4E8C --&gt;
&lt;h1&gt;&lt;%=num3%&gt;&lt;/h1&gt;

&lt;br&gt;--------------------\u4F7F\u7528EL\u8868\u8FBE\u5F0F--------------------------&lt;br&gt;
&lt;h1&gt;\${ requestScope.num1 + requestScope.num2 }&lt;/h1&gt;
&lt;h1&gt;\${ requestScope.num1 &gt; requestScope.num2 }&lt;/h1&gt;
&lt;h1&gt;\${ applicationScope.flag1 &amp;&amp; applicationScope.flag2 }&lt;/h1&gt;

&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4\u3001el\u8868\u8FBE\u5F0F\u7684\u7F3A\u9677" tabindex="-1"><a class="header-anchor" href="#_4\u3001el\u8868\u8FBE\u5F0F\u7684\u7F3A\u9677" aria-hidden="true">#</a> 4\u3001EL\u8868\u8FBE\u5F0F\u7684\u7F3A\u9677</h3><p>\uFF081\uFF09\u53EA\u80FD\u8BFB\u53D6\u57DF\u5BF9\u8C61\u4E2D\u7684\u503C\uFF0C\u4E0D\u80FD\u5199\u5165</p><p>\uFF082\uFF09\u4E0D\u652F\u6301if\u5224\u65AD\u548C\u63A7\u5236\u8BED\u53E5</p><h2 id="_2-jstl\u6807\u7B7E\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#_2-jstl\u6807\u7B7E\u5DE5\u5177" aria-hidden="true">#</a> 2-JSTL\u6807\u7B7E\u5DE5\u5177</h2><h3 id="_1\u3001\u57FA\u672C\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u57FA\u672C\u4ECB\u7ECD" aria-hidden="true">#</a> 1\u3001\u57FA\u672C\u4ECB\u7ECD</h3><p>\uFF081\uFF09 JSP Standrad Tag Lib jsp\u6807\u51C6\u6807\u7B7E\u5E93</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>\u6838\u5FC3\u6807\u7B7E      \u5BF9java\u5728jsp\u4E0A\u57FA\u672C\u529F\u80FD\u8FDB\u884C\u5C01\u88C5\uFF0C\u5982 if while\u7B49    \u4E3B\u8981\u5B66\u4E60
sql\u6807\u7B7E      JDBC\u5728jsp\u4E0A\u7684\u4F7F\u7528
xml\u6807\u7B7E      Dom4j\u5728jsp\u4E0A\u7684\u4F7F\u7528
format\u6807\u7B7E   jsp\u6587\u4EF6\u683C\u5F0F\u8F6C\u6362
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uFF084\uFF09\u4F7F\u7528\u539F\u56E0\uFF1A<strong>\u4F7F\u7528\u7B80\u5355\uFF0C\u4E14\u5728JSP\u7F16\u7A0B\u5F53\u4E2D\u8981\u6C42\u5C3D\u91CF\u4E0D\u51FA\u73B0java\u4EE3\u7801\u3002</strong></p><h3 id="_2\u3001\u4F7F\u7528\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u4F7F\u7528\u65B9\u5F0F" aria-hidden="true">#</a> 2\u3001\u4F7F\u7528\u65B9\u5F0F</h3><p>\uFF081\uFF09tomcat10 \u4EE5\u524D\u7684\u5BFC\u5165\u4F9D\u8D56\u7684jar\u5305 jstl.jar standard.jar</p>`,30),o={href:"http://archive.apache.org/dist/jakarta/taglibs/standard/binaries/",target:"_blank",rel:"noopener noreferrer"},v=e(`<p>tomcat10\u4EE5\u540E\u4F7F\u7528 jakarta.servlet.jsp.jstl-2.0.0.jar</p><p>\u5F53\u7136\u5728tomcat10\u4E2D\u4E5F\u6709\u8FD9\u4E24\u4E2Ajar\u5305\uFF0C\u627E\u5230tomcat10\u4E2D\u7684\u4F8B\u5B50\u7A0B\u5E8F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>D:\\javaweb\\tomcat\\apache-tomcat-10.0.11\\apache-tomcat-10.0.11\\webapps\\examples\\WEB-INF\\lib
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/huluhutu/blogimg/main/img/image-20211013140248426.png" alt="image-20211013140248426" loading="lazy"></p><p>\uFF082\uFF09\u5728jsp\u4E2D\u5F15\u5165JSTL\u7684core\u5305\u4F9D\u8D56\u7EA6\u675F</p><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>&lt;%@ taglib prefix=&quot;c&quot; uri=&quot;http://java.sun.com/jsp/jstl/core&quot; %&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3\u3001\u91CD\u8981\u6807\u7B7E\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u91CD\u8981\u6807\u7B7E\u7684\u4F7F\u7528" aria-hidden="true">#</a> 3\u3001\u91CD\u8981\u6807\u7B7E\u7684\u4F7F\u7528</h3><h4 id="_1-c-set" tabindex="-1"><a class="header-anchor" href="#_1-c-set" aria-hidden="true">#</a> \uFF081\uFF09 &lt;c:set&gt;</h4><p>\u5728JSP\u6587\u4EF6\u4E0A\u8BBE\u7F6E\u57DF\u5BF9\u8C61\u4E2D\u7684\u5171\u4EAB\u6570\u636E</p><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;%@ taglib uri=&quot;http://java.sun.com/jsp/jstl/core&quot; prefix=&quot;c&quot;%&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;  c:set  &lt;/title&gt;
&lt;/head&gt;
    &lt;body&gt;
        &lt;!--
        \u76F8\u5F53\u4E8E
        &lt;%--  &lt;%   --%&gt;
        &lt;%--   request.setAttribute(&quot;name&quot;,&quot;zhangsan&quot;);--%&gt;
        &lt;%--  %&gt;  --%&gt;
        --&gt;
        &lt;c:set scope=&quot;request&quot; var=&quot;name&quot; value=&quot;zhangsan&quot; /&gt;
        \u901A\u8FC7JSTL\u6807\u7B7E\u6DFB\u52A0\u7684\u4F5C\u7528\u57DF\u4E2D\u7684\u503C\uFF1A\${requestScope.name}   &lt;br&gt;
        &lt;c:set scope=&quot;application&quot; var=&quot;name&quot; value=&quot;lisi&quot; /&gt;
        \u901A\u8FC7JSTL\u6807\u7B7E\u6DFB\u52A0\u7684\u4F5C\u7528\u57DF\u4E2D\u7684\u503C\uFF1A\${applicationScope.name}   &lt;br&gt;
        &lt;c:set scope=&quot;request&quot; var=&quot;name&quot; value=&quot;wangwu&quot; /&gt;
        \u901A\u8FC7JSTL\u6807\u7B7E\u6DFB\u52A0\u7684\u4F5C\u7528\u57DF\u4E2D\u7684\u503C\uFF1A\${requestScope.name}   &lt;br&gt;
        &lt;c:set scope=&quot;page&quot; var=&quot;name&quot; value=&quot;zhaoliu&quot; /&gt;
        \u901A\u8FC7JSTL\u6807\u7B7E\u6DFB\u52A0\u7684\u4F5C\u7528\u57DF\u4E2D\u7684\u503C\uFF1A\${pageScope.name}   &lt;br&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-c-if" tabindex="-1"><a class="header-anchor" href="#_2-c-if" aria-hidden="true">#</a> \uFF082\uFF09&lt;c:if &gt;</h4><p>\u63A7\u5236\u54EA\u4E9B\u5185\u5BB9\u80FD\u591F\u8F93\u51FA\u5230\u54CD\u5E94\u4F53</p><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;%@ taglib uri=&quot;http://java.sun.com/jsp/jstl/core&quot; prefix=&quot;c&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt; c:if &lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;c:set scope=&quot;page&quot; var=&quot;age&quot; value=&quot;20&quot;/&gt;
    &lt;br&gt;------------------------------\u4F7F\u7528java\u8BED\u8A00-------------------------------------&lt;br&gt;
    &lt;%
        if( Integer.parseInt((String)pageContext.getAttribute(&quot;age&quot;)) &gt;= 18 ){
    %&gt;
    \u8F93\u5165\uFF1A\u6B22\u8FCE\u5149\u4E34\uFF01
    &lt;%  } else { %&gt;
    \u8F93\u5165\uFF1A\u672A\u6EE1\u5341\u516B\uFF0C\u4E0D\u51C6\u5165\u5185\uFF01
    &lt;%  }  %&gt;
    &lt;br&gt;------------------------------\u4F7F\u7528JSTL\u6807\u7B7E-------------------------------------&lt;br&gt;

    &lt;c:if test=&quot;\${ age ge 18 }&quot;&gt;
        \u8F93\u5165\uFF1A\u6B22\u8FCE\u5149\u4E34\uFF01
    &lt;/c:if&gt;
    &lt;c:if test=&quot;\${ age lt 18 }&quot;&gt;
        \u8F93\u5165\uFF1A\u672A\u6EE1\u5341\u516B\uFF0C\u4E0D\u51C6\u5165\u5185\uFF01
    &lt;/c:if&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-c-choose" tabindex="-1"><a class="header-anchor" href="#_3-c-choose" aria-hidden="true">#</a> \uFF083\uFF09&lt;c:choose&gt;</h4><p>\u5728jsp\u4E2D\u8FDB\u884C\u591A\u5206\u652F\u5224\u65AD\uFF0C\u51B3\u5B9A\u54EA\u4E2A\u5185\u5BB9\u5199\u5165\u54CD\u5E94\u4F53</p><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;%@ taglib uri=&quot;http://java.sun.com/jsp/jstl/core&quot; prefix=&quot;c&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt; c:choose &lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;c:set scope=&quot;page&quot; var=&quot;age&quot; value=&quot;6&quot;/&gt;
    &lt;br&gt;------------------------------\u4F7F\u7528java\u8BED\u8A00-------------------------------------&lt;br&gt;
    &lt;%
        if( Integer.parseInt((String)pageContext.getAttribute(&quot;age&quot;)) == 18 ){
    %&gt;
    \u8F93\u5165\uFF1A\u60A8\u4ECA\u5E74\u6210\u5E74\u4E86
    &lt;%  } else if( Integer.parseInt((String)pageContext.getAttribute(&quot;age&quot;)) &gt; 18 ){ %&gt;
    \u8F93\u5165\uFF1A\u60A8\u5DF2\u7ECF\u6210\u5E74\u4E86
    &lt;%  }  else {%&gt;
    \u8F93\u51FA\uFF1A\u60A8\u8FD8\u662F\u4E2A\u5B69\u5B50
    &lt;% } %&gt;
    &lt;br&gt;------------------------------\u4F7F\u7528JSTL\u6807\u7B7E-------------------------------------&lt;br&gt;

    &lt;c:choose&gt;
        &lt;c:when test=&quot;\${age eq 18}&quot;&gt;
            \u8F93\u5165\uFF1A\u60A8\u4ECA\u5E74\u6210\u5E74\u4E86
        &lt;/c:when&gt;
        &lt;c:when test=&quot;\${age gt 18}&quot;&gt;
            \u8F93\u5165\uFF1A\u60A8\u5DF2\u7ECF\u6210\u5E74\u4E86
        &lt;/c:when&gt;
        &lt;c:otherwise&gt;
            \u8F93\u5165\uFF1A\u60A8\u8FD8\u662F\u4E2A\u5B69\u5B50
        &lt;/c:otherwise&gt;
    &lt;/c:choose&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-c-foreach" tabindex="-1"><a class="header-anchor" href="#_4-c-foreach" aria-hidden="true">#</a> \uFF084\uFF09&lt;c:forEach&gt;</h4><p>\u5FAA\u73AF\u904D\u5386</p><p>\u4F7F\u7528\u65B9\u5F0F</p><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>&lt;c:forEach var=&quot;\u7533\u660E\u5FAA\u73AF\u53D8\u91CF\u7684\u540D\u79F0&quot; begin=&quot;\u521D\u59CB\u5316\u5FAA\u73AF\u53D8\u91CF&quot; 
           end=&quot;\u5FAA\u73AF\u53D8\u91CF\u53EF\u4EE5\u63A5\u53D7\u7684\u6700\u5927\u503C&quot; step=&quot;\u5FAA\u73AF\u53D8\u91CF\u7684\u9012\u589E\u6216\u9012\u51CF\u503C&quot;&gt;
    *** step\u5C5E\u6027\u53EF\u4EE5\u4E0D\u5199\uFF0C\u9ED8\u8BA4\u9012\u589E1
    *** \u5FAA\u73AF\u53D8\u91CF\u9ED8\u8BA4\u4FDD\u5B58\u5728pageContext\u4E2D
&lt;/c:forEach&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F8B\u5B50</p><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>&lt;%@ page import=&quot;com.zn.Student&quot; %&gt;
&lt;%@ page import=&quot;java.util.List&quot; %&gt;
&lt;%@ page import=&quot;java.util.ArrayList&quot; %&gt;
&lt;%@ page import=&quot;java.util.Map&quot; %&gt;
&lt;%@ page import=&quot;java.util.HashMap&quot; %&gt;
&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;%@ taglib uri=&quot;http://java.sun.com/jsp/jstl/core&quot; prefix=&quot;c&quot; %&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt; c:forEach &lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;%
        pageContext.setAttribute(&quot;students&quot;,new ArrayList(){{
            add(new Student(&quot;s1&quot;,&quot;zhangsan&quot;,16));
            add(new Student(&quot;s2&quot;,&quot;lisi&quot;,19));
            add(new Student(&quot;s3&quot;,&quot;wangwu&quot;,15));
        }});
        pageContext.setAttribute(&quot;stuMap&quot;, new HashMap(){{
            put(&quot;m1&quot;,new Student(&quot;s1&quot;,&quot;zhangsan&quot;,16));
            put(&quot;m2&quot;,new Student(&quot;s2&quot;,&quot;lisi&quot;,18));
            put(&quot;m3&quot;,new Student(&quot;s3&quot;,&quot;wangwu&quot;,15));
        }});
    %&gt;
    &lt;br&gt;------------------------\u4F7F\u7528java\u8BED\u8A00------------------------------&lt;br&gt;
    &lt;table&gt;
        &lt;tr&gt;&lt;td&gt;\u5B66\u53F7&lt;/td&gt;&lt;td&gt;\u59D3\u540D&lt;/td&gt;&lt;td&gt;\u5E74\u9F84&lt;/td&gt;&lt;/tr&gt;
        &lt;%
            List&lt;Student&gt; stus =            (ArrayList&lt;Student&gt;)pageContext.getAttribute(&quot;students&quot;);
            for (int i = 0; i &lt; stus.size(); i++) {
        %&gt;
          &lt;tr&gt;&lt;td&gt;&lt;%=stus.get(i).getSid()%&gt;&lt;/td&gt;
              &lt;td&gt;&lt;%=stus.get(i).getName()%&gt;&lt;/td&gt;
              &lt;td&gt;&lt;%=stus.get(i).getAge()%&gt;&lt;/td&gt;
          &lt;/tr&gt;
        &lt;% } %&gt;
    &lt;/table&gt;
    
    &lt;br&gt;----------------------\u4F7F\u7528JSTL\u6807\u7B7E\u8BFB\u53D6list-----------------------&lt;br&gt;
    &lt;table&gt;
        &lt;tr&gt;&lt;td&gt;\u5B66\u53F7&lt;/td&gt;&lt;td&gt;\u59D3\u540D&lt;/td&gt;&lt;td&gt;\u5E74\u9F84&lt;/td&gt;&lt;/tr&gt;
        &lt;c:forEach var=&quot;student&quot; items=&quot;\${students}&quot;&gt;
        &lt;tr&gt;&lt;td&gt;\${student.sid}&lt;/td&gt;
            &lt;td&gt;\${student.name}&lt;/td&gt;
            &lt;td&gt;\${student.age}&lt;/td&gt;
        &lt;/tr&gt;
        &lt;/c:forEach&gt;
    &lt;/table&gt;

    &lt;br&gt;---------------------\u4F7F\u7528JSTL\u6807\u7B7E\u8BFB\u53D6map------------------------&lt;br&gt;
    &lt;table&gt;
        &lt;tr&gt;&lt;td&gt;\u5B66\u53F7&lt;/td&gt;&lt;td&gt;\u59D3\u540D&lt;/td&gt;&lt;td&gt;\u5E74\u9F84&lt;/td&gt;&lt;/tr&gt;
        &lt;c:forEach var=&quot;student&quot; items=&quot;\${stuMap}&quot;&gt;
            &lt;tr&gt;
                &lt;td&gt;\${student.key}&lt;/td&gt;
                &lt;td&gt;\${student.value.sid}&lt;/td&gt;
                &lt;td&gt;\${student.value.name}&lt;/td&gt;
                &lt;td&gt;\${student.value.age}&lt;/td&gt;
            &lt;/tr&gt;
        &lt;/c:forEach&gt;
    &lt;/table&gt;

    &lt;br&gt;--------------\u4F7F\u7528JSTL\u6807\u7B7E\u8BFB\u53D6\u6307\u5B9Afor\u5FAA\u73AF-----------------------&lt;br&gt;
    &lt;select&gt;
      &lt;c:forEach var=&quot;item&quot; begin=&quot;1&quot; end=&quot;10&quot; step=&quot;1&quot;&gt;
          &lt;option&gt; \${item} &lt;/option&gt;
      &lt;/c:forEach&gt;
    &lt;/select&gt;

&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4E2D\u4F7F\u7528\u7684java\u5BF9\u8C61\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">private</span> <span class="token class-name">String</span> sid<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getSid</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> sid<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setSid</span><span class="token punctuation">(</span><span class="token class-name">String</span> sid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>sid <span class="token operator">=</span> sid<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token class-name">String</span> sid<span class="token punctuation">,</span> <span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>sid <span class="token operator">=</span> sid<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u8DEF\u5F84\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_3-\u8DEF\u5F84\u95EE\u9898" aria-hidden="true">#</a> 3-\u8DEF\u5F84\u95EE\u9898</h2><p>\u5728\u6211\u4EEC\u8868\u793A\u4E00\u4E2A\u8D44\u6E90\u7684\u4F4D\u7F6E\u7684\u65F6\u5019\u901A\u5E38\u6709\u4E24\u79CD\u65B9\u5F0F\uFF0C\u4E00\u4E2A\u662F\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u4E00\u4E2A\u662F\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u6211\u4EEC\u5B66\u4E60html\u7684\u65F6\u5019\u5DF2\u7ECF\u5B66\u4E60\u8FC7\uFF0C\u4ECA\u5929\u91CD\u65B0\u56DE\u987E\u4E00\u4E0B\u3002</p><ol><li><p>\u7EDD\u5BF9\u8DEF\u5F84\uFF1A\u4ECE\u6839\u76EE\u5F55\u4E3A\u8D77\u70B9\u5230\u67D0\u4E00\u4E2A\u76EE\u5F55\u7684\u8DEF\u5F84\uFF1B /C://aa/bb/a.txt</p></li><li><p>\u76F8\u5BF9\u8DEF\u5F84\uFF1A\u4ECE\u4E00\u4E2A\u76EE\u5F55\u4E3A\u8D77\u70B9\u5230\u53E6\u5916\u4E00\u4E2A\u7684\u76EE\u5F55\u7684\u8DEF\u5F84\u3002 ./b.txt b.txt</p></li></ol><p>\u200B \u540C\u6837\u6211\u4EEC\u83B7\u53D6\u4E00\u4E2A\u7F51\u7EDC\u8D44\u6E90\u7684\u65F6\u5019\uFF0C\u4E00\u6837\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E24\u79CD\u65B9\u5F0F\uFF0C\u4F7F\u7528\u7EDD\u5BF9\u8DEF\u5F84\u4E5F\u5C31\u662Furl\uFF0C\u6211\u4EEC\u5C31\u4E0D\u5FC5\u91CD\u65B0\u8BF4\u4E86\uFF0C\u4F46\u662F\u4F7F\u7528\u76F8\u5BF9\u8DEF\u5F84\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u9700\u8981\u638C\u63E1\u4EE5\u4E0B\u4E24\u4E2A\u77E5\u8BC6\u70B9\u3002</p>`,28),p=t("li",null,"\u7AD9\u70B9\u7684\u6839\u76EE\u5F55\uFF1A\u6D4F\u89C8\u5668\u800C\u8A00\uFF0C\u5B83\u7684\u6839\u76EE\u5F55\u5C31\u662F\u7AD9\u70B9\u6839\u76EE\u5F55\uFF0C\u53EF\u80FD\u662F\u4F60\u78C1\u76D8\u4E0A\u7684\u4EFB\u610F\u4E00\u4E2A\u6587\u4EF6\u5939\uFF0C\u6B64\u65F6\u4E00\u4E2Aurlhttp://localhost:9999/\u53EF\u4EE5\u6620\u5C04\u5230\u8FD9\u4E2A\u6587\u4EF6\u5939\uFF0C\u8FD9\u5C31\u4EE3\u8868\u4E86\u4E00\u4E2A\u7AD9\u70B9\u7684\u6839\u76EE\u5F55\u3002",-1),g={href:"http://localhost:9999/study01/%E3%80%82",target:"_blank",rel:"noopener noreferrer"},m=e(`<p><code>/</code>\u4E00\u822C\u662F\u6307\u4EE3\u67D0\u79CD\u60C5\u51B5\u4E0B\u7684\u6839\u8DEF\u5F84\uFF0C\u5728\u524D\u7AEF\u4F7F\u7528\u5C31\u6307\u4EE3\u7AD9\u70B9\u6839\u8DEF\u5F84\uFF0C\u5728\u670D\u52A1\u5668\u4E2D\u5C31\u662F\u9879\u76EE\u8DDF\u6839\u8DEF\u5F84\u3002</p><p>\u6240\u4EE5\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C</p><ul><li>\u7EDD\u5BF9\u8DEF\u5F84\u662F\u4EE5/\u5F00\u5934\u6216\u8005\u4F7F\u7528\u6574\u4F53\u7684url\u3002</li><li>\u3010\u91CD\u8981\u3011\u5982\u679C\u662F\u5728\u6D4F\u89C8\u5668\u4E2D\u8BBF\u95EE\u5C31\u662F\u7AD9\u70B9\u6839\u76EE\u5F55\uFF0C\u5982\u679C\u662F\u5728java\u9879\u76EE\u4EE3\u7801\u4E2D\u4F7F\u7528\u5C31\u6307\u9879\u76EE\u6839\u76EE\u5F55\u3002</li><li>\u76F8\u5BF9\u8DEF\u5F84\u4F7F\u7528<code>./</code>\u6216\u8005<code>../</code>\u6216\u8005\u6587\u4EF6\u540D\u5F00\u5934\uFF0C\u5176\u4E2D<code>./</code>\u4EE3\u8868\u5F53\u524D\u6587\u4EF6\u5939\uFF0C<code>../</code>\u4EE3\u8868\u4E0A\u7EA7\u6587\u4EF6\u5939\u3002</li></ul><p>\u4EE5\u4E0B\u51E0\u4E2A\u573A\u666F\u4E2D\u6211\u4EEC\u4F7F\u7528\u7EDD\u5BF9\u8DEF\u5F84\u9700\u8981\u6CE8\u610F\uFF1A</p><p>1\u3001\u5728\u670D\u52A1\u7AEF\u8FDB\u884C\u8BF7\u6C42\u8F6C\u53D1\uFF0C\u56E0\u4E3A\u8F6C\u53D1\u7684\u8FC7\u7A0B\u5728\u670D\u52A1\u7AEF\u8FDB\u884C\uFF0C\u6240\u4EE5\u4E0D\u9700\u8981\u52A0contextPath\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>req.getRequestDispatcher(&quot;/WEB-INF/pages/error.jsp&quot;).forward(req,resp);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2\u3001\u5728\u670D\u52A1\u7AEF\u8FDB\u884C\u91CD\u5B9A\u5411\uFF0C\u5927\u5BB6\u8981\u660E\u767D\u4E00\u70B9\uFF0C\u91CD\u5B9A\u5411\u5176\u5B9E\u662F\u5728\u6D4F\u89C8\u5668\u4E2D\u5177\u4F53\u6267\u884C\u7684\uFF0C\u6240\u4EE5\u5FC5\u987B\u52A0contextPath\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>response.sendRedirect(request.getContextPath() + &quot;/login.jsp&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3\u3001\u5728\u6D4F\u89C8\u5668\u7AEF\u8BBF\u95EE\u4E00\u4E2A\u65B0\u7684\u5730\u5740\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/first_web/pages/index.jsp<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u524D\u5F80\u4E3B\u9875<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4\u3001\u5728\u6D4F\u89C8\u5668\u4E2D\u8BBF\u95EE\u9759\u6001\u8D44\u6E90</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/first_web/static/js/index.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4EE5\u4E0B\u662F\u6211\u4EEC\u901A\u5E38\u7684\u5904\u7406\u65B9\u6848\uFF1A</p><p>1\u3001\u5728jsp\u4E2D\u5B9A\u4E49\u597D\u6211\u4EEC\u7684basePath\uFF0C\u8FD9\u4E2A\u8DEF\u5F84\u662F\u5E26\u6709contextPath\u7684\u3002</p><p>2\u3001\u5728Head\u4E2D\u6307\u5B9A\uFF0C <code>&lt;base href=&quot;&lt;%=basePath%&gt;&quot;&gt; </code>\u3002</p><p>3\u3001\u5728\u5177\u4F53\u7684\u5730\u5740\u5904\u4F7F\u7528\u76F8\u5BF9\u4E8EcontextPath\u7684\u8DEF\u5F84\u3002</p><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>&lt;%@ page language=&quot;java&quot; import=&quot;java.util.*&quot; pageEncoding=&quot;UTF-8&quot;%&gt;
&lt;%
   String path = request.getContextPath();
   String basePath = request.getScheme()+&quot;://&quot;+request.getServerName()+&quot;:&quot;+request.getServerPort()+path+&quot;/&quot;;
%&gt;
&lt;html&gt;
&lt;head&gt;
   &lt;title&gt;image\u8C03\u7528&lt;/title&gt;
   &lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=UTF-8&quot;&gt;   
   &lt;base href=&quot;&lt;%=basePath%&gt;&quot;&gt; 
&lt;/head&gt;
&lt;body&gt;
   &lt;h1&gt;\u56FE\u7247\u8BBF\u95EE&lt;/h1&gt;
   &lt;div&gt;   
     &lt;img alt=&quot;\u56FE\u7247&quot; src=&quot;image/a.png&quot;&gt;
   &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),b={href:"http://localhost:8080/first_web/image/a.png",target:"_blank",rel:"noopener noreferrer"},h=e(`<h2 id="_4-\u9519\u8BEF\u9875\u9762\u548C404\u9875\u9762" tabindex="-1"><a class="header-anchor" href="#_4-\u9519\u8BEF\u9875\u9762\u548C404\u9875\u9762" aria-hidden="true">#</a> 4-\u9519\u8BEF\u9875\u9762\u548C404\u9875\u9762</h2><p>\u6211\u4EEC\u53EF\u4EE5\u5728web.xml\u4E2D\u6839\u636E\u9519\u8BEF\u7801\u548C\u5F02\u5E38\u7C7B\u578B\uFF0C\u914D\u7F6E\u4E0D\u540C\u5F02\u5E38\u60C5\u51B5\u4E0B\u7684\u9519\u8BEF\u9875\u9762\u3002</p><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>&lt;error-page&gt;
    &lt;error-code&gt;404&lt;/error-code&gt;
    &lt;location&gt;/pages/404.jsp&lt;/location&gt;
&lt;/error-page&gt;

&lt;error-page&gt;
    &lt;exception-type&gt;java.lang.Exception&lt;/exception-type&gt;
    &lt;location&gt;/pages/err.jsp&lt;/location&gt;
&lt;/error-page&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function q(k,j){const s=u("ExternalLinkIcon");return l(),d("div",null,[c,t("p",null,[n("\u4E0B\u8F7D\u5730\u5740"),t("a",o,[n("http://archive.apache.org/dist/jakarta/taglibs/standard/binaries/"),a(s)])]),v,t("ol",null,[p,t("li",null,[n("\u9879\u76EE\u7684\u6839\u76EE\u5F55\uFF1A\u5BF9\u4E8E\u54B1\u4EEC\u7684\u5DE5\u7A0B\u800C\u8A00\uFF0C\u670D\u52A1\u7AEF\u7684\u6839\u76EE\u5F55\u662F\u9879\u76EE\u6839\u76EE\u5F55\uFF0C\u5176\u5B9E\u5728tomcat\u4E2D\uFF0C\u4E00\u4E2Aapp\u5C31\u662F\u4E00\u4E2A\u72EC\u7ACB\u7684\u6587\u4EF6\u5939\uFF0C\u76F8\u5BF9\u4E8E\u7AD9\u70B9\u6839\u76EE\u5F55\uFF0C\u9879\u76EE\u7684\u6839\u76EE\u5F55\u591A\u4E86\u4E00\u4E2Aapp\u7684\u540D\u5B57\uFF1A "),t("a",g,[n("http://localhost:9999/study01/\u3002"),a(s)])])]),m,t("p",null,[n("\u4EE5\u4E0A\u7ED3\u6784\u4E2D\u7684\u56FE\u7247\u771F\u5B9E\u7684\u8BBF\u95EE\u8DEF\u5F84\u662F\uFF1A "),t("a",b,[n("http://localhost:8080/first_web/image/a.png"),a(s)])]),h])}const S=i(r,[["render",q],["__file","5-EL\u4E0EJSTL.html.vue"]]);export{S as default};
