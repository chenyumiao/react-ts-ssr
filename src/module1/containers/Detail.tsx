import Detail from '../components/Detail';
import * as actions from '../actions/detail';
import { State } from '../types/detail';
import { connect } from 'react-redux';

export function mapStateToProps(state:State) {
    return {
        enthusiasmLevel:state.detailReducer.enthusiasmLevel,
        name:state.detailReducer.name,
    };
}

export function mapDispatchToProps(dispatch:any) {
    return {
        onIncrement: () => dispatch(actions.incrementEnthusiasm()),
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
