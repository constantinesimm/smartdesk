<template>
  <d-container fluid class="admin-content-container px-4">
    <!-- Page Header -->
    <d-row no-gutters class="page-header py-4">
      <d-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0">
        <span class="text-uppercase page-subtitle">Overview</span>
        <h3 class="page-title">User Profile Setting</h3>
      </d-col>
    </d-row>

    <!-- Page Content -->
    <d-row>
      <d-col lg="4">
        <user-profile-contact/>
      </d-col>
      <d-col lg="8">
        <user-profile-details/>
      </d-col>
    </d-row>
  </d-container>
</template>

<script>
  import UserProfileContact from "./UserProfileContact";
  import UserProfileDetails from "./UserProfileDetails";

  export default {
    name: "UserProfile",
    components: {
      UserProfileContact, UserProfileDetails
    }
  }
</script>

<style scoped>

</style>
