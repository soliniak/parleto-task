<template>
  <div id='app' class='appWrapper'>
    <img src="./assets/logo.png" width='200px' alt="My new company name!">
    <Filters
      @filter:person='handleInput($event)'
      @filter:departments='handleCheckboxes($event)'
      @filter:min-salary='handleMinSalary($event)'
      @filter:max-salary='handleMaxSalary($event)'
      @window:new-employee='openNewEmployee($event)'
      :departments='departments'
    />
    <NewEmployeeForm
      @add:employee='handleNewEmployee($event)'
      @window:new-employee='openNewEmployee($event)'
      :open='employeeStatus'
    />
    <Table
      :person='searchValue'
      :departments='filterDepartments'
      :min-salary='minSalary'
      :max-salary='maxSalary'
      :new-employee='employee'
      @unique:departments='updateDepartments($event)'
    />
  </div>
</template>

<script>
import Filters from '@/components/Filters.vue';
import Table from '@/components/Table.vue';
import NewEmployeeForm from '@/components/AddEmployee.vue';

export default {
  name: 'App',
  data() {
    return {
      searchValue: '',
      filterDepartments: [],
      minSalary: 0,
      maxSalary: 999999999,
      employee: {},
      departments: [],
      employeeStatus: false,
    };
  },
  components: {
    Filters, Table, NewEmployeeForm,
  },
  methods: {
    openNewEmployee(status) {
      this.employeeStatus = status;
    },
    handleInput(nazwa) {
      this.searchValue = nazwa;
    },
    handleCheckboxes(tablica) {
      this.filterDepartments = tablica;
    },
    handleMinSalary(minSalary) {
      this.minSalary = minSalary || 0;
    },
    handleMaxSalary(maxSalary) {
      this.maxSalary = maxSalary || 999999999;
    },
    handleNewEmployee(employee) {
      this.employee = employee;
    },
    updateDepartments(departments) {
      this.departments = Array.from(departments);
    },
  },
};
</script>

<style lang='sass'>
*
  box-sizing: border-box

.appWrapper
  display: flex
  flex-direction: column
  max-width: 800px

body
  background-color: #E5E5E5
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700&display=swap')
  font-family: Roboto, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  margin: 0
  padding: 1rem 1rem
  display: flex
  justify-content: center
  font-size: 14px
  @media (min-width: 600px)
    padding: 1rem 3rem
    font-size: 16px

input
  border: none
  border-bottom: 1px solid rgba(black, .3)
  border-radius: 5px
  text-align: center
  padding: .5rem 5px
  font-size: 16px
  &:focus
    border-bottom: 1px solid rgba(black, .6)
  @media (min-width: 600px)
    padding: .5rem .2rem
img
  align-self: center
  margin-bottom: 10px
  @media (min-width: 600px)
      align-self: flex-start
</style>
