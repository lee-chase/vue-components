import CSSHelper from './../../utils/CSSUtil';

export default {
    data () {
        return {
            block: 'alert'
        };
    },
    props: [
        'style',
        'title',
        'message',
        'dismiss',
        'timer',
        'isDismissable',
        'hasTimer'
    ],
    components: {},
    computed: {

        /**
         * Computed property which will output
         * whether there is a title or not
         *
         * @returns {boolean} If there is a title
         */
        hasTitle () {
            return !!this.title;
        },

        /**
         * Computed property which will output
         * whether there is a message or not
         *
         * @returns {boolean} If there is a message
         */
        hasMessage () {
            return !!this.message;
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
         * corrected style for the message
         *
         * @returns {string} The corrected style
         */
        messageStyle () {
            if (this.message) {
                return this.message.style || this.style;
            }

            return this.style;
        },

        /**
         * Computed property which will output the
         * corrected style for the dismiss button
         *
         * @returns {string} The corrected style
         */
        dismissStyle () {
            console.log(this.dismiss);
            if (this.dismiss) {
                return this.dismiss.style || this.style;
            }

            return this.style;
        },

        /**
         * Computed property which will output the
         * corrected style for the timer
         *
         * @returns {string} The corrected style
         */
        timerStyle () {
            if (this.timer) {
                return this.timer.style || this.style;
            }

            return this.style;
        },

        /**
         * Computed property which will output the
         * corrected class names for the alert
         *
         * @returns {Array} The corrected class name
         */
        alertClass () {
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
         * corrected class names for the message
         *
         * @returns {Array} The corrected class name
         */
        messageClass () {
            var classNames = [];
            var element = CSSHelper.has(this.block, 'message');
            var contextualClass = CSSHelper.contextualClass(element, this.messageStyle);

            classNames.push(element);

            if (contextualClass) {
                classNames.push(contextualClass);
            }

            return classNames;
        },

        /**
         * Computed property which will output the
         * corrected class names for the dismiss button
         *
         * @returns {Array} The corrected class name
         */
        dismissClass () {
            var classNames = [];
            var element = CSSHelper.has(this.block, 'dismiss');
            var contextualClass = CSSHelper.contextualClass(element, this.dismissStyle);

            classNames.push(element);

            if (contextualClass) {
                classNames.push(contextualClass);
            }

            return classNames;
        },

        /**
         * Computed property which will output the
         * corrected class names for the timer button
         *
         * @returns {Array} The corrected class name
         */
        timerClass () {
            var classNames = [];
            var element = CSSHelper.has(this.block, 'timer');
            var contextualClass = CSSHelper.contextualClass(element, this.timerStyle);

            classNames.push(element);

            if (contextualClass) {
                classNames.push(contextualClass);
            }

            return classNames;
        }
    },
    methods: {

        /**
         * Method used to dismiss the alert.
         * It will destroy the vm and clean it up.
         */
        dismissAlert () {
            this.$destroy(true);
        },

        /**
         * Method used to start the timer.
         * When the timer is complete, it will dismiss the alert.
         */
        startTimer () {
            setTimeout(this.dismissAlert, 5000);
        }
    },
    ready () {
        if (this.hasTimer) {
            this.startTimer();
        }
    }
};
