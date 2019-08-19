import React, {Component} from 'react'
import styles from './index.css';
import Img from '../.././assets/toutiao.png';

const tabList = [
  {
    key: 'tab1',
    tab: 'tab1',
  },
  {
    key: 'tab2',
    tab: 'tab2',
  },
  {
    key: 'tab3',
    tab: 'tab3',
  },

];

/*const contentList = {
  tab1: <p>content1</p>,
  tab2: <p>content2</p>,
};*/

class dashBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      key: 'tab1',
      id: "sub1",
      hover: true
    };
    this.handleClick = this.handleClick.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  /*
    handleClick(e) {
      console.log('click', e);
    }*/
  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };
  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({[type]: key});
  };

  onChange(e) {
    alert('---')
  }

  render() {
    {/*<li className={styles.ugc_tab_item}>发布图文</li>*/}
    {/*<li className={styles.ugc_tab_item}>发布视频</li>*/}
    {/*<li className={styles.ugc_tab_item}>发布问答</li>*/}
    const arr = ['发布图文',"发布视频","发布问答"];
    const arrItem = arr.map((item,index) =>
      <li key={index} className={styles.ugc_tab_item}>{item}</li>
    );
    const arr2 =[ {tex:'图文'},{tex:'视频'},{tex:'问答'}];
    const arrtex = arr2.map((item,index) =>
       item
    );

    return (

      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.menu}>
            <a href="/" className={styles.logo}>
              <img className={styles.toutiao2} src={Img} alt=""/>
            </a>
            <ul className={styles.ul}>
              <li key="sub1" className={styles.Item}>
                <a href="/" className={styles.Item}>
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
              <ul className={styles.ugc_tab_list}>{arrItem}</ul>
              <div className={styles.ugc_content}>
                <div className={styles.ugc_box}>
                  <textarea placeholder={arrtex[0].tex} className={styles.title_input}></textarea>
                  <p className={styles.word_number}>0/2000字</p>
                  <div className={styles.upload_footer}>
                    <div className={styles.bui_left}>
                      <span className={styles.show_upload}>
                        <img src='../../assets/icon.png' className={styles.upload_icon}/>
                        <span>添加图片</span>
                      </span>
                      <span className={styles.checkbox_wrap}>
                        <span className={styles.checkbox}>
                          <i></i>
                        </span>
                          <span>发布长文</span>
                      </span>
                      <span className={styles.show_emoji}>
                        <img src="http://p3.pstatp.com/origin/b76b00091cadfe239a6a" className={styles.icon}/>
                      </span>
                    </div>

                    <div className={styles.bui_right}>
                      <a className={styles.upload_publish}>发布</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
