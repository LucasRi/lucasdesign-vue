<script setup></script>

<template>
  <nav>
    <div class="main-menu">
      <RouterLink to="/"
        ><div class="logo"><img src="../assets/logo.svg" alt="logo" /></div
      ></RouterLink>
      <ul class="menu-items">
        <li class="menu-link-1">
          <a><RouterLink to="/">Home</RouterLink></a>
        </li>
        <li class="menu-link-3">
          <a><RouterLink to="/">Services</RouterLink></a>
        </li>
        <li class="menu-link-2">
          <a><RouterLink to="/">Portfolio</RouterLink></a>
        </li>
        <li class="menu-link-4">
          <a><RouterLink to="/contact">Contact</RouterLink></a>
        </li>
      </ul>
      <a class="nav-btn hidden-mobile">Let’s talk</a>
      <img
        class="mobile-menu"
        src="../assets/mobile-menu.svg"
        alt="mobile-menu"
      />
    </div>
  </nav>
</template>

<style scoped></style>
