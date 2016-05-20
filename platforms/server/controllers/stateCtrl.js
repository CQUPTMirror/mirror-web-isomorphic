// import fetch from 'isomorphic-fetch'
import marked from 'marked'
import hljs from 'highlight.js'
marked.setOptions({
  highlight: code => hljs.highlightAuto(code).value
})

export default async (ctx, next) => {
  ctx.body = {
    mirrorState: [{
      "universalName": "Ubuntu-releases",
      "lastUpdate": 1463590811,
      "mirrorUrl": "/mirror/ubuntu-releases",
      "guideUrl": false
    }, {
      "universalName": "Npm",
      "lastUpdate": 1463669541,
      "mirrorUrl": "/mirror/npm",
      "guideUrl": "/guide/npm"
    }, {
      "universalName": "Lxc-images",
      "lastUpdate": 0,
      "mirrorUrl": "/mirror/lxc-images",
      "guideUrl": false
    }, {
      "universalName": "Archlinuxcn",
      "lastUpdate": 1463598138,
      "mirrorUrl": "/mirror/archlinuxcn",
      "guideUrl": false
    }, {
      "universalName": "Node",
      "lastUpdate": 1461683120,
      "mirrorUrl": "/mirror/node",
      "guideUrl": false
    }, {
      "universalName": "Iojs",
      "lastUpdate": 0,
      "mirrorUrl": "/mirror/iojs",
      "guideUrl": false
    }, {
      "universalName": "Archlinux",
      "lastUpdate": 1463598823,
      "mirrorUrl": "/mirror/archlinux",
      "guideUrl": "/guide/Archlinux"
    }, {
      "universalName": "Debian",
      "lastUpdate": 1463598823,
      "mirrorUrl": "/mirror/debian",
      "guideUrl": "/guide/Debian"
    }, {
      "universalName": "CentOS",
      "lastUpdate": 1463603493,
      "mirrorUrl": "/mirror/centos",
      "guideUrl": "/guide/CentOS"
    }, {
      "universalName": "Epel",
      "lastUpdate": 1463601735,
      "mirrorUrl": "/mirror/epel",
      "guideUrl": "/guide/Epel"
    }, {
      "universalName": "Ubuntu",
      "lastUpdate": 1463590811,
      "mirrorUrl": "/mirror/ubuntu",
      "guideUrl": "/guide/Ubuntu"
    }, {
      "universalName": "Pypi",
      "lastUpdate": 1463614716,
      "mirrorUrl": "/mirror/pypi",
      "guideUrl": "/guide/Pypi"
    }],
    guides: [{
      universalName: 'CentOS',
      parsedMarkdown: marked(require('fs').readFileSync('/Users/Liuchenling/Sites/cqupt-mirrors-howto/centos-mirror-howto.md', 'utf-8'))
    }, {
      universalName: 'Ubuntu',
      parsedMarkdown: '<h1 id=\"ubuntu-\">Ubuntu镜像使用帮助</h1>\n<h2 id=\"-\">收录架构</h2>\n<ul>\n<li>i386</li>\n<li>x86_64</li>\n</ul>\n<h2 id=\"-\">收录版本</h2>\n<p>目前官方支持的所有版本，包括Current和Future。详情可参见: <a href=\"https://wiki.ubuntu.com/Releases\">List of releases</a></p>\n<h2 id=\"-\">使用说明</h2>\n<h3 id=\"-ubuntu-wily-werewolf-15-10-\">以下教程以Ubuntu Wily Werewolf（15.10）为例</h3>\n<ul>\n<li><p>打开终端</p>\n</li>\n<li><p>备份原有 sources.list 文件，在终端中输入:<br><code>sudo cp /etc/apt/sources.list /etc/apt/sources.list.backup</code></p>\n</li>\n<li><p>编辑 sources.list 文件，在终端中输入:<br><code>sudo gedit /etc/apt/sources.list</code></p>\n</li>\n<li><p>清空文件中所有内容，加入以下内容，并保存：</p>\n<pre><code>deb http://ubuntu.mirrors.cqupt.edu.cn/ wily main restricted universe multiverse \ndeb http://ubuntu.mirrors.cqupt.edu.cn/ wily-security main restricted universe multiverse \ndeb http://ubuntu.mirrors.cqupt.edu.cn/ wily-updates main restricted universe multiverse \ndeb http://ubuntu.mirrors.cqupt.edu.cn/ wily-proposed main restricted universe multiverse \ndeb http://ubuntu.mirrors.cqupt.edu.cn/ wily-backports main restricted universe multiverse \ndeb-src http://ubuntu.mirrors.cqupt.edu.cn/ wily main restricted universe multiverse \ndeb-src http://ubuntu.mirrors.cqupt.edu.cn/ wily-security main restricted universe multiverse \ndeb-src http://ubuntu.mirrors.cqupt.edu.cn/ wily-updates main restricted universe multiverse \ndeb-src http://ubuntu.mirrors.cqupt.edu.cn/ wily-proposed main restricted universe multiverse \ndeb-src http://ubuntu.mirrors.cqupt.edu.cn/ wily-backports main restricted universe multiverse</code></pre>\n</li>\n<li><p>刷新软件源，在终端中输入:<br><code>sudo apt-get update</code></p>\n</li>\n</ul>\n<h4 id=\"-\">其他版本</h4>\n<p>若使用Ubuntu Xenial Xerus（16.04），将 wily 替换为 xenial<br>若使用Ubuntu Trusty Tahr（14.04），将 wily 替换为 trusty<br>若使用Ubuntu Precise Pangolin（12.04），将 wily 替换为 precise</p>\n<h2 id=\"-\">相关链接</h2>\n<ul>\n<li><a href=\"http://www.ubuntu.com/\">官方主页</a></li>\n<li><a href=\"http://www.ubuntu.com/support/community/mailinglists\">邮件列表</a></li>\n<li><a href=\"http://ubuntuforums.org/\">论坛</a></li>\n<li><a href=\"http://forum.ubuntu.org.cn/\">中文论坛</a></li>\n<li><a href=\"https://wiki.ubuntu.com/\">Wiki</a></li>\n<li><a href=\"http://wiki.ubuntu.org.cn/\">中文Wiki</a></li>\n<li><a href=\"https://help.ubuntu.com/\">文档</a></li>\n</ul>\n'
    }, {
      universalName: 'Debian',
      parsedMarkdown: '<h1 id=\"debian-\">Debian 镜像使用帮助</h1>\n<h2 id=\"-\">收录架构</h2>\n<ul>\n<li><p>i386</p>\n</li>\n<li><p>amd64</p>\n</li>\n<li><p>source</p>\n</li>\n</ul>\n<h2 id=\"-\">收录发行版本</h2>\n<ul>\n<li><p>jessie</p>\n</li>\n<li><p>wheezy</p>\n</li>\n<li><p>testing</p>\n</li>\n</ul>\n<h2 id=\"-\">使用说明</h2>\n<p>以 Jessie 为例, 编辑 /etc/apt/sources.list 文件, 在文件最前面添加以下条目 </p>\n<pre><code>deb http://debian.mirrors.cqupt.edu.cn/ jessie main contrib non-free\ndeb-src http://debian.mirrors.cqupt.edu.cn/ jessie main contrib non-free\ndeb http://debian.mirrors.cqupt.edu.cn/ jessie-proposed-updates main contrib non-free\ndeb-src http://debian.mirrors.cqupt.edu.cn/ jessie-proposed-updates main contrib non-free</code></pre>\n\n<p>如果使用的是其他版本，将其中的 jessie 改为相应的发行版本代号即可。</p>\n'
    }, {
      universalName: 'npm',
      parsedMarkdown: '<h1 id=\"npm-\">NPM 镜像使用说明</h1>\n<p><img src=\"https://dn-redrock.qbox.me/rednpm.png\" alt=\"rednpm\"></p>\n<p><strong>部署于 中国教育和科研计算机网 (CERNET) 重庆 - 重庆邮电大学节点</strong></p>\n<p>官网: <a href=\"http://npm.mirror.cqupt.edu.cn/\">http://npm.mirror.cqupt.edu.cn/</a></p>\n<h2 id=\"usage\">Usage</h2>\n<ul>\n<li>使用 <code>rednpm</code> 客户端 <em>recommended</em></li>\n</ul>\n<pre><code class=\"lang-bash\"><span class=\"hljs-comment\"># 安装 rednpm 客户端</span>\n$ npm i rednpm -g --<span class=\"hljs-keyword\">registry</span>=<span class=\"hljs-keyword\">http</span>://<span class=\"hljs-keyword\">registry</span>.mirror.cqupt.edu.cn\n$ rednpm i [<span class=\"hljs-keyword\">package</span>-name] --save\n</code></pre>\n<ul>\n<li>或者直接使用 npm</li>\n</ul>\n<pre><code class=\"lang-bash\">$ npm i [<span class=\"hljs-keyword\">package</span>-name] --save --<span class=\"hljs-keyword\">registry</span>=<span class=\"hljs-keyword\">http</span>://<span class=\"hljs-keyword\">registry</span>.mirror.cqupt.edu.cn\n</code></pre>\n<ul>\n<li>或者使用 npm 并 alias 一个新的命令 [如需保存请保存到 .bashrc 或者.zshrc / .fishrc]</li>\n</ul>\n<pre><code class=\"lang-bash\">alias rednpm=\"npm --registry=http://registry.mirror.cqupt.edu.cn \\\n-<span class=\"ruby\">-cache=$HOME/.npm/.cache/rednpm \\\n</span>-<span class=\"ruby\">-disturl=<span class=\"hljs-symbol\">https:</span>/<span class=\"hljs-regexp\">/npm.taobao.org/mirrors</span><span class=\"hljs-regexp\">/node \\\n</span></span>-<span class=\"ruby\"><span class=\"hljs-regexp\">-userconfig=$HOME/</span>.rednpmrc<span class=\"hljs-string\">\"</span></span>\n</code></pre>\n<h2 id=\"-\">基本信息</h2>\n<ul>\n<li>初次同步量 10W packages</li>\n<li>每隔 10 分钟从淘宝源更新</li>\n<li>registry 地址: <a href=\"http://registry.mirror.cqupt.edu.cn/\">http://registry.mirror.cqupt.edu.cn/</a></li>\n</ul>\n<h2 id=\"-\">手动同步模块</h2>\n<p>直接通过 <code>sync</code> 命令马上同步一个模块, 只有 rednpm 客户端才有此功能:</p>\n<pre><code class=\"lang-bash\">$ rednpm sync <span class=\"hljs-string\">[name]</span>\n</code></pre>\n<p>或者使用 web 方式同步:</p>\n<pre><code class=\"lang-bash\"><span class=\"hljs-comment\"># eg. 同步 co模块 </span>\n$ <span class=\"hljs-keyword\">open</span> <span class=\"hljs-keyword\">http</span>://<span class=\"hljs-keyword\">registry</span>.mirror.cqupt.edu.cn/sync/co\n</code></pre>\n<h2 id=\"-\">相关链接</h2>\n<ul>\n<li><a href=\"http://npm.mirror.cqupt.edu.cn\">REDNPM</a></li>\n<li><a href=\"https://npmjs.org/\">npmjs.org</a></li>\n<li><a href=\"https://npm.taobao.org/\">TaoNpm</a></li>\n<li><a href=\"https://zeroling.com\">Ling.</a></li>\n</ul>\n<h2 id=\"contact\">Contact</h2>\n<ul>\n<li>Bug Report to i#zeroling.com</li>\n</ul>\n'
    }, {
      universalName: 'Arch-Linux',
      parsedMarkdown: '<h1 id=\"archlinux-\">ArchLinux 镜像使用帮助</h1>\n<h2 id=\"-\">收录架构</h2>\n<ul>\n<li>i686 (32位)</li>\n<li>x86_64 (64位)</li>\n</ul>\n<h2 id=\"-\">收录版本</h2>\n<ul>\n<li>滚动发行版</li>\n</ul>\n<h2 id=\"-\">使用说明</h2>\n<p>编辑<code>/etc/pacman.d/mirrorlist</code>，先注释掉里面的所有行，然后在文件的最顶端添加</p>\n<pre><code>Server = http://archlinux.mirrors.cqupt.edu.cn/$repo/os/$arch</code></pre>\n\n<h2 id=\"-\">相关链接</h2>\n<ul>\n<li><a href=\"https://www.archlinux.org\">官方主页</a></li>\n<li><a href=\"https://www.archlinux.org/mailman/listinfo/\">邮件列表</a></li>\n<li><a href=\"https://bbs.archlinux.org/\">论坛</a></li>\n<li><a href=\"https://wiki.archlinux.org/\">wiki</a></li>\n</ul>\n'
    }, {
      universalName: 'Epel',
      parsedMarkdown: '<h1 id=\"epel-\">Epel镜像使用帮助</h1>\n<ul>\n<li>epel是一个yum第三方源</li>\n</ul>\n<h2 id=\"-\">收录架构</h2>\n<ul>\n<li>i386</li>\n<li>x86_64</li>\n<li>SRPMS</li>\n<li>ppc</li>\n</ul>\n<h2 id=\"-\">使用说明</h2>\n<p>以<code>CentOS7</code>为例, 复制下面的两个文件覆盖到<code>/etc/yum.repos.d/epel.repo</code>和<code>/etc/yum.repos.d/epel-testing.repo</code>, 如果是<code>4</code>,<code>5</code>,<code>6</code>, 将<code>7</code>替换掉即可</p>\n<ul>\n<li><code>epel.repo</code></li>\n</ul>\n<pre><code>[epel]\nname=Extra Packages for Enterprise Linux 7 - $basearch\nbaseurl=http://epel.mirrors.cqupt.edu.cn/7/$basearch\n#mirrorlist=https://mirrors.fedoraproject.org/metalink?repo=epel-7&arch=$basearch\nfailovermethod=priority\nenabled=1\ngpgcheck=1\ngpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-7\n\n[epel-debuginfo]\nname=Extra Packages for Enterprise Linux 7 - $basearch - Debug\nbaseurl=http://epel.mirrors.cqupt.edu.cn/7/$basearch/debug\n#mirrorlist=https://mirrors.fedoraproject.org/metalink?repo=epel-debug-7&arch=$basearch\nfailovermethod=priority\nenabled=0\ngpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-7\ngpgcheck=1\n\n[epel-source]\nname=Extra Packages for Enterprise Linux 7 - $basearch - Source\nbaseurl=http://epel.mirrors.cqupt.edu.cn/7/SRPMS\n#mirrorlist=https://mirrors.fedoraproject.org/metalink?repo=epel-source-7&arch=$basearch\nfailovermethod=priority\nenabled=0\ngpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-7\ngpgcheck=1</code></pre>\n\n<ul>\n<li><code>epel-testing.repo</code></li>\n</ul>\n<pre><code>[epel-testing]\nname=Extra Packages for Enterprise Linux 7 - Testing - $basearch\nbaseurl=http://epel.mirrors.cqupt.edu.cn/testing/7/$basearch\n#mirrorlist=https://mirrors.fedoraproject.org/metalink?repo=testing-epel7&arch=$basearch\nfailovermethod=priority\nenabled=0\ngpgcheck=1\ngpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-7\n\n[epel-testing-debuginfo]\nname=Extra Packages for Enterprise Linux 7 - Testing - $basearch - Debug\nbaseurl=http://epel.mirrors.cqupt.edu.cn/testing/7/$basearch/debug\n#mirrorlist=https://mirrors.fedoraproject.org/metalink?repo=testing-debug-epel7&arch=$basearch\nfailovermethod=priority\nenabled=0\ngpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-7\ngpgcheck=1\n\n[epel-testing-source]\nname=Extra Packages for Enterprise Linux 7 - Testing - $basearch - Source\nbaseurl=http://epel.mirrors.cqupt.edu.cn/testing/7/SRPMS\n#mirrorlist=https://mirrors.fedoraproject.org/metalink?repo=testing-source-epel7&arch=$basearch\nfailovermethod=priority\nenabled=0\ngpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-7\ngpgcheck=1</code></pre>\n'
    }, {
      universalName: 'Pypi',
      parsedMarkdown: '<h1 id=\"pypi-\">Pypi镜像使用帮助</h1>\n<ul>\n<li>pypi是python包索引, 使用校内源可以加速pip安装</li>\n</ul>\n<p>#使用说明</p>\n<ul>\n<li><p>使用前使用<code>yum</code>或<code>apt</code>安装好<code>python-dev</code>避免日后某些包无法安装</p>\n</li>\n<li><p>首先如果不存在<code>~/.pip/pip.conf</code></p>\n<pre><code> mkdir ~<span class=\"hljs-regexp\">/.pip/</span>\n touch ~<span class=\"hljs-regexp\">/.pip/pip</span>.conf\n</code></pre></li>\n<li><p>然后将以下内容放入<code>pip.conf</code></p>\n</li>\n</ul>\n<pre><code>[global]\nindex-url = http://pypi.mirrors.cqupt.edu.cn/web/simple\ntrusted-host = pypi.mirrors.cqupt.edu.cn\ntimeout = 120\n</code></pre> \n\n<ul>\n<li>注意: pypi暂未开启https支持, 安装包时会有警告, 请无视, 开启https支持后请换用以下配置</li>\n</ul>\n<pre><code>[global]\nindex-url = https://pypi.mirrors.cqupt.edu.cn/web/simple\ntimeout = 120</code></pre>'
    }]
  }
}
