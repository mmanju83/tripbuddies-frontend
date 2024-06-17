const imageSources = [
  "/img/footer-bg.svg",
  "/img/footer-bg.svg",
  "/img/footer-bg.svg",
  "/img/footer-bg.svg",
  "/img/footer-bg.svg",
  "/img/footer-bg.svg",
];

export default function Paymentcards() {
  return (
    <>
      {imageSources.map((elm, i) => (
        <img key={i} src={elm} alt="image" />
      ))}
    </>
  );
}
