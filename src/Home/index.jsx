/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from "react";
import { enquireScreen } from "enquire-js";

import Nav0 from "./Nav0";
import Banner0 from "./Banner0";
import Content13 from "./Content13";
import Teams0 from "./Teams0";
import Feature2 from "./Feature2";
import Feature1 from "./Feature1";
import Feature5 from "./Feature5";
import Feature6 from "./Feature6";
import Footer1 from "./Footer1";

import {
  // Nav00DataSource,
  Banner00DataSource,
  Content130DataSource,
  Teams00DataSource,
  Feature20DataSource,
  Feature10DataSource,
  Feature21DataSource,
  Feature50DataSource,
  Feature60DataSource,
  Footer10DataSource,
} from "./data.source";
import "./less/antMotionStyle.less";

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== "undefined" ? window : {};

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  //!test 需要将这些数据通过接口获得
  Nav00DataSource = {
    wrapper: { className: "header0 home-page-wrapper" },
    page: { className: "home-page" },
    logo: {
      className: "header0-logo",
      children:
        "https://wx-xly-1301545895.cos.ap-beijing.myqcloud.com/my-website/logo.png",
      href: "http://www.ygjie.icu",
    },
    Menu: {
      className: "header0-menu",
      children: [
        {
          name: "item0",
          className: "header0-item",
          children: {
            href: "http://vhblog.ygjie.icu/",
            children: [{ children: "blog", name: "text" }],
          },
        },
        {
          name: "item1",
          className: "header0-item",
          children: {
            href: "http://alert-doc.ygjie.icu/",
            children: [{ children: "alert", name: "text" }],
          },
        },
        {
          name: "item2",
          className: "header0-item",
          children: {
            href: "http://doc1.ygjie.icu/",
            children: [{ children: "文档", name: "text" }],
          },
        },
        {
          name: "item3",
          className: "header0-item",
          children: {
            children: [{ children: "控制台", name: "text" }],
          },
          subItem: [
            {
              name: "sub0",
              className: "item-sub",
              children: {
                className: "item-sub-item",
                href: "http://mymaster.ygjie.icu/",
                children: [
                  // {
                  //   name: 'image0',
                  //   className: 'item-image',
                  //   children:
                  //     'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                  // },
                  {
                    name: "title",
                    className: "item-title",
                    children: "地址一",
                  },
                  // {
                  //   name: 'content',
                  //   className: 'item-content',
                  //   children: '无',
                  // },
                ],
              },
            },
            {
              name: "sub1",
              className: "item-sub",
              children: {
                className: "item-sub-item",
                href: "http://serveless_mymaster.ygjie.icu/",
                children: [
                  // {
                  //   name: 'image0',
                  //   className: 'item-image',
                  //   children:
                  //     'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                  // },
                  {
                    name: "title",
                    className: "item-title",
                    children: "地址二",
                  },
                  // {
                  //   name: 'content',
                  //   className: 'item-content',
                  //   children: '无',
                  // },
                ],
              },
            },
          ],
        },
      ],
    },
    mobileMenu: { className: "header0-mobile-menu" },
  };

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
  }

  render() {
    const children = [
      <Nav0
        id="Nav0_0"
        key="Nav0_0"
        dataSource={this.Nav00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Banner0
        id="Banner0_0"
        key="Banner0_0"
        dataSource={Banner00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content13
        id="Content13_0"
        key="Content13_0"
        dataSource={Content130DataSource}
        isMobile={this.state.isMobile}
      />,
      <Teams0
        id="Teams0_0"
        key="Teams0_0"
        dataSource={Teams00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature2
        id="Feature2_0"
        key="Feature2_0"
        dataSource={Feature20DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature1
        id="Feature1_0"
        key="Feature1_0"
        dataSource={Feature10DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature2
        id="Feature2_1"
        key="Feature2_1"
        dataSource={Feature21DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature5
        id="Feature5_0"
        key="Feature5_0"
        dataSource={Feature50DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature6
        id="Feature6_0"
        key="Feature6_0"
        dataSource={Feature60DataSource}
        isMobile={this.state.isMobile}
      />,
      <Footer1
        id="Footer1_0"
        key="Footer1_0"
        dataSource={Footer10DataSource}
        isMobile={this.state.isMobile}
      />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    );
  }
}
