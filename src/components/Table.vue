<template>
  <div class="tableWrapper">
    <h2 class='table__title'>Pracownicy:</h2>
    <table class='table' cellpading='0' cellspacing='0' v-if='mobile'>
      <tbody class='table__body' v-for='pracownik in filterData' :key='pracownik.id'>
        <tr>
          <td class='description'> Imię: </td>
          <td class='data'> {{ pracownik.imie }}</td>
        </tr>
        <tr>
          <td class='description'>Nazwisko:</td>
          <td class='data'> {{ pracownik.nazwisko }}</td>
        </tr>
        <tr>
          <td class='description'>Dział:</td>
          <td class='data'> {{ pracownik.dzial }}</td>
        </tr>
        <tr>
          <td class='description'>Wynagrodzenie</td>
          <td class='data'> {{ pracownik.wynagrodzenieKwota | money(pracownik.wynagrodzenieWaluta) }}</td>
        </tr>
        <tr>
          <td class='separator' colspan='2'>
          </td>
        </tr>
      </tbody>
      <tbody v-show='nodata'>
        <tr>
          <td class='nodata'> Brak rekordów spełniających podane kryteria. </td>
        </tr>
      </tbody>
    </table>
    <table class='table table__desktop' cellpading='0' cellspacing='0' v-else>
      <thead class='table__head' v-show='!nodata'>
        <tr>
          <th class='id'>ID</th>
          <th class='name'>Imię</th>
          <th class='lastname'>Nazwisko</th>
          <th class='department'>Dział</th>
          <th class='salary'>Wynagrodzenie</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='(pracownik, index) in filterData' :key='pracownik.id'>
          <td class='index'> {{ index + 1 }}</td>
          <td> {{ pracownik.imie }}</td>
          <td> {{ pracownik.nazwisko }}</td>
          <td> {{ pracownik.dzial }}</td>
          <td> {{ pracownik.wynagrodzenieKwota | money(pracownik.wynagrodzenieWaluta) }}</td>
        </tr>
      </tbody>
      <tbody v-show='nodata'>
        <tr>
          <td class='nodata' colspan='5'> Brak rekordów spełniających podane kryteria. </td>
        </tr>
      </tbody>
    </table>
    <p class='salary__all'>Wynagrodzenie wszystkich pracowników wynosi:
      <span class='nobr'>{{ salaryOfAllEmployees | money(currenncyOfAllEmployees) }}</span>
    </p>
    <ul class='salary__departments' v-for='depoSalary in departemntsSalary' :key='depoSalary.department'>
      <li>Całkowite wynagrodzenie dla działu {{ depoSalary.department }}: <br v-if='mobile'>
        <span class='nobr'>{{ depoSalary.sum | money(depoSalary.currency) }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import validateCurrency from 'validate-currency-code';

export default {
  name: 'Table',
  filters: {
    money(cash, curr) {
      if (validateCurrency(curr.toUpperCase())) {
        const formatter = new Intl.NumberFormat('pl-PL', {
          style: 'currency',
          currency: curr,
        });

        return formatter.format(Number(cash));
      }
      return `${Number(cash).toLocaleString(undefined, { minimumFractionDigits: 2 })} ${curr}`;
    },
  },
  props: {
    person: {
      type: String,
      required: true,
    },
    departments: {
      type: Array,
      required: true,
    },
    minSalary: {
      type: Number,
      required: true,
    },
    maxSalary: {
      type: Number,
      required: true,
    },
    newEmployee: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      pracownicy: [
        {
          id: 1245, imie: 'Jan', nazwisko: 'Kowalski', dzial: 'IT', wynagrodzenieKwota: '3000', wynagrodzenieWaluta: 'PLN',
        },
        {
          id: 5264, imie: 'Jan', nazwisko: 'Kowalski', dzial: 'Administracja', wynagrodzenieKwota: '8000', wynagrodzenieWaluta: 'PLN',
        },
        {
          id: 3435, imie: 'Anna', nazwisko: 'Bąk', dzial: 'Administracja', wynagrodzenieKwota: '2400.500', wynagrodzenieWaluta: 'PLN',
        },
        {
          id: 3674, imie: 'Paweł', nazwisko: 'Zabłocki', dzial: 'IT', wynagrodzenieKwota: '3300', wynagrodzenieWaluta: 'PLN',
        },
        {
          id: 5789, imie: 'Tomasz', nazwisko: 'Osiecki', dzial: 'Administracja', wynagrodzenieKwota: '2100', wynagrodzenieWaluta: 'PLN',
        },
        {
          id: 6678, imie: 'Iwona', nazwisko: 'Leihs-Gutowska', dzial: 'Handlowiec', wynagrodzenieKwota: '3100', wynagrodzenieWaluta: 'PLN',
        },
      ],
      filtered: [],
      uniqueDepartments: [],
      mobile: false,
      departemntsSalary: {},
      nodata: false,
    };
  },
  mounted() {
    this.filtered = this.pracownicy;

    const departments = this.pracownicy.map((pracownik) => pracownik.dzial);
    this.uniqueDepartments = new Set(departments);

    this.$nextTick(function handleTick() {
      this.depsSalary();
      window.addEventListener('DOMContentLoaded', this.getWindowWidth);
      window.addEventListener('resize', this.getWindowWidth);
    });
  },
  computed: {
    filterData() {
      let filterMe = this.filtered
        .filter((pracownik) => pracownik.imie.toLowerCase().match(this.person.toLowerCase())
          || pracownik.nazwisko.toLowerCase().match(this.person.toLowerCase()))
        .filter((pracownik) => Number(this.minSalary) <= Number(pracownik.wynagrodzenieKwota)
          && Number(pracownik.wynagrodzenieKwota) <= Number(this.maxSalary));

      if (this.departments.length) {
        filterMe = filterMe
          .filter((pracownik) => this.departments.includes(pracownik.dzial.toLowerCase()));
      }
      return filterMe;
    },
    salaryOfAllEmployees() {
      return this.filterData.reduce((acc, { wynagrodzenieKwota }) => Number(acc) + Number(wynagrodzenieKwota), 0);
    },
    currenncyOfAllEmployees() {
      return this.pracownicy.some(({ wynagrodzenieWaluta }) => wynagrodzenieWaluta !== 'PLN') ? 'mixed' : 'pln';
    },
  },
  methods: {
    getWindowWidth() {
      this.mobile = document.documentElement.clientWidth < 500;
    },
    depsSalary() {
      const departmentsArr = [];

      this.uniqueDepartments.forEach((el) => {
        const departmentSum = {
          department: el,
          sum: 0,
          currency: undefined,
        };

        this.pracownicy.forEach((pracownik) => {
          if (pracownik.dzial === el) {
            departmentSum.sum += Number(pracownik.wynagrodzenieKwota);
            departmentSum.currency = departmentSum.currency
            && departmentSum.currency !== pracownik.wynagrodzenieWaluta
              ? 'mixed'
              : pracownik.wynagrodzenieWaluta;
          }
        });
        departmentsArr.push(departmentSum);
      });

      this.departemntsSalary = departmentsArr;
    },
  },
  watch: {
    newEmployee() {
      return this.pracownicy.push(this.newEmployee);
    },
    pracownicy() {
      const departments = this.pracownicy.map((pracownik) => pracownik.dzial);
      this.uniqueDepartments = new Set(departments);
      this.depsSalary();
    },
    uniqueDepartments() {
      this.$emit('unique:departments', new Set(this.uniqueDepartments));
    },
    filterData() {
      this.nodata = !this.filterData.length;
    },
  },
};
</script>

<style lang='sass' scoped>
.table
  width: 100%
  background-color: white
  &__body:nth-child(odd)
    background: rgba(200,200,200, .1)
  .description, .data
    width: 50%
  .description
    text-align: right
    padding: 5px 10px
  .separator
    height: 1px
    background: rgba(black, .1)
.table__title
  font-weight: 600
  font-size: 16px
.salary__all
  padding: 0
  margin: 12px 0 40px
.salary__departments
  list-style: none
  padding: 0
  margin: 0
.nobr
  white-space: nowrap
  font-weight: 600
.table__desktop
  th
    text-align: left
    padding: .5rem 0
  .id
    padding: 0 .4rem
    width: 35px
  .name
    width: 90px
  .lastname
    width: auto
  .department
    width: 120px
  .salary
    width: 120px
  tr:hover td
    background-color: #f6f6f6
  td
    padding: .5rem .5rem .5rem 0
  .index
    padding: 0 .5rem
    &::after
      content: '.'
.nodata
  text-align: center
  padding: .5rem
li
  margin-bottom: 5px
</style>
