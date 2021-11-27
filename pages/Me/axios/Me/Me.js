import api from "../interfaceAPIs/MeAPI/api.js"
import axios from "../axios.interceptors.js";

// try{
//   await new Promise((resolve,reject)=>{
//    uni.getStorage({
//     key:'token',
//     success: function(res) {
//      this.token =res.data;
//      resolve(1);
//     },
//     fail() {
//      console.log("您还没有登陆");
//      reject(1);
//     }
//    })
//    })
//  }catch(e){
//   console.log("您还没有登陆");
//   //TODO handle the exception
//  }

//获取用户校园网账号
export function getUserAccount(data) {
	return axios.post(api.post.getUserAccount,data)

}
//获取用户收藏的OA信息列表
export function getOaFavorites(token,page,size) {
	return axios.get(api.get.getOaFavorites+ "?token=" + token+ "&page=" +page+ "&size=" +size)

}
//取消收藏
export function removeFavorites(token,oaId) {
	return axios.get(api.get.removeFavorites+"?token="+token+"&oaId="+oaId)
	
}
