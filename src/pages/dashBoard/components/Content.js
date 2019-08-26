import React, { Component } from 'react';
import styles from '../index.css'

class Content extends Component {
     contentClick(e){
        
        return  e== 1? styles.active: styles.checkbox_wrap;
     }
     contentEmoji(e){
        return  e== 0? styles.show_emoji:styles.active
     }
    render() {
        console.log("+++++",this.props.item.img)
        return (
            // <div className={this.props.contentClass(this.props.index)} >{this.props.item}</div>
            // <div className="publish">
            //     <div className='btn1'>添加图片</div>
            //     <div className='btn2' style={{display: arr[1]}}>发布长文</div>
            //     <div className='btn3'></div>
            // </div>
            // call、apply、bind
            <div className={this.props.contentClass(this.props.index)}  >
                <textarea placeholder={this.props.item.tex} className={styles.title_input}></textarea>
                <p className={styles.word_number}>{this.props.item.num}字</p>
                <div className={styles.upload_footer}>
                    <div className={styles.bui_left}>
                        <div className={styles.show_first}>
                            <span className={styles.show_upload}>
                                <img src={this.props.item.img}  className={styles.upload_icon}/>
                                <span>{this.props.item.upload}</span>
                            </span>                        
                            <span className={this.contentClick.call(this,this.props.k)}>
                                <span className={styles.checkbox}>
                                    {/* <span class={this.oncheckbox.bind(this)} >
                                        <i></i>
                                    </span> */}    
                                </span>
                                <span>{this.props.item.push}</span>  
                            </span>
                            <span className={this.contentEmoji.call(this,this.props.k)}>
                                    <img src="http://p3.pstatp.com/origin/b76b00091cadfe239a6a" className={styles.icon} />
                            </span>


                        </div>
                    </div>
                    <div className={styles.bui_right}>
                            <a className={styles.upload_publish}>发布</a>
                        </div>
                    
                </div>
            </div>
           
                )
    }
}
export default Content