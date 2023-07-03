import classes from "src/components/Links/Links.module.css";

const ITEMS = [
  {
    href: "/",
    title: "募集要項",
    description: "→",
  },
  {
    href: "/",
    title: "福利厚生",
    description: "→",
  },
  {
    href: "/",
    title: "求める人財像",
    description: "→",
  },
  {
    href: "/",
    title: "選考の流れ",
    description: "→",
  },
];

export function Links() {
  return (
    <div className={classes.grid}>
      {ITEMS.map((item) => {
        return (
          <a key={item.href} href={item.href} className={classes.card}>
            <h3 className={classes.title}>{item.title}</h3>
            <p className={classes.description}>{item.description}</p>
          </a>
        );
      })}
    </div>
  );
}
