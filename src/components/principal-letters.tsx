import { Button } from "./ui/button";

export default function ContactFooter() {
  const handleEmailClick = () => {
    window.open(
      "mailto:jhoinermartinez243@gmail.com?subject=Consulta&body=Hola, tengo una pregunta.",
      "_blank"
    );
  };

  return (
    <div>
      <section className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">¿Interesado en trabajar juntos?</h1>
        <Button
          onClick={handleEmailClick}
          className="mt-10 hover:bg-pink-200/100 bg-white/90 text-black font-semibold text-[20px] p-3"
          variant="secondary"
        >
          Email
        </Button>
      </section>
      <footer className="flex justify-center items-center mb-5 text-white/20">
        © 2025 Jhoiner Martinez. Montería - Colombia.
      </footer>
    </div>
  );
}
