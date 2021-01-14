import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import TradeDetailCard from "pcComponents/tradeManagement/tradeDetailCard";
import { mockTrades } from './mock.js';
import './index.scss';
class TradeList extends Component {
    config = {
        usingComponents: {
            'trade-list': '../../nativeTradeList/index',
            'trade-card':'../../nativeCard/index',
        },
    };
    constructor (props) {
        super(props);
        this.state = {
        };
    }

    render () {
        let trades = mockTrades;
        /*return (
            <View className='trade-list'>
                <trade-list trades={ trades } text="hhh"></trade-list>
            </View>
        );*/
        
        return (
            <View className='trade-list'>
                {
                    trades.length != 0  &&
                    <View style={{ overflow: 'auto' }}>
                        <virtual-list>
                            {
                                trades.map((trade, index) => {
                                    return <View>
                                        <TradeDetailCard trade={trade} index={index} cardId={ `my-card-${index}` } />

                                        {/* 直接写在这里是可以的 */}
                                        {/*<View className='trade-detail-card' id={`my-card-${index}`} style={{ height: '300px' }}>
                                            { `my-card-${index}` }
                                            <View className='hd'>
                                                <View className='hd-text'>
                                                    <Text className='hd-tid'>编号:{ trade.tid }</Text>
                                                </View>
                                            </View>
                                        </View>*/}
                                    </View>
                                })
                            }
                        </virtual-list>
                    </View>
                }
            </View>
        );
    }
}

export default TradeList;
