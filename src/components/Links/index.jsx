import classes from "src/components/Links/Links.module.css";

const ITEMS = [
  {
    href: "https://chat.openai.com/",
    title: "テスト１ →",
    description: "チャットGDP",
  },
  {
    href: "https://vercel.com/dashboard",
    title: "テスト２ →",
    description: "vercel",
  },
  {
    href: "https://github.com/",
    title: "テスト３ →",
    description: "github",
  },
  {
    href: "/about",
    title: "テスト４ →",
    description: "about",
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
