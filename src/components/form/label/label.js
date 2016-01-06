import * as CSSHelper from './../../../helpers/CSSHelper';

module.exports = {
    data () {
        return {
            block: 'form'
        };
    },
    props: {
        contextualType: {},
        content: {}
    },
    computed: {
        labelClass () {
            var classNames = [];
            var element = CSSHelper.has(this.block, 'label');
            var contextualClass = CSSHelper.contextualClass(element, this.contextualType);

            if (contextualClass) {
                classNames.push(contextualClass);
            }

            return classNames;
        }
    }
};
