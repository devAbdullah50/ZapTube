import Image from "next/image";

export default function Home() {
  return (
    <>
      <section>
        <div className="left flex">
          <ul className="w-1/3 ">
              <li>Home</li>
              <li>Subscription</li>
              <li>ForYou</li>
              <li>Shorts</li>
          </ul>
        </div>
        <div className="right"></div>
      </section>
    </>
  );
}
