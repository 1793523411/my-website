import React from 'react';
export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children: 'https://wx-xly-1301545895.cos.ap-beijing.myqcloud.com/my-website/logo.png',
    href: 'http://www.ygjie.icu',
  },
  Menu: {
    className: 'header0-menu',
    children: [
      {
        name: 'item0',
        className: 'header0-item',
        children: {
          href: 'https://www.cnblogs.com/ygjzs',
          children: [{ children: 'blog1', name: 'text' }],
        },
        // subItem: [
        //   {
        //     name: 'sub0',
        //     className: 'item-sub',
        //     children: {
        //       className: 'item-sub-item',
        //       children: [
        //         {
        //           name: 'image0',
        //           className: 'item-image',
        //           children:
        //             'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
        //         },
        //         {
        //           name: 'title',
        //           className: 'item-title',
        //           children: 'Ant Design',
        //         },
        //         {
        //           name: 'content',
        //           className: 'item-content',
        //           children: '无',
        //         },
        //       ],
        //     },
        //   },
        //   {
        //     name: 'sub1',
        //     className: 'item-sub',
        //     children: {
        //       className: 'item-sub-item',
        //       children: [
        //         {
        //           name: 'image0',
        //           className: 'item-image',
        //           children:
        //             'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
        //         },
        //         {
        //           name: 'title',
        //           className: 'item-title',
        //           children: 'Ant Design',
        //         },
        //         {
        //           name: 'content',
        //           className: 'item-content',
        //           children: '无',
        //         },
        //       ],
        //     },
        //   },
        // ],
      },
      {
        name: 'item1',
        className: 'header0-item',
        children: {
          href: 'https://www.cnblogs.com/ycoder',
          children: [{ children: 'blog2', name: 'text' }],
        },
      },
      {
        name: 'item2',
        className: 'header0-item',
        children: {
          href: 'http://hugo.ygjie.icu/',
          children: [{ children: 'blog3', name: 'text' }],
        },
      },
      {
        name: 'item3',
        className: 'header0-item',
        children: {
          href: 'https://github.com/1793523411',
          children: [{ children: 'github', name: 'text' }],
        },
      },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const Banner00DataSource = {
  wrapper: { className: 'banner0' },
  textWrapper: { className: 'banner0-text-wrapper' },
  title: {
    className: 'banner0-title',
    children: 'https://wx-xly-1301545895.cos.ap-beijing.myqcloud.com/my-website/logo.png',
  },
  content: {
    className: 'banner0-content',
    children: '💘跌倒的小黄瓜的个人网站💘',
  },
  button: { className: 'banner0-button', children: '了解更多' ,href: 'https://github.com/1793523411',},
};
export const Content130DataSource = {
  OverPack: {
    className: 'home-page-wrapper content13-wrapper kfumus804mf-editor_css',
    playScale: 0.3,
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image',
      },
      { name: 'title', children: '你好呀！😜', className: 'title-h1' },
      {
        name: 'content',
        children:
          '先做个简单的自我介绍，我叫杨国杰，目前还是一名大学生哟~~',
        className: 'title-content',
      },
      {
        name: 'content2',
        children: '通过下面可以更加了解我💥',
        className: 'title-content',
      },
    ],
  },
};
export const Teams00DataSource = {
  wrapper: { className: 'home-page-wrapper teams0-wrapper' },
  OverPack: { playScale: 0.3, className: 'home-page teams0' },
  BannerAnim: {
    className: 'banner-anim',
    children: [
      {
        name: 'elem0',
        className: 'teams0-banner-user-elem',
        titleWrapper: {
          className: 'teams0-content-wrapper',
          children: [
            {
              name: 'image',
              children:
                'https://wx-xly-1301545895.cos.ap-beijing.myqcloud.com/my-website/me/1601801229287.jpg',
              className: 'teams0-image',
            },
            {
              name: 'content',
              children:
                '一名普通本科生，热爱学习,🎈热爱生活，喜欢看书🎉，还比较🤪帅哟~~',
              className: 'teams0-content',
            },
            { name: 'title', children: '杨国杰', className: 'teams0-h1' },
            {
              name: 'content2',
              children: '河南理工大学 计算机学院 软件工程专业',
              className: 'teams0-content',
            },
          ],
        },
      },
      {
        name: 'elem1',
        className: 'teams0-banner-user-elem',
        titleWrapper: {
          className: 'teams0-content-wrapper',
          children: [
            {
              name: 'image',
              children:
                'https://wx-xly-1301545895.cos.ap-beijing.myqcloud.com/my-website/me/1601801388510.jpg',
              className: 'teams0-image',
            },
            {
              name: 'content',
              children:
                '大学期间以前端为切入点靠近IT行业，从此爱上了前端，也因前端慢慢变得热爱技术，热爱开发，以及互联网~~',
              className: 'teams0-content',
            },
            { name: 'title', children: '跌倒的小黄瓜(杨国杰)', className: 'teams0-h1' },
            {
              name: 'content2',
              children: '个人开发者 热爱技术，喜欢前端 ',
              className: 'teams0-content',
            },
          ],
        },
      },
    ],
  },
};
export const Feature20DataSource = {
  wrapper: { className: 'home-page-wrapper content2-wrapper' },
  OverPack: { className: 'home-page content2', playScale: 0.3 },
  imgWrapper: { className: 'content2-img', md: 10, xs: 24 },
  img: {
    children: 'https://wx-xly-1301545895.cos.ap-beijing.myqcloud.com/my-website/me/1601800682127.jpg',
  },
  textWrapper: { className: 'content2-text', md: 14, xs: 24 },
  title: { className: 'content2-title', children: '个人描述' },
  content: {
    className: 'content2-content',
    children:
      '一位可爱的少年，对技术有着很深的热爱，相信技术可以改变生活，提高效率，平时没事喜欢看一些文章和书籍，技术方面的偏多😂，也十分喜欢新事物，敢于尝试，敢与冒险，喜欢与别人交流技术，还喜欢跟别人一起玩耍',
  },
};
export const Feature10DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
    children: 'https://wx-xly-1301545895.cos.ap-beijing.myqcloud.com/my-website/me/1601800698823.jpg',
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: { className: 'content1-title', children: '个人技术栈' },
  content: {
    className: 'content1-content',
    children:
      '大学期间我对前端情有独钟😍，所以写在最开始的当然是前端，从简单html页到工程化，从简单网页到各种泛应用再到App,比较喜欢JavaScript这门语言，淡然还有几年来流行起来的TypeScript；当然，作为一个xx，🤔怎么能只看到前端呢？通过前端我还接触到了其他领域的技术，比如serveless，比如linux，比如docker，比如java，比如go 👻 等等等，✨好多好多，但是，如果别人问我会什么，我只敢说我会一点前端🤣',
  },
};
export const Feature21DataSource = {
  wrapper: { className: 'home-page-wrapper content2-wrapper' },
  OverPack: { className: 'home-page content2', playScale: 0.3 },
  imgWrapper: { className: 'content2-img', md: 10, xs: 24 },
  img: {
    children: 'https://wx-xly-1301545895.cos.ap-beijing.myqcloud.com/my-website/me/1601800757349.jpg',
  },
  textWrapper: { className: 'content2-text', md: 14, xs: 24 },
  title: { className: 'content2-title', children: '其他介绍' },
  content: {
    className: 'content2-content',
    children:
      '这里是一些其他与我相关的描述，我智商一般，情商有点低😭，所以不断地想办法提高自己的情商和智商，所以我挺喜欢做算法题和写代码的，平时不知道干啥了算法题看一看，或技术文章看一看，或了解了解最近的有没有什么好玩的发生，比如Vue3.0发布，webpack5发布，react17发布···· 真是太~~~~😏，情商就随缘吧⛄，情商真是天生的吗？？？'
  },
};
export const Feature50DataSource = {
  wrapper: { className: 'home-page-wrapper content7-wrapper' },
  page: { className: 'home-page content7' },
  OverPack: {},
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: '技术栈详情',
        className: 'title-h1',
      },
      { name: 'content', children: '一个小菜鸟对自身的技术的总结😂' },
    ],
  },
  tabsWrapper: { className: 'content7-tabs-wrapper' },
  block: {
    children: [
      {
        name: 'block0',
        tag: {
          className: 'content7-tag',
          text: { children: '前端', className: 'content7-tag-name' },
          icon: { children: 'smile' },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <span>
                <h3>组成</h3>
                <p>
                  前端三剑客，JavaScript在各种平台的规则，属于前端开发者的后端开发语言nodejs和前端工程化，JavaScript实现数据可视化，JavaScript的超集TypeScript
                </p>
                <br />
                <h3>框架</h3>
                <p>
                  主要是Vue和React,还有框架生态下的服务端渲染，静态页生成，还有就是除了框架之外的Web Components，以及基于框架衍生出来的各种方便开发的技术
                </p>
                <br />
                <h3>
                  更多
                </h3>前后端分离开发，基于Serveless的一体化开发，泛应用开发，期待更多更多的不可思议的事情拥抱JavaScript
              </span>
            ),
          },
          img: {
            className: 'content7-img',
            children:
              'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
            md: 10,
            xs: 24,
          },
        },
      },
      {
        name: 'block1',
        tag: {
          className: 'content7-tag',
          icon: { children: 'mergeCells' },
          text: { className: 'content7-tag-name', children: '非前端' },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <span>
                <h3>服务端</h3>
                <p>
                  golang的web开发，了解过Beego和Gin，java的web开发，听说过Spring他们家😂，和java开发者做过前后端分离开发
                </p>
                <br />
                <h3>运维</h3>
                <p>
                  玩过linux，用nginx搭建网站，使用docker更方便的部署应用，更加喜欢无服务运维的云开发，开发一些小应用，比起关系型数据库更喜欢非关系型数据库，
                </p>
                <br />
                <h3>
                  其他
                </h3>喜欢每天都接触算法题，希望学习更多操作系统和计算机网络知识😄
              </span>
            ),
          },
          img: {
            className: 'content7-img',
            md: 10,
            xs: 24,
            children:
              'https://zos.alipayobjects.com/rmsportal/VHGOVdYyBwuyqCx.png',
          },
        },
      },
      {
        name: 'block2',
        tag: {
          className: 'content7-tag',
          text: { children: '非技术', className: 'content7-tag-name' },
          icon: { children: 'laptop' },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <span>
                <h3>生活</h3>
                <p>
                  在学校无非就是上课，自己学技术，自己做开发，跟室友和同学一起玩（典型单身狗生活😓）
                </p>
                <br />
                <h3>吃饭</h3>
                <p>
                  喜欢吃好吃的，甜的咸的都喜欢，不想吃辣，但挺喜欢吃辣，不喜欢吃热量高的食物，怕长胖，我觉得自己胖，但别人都说我不胖，我该相信谁？
                </p>
                <br />
                <h3>
                  目标
                </h3>成为一名大佬，别人问我会什么，我敢说，我这会，那也会，那个也会，哈哈哈，我好厉害~~😘
              </span>
            ),
          },
          img: {
            className: 'content7-img',
            md: 10,
            xs: 24,
            children:
              'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
          },
        },
      },
    ],
  },
};
export const Feature60DataSource = {
  wrapper: { className: 'home-page-wrapper feature6-wrapper' },
  OverPack: { className: 'home-page feature6', playScale: 0.3 },
  Carousel: {
    className: 'feature6-content',
    dots: false,
    wrapper: { className: 'feature6-content-wrapper' },
    titleWrapper: {
      className: 'feature6-title-wrapper',
      barWrapper: {
        className: 'feature6-title-bar-wrapper',
        children: { className: 'feature6-title-bar' },
      },
      title: { className: 'feature6-title' },
    },
    children: [
      {
        title: { className: 'feature6-title-text', children: '个人参数' },
        className: 'feature6-item',
        name: 'block0',
        children: [
          {
            md: 8,
            xs: 24,
            className: 'feature6-number-wrapper',
            name: 'child0',
            number: {
              className: 'feature6-number',
              unit: { className: 'feature6-unit', children: 'cm' },
              toText: true,
              children: '176',
            },
            children: { className: 'feature6-text', children: '身高' },
          },
          {
            md: 8,
            xs: 24,
            className: 'feature6-number-wrapper',
            name: 'child1',
            number: {
              className: 'feature6-number',
              unit: { className: 'feature6-unit', children: 'kg' },
              toText: true,
              children: '62',
            },
            children: { className: 'feature6-text', children: '体重' },
          },
          {
            md: 8,
            xs: 24,
            className: 'feature6-number-wrapper',
            name: 'child2',
            number: {
              className: 'feature6-number',
              unit: { className: 'feature6-unit', children: '😍' },
              toText: true,
              children: '99.9',
            },
            children: { className: 'feature6-text', children: '颜值' },
          },
        ],
      },
      {
        title: { className: 'feature6-title-text', children: '个人指标' },
        className: 'feature6-item',
        name: 'block1',
        children: [
          {
            md: 8,
            xs: 24,
            name: 'child0',
            className: 'feature6-number-wrapper',
            number: {
              className: 'feature6-number',
              unit: { className: 'feature6-unit', children: '℃' },
              toText: true,
              children: '96.8',
            },
            children: { className: 'feature6-text', children: '生活热爱度' },
          },
          {
            md: 8,
            xs: 24,
            name: 'child1',
            className: 'feature6-number-wrapper',
            number: {
              className: 'feature6-number',
              unit: { className: 'feature6-unit', children: '℃' },
              toText: true,
              children: '98.6',
            },
            children: { className: 'feature6-text', children: '学习热爱度' },
          },
          {
            md: 8,
            xs: 24,
            name: 'child2',
            className: 'feature6-number-wrapper',
            number: {
              className: 'feature6-number',
              unit: { className: 'feature6-unit', children: '℃' },
              toText: true,
              children: '99.9',
            },
            children: { className: 'feature6-text', children: '友好度' },
          },
        ],
      },
    ],
  },
};
export const Footer10DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1', playScale: 0.2 },
  block: {
    className: 'home-page',
    gutter: 0,
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          className: 'logo',
          children:
            'https://wx-xly-1301545895.cos.ap-beijing.myqcloud.com/my-website/logo.png',
        },
        childWrapper: {
          className: 'slogan',
          children: [
            {
              name: 'content0',
              children: '我可是个帅气的男孩纸哟😲~',
            },
          ],
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '博客' },
        childWrapper: {
          children: [
            { name: 'link0', href: 'https://www.cnblogs.com/ygjzs', children: '跌倒的小黄瓜' },
            { name: 'link1', href: 'https://www.cnblogs.com/ycoder', children: '跌打的小脆骨' },
            { name: 'link2', href: 'https://1793523411.github.io/', children: 'github博客' },
            { name: 'link3', href: 'http://hugo.ygjie.icu/', children: '上面那个访问不了用这个' },
            { name: 'link4', href: 'https://blog.csdn.net/littleCucumber/article/list/', children: 'CSDN' },
          ],
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '仓库' },
        childWrapper: {
          children: [
            { href: 'https://github.com/1793523411', name: 'link0', children: 'github' },
            { href: 'https://gitee.com/ygjzs/', name: 'link1', children: '码云' },
          ],
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '联系' },
        childWrapper: {
          children: [
            { href: 'https://wx-xly-1301545895.cos.ap-beijing.myqcloud.com/my-website/temp_qrcode_share_1793523411.png', name: 'link0', children: 'QQ' },
            { href: 'https://wx-xly-1301545895.cos.ap-beijing.myqcloud.com/my-website/mmqrcode1601798889709.png', name: 'link1', children: '微信' },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        ©2020 <a href="https://beian.miit.gov.cn">豫ICP备20006399号</a> by 跌倒的小黄瓜
      </span>
    ),
  },
};
