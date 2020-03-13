<template>
  <d-card class="card-small user-details mb-4">

    <!-- Card Header -->
    <d-card-header class="p-0">
      <div class="user-details__bg">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Stars_01_%28MK%29.jpg/911px-Stars_01_%28MK%29.jpg" alt="">
      </div>
    </d-card-header>

    <d-card-body class="p-0">

      <!-- User Avatar -->
      <div class="user-details__avatar mx-auto">
        <img src="https://static.intercomassets.com/avatars/365101/square_128/11088406_443030679193397_2927195805052797483_n-1462489695.jpg?1462489695" alt="">
      </div>

      <!-- User Name -->
      <h4 class="text-center m-0 mt-2">Constantine Simm</h4>

      <!-- User Bio -->
      <p class="text-center text-light m-0 mb-2">I'm a design focused engineer.</p>

      <!-- User Social -->
      <ul class="user-details__social user-details__social--primary d-table mx-auto mb-4">
        <li  class="mx-1"><a href=""><i class="fab fa-facebook-f"></i></a></li>
        <li v-if="" class="mx-1"><a href=""><i class="fab fa-twitter"></i></a></li>
        <li v-if="" class="mx-1"><a href=""><i class="fab fa-github"></i></a></li>
        <li v-if="" class="mx-1"><a href=""><i class="fab fa-slack"></i></a></li>
      </ul>

      <!-- User Data -->
      <div class="user-details__user-data border-top border-bottom p-4">
        <div class="row mb-3">
          <div class="col w-50">
            <span>Email</span>
            <span></span>
          </div>
          <div class="col w-50">
            <span>Location</span>
            <span></span>
          </div>
        </div>
        <div class="row">
          <div class="col w-50">
            <span>Phone</span>
            <span></span>
          </div>
          <div class="col w-50">
            <span>Account Number</span>
            <span></span>
          </div>
        </div>
      </div>

    </d-card-body>
  </d-card>
</template>

<script>
    export default {
        name: "UserProfileContact"
    }
</script>

<style scoped>
  .user-details .card-header {
    overflow: hidden;
  }
  .user-details .card-body {
    margin-top: -3.125rem;
    z-index: 1;
  }

  .user-details__bg {
    width: 100%;
    position: relative;
    max-height: 150px;
  }
  .user-details__bg img {
    width: 100%;
  }

  .user-details__bg:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(90,97,105,.3);
  }

  .user-details__avatar {
    border-radius: 50%;
    overflow: hidden;
    max-width: 6.25rem;
    -webkit-box-shadow: 0 2px 0 rgba(90,97,105,.11), 0 4px 8px rgba(90,97,105,.12), 0 10px 10px rgba(90,97,105,.06), 0 7px 70px rgba(90,97,105,.1);
    box-shadow: 0 2px 0 rgba(90,97,105,.11), 0 4px 8px rgba(90,97,105,.12), 0 10px 10px rgba(90,97,105,.06), 0 7px 70px rgba(90,97,105,.1);
  }
  .user-details__avatar img {
    width: 100px;
    height: 100px;
  }

  .user-details__social {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .user-details__social li {
    display: inline-block;
  }

  .user-details__social a {
    display: inline-block;
    border-radius: 50%;
    text-align: center;
    width: 1.875rem;
    height: 1.875rem;
    line-height: 1.875rem;
    background: #e9ecef;
    color: #818ea3;
  }
</style>
