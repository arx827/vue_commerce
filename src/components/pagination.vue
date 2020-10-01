<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{ disabled: !paginationData.has_pre }">
        <a
          class="page-link"
          href="#"
          aria-label="Previous"
          @click.prevent="updatePage(paginationData.current_page - 1)"
        >
          <span aria-hidden="true">&laquo;</span>
          <span class="sr-only">Previous</span>
        </a>
      </li>
      <li
        class="page-item"
        v-for="page in paginationData.total_pages"
        :key="page"
        :class="{ active: paginationData.current_page == page }"
        @click.prevent="updatePage(page)"
      >
        <a class="page-link" href="#">{{ page }}</a>
      </li>
      <li
        class="page-item"
        :class="{ disabled: !paginationData.has_next }"
        @click.prevent="updatePage(paginationData.current_page + 1, $event)"
      >
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
          <span class="sr-only">Next</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
// :pages="{ 頁碼資訊 }"
// @emitPages="更新頁面事件"
export default {
  name: "pagination",
  props: ["paginationData"],
  methods: {
    updatePage(paginationData, $event) {
      if (!$event.target.className.includes("disabled")) {
        this.$emit("emitPages", paginationData);
      }
    }
  }
};
</script>
