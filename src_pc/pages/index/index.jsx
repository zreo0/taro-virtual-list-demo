import Taro, { Component } from '@tarojs/taro';
import { Button, Text, View, Image } from '@tarojs/components';
import TradeManagement from '../tradeManagement';
import './index.scss';

class Index extends Component {
    constructor (props) {
        super(props);
        this.state = {
        };
    }

    config = {
        navigationBarTitleText: '首页',
        /*usingComponents: { 'router-view': '../../components/miniapp-router/router-view/router-view', // 书写第三方组件的相对路径
        },*/
    };

    
    componentWillMount () {
        
    }

    render () {
        return (
            <View className='index'>
                <View className='nav'>
                    <View className='container'>
                        <View className='content'>
                            <view style="height:100%">
                                <TradeManagement></TradeManagement>
                            </view>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}


export default Index;
