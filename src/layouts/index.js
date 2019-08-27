import React ,{ Component }from 'react'
import styles from './index.css';
import DashBoard from '../pages/DashBoard';
class BasicLayout extends Component {

  render() {

    const { children } =this.props
    return (
      <div className={styles.normal}>

        <div className={styles.title}>
          <div className={styles.topbar}>
            <div className={styles.topleft}>
              <a href="//app.toutiao.com/news_article/" target="_blank"  rel="noopener noreferrer" ga_event="mh_nav_others"
                 className={styles.downloadapp}>下载APP</a>
              <div className={styles.weathertool}>
                <div>beiing</div>
              </div>

            </div >
            <div className={styles.topright}>
               <ul className={styles.clearfix}>
                 <li className={styles.li}>
                   <a href="//www.toutiao.com/complain/" ga_event="mh_nav_complain" target="blank"
                      className={styles.downloadapp}> 侵权投诉</a>
                 </li>
                 <li className={styles.li}>
                   <div className={styles.ttdropdown}>
                     <a href="//app.toutiao.com/news_article/" className={styles.downloadapp}>头条产品</a>
                   </div>
                 </li>
               </ul>
            </div>

          </div>

          </div>


        <DashBoard>{children}</DashBoard>
      </div>
    )
  }
}

export default BasicLayout;
