import React, { Component } from 'react';
//import {withRouter} from 'react-router-dom';
import  '../static/list.scss';
import * as actions from '../actions/list';


interface goods{
    id:number,
    imgUrl?:string,
    link?:string,
    location?:string
}
interface Props{
    isFetching:boolean,
    history:any,
    data:goods[],
    initGoods:()=> void,
    plusGoods:(param:string)=> void,
    minusGoods:()=>void,
}
class List extends Component<Props> {
    constructor(props:Props){
        super(props);
       //this.props.initGoods();
    }
    static fetch(store){
        return store.dispatch(actions.getGoods());
    }
    componentDidMount() {

    }
    goDetail(id){
        this.props.history.push({ pathname:'/detail', search: "sort=name",state:{name : id } });
    };
    render() {
        return this.props.isFetching ? (<div className="loading"><p className="loader"></p></div>) : (
            <div>
                <ul className="goods">
                    {
                        this.props.data.map((ele, idx) => (
                            <li key={idx} onClick={()=>{this.goDetail(ele.id)}}>
                                <span>{ele.id}</span>
                            </li>
                        ))
                    }
                </ul>
                <p className="plus" onClick={()=>{this.props.plusGoods('plus')}}>
                    +
                </p>
                <p className="minus" onClick={this.props.minusGoods}>
                    -
                </p>
            </div>
            );
    }
}

export default List;