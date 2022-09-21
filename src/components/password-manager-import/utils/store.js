import { reactive } from "vue";

export const store = reactive({
  source: null,
  csv: null,
  list: null,
  setSource(newSource) {
    this.source = newSource;
  },
  setList(newList) {
    this.list = newList;
  },
  updateListItem(index, newValue) {
    this.list[index] = newValue;
  },
  clean() {
    this.source = null;
    this.csv = null;
    this.list = null;
  },
});
