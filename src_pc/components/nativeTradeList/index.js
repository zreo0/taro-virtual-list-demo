Component({
    props: {
    },
    data: {
        trades: [],
        text: 'default'
    },
    didMount () {
        console.log('####native list didMount####');
    },
    deriveDataFromProps ({ trades }) {
        console.log('####deriveDataFromProps####', trades);
        this.setData({ trades });
    },
    methods: {
        testFunction (e) {
            my.alert({ content: 'list alert1' });
        },
    },
});
