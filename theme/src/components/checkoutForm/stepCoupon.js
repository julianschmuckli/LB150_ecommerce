import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { themeSettings, text } from '../../lib/settings';
import InputField from './inputField';
import TextareaField from './textareaField';

const validateRequired = value =>
	value && value.length > 0 ? undefined : text.required;

const getFieldLabel = field => {
	const label =
		field.label && field.label.length > 0
			? field.label
			: getFieldLabelByKey(field.key);
	return field.required === true ? label : `${label} (${text.optional})`;
};

function saveCoupon() {
	var value = document.getElementById('coupon.code').value;

	if (value == 'Test123') {
		alert('Coupon Code valid');
		document.getElementById('coupon.code').disabled = 'disabled';
	}
}

class CheckoutStepCoupon extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			handleSubmit,
			pristine,
			invalid,
			valid,
			reset,
			submitting,
			processingCheckout,
			initialValues,
			shippingMethod,
			checkoutFields,
			settings,
			inputClassName,
			buttonClassName,
			editButtonClassName,
			title,
			show,
			isReadOnly,
			showPaymentForm,
			onEdit
		} = this.props;

		if (!show) {
			return (
				<div className="checkout-step">
					<h1>
						<span>3</span>
						{title}
					</h1>
					<Field
						className={inputClassName + ' coupon-code'}
						name="coupon.code"
						id="coupon.code"
						component={InputField}
						type="text"
						label="Coupon Code"
					/>
					<button
						onClick={saveCoupon}
						disabled={submitting || processingCheckout || invalid}
						className={`${buttonClassName}`}
					>
						Verify
					</button>
				</div>
			);
		}
	}
}

export default reduxForm({
	form: 'CheckoutStepCoupon',
	enableReinitialize: true,
	keepDirtyOnReinitialize: false
})(CheckoutStepCoupon);
