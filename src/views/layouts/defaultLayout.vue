<template>
  <d-container fluid>
    <d-row>

      <d-col class="main-content col" tag="main">

        <!-- Content -->
        <slot/>

      </d-col>

    </d-row>
  </d-container>
</template>

<script>
  export default {
    name: 'default-layout'
  }
</script>
