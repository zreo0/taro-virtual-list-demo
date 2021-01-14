import Taro, { Component } from '@tarojs/taro';
import { View, ScrollView } from '@tarojs/components';
import TradeList from "pcComponents/tradeManagement/tradeList";

import './index.scss';
class TradeManagement extends Component {

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <View className='trade-total'>
                <View className='trademanagement'>
                    <ScrollView 
                        className='trade-scroll'
                        style={{ height: 1000 - 60 - 50 }}
                        scrollY enableBackToTop
                    >
                        <TradeList />
                    </ScrollView>
                </View>
            </View>
        );
    }
}

export default TradeManagement;
