export const Tabs = ({ tabs, selected, selectTab }) => {
  const classes = {
    active: "inline-block px-4 py-2 text-slate-800 bg-teal-300 border active",
    inactive:
      "inline-block px-4 py-2 border hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",
  };

  return (
    <div className="mb-8 text-sm font-medium text-center">
      <ul className="flex flex-wrap -mb-px">
        {tabs.map((tab, index) => {
          let styles = selected === index ? classes.active : classes.inactive;
          if (index === 0) {
            styles = `${styles} rounded-l-lg`;
          } else if (index === tabs.length - 1) {
            styles = `${styles} rounded-r-lg`;
          }

          return (
            <li key={tab} className="" onClick={() => selectTab(index)}>
              <a href="#" className={styles}>
                {tab}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
