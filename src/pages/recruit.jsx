import { Response } from "src/components/Response";
import { Header } from "src/components/Header";

const ITEMS = [
  {
    title: "業務内容:",
    description: "内容",
  },
  {
    title: "給与:",
    description: "内容",
  },
  {
    title: "休暇:",
    description: "内容",
  },
  {
    title: "賞与:",
    description: "内容",
  },
  {
    title: "就業時間:",
    description: "内容",
  },
  {
    title: "勤務地:",
    description: "内容",
  },
];

export default function Recruit() {
  return (
    <div>
      <Header />
      <Response />
      <div className="flex justify-center text-center">
        <div class="mt-5 border-b-2 text-4xl">募集要項</div>
      </div>
      <div>
        {ITEMS.map((item) => {
          return (
            <div className="mt-5 flex justify-center" key={item.title}>
              <h3 className="mr-5 border-b-2">{item.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
