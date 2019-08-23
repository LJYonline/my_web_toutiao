import React, { Component } from 'react'
import styles from './index.css';
import Img from '../.././assets/toutiao.png';
import img from '../.././assets/icon.png'
import List from './components/List'
import Content from './components/Content'
import { getData } from '.././api/index'
import axios from 'axios'
import UgcDown from './components/UgcDown';

class dashBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: ["发布图文", "发布视频", "发布问答"],
      content: [
        { tex: "有什么新鲜事想告诉大家", num: "0/2000", img: img , upload: "添加图片", push: "发布长文" },
        { tex: "视频标题（30 字以内）", num: "0/30", img: img, upload: "添加视频", push: "" },
        { tex: "请输入问题标题（4-40字）", num: "0/40", img:img, upload: "添加图片", push: "更多回答" }
      ],
      k: 0,
      ugcDown:[0,2,4,6,8,10],
      service:[
        //{title:"",chinese_tag:"",source:"",image_url:"",middle_image:""}
        ]
    };
    //this.onChange = this.onChange.bind(this)
  }

  // 初始化的时候选中第一个
  componentDidMount() {
    this.setState({ k: 0 })
  }
  handleClick(e) {
    console.log(e)
    this.setState({ k: e });
  }
  currentClass(index) {
    return this.state.k === index ? styles.current : '';
  }
  contentClass(index) {
    return this.state.k === index ? styles.active : '';
  }
  oncheckbox(index) {
    console.log('=======')
    return this.state.k == index ? 'ugc_tab_item' : ''
  }

  //   componentDidMount () {
  //     getData(params).then(res => {
  //         console.log("开始请求")
  //     })
  // }
  // // 结合 async
  // async componentDidMount () {
  //     let res = await getData(params)
  // }


  componentDidMount(){

    const _this=this
   axios.get('/data.json')
     .then(function (res) {
       _this.setState({service:res.data})
       console.log("==", res.data[0].title)
       console.log("成功了")
     })
     .catch(function (error) {
       console.log(error)
     })}

 
  render() {
   
    console.log(this.state.service.title)
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
                <a className={styles.Item}><span>更多</span>
                </a>
                <div className={styles.moreli}>
                  <ul className={styles.moreul}>
                    <li className={styles.Itemli}><a>新闻1</a></li>
                    <li className={styles.Itemli}><a>新闻2</a></li>
                    <li className={styles.Itemli}><a>新闻3</a></li>
                    <li className={styles.Itemli}><a>新闻4</a></li>
                    <li className={styles.Itemli}><a>新闻5</a></li>
                    <li className={styles.Itemli}><a>新闻1</a></li>
                    <li className={styles.Itemli}><a>新闻2</a></li>
                    <li className={styles.Itemli}><a>新闻3</a></li>
                    <li className={styles.Itemli}><a>新闻4</a></li>
                    <li className={styles.Itemli}><a>新闻5</a></li>
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
                {this.state.list.map((item, index) => {
                  return (<List currentClass={this.currentClass.bind(this)} handleClick={this.handleClick.bind(this)} item={item} index={index} key={index} />)
                })
                }
              </ul>
              <div className={styles.ugc_content}>
                {this.state.content.map((item, index) => {
                  return (<Content key={index} k={this.state.k} item={item} index={index} contentClass={this.contentClass.bind(this)} />)
                })}
              </div>
            </div>
          </div>
            { this.state.service.map((item,index) => {
              return (<UgcDown  item={item} index={index} />)
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

export default dashBoard
