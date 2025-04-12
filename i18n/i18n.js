const translations = {
  tw: {
    header: {
      title: "永吉水產",
      section1: "養殖方式",
      section2: "熱銷商品",
      section3: "社交媒體",
    },
    section1: {
      title: "養殖方式",
      content: "這是養殖方式的內容。",
    },
    section2: {
      title: "熱銷商品",
      // item 1
      item1Title: "虱目魚肚規格 / 💰價目表",
      item1S: "170-190g / $120",
      item1M: "200-220g / $135",
      item1L: "230-250g / $150",
      item1Sub: "限量提供",
      item1XL: "260-280g / $165",
      item1XXL: "290-310g / $180",
      item1XXXL: "320-340g / $195",
      // item 2
      item2Title: "魚皮",
      item2Sub: "300g / $90",
      // item 3
      item3Title: "魚柳",
      item3Sub: "600g / $180",
      //item 4
      item4Title: "魚腸",
      item4Sub: "600g / $100",
      //item 5
      item5Title: "里肌",
      item5Sub: "300g / $90",
      //item 6
      item6Title: "魚頭",
      item6Sub: "$50 / 包",
      //item 7
      item7Title: "虱目魚香腸",
      item7Sub: "600g / $250",
      //item 8
      item8Title: "飛魚卵虱目魚香腸",
      item8Sub: "600g / $300",
    },
    section3: {
      title: "社交媒體",
      content: "這是自媒體的內容。",
    },
    footer: {
      text: "© 2025 永吉水產。版權所有。",
    },
    floatingBtn: {
      lineLink: "立即訂購",
    },
  },
  en: {
    header: {
      title: "Yong Ji Seafood",
      section1: "Farming Methods",
      section2: "Products",
      section3: "Social Media",
    },
    section1: {
      title: "Farming Methods",
      content: "This is the content of Section 1.",
    },
    section2: {
      title: "Best-selling Products",
      // item 1
      item1Title: "Milkfish Belly Specifications / 💰 Price List",
      item1S: "170-190g / $120",
      item1M: "200-220g / $135",
      item1L: "230-250g / $150",
      item1Sub: "Limited Supply",
      item1XL: "260-280g / $165",
      item1XXL: "290-310g / $180",
      item1XXXL: "320-340g / $195",
      // item 2
      item2Title: "Fish Skin",
      item2Sub: "300g / $90",
      // item 3
      item3Title: "Fish Fillets",
      item3Sub: "600g / $180",
      // item 4
      item4Title: "Fish Intestine",
      item4Sub: "600g / $100",
      // item 5
      item5Title: "Fish Tenderloin",
      item5Sub: "300g / $90",
      // item 6
      item6Title: "Fish Head",
      item6Sub: "$50 / per pack",
      // item 7
      item7Title: "Milkfish Sausage",
      item7Sub: "600g / $250",
      // item 8
      item8Title: "Flying Fish Roe Milkfish Sausage",
      item8Sub: "600g / $300",
    },

    section3: {
      title: "Social Media",
      content: "This is the content of Section 3.",
    },
    footer: {
      text: "© 2025 Yong Ji Seafood. All rights reserved.",
    },
    floatingBtn: {
      lineLink: "Order Now",
    },
  },
};

function getNestedValue(obj, keyPath) {
  return keyPath.split(".").reduce((acc, key) => acc && acc[key], obj);
}

function setLanguage(lang) {
  const currentTranslations = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const keyPath = element.getAttribute("data-i18n");
    const translation = getNestedValue(currentTranslations, keyPath);
    if (translation) {
      element.textContent = translation;
    }
  });

  const titleTranslation = getNestedValue(currentTranslations, "header.title");
  if (titleTranslation) {
    document.title = titleTranslation;
  }

  document.querySelectorAll("select[onchange]").forEach((select) => {
    select.value = lang;
  });
}

// 預設語系
setLanguage("tw");

function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.toggle("hidden");
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  if (!mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.add("hidden");
  }
}

function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.toggle("hidden");
}

// 為所有行動版導覽連結加上點擊事件：點擊後收起選單
document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    closeMobileMenu();
  });
});
