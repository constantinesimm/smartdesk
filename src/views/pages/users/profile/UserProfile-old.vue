<template>
  <d-container fluid class="admin-content-container px-4">
    <d-row>
      <d-col lg="8" class="mx-auto mt-4">
        <d-card class="card-small user-details mb-4">
          <d-card-header class="p-0">

            <!-- User Details - Background -->
            <div class="user-details__bg">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Stars_01_%28MK%29.jpg/911px-Stars_01_%28MK%29.jpg"
                   alt="User Details Background Image">
              <label class="user-details__change-background">
                <i class="fas fa-camera fa-lg"></i> Change Background Image
                <d-input class="d-none" type="file"/>
              </label>
            </div>
            <div class="border-bottom clearfix d-flex justify-content-start ml-3">
              <div class="form-row">
                <div class="col">
                  <h6 class="m-0 form-text text-white">General</h6>
                  <p class="mb-2 form-text text-white-50">Setup your general profile details.</p>
                </div>
              </div>
            </div>
          </d-card-header>

          <d-card-body class="p-0">
            <d-form-row class="mx-4 py-4">
              <d-col lg="8" order-sm="2" order-md="2" order-lg="1">
                <d-form-row>

                  <!-- User ID -->
                  <d-col md="6" class="form-group">
                    <label for="userId">User ID</label>
                    <d-input-group seamless style="min-width: unset">
                      <d-input-group-text slot="prepend">
                        <i class="fas fa-user-tag fa-lg"/>
                      </d-input-group-text>
                      <d-input id="userId" readonly/>
                    </d-input-group>
                  </d-col>

                  <!-- Registered At -->
                  <d-col md="6" class="form-group">
                    <label for="registerAt">Registered At</label>
                    <d-input-group seamless>
                      <d-input-group-text slot="prepend">
                        <i class="far fa-calendar-alt fa-lg"/>
                      </d-input-group-text>
                      <d-input id="registerAt" readonly/>
                    </d-input-group>
                  </d-col>

                  <!-- Email -->
                  <d-col md="6" class="form-group">
                    <label for="emailAddress">Email</label>

                    <d-input-group seamless>
                      <d-input-group-text slot="prepend">
                        <i class="far fa-envelope fa-lg"/>
                      </d-input-group-text>
                      <d-input id="emailAddress" readonly/>
                    </d-input-group>
                  </d-col>

                  <!-- Secondary Email -->
                  <d-col md="6" class="form-group">
                    <label for="secondaryEmail">Secondary Email</label>

                    <d-input-group seamless>
                      <d-input-group-text slot="prepend">
                        <i class="fas fa-envelope fa-lg"/>
                      </d-input-group-text>
                      <d-input id="secondaryEmail" readonly/>
                    </d-input-group>
                  </d-col>

                  <!-- Firstname -->
                  <d-col md="6" class="form-group">
                    <label for="firstName">Firstname</label>
                    <d-input type="text" id="firstName" value="Sierra" />
                  </d-col>

                  <!-- Lastname -->
                  <d-col md="6" class="form-group">
                    <label for="lastName">Lastname</label>
                    <d-input type="text" id="lastName" value="Brooks" />
                  </d-col>

                  <!-- Language -->
                  <d-col md="4" class="form-group">
                    <label for="language">Language</label>
                    <d-select id="language">
                      <option disabled>Select language</option>
                      <option value="en">English</option>
                      <option value="uk">Українська</option>
                      <option value="ru">Русский</option>
                    </d-select>
                  </d-col>

                  <!-- Gender -->
                  <d-col md="4" class="form-group">

                    <label for="gender">Gender</label>

                    <d-input-group seamless>
                      <d-input-group-text slot="prepend">
                        <i class="far fa-envelope fa-lg"/>
                      </d-input-group-text>
                      <d-input id="gender" readonly/>
                    </d-input-group>

                  </d-col>

                  <!-- Birthday -->
                  <d-col md="4" class="form-group">
                    <label for="birthday">Birthday</label>

                    <d-datepicker id="birthday" :open-date="new Date(2000, 0, 0)" initial-view="year" format="dd/MM/yyyy"  :monday-first="true" :full-month-name="true" placeholder="Select date" typeable/>

                    <d-form-invalid-feedback >
                      <span>Date of birthday is required!<br></span>
                      <span> Date of birthday is invalid:<br> - min - 1965 / max - 2002;</span>
                    </d-form-invalid-feedback>
                  </d-col>
                </d-form-row>
              </d-col>

              <!-- User Profile Picture -->
              <d-col lg="4" order-sm="1" order-md="1" order-lg="2">
                <label for="userProfilePicture" class="text-center w-100 mb-4">Profile Picture</label>
                <div class="user-details__avatar m-auto">
                  <img src="https://static.intercomassets.com/avatars/365101/square_128/11088406_443030679193397_2927195805052797483_n-1462489695.jpg?1462489695" alt="User Avatar">
                  <label class="user-details__avatar__change">
                    <i class="fas fa-camera-retro"/>
                    <d-input type="file" id="userProfilePicture" class="d-none" />
                  </label>
                </div>
                <d-button size="sm" class="btn-white d-table mx-auto mt-4"><i class="material-icons">&#xE2C3;</i> Upload Image</d-button>
              </d-col>
            </d-form-row>
            <d-form class="py-4">


            </d-form>


          </d-card-body>

          <!-- Save Changes -->
          <d-card-footer class="border-top">
            <d-button size="sm" class="btn-accent ml-auto d-table mr-3">
              Save Changes
            </d-button>
          </d-card-footer>
        </d-card>
      </d-col>
    </d-row>
  </d-container>
</template>

<script>
  export default {
    name: "UserProfile",
    data() {
      return {
        tabNavigate: this.$route.query['show']
      }
    },
    created() {
      console.log(this.tabNavigate)
    }
  }
</script>

<style scoped>
  .p-0.card-header {
    overflow: hidden;
  }

  .user-details__bg {
    position: relative;
    width: 100%;
    max-height: 150px;
  }

  .user-details__bg img {
    width: 100%;
  }

  .user-details__bg label {
    visibility: hidden;
  }

  .user-details__bg:hover label {
    visibility: visible;
  }

  .user-details__bg .user-details__change-background {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
    opacity: 1;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    background-color: hsla(0,0%,100%,.06);
    border: 1px dashed rgba(233,236,239,.3);
    padding: .4375rem .9375rem;
    color: #fff;
    cursor: pointer;
    border-radius: .375rem;
    font-size: .75rem;
    will-change: opacity;
    -webkit-transition: opacity .25s ease-in-out,-webkit-transform .25s ease-in-out;
    transition: opacity .25s ease-in-out,-webkit-transform .25s ease-in-out;
    transition: opacity .25s ease-in-out,transform .25s ease-in-out;
    transition: opacity .25s ease-in-out,transform .25s ease-in-out,-webkit-transform .25s ease-in-out;
  }
  .user-details__bg:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

  }

  .user-details__avatar {
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    max-width: 7.5rem;
    -webkit-box-shadow: 0 2px 0 rgba(90,97,105,.11), 0 4px 8px rgba(90,97,105,.12), 0 10px 10px rgba(90,97,105,.06), 0 7px 70px rgba(90,97,105,.1);
    box-shadow: 0 2px 0 rgba(90,97,105,.11), 0 4px 8px rgba(90,97,105,.12), 0 10px 10px rgba(90,97,105,.06), 0 7px 70px rgba(90,97,105,.1);
  }
  .user-details__avatar img {
    margin-left: -5px;
  }
  .user-details__avatar__change {
    margin: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    position: absolute;
    text-align: center;
    border-radius: 50%;
    font-size: 1.875rem;
    background: hsla(0,0%,100%,.95);
    -webkit-transition: all .25s cubic-bezier(.27,.01,.38,1.06);
    transition: all .25s cubic-bezier(.27,.01,.38,1.06);
  }

  .input-group.input-group-seamless > .form-control:not(:first-child) {
    padding-left: 40px!important;
  }
</style>
