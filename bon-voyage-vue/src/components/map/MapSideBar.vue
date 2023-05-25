<template>
  <div>
    <b-button v-b-toggle.sidebar-1 class="btn-open-sidebar"
      >Toggle Sidebar</b-button
    >
    <b-sidebar id="sidebar-1" title="Sidebar" shadow>
      <div class="px-3 py-2">
        <SearchBox></SearchBox>
        <LocationSelectBox></LocationSelectBox>
        <PlaceInfoNav></PlaceInfoNav>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import SearchBox from "../common/SearchBox.vue";
import LocationSelectBox from "../common/LocationSelectBox.vue";
import PlaceInfoNav from "../common/PlaceInfoNav.vue";

export default {
  name: "MapSideBar",
  components: {
    SearchBox,
    LocationSelectBox,
    PlaceInfoNav,
  },
  data() {
    return {
      message: "",
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
.btn-open-sidebar {
}
</style>
