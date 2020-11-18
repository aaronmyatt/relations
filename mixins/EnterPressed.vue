<script>
export default {
  mounted() {
    window.addEventListener("keyup", this.listenForEnter);
  },
  destroyed() {
    window.removeEventListener("keyup", this.listenForEnter);
  },
  methods: {
    listenForEnter(e) {
      if (e.key === "Enter") {
        this.enterPressedCallback();
      }
    },
  },
};
</script>