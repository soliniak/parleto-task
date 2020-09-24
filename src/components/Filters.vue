<template>
  <div class="filtersWrapper">
    <div class="filters">
      <div class="department__filters">
        <p>Filtruj wg. działu:</p>
        <ul>
          <li class='departments__list' v-for="department in departments" :key='department'>
            <input :id="department" type="checkbox" :value="department.toLowerCase()" v-model="checkboxes">
            <label :for="department">{{ department }}</label>
          </li>
        </ul>
      </div>
      <div class="salary__filters">
        <div class="employee__filter">
          <p> Szukaj pracownika:</p>
          <input type="text" placeholder="Imię lub nazwisko" v-model="person">
        </div>
        <div>
          <p>Filtruj wg. wynagrodzenia:</p>
          <div class="salary__inputs">
            <input type="number" placeholder="min" class='salary__input' v-model.number="minSalary">
            <input type="number" placeholder="max" class='salary__input' v-model.number="maxSalary">
          </div>
        </div>
      </div>
    </div>
    <div class="btn__functions">
      <button class='btn' @click='clearFilters'>Wyczyść filtry</button>
      <button class='btn' @click='newEmployeeWindow'>Dodaj pracownika</button>
    </div>
  </div>
</template>

<script>
import _debounce from 'lodash.debounce';

export default {
  props: {
    departments: {
      type: Array,
      required: true,
    },
  },
  methods: {
    searchPerson(user) {
      this.person = user;
    },
    newEmployeeWindow() {
      this.$emit('window:new-employee', true);
    },
    clearFilters() {
      this.checkboxes = [];
      this.minSalary = null;
      this.maxSalary = null;
      this.person = '';
    },
  },
  data() {
    return {
      checkboxes: [],
      minSalary: null,
      maxSalary: null,
      person: '',
    };
  },
  watch: {
    checkboxes() {
      this.$emit('filter:departments', this.checkboxes);
    },
    minSalary: _debounce(function minSalary() {
      this.$emit('filter:min-salary', this.minSalary);
    }, 500),
    maxSalary: _debounce(function maxSalary() {
      this.$emit('filter:max-salary', this.maxSalary);
    }, 500),
    person: _debounce(function searchPerson() {
      this.$emit('filter:person', this.person);
    }, 500),
  },
};
</script>

<style lang="sass" scoped>
*
  font-weight: 500

.filtersWrapper
  display: flex
  flex-direction: column

.employee__filter
  display: flex
  flex-direction: column
  align-items: flex-start
  margin-bottom: 1rem
  input
    width: 100%
.filters
  display: flex
  flex-direction: row
  margin-bottom: 1rem
  .salary__filters
    display: flex
    flex-direction: column
  .department__filters, .salary__filters
    width: 50%
  .salary__inputs
    display: flex
    justify-content: space-between
    .salary__input
      width: 48%
  ul
    list-style: none
    padding: 0
    li
      margin-bottom: 12px
      label
        margin-left: 10px
.btn
  align-self: flex-end
  font-weight: 600
  padding: .5rem .5rem
  min-height: 40px
  cursor: pointer
  @media (min-width: 600px)
    padding: .5rem 1rem
.btn__functions
  width: 100%
  display: flex
  flex-direction: row
  justify-content: space-between
  margin: 20px 0
</style>
