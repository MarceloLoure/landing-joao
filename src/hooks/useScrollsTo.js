export function useScrollTo(id) {
  return () => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };
}