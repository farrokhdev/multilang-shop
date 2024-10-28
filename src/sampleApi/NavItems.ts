export const navItems = (t: any) => {
  return [
    {
      id: 1,
      name: t("homepage"),
      url: "/",
    },
    {
      id: 2,
      name: t("shop"),
      url: "/list",
    },
    {
      id: 3,
      name: t("deals"),
      url: "/",
    },
    {
      id: 4,
      name: t("about"),
      url: "/about",
    },
    {
      id: 5,
      name: t("contact"),
      url: "/contact",
    },
  ];
};
