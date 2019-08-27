import React, { Component } from 'react'
import styles from '../index.css'
class UgcDown extends Component {
    contentClick(e){
        switch(e){
        case "其他":return styles.tag_style_video1;
        case "动漫":return styles.tag_style_video2;
        default :return styles.tag_style_video;
        }
     }
    
    render() {
         
        return (
            <div className={styles.ugcDown}>
                <ul className={styles.ugcDown}>
                    <li>
                        <div className={styles.single_mode}>
                            <div className={styles.single_mode_lbox}>
                                <a href="/group/6728168461891011079/" target="_blank" className={styles.img_wrap}>
                                    <img alt="" className={styles.lazy_load_img} src={this.props.item.image_url} lazy="loaded" />
                                </a>
                            </div>
                            <div className={styles.single_mode_rbox}>
                                <div className={styles.single_mode_rbox_inner}>
                                    <div className={styles.title_box}>
                                        <a href="https://www.xuexi.cn/" target="_blank" rel="noopener noreferrer" className={styles.link}>{this.props.item.title}</a>
                                    </div >
                                    <div className={styles.foot_bar}>
                                        <div className={styles.foot_bar_left}>
                                            <a href="https://www.xuexi.cn/" target="_blank" rel="noopener noreferrer" className={this.contentClick.call(this,this.props.item.chinese_tag)}>{this.props.item.chinese_tag}</a>
                                            <a href="https://www.xuexi.cn/" className={styles.footer_bar_action}>
                                                <img alt="" className={styles.footer_bar_img} src={this.props.item.media_avatar_url} lazy="loaded" />
                                            </a>
                                            <a href="https://www.xuexi.cn/" target="_blank" rel="noopener noreferrer" className={styles.footer_bar_action + "" + styles.footer_bar_size}> {this.props.item.source} ·</a>
                                            <a href="https://www.xuexi.cn/" className={styles.footer_bar_action + "" + styles.footer_bar_size}> 1083评论 ·</a>
                                            <a href="https://www.xuexi.cn/" className={styles.footer_bar_action + "" + styles.footer_bar_size}> 1小时前</a>
                                        </div>
                                    </div>
                                </div>
                            </div >
                        </div>
                    </li>
                    <li> </li>
                </ul>
            </div>
          
        )
    }
}
export default UgcDown
