import CSSUtil from '../utils/css';
import StyleMixin from './style';

export default {
  mixins: [
    StyleMixin,
  ],

  computed: {
    /**
     * The block name from the parent
     *
     * @returns {string}
     */
    block() {
      return this.$parent.block;
    },

    /**
     * Computed property which will output
     * the corrected class names
     *
     * @returns {Array} The corrected class names
     */
    classNames() {
      const classes = CSSUtil.elementClasses(this.block, this.element, this.variants);

      if (!this.contextualStyle) {
        this.contextualStyle = this.$parent.contextualStyle;
      }

      if (this.contextualStyle) {
        classes.push(
          CSSUtil.contextualClass(
            CSSUtil.has(
              this.block, this.element
            ),
            this.contextualStyle
          )
        );
      }

      if (this.class) {
        classes.push(this.class);
      }

      return classes;
    },
  },
};
