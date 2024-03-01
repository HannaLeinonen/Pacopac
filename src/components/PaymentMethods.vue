<template>
  <div class="container">
    <label class="payments">
      Card
      <input type="checkbox" />
      <span class="checkmark"></span>
    </label>
    <label class="payments">
      Swish
      <input type="checkbox" />
      <span class="checkmark"></span>
    </label>
    <label class="payments">
      Klarna
      <input type="checkbox" />
      <span class="checkmark"></span>
    </label>
  </div>
</template>

<style scoped>
.payments {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.checkmark {
    position: absolute;
  top: 0;
  left: 0;
    background-color: var(--peach);
    height: 20px;
    width: 20px;
}
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
</style>
