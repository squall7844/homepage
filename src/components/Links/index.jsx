import classes from "src/components/Links/Links.module.css";

const ITEMS = [
  {
    href: "#",
    title: "テスト１ →",
    description: "ここに説明文１",
  },
  {
    href: "##",
    title: "テスト２ →",
    description: "ここに説明分２",
  },
  {
    href: "###",
    title: "テスト３ →",
    description: "ここに説明文３",
  },
  {
    href: "####",
    title: "テスト４ →",
    description: "ここに説明分４",
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
