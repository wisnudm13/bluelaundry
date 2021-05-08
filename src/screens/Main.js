import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser } from '../../redux/actions/index'

export class Main extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }

    render() {
        const { currentUser } = this.props;
        console.log(currentUser);
        
        return (
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Text>User is logged in</Text>
            </View>
        )
    }
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})
const mapDipatchProps = (dispatch) => bindActionCreators({fetchUser}, dispatch);

export default connect(mapStateToProps, mapDipatchProps)(Main);
