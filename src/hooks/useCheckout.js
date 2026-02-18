export function useCheckout() {
  const checkoutUrl =
    "https://payfast.greenn.com.br/redirect/264654";

  const goToCheckout = () => {
    window.location.href = checkoutUrl;
  };

  return goToCheckout;
}
