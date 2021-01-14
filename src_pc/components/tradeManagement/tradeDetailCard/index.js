import Taro, { Component } from '@tarojs/taro';
import { Image, Text, View, Checkbox } from '@tarojs/components';
import './index.scss';
class TradeDetailCard extends Component {
    constructor (props) {
        super(props);
    }

    componentDidMount() {
        console.log('###trade card###', this.props.cardId);
    }

    render () {
        const { trade, index, cardId } = this.props;
        return (
            <View className='trade-detail-card' id={cardId} style={{ height: '300px' }}>
                { cardId }
                <View className='hd'>
                    <View className='hd-text'>
                        <Text className='hd-tid'>编号:{ trade.tid }</Text>
                    </View>
                </View>
            </View>
        );
    }
}

TradeDetailCard.defaultProps = { trade: { tid: '' } };

export default TradeDetailCard;
