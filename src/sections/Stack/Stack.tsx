import type { CSSProperties } from "react";
import type { Skill } from "@/types";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLang } from "@/hooks/useLang";
import { skillGroups } from "@/data/skills";
import styles from "./Stack.module.css";

/*
  El logo se ve en gris y toma el color de la marca en hover.
  Marcas con color muy oscuro (Next.js, Vercel, GitHub...) no se verían
  sobre el fondo negro, así que para esas usamos blanco.
*/
function brandColor(hex: string) {
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16));
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance < 0.25 ? "var(--text)" : `#${hex}`;
}

function initials(name: string) {
  const words = name.split(" ");
  return words.length > 1
    ? words.map((w) => w[0]).join("").slice(0, 2)
    : name.slice(0, 2);
}

function SkillTile({ skill }: { skill: Skill }) {
  const { name, icon } = skill;
  const style = icon
    ? ({ "--brand": brandColor(icon.hex) } as CSSProperties)
    : undefined;

  return (
    <li className={styles.skill} style={style}>
      {icon ? (
        <svg
          className={styles.logo}
          viewBox="0 0 24 24"
          aria-hidden="true">
          <path d={icon.path} />
        </svg>
      ) : (
        <span className={styles.monogram} aria-hidden="true">
          {initials(name)}
        </span>
      )}
      <span className={styles.name}>{name}</span>
    </li>
  );
}

export function Stack() {
  const { lang } = useLang();
  const titleRef = useScrollReveal<HTMLDivElement>();
  const tableRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="skills" className={styles.section}>
      <p className={styles.label}>Stack</p>

      <div ref={titleRef} className="reveal">
        <h2 className={styles.title}>Technical Skills</h2>
      </div>

      <div ref={tableRef} className={`${styles.table} reveal delay-1`}>
        {skillGroups.map((group) => (
          <div key={group.id} className={styles.row}>
            <h3 className={styles.groupLabel}>{group.label[lang]}</h3>
            <ul className={styles.skills}>
              {group.skills.map((skill) => (
                <SkillTile key={skill.name} skill={skill} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
