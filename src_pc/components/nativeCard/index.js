Component({
    props: {},
    data: { 
        trade: {
            tid: 'default'
        },
        tradeIndex: -1,
    },
    didMount(){
        console.log('###card didMount###', this.props.tradeIndex);
    },
    deriveDataFromProps ({ trade, tradeIndex }) {
        console.log('####card from props####', trade);
        this.setData({ trade, tradeIndex });
    },
    methods: {
        onCardClick () {
            const { trade } = this.props;
            my.alert({ content: trade.tid });
        },
    },
});
