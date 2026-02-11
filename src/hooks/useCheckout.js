export function useCheckout() {
  const checkoutUrl =
    "https://payfast.greenn.com.br/redirect/251032";

  const goToCheckout = () => {
    window.location.href = checkoutUrl;
  };

  return goToCheckout;
}
