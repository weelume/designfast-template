import type {SiteTemplate} from '../../types'
export const designfastTemplate:SiteTemplate={...{
  "id": "designfast",
  "gitUrl": "https://github.com/weelume/designfast-template",
  "name": "Designfast · 订阅式设计机构",
  "localizedNames": {
    "en": "Designfast · Subscription design agency"
  },
  "sceneId": "corporate-site",
  "listed": false,
  "tags": [
    "设计机构",
    "黑色科技",
    "订阅服务",
    "玻璃卡片",
    "双语",
    "PC / iPad / H5"
  ],
  "summary": "以黑色视觉、蓝色高光、循环作品展示和动态业务卡片呈现的双语设计机构网站。",
  "accentColor": "#008bca",
  "cover": "/templates/designfast/screenshots/desktop-home.webp",
  "screenshots": [
    {
      "src": "/templates/designfast/screenshots/desktop-home.webp",
      "alt": "Designfast desktop home",
      "device": "desktop",
      "width": 1430,
      "height": 993
    },
    {
      "src": "/templates/designfast/screenshots/desktop-services.webp",
      "alt": "Designfast desktop services",
      "device": "desktop",
      "width": 1430,
      "height": 993
    },
    {
      "src": "/templates/designfast/screenshots/desktop-cases.webp",
      "alt": "Designfast desktop cases",
      "device": "desktop",
      "width": 1430,
      "height": 993
    },
    {
      "src": "/templates/designfast/screenshots/desktop-contact.webp",
      "alt": "Designfast desktop contact",
      "device": "desktop",
      "width": 1430,
      "height": 993
    },
    {
      "src": "/templates/designfast/screenshots/tablet-home.webp",
      "alt": "Designfast tablet home",
      "device": "tablet",
      "width": 824,
      "height": 1166
    },
    {
      "src": "/templates/designfast/screenshots/tablet-services.webp",
      "alt": "Designfast tablet services",
      "device": "tablet",
      "width": 824,
      "height": 1166
    },
    {
      "src": "/templates/designfast/screenshots/tablet-cases.webp",
      "alt": "Designfast tablet cases",
      "device": "tablet",
      "width": 824,
      "height": 1166
    },
    {
      "src": "/templates/designfast/screenshots/tablet-contact.webp",
      "alt": "Designfast tablet contact",
      "device": "tablet",
      "width": 824,
      "height": 1166
    },
    {
      "src": "/templates/designfast/screenshots/mobile-home.webp",
      "alt": "Designfast mobile home",
      "device": "mobile",
      "width": 380,
      "height": 822
    },
    {
      "src": "/templates/designfast/screenshots/mobile-services.webp",
      "alt": "Designfast mobile services",
      "device": "mobile",
      "width": 380,
      "height": 822
    },
    {
      "src": "/templates/designfast/screenshots/mobile-cases.webp",
      "alt": "Designfast mobile cases",
      "device": "mobile",
      "width": 380,
      "height": 822
    },
    {
      "src": "/templates/designfast/screenshots/mobile-contact.webp",
      "alt": "Designfast mobile contact",
      "device": "mobile",
      "width": 380,
      "height": 822
    }
  ]
},surfaces:[{id:'site',name:'设计机构官网',platform:'pc',locales:['zh','en'],pages:[
{slug:"",title:"首页",localizedTitles:{"en":"Home"},load:()=>import('./pages/HomePage')},
{slug:"services",title:"设计服务",localizedTitles:{"en":"Services"},load:()=>import('./pages/ServicesPage')},
{slug:"case-studies",title:"客户案例",localizedTitles:{"en":"Case Studies"},load:()=>import('./pages/CasesPage')},
{slug:"about-us",title:"关于我们",localizedTitles:{"en":"About Us"},load:()=>import('./pages/AboutPage')},
{slug:"contact",title:"联系我们",localizedTitles:{"en":"Contact"},load:()=>import('./pages/ContactPage')},
{slug:"legal",title:"法律信息",localizedTitles:{"en":"Legal Pages"},load:()=>import('./pages/LegalPage')},
{slug:"services/brand-identity",title:"品牌识别",localizedTitles:{"en":"Brand Identity"},load:()=>import('./pages/BrandIdentityPage')},
{slug:"services/graphic-design",title:"平面设计",localizedTitles:{"en":"Graphic Design"},load:()=>import('./pages/GraphicDesignPage')},
{slug:"services/framer-design",title:"Framer 设计",localizedTitles:{"en":"Framer Design"},load:()=>import('./pages/FramerDesignPage')},
{slug:"services/web-design",title:"网站设计",localizedTitles:{"en":"Web Design"},load:()=>import('./pages/WebDesignPage')},
{slug:"case-studies/greentech-solutions",title:"GreenTech Solutions",localizedTitles:{"en":"GreenTech Solutions"},load:()=>import('./pages/GreentechSolutionsPage')},
{slug:"case-studies/healthsync",title:"HealthSync",localizedTitles:{"en":"HealthSync"},load:()=>import('./pages/HealthsyncPage')},
{slug:"case-studies/ecobrands",title:"EcoBrands",localizedTitles:{"en":"EcoBrands"},load:()=>import('./pages/EcobrandsPage')},
{slug:"case-studies/fitness-pro",title:"Fitness Pro",localizedTitles:{"en":"Fitness Pro"},load:()=>import('./pages/FitnessProPage')},
{slug:"case-studies/urban-apparel",title:"Urban Apparel",localizedTitles:{"en":"Urban Apparel"},load:()=>import('./pages/UrbanApparelPage')},
{slug:"case-studies/brightminds-academy",title:"BrightMinds Academy",localizedTitles:{"en":"BrightMinds Academy"},load:()=>import('./pages/BrightmindsAcademyPage')},
{slug:"legal/privacy-policy",title:"隐私政策",localizedTitles:{"en":"Privacy Policy"},load:()=>import('./pages/PrivacyPolicyPage')},
{slug:"legal/cookie-policy",title:"Cookie 政策",localizedTitles:{"en":"Cookie Policy"},load:()=>import('./pages/CookiePolicyPage')},
{slug:"legal/terms-of-service",title:"服务条款",localizedTitles:{"en":"Terms of Service"},load:()=>import('./pages/TermsOfServicePage')}
]}]}
