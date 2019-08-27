import React, { Component } from 'react';
import styles from './index.css';
import Img from '../.././assets/toutiao.png';

import List from './Components/List';
import Content from './Components/Content';
//import axios from 'axios';
import UgcDown from './Components/UgcDown';
import { connect } from 'dva';

// export default connect(({ app }) => ({
//   app,
// }))(DashBoard);

@connect(({ app }) => ({
  app
}))

class DashBoard extends Component{
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     list: ["发布图文", "发布视频", "发布问答"],
  //     content: [
  //       { tex: "有什么新鲜事想告诉大家", num: "0/2000", img:img  , upload: "添加图片", push: "发布长文" },
  //       { tex: "视频标题（30 字以内）", num: "0/30", img: img, upload: "添加视频", push: "" },
  //       { tex: "请输入问题标题（4-40字）", num: "0/40", img:img, upload: "添加图片", push: "更多回答" }
  //     ],
  //     k: 0,
  //     service:[]
  //   };   
  // }
 
  handleClick(e) {
    console.log(e)
    this.props.dispatch({
        type:'app/updateState',
        payload:{k:e}
    });
  }
  currentClass(index) {
    return this.props.app.k === index ? styles.current : '';
  }
  contentClass(index) {
    return this.props.app.k === index ? styles.active : '';
  }
  // eslint-disable-next-line no-dupe-class-members
  // componentDidMount(){
  //   const _this=this.props
  //   axios.get('/data.json')
  //    .then(function (res) {
  //      _this.dispatch({type:'app/updateState',payload:{service:res.data}})
  //      console.log("==", res.data[0].title)
  //      console.log("成功了")
  //    })
  //    .catch(function (error) {
  //      console.log(error)
  //    })}
  componentDidMount(){
     this.props.dispatch({
     type:'app/addNews'
     })
  }
  render() {
     console.log("props",this.props)
    const {list,content,k,service} =this.props.app
    return (
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.menu}>
            <a href="/" className={styles.logo}>
              <img className={styles.toutiao2} src={Img} alt="" />
            </a>
            <ul className={styles.ul}>
              <li key="sub1" className={styles.ItemOne}>
                <a href="/" className={styles.ItemOne}>
                  <span>推荐</span>
                </a>
              </li>
              <li key="sub2" className={styles.Item}>
                <span>西瓜视频</span>
              </li>
              <li key="sub3" className={styles.Item}>
                <span>热点</span>
              </li>
              <li key="sub4" className={styles.Item}>
                <span>直播</span>
              </li>
              <li key="sub5" className={styles.Item}>
                <span>图片</span>
              </li>
              <li key="sub6" className={styles.Item}>
                <span>科技</span>
              </li>
              <li key="sub7" className={styles.Item}>
                <span>娱乐</span>
              </li>
              <li key="sub8" className={styles.Item}>
                <span>游戏</span>
              </li>
              <li key="sub9" className={styles.Item}>
                <span>体育</span>
              </li>
              <li key="sub10" className={styles.Item}>
                <span>汽车</span>
              </li>
              <li key="sub11" className={styles.Item}>
                <span>财经</span>
              </li>
              <li key="sub12" className={styles.Item}>
                <span>搞笑</span>
              </li>
              <li key="sub13" className={styles.Itemto}>
                <a className={styles.Item} href="https://www.xuexi.cn/" ><span>更多</span>
                </a>
                <div className={styles.moreli}>
                  <ul className={styles.moreul}>
                    <li className={styles.Itemli}><a href="/ch/news_military/" className={styles.Item}>新闻1</a></li>
                    <li className={styles.Itemli}><a href="/ch/news_military/"className={styles.Item}>新闻2</a></li>
                    <li className={styles.Itemli}><a href="/ch/news_military/" className={styles.Item}>新闻3</a></li>
                    <li className={styles.Itemli}><a href="/ch/news_military/" className={styles.Item}>新闻4</a></li>
                    <li className={styles.Itemli}><a href="/ch/news_military/" className={styles.Item}>新闻5</a></li>
                    <li className={styles.Itemli}><a href="/ch/news_military/" className={styles.Item}>新闻1</a></li>
                    <li className={styles.Itemli}><a href="/ch/news_military/" className={styles.Item}>新闻2</a></li>
                    <li className={styles.Itemli}><a href="/ch/news_military/" className={styles.Item}>新闻3</a></li>
                    <li className={styles.Itemli}><a href="/ch/news_military/" className={styles.Item}>新闻4</a></li>
                    <li className={styles.Itemli}><a href="/ch/news_military/" className={styles.Item}>新闻5</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.center}>
          <div className={styles.ugcBox}>
            <div className={styles.ugcBox_inner}>
              <ul className={styles.ugc_tab_list}>
                {list.map((item, index) => {
                  return (<List key={index} currentClass={this.currentClass.bind(this)} handleClick={this.handleClick.bind(this)} item={item} index={index}  />)
                })
                }
              </ul>
              <div className={styles.ugc_content}>
                {content.map((item, index) => {
                  return (<Content key={index} k={k} item={item} index={index} contentClass={this.contentClass.bind(this)} />)
                })}
              </div>
            </div>
          </div>
            { service.map((item,index) => {
              return (<UgcDown  key={index} item={item} index={index} />)
            })}
        </div>

        <div className={styles.right}>
          <div className={styles.input}>
            <input type="text" className={styles.input_inner} placeholder="请在这里输入内容"></input>
            <div className={styles.input_inner_group}>
              <button className={styles.input_inner_button}>
                <span>搜索</span>
              </button>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.rightcard}>
              <div className={styles.rightcardin}>
                <div className={styles.logininner}>
                  <p className={styles["logininner-msg"]}>
                    登录后可以保存您的浏览喜好、评论、收藏，并与APP同步更可以发布微头条
                  </p>
                  <a data-v-4a7e2734="" href="https://sso.toutiao.com">
                    <button data-v-4a7e2734="" className={styles["login-button"]}>登录</button>
                  </a>
                  <ul data-v-4a7e2734="" className={styles["third-login"]}>
                    <li data-v-4a7e2734="" data-pid="qzone_sns" className={styles.sns_qq}><span data-v-4a7e2734=""
                      className={styles.Span}>QQ</span>
                    </li>
                    <li data-v-4a7e2734="" data-pid="weixin" className={styles.sns_weixin}><span data-v-4a7e2734=""
                      className={styles.Span}>微信</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default DashBoard

