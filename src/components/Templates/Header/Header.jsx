import React from "react";

export default function Header() {
  return (
    <div className="headerimg2 dark:headerimg h-[100%] flex flex-col justify-center items-start text-white px-10">
      <div className="space-y-6 max-w-[500px] bg-white/40 shadow-2xl backdrop-blur-xl rounded-3xl p-8 text-black">
        <h3 className="text-4xl">بهترین و جامع ترین مقالات</h3>
        <p className="text-lg">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است.
        </p>
      </div>
    </div>
  );
}
