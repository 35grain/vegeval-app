<template>
  <div class="navbar bg-base-100/60 backdrop-blur-md border-b border-b-neutral-800 sticky top-0">
    <div class="flex-1">
      <NuxtLink to="/">
        <a class="btn btn-ghost normal-case text-xl">Vegeval</a>
      </NuxtLink>
    </div>
    <div class="flex-none">
      <NuxtLink to="/login">
        <button class="btn btn-primary">Login</button>
      </NuxtLink>
    </div>
  </div>
</template>