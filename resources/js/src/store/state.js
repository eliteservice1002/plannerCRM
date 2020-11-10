/*=========================================================================================
  File Name: state.js
  Description: Vuex Store - state
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import navbarSearchAndPinList from "@/layouts/components/navbar/navbarSearchAndPinList"
import themeConfig from "@/../themeConfig.js"
import colors from "@/../themeConfig.js"


// /////////////////////////////////////////////
// Variables
// /////////////////////////////////////////////

const userDefaults = {
  uid         : 0,          // From Auth
  displayName : "John Doe", // From Auth
  about       : "Dessert chocolate cake lemon drops jujubes. Biscuit cupcake ice cream bear claw brownie brownie marshmallow.",
  photoURL    : require("@assets/images/portrait/small/avatar-s-11.jpg"), // From Auth
  status      : "online",
  userRole    : "admin"
}

// /////////////////////////////////////////////
// State
// /////////////////////////////////////////////

const state = {
    UserList                : {},
    AppActiveUser           : userDefaults,
    bodyOverlay             : false,
    isVerticalNavMenuActive : true,
    mainLayoutType          : themeConfig.mainLayoutType || "vertical",
    navbarSearchAndPinList  : navbarSearchAndPinList,
    reduceButton            : themeConfig.sidebarCollapsed,
    verticalNavMenuWidth    : "default",
    verticalNavMenuItemsMin : false,
    scrollY                 : 0,
    starredPages            : navbarSearchAndPinList["pages"].data.filter((page) => page.is_bookmarked),
    theme                   : themeConfig.theme || "light",
    themePrimaryColor       : colors.primary,

    // Can be used to get current window with
    // Note: Above breakpoint state is for internal use of sidebar & navbar component
    windowWidth: null,

    registerFlag: false,
    initialSelectData: {
        jobTitle: [
            {label: 'Sócio(a) / CEO / Proprietário(a)', value: 1},
            {label: 'Diretor(a) de Vendas', value: 2},
            {label: 'Diretor(a) de Marketing', value: 3},
            {label: 'Diretor(a) Outras Áreas', value: 4},
            {label: 'Gerente de Marketing', value: 5},
            {label: 'Gerente de Vendas', value: 6},
            {label: 'Coordenador(a)/Supervisor(a) de Marketing', value: 7},
            {label: 'Coordenador(a)/Supervisor(a) de Vendas', value: 8},
            {label: 'Analista/Assistente de Marketing', value: 9},
            {label: 'Analista/Assistente de Vendas', value: 10},
            {label: 'Vendedor(a) / Executivo(a) de Contas', value: 11},
            {label: 'Estudante', value: 12},
            {label: 'Outros Cargos', value: 13},
        ],
        company: [
            {label: 'Software e Cloud', value: 1},
            {label: 'Agronegócio', value: 2},
            {label: 'Consultorias e Treinamentos', value: 3},
            {label: 'Ecommerce', value: 4},
            {label: 'Educação e Ensino', value: 5},
            {label: 'Engenharia e Indústria Geral', value: 6},
            {label: 'Eventos', value: 7},
            {label: 'Financeiro/Jurídico ou Serviços Relacionados', value: 8},
            {label: 'Governo e Órgãos Públicos', value: 9},
            {label: 'Hardware e Eletrônicos', value: 10},
            {label: 'Imobiliárias', value: 11},
            {label: 'Mídia e Comunicação', value: 12},
            {label: 'ONGs', value: 13},
            {label: 'Saúde e Estética', value: 14},
            {label: 'Serviços em Geral', value: 15},
            {label: 'Serviços em RH e Coaching', value: 16},
            {label: 'Agência de Marketing e Publicidade', value: 17},
            {label: 'Telecomunicações', value: 18},
            {label: 'Turismo e Lazer', value: 19},
            {label: 'Varejo', value: 20},
        ],
        numberPeople: [
            {label: '1', value: 1},
            {label: '2-3', value: 2},
            {label: '4-10', value: 3},
            {label: '11-50', value: 4},
            {label: '51-200', value: 5},
            {label: 'Mais de 200', value: 6},
        ],
        originStatus: [
            {label: 'Site', value: 1},
            {label: 'Blog', value: 2},
            {label: 'Landing Page', value: 3},
            {label: 'Instagram', value: 4},
        ],
        probabilityStatus: [
            {label: 'Alta', value: 1},
            {label: 'Média', value: 2},
            {label: 'Baixa', value: 3},
        ],
        stageStatus: [
            {label: 'Em Aberto', value: 1},
            {label: 'Proposta', value: 2},
            {label: 'Acompanhar', value: 3},
            {label: 'Fechamento', value: 4},
        ],
    }
}

export default state
