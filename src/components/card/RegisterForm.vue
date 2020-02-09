<template>
	<!-- Access Forbidden Card -->
	<div class="card form-access-forbidden" v-if="!accessForbidden['status']">
		<header class="card-header">
			<div class="card-header-title has-text-white">
				<b-icon icon="exclamation-triangle" size="is-medium"/>
				<span class="is-size-4 card-header-title-text">Access Forbidden!</span>
			</div>
		</header>
		<section class="card-content">
			<b-message type="is-danger">
				<div class="message-body-text">
					{{ accessForbidden['message'] ? accessForbidden['message'] : `Unexpected Error. Check your invite link and try again later!` }}
				</div>
			</b-message>
		</section>
		<footer class="card-footer">
			<b-field>
				<b-button tag="router-link" to="/" label="Main page"
						  icon-left="backspace" type="is-danger"
						  class="register-button"/>
			</b-field>
		</footer>
	</div>

	<!-- Access Allowed Card -->
	<div class="card" v-else>
		<header class="card-header">
			<div class="card-header-title has-text-white">
				<b-icon icon="user-check" size="is-medium"/>
				<span class="is-size-4 card-header-title-text">Register Complete</span>
			</div>
		</header>
		<section class="card-content">
			<!-- Email and UserId fields -->
			<b-field grouped>
				<b-field label="User ID" label-position="on-border" class="userId-field" type="is-success">
					<b-input v-model="userIdField" type="text" placeholder="111" disabled/>
				</b-field>

				<b-field label="Email" label-position="on-border" class="field-group email-field" type="is-success">
					<b-input v-model="emailField" type="email" placeholder="email@example.com" disabled/>
				</b-field>
			</b-field>

			<!-- Firstname & Lastname fields -->
			<b-field grouped style="margin-bottom: 0">
				<b-field label="Firstname" label-position="on-border"
						 :type="{ 'is-danger': firstnameField['isInvalid'], 'is-success': firstnameField['isValid'] }"
						 :message="[
						 	{ 'This firstname is incorrect format': firstnameField['isInvalid'] },
						 	{ 'This firstname must have at least 4 and max 20 characters': firstnameField['isInvalid'] },
						 	{ 'This firstname must have only Latin/Cyrillic characters': firstnameField['isInvalid'] }
						 ]">

					<b-input v-model="firstnameField['value']" type="text" maxlength="20" placeholder="John" expanded
							 @input="validate(firstnameField['value'], 'firstnameField', 'name')"/>
				</b-field>

				<b-field label="Lastname" label-position="on-border"
						 :type="{ 'is-danger': lastnameField['isInvalid'], 'is-success': lastnameField['isValid'] }"
						 :message="[
						 	{ 'This lastname is incorrect format': firstnameField['isInvalid'] },
						 	{ 'This lastname must have at least 4 and max 20 characters': lastnameField['isInvalid'] },
						 	{ 'This lastname must have only Latin/Cyrillic characters': lastnameField['isInvalid'] }
						 ]">

					<b-input v-model="lastnameField['value']" type="text" maxlength="20" placeholder="Doe" expanded
							 @input="validate(lastnameField['value'], 'lastnameField', 'name')"/>
				</b-field>
			</b-field>

			<!-- Gender / Language / Date of Birthday selects -->
			<b-field grouped class="user-info-fields">
				<b-field label="Gender" label-position="on-border"
						 :type="{'is-success': genderSelect['selected'] !== null }">

					<b-select v-model="genderSelect['selected']" placeholder="Select a gender" expanded>
						<option value="male"> Male </option>
						<option value="female"> Female </option>
					</b-select>
				</b-field>

				<b-field label="Language" label-position="on-border"
						 :type="{'is-success': languageSelect['isValid'] }">

					<b-select v-model="languageSelect['selected']" placeholder="Select a language" expanded>
						<option value="en"> English (default)</option>
						<option value="uk"> Українська </option>
						<option value="ru"> Русский </option>
					</b-select>
				</b-field>

				<b-field label="Date of birth" label-position="on-border">
					<b-datepicker v-model="birthdayCalendar['value']" editable placeholder="Type or select a date..."
								  :first-day-of-week="birthdayCalendar['firstDayOfWeek']"
								  icon-pack="far" icon="calendar-alt" icon-prev="arrow-alt-circle-left" icon-next="arrow-alt-circle-right"/>
				</b-field>
			</b-field>

			<!-- Password and Password confirm fields -->
			<b-field grouped>
				<b-field label="Password" label-position="on-border" class="field-group"
						 :type="{ 'is-danger': (secretField['isInvalid'] || secretConfirmField['isCompare']), 'is-success': secretField['isValid'] }"
						 :message="[
						 	{ 'Password must have at least 6 characters': secretField['isInvalid'] },
						 	{ 'Password must have only Latin characters': secretField['isInvalid'] },
						 	{ 'Password must have at least 1 capital character': secretField['isInvalid'] },
						 	{ 'Password must have at least 1 digit character': secretField['isInvalid'] },
						 	{ 'Password & Password Confirm not match!': secretConfirmField['isCompare'] }
						 ]">

					<b-input v-model="secretField['value']"
							 type="password" placeholder="Type your password" maxlength="14"
							 @input="validate(secretField['value'], 'secretField', 'secret')"/>
				</b-field>

				<b-field label="Confirm Password" label-position="on-border" class="field-group"
						 :type="{ 'is-danger': (secretConfirmField['isInvalid'] || secretConfirmField['isCompare']), 'is-success': secretConfirmField['isValid'] }"
						 :message="[
						 		{ 'Password must have at least 6 characters': secretConfirmField['isInvalid'] },
						 		{ 'Password must have only Latin characters': secretConfirmField['isInvalid'] },
						 		{ 'Password must have at least 1 capital character': secretConfirmField['isInvalid'] },
						 		{ 'Password must have at least 1 digit character': secretConfirmField['isInvalid'] },
						 		{ 'Password & Password Confirm not match!': secretConfirmField['isCompare'] }
						 ]">

					<b-input v-model="secretConfirmField['value']"
							 type="password" placeholder="Type password confirm" minlength="6" maxlength="14"
							 @input="comparePasswords(secretConfirmField['value'], 'secretConfirmField', 'secret')"/>
				</b-field>
			</b-field>
		</section>
		<footer class="card-footer">

			<!-- Cancel & Register buttons -->
			<b-field grouped class="register-buttons-fields">
				<b-button tag="router-link" to="/" label="Main page"
						  icon-left="backspace" type="is-primary"
						  class="register-button has-text-danger" outlined inverted/>

				<b-button :disabled="true"
						  :loading="registerButton['loading']" outlined
						  icon-pack="far" icon-left="save" type="is-primary"
						  class="register-button" label="Register"/>
			</b-field>

		</footer>
	</div>
</template>

<script>
    import validator from "../../services/validator";

	export default {
        name: "RegisterForm",
		data() {
			return {
				serviceToken: this.$route.params.token,
				accessForbidden: {
					status: true,
					message: null
				},
				emailField: null,
				userIdField: null,
				firstnameField: {
					isValid: false,
					isInvalid: false,
					value: null
				},
				lastnameField: {
					isValid: false,
					isInvalid: false,
					value: null
				},
				genderSelect: {
					selected: null
				},
				languageSelect: {
					selected: 'en',
					isValid: true
				},
				birthdayCalendar: {
					value: null,
					firstDayOfWeek: 1
				},
				secretField: {
					isValid: false,
					isInvalid: false,
					value: null
				},
				secretConfirmField: {
					isValid: false,
					isInvalid: false,
					isCompare: false,
					value: null
				},
				registerButton: {
					loading: false
				}
			}
		},
		methods: {
        	formAccessAllow() {
				this.accessForbidden['status'] = false;
				this.accessForbidden['message'] = null;
			},
			formAccessForbidden(msg) {
				this.accessForbidden['status'] = true;
				this.accessForbidden['message'] = msg;
			},
			validate(value, field, type) {
				return validator(value, field, type) ? this.setValidField(field) : this.setInvalidField(field)
			},
			setValidField(field) {
				this[field].isValid = true;
				this[field].isInvalid = false;
			},
			setInvalidField(field) {
				this[field].isInvalid = true;
				this[field].isValid = false;
			},
			comparePasswords(value, field, type) {
				//validate passwordConfirm field
				this.validate(value, field, type);
				//compare password and password confirm fields
				this.secretConfirmField['isCompare'] = value !== this.secretField['value'];
			},
			showCalendar(v) {
				console.log(v.toLocaleDateString())
			}
		}
    }
</script>

<style scoped>
	/* Form Access Forbidden */
	.form-access-forbidden .card-header {
		background-color: #f14668;
	}
	.form-access-forbidden .card-content {
		padding: 1.5rem;
	}
	.form-access-forbidden .card-footer {
		justify-content: center;
	}
	.message-body-text {
		display: flex;
		justify-content: center;
	}

	/* Form Access Allowed */
	.card {
		width: 600px;
		border-radius: 15px;
		box-shadow: 0 -5px 25px 0 rgba(0, 0, 0, 0.05), 0 5px 25px 0 rgba(0, 0, 0, 0.05);
	}
	.card-header {
		border-top-right-radius: 15px;
		border-top-left-radius: 15px;
	}
	.card-header-title {
		display: flex;
		justify-content: center;
	}
	.card-header-title-text {
		padding-left: 5px;
	}
	.card-content {
		padding: 1.5rem 1.5rem 0 1.5rem;
	}
	.field-group {
		margin-bottom: 1.5rem;
	}
	.field.is-grouped {
		justify-content: space-between;
	}
	.field.user-info-fields.is-grouped > div {
		width: 30%;
	}
	.field.is-grouped > div {
		width: 48%;
	}
	.field.is-grouped > .email-field {
		width: 75%;
	}
	.field.is-grouped > .userId-field {
		width: 20%;
	}
	.register-button-field {
		margin-top: 1.5rem;
	}
	.register-button-field > .control {
		width: 100%;
		text-align: center;
	}
	.register-button {
		cursor: pointer;
	}
	.register-button[disabled] {
		cursor: no-drop;
	}
	.button.is-text {
		text-decoration: none;
	}
	.button.is-text:hover {
		background: #0000000d;
		opacity: .8;
	}
	.card-footer {
		padding: 0.5rem 1rem;
		border-bottom-right-radius: 15px;
		border-bottom-left-radius: 15px;
		justify-content: flex-end;
	}
	@media screen and (max-width: 499px) {
		.card-footer {
			justify-content: center;
		}

		.auth-buttons-fields > .control {
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
	}
	@media screen and (min-width: 500px) {
		.auth-buttons-fields {
			width: 100%;
		}
		.auth-buttons-fields > .control {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			width: 100%;
		}
	}
</style>
