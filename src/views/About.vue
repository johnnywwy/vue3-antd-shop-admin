<script lang="tsx">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return () => (
      <div class="shadow card-base text-base flex flex-col p-10 md:(w-fit h-fit) xxs:(box-border items-center justify-center w-full h-full) xxl:(w-1/2 h-1/2 text-5xl bg-light-800)">
        About
      </div>
    );
  },
});
</script>

<style scoped></style>
