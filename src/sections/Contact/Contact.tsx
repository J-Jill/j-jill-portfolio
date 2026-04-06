import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLang } from "@/hooks/useLang";
import styles from "./Contact.module.css";

const INTERESTS = [
  "Frontend Dev",
  "React Specialist",
  "UI/UX + Code",
  "Full-time",
  "Contract",
];

export function Contact() {
  const { t } = useLang();
  const titleRef = useScrollReveal<HTMLDivElement>();
  const formRef = useScrollReveal<HTMLFormElement>();

  // Estado del formulario — objeto único en lugar de 3 useState separados
  const [fields, setFields] = useState({ name: "", email: "", message: "" });
  const [interests, setInterests] = useState<string[]>([]);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // [e.target.name] = computed property name — actualiza el campo correcto dinámicamente
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const toggleInterest = (interest: string) => {
    setInterests(
      (prev) =>
        prev.includes(interest)
          ? prev.filter((i) => i !== interest) // quitar si ya está
          : [...prev, interest], // añadir si no está
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, interests }),
      });
    } catch (error) {
      console.error("Error sending message:", error);
    }

    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className={styles.section}>
      <p className={styles.tag}>{t("Contact", "Contacto")}</p>

      <div ref={titleRef} className={`${styles.titleWrap} reveal`}>
        <h2 className={styles.title}>
          {t("Let's ", "Hablemos ")}
          <em className={styles.titleEm}>{t("connect", "juntos")}</em>
        </h2>
      </div>

      <form
        ref={formRef}
        className={`${styles.form} reveal delay-1`}
        onSubmit={handleSubmit}
        noValidate>
        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="name" className={styles.label}>
              {t("Name", "Nombre")}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className={styles.input}
              placeholder={t("Your name", "Tu nombre")}
              value={fields.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="email" className={styles.label}>
              E-Mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className={styles.input}
              placeholder="your@email.com"
              value={fields.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={`${styles.row} ${styles.full}`}>
          <div className={styles.field}>
            <p className={styles.label}>{t("I'm looking for", "Busco")}</p>
            <div className={styles.pills}>
              {INTERESTS.map((interest) => (
                <button
                  key={interest}
                  type="button"
                  className={`${styles.pill} ${interests.includes(interest) ? styles.pillActive : ""}`}
                  onClick={() => toggleInterest(interest)}
                  aria-pressed={interests.includes(interest)}>
                  {interest}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={`${styles.row} ${styles.full}`}>
          <div className={styles.field}>
            <label htmlFor="message" className={styles.label}>
              {t("Message", "Mensaje")}
            </label>
            <input
              id="message"
              name="message"
              type="text"
              className={styles.input}
              placeholder={t(
                "Tell me about the role...",
                "Cuéntame sobre el rol...",
              )}
              value={fields.message}
              onChange={handleChange}
            />
          </div>
        </div>

        <button
          type="submit"
          className={`${styles.submit} ${sent ? styles.submitSent : ""}`}>
          {sent
            ? t("Message sent ✓", "Mensaje enviado ✓")
            : t("Send message", "Enviar mensaje")}
        </button>
      </form>
    </section>
  );
}
