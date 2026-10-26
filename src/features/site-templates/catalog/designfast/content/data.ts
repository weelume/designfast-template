import type { Bilingual } from '../config/brand'
export const text = (zh: string, en: string): Bilingual => ({ zh, en })
export const services = [
  { slug: 'brand-identity', name: text('品牌识别','Brand Identity'), image: 'RtfWr8jd3VeVSMWUCxaOsrObE44.jpg', description: text('打造强大而统一的视觉识别，让品牌脱颖而出，建立持久认知。','Craft a strong, cohesive visual identity that sets your brand apart and builds lasting recognition.') },
  { slug: 'graphic-design', name: text('平面设计','Graphic Design'), image: 'mwZ7ybDXbnVfQXHMMjzWiP7BpI.jpg', description: text('为数字与印刷媒介打造富有冲击力的视觉，用清晰的表达提升品牌。','High-impact visuals for digital and print that elevate your brand and communicate with clarity.') },
  { slug: 'framer-design', name: text('Framer 设计','Framer Design'), image: 'GjuCEc3VTzQ5osnFXD5Vu6Tx8Y.jpg', description: text('以 Framer 构建交互丰富的响应式网站，将简洁设计与强大功能融为一体。','Interactive, responsive websites built in Framer—blending clean design with powerful no-code functionality.') },
  { slug: 'web-design', name: text('网站设计','Web Design'), image: '0g1NFFzgEwVSVsRaGntwvAkeSIA.jpg', description: text('为打动客户、促进转化和持续增长而设计的网站，让策略与美感同行。','Custom websites designed to impress clients, convert, and scale—built with strategy, not just style.') },
]
export const cases = [
  {slug:'greentech-solutions',name:'GreenTech Solutions',image:'12IM56X1J3khgmEakCsZKd9EGLY.jpg',description:text('客户参与度提升 30%，数字品牌体验更流畅。','Increased customer engagement by 30% and streamlined digital presence.'),website:'https://expressed.me',tags:['Web Design','Figma','Responsive'],duration:text('4 个月','4 months'),budget:'$18,000'},
  {slug:'healthsync',name:'HealthSync',image:'Ok6cd4z826F0Gks9sFfcGFjFzY.jpg',description:text('用户体验提升 40%，让预约流程更加便捷。','Improved user experience by 40% and streamlined appointment scheduling.'),website:'https://expressed.me',tags:['UI/UX Design','Figma','A/B Testing'],duration:text('3 个月','3 months'),budget:'$22,000'},
  {slug:'ecobrands',name:'EcoBrands',image:'tD5WvGTRPvrCl4Sp2YxwRHyGLCU.jpg',description:text('网站参与度提升 35%，让品牌表达更加清晰。','Enhanced website engagement by 35% and improved brand messaging.'),website:'https://expressed.me',tags:['Brand Strategy','User Interface','Framer'],duration:text('5 个月','5 months'),budget:'$20,000'},
  {slug:'fitness-pro',name:'Fitness Pro',image:'Im1JPurytJLf7jHh3xmzZTG0Q.jpg',description:text('会员注册提升 50%，让课程预订更加高效。','Increased member sign-ups by 50% and streamlined class booking.'),website:'https://expressed.me',tags:['Booking System','A/B Testing','UX Design'],duration:text('3 个月','3 months'),budget:'$17,000'},
  {slug:'urban-apparel',name:'Urban Apparel',image:'lbVqqE24m5hD12toyeGwZW0.jpg',description:text('线上销售提升 40%，购物导航更清晰。','Boosted online sales by 40% and enhanced user navigation'),website:'https://expressed.me',tags:['E-commerce','Optimization','Framer'],duration:text('4 个月','4 months'),budget:'$19,000'},
  {slug:'brightminds-academy',name:'BrightMinds Academy',image:'wEGJDX3FOPrd8O1W1oAwcHOYNQ.jpg',description:text('学员报名提升 45%，让课程更容易被发现。','Increased student enrollment by 45% and improved course discovery.'),website:'https://expressed.me',tags:['Web Design','Online Course','UX Optimization'],duration:text('4 个月','4 months'),budget:'$21,000'},
]
export const projects = ['TRAoU3epjWbVl0efchYFEO28ugY.jpg','55ZGT1Yt09uBuw7UDfieDXLbIQ.jpg','7gYgDLBCFcz6Fp5v6De2M3QsjAk.jpg','4cNO6HSddAEje7x0Y7YykaHVgCE.jpg']
export const faqs = [
  {
    "q": {
      "zh": "一个项目通常需要多长时间？",
      "en": "How long does a typical project take?"
    },
    "a": {
      "zh": "品牌项目通常需要 4–6 周，网站设计通常需要 8–12 周。我们会提供详细的时间计划，并在整个过程中保持沟通。",
      "en": "On average, branding projects take 4-6 weeks, while web design projects can range from 8-12 weeks. We provide a detailed timeline and keep you informed throughout the project."
    }
  },
  {
    "q": {
      "zh": "与你们合作需要多少费用？",
      "en": "What is the cost of working with you?"
    },
    "a": {
      "zh": "费用会根据服务内容和项目复杂程度有所不同。初步沟通后，我们会提供定制方案，确保同时符合你的需求与预算。",
      "en": "Pricing varies depending on the services and the complexity of your project. We offer customized proposals after an initial consultation, ensuring our solutions fit both your needs and budget."
    }
  },
  {
    "q": {
      "zh": "我会如何参与设计过程？",
      "en": "How involved will I be in the process?"
    },
    "a": {
      "zh": "你的参与是项目成功的关键。我们重视协作，会邀请你参与每一步，从最初的头脑风暴到交付物的最终审阅。",
      "en": "Your involvement is key to the success of the project. We believe in collaboration and will involve you at every step, from initial brainstorming sessions to final reviews of the deliverables."
    }
  },
  {
    "q": {
      "zh": "可以基于我现有的品牌开展设计吗？",
      "en": "Can you work with my existing brand?"
    },
    "a": {
      "zh": "当然可以。无论是品牌焕新、全面改版，还是数字营销与内容创作等追加服务，我们都能基于你现有的品牌元素或网站开展工作。",
      "en": "Absolutely! We can work with your existing brand elements or website, whether you're looking for a refresh, a complete redesign, or additional services like digital marketing and content creation."
    }
  }
]
export const testimonials = [
  {quote:text('更换服务后，我们的转化率有了显著提升。非常推荐！',"We've seen a significant improvement on our conversion rate after switching to their service. Highly recommend!"),name:'Emily Carter',image:'aXm7l3DIpRNKp23wuPRMMWGFCxc.jpg',role:text('电商品牌创始人','E-commerce Founder')},
  {quote:text('这是我们创业以来最好的决定：高效、可靠，而且总能交付令人惊艳的设计！','The best decision we made for our startup—the experience was fast, reliable, and they always deliver stunning designs!'),name:'Jake Thompson',image:'JKorM5B0WmJOc8WoLSGW2e0hNG8.jpg',role:text('SaaS 首席执行官','SaaS CEO')},
  {quote:text('按需获得专业设计，改变了我们的工作方式。作品出色，交付总比预期更快。','A game changer! We get professional-quality design work on demand. The designs are great and always delivered faster than we expect.'),name:'Sarah Lin',image:'5P0eN6qtSxQg8Lrk6rw2GR9e7eI.jpg',role:text('市场总监','Marketing Director')},
  {quote:text('他们让团队设计能力的扩展变得轻松。响应迅速、迭代高效，总能准确理解需求。','They’ve made scaling design output effortless for our agency. Their designers are responsive, quick to iterate, and always nail the brief.'),name:'David Miller',image:'SxzTLiNEeuCPxt7HTFNnCyB5Vo.jpg',role:text('机构负责人','Agency Owner')},
]
export const policies = [
  {slug:'privacy-policy',title:text('隐私政策','Privacy Policy')},
  {slug:'cookie-policy',title:text('Cookie 政策','Cookie Policy')},
  {slug:'terms-of-service',title:text('服务条款','Terms of Service')},
]
export const team = [
  {name:'John Smith',role:text('首席设计师','Lead Designer'),image:'7ckekOZAa0J28C2T3IfYTvNDv5U.jpg'},
  {name:'James Turner',role:text('高级网站开发工程师','Senior Web Developer'),image:'iABb6ejla3A5ZzE4zgxiPqBaYHI.jpg'},
  {name:'Michael Johnson',role:text('项目经理','Project Manager'),image:'LsJGvkbYbF1y4ifkFrjeNfRfzYM.jpg'},
  {name:'David Miller',role:text('UI/UX 专家','UI/UX Specialist'),image:'8jpvtN1LhtGTLfO40jCfOWkYilI.jpg'},
  {name:'Robert White',role:text('前端开发工程师','Front-End Developer'),image:'rsJ7qH7Mbs7CJkuvl24AzIdFM8Y.jpg'},
  {name:'William Harris',role:text('设计策略师','Design Strategist'),image:'1ApcT7kVDOZTELD8XFISmocdiA.jpg'},
]


export const navLinks = [
  {
    "slug": "",
    "zh": "首页",
    "en": "Home"
  },
  {
    "slug": "services",
    "zh": "服务",
    "en": "Services"
  },
  {
    "slug": "about-us",
    "zh": "关于我们",
    "en": "About Us"
  },
  {
    "slug": "case-studies",
    "zh": "案例",
    "en": "Case Studies"
  }
]

export const homeStats = [
  {
    "id": "conversion",
    "value": "30%",
    "label": {
      "zh": "更多转化",
      "en": "More conversions"
    },
    "icon": "home-stat-0.svg"
  },
  {
    "id": "engagement",
    "value": "50%",
    "label": {
      "zh": "更高参与度",
      "en": "More engagement"
    },
    "icon": "home-stat-1.svg"
  },
  {
    "id": "satisfaction",
    "value": "99%",
    "label": {
      "zh": "客户满意度",
      "en": "Customer satisfaction"
    },
    "icon": "home-stat-2.svg"
  }
]

export const aboutStats = [
  {
    "id": "projects",
    "value": "500+",
    "label": {
      "zh": "项目交付",
      "en": "Projects delivered"
    },
    "icon": "about-stat-0.svg"
  },
  {
    "id": "satisfaction",
    "value": "99%",
    "label": {
      "zh": "客户满意度",
      "en": "Customer satisfaction"
    },
    "icon": "about-stat-1.svg"
  },
  {
    "id": "support",
    "value": "24/7",
    "label": {
      "zh": "支持服务",
      "en": "Support availability"
    },
    "icon": "about-stat-2.svg"
  }
]

export const growthGraph = {
  "value": "+42%",
  "bars": [
    31,
    48,
    43,
    70,
    90
  ],
  "image": "5Ldw0dcNe266RHADE34yYcZDZN8.png"
}

export const founderRating = {
  "count": 5,
  "label": {
    "zh": "五星评价",
    "en": "5 out of 5 stars"
  }
}

export const pricingPlans = [
  {
    "id": "landing",
    "title": {
      "zh": "落地页设计",
      "en": "Landing Page"
    },
    "description": {
      "zh": "以业务结果为目标的高转化落地页。",
      "en": "A high-converting landing page designed to drive results."
    },
    "price": "$2,497",
    "unit": {
      "zh": "/页",
      "en": "/page"
    },
    "features": [
      {
        "zh": "不限次数的需求",
        "en": "Unlimited requests"
      },
      {
        "zh": "Figma 源文件",
        "en": "Figma file"
      },
      {
        "zh": "移动端适配",
        "en": "Mobile responsive"
      },
      {
        "zh": "48 小时交付",
        "en": "48-hour delivery"
      }
    ]
  },
  {
    "id": "team",
    "title": {
      "zh": "专属设计团队",
      "en": "Dedicated Team"
    },
    "description": {
      "zh": "通过月度订阅，拥有可灵活扩展的设计团队。",
      "en": "Your own scalable design team on a monthly subscription."
    },
    "price": "$4,497",
    "unit": {
      "zh": "/月",
      "en": "/month"
    },
    "features": [
      {
        "zh": "不限次数的需求",
        "en": "Unlimited requests"
      },
      {
        "zh": "Figma 源文件",
        "en": "Figma file"
      },
      {
        "zh": "Slack 直接沟通",
        "en": "Slack access"
      },
      {
        "zh": "持续迭代修改",
        "en": "Ongoing revisions"
      }
    ]
  }
]

export const priorityRequestPrice = "$297"
