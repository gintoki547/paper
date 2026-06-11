const works = [
  {
    id: 1,
    title: "汴河晨食",
    fullTitle: "汴京烟火·汴河晨食",
    image: "images/1.png",
    link: "source/图一汴京烟火·汴河早食.jpg",
    time: "卯时至辰时",
    desc: "以清晨饮食和沿河生活为入口，呈现汴京一天开始时的市井状态。图面将汴河、州桥、食肆、早点摊贩和晨间消费组织为可读场景。",
    focus: "食物类别、经营场景、人物活动",
    data: "饮食大类统计，主食面点、肉菜水产、果子甜饮和酒水",
    role: "系列开篇，从日常饮食进入北宋东京城市生活"
  },
  {
    id: 2,
    title: "相国奇市",
    fullTitle: "汴京烟火·相国奇市",
    image: "images/2.png",
    link: "source/图二汴京烟火·相国奇市.jpg",
    time: "巳时至午时",
    desc: "围绕大相国寺及其周边商业活动展开，表现寺市空间中的商品交易、人群流动和行业聚集。",
    focus: "市场空间、商品类别、行业类型、人群活动",
    data: "相国寺购物分类字典，活体禽兽、器玩、书市、日用品等类别",
    role: "呈现宗教空间与市井交易空间交叠的城市商业场所"
  },
  {
    id: 3,
    title: "锦绣衣冠",
    fullTitle: "汴京烟火·锦绣衣冠",
    image: "images/3.png",
    link: "source/图三汴京烟火·锦绣衣冠.jpg",
    time: "午后人群",
    desc: "以服饰形制和身份关系为主要内容，通过人物插画展示冠饰、服色、材质、配饰等服饰要素。",
    focus: "身份阶层、服色、冠饰、材质、配饰",
    data: "服饰数据表，记录身份层级、部件类别、形制特征、制度禁忌",
    role: "补充人物身份与社会秩序，让服饰成为理解城市人群的入口"
  },
  {
    id: 4,
    title: "瓦舍百戏",
    fullTitle: "汴京烟火·瓦舍百戏",
    image: "images/4.png",
    link: "source/图四汴京烟火·瓦舍百戏.jpg",
    time: "申酉娱乐",
    desc: "表现瓦舍娱乐和市民休闲活动，将杂剧、说唱、歌舞、杂技、傀儡影戏等内容转化为舞台与观众场景。",
    focus: "娱乐空间、表演项目、参与人群、道具动作",
    data: "瓦舍百戏扩展数据表，包含场所、项目、人物、媒介、道具和原文证据",
    role: "呈现宋代城市娱乐空间的开放性和公共性"
  },
  {
    id: 5,
    title: "州桥夜食",
    fullTitle: "汴京烟火·州桥夜食",
    image: "images/5.png",
    link: "source/图五汴京烟火·州桥夜食.jpg",
    time: "戌亥夜市",
    desc: "聚焦州桥夜市和夜间饮食消费，通过灯火、摊贩、食物、行人和街道组织夜间场景。",
    focus: "经营地点、营业时段、食品类别、季节属性",
    data: "州桥夜食食物清单，记录温度、味觉、烹饪动词和受欢迎程度",
    role: "与晨食形成早晚对照，完善一日生活叙事"
  },
  {
    id: 6,
    title: "岁时节序",
    fullTitle: "汴京烟火·岁时节序",
    image: "images/6.png",
    link: "source/图六汴京烟火·岁时节序.jpg",
    time: "年度循环",
    desc: "以岁时节令和年度民俗为主题，通过节气罗盘、节令物件、花卉果蔬和民俗活动组织全年时间结构。",
    focus: "季节、节气、民俗活动、代表物象、参与人群",
    data: "24节气活动统计表与全年节气特色概览",
    role: "从年度时间层面补全汴京城市生活的季节维度"
  }
];

const flowSteps = [
  {
    title: "文本收集",
    text: "阅读原文、注释和研究资料，摘录地点名称、时间表达、人物身份、器物名称、饮食种类、服饰形制和节庆场景。"
  },
  {
    title: "数据清洗",
    text: "将连续古文拆为空间位置、时间信息、食物名称、季节信息、经营特征等字段，并统一名称、类别和出处。"
  },
  {
    title: "图面设计",
    text: "根据主题选择地图、罗盘、分类图表、人物插画和场景叙事，把资料转成有阅读顺序的信息图。"
  },
  {
    title: "展陈延展",
    text: "把六张图的字体、色彩、图标和场景继续延展到纸品、龙鳞装、动态视频和网页游历体验。"
  }
];

const dataSets = {
  food: {
    source: "图一早市最终数据集 / 图5_州桥夜食_食物清单.csv",
    title: "饮食消费数据",
    desc: "记录食物名称、类别、关联店铺、地理位置、营业时段、烹饪方式、温度属性和味觉分类，用于支撑晨食与夜食两张图。",
    bars: [["主食面点", 16], ["肉菜水产", 12], ["果子甜饮", 7], ["酒水饮品", 6]]
  },
  market: {
    source: "图二相国寺购物分类字典.csv",
    title: "相国寺商贸分类",
    desc: "围绕大相国寺和寺市空间整理商品类别、交易活动和人群角色，说明综合性市集的复杂结构。",
    bars: [["活体禽兽", 18], ["书籍器玩", 14], ["日用商品", 12], ["摊铺服务", 9]]
  },
  clothes: {
    source: "图三_锦绣衣冠_服饰数据表.csv",
    title: "服饰身份数据",
    desc: "记录身份层级、性别、部件类别、颜色、材质、纹样、配饰和制度禁忌，用于说明服饰与社会身份之间的关系。",
    bars: [["服饰有效信息", 78], ["核心字段", 21], ["身份层级", 6], ["服饰部件", 9]]
  },
  show: {
    source: "图四_瓦舍百戏_扩展数据表.csv",
    title: "瓦舍娱乐数据",
    desc: "整理瓦子、勾栏、杂剧、说唱、歌舞、傀儡影戏和角抵等信息，支撑娱乐空间与表演类型的视觉表达。",
    bars: [["演艺条目", 39], ["大类", 3], ["子类", 27], ["主要场所", 5]]
  },
  festival: {
    source: "图六_24节气活动统计表.csv / 图六_全年节气特色概览.csv",
    title: "节令民俗数据",
    desc: "围绕元旦、元宵、清明、端午、中秋、重阳、冬至等节令，建立季节、活动、物象和参与人群之间的关系。",
    bars: [["节气条目", 24], ["节庆节点", 17], ["年度峰值", 100], ["季节分区", 4]]
  }
};

const extensions = [
  {
    type: "纸品延展",
    title: "日历设计",
    desc: "将节令、人物和市井场景转化为月份纸品，保留日期功能，并把节气、花卉、饮食和人物活动编入不同月份。页面展示采用错落的纸张比例，保留长条与方形两种规格的差异。",
    spec: "6cm×12cm 竖版长条 2 张，9cm×9cm 方形 6 张，共输出 50 张。",
    layout: "calendar",
    images: [
      { src: "images/extensions/calendar.png", alt: "汴京烟火日历设计总览" }
    ]
  },
  {
    type: "纸品延展",
    title: "明信片设计",
    desc: "将地图、节令场景、饮食插画、人物活动和标题字重新裁切为小幅纸品。网页中不把所有图等距硬排，而是用拼贴式网格表现它作为一组收藏纸品的丰富性。",
    spec: "尺寸 148mm×100mm，共打印 48 张，采用水彩绮丽纸。",
    layout: "postcard",
    images: [
      { src: "images/extensions/postcards.png", alt: "汴京烟火明信片设计总览" }
    ]
  },
  {
    type: "纸品延展",
    title: "书签设计",
    desc: "截取标题字、饮食插画、建筑局部和节令装饰元素，结合竖向构图、留白与硫酸纸叠影，形成轻巧的阅读辅助品。网页展示以窄幅长列呈现，强调书签本身的纵向节奏。",
    spec: "常规尺寸约 50mm×150mm，共打印 84 张，材质选用珠光纸，并搭配同尺寸硫酸纸。",
    layout: "bookmark",
    images: [
      { src: "images/extensions/bookmarks.png", alt: "汴京烟火书签设计总览" }
    ]
  },
  {
    type: "生活物件",
    title: "开瓶器设计",
    desc: "把夜市饮食图标转化为圆形日用品，中心保留“汴京烟火”主题文字，外圈环绕包子、糕点、果子等线性食物图案。设计稿与实物图并置，体现从图案到材料的落地过程。",
    spec: "木质材料，共制作 6 个，图案通过线稿雕刻或印制呈现在圆形表面。",
    layout: "product-pair",
    images: [
      { src: "images/extensions/opener-design.png", alt: "开瓶器线稿设计" },
      { src: "images/extensions/opener-product.png", alt: "木质开瓶器实物" }
    ]
  },
  {
    type: "互动文创",
    title: "旋转钥匙扣挂件",
    desc: "以《州桥夜食》的夜市美食为核心，采用圆形转盘结构，把冰雪冷元子、甘草凉水、焦炸子、猪脏粉等内容转化为可旋转的趣味选择。页面以圆形主视觉展示，突出它的互动属性。",
    spec: "整体尺寸 9cm×9cm，双层结构，外层为美食分类转盘，内层结合人物插画和主题文字。",
    layout: "wheel",
    images: [
      { src: "images/extensions/food-wheel-design.png", alt: "美食转盘设计稿" },
      { src: "images/extensions/food-wheel-product.png", alt: "旋转钥匙扣挂件实物" }
    ]
  },
  {
    type: "传统装帧",
    title: "龙鳞装卷轴设计",
    desc: "将六张信息图重新编排为可翻阅的龙鳞装结构，让展板、长卷和古籍装帧发生联系。展示中先给出总览封面，再用实拍细节表现展开、翻页和层叠关系。",
    spec: "展开尺寸 148cm×70cm，中间画芯尺寸 60cm×33cm，需要反复调整页面顺序、粘贴位置、裁切边距和展开比例。",
    layout: "dragon",
    images: [
      { src: "images/extensions/dragon-cover.png", alt: "龙鳞装卷轴封面设计" },
      { src: "images/extensions/dragon-spread.png", alt: "龙鳞装卷轴展开实物" },
      { src: "images/extensions/dragon-open-1.png", alt: "龙鳞装翻阅实拍一" },
      { src: "images/extensions/dragon-open-2.png", alt: "龙鳞装翻阅实拍二" }
    ]
  }
];

function qs(selector, root = document) {
  return root.querySelector(selector);
}

function qsa(selector, root = document) {
  return Array.from(root.querySelectorAll(selector));
}

function fitSingleLineTitles() {
  qsa(".section-heading h2").forEach((title) => {
    title.style.removeProperty("--fit-size");
    const minSize = window.innerWidth < 760 ? 16 : 28;
    let size = Number.parseFloat(getComputedStyle(title).fontSize);
    let attempts = 0;

    while (title.scrollWidth > title.clientWidth && size > minSize && attempts < 52) {
      size -= 1;
      title.style.setProperty("--fit-size", `${size}px`);
      attempts += 1;
    }
  });
}

function initReveal() {
  function showVisibleItems() {
    qsa(".reveal").forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.95 && rect.bottom > window.innerHeight * -0.1) {
        el.classList.add("visible");
      }
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -8% 0px" });

  qsa(".reveal").forEach((el, index) => {
    el.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 70}ms`);
    observer.observe(el);
  });

  requestAnimationFrame(showVisibleItems);
  window.setTimeout(showVisibleItems, 180);
  window.setTimeout(showVisibleItems, 520);
  window.addEventListener("hashchange", () => window.setTimeout(showVisibleItems, 120));
  window.addEventListener("scroll", showVisibleItems, { passive: true });
}

function initHeader() {
  const header = qs("[data-header]");
  const nav = qs("[data-nav]");
  const toggle = qs("[data-nav-toggle]");

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 20);
  });

  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  qsa(".site-nav a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });
}

function initScrollMotion() {
  const progress = document.createElement("div");
  progress.className = "scroll-progress";
  document.body.prepend(progress);

  function update() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const percent = max > 0 ? window.scrollY / max : 0;
    progress.style.transform = `scaleX(${Math.min(1, Math.max(0, percent))})`;
    document.documentElement.style.setProperty("--hero-shift", `${Math.min(90, window.scrollY * 0.08)}px`);
  }

  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
}

function initCardInteractions() {
  const cards = qsa(".hero-panel, .logic-card, .data-card-large, .data-proof, .system-card, .extension-detail, .tour-card, .work-detail");

  cards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;

      card.style.setProperty("--spot-x", `${x * 100}%`);
      card.style.setProperty("--spot-y", `${y * 100}%`);
      card.style.setProperty("--tilt-y", `${(x - 0.5) * 5}deg`);
      card.style.setProperty("--tilt-x", `${(0.5 - y) * 5}deg`);
    });

    card.addEventListener("pointerleave", () => {
      card.style.removeProperty("--tilt-x");
      card.style.removeProperty("--tilt-y");
      card.style.removeProperty("--spot-x");
      card.style.removeProperty("--spot-y");
    });
  });
}

function initFlow() {
  const detail = qs("[data-flow-detail]");
  qsa("[data-flow-step]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.flowStep);
      qsa("[data-flow-step]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      detail.innerHTML = `<strong>${flowSteps[index].title}</strong><p>${flowSteps[index].text}</p>`;
    });
  });
}

function setWork(work) {
  const image = qs("[data-work-image]");
  image.classList.add("is-switching");
  window.setTimeout(() => {
    image.addEventListener("load", () => image.classList.remove("is-switching"), { once: true });
    image.src = work.image;
    image.alt = work.fullTitle;
    if (image.complete) image.classList.remove("is-switching");
  }, 90);
  qs("[data-work-time]").textContent = work.time;
  qs("[data-work-title]").textContent = work.title;
  qs("[data-work-desc]").textContent = work.desc;
  qs("[data-work-focus]").textContent = work.focus;
  qs("[data-work-data]").textContent = work.data;
  qs("[data-work-role]").textContent = work.role;
  qs("[data-work-link]").href = work.link;
  qs("[data-work-link]").textContent = "打开高清成品图";
  qsa(".work-thumb").forEach((thumb) => {
    thumb.classList.toggle("active", Number(thumb.dataset.workId) === work.id);
  });
}

function initWorks() {
  const tabs = qs("[data-work-tabs]");
  tabs.innerHTML = works.map((work) => `
    <button class="work-thumb${work.id === 1 ? " active" : ""}" type="button" data-work-id="${work.id}" aria-label="切换到${work.fullTitle}">
      <img src="${work.image}" alt="${work.fullTitle}">
    </button>
  `).join("");

  tabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-work-id]");
    if (!button) return;
    const work = works.find((item) => item.id === Number(button.dataset.workId));
    setWork(work);
  });

  setWork(works[0]);
}

function initDataTabs() {
  const barList = qs("[data-data-bars]");

  function renderData(key) {
    const data = dataSets[key];
    const max = Math.max(...data.bars.map((item) => item[1]));
    qs("[data-data-source]").textContent = data.source;
    qs("[data-data-title]").textContent = data.title;
    qs("[data-data-desc]").textContent = data.desc;
    barList.innerHTML = data.bars.map(([label, value]) => {
      const width = Math.max(8, Math.round((value / max) * 100));
      return `
        <div class="bar-row">
          <span>${label}</span>
          <span class="bar-track"><span class="bar-fill" style="--value:${width}%"></span></span>
          <strong>${value}</strong>
        </div>
      `;
    }).join("");
  }

  qsa("[data-data-key]").forEach((button) => {
    button.addEventListener("click", () => {
      qsa("[data-data-key]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderData(button.dataset.dataKey);
    });
  });

  renderData("food");
}

function initExtensions() {
  const list = qs("[data-extension-list]");
  list.innerHTML = extensions.map((item, index) => `
    <button class="${index === 0 ? "active" : ""}" type="button" data-extension-index="${index}">
      <strong>${item.title}</strong><br><span>${item.type}</span>
    </button>
  `).join("");

  function renderExtension(index) {
    const item = extensions[index];
    const gallery = qs("[data-extension-gallery]");
    qs("[data-extension-type]").textContent = item.type;
    qs("[data-extension-title]").textContent = item.title;
    qs("[data-extension-desc]").textContent = item.desc;
    qs("[data-extension-spec]").textContent = item.spec;
    gallery.className = `extension-gallery ${item.layout}`;
    gallery.innerHTML = item.images.map((image, imageIndex) => `
      <button class="extension-shot${imageIndex === 0 ? " primary" : ""}" type="button" data-extension-image="${image.src}" data-extension-alt="${image.alt}">
        <img src="${image.src}" alt="${image.alt}">
        <span>${image.alt}</span>
      </button>
    `).join("");
  }

  list.addEventListener("click", (event) => {
    const button = event.target.closest("[data-extension-index]");
    if (!button) return;
    const index = Number(button.dataset.extensionIndex);
    qsa("[data-extension-index]").forEach((node) => node.classList.remove("active"));
    button.classList.add("active");
    renderExtension(index);
  });

  renderExtension(0);
}

function initModal() {
  const modal = qs("[data-modal]");
  const modalImage = qs("[data-modal-img]");
  const modalCaption = qs("[data-modal-caption]");

  qs("[data-open-work]").addEventListener("click", () => {
    const image = qs("[data-work-image]");
    modalImage.src = image.src;
    modalImage.alt = image.alt;
    modalCaption.textContent = image.alt;
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
  });

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-extension-image]");
    if (!button) return;
    modalImage.src = button.dataset.extensionImage;
    modalImage.alt = button.dataset.extensionAlt;
    modalCaption.textContent = button.dataset.extensionAlt;
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
  });

  function closeModal() {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
  }

  qs("[data-modal-close]").addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  fitSingleLineTitles();
  initReveal();
  initHeader();
  initScrollMotion();
  initCardInteractions();
  initFlow();
  initWorks();
  initDataTabs();
  initExtensions();
  initModal();
  requestAnimationFrame(fitSingleLineTitles);
});

let titleResizeTimer;
window.addEventListener("resize", () => {
  window.clearTimeout(titleResizeTimer);
  titleResizeTimer = window.setTimeout(fitSingleLineTitles, 120);
});
