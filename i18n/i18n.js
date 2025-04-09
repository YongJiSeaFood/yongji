const translations = {
  tw: {
    header: {
      title: "永吉水產",
      section1: "第一區",
      section2: "第二區",
      section3: "第三區",
    },
    section1: {
      title: "第一區 標題",
      content: "這是第一區的內容。",
    },
    section2: {
      title: "第二區 標題",
      content: "這是第二區的內容。",
    },
    section3: {
      title: "第三區 標題",
      content: "這是第三區的內容。",
    },
    footer: {
      text: "© 2025 永吉水產。版權所有。",
    },
  },
  en: {
    header: {
      title: "Yong Ji Seafood",
      section1: "Section 1",
      section2: "Section 2",
      section3: "Section 3",
    },
    section1: {
      title: "Section 1 Title",
      content: "This is the content of Section 1.",
    },
    section2: {
      title: "Section 2 Title",
      content: "This is the content of Section 2.",
    },
    section3: {
      title: "Section 3 Title",
      content: "This is the content of Section 3.",
    },
    footer: {
      text: "© 2025 Yong Ji Seafood. All rights reserved.",
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
