import List from '../components/List';
import * as actions from '../actions/list';
import { connect } from 'react-redux';
import {State} from '../types/list';

const mapStateToProps = (state:State) => ({
  isFetching: state.listReducer.isFetching,
  data: state.listReducer.data
});

const mapDispatchToProps = (dispatch:any) => ({
  initGoods:() => dispatch(actions.getGoods()),
  plusGoods:(param:string) => dispatch(actions.plusGoods(param)),
  minusGoods:()=> dispatch(actions.minusGoods()),
});

export default connect(mapStateToProps,mapDispatchToProps)(List);
