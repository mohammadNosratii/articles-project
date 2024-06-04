import { Chip, ScrollShadow, Tab, Tabs } from "@nextui-org/react";
import React, { useState } from "react";

export default function ArticleInfoBox({ data, title, bek, akh, am, av, bej }) {
  const [articleSub, setArticleSub] = useState("ارتباطات");

  const tabs = [{ title: "ارتباطات" }, { title: "نمایه ها" }];

  const articleConectionData = [
    { dataName: bek },
    { dataName: akh },
    { dataName: am },
    { dataName: av },
    { dataName: bej },
  ];

  return (
    <div className="flex flex-col gap-5 text-white">
      <Tabs
        classNames={{
          tabList: ["text-black dark:bg-zinc-800 dark:text-white border-2 dark:border-none"],
          tabContent: ["dark:text-white"],
          cursor: ["bg-gray-300"]
        }}
        aria-label="Dynamic tabs"
        selectedKey={articleSub}
        onSelectionChange={setArticleSub}
      >
        {tabs.map((tab) => (
          <Tab key={tab.title} title={tab.title} />
        ))}
      </Tabs>
      {articleSub === "ارتباطات" ? (
        <div className="border border-black/20 dark:border-zinc-600 dark:bg-zinc-800 rounded-xl p-2 flex items-center gap-3">
          {articleConectionData.map((data, index) => {
            const conectionTitle = data.dataName.data[0]?.term.title;
            return conectionTitle ? (
              <span className="py-2 px-6 rounded-xl cursor-pointer text-zinc-700 bg-gray-300 dark:bg-zinc-700 dark:text-white" key={index}>
                {conectionTitle}
              </span>
            ) : null;
          })}
        </div>
      ) : (
        <div className="text-zinc-800 dark:text-white dark:bg-zinc-800 border border-black/20 dark:border-zinc-600 rounded-xl py-3 px-4 space-y-3">
          {data[0]?.title && data[0]?.text ? (
            <>
              <h3 className="text-2xl">{data[0]?.title}</h3>
              <ScrollShadow
                orientation="vertical"
                className="max-h-[200px]"
              >
                <p>{data[0]?.text}</p>
              </ScrollShadow>
            </>
          ) : (
            <span>اطلاعاتی وجود ندارد</span>
          )}
        </div>
      )}
    </div>
  );
}
