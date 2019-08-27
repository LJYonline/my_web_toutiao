import * as query from "../../../services/services"
import img from '../../../assets/toutiao.png';
export default {
    namespace:"app",
    state:{
      list: ["发布图文", "发布视频", "发布问答"],
      content: [
        { tex: "有什么新鲜事想告诉大家", num: "0/2000", img:img  , upload: "添加图片", push: "发布长文" },
        { tex: "视频标题（30 字以内）", num: "0/30", img: img, upload: "添加视频", push: "" },
        { tex: "请输入问题标题（4-40字）", num: "0/40", img:img, upload: "添加图片", push: "更多回答" }
      ],
      k: 0,
      service:[]
    },
    reducers: {
        updateState(state, { payload }) {
          return {
            ...state,
            ...payload,
          }
        },
    },
    effects:{
      *addNews({payload},{call,put}){
        const result = yield call(query.queryNews)
        console.log("我是结果",result)
        yield put({
          type:'updateState',
          payload:{
            service:result.data
          }
        })
      }
    }
}