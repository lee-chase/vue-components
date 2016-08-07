import ElementMixin from './../../../mixins/element';

export default {
  mixins: [
    ElementMixin,
  ],

  data() {
    return {
      /**
       * Element name used for BEM
       */
      element: 'body',
    };
  },

  props: {
    /**
     * Body content
     */
    content: {
      type: String,
      required: false,
    },
  },
};
