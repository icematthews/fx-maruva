import Link from "next/link";

export default function CategoryLabel({ children }) {
  const colorKey = {
    EURJPY: "yellow",
    GBPCAD: "blue",
    GBPUSD: "green",
    AUDNZD: "purple",
    AUDUSD: "red",
    GBPAUD: "darkblue",
    USDCHF: "brown",
    USDJPY: "mocha",
    NZDCAD: "plum",
    NZDJPY: "palelilac",
    CADCHF: "seashell",
  };

  return (
    <div
      className={`px-2 py-1 bg-${colorKey[children]}-600 text-gray-100 font-bold rounded`}
    >
      <Link href={`/blog/category/${children.toLowerCase()}`}>{children}</Link>
    </div>
  );
}
