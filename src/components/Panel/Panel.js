import CSSHelper from './../../utils/CSSUtil';

export default {
    data () {
        return {
            block: 'panel'
        };
    },
    props: [
        'style',
        'header',
        'title',
        'body',
        'footer'
    ],
    components: {},
    computed: {

        /**
         * Computed property which will output
         * whether there is an header or not
         *
         * @returns {boolean} If there is an header
         */
        hasHeader () {
            return !!this.header;
        },

        /**
         * Computed property which will output
         * whether there is a body or not
         *
         * @returns {boolean} If there is a body
         */
        hasBody () {
            return !!this.body;
        },

        /**
         * Computed property which will output
         * whether there is a footer or not
         *
         * @returns {boolean} If there is a footer
         */
        hasFooter () {
            return !!this.footer;
        },

        /**
         * Computed property which will output the
         * corrected style for the header
         *
         * @returns {string} The corrected style
         */
        headerStyle () {
            if (this.header) {
                return this.header.style || this.style;
            }

            return this.style;
        },

        /**
         * Computed property which will output the
         * corrected style for the title
         *
         * @returns {string} The corrected style
         */
        titleStyle () {
            if (this.title) {
                return this.title.style || this.style;
            }

            return this.style;
        },

        /**
         * Computed property which will output the
         * corrected style for the body
         *
         * @returns {string} The corrected style
         */
        bodyStyle () {
            if (this.body) {
                return this.body.style || this.style;
            }

            return this.style;
        },

        /**
         * Computed property which will output the
         * corrected style for the footer
         *
         * @returns {string} The corrected style
         */
        footerStyle () {
            if (this.footer) {
                return this.footer.style || this.style;
            }

            return this.style;
        },

        /**
         * Computed property which will output the
         * corrected class names for the panel
         *
         * @returns {Array} The corrected class name
         */
        panelClass () {
            var classNames = [];
            var contextualClass = CSSHelper.contextualClass(this.block, this.style);

            classNames.push(this.block);

            if (contextualClass) {
                classNames.push(contextualClass);
            }

            return classNames;
        },

        /**
         * Computed property which will output the
         * corrected class names for the header
         *
         * @returns {Array} The corrected class name
         */
        headerClass () {
            var classNames = [];
            var element = CSSHelper.has(this.block, 'header');
            var contextualClass = CSSHelper.contextualClass(element, this.headerStyle);

            classNames.push(element);

            if (contextualClass) {
                classNames.push(contextualClass);
            }

            return classNames;
        },

        /**
         * Computed property which will output the
         * corrected class names for the title
         *
         * @returns {Array} The corrected class name
         */
        titleClass () {
            var classNames = [];
            var element = CSSHelper.has(this.block, 'title');
            var contextualClass = CSSHelper.contextualClass(element, this.titleStyle);

            classNames.push(element);

            if (contextualClass) {
                classNames.push(contextualClass);
            }

            return classNames;
        },

        /**
         * Computed property which will output the
         * corrected class names for the body
         *
         * @returns {Array} The corrected class name
         */
        bodyClass () {
            var classNames = [];
            var element = CSSHelper.has(this.block, 'body');
            var contextualClass = CSSHelper.contextualClass(element, this.bodyStyle);

            classNames.push(element);

            if (contextualClass) {
                classNames.push(contextualClass);
            }

            if (!this.hasFooter && !this.hasHeader) {
                classNames.push(CSSHelper.variant(element, 'border-radius'));
            } else if (!this.hasFooter) {
                classNames.push(CSSHelper.variant(element, 'no-border-radius-top'));
            } else if (!this.hasHeader) {
                classNames.push(CSSHelper.variant(element, 'no-border-radius-bottom'));
            }

            return classNames;
        },

        /**
         * Computed property which will output the
         * corrected class names for the header
         *
         * @returns {Array} The corrected class name
         */
        footerClass () {
            var classNames = [];
            var element = CSSHelper.has(this.block, 'footer');
            var contextualClass = CSSHelper.contextualClass(element, this.footerStyle);

            classNames.push(element);

            if (contextualClass) {
                classNames.push(contextualClass);
            }

            return classNames;
        }
    }
};
