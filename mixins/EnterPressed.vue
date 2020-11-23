<script>
export default {
  mounted() {
    this.$el.addEventListener("keyup", this.listenForEnter);
  },
  destroyed() {
    this.$el.removeEventListener("keyup", this.listenForEnter);
  },
  methods: {
    listenForEnter(e) {
      if(e.target.tagName === 'TEXTAREA') return;
      if (e.key === "Enter") {
        this.enterPressedCallback();
      }
    },
  },
};
</script>