
const PAYSTACK_PUBLIC_KEY = "pk_live_c032dae1bcba2dc50aba4d8e5bbd79ed13cd1a1d";

function payWithPaystack(bundleName, amount) {
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  if (!email || !phone) {
    alert("Please enter your email and phone number.");
    return;
  }

  let handler = PaystackPop.setup({
    key: PAYSTACK_PUBLIC_KEY,
    email: email,
    amount: amount * 100,
    currency: "GHS",
    metadata: {
      custom_fields: [
        {
          display_name: "Phone Number",
          variable_name: "phone_number",
          value: phone
        },
        {
          display_name: "Bundle",
          variable_name: "bundle_name",
          value: bundleName
        }
      ]
    },
    callback: function(response) {
      alert(
        "Payment successful! Reference: " + response.reference +
        "\nYou can now deliver the data bundle to the customer."
      );
    },
    onClose: function() {
      alert("Transaction was cancelled.");
    }
  });

  handler.openIframe();
}
