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
      content: "這是商品的內容。",
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
      title: "Products",
      content: "This is the content of Section 2.",
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
