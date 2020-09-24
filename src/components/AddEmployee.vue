<template>
  <transition name='fade'>
    <div class='newEmployeeWrapper' v-if='open'>
      <button class='btn-close' @click='close'> <span class='cross'></span> </button>
      <h3 class='form__title'>Dodaj nowego pracownika:</h3>
      <form class='employee__form' id='addNewEmployeeForm' @submit.prevent="addNewEmployee">
        <label for='imie'>
        Imię
        </label>
        <input type='text' name='imie' id='imie' required v-model="employee.imie">
        <label for='nazwisko'>
          Nazwisko
        </label>
        <input type='text' name='nazwisko' id='nazwisko' required v-model="employee.nazwisko">
        <label for='dzial'>
          Dział
        </label>
        <input type='text' name='dzial' id='dzial' required v-model="employee.dzial">
        <label for='wynagrodzenieKwota'>
          Wynagrodzenie Kwota
        </label>
        <input type='number' name='wynagrodzenieKwota' id='wynagrodzenieKwota' min='0' v-model="employee.wynagrodzenieKwota" required>
        <label for='wynagrodzenieWaluta'>
          Wynagrodzenie Waluta
        </label>
        <input type='text' name='wynagrodzenieWaluta' id='wynagrodzenieWaluta' min='0' v-model="employee.wynagrodzenieWaluta" required>
        <button class='add__empolyee btn' type='submit'>Dodaj</button>
      </form>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      employee: {
        id: Math.floor(Math.random() * 10000),
        imie: null,
        nazwisko: null,
        dzial: null,
        wynagrodzenieKwota: null,
        wynagrodzenieWaluta: null,
      },
    };
  },
  methods: {
    addNewEmployee() {
      this.$emit('add:employee', this.employee);
      this.employee = {
        id: Math.floor(Math.random() * 1000),
        imie: null,
        nazwisko: null,
        dzial: null,
        wynagrodzenieKwota: null,
        wynagrodzenieWaluta: null,
      };
    },
    close() {
      this.$emit('window:new-employee', false);
    },
  },
};
</script>

<style lang='sass' scoped>
.newEmployeeWrapper
  position: absolute
  left: 50%;
  transform: translateX(-50%);
  width: 300px
  background-color: #E5E5E5
  padding: 2rem
  box-shadow: 0 0 15px 2px rgba(silver, .5)
  border-radius: 5px
  .employee__form
    display: flex
    flex-direction: column
    input
      margin-bottom: 10px
    label
      margin-bottom: 5px
  .form__title
    font-weight: 600
    font-size: 16px
    margin-bottom: 40px
  .btn-close
    height: 30px
    width: 30px
    position: absolute
    right: 8px
    top: 10px
    padding: 0
    border: none
    background: none
    cursor: pointer
    .cross
      display: block
      position: relative
      width: 30px
      height: 30px
      opacity: .4
      &::before, &::after
        content: ''
        height: 2px
        width: 20px
        background-color: black
        position: absolute
        top: 14px
        left: 4px
      &::before
        transform: rotate(45deg)
      &::after
        transform: rotate(-45deg)
      &:hover
        opacity: 1
  .btn
    margin-top: 30px
    align-self: flex-end
    padding: .5rem 1rem
    cursor: pointer

.fade-enter-active, .fade-leave-active
  transition: all .5s


.fade-enter, .fade-leave-to
  opacity: 0
  transform: translateX(-200%)
</style>
