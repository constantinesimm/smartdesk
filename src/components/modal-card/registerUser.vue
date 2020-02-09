<template>
    <div class="modal-card">
		<header class="modal-card-head">
			<div class="modal-card-title has-text-white">
				<b-icon icon="user-plus" size="is-medium"/>
				<span class="is-size-4 modal-card-title-text">Create account</span>
			</div>
		</header>
		<section class="modal-card-body">
			<b-field label="Email" label-position="on-border" class="field-group"
					 :type="{ 'is-danger': emailField['isInvalid'], 'is-success': emailField['isValid'] }"
					 :message="{ 'This email format is incorrect': emailField['isInvalid'] }">

				<b-input v-model="emailField['value']" @input="validate(emailField['value'], 'emailField', 'email')"
						 type="email" placeholder="email@example.com" maxlength="30"/>
			</b-field>
			<hr>
			<b-field class="modal-card-buttons">
				<b-button type="is-white is-outlined has-text-danger" label="Cancel"/>
				<b-button :loading="submitButtonLoading" outlined
						  :disabled="this.emailField.isValid ? false : 'disabled'"
						  type="button is-primary" label="Register"/>
			</b-field>
		</section>
	</div>
</template>

<script>
	import validator from "../../services/validator";

    export default {
        name: "registerUser",
		data() {
        	return {
				emailField: {
					isInvalid: false,
					isValid: false,
					value: null
				},
				submitButtonLoading: false
			}
		},
		methods: {
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
			}
		}
    }
</script>

<style scoped>
	.modal-card {
		max-width: 450px;
		border-radius: 15px;
	}
	.modal-card-head {
		padding: 15px 20px;
		background-color: #2780E3;
	}

	.modal-card-title {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.modal-card-title-text {
		font-weight: 500;
		padding-left: 5px;
	}

	hr {
		margin: 1.5rem 0 1rem 0;
	}
	.modal-card-buttons {
		display: flex;
		justify-content: flex-end;
	}
</style>
