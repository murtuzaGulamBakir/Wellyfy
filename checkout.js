$(document).ready(function () {
  $("#checkout-form").validate({
    rules: {
      firstName: {
        required: true,
        minlength: 4,
      },
      lastName: {
        required: true,
        minlength: 4,
      },
      email: {
        required: true,
        email: true,
      },
      address: {
        required: true,
        minlength: 25,
      },

      country: {
        required: true,
      },
      state: {
        required: true,
      },
      zip: {
        required: true,
        number: true,
        minlength: 6,
        maxlength: 6,
      },
      ccName: {
        required: true,
        minlength: 9,
      },
      creditcardNumber: {
        required: true,
        number: true,
        minlength: 16,
      },
      ccExpiration: {
        required: true,
        number: true,
        minlength: 5,
        maxlength: 5,
      },
      ccCvv: {
        required: true,
        number: true,
        minlength: 3,
        maxlength: 3,
      },
    },

    messages: {
      firstName: {
        minlength: "First Name should be at least 4 characters",
      },
      lastName: {
        minlength: "Last Name should be at least 4 characters",
      },
      email: {
        email: "Email should be in the format: abc@domain.tld",
      },
      address: {
        minlength: "Should be 25 characters Atleast",
      },
      zip: {
        number: "zip code should be Numeric",
        minlength: "6 characters zip required",
      },
      ccExpiration: {
        number: "Use '06/25' valid format",
        minlength: "Enter in 4 Digit '06/25' format",
      },
      creditcardNumber: {
        number: "CC number is Numeric",
        minlength: "CC number is 16 digit",
      },
      ccCvv: {
        minlength: "CVV is 3 digit e.g '096'",
      },
    },
  });
});
