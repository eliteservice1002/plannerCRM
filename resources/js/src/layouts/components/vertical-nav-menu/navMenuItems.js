/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [
  {
    url: "/",
    name: "Home",
    slug: "home",
    icon: "HomeIcon",
  },
  {
    url: "/regdata",
    name: "Cadastro",
    slug: "regdata",
    icon: "EditIcon",
  },
  {
    url: "/strategy",
    name: "Estratégia",
    slug: "strategy",
    icon: "SunriseIcon",
  },
  {
    url: "/import",
    name: "Importação",
    slug: "import",
    icon: "DatabaseIcon",
  },
  {
    url: "/operator",
    name: "Operador",
    slug: "operator",
    icon: "UserCheckIcon",
  },
  {
    url: "/rutine",
    name: "Rotinas",
    slug: "rutine",
    icon: "ClockIcon",
  },
  {
    url: "/quality",
    name: "Qualidade",
    slug: "quality",
    icon: "AwardIcon",
  },
  {
    url: "/permission",
    name: "Permissões",
    slug: "permission",
    icon: "ShieldIcon",
  },
  {
    name: "PowerBi",
    slug: "powerbi",
    icon: "BarChartIcon",
    submenu: [
      {
        url: '/powerbi?id=1',
        name: "Cobrança",
        slug: "Cobrança",
      },
      {
        url: null,
        name: "Juridico",
        slug: "Juridico",
      },
      {
        url: '/powerbi?id=3',
        name: "Vivo",
        slug: "Vivo",
      },
    ]
  },
]
