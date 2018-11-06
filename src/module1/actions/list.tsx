import {createAction} from 'redux-actions';
import http from '../../lib/http';
import {data} from '../types/list';
const requestGoods = createAction('REQUEST_GOODS');
const receiveGoods = createAction('RECEIVE_GOODS');
const increGoods = createAction('INCRE_GOODS');
const decreGoods = createAction('DECRE_GOODS');


export const getGoods = () => async (dispatch:any) => {
    dispatch(requestGoods());
   // window.setTimeout(function () {
      /*  http['get']('./goods.json')
            .then((data) => {*/
            console.log('5555666');

                let list:data[] = [{"id": 111, "imgUrl": "22", "link": "aa","location":"555"},{"id": 222, "imgUrl": "22", "link": "aa","location":"555"}];
                dispatch(receiveGoods(list));
         /*   }).catch((ex) => {
            console.error(ex);
        });*/
   // },1000);
};

export const plusGoods = (param:string) => async (dispatch:any) => {
    console.log(param); //从UI组件传递过来的参数
    http.get(process.env.REACT_APP_API_HOST+'c2c/user/v1/banner?location=REGISTER_TOP')
        .then((data) => {
            dispatch(increGoods(data.data));
        }).catch((ex) => {
        console.error(ex);
    });

}
export const minusGoods = () => async (dispatch) => {
    dispatch(decreGoods());
}

