<template>
  <nav
    class="bg-tertiary-500 pl-6 flex items-center space-x-3 justify-between w-full"
  >
    <span class="flex items-center justify-start space-x-6 py-2">
      <img
        src="~@/static/imgs/icons/logo.svg"
        alt="Logo"
        class="w-[50px] h-[50px] cursor-pointer"
      />
      <div
        class="border-2 border-white rounded-[10px] py-[10px] pl-4 w-72 text-white"
      >
        <p class="font-bold text-base">Surreal São Paulo</p>
        <p class="font-normal text-xs">VTEX</p>
      </div>
    </span>
    <div class="flex space-x-3 items-center">
      <img
        src="~@/static/imgs/icons/icone-bell.svg"
        alt="Sino"
        class="h-8 w-8 cursor-pointer"
      />
      <div
        class="flex space-x-6 items-center border-l-2 border-l-white border-opacity-20 px-5"
      >
        <p class="font-bold text-white">Olá, Joaquim</p>
        <img
          class="w-[54px] h-[54px] rounded-full bg-white bg-opacity-40 cursor-pointer"
          src="~@/static/imgs/icons/usuario.svg"
          alt="Avatar do usuário"
        />
      </div>
    </div>
  </nav>
</template>
