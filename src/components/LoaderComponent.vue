<template>
  <div class="absolute inset-0 flex justify-center items-center">
    <div class="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<style scoped>
.lds-ring {
  width: 100px;
  height: 100px;
  position: relative;
  margin: auto;
}

.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 100px; /* Adjust based on the size of your spinner */
  height: 100px; /* Adjust based on the size of your spinner */
  margin: 8px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: black transparent transparent transparent;
}

.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}

.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}

.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
