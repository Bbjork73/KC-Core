const STORAGE_KEY = "kc-core-catering-v1";
const WEBSHOP_ALL_CATEGORY_ID = "all";
const webshopCategoryFallbacks = {
  "webcat-17-mai-2026": { id: "webcat-17-mai-2026", name: "17.mai 2026", sortOrder: 0 },
  "webcat-tapas-og-buffet": { id: "webcat-tapas-og-buffet", name: "Tapas og buffet", sortOrder: 1 },
  "webcat-pasmurt-og-salater": { id: "webcat-pasmurt-og-salater", name: "Påsmurt og salater", sortOrder: 2 },
  "webcat-3-7-retters-middagsmenyer": { id: "webcat-3-7-retters-middagsmenyer", name: "3-7 retters middagsmenyer", sortOrder: 3 },
  "webcat-grillmeny": { id: "webcat-grillmeny", name: "Grillmeny", sortOrder: 4 },
  "webcat-fingermat": { id: "webcat-fingermat", name: "Fingermat", sortOrder: 5 },
  "webcat-gryte-og-middagsretter": { id: "webcat-gryte-og-middagsretter", name: "Gryte og middagsretter", sortOrder: 6 },
  "webcat-suppe": { id: "webcat-suppe", name: "Suppe", sortOrder: 7 },
  "webcat-lunsjtallerken": { id: "webcat-lunsjtallerken", name: "Lunsjtallerken", sortOrder: 8 },
  "webcat-lunsjbuffet": { id: "webcat-lunsjbuffet", name: "Lunsjbuffet", sortOrder: 9 },
  "webcat-motemat-og-dagpakker": { id: "webcat-motemat-og-dagpakker", name: "Møtemat og dagpakker", sortOrder: 10 },
  "webcat-var-beste-deal": { id: "webcat-var-beste-deal", name: "Vår beste deal", sortOrder: 11 },
  "webcat-kaker-og-bakverk": { id: "webcat-kaker-og-bakverk", name: "Kaker og bakverk", sortOrder: 12 },
  "webcat-desserter": { id: "webcat-desserter", name: "Desserter", sortOrder: 13 },
  "webcat-tilvalg": { id: "webcat-tilvalg", name: "Tilvalg", sortOrder: 14 },
  "webcat-varm-drikke": { id: "webcat-varm-drikke", name: "Varm drikke", sortOrder: 15 },
  "webcat-kald-drikke": { id: "webcat-kald-drikke", name: "Kald drikke", sortOrder: 16 },
};

const today = "2026-05-12";
const validViews = [
  "webshop",
  "board",
  "orders",
  "orderDetail",
  "articles",
  "recipes",
  "rawMaterials",
  "inventory",
  "production",
  "prices",
  "data",
];

const orderStatuses = [
  { id: "tilbud", name: "Tilbud" },
  { id: "ordre", name: "Ordre" },
  { id: "ferdig-levert", name: "Ferdig levert" },
  { id: "fakturert", name: "Fakturert" },
];

const deliveryStatuses = [
  { id: "klar", name: "Klar" },
  { id: "lastet", name: "Lastet" },
  { id: "ferdig-levert", name: "Ferdig levert" },
  { id: "ferdig-returnert", name: "Ferdig returnert" },
];

const defaultState = () => mergeImportedCatalog({
  selectedDate: today,
  currentView: "board",
  selectedArticleId: "art-chicken-pot",
  selectedCustomerId: "cust-oslo",
  selectedOrderId: "ord-10024",
  selectedDeliveryId: "del-10024-a",
  activeDeliveryInfoId: "",
  webshop: {
    customerId: "",
    cart: [],
    activeCategoryId: "",
    notificationsEnabled: false,
    statusSeen: {},
  },
  selectedProductionDepartmentId: "all",
  productionStatus: {},
  productionInventoryAdjustments: {},
  suppliers: [
    { id: "sup-bama", name: "Bama Storkjøkken", phone: "22 88 05 00" },
    { id: "sup-nortura", name: "Nortura Proff", phone: "03070" },
    { id: "sup-tine", name: "TINE Partner", phone: "51 37 15 00" },
    { id: "sup-kolonihagen", name: "Kolonihagen", phone: "22 02 79 00" },
  ],
  accounts: [
    { code: "3000", name: "Salgsinntekt catering" },
    { code: "3010", name: "Salgsinntekt matservering" },
    { code: "3020", name: "Salgsinntekt drikke" },
    { code: "4000", name: "Varekost råvarer" },
  ],
  menuGroups: [
    { id: "grp-hot", name: "Varmmat" },
    { id: "grp-meeting", name: "Møtemat" },
    { id: "grp-dessert", name: "Dessert" },
    { id: "grp-production", name: "Produksjon" },
    { id: "grp-package", name: "Pakker" },
  ],
  departments: [
    { id: "dept-hot", name: "Varmkjøkken" },
    { id: "dept-cold", name: "Kaldkjøkken" },
    { id: "dept-bakery", name: "Bakst og konditori" },
    { id: "dept-drink", name: "Drikke" },
  ],
  rawMaterialGroups: [
    { id: "rawgrp-meat", name: "Kjøtt og fjørfe" },
    { id: "rawgrp-dairy", name: "Meieri" },
    { id: "rawgrp-veg", name: "Frukt og grønt" },
    { id: "rawgrp-dry", name: "Tørrvarer" },
    { id: "rawgrp-bakery", name: "Bakst og dessert" },
    { id: "rawgrp-drink", name: "Drikke" },
  ],
  rawMaterials: [
    { id: "raw-chicken", name: "Kyllingfilet", unit: "kg", cost: 88, supplierId: "sup-nortura", groupId: "rawgrp-meat", stockQty: 42, minStockQty: 25, leadTimeDays: 2 },
    { id: "raw-rice", name: "Basmatiris", unit: "kg", cost: 32, supplierId: "sup-bama", groupId: "rawgrp-dry", stockQty: 18, minStockQty: 20, leadTimeDays: 3 },
    { id: "raw-cream", name: "Fløte", unit: "l", cost: 42, supplierId: "sup-tine", groupId: "rawgrp-dairy", stockQty: 36, minStockQty: 18, leadTimeDays: 1 },
    { id: "raw-mushroom", name: "Sopp", unit: "kg", cost: 58, supplierId: "sup-bama", groupId: "rawgrp-veg", stockQty: 9, minStockQty: 12, leadTimeDays: 2 },
    { id: "raw-onion", name: "Løk", unit: "kg", cost: 19, supplierId: "sup-bama", groupId: "rawgrp-veg", stockQty: 30, minStockQty: 15, leadTimeDays: 2 },
    { id: "raw-butter", name: "Smør", unit: "kg", cost: 96, supplierId: "sup-tine", groupId: "rawgrp-dairy", stockQty: 11, minStockQty: 8, leadTimeDays: 1 },
    { id: "raw-roll", name: "Rundstykke", unit: "stk", cost: 6, supplierId: "sup-kolonihagen", groupId: "rawgrp-bakery", stockQty: 180, minStockQty: 120, leadTimeDays: 1 },
    { id: "raw-salad", name: "Salatmix", unit: "kg", cost: 67, supplierId: "sup-bama", groupId: "rawgrp-veg", stockQty: 13, minStockQty: 16, leadTimeDays: 2 },
    { id: "raw-cake", name: "Sjokoladekake", unit: "stk", cost: 14, supplierId: "sup-kolonihagen", groupId: "rawgrp-bakery", stockQty: 80, minStockQty: 40, leadTimeDays: 1 },
    { id: "raw-coffee", name: "Kaffe", unit: "l", cost: 11, supplierId: "sup-kolonihagen", groupId: "rawgrp-drink", stockQty: 52, minStockQty: 30, leadTimeDays: 2 },
  ],
  articles: [
    {
      id: "art-sauce",
      sku: "P-100",
      name: "Kremet soppsaus",
      type: "production",
      menuGroupId: "grp-production",
      departmentId: "dept-hot",
      accountCode: "4000",
      unit: "porsjon",
      image: "",
      recipe: [
        { rawMaterialId: "raw-cream", qty: 0.08 },
        { rawMaterialId: "raw-mushroom", qty: 0.06 },
        { rawMaterialId: "raw-onion", qty: 0.02 },
        { rawMaterialId: "raw-butter", qty: 0.01 },
      ],
      packageItems: [],
    },
    {
      id: "art-chicken-pot",
      sku: "S-210",
      name: "Kyllinggryte med ris",
      type: "sale",
      menuGroupId: "grp-hot",
      departmentId: "dept-hot",
      accountCode: "3010",
      unit: "porsjon",
      image: "",
      recipe: [
        { rawMaterialId: "raw-chicken", qty: 0.18 },
        { rawMaterialId: "raw-rice", qty: 0.12 },
        { rawMaterialId: "raw-cream", qty: 0.08 },
        { rawMaterialId: "raw-mushroom", qty: 0.05 },
        { rawMaterialId: "raw-onion", qty: 0.02 },
      ],
      packageItems: [],
    },
    {
      id: "art-roll",
      sku: "S-120",
      name: "Rundstykke med smør",
      type: "sale",
      menuGroupId: "grp-meeting",
      departmentId: "dept-bakery",
      accountCode: "3000",
      unit: "stk",
      image: "",
      recipe: [
        { rawMaterialId: "raw-roll", qty: 1 },
        { rawMaterialId: "raw-butter", qty: 0.015 },
      ],
      packageItems: [],
    },
    {
      id: "art-salad",
      sku: "S-330",
      name: "Lunsjsalat",
      type: "sale",
      menuGroupId: "grp-meeting",
      departmentId: "dept-cold",
      accountCode: "3010",
      unit: "porsjon",
      image: "",
      recipe: [
        { rawMaterialId: "raw-salad", qty: 0.18 },
        { rawMaterialId: "raw-chicken", qty: 0.08 },
      ],
      packageItems: [],
    },
    {
      id: "art-cake",
      sku: "S-510",
      name: "Sjokoladekake",
      type: "sale",
      menuGroupId: "grp-dessert",
      departmentId: "dept-bakery",
      accountCode: "3000",
      unit: "stk",
      image: "",
      recipe: [{ rawMaterialId: "raw-cake", qty: 1 }],
      packageItems: [],
    },
    {
      id: "art-meeting-pack",
      sku: "PK-10",
      name: "Møtepakke standard",
      type: "package",
      menuGroupId: "grp-package",
      departmentId: "dept-cold",
      accountCode: "3000",
      unit: "person",
      image: "",
      recipe: [],
      packageItems: [
        { articleId: "art-roll", qty: 1 },
        { articleId: "art-cake", qty: 1 },
        { articleId: "art-coffee", qty: 0.25 },
      ],
    },
    {
      id: "art-coffee",
      sku: "S-610",
      name: "Kaffe på kanne",
      type: "sale",
      menuGroupId: "grp-meeting",
      departmentId: "dept-drink",
      accountCode: "3020",
      unit: "l",
      image: "",
      recipe: [{ rawMaterialId: "raw-coffee", qty: 1 }],
      packageItems: [],
    },
  ],
  priceLists: [
    {
      id: "pl-standard",
      name: "Standard catering 2026",
      prices: {
        "art-chicken-pot": 168,
        "art-roll": 29,
        "art-salad": 139,
        "art-cake": 42,
        "art-meeting-pack": 89,
        "art-coffee": 38,
      },
    },
    {
      id: "pl-oslo",
      name: "Oslo Regnskap avtale",
      prices: {
        "art-chicken-pot": 158,
        "art-roll": 27,
        "art-salad": 129,
        "art-cake": 39,
        "art-meeting-pack": 84,
        "art-coffee": 34,
      },
    },
  ],
  customers: [
    { id: "cust-oslo", name: "Oslo Regnskap AS", priceListId: "pl-oslo", phone: "22 10 40 00" },
    { id: "cust-fornebu", name: "Fornebu Tech Park", priceListId: "pl-standard", phone: "67 11 30 00" },
    { id: "cust-aker", name: "Aker Brygge Konferanse", priceListId: "pl-standard", phone: "21 41 20 10" },
  ],
  drivers: [
    { id: "drv-ali", name: "Ali Nilsen", phone: "900 10 210" },
    { id: "drv-ingrid", name: "Ingrid Berg", phone: "901 33 420" },
    { id: "drv-maja", name: "Maja Solheim", phone: "922 78 100" },
  ],
  vehicles: [
    { id: "veh-01", name: "KC-01", plate: "EL 21450", driverId: "drv-ali" },
    { id: "veh-02", name: "KC-02", plate: "DR 55210", driverId: "drv-ingrid" },
    { id: "veh-03", name: "KC-03", plate: "VH 88122", driverId: "drv-maja" },
  ],
  orders: [
    {
      id: "ord-10024",
      orderNo: "10024",
      customerId: "cust-oslo",
      status: "ordre",
      contact: "Lene Bakke",
      invoiceReference: "PO-8841",
      invoiceEmail: "faktura@osloregnskap.no",
      invoiceAddress: "Dronning Eufemias gate 16, 0191 Oslo",
      deliveries: [
        {
          id: "del-10024-a",
          deliveryNo: "10024-1",
          status: "",
          noReturn: false,
          date: today,
          kitchenTime: "08:15",
          driverTime: "09:00",
          eatingTime: "11:30",
          windowStart: "10:45",
          windowEnd: "11:15",
          address: "Dronning Eufemias gate 16, Oslo",
          vehicleId: "",
          notes: "Sett av én glutenfri porsjon.",
          items: [
            { articleId: "art-meeting-pack", qty: 35 },
            { articleId: "art-chicken-pot", qty: 35 },
          ],
        },
        {
          id: "del-10024-b",
          deliveryNo: "10024-2",
          status: "",
          noReturn: false,
          date: today,
          kitchenTime: "13:30",
          driverTime: "14:10",
          eatingTime: "15:30",
          windowStart: "14:50",
          windowEnd: "15:15",
          address: "Dronning Eufemias gate 16, Oslo",
          vehicleId: "",
          notes: "Ettermiddagsmøte.",
          items: [{ articleId: "art-cake", qty: 25 }],
        },
      ],
    },
    {
      id: "ord-10025",
      orderNo: "10025",
      customerId: "cust-fornebu",
      status: "ordre",
      contact: "Tobias Holm",
      invoiceReference: "FT-1206",
      invoiceEmail: "invoice@fornebu-tech.example",
      invoiceAddress: "Oksenøyveien 10, 1366 Lysaker",
      deliveries: [
        {
          id: "del-10025-a",
          deliveryNo: "10025-1",
          status: "",
          noReturn: false,
          date: today,
          kitchenTime: "10:00",
          driverTime: "10:40",
          eatingTime: "12:00",
          windowStart: "11:30",
          windowEnd: "11:50",
          address: "Oksenøyveien 10, Fornebu",
          vehicleId: "",
          notes: "Leveres til resepsjon B.",
          items: [
            { articleId: "art-salad", qty: 58 },
            { articleId: "art-coffee", qty: 18 },
          ],
        },
      ],
    },
    {
      id: "ord-10026",
      orderNo: "10026",
      customerId: "cust-aker",
      status: "tilbud",
      contact: "Mari Eide",
      invoiceReference: "Konferanse mai",
      invoiceEmail: "faktura@akerbryggekonferanse.example",
      invoiceAddress: "Stranden 3, 0250 Oslo",
      deliveries: [
        {
          id: "del-10026-a",
          deliveryNo: "10026-1",
          status: "",
          noReturn: false,
          date: today,
          kitchenTime: "11:10",
          driverTime: "11:45",
          eatingTime: "13:00",
          windowStart: "12:20",
          windowEnd: "12:45",
          address: "Stranden 3, Oslo",
          vehicleId: "",
          notes: "Møterom Fjorden.",
          items: [{ articleId: "art-chicken-pot", qty: 42 }],
        },
      ],
    },
  ],
});

function importedCatalog() {
  return typeof window !== "undefined" ? window.kreativImportData || {} : {};
}

function mergeUniqueById(baseItems = [], importedItems = []) {
  const seen = new Set();
  const merged = [];
  [...baseItems, ...importedItems].forEach((item) => {
    if (!item?.id || seen.has(item.id)) return;
    seen.add(item.id);
    merged.push({ ...item });
  });
  return merged;
}

function mergeImportedPriceLists(basePriceLists = [], importedPriceLists = []) {
  const merged = basePriceLists.map((list) => ({ ...list, prices: { ...(list.prices || {}) } }));
  importedPriceLists.forEach((importedList) => {
    if (!importedList?.id) return;
    const prices = { ...(importedList.prices || {}) };
    const existing = merged.find((list) => list.id === importedList.id);
    if (existing) {
      existing.name = importedList.name || existing.name;
      existing.prices = { ...prices, ...(existing.prices || {}) };
    } else {
      merged.push({ ...importedList, prices });
    }
    const standard = merged.find((list) => list.id === "pl-standard");
    if (standard) {
      standard.prices = { ...prices, ...(standard.prices || {}) };
    }
  });
  return merged;
}

function mergeImportedArticles(baseArticles = [], importedArticles = []) {
  const importedById = new Map(importedArticles.filter((article) => article?.id).map((article) => [article.id, article]));
  const seen = new Set();
  const merged = baseArticles.map((article) => {
    if (!article?.id) return article;
    seen.add(article.id);
    const importedArticle = importedById.get(article.id);
    if (!importedArticle) return { ...article };
    return {
      ...importedArticle,
      ...article,
      menuGroupId: importedArticle.menuGroupId || article.menuGroupId,
      webshopGroupId: importedArticle.webshopGroupId || article.webshopGroupId,
      webshopGroup: importedArticle.webshopGroup || article.webshopGroup,
      webshopCategoryId: importedArticle.webshopCategoryId || article.webshopCategoryId,
      webshopCategory: importedArticle.webshopCategory || article.webshopCategory,
      webshopCategoryOrder: importedArticle.webshopCategoryOrder ?? article.webshopCategoryOrder,
      webshopSubgroupId: importedArticle.webshopSubgroupId || article.webshopSubgroupId,
      webshopSubgroup: importedArticle.webshopSubgroup || article.webshopSubgroup,
      webshopCategoryPath: importedArticle.webshopCategoryPath || article.webshopCategoryPath,
      sourceUrl: importedArticle.sourceUrl || article.sourceUrl,
    };
  });
  importedArticles.forEach((article) => {
    if (!article?.id || seen.has(article.id)) return;
    seen.add(article.id);
    merged.push({ ...article });
  });
  return merged;
}

function mergeImportedCatalog(base) {
  const imported = importedCatalog();
  if (!imported.articles?.length) return base;
  return {
    ...base,
    importMeta: imported.meta || base.importMeta || {},
    suppliers: mergeUniqueById(base.suppliers, imported.suppliers),
    rawMaterialGroups: mergeUniqueById(base.rawMaterialGroups, imported.rawMaterialGroups),
    rawMaterials: mergeUniqueById(base.rawMaterials, imported.rawMaterials),
    menuGroups: mergeUniqueById(base.menuGroups, imported.menuGroups),
    articles: mergeImportedArticles(base.articles, imported.articles),
    priceLists: mergeImportedPriceLists(base.priceLists, imported.priceLists),
  };
}

let state = loadState();
let articleImageDraft = "";

const viewTitles = {
  board: "Kjøretavle",
  webshop: "Webshop",
  orders: "Ordre",
  orderDetail: "Ordre",
  articles: "Artikler",
  recipes: "Oppskrifter",
  rawMaterials: "Råvarer",
  inventory: "Lager",
  production: "Produksjon",
  prices: "Prislister",
  data: "Grunndata",
};

const app = document.querySelector("#app");
const dateInput = document.querySelector("#selected-date");
const toast = document.querySelector("#toast");

function loadState() {
  const defaults = defaultState();
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return normalizeState(defaults);
  try {
    return normalizeState({ ...defaults, ...JSON.parse(raw) });
  } catch {
    return normalizeState(defaults);
  }
}

function normalizeState(next) {
  const defaults = defaultState();
  next = mergeImportedCatalog(next);
  next.rawMaterialGroups ??= defaults.rawMaterialGroups;
  next.rawMaterials = (next.rawMaterials || defaults.rawMaterials).map((raw) => ({
    ...raw,
    groupId: raw.groupId || inferRawGroup(raw.id),
    stockQty: raw.stockQty ?? defaultRawInventory(raw.id).stockQty,
    minStockQty: raw.minStockQty ?? defaultRawInventory(raw.id).minStockQty,
    leadTimeDays: raw.leadTimeDays ?? defaultRawInventory(raw.id).leadTimeDays,
  }));
  next.menuGroups ??= defaults.menuGroups;
  next.departments ??= defaults.departments;
  next.articles = (next.articles || defaults.articles).map((article) => {
    const category = articleWebshopCategory(article, next.menuGroups);
    return {
      ...article,
      departmentId: article.departmentId || inferArticleDepartment(article),
      webshopGroupId: category.id,
      webshopGroup: category.name,
      webshopCategoryId: category.id,
      webshopCategory: category.name,
      webshopCategoryOrder: category.sortOrder,
      webshopSubgroupId: article.webshopSubgroupId || `${category.id}-standard`,
      webshopSubgroup: article.webshopSubgroup || article.webshopCategoryPath || category.name,
      webshopCategoryPath: article.webshopCategoryPath || article.webshopGroup || byId(next.menuGroups, article.menuGroupId)?.name || category.name,
      allergens: article.allergens || "",
      description: article.description || "",
      sourceUrl: article.sourceUrl || "",
    };
  });
  next.accounts ??= defaults.accounts;
  next.priceLists ??= defaults.priceLists;
  next.suppliers ??= defaults.suppliers;
  next.customers ??= defaults.customers;
  next.drivers ??= defaults.drivers;
  next.vehicles ??= defaults.vehicles;
  next.webshop ??= defaults.webshop;
  next.webshop.cart ??= [];
  next.webshop.statusSeen ??= {};
  next.webshop.notificationsEnabled = Boolean(next.webshop.notificationsEnabled);
  next.webshop.activeCategoryId ||= defaultWebshopCategoryId(next);
  if (
    next.webshop.activeCategoryId !== WEBSHOP_ALL_CATEGORY_ID &&
    !webshopCategoriesFromArticles(next.articles, next.menuGroups).some((category) => category.id === next.webshop.activeCategoryId)
  ) {
    next.webshop.activeCategoryId = defaultWebshopCategoryId(next);
  }
  if (next.webshop.customerId && !next.customers.some((customer) => customer.id === next.webshop.customerId)) {
    next.webshop.customerId = "";
  }
  next.productionStatus ??= {};
  next.productionInventoryAdjustments ??= {};
  next.orders = (next.orders || defaults.orders).map((order) => ({
    ...order,
    status: normalizeOrderStatus(order.status),
    invoiceReference: order.invoiceReference || "",
    invoiceEmail: order.invoiceEmail || "",
    invoiceAddress: order.invoiceAddress || "",
    deliveries: (order.deliveries || []).map((delivery, index) => ({
      ...delivery,
      deliveryNo: delivery.deliveryNo || `${order.orderNo}-${index + 1}`,
      status: normalizeDeliveryStatus(delivery.status),
      noReturn: Boolean(delivery.noReturn),
      items: delivery.items?.length ? delivery.items : [{ articleId: "art-chicken-pot", qty: 1 }],
    })),
  }));
  if (!next.orders.some((order) => order.id === next.selectedOrderId)) {
    next.selectedOrderId = next.orders[0]?.id || "";
  }
  const selectedOrder = next.orders.find((order) => order.id === next.selectedOrderId);
  if (selectedOrder && !selectedOrder.deliveries.some((delivery) => delivery.id === next.selectedDeliveryId)) {
    next.selectedDeliveryId = selectedOrder.deliveries[0]?.id || "";
  }
  if (next.activeDeliveryInfoId && !findDeliveryInOrders(next.orders, next.activeDeliveryInfoId).delivery) {
    next.activeDeliveryInfoId = "";
  }
  if (!validViews.includes(next.currentView)) next.currentView = "board";
  if (
    next.selectedProductionDepartmentId !== "all" &&
    !next.departments.some((department) => department.id === next.selectedProductionDepartmentId)
  ) {
    next.selectedProductionDepartmentId = "all";
  }
  return next;
}

function inferArticleWebshopCategory(article) {
  const text = `${article?.name || ""} ${article?.sku || ""} ${article?.menuGroupId || ""}`.toLowerCase();
  if (text.includes("kaffe") || text.includes("te")) return webshopCategoryFallbacks["webcat-varm-drikke"];
  if (text.includes("drikke") || text.includes("juice") || text.includes("vann")) return webshopCategoryFallbacks["webcat-kald-drikke"];
  if (text.includes("kake") || text.includes("dessert")) return webshopCategoryFallbacks["webcat-kaker-og-bakverk"];
  if (text.includes("salat") || text.includes("rundstykke") || text.includes("sandwich")) return webshopCategoryFallbacks["webcat-pasmurt-og-salater"];
  if (article?.type === "package") return webshopCategoryFallbacks["webcat-motemat-og-dagpakker"];
  if (text.includes("suppe")) return webshopCategoryFallbacks["webcat-suppe"];
  return webshopCategoryFallbacks["webcat-gryte-og-middagsretter"];
}

function articleWebshopCategory(article, menuGroups = []) {
  const fallback = inferArticleWebshopCategory(article);
  const importedId = article.webshopCategoryId || article.webshopGroupId;
  const id = importedId?.startsWith("webcat-") ? importedId : fallback.id;
  const menuGroup = byId(menuGroups, id) || byId(menuGroups, article.menuGroupId);
  const categoryFallback = webshopCategoryFallbacks[id] || fallback;
  return {
    id,
    name: id === importedId ? article.webshopCategory || article.webshopGroup || menuGroup?.name || categoryFallback.name : categoryFallback.name,
    sortOrder: article.webshopCategoryOrder ?? menuGroup?.sortOrder ?? categoryFallback.sortOrder ?? 999,
  };
}

function webshopCategoriesFromArticles(articles = [], menuGroups = []) {
  const categories = new Map();
  articles
    .filter((article) => article.type !== "production")
    .forEach((article) => {
      const category = articleWebshopCategory(article, menuGroups);
      if (!categories.has(category.id)) {
        categories.set(category.id, { ...category, articles: [] });
      }
      categories.get(category.id).articles.push(article);
    });
  return [...categories.values()].sort((a, b) => (a.sortOrder - b.sortOrder) || a.name.localeCompare(b.name, "nb"));
}

function defaultWebshopCategoryId(sourceState) {
  return webshopCategoriesFromArticles(sourceState?.articles || [], sourceState?.menuGroups || [])[0]?.id || WEBSHOP_ALL_CATEGORY_ID;
}

function inferArticleDepartment(article) {
  if (article?.id === "art-coffee") return "dept-drink";
  if (article?.menuGroupId === "grp-dessert" || article?.id === "art-roll") return "dept-bakery";
  if (article?.menuGroupId === "grp-meeting" || article?.type === "package") return "dept-cold";
  return "dept-hot";
}

function inferRawGroup(rawId) {
  const map = {
    "raw-chicken": "rawgrp-meat",
    "raw-rice": "rawgrp-dry",
    "raw-cream": "rawgrp-dairy",
    "raw-mushroom": "rawgrp-veg",
    "raw-onion": "rawgrp-veg",
    "raw-butter": "rawgrp-dairy",
    "raw-roll": "rawgrp-bakery",
    "raw-salad": "rawgrp-veg",
    "raw-cake": "rawgrp-bakery",
    "raw-coffee": "rawgrp-drink",
  };
  return map[rawId] || "rawgrp-dry";
}

function defaultRawInventory(rawId) {
  const map = {
    "raw-chicken": { stockQty: 42, minStockQty: 25, leadTimeDays: 2 },
    "raw-rice": { stockQty: 18, minStockQty: 20, leadTimeDays: 3 },
    "raw-cream": { stockQty: 36, minStockQty: 18, leadTimeDays: 1 },
    "raw-mushroom": { stockQty: 9, minStockQty: 12, leadTimeDays: 2 },
    "raw-onion": { stockQty: 30, minStockQty: 15, leadTimeDays: 2 },
    "raw-butter": { stockQty: 11, minStockQty: 8, leadTimeDays: 1 },
    "raw-roll": { stockQty: 180, minStockQty: 120, leadTimeDays: 1 },
    "raw-salad": { stockQty: 13, minStockQty: 16, leadTimeDays: 2 },
    "raw-cake": { stockQty: 80, minStockQty: 40, leadTimeDays: 1 },
    "raw-coffee": { stockQty: 52, minStockQty: 30, leadTimeDays: 2 },
  };
  return map[rawId] || { stockQty: 0, minStockQty: 0, leadTimeDays: 1 };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function byId(collection, id) {
  return collection.find((item) => item.id === id);
}

function findDeliveryInOrders(orders, deliveryId) {
  for (const order of orders || []) {
    const delivery = (order.deliveries || []).find((item) => item.id === deliveryId);
    if (delivery) return { order, delivery };
  }
  return {};
}

function money(value) {
  return new Intl.NumberFormat("nb-NO", {
    style: "currency",
    currency: "NOK",
    maximumFractionDigits: 0,
  }).format(value || 0);
}

function number(value, digits = 1) {
  return new Intl.NumberFormat("nb-NO", {
    maximumFractionDigits: digits,
  }).format(value || 0);
}

function uid(prefix) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function formatDate(value) {
  const parts = String(value || "").split("-");
  if (parts.length !== 3) return escapeHtml(value || "");
  return `${parts[2]}.${parts[1]}.${parts[0]}`;
}

function parseDate(value) {
  const clean = String(value || "").trim();
  const iso = clean.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (iso) return `${iso[1]}-${iso[2]}-${iso[3]}`;
  const norwegian = clean.match(/^(\d{1,2})\.(\d{1,2})\.\s*(\d{4})$/);
  if (!norwegian) return "";
  const day = norwegian[1].padStart(2, "0");
  const month = norwegian[2].padStart(2, "0");
  return `${norwegian[3]}-${month}-${day}`;
}

function formatTime(value) {
  const [hours = "00", minutes = "00"] = String(value || "").split(":");
  return `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}`;
}

function timeChoices(selected) {
  const choices = [];
  for (let hour = 0; hour < 24; hour += 1) {
    for (const minute of [0, 15, 30, 45]) {
      const time = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
      choices.push({ id: time, name: time });
    }
  }
  const selectedTime = formatTime(selected);
  if (selectedTime && !choices.some((choice) => choice.id === selectedTime)) {
    choices.unshift({ id: selectedTime, name: selectedTime });
  }
  return choices;
}

function timeSelect(name, selected) {
  return `<select name="${name}">${options(timeChoices(selected), formatTime(selected))}</select>`;
}

function normalizeOrderStatus(status) {
  const value = String(status || "").toLowerCase().replaceAll("_", "-").trim();
  const aliases = {
    bekreftet: "ordre",
    produksjon: "ordre",
    open: "ordre",
    ordre: "ordre",
    tilbud: "tilbud",
    "ferdig levert": "ferdig-levert",
    "ferdig-levert": "ferdig-levert",
    fakturert: "fakturert",
  };
  return aliases[value] || "ordre";
}

function normalizeDeliveryStatus(status) {
  const value = String(status || "").toLowerCase().replaceAll("_", "-").trim();
  const aliases = {
    klar: "klar",
    ready: "klar",
    lastet: "lastet",
    loaded: "lastet",
    levert: "ferdig-levert",
    "ferdig levert": "ferdig-levert",
    "ferdig-levert": "ferdig-levert",
    returnert: "ferdig-returnert",
    "ferdig returnert": "ferdig-returnert",
    "ferdig-returnert": "ferdig-returnert",
  };
  return aliases[value] || "";
}

function orderStatusLabel(status) {
  return byId(orderStatuses, status)?.name || "Ordre";
}

function deliveryStatusLabel(status) {
  if (status === "open") return "Ikke startet";
  return byId(deliveryStatuses, status)?.name || "Ikke startet";
}

function articleCost(articleId, seen = new Set()) {
  const article = byId(state.articles, articleId);
  if (!article || seen.has(articleId)) return 0;
  seen.add(articleId);

  if (article.type === "package") {
    return article.packageItems.reduce(
      (sum, item) => sum + articleCost(item.articleId, new Set(seen)) * Number(item.qty || 0),
      0,
    );
  }

  return article.recipe.reduce((sum, line) => {
    const raw = byId(state.rawMaterials, line.rawMaterialId);
    return sum + (raw ? Number(raw.cost || 0) * Number(line.qty || 0) : 0);
  }, 0);
}

function articlePrice(articleId, customerId) {
  const customer = byId(state.customers, customerId);
  const priceList = byId(state.priceLists, customer?.priceListId) || byId(state.priceLists, "pl-standard");
  return Number(priceList?.prices?.[articleId] || 0);
}

function deliveryTotals(order, delivery) {
  return delivery.items.reduce(
    (sum, item) => {
      const qty = Number(item.qty || 0);
      sum.revenue += articlePrice(item.articleId, order.customerId) * qty;
      sum.cost += articleCost(item.articleId) * qty;
      return sum;
    },
    { revenue: 0, cost: 0 },
  );
}

function deliveryItemsReady(delivery) {
  const items = delivery.items || [];
  return items.length > 0 && items.every((item) => productionProgress(delivery.date, item.articleId).isComplete);
}

function deliveryDisplayStatus(delivery) {
  const stored = normalizeDeliveryStatus(delivery.status);
  if (delivery.noReturn || stored === "ferdig-returnert") return "ferdig-returnert";
  if (stored === "ferdig-levert" || stored === "lastet") return stored;
  if (deliveryItemsReady(delivery)) return "klar";
  return "open";
}

function deliveryRowClass(delivery) {
  return `delivery-status-${deliveryDisplayStatus(delivery)}`;
}

function deliveryStatusChoices(delivery) {
  return [{ id: "", name: "Ikke startet" }, ...deliveryStatuses];
}

function deliveryStatusSelect(delivery, action = "edit-delivery-status") {
  const current = deliveryDisplayStatus(delivery);
  const selected = current === "open" ? "" : current;
  return `
    <select class="inline-input status-select" data-action="${action}" data-delivery-id="${delivery.id}">
      ${options(deliveryStatusChoices(delivery), selected)}
    </select>
  `;
}

function isDeliveryDelivered(delivery) {
  const status = deliveryDisplayStatus(delivery);
  return status === "ferdig-levert" || status === "ferdig-returnert";
}

function orderDisplayStatus(order) {
  const stored = normalizeOrderStatus(order.status);
  if (stored === "fakturert") return "fakturert";
  if (order.deliveries.length && order.deliveries.every(isDeliveryDelivered)) return "ferdig-levert";
  return stored;
}

function orderRowClass(order) {
  return `order-status-${orderDisplayStatus(order)}`;
}

function allDeliveriesForDate(date) {
  return state.orders
    .flatMap((order) =>
      order.deliveries
        .filter((delivery) => delivery.date === date)
        .map((delivery) => ({ order, delivery })),
    )
    .sort((a, b) => {
      const timeSort = a.delivery.kitchenTime.localeCompare(b.delivery.kitchenTime);
      if (timeSort) return timeSort;
      const driverSort = deliveryDriverId(a.delivery).localeCompare(deliveryDriverId(b.delivery));
      if (driverSort) return driverSort;
      return a.order.orderNo.localeCompare(b.order.orderNo);
    });
}

function findDelivery(deliveryId) {
  return findDeliveryInOrders(state.orders, deliveryId);
}

function deliveryDriverId(delivery) {
  const vehicle = byId(state.vehicles, delivery.vehicleId);
  return vehicle?.driverId || "";
}

function deliveryGroupKey(delivery) {
  return `${formatTime(delivery.kitchenTime)}__${deliveryDriverId(delivery) || "none"}`;
}

function deliveryGroupClasses(rows, row, index) {
  const key = deliveryGroupKey(row.delivery);
  const size = rows.filter((item) => deliveryGroupKey(item.delivery) === key).length;
  if (size < 2) return "";
  const previous = rows[index - 1];
  const next = rows[index + 1];
  return [
    "delivery-group",
    !previous || deliveryGroupKey(previous.delivery) !== key ? "delivery-group-start" : "",
    !next || deliveryGroupKey(next.delivery) !== key ? "delivery-group-end" : "",
  ]
    .filter(Boolean)
    .join(" ");
}

function selectedOrder() {
  return byId(state.orders, state.selectedOrderId) || state.orders[0];
}

function selectedDelivery(order = selectedOrder()) {
  if (!order) return null;
  return order.deliveries.find((delivery) => delivery.id === state.selectedDeliveryId) || order.deliveries[0] || null;
}

function nextOrderNo() {
  const highest = state.orders.reduce((max, order) => Math.max(max, Number(order.orderNo) || 10000), 10000);
  return String(highest + 1);
}

function nextDeliveryNo(order) {
  const prefix = order?.orderNo || nextOrderNo();
  const highest = (order?.deliveries || []).reduce((max, delivery) => {
    const suffix = Number(String(delivery.deliveryNo || "").split("-").pop());
    return Math.max(max, Number.isFinite(suffix) ? suffix : 0);
  }, 0);
  return `${prefix}-${highest + 1}`;
}

function customerInvoiceAddress(customer) {
  return customer ? `${customer.name}\nTelefon ${customer.phone}` : "";
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

function iconRefresh() {
  if (window.lucide) window.lucide.createIcons();
}

function options(collection, selectedId, label = "name") {
  return collection
    .map(
      (item) =>
        `<option value="${item.id}" ${item.id === selectedId ? "selected" : ""}>${escapeHtml(item[label])}</option>`,
    )
    .join("");
}

function vehicleOptions(selectedId) {
  return `<option value="" ${selectedId ? "" : "selected"}>Ikke tildelt</option>${options(state.vehicles, selectedId)}`;
}

function renderShell() {
  const order = selectedOrder();
  document.querySelector("#view-title").textContent =
    state.currentView === "orderDetail" && order ? `Ordre #${order.orderNo}` : viewTitles[state.currentView];
  dateInput.value = state.selectedDate;
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === state.currentView);
  });
}

function render() {
  renderShell();
  const renderers = {
    board: renderBoard,
    webshop: renderWebshop,
    orders: renderOrders,
    orderDetail: renderOrderDetail,
    articles: renderArticles,
    recipes: renderRecipes,
    rawMaterials: renderRawMaterials,
    inventory: renderInventory,
    production: renderProduction,
    prices: renderPrices,
    data: renderData,
  };
  renderers[state.currentView]();
  iconRefresh();
}

function renderBoard() {
  const rows = allDeliveriesForDate(state.selectedDate);
  const totals = rows.reduce(
    (sum, row) => {
      const line = deliveryTotals(row.order, row.delivery);
      sum.revenue += line.revenue;
      sum.cost += line.cost;
      sum.portions += row.delivery.items.reduce((itemSum, item) => itemSum + Number(item.qty || 0), 0);
      return sum;
    },
    { revenue: 0, cost: 0, portions: 0 },
  );
  const vehicles = new Set(rows.map((row) => row.delivery.vehicleId).filter(Boolean));

  app.innerHTML = `
    <div class="metrics">
      <div class="metric"><span>Leveringer</span><strong>${rows.length}</strong></div>
      <div class="metric"><span>Porsjoner/enheter</span><strong>${number(totals.portions, 0)}</strong></div>
      <div class="metric"><span>Omsetning</span><strong>${money(totals.revenue)}</strong></div>
      <div class="metric"><span>Kjøretøy i bruk</span><strong>${vehicles.size}</strong></div>
    </div>

    <section class="section">
      <div class="section-header">
        <div>
          <h2>Dagens ordrer etter kjøkkentid</h2>
          <p>${formatDate(state.selectedDate)} · Kjøkkentid kan endres direkte i tabellen. Kjøretøy henter sjåfør automatisk.</p>
        </div>
        <div class="toolbar">
          <button class="secondary-button" type="button" data-action="new-order-from-board">
            <i data-lucide="plus"></i><span>Ny ordre</span>
          </button>
        </div>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Kjøkken</th>
              <th>Ordre</th>
              <th>Kunde</th>
              <th>Levering</th>
              <th>Varer</th>
              <th>Kjøretøy</th>
              <th>Økonomi</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${
              rows.length
                ? rows.map((row, index) => boardRow(row, deliveryGroupClasses(rows, row, index))).join("")
                : `<tr><td colspan="8"><div class="empty">Ingen leveringer på valgt dato.</div></td></tr>`
            }
          </tbody>
        </table>
      </div>
    </section>
    ${renderDeliveryInfoModal()}
  `;
}

function boardRow({ order, delivery }, groupClass = "") {
  const customer = byId(state.customers, order.customerId);
  const vehicle = byId(state.vehicles, delivery.vehicleId);
  const driver = byId(state.drivers, vehicle?.driverId);
  const totals = deliveryTotals(order, delivery);
  const margin = totals.revenue ? ((totals.revenue - totals.cost) / totals.revenue) * 100 : 0;
  const status = deliveryDisplayStatus(delivery);

  return `
    <tr class="${deliveryRowClass(delivery)} ${groupClass} delivery-click-row" data-action="open-delivery-info" data-delivery-id="${delivery.id}">
      <td>
        <select class="inline-input time-input" data-action="edit-kitchen-time" data-delivery-id="${delivery.id}">
          ${options(timeChoices(delivery.kitchenTime), formatTime(delivery.kitchenTime))}
        </select>
      </td>
      <td>
        <div class="strong-line">#${order.orderNo}</div>
        <div class="muted">Lev. ${escapeHtml(delivery.deliveryNo || "")}</div>
      </td>
      <td>
        <div class="strong-line">${escapeHtml(customer?.name || "Ukjent kunde")}</div>
        <div class="muted">${escapeHtml(order.contact)}</div>
      </td>
      <td>
        <div>Sjåfør ${formatTime(delivery.driverTime)} · Spise ${formatTime(delivery.eatingTime)}</div>
        <div class="muted">${formatTime(delivery.windowStart)}-${formatTime(delivery.windowEnd)} · ${escapeHtml(delivery.address)}</div>
      </td>
      <td>${delivery.items.map(itemLabel).join("<br />")}</td>
      <td>
        <select class="inline-input" data-action="edit-vehicle" data-delivery-id="${delivery.id}">
          ${vehicleOptions(delivery.vehicleId)}
        </select>
        <div class="muted">${escapeHtml(driver?.name || "Ingen sjåfør")}</div>
      </td>
      <td>
        <div>${money(totals.revenue)}</div>
        <div class="muted">DB ${number(margin, 0)}%</div>
      </td>
      <td>
        ${deliveryStatusSelect(delivery)}
        ${delivery.noReturn ? '<div class="muted">Ingen retur</div>' : ""}
      </td>
    </tr>
  `;
}

function itemLabel(item) {
  const article = byId(state.articles, item.articleId);
  return `${number(item.qty, 1)} ${escapeHtml(article?.unit || "stk")} ${escapeHtml(article?.name || "Ukjent artikkel")}`;
}

function renderDeliveryInfoModal() {
  if (!state.activeDeliveryInfoId) return "";
  const { order, delivery } = findDelivery(state.activeDeliveryInfoId);
  if (!order || !delivery) return "";

  const customer = byId(state.customers, order.customerId);
  const vehicle = byId(state.vehicles, delivery.vehicleId);
  const driver = byId(state.drivers, vehicle?.driverId);
  const totals = deliveryTotals(order, delivery);
  const status = deliveryDisplayStatus(delivery);
  const margin = totals.revenue ? ((totals.revenue - totals.cost) / totals.revenue) * 100 : 0;

  return `
    <div class="modal-backdrop" data-action="close-delivery-info">
      <article class="delivery-modal" role="dialog" aria-modal="true" aria-labelledby="delivery-modal-title" data-action="modal-content">
        <div class="modal-header">
          <div>
            <p class="eyebrow">Levering ${escapeHtml(delivery.deliveryNo || "")}</p>
            <h2 id="delivery-modal-title">Ordre #${escapeHtml(order.orderNo)}</h2>
          </div>
          <button class="icon-button" type="button" title="Lukk" data-action="close-delivery-info">
            <i data-lucide="x"></i>
          </button>
        </div>

        <div class="modal-body">
          <div class="modal-summary">
            <span class="status-chip status-${status}">${deliveryStatusLabel(status)}</span>
            ${delivery.noReturn ? '<span class="status-chip status-ferdig-returnert">Ingen retur</span>' : ""}
            <span class="menu-chip">${formatDate(delivery.date)}</span>
          </div>

          <div class="info-grid">
            <div>
              <span>Kunde</span>
              <strong>${escapeHtml(customer?.name || "Ukjent kunde")}</strong>
              <small>${escapeHtml(order.contact || customer?.phone || "")}</small>
            </div>
            <div>
              <span>Faktura</span>
              <strong>${escapeHtml(order.invoiceReference || "Ingen referanse")}</strong>
              <small>${escapeHtml(order.invoiceEmail || "")}</small>
            </div>
            <div>
              <span>Tider</span>
              <strong>Kjøkken ${formatTime(delivery.kitchenTime)}</strong>
              <small>Sjåfør ${formatTime(delivery.driverTime)} · Spise ${formatTime(delivery.eatingTime)}</small>
            </div>
            <div>
              <span>Leveringsvindu</span>
              <strong>${formatTime(delivery.windowStart)}-${formatTime(delivery.windowEnd)}</strong>
              <small>${escapeHtml(delivery.address || "")}</small>
            </div>
            <div>
              <span>Kjøretøy</span>
              <strong>${escapeHtml(vehicle?.name || "Ikke valgt")}</strong>
              <small>${escapeHtml(vehicle?.plate || "")} ${driver?.name ? `· ${escapeHtml(driver.name)}` : ""}</small>
            </div>
            <div>
              <span>Økonomi</span>
              <strong>${money(totals.revenue)}</strong>
              <small>Kost ${money(totals.cost)} · DB ${number(margin, 0)}%</small>
            </div>
          </div>

          <div class="modal-section">
            <h3>Artikler</h3>
            <div class="modal-lines">
              ${delivery.items.map((item) => deliveryModalItem(order, item)).join("") || '<div class="empty small">Ingen artikler på leveringen.</div>'}
            </div>
          </div>

          <div class="modal-section">
            <h3>Notat</h3>
            <p class="modal-note">${escapeHtml(delivery.notes || "Ingen notat.")}</p>
          </div>
        </div>

        <div class="modal-actions">
          <button class="secondary-button" type="button" data-action="open-delivery-order" data-order-id="${order.id}" data-delivery-id="${delivery.id}">
            <i data-lucide="clipboard-list"></i><span>Åpne ordre</span>
          </button>
          <button class="primary-button" type="button" data-action="close-delivery-info">
            <i data-lucide="check"></i><span>Lukk</span>
          </button>
        </div>
      </article>
    </div>
  `;
}

function deliveryModalItem(order, item) {
  const article = byId(state.articles, item.articleId);
  const qty = Number(item.qty || 0);
  const price = articlePrice(item.articleId, order.customerId);
  return `
    <div class="modal-line">
      <div>
        <strong>${escapeHtml(article?.name || "Ukjent artikkel")}</strong>
        <small>${number(qty, 1)} ${escapeHtml(article?.unit || "stk")} · ${escapeHtml(article?.sku || "")}</small>
      </div>
      <div>${money(price * qty)}</div>
    </div>
  `;
}

function webshopCustomer() {
  return byId(state.customers, state.webshop.customerId) || null;
}

function webshopArticles() {
  return orderableArticles()
    .slice()
    .sort((a, b) => (a.webshopCategoryOrder - b.webshopCategoryOrder) || a.name.localeCompare(b.name, "nb"));
}

function webshopCategories() {
  return webshopCategoriesFromArticles(webshopArticles(), state.menuGroups);
}

function activeWebshopCategories(categories) {
  const activeId = state.webshop.activeCategoryId || defaultWebshopCategoryId(state);
  if (activeId === WEBSHOP_ALL_CATEGORY_ID) return categories;
  return categories.filter((category) => category.id === activeId);
}

function webshopSubgroups(articles) {
  const groups = new Map();
  articles.forEach((article) => {
    const id = article.webshopSubgroupId || article.webshopCategoryPath || article.webshopSubgroup || "standard";
    const name = article.webshopSubgroup || article.webshopCategoryPath || article.webshopCategory || "Varer";
    if (!groups.has(id)) {
      groups.set(id, { id, name, articles: [] });
    }
    groups.get(id).articles.push(article);
  });
  return [...groups.values()].sort((a, b) => a.name.localeCompare(b.name, "nb"));
}

function webshopOrders(customerId = state.webshop.customerId) {
  if (!customerId) return [];
  return state.orders.filter((order) => order.customerId === customerId).slice().reverse();
}

function webshopCartTotals(customerId = state.webshop.customerId) {
  return state.webshop.cart.reduce(
    (sum, line) => {
      const qty = Number(line.qty || 0);
      const article = byId(state.articles, line.articleId);
      sum.qty += qty;
      sum.revenue += articlePrice(line.articleId, customerId) * qty;
      sum.cost += article ? articleCost(article.id) * qty : 0;
      return sum;
    },
    { qty: 0, revenue: 0, cost: 0 },
  );
}

function statusSignature(order) {
  const deliveries = order.deliveries
    .map((delivery) => `${delivery.id}:${deliveryDisplayStatus(delivery)}:${delivery.kitchenTime}:${delivery.driverTime}`)
    .join("|");
  return `${orderDisplayStatus(order)}|${deliveries}`;
}

function ensureWebshopStatusSeen(customerId = state.webshop.customerId) {
  if (!customerId) return;
  webshopOrders(customerId).forEach((order) => {
    state.webshop.statusSeen[order.id] ??= statusSignature(order);
  });
}

function notifyWebshopStatusChanges() {
  if (!state.webshop.notificationsEnabled || typeof Notification === "undefined" || Notification.permission !== "granted") {
    return;
  }
  const customerId = state.webshop.customerId;
  if (!customerId) return;
  webshopOrders(customerId).forEach((order) => {
    const signature = statusSignature(order);
    const previous = state.webshop.statusSeen[order.id];
    if (previous && previous !== signature) {
      const status = orderStatusLabel(orderDisplayStatus(order));
      new Notification(`Ordre #${order.orderNo} er oppdatert`, {
        body: `Ny status: ${status}`,
      });
    }
    state.webshop.statusSeen[order.id] = signature;
  });
}

function renderWebshop() {
  const customer = webshopCustomer();
  const totals = webshopCartTotals(customer?.id);
  const categories = webshopCategories();
  const visibleCategories = activeWebshopCategories(categories);
  const activeCategory = categories.find((category) => category.id === state.webshop.activeCategoryId);
  ensureWebshopStatusSeen(customer?.id);

  app.innerHTML = `
    <div class="webshop-layout">
      <section class="section">
        <div class="section-header">
          <div>
            <h2>Kundeportal</h2>
            <p>Opprett kundeforhold, legg inn bestilling og fÃ¸lg status.</p>
          </div>
          <button class="secondary-button" type="button" data-action="enable-webshop-notifications">
            <i data-lucide="bell"></i><span>${state.webshop.notificationsEnabled ? "Varsler aktivert" : "Aktiver varsler"}</span>
          </button>
        </div>

        <div class="webshop-panels">
          <form class="form compact-form" id="webshop-customer-form">
            <h3>Nytt kundeforhold</h3>
            <div class="grid-2">
              <label class="field"><span>Firmanavn/navn</span><input name="name" required /></label>
              <label class="field"><span>Telefon</span><input name="phone" /></label>
            </div>
            <div class="grid-2">
              <label class="field"><span>E-post</span><input type="email" name="email" /></label>
              <label class="field"><span>Fakturaadresse</span><input name="invoiceAddress" /></label>
            </div>
            <div class="form-actions">
              <button class="primary-button" type="submit"><i data-lucide="user-plus"></i><span>Opprett kunde</span></button>
            </div>
          </form>

          <div class="form compact-form">
            <h3>Velg kunde</h3>
            <label class="field">
              <span>Kundeforhold</span>
              <select data-action="select-webshop-customer">
                <option value="">Velg kunde</option>
                ${options(state.customers, customer?.id || "")}
              </select>
            </label>
            <div class="webshop-customer-card">
              ${customer ? `<strong>${escapeHtml(customer.name)}</strong><span>${escapeHtml(customer.email || customer.phone || "Ingen kontaktinfo")}</span>` : `<span class="muted">Opprett eller velg kunde for Ã¥ bestille.</span>`}
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="section-header">
          <div>
            <h2>Bestill varer</h2>
            <p>${escapeHtml(activeCategory?.name || "Velg kategori")}</p>
          </div>
          <div class="metric compact-metric"><span>Handlekurv</span><strong>${number(totals.qty, 0)} / ${money(totals.revenue)}</strong></div>
        </div>
        <div class="webshop-category-grid">
          ${webshopCategoryButton({ id: WEBSHOP_ALL_CATEGORY_ID, name: "Alle", articles: webshopArticles() })}
          ${categories.map(webshopCategoryButton).join("")}
        </div>
        <div class="webshop-groups">
          ${visibleCategories.map(webshopProductCategory).join("")}
        </div>
      </section>

      <section class="section">
        <div class="section-header">
          <div>
            <h2>Handlekurv og levering</h2>
            <p>Ordren opprettes som bekreftet ordre i KC Core.</p>
          </div>
        </div>
        <form class="form" id="webshop-order-form">
          <div class="cart-lines">
            ${state.webshop.cart.length ? state.webshop.cart.map(webshopCartLine).join("") : '<div class="empty small">Handlekurven er tom.</div>'}
          </div>
          <div class="grid-4">
            <label class="field"><span>Leveringsdato</span><input type="date" name="date" value="${state.selectedDate}" required /></label>
            <label class="field"><span>KjÃ¸kkentid</span>${timeSelect("kitchenTime", "10:00")}</label>
            <label class="field"><span>Spisetid</span>${timeSelect("eatingTime", "12:00")}</label>
            <label class="field"><span>Vindu fra</span>${timeSelect("windowStart", "11:30")}</label>
          </div>
          <div class="grid-2">
            <label class="field"><span>Vindu til</span>${timeSelect("windowEnd", "11:50")}</label>
            <label class="field"><span>Leveringsadresse</span><input name="address" value="${escapeHtml(customer?.invoiceAddress || "")}" required /></label>
          </div>
          <label class="field"><span>Notat</span><textarea name="notes" placeholder="Allergihensyn, inngang, kontaktperson, osv."></textarea></label>
          <div class="form-actions">
            <button class="secondary-button" type="button" data-action="clear-webshop-cart"><i data-lucide="trash-2"></i><span>TÃ¸m</span></button>
            <button class="primary-button" type="submit" ${customer && state.webshop.cart.length ? "" : "disabled"}><i data-lucide="send"></i><span>Send bestilling</span></button>
          </div>
        </form>
      </section>

      <section class="section">
        <div class="section-header">
          <div>
            <h2>Mine ordre</h2>
            <p>Status hentes direkte fra KC Core.</p>
          </div>
        </div>
        <div class="order-status-list">
          ${customer ? renderWebshopOrderStatuses(customer.id) : '<div class="empty small">Velg kunde for Ã¥ se ordrestatus.</div>'}
        </div>
      </section>
    </div>
  `;
}

function webshopCategoryButton(category) {
  const activeId = state.webshop.activeCategoryId || defaultWebshopCategoryId(state);
  const isActive = category.id === activeId;
  return `
    <button class="webshop-category-card ${isActive ? "is-active" : ""}" type="button" data-action="select-webshop-category" data-category-id="${category.id}">
      <span>${escapeHtml(category.name)}</span>
      <strong>${number(category.articles.length, 0)}</strong>
    </button>
  `;
}

function webshopProductCategory(category) {
  const subgroups = webshopSubgroups(category.articles);
  return `
    <section class="webshop-product-group">
      <div class="webshop-group-header">
        <h3>${escapeHtml(category.name)}</h3>
        <span>${number(category.articles.length, 0)} varer</span>
      </div>
      ${subgroups.map(webshopProductSubgroup).join("")}
    </section>
  `;
}

function webshopProductSubgroup(group) {
  return `
    <div class="webshop-subgroup">
      <div class="webshop-subgroup-header">
        <h4>${escapeHtml(group.name)}</h4>
        <span>${number(group.articles.length, 0)}</span>
      </div>
      <div class="webshop-products">
        ${group.articles.map(webshopProductCard).join("")}
      </div>
    </div>
  `;
}

function webshopProductCard(article) {
  const price = articlePrice(article.id, state.webshop.customerId);
  return `
    <article class="product-card">
      <div>
        <h3>${escapeHtml(article.name)}</h3>
        <p>${escapeHtml(article.sku)} Â· ${articleTypeLabel(article.type)}</p>
      </div>
      <div class="product-buy">
        <strong>${money(price)}</strong>
        <button class="secondary-button" type="button" data-action="add-webshop-cart" data-article-id="${article.id}">
          <i data-lucide="plus"></i><span>Legg til</span>
        </button>
      </div>
    </article>
  `;
}

function webshopCartLine(line, index) {
  const article = byId(state.articles, line.articleId);
  const price = articlePrice(line.articleId, state.webshop.customerId);
  return `
    <div class="cart-line">
      <div>
        <strong>${escapeHtml(article?.name || "Ukjent artikkel")}</strong>
        <span>${money(price)} per ${escapeHtml(article?.unit || "stk")}</span>
      </div>
      <input class="inline-input unit-input" type="number" min="1" step="1" value="${line.qty}" data-action="edit-webshop-cart-qty" data-index="${index}" />
      <div>${money(price * Number(line.qty || 0))}</div>
      <button class="icon-button" title="Fjern" type="button" data-action="remove-webshop-cart" data-index="${index}">
        <i data-lucide="trash-2"></i>
      </button>
    </div>
  `;
}

function renderWebshopOrderStatuses(customerId) {
  const orders = webshopOrders(customerId);
  if (!orders.length) return '<div class="empty small">Ingen ordre ennÃ¥.</div>';
  return orders
    .map((order) => {
      const orderStatus = orderDisplayStatus(order);
      return `
        <article class="customer-order-card">
          <div class="order-card-header">
            <div>
              <strong>Ordre #${escapeHtml(order.orderNo)}</strong>
              <span>${order.deliveries.length} levering(er)</span>
            </div>
            <span class="status-chip status-${orderStatus}">${orderStatusLabel(orderStatus)}</span>
          </div>
          <div class="delivery-status-list">
            ${order.deliveries.map(webshopDeliveryStatus).join("")}
          </div>
        </article>
      `;
    })
    .join("");
}

function webshopDeliveryStatus(delivery) {
  const status = deliveryDisplayStatus(delivery);
  return `
    <div class="delivery-status-item">
      <div>
        <strong>${escapeHtml(delivery.deliveryNo || "")}</strong>
        <span>${formatDate(delivery.date)} Â· ${formatTime(delivery.windowStart)}-${formatTime(delivery.windowEnd)}</span>
      </div>
      <span class="status-chip status-${status}">${deliveryStatusLabel(status)}</span>
    </div>
  `;
}

function renderOrders() {
  app.innerHTML = `
    <div class="split">
      <section class="section">
        <div class="section-header">
          <div>
            <h2>Ordre</h2>
            <p>Ordrelisten viser ordrehoder. Åpne en ordre for kunde, faktura og leveringer.</p>
          </div>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Ordre</th>
                <th>Kunde</th>
                <th>Status</th>
                <th>Faktura</th>
                <th>Verdi</th>
              </tr>
            </thead>
            <tbody>${state.orders.map(orderRow).join("")}</tbody>
          </table>
        </div>

        <div class="tool-header inner-header">
          <div>
            <h2>Ny ordre</h2>
            <p>Opprett kunde her ved behov, og lag deretter ordrehodet.</p>
          </div>
        </div>
        <form class="form compact-form" id="order-customer-form">
          <h3>Ny kunde</h3>
          <div class="grid-3">
            <label class="field"><span>Kundenavn</span><input name="name" placeholder="Kundenavn" required /></label>
            <label class="field"><span>Telefon</span><input name="phone" placeholder="Telefon" /></label>
            <label class="field"><span>Prisliste</span><select name="priceListId">${options(state.priceLists, "pl-standard")}</select></label>
          </div>
          <div class="form-actions">
            <button class="secondary-button" type="submit"><i data-lucide="user-plus"></i><span>Opprett kunde</span></button>
          </div>
        </form>
        <form class="form" id="order-form">
          <div class="grid-3">
            <label class="field"><span>Kunde</span><select name="customerId">${options(state.customers, state.selectedCustomerId || state.customers[0].id)}</select></label>
            <label class="field"><span>Kontakt</span><input name="contact" placeholder="Kontaktperson" /></label>
            <label class="field"><span>Status</span><select name="status">${options(orderStatuses, "tilbud")}</select></label>
          </div>
          <div class="grid-2">
            <label class="field"><span>Fakturareferanse</span><input name="invoiceReference" placeholder="PO / referanse" /></label>
            <label class="field"><span>Faktura e-post</span><input type="email" name="invoiceEmail" placeholder="faktura@kunde.no" /></label>
          </div>
          <label class="field"><span>Fakturaadresse</span><textarea name="invoiceAddress" placeholder="Fakturaadresse"></textarea></label>
          <div class="form-actions">
            <button class="primary-button" type="submit"><i data-lucide="save"></i><span>Opprett ordre</span></button>
          </div>
        </form>
      </section>
    </div>
  `;
}

function renderOrderDetail() {
  const order = selectedOrder();
  const delivery = selectedDelivery(order);

  app.innerHTML = order
    ? `
      <section class="tool-panel order-detail">
        <div class="section-header">
          <div>
            <h2>Ordredetalj</h2>
            <p>Kunde/faktura ligger på ordre. Artikler og leveringsinfo ligger på hver levering.</p>
          </div>
          <button class="secondary-button" type="button" data-action="back-to-orders">
            <i data-lucide="arrow-left"></i><span>Ordreliste</span>
          </button>
        </div>
        ${renderOrderInfo(order)}
        ${renderDeliveryTabs(order, delivery)}
        ${renderDeliveryForm(order, delivery)}
      </section>
    `
    : `<section class="section"><div class="empty">Ingen ordre valgt.</div></section>`;
}

function orderRow(order) {
  const customer = byId(state.customers, order.customerId);
  const status = orderDisplayStatus(order);
  const totals = order.deliveries.reduce(
    (sum, delivery) => {
      const line = deliveryTotals(order, delivery);
      sum.revenue += line.revenue;
      sum.cost += line.cost;
      return sum;
    },
    { revenue: 0, cost: 0 },
  );
  return `
    <tr class="${order.id === state.selectedOrderId ? "is-selected" : ""} ${orderRowClass(order)}">
      <td>
        <button class="link-button" type="button" data-action="select-order" data-order-id="${order.id}">
          <span class="strong-line">#${order.orderNo}</span>
        </button>
        <div class="muted">${order.deliveries.length} levering(er)</div>
      </td>
      <td>${escapeHtml(customer?.name || "Ukjent kunde")}<div class="muted">${escapeHtml(order.contact || "")}</div></td>
      <td><span class="status-chip status-${status}">${orderStatusLabel(status)}</span></td>
      <td>${escapeHtml(order.invoiceReference || "Ingen referanse")}<div class="muted">${escapeHtml(order.invoiceEmail || "")}</div></td>
      <td><div>${money(totals.revenue)}</div><div class="muted">Kost ${money(totals.cost)}</div></td>
    </tr>
  `;
}

function renderOrderInfo(order) {
  return `
    <div class="tool-header">
      <div>
        <h2>Ordre #${order.orderNo}</h2>
        <p>Kunde og fakturainfo</p>
      </div>
      <button class="secondary-button" type="button" data-action="add-delivery" data-order-id="${order.id}">
        <i data-lucide="plus"></i><span>Ny levering</span>
      </button>
    </div>
    <form class="form order-master" id="order-info-form">
      <input type="hidden" name="orderId" value="${order.id}" />
      <div class="grid-3">
        <label class="field"><span>Kunde</span><select name="customerId">${options(state.customers, order.customerId)}</select></label>
        <label class="field"><span>Kontakt</span><input name="contact" value="${escapeHtml(order.contact || "")}" /></label>
        <label class="field"><span>Status</span><select name="status">${options(orderStatuses, orderDisplayStatus(order))}</select></label>
      </div>
      <div class="grid-2">
        <label class="field"><span>Fakturareferanse</span><input name="invoiceReference" value="${escapeHtml(order.invoiceReference || "")}" /></label>
        <label class="field"><span>Faktura e-post</span><input type="email" name="invoiceEmail" value="${escapeHtml(order.invoiceEmail || "")}" /></label>
      </div>
      <label class="field"><span>Fakturaadresse</span><textarea name="invoiceAddress">${escapeHtml(order.invoiceAddress || "")}</textarea></label>
      <div class="form-actions">
        <button class="primary-button" type="submit"><i data-lucide="save"></i><span>Lagre ordre</span></button>
      </div>
    </form>
  `;
}

function renderDeliveryTabs(order, activeDelivery) {
  return `
    <div class="delivery-tabs" role="tablist" aria-label="Leveringer">
      ${
        order.deliveries.length
          ? order.deliveries
              .map(
                (delivery) => `
                  <button class="tab-button ${delivery.id === activeDelivery?.id ? "is-active" : ""}" type="button" data-action="select-delivery" data-delivery-id="${delivery.id}">
                    <span>${escapeHtml(delivery.deliveryNo || "")}</span>
                    <small>${formatDate(delivery.date)}</small>
                  </button>
                `,
              )
              .join("")
          : `<span class="muted">Ingen leveringer ennå.</span>`
      }
    </div>
  `;
}

function renderDeliveryForm(order, delivery) {
  if (!delivery) {
    return `<div class="empty">Legg til en levering for å registrere artikler og leveringsinfo.</div>`;
  }

  return `
    <form class="form" id="delivery-form">
      <input type="hidden" name="orderId" value="${order.id}" />
      <input type="hidden" name="deliveryId" value="${delivery.id}" />
      <div class="grid-3">
        <label class="field"><span>Leveringsnummer</span><input name="deliveryNo" value="${escapeHtml(delivery.deliveryNo || "")}" required /></label>
        <label class="field"><span>Leveringsdato</span><input name="date" inputmode="numeric" placeholder="dd.mm.yyyy" value="${formatDate(delivery.date)}" /></label>
        <label class="field"><span>Status</span><select name="deliveryStatus">${options(deliveryStatusChoices(delivery), deliveryDisplayStatus(delivery) === "open" ? "" : deliveryDisplayStatus(delivery))}</select></label>
      </div>
      <div class="grid-4">
        <label class="field"><span>Kjøkkentid</span>${timeSelect("kitchenTime", delivery.kitchenTime)}</label>
        <label class="field"><span>Sjåførtid</span>${timeSelect("driverTime", delivery.driverTime)}</label>
        <label class="field"><span>Spisetid</span>${timeSelect("eatingTime", delivery.eatingTime)}</label>
        <label class="field"><span>Vindu fra</span>${timeSelect("windowStart", delivery.windowStart)}</label>
      </div>
      <div class="grid-2">
        <label class="field"><span>Vindu til</span>${timeSelect("windowEnd", delivery.windowEnd)}</label>
        <label class="field"><span>Leveringsadresse</span><input name="address" value="${escapeHtml(delivery.address)}" required /></label>
      </div>
      <label class="done-toggle delivery-check ${delivery.noReturn ? "is-ready" : ""}">
        <input type="checkbox" name="noReturn" ${delivery.noReturn ? "checked" : ""} />
        <span>Ingen retur</span>
      </label>
      <div>
        <div class="line-header">
          <h3>Artikler på levering</h3>
          <button class="secondary-button" type="button" data-action="add-delivery-item">
            <i data-lucide="plus"></i><span>Legg til artikkel</span>
          </button>
        </div>
        <div class="delivery-items">${deliveryItemRows(delivery)}</div>
      </div>
      <label class="field"><span>Leveringsnotat</span><textarea name="notes">${escapeHtml(delivery.notes || "")}</textarea></label>
      <div class="form-actions">
        <button class="primary-button" type="submit"><i data-lucide="save"></i><span>Lagre levering</span></button>
      </div>
    </form>
  `;
}

function deliveryItemRows(delivery) {
  if (!delivery.items.length) {
    return `<div class="empty small">Ingen artikler på denne leveringen.</div>`;
  }

  return delivery.items
    .map(
      (line, index) => `
        <div class="delivery-item-row" data-delivery-item-index="${index}">
          <label class="field">
            <span>Artikkel</span>
            <select name="deliveryArticle${index}">
              ${options(orderableArticles(), line.articleId)}
            </select>
          </label>
          <label class="field">
            <span>Antall</span>
            <input type="number" min="0" step="0.01" name="deliveryQty${index}" value="${line.qty}" />
          </label>
          <button class="icon-button" title="Fjern artikkel" type="button" data-action="remove-delivery-item" data-index="${index}">
            <i data-lucide="trash-2"></i>
          </button>
        </div>
      `,
    )
    .join("");
}

function updateDeliveryFromForm(form) {
  const data = new FormData(form);
  const order = byId(state.orders, data.get("orderId"));
  const delivery = order?.deliveries.find((item) => item.id === data.get("deliveryId"));
  if (!delivery) return {};

  delivery.deliveryNo = data.get("deliveryNo");
  delivery.date = parseDate(data.get("date")) || delivery.date;
  delivery.kitchenTime = data.get("kitchenTime");
  delivery.driverTime = data.get("driverTime");
  delivery.eatingTime = data.get("eatingTime");
  delivery.windowStart = data.get("windowStart");
  delivery.windowEnd = data.get("windowEnd");
  delivery.address = data.get("address");
  delivery.notes = data.get("notes");
  delivery.noReturn = data.get("noReturn") === "on";
  delivery.status = delivery.noReturn ? "ferdig-returnert" : normalizeDeliveryStatus(data.get("deliveryStatus"));
  if (delivery.noReturn && delivery.status !== "ferdig-returnert") {
    delivery.status = "ferdig-returnert";
  }
  delivery.items = [...form.querySelectorAll("[data-delivery-item-index]")]
    .map((row) => {
      const index = row.dataset.deliveryItemIndex;
      return {
        articleId: data.get(`deliveryArticle${index}`),
        qty: Number(data.get(`deliveryQty${index}`) || 0),
      };
    })
    .filter((line) => line.articleId && line.qty > 0);

  return { order, delivery };
}

function orderableArticles() {
  return state.articles.filter((article) => article.type !== "production");
}

function renderArticles() {
  const selected = byId(state.articles, state.selectedArticleId) || state.articles[0];
  articleImageDraft = selected?.image || "";

  app.innerHTML = `
    <div class="split">
      <section class="section">
        <div class="section-header">
          <div>
            <h2>Artikler</h2>
            <p>Klikk på en artikkel for å åpne oppskriften. Bruk redigeringsknappen for artikkelkortet.</p>
          </div>
          <div class="toolbar">
            <button class="secondary-button" type="button" data-action="new-article">
              <i data-lucide="plus"></i><span>Ny artikkel</span>
            </button>
          </div>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Vare</th>
                <th>Type</th>
                <th>Avdeling</th>
                <th>Menygruppe</th>
                <th>NS-konto</th>
                <th>Kost</th>
                <th>Standardpris</th>
                <th></th>
              </tr>
            </thead>
            <tbody>${state.articles.map(articleRow).join("")}</tbody>
          </table>
        </div>
      </section>

      <section class="tool-panel">
        <div class="tool-header">
          <div>
            <h2>Artikkelkort</h2>
            <p>Endringer lagres lokalt i nettleseren.</p>
          </div>
        </div>
        ${renderArticleForm(selected)}
      </section>
    </div>
  `;
}

function articleRow(article) {
  const group = byId(state.menuGroups, article.menuGroupId);
  const department = byId(state.departments, article.departmentId);
  const account = state.accounts.find((item) => item.code === article.accountCode);
  const standardPrice = byId(state.priceLists, "pl-standard")?.prices?.[article.id] || 0;
  return `
    <tr class="${article.id === state.selectedArticleId ? "is-selected" : ""}">
      <td>
        <button class="link-button" type="button" data-action="open-recipe" data-article-id="${article.id}">
          <span class="strong-line">${escapeHtml(article.name)}</span>
        </button>
        <div class="muted">${escapeHtml(article.sku)} · ${escapeHtml(article.unit)}</div>
      </td>
      <td><span class="type-chip ${article.type}">${articleTypeLabel(article.type)}</span></td>
      <td><span class="menu-chip">${escapeHtml(department?.name || "Uten avdeling")}</span></td>
      <td><span class="menu-chip">${escapeHtml(group?.name || "Uten gruppe")}</span></td>
      <td>${escapeHtml(article.accountCode)}<div class="muted">${escapeHtml(account?.name || "")}</div></td>
      <td>${money(articleCost(article.id))}</td>
      <td>${article.type === "production" ? '<span class="muted">Ikke solgt</span>' : money(standardPrice)}</td>
      <td>
        <button class="icon-button" title="Rediger artikkel" type="button" data-action="select-article" data-article-id="${article.id}">
          <i data-lucide="pencil"></i>
        </button>
      </td>
    </tr>
  `;
}

function articleTypeLabel(type) {
  return {
    sale: "Salgsartikkel",
    production: "Produksjon",
    package: "Pakke",
  }[type];
}

function renderArticleForm(article) {
  if (!article) return `<div class="empty">Ingen artikkel valgt.</div>`;

  return `
    <form class="form" id="article-form">
      <input type="hidden" name="id" value="${article.id}" />
      <div class="image-preview" id="image-preview">
        ${
          article.image
            ? `<img src="${article.image}" alt="${escapeHtml(article.name)}" />`
            : `<span>${escapeHtml(article.sku)}</span>`
        }
      </div>
      <label class="field">
        <span>Bilde</span>
        <input type="file" accept="image/*" data-action="article-image" />
      </label>
      <div class="grid-2">
        <label class="field"><span>Navn</span><input name="name" value="${escapeHtml(article.name)}" required /></label>
        <label class="field"><span>Varenr.</span><input name="sku" value="${escapeHtml(article.sku)}" required /></label>
      </div>
      <div class="grid-2">
        <label class="field">
          <span>Type</span>
          <select name="type">
            <option value="sale" ${article.type === "sale" ? "selected" : ""}>Salgsartikkel</option>
            <option value="production" ${article.type === "production" ? "selected" : ""}>Produksjonsartikkel</option>
            <option value="package" ${article.type === "package" ? "selected" : ""}>Pakke</option>
          </select>
        </label>
        <label class="field"><span>Enhet</span><input name="unit" value="${escapeHtml(article.unit)}" /></label>
      </div>
      <div class="grid-2">
        <label class="field"><span>Menygruppe</span><select name="menuGroupId">${options(state.menuGroups, article.menuGroupId)}</select></label>
        <label class="field"><span>Avdeling</span><select name="departmentId">${options(state.departments, article.departmentId)}</select></label>
      </div>
      <div class="grid-2">
        <label class="field">
          <span>NS-konto</span>
          <select name="accountCode">
            ${state.accounts
              .map(
                (account) =>
                  `<option value="${account.code}" ${account.code === article.accountCode ? "selected" : ""}>${account.code} ${escapeHtml(account.name)}</option>`,
              )
              .join("")}
          </select>
        </label>
      </div>
      <div class="grid-2">
        <label class="field"><span>Standardpris</span><input type="number" min="0" step="1" name="standardPrice" value="${byId(state.priceLists, "pl-standard")?.prices?.[article.id] || 0}" /></label>
        <div class="field"><span>Beregnet kost</span><input value="${money(articleCost(article.id))}" disabled /></div>
      </div>
      <div class="form-actions">
        <button class="primary-button" type="submit"><i data-lucide="save"></i><span>Lagre artikkel</span></button>
      </div>
    </form>
  `;
}

function renderRecipes() {
  const selected = byId(state.articles, state.selectedArticleId) || state.articles[0];
  app.innerHTML = `
    <div class="split">
      <section class="section">
        <div class="section-header">
          <div>
            <h2>Oppskrifter</h2>
            <p>Velg artikkel for å redigere råvarelinjer eller pakkeinnhold.</p>
          </div>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Artikkel</th>
                <th>Type</th>
                <th>Linjer</th>
                <th>Kost</th>
              </tr>
            </thead>
            <tbody>${state.articles.map(recipeArticleRow).join("")}</tbody>
          </table>
        </div>
      </section>

      <section class="tool-panel">
        <div class="tool-header">
          <div>
            <h2>${escapeHtml(selected?.name || "Oppskrift")}</h2>
            <p>Kost beregnes automatisk fra råvarer og pakkeinnhold.</p>
          </div>
        </div>
        ${renderRecipeForm(selected)}
      </section>
    </div>
  `;
}

function recipeArticleRow(article) {
  const lineCount = article.type === "package" ? article.packageItems.length : article.recipe.length;
  return `
    <tr class="${article.id === state.selectedArticleId ? "is-selected" : ""}">
      <td>
        <button class="link-button" type="button" data-action="open-recipe" data-article-id="${article.id}">
          <span class="strong-line">${escapeHtml(article.name)}</span>
        </button>
        <div class="muted">${escapeHtml(article.sku)} · ${escapeHtml(article.unit)}</div>
      </td>
      <td><span class="type-chip ${article.type}">${articleTypeLabel(article.type)}</span></td>
      <td>${lineCount}</td>
      <td>${money(articleCost(article.id))}</td>
    </tr>
  `;
}

function renderRecipeForm(article) {
  if (!article) return `<div class="empty">Ingen artikkel valgt.</div>`;

  return `
    <form class="form" id="recipe-form">
      <input type="hidden" name="id" value="${article.id}" />
      <div class="grid-2">
        <div class="field"><span>Artikkeltype</span><input value="${articleTypeLabel(article.type)}" disabled /></div>
        <div class="field"><span>Beregnet kost</span><input value="${money(articleCost(article.id))}" disabled /></div>
      </div>
      <div>
        <h3>Oppskrift råvarer</h3>
        <div class="grid-2">${recipeRows(article)}</div>
      </div>
      <div>
        <h3>Pakkeinnhold</h3>
        <div class="grid-2">${packageRows(article)}</div>
      </div>
      <div class="form-actions">
        <button class="primary-button" type="submit"><i data-lucide="save"></i><span>Lagre oppskrift</span></button>
      </div>
    </form>
  `;
}

function recipeRows(article) {
  const lines = [...article.recipe];
  while (lines.length < 4) lines.push({ rawMaterialId: "", qty: "" });

  return lines
    .slice(0, 4)
    .map(
      (line, index) => `
        <label class="field">
          <span>Råvare ${index + 1}</span>
          <select name="recipeRaw${index}">
            <option value="">Ikke brukt</option>
            ${options(state.rawMaterials, line.rawMaterialId)}
          </select>
        </label>
        <label class="field">
          <span>Mengde</span>
          <input type="number" min="0" step="0.001" name="recipeQty${index}" value="${line.qty}" />
        </label>
      `,
    )
    .join("");
}

function packageRows(article) {
  const lines = [...article.packageItems];
  while (lines.length < 3) lines.push({ articleId: "", qty: "" });
  const packageChoices = state.articles.filter((item) => item.id !== article.id && item.type !== "package");

  return lines
    .slice(0, 3)
    .map(
      (line, index) => `
        <label class="field">
          <span>Artikkel ${index + 1}</span>
          <select name="packageArticle${index}">
            <option value="">Ikke brukt</option>
            ${options(packageChoices, line.articleId)}
          </select>
        </label>
        <label class="field">
          <span>Antall</span>
          <input type="number" min="0" step="0.01" name="packageQty${index}" value="${line.qty}" />
        </label>
      `,
    )
    .join("");
}

function sortedRawMaterials() {
  return [...state.rawMaterials].sort((a, b) => {
    const groupA = byId(state.rawMaterialGroups, a.groupId)?.name || "";
    const groupB = byId(state.rawMaterialGroups, b.groupId)?.name || "";
    return `${groupA}${a.name}`.localeCompare(`${groupB}${b.name}`, "nb");
  });
}

function rawDemandForDate(date) {
  const totals = new Map();
  allDeliveriesForDate(date).forEach(({ delivery }) => {
    delivery.items.forEach((item) => addRawDemandForArticle(item.articleId, Number(item.qty || 0), totals));
  });
  return totals;
}

function rawDemandForProductionArticle(date, articleId) {
  const qty = productionNeeds(date).find((line) => line.article.id === articleId)?.qty || 0;
  const totals = new Map();
  addRawDemandForArticle(articleId, qty, totals);
  return totals;
}

function addRawDemandForArticle(articleId, qty, totals, seen = new Set()) {
  const article = byId(state.articles, articleId);
  if (!article || seen.has(articleId)) return;
  seen.add(articleId);

  if (article.type === "package") {
    article.packageItems.forEach((item) => {
      addRawDemandForArticle(item.articleId, qty * Number(item.qty || 0), totals, new Set(seen));
    });
    return;
  }

  article.recipe.forEach((line) => {
    totals.set(line.rawMaterialId, (totals.get(line.rawMaterialId) || 0) + Number(line.qty || 0) * qty);
  });
}

function productionAdjustmentKey(date, articleId) {
  return `${date}__${articleId}`;
}

function adjustRawStock(rawId, delta) {
  const raw = byId(state.rawMaterials, rawId);
  if (!raw) return;
  raw.stockQty = Number(raw.stockQty || 0) + delta;
}

function applyProductionInventoryAdjustment(date, articleId, isComplete) {
  const key = productionAdjustmentKey(date, articleId);
  const existing = state.productionInventoryAdjustments[key];

  if (isComplete && !existing) {
    const demand = rawDemandForProductionArticle(date, articleId);
    const adjustment = Object.fromEntries(demand.entries());
    Object.entries(adjustment).forEach(([rawId, qty]) => adjustRawStock(rawId, -Number(qty || 0)));
    state.productionInventoryAdjustments[key] = adjustment;
    return;
  }

  if (!isComplete && existing) {
    Object.entries(existing).forEach(([rawId, qty]) => adjustRawStock(rawId, Number(qty || 0)));
    delete state.productionInventoryAdjustments[key];
  }
}

function hasProductionInventoryAdjustment(date, articleId) {
  return Boolean(state.productionInventoryAdjustments?.[productionAdjustmentKey(date, articleId)]);
}

function inventoryStatus(raw, demand = 0) {
  const stock = Number(raw.stockQty || 0);
  const minimum = Number(raw.minStockQty || 0);
  const projected = stock - demand;

  if (stock <= minimum) {
    return { className: "low", label: "Under minimum", orderQty: Math.max(0, minimum - stock) };
  }

  if (projected <= minimum) {
    return { className: "open", label: "Bestill snart", orderQty: Math.max(0, minimum - projected) };
  }

  return { className: "ready", label: "OK", orderQty: 0 };
}

function renderInventory() {
  const demand = rawDemandForDate(state.selectedDate);
  const raws = sortedRawMaterials();
  const stockValue = raws.reduce((sum, raw) => sum + Number(raw.stockQty || 0) * Number(raw.cost || 0), 0);
  const belowMinimum = raws.filter((raw) => inventoryStatus(raw, demand.get(raw.id) || 0).className === "low").length;
  const shouldOrder = raws.filter((raw) => inventoryStatus(raw, demand.get(raw.id) || 0).orderQty > 0).length;

  app.innerHTML = `
    <div class="metrics">
      <div class="metric"><span>Råvarer</span><strong>${raws.length}</strong></div>
      <div class="metric"><span>Lagerverdi</span><strong>${money(stockValue)}</strong></div>
      <div class="metric"><span>Under minimum</span><strong>${belowMinimum}</strong></div>
      <div class="metric"><span>Bør bestilles</span><strong>${shouldOrder}</strong></div>
    </div>

    <section class="section">
      <div class="section-header">
        <div>
          <h2>Varebeholdning råvarer</h2>
          <p>På lager, minste beholdning og bestillingstid redigeres pr. råvare.</p>
        </div>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Råvare</th>
              <th>Gruppe</th>
              <th>På lager</th>
              <th>Min.</th>
              <th>Bestillingstid</th>
              <th>Dagens behov</th>
              <th>Status</th>
              <th>Anbefalt bestilling</th>
            </tr>
          </thead>
          <tbody>${raws.map((raw) => inventoryRow(raw, demand.get(raw.id) || 0)).join("")}</tbody>
        </table>
      </div>
    </section>
  `;
}

function inventoryRow(raw, demand) {
  const group = byId(state.rawMaterialGroups, raw.groupId);
  const status = inventoryStatus(raw, demand);
  return `
    <tr>
      <td><div class="strong-line">${escapeHtml(raw.name)}</div><div class="muted">${money(raw.cost)} per ${escapeHtml(raw.unit)}</div></td>
      <td><span class="menu-chip">${escapeHtml(group?.name || "Uten gruppe")}</span></td>
      <td><input class="inline-input price-input" type="number" min="0" step="0.01" value="${raw.stockQty}" data-action="edit-inventory" data-id="${raw.id}" data-field="stockQty" /> ${escapeHtml(raw.unit)}</td>
      <td><input class="inline-input price-input" type="number" min="0" step="0.01" value="${raw.minStockQty}" data-action="edit-inventory" data-id="${raw.id}" data-field="minStockQty" /> ${escapeHtml(raw.unit)}</td>
      <td><input class="inline-input days-input" type="number" min="0" step="1" value="${raw.leadTimeDays}" data-action="edit-inventory" data-id="${raw.id}" data-field="leadTimeDays" /> dager</td>
      <td>${number(demand, 2)} ${escapeHtml(raw.unit)}</td>
      <td><span class="status-chip ${status.className}">${status.label}</span></td>
      <td>${status.orderQty > 0 ? `${number(status.orderQty, 2)} ${escapeHtml(raw.unit)}` : '<span class="muted">Ingen</span>'}</td>
    </tr>
  `;
}

function renderProduction() {
  const needs = productionNeeds(state.selectedDate, state.selectedProductionDepartmentId);
  app.innerHTML = `
    <section class="section">
      <div class="section-header">
        <div>
          <h2>Produksjonsliste</h2>
          <p>Summerer dagens ordre og kan filtreres pr. avdeling.</p>
        </div>
        <label class="field">
          <span>Avdeling</span>
          <select data-action="select-production-department">
            <option value="all" ${state.selectedProductionDepartmentId === "all" ? "selected" : ""}>Alle avdelinger</option>
            ${options(state.departments, state.selectedProductionDepartmentId)}
          </select>
        </label>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Artikkel</th>
              <th>Mengde</th>
              <th>Ferdig</th>
              <th>Status</th>
              <th>Råvarebehov</th>
            </tr>
          </thead>
          <tbody>
            ${
              needs.length
                ? needs.map(productionRow).join("")
                : `<tr><td colspan="5"><div class="empty">Ingen produksjon på valgt dato.</div></td></tr>`
            }
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function productionNeeds(date, departmentId = "all") {
  const totals = new Map();
  allDeliveriesForDate(date).forEach(({ delivery }) => {
    delivery.items.forEach((item) => {
      const article = byId(state.articles, item.articleId);
      if (departmentId !== "all" && article?.departmentId !== departmentId) return;
      totals.set(item.articleId, (totals.get(item.articleId) || 0) + Number(item.qty || 0));
    });
  });
  return [...totals.entries()]
    .map(([articleId, qty]) => ({ article: byId(state.articles, articleId), qty }))
    .filter((line) => line.article)
    .sort((a, b) => a.article.name.localeCompare(b.article.name, "nb"));
}

function productionProgress(date, articleId) {
  const needed = productionNeeds(date).find((line) => line.article.id === articleId)?.qty || 0;
  const stored = state.productionStatus?.[date]?.[articleId];
  const legacyProduced = Number(stored || 0);
  const isComplete =
    stored === true || stored === "true" || (typeof stored === "number" && needed > 0 && legacyProduced >= needed);
  return {
    needed,
    isComplete,
  };
}

function productionRow({ article, qty }) {
  const progress = productionProgress(state.selectedDate, article.id);
  const stockAdjusted = hasProductionInventoryAdjustment(state.selectedDate, article.id);
  return `
    <tr>
      <td>
        <div class="strong-line">${escapeHtml(article.name)}</div>
        <div class="muted">${escapeHtml(article.sku)} · ${articleTypeLabel(article.type)}</div>
      </td>
      <td>${number(qty, 1)} ${escapeHtml(article.unit)}</td>
      <td>
        <label class="done-toggle ${progress.isComplete ? "is-ready" : ""}">
          <input type="checkbox" ${progress.isComplete ? "checked" : ""} data-action="toggle-produced" data-article-id="${article.id}" />
          <span>${progress.isComplete ? "Ferdig" : "Ikke ferdig"}</span>
        </label>
      </td>
      <td>
        <span class="status-chip ${progress.isComplete ? "ready" : "open"}">${progress.isComplete ? "Ferdig" : "Åpen"}</span>
        <div class="muted">${stockAdjusted ? "Lager trukket" : "Lager ikke trukket"}</div>
      </td>
      <td>${rawNeedLabels(article, qty)}</td>
    </tr>
  `;
}

function rawNeedLabels(article, qty) {
  if (article.type === "package") {
    const rawTotals = new Map();
    article.packageItems.forEach((item) => {
      const child = byId(state.articles, item.articleId);
      child?.recipe.forEach((line) => {
        rawTotals.set(
          line.rawMaterialId,
          (rawTotals.get(line.rawMaterialId) || 0) + Number(line.qty || 0) * Number(item.qty || 0) * qty,
        );
      });
    });
    return [...rawTotals.entries()]
      .map(([rawId, amount]) => rawLabel(rawId, amount))
      .join("<br />");
  }

  return article.recipe
    .map((line) => rawLabel(line.rawMaterialId, Number(line.qty || 0) * qty))
    .join("<br />");
}

function rawLabel(rawId, amount) {
  const raw = byId(state.rawMaterials, rawId);
  return raw ? `${number(amount, 2)} ${escapeHtml(raw.unit)} ${escapeHtml(raw.name)}` : "";
}

function renderPrices() {
  const customer = byId(state.customers, state.selectedCustomerId) || state.customers[0];
  const priceList = byId(state.priceLists, customer.priceListId);

  app.innerHTML = `
    <section class="section">
      <div class="section-header">
        <div>
          <h2>Kundespesifikke prislister</h2>
          <p>Hver kunde peker på en prisliste. Pris settes her, kost beregnes fra oppskrift.</p>
        </div>
        <label class="field">
          <span>Kunde</span>
          <select data-action="select-customer">${options(state.customers, customer.id)}</select>
        </label>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Artikkel</th>
              <th>Type</th>
              <th>Kost</th>
              <th>Pris ${escapeHtml(priceList?.name || "")}</th>
              <th>DB</th>
            </tr>
          </thead>
          <tbody>${orderableArticles().map((article) => priceRow(article, priceList)).join("")}</tbody>
        </table>
      </div>
    </section>
  `;
}

function priceRow(article, priceList) {
  const price = Number(priceList?.prices?.[article.id] || 0);
  const cost = articleCost(article.id);
  const margin = price ? ((price - cost) / price) * 100 : 0;
  return `
    <tr>
      <td><div class="strong-line">${escapeHtml(article.name)}</div><div class="muted">${escapeHtml(article.sku)}</div></td>
      <td><span class="type-chip ${article.type}">${articleTypeLabel(article.type)}</span></td>
      <td>${money(cost)}</td>
      <td>
        <input class="inline-input price-input" type="number" min="0" step="1" value="${price}" data-action="edit-price" data-price-list-id="${priceList.id}" data-article-id="${article.id}" />
      </td>
      <td>${number(margin, 0)}%</td>
    </tr>
  `;
}

function renderRawMaterials() {
  const rawMaterials = sortedRawMaterials();

  app.innerHTML = `
    <div class="view-stack">
      <section class="section">
        <div class="section-header">
          <div>
            <h2>Råvaregrupper</h2>
            <p>Råvarer fordeles i grupper som brukes i oppskrifter og innkjøp.</p>
          </div>
        </div>
        <form class="inline-create" id="raw-group-form">
          <label class="field"><span>Ny gruppe</span><input name="name" placeholder="F.eks. Kolonial" required /></label>
          <button class="secondary-button" type="submit"><i data-lucide="plus"></i><span>Legg til</span></button>
        </form>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Gruppe</th><th>Råvarer</th></tr></thead>
            <tbody>${state.rawMaterialGroups.map(rawGroupRow).join("")}</tbody>
          </table>
        </div>
      </section>

      <section class="section">
        <div class="section-header">
          <div>
            <h2>Råvarer</h2>
            <p>Endringer i råvarekost slår direkte inn i beregnet artikkelkost.</p>
          </div>
        </div>
        <form class="inline-create" id="raw-material-form">
          <label class="field"><span>Navn</span><input name="name" placeholder="Råvare" required /></label>
          <label class="field"><span>Enhet</span><input name="unit" placeholder="kg" required /></label>
          <label class="field"><span>Kost</span><input name="cost" type="number" min="0" step="0.01" value="0" /></label>
          <label class="field"><span>Gruppe</span><select name="groupId">${options(state.rawMaterialGroups, state.rawMaterialGroups[0]?.id)}</select></label>
          <label class="field"><span>Leverandør</span><select name="supplierId">${options(state.suppliers, state.suppliers[0]?.id)}</select></label>
          <label class="field"><span>På lager</span><input name="stockQty" type="number" min="0" step="0.01" value="0" /></label>
          <label class="field"><span>Min. lager</span><input name="minStockQty" type="number" min="0" step="0.01" value="0" /></label>
          <label class="field"><span>Bestillingstid</span><input name="leadTimeDays" type="number" min="0" step="1" value="1" /></label>
          <button class="secondary-button" type="submit"><i data-lucide="plus"></i><span>Legg til</span></button>
        </form>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Råvare</th>
                <th>Gruppe</th>
                <th>Enhet</th>
                <th>Kost</th>
                <th>På lager</th>
                <th>Min.</th>
                <th>Bestillingstid</th>
                <th>Leverandør</th>
              </tr>
            </thead>
            <tbody>${rawMaterials.map(rawMaterialEditRow).join("")}</tbody>
          </table>
        </div>
      </section>
    </div>
  `;
}

function renderData() {
  app.innerHTML = `
    <div class="view-stack">
      <div class="grid-2">
        <section class="section">
          <div class="section-header">
            <div>
              <h2>Avdelinger</h2>
              <p>Artikler knyttes til avdeling for produksjonslister.</p>
            </div>
          </div>
          <form class="inline-create compact" id="department-form">
            <label class="field"><span>Navn</span><input name="name" required /></label>
            <button class="secondary-button" type="submit"><i data-lucide="plus"></i><span>Legg til</span></button>
          </form>
          <div class="table-wrap">
            <table>
              <thead><tr><th>Avdeling</th><th>Artikler</th></tr></thead>
              <tbody>${state.departments.map(departmentEditRow).join("")}</tbody>
            </table>
          </div>
        </section>

        <section class="section">
          <div class="section-header">
            <div>
              <h2>Leverandører</h2>
              <p>Råvarer knyttes til leverandør.</p>
            </div>
          </div>
          <form class="inline-create compact" id="supplier-form">
            <label class="field"><span>Navn</span><input name="name" required /></label>
            <label class="field"><span>Telefon</span><input name="phone" /></label>
            <button class="secondary-button" type="submit"><i data-lucide="plus"></i><span>Legg til</span></button>
          </form>
          <div class="table-wrap">
            <table>
              <thead><tr><th>Leverandør</th><th>Telefon</th></tr></thead>
              <tbody>${state.suppliers.map(supplierEditRow).join("")}</tbody>
            </table>
          </div>
        </section>

        <section class="section">
          <div class="section-header">
            <div>
              <h2>Sjåfører</h2>
              <p>Kjøretøy kobles mot sjåfør.</p>
            </div>
          </div>
          <form class="inline-create compact" id="driver-form">
            <label class="field"><span>Navn</span><input name="name" required /></label>
            <label class="field"><span>Telefon</span><input name="phone" /></label>
            <button class="secondary-button" type="submit"><i data-lucide="plus"></i><span>Legg til</span></button>
          </form>
          <div class="table-wrap">
            <table>
              <thead><tr><th>Sjåfør</th><th>Telefon</th></tr></thead>
              <tbody>${state.drivers.map(driverEditRow).join("")}</tbody>
            </table>
          </div>
        </section>
      </div>

      <section class="section">
        <div class="section-header">
          <div>
            <h2>Kjøretøy</h2>
            <p>Kjøretøy er koblet til fast sjåfør, og kan velges på leveringer.</p>
          </div>
        </div>
        <form class="inline-create" id="vehicle-form">
          <label class="field"><span>Navn</span><input name="name" placeholder="KC-04" required /></label>
          <label class="field"><span>Reg.nr.</span><input name="plate" placeholder="AB 12345" /></label>
          <label class="field"><span>Sjåfør</span><select name="driverId">${options(state.drivers, state.drivers[0]?.id)}</select></label>
          <button class="secondary-button" type="submit"><i data-lucide="plus"></i><span>Legg til</span></button>
        </form>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Kjøretøy</th><th>Reg.nr.</th><th>Sjåfør</th></tr></thead>
            <tbody>${state.vehicles.map(vehicleEditRow).join("")}</tbody>
          </table>
        </div>
      </section>

      <div class="grid-2">
        <section class="section">
          <div class="section-header">
            <div>
              <h2>Menygrupper</h2>
              <p>Artikler tildeles menygruppe.</p>
            </div>
          </div>
          <form class="inline-create compact" id="menu-group-form">
            <label class="field"><span>Navn</span><input name="name" required /></label>
            <button class="secondary-button" type="submit"><i data-lucide="plus"></i><span>Legg til</span></button>
          </form>
          <div class="table-wrap">
            <table>
              <thead><tr><th>Menygruppe</th><th>Artikler</th></tr></thead>
              <tbody>${state.menuGroups.map(menuGroupEditRow).join("")}</tbody>
            </table>
          </div>
        </section>

        <section class="section">
          <div class="section-header">
            <div>
              <h2>NS-kontoplan</h2>
              <p>Artikler knyttes til konto.</p>
            </div>
          </div>
          <form class="inline-create compact" id="account-form">
            <label class="field"><span>Konto</span><input name="code" placeholder="3030" required /></label>
            <label class="field"><span>Navn</span><input name="name" required /></label>
            <button class="secondary-button" type="submit"><i data-lucide="plus"></i><span>Legg til</span></button>
          </form>
          <div class="table-wrap">
            <table>
              <thead><tr><th>Konto</th><th>Navn</th><th>Artikler</th></tr></thead>
              <tbody>${state.accounts.map(accountEditRow).join("")}</tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  `;
}

function rawGroupRow(group) {
  const count = state.rawMaterials.filter((raw) => raw.groupId === group.id).length;
  return `
    <tr>
      <td><input class="inline-input" value="${escapeHtml(group.name)}" data-action="edit-raw-group" data-id="${group.id}" data-field="name" /></td>
      <td>${count}</td>
    </tr>
  `;
}

function rawMaterialEditRow(raw) {
  return `
    <tr>
      <td><input class="inline-input" value="${escapeHtml(raw.name)}" data-action="edit-raw-material" data-id="${raw.id}" data-field="name" /></td>
      <td><select class="inline-input" data-action="edit-raw-material" data-id="${raw.id}" data-field="groupId">${options(state.rawMaterialGroups, raw.groupId)}</select></td>
      <td><input class="inline-input unit-input" value="${escapeHtml(raw.unit)}" data-action="edit-raw-material" data-id="${raw.id}" data-field="unit" /></td>
      <td><input class="inline-input price-input" type="number" min="0" step="0.01" value="${raw.cost}" data-action="edit-raw-material" data-id="${raw.id}" data-field="cost" /></td>
      <td><input class="inline-input price-input" type="number" min="0" step="0.01" value="${raw.stockQty}" data-action="edit-raw-material" data-id="${raw.id}" data-field="stockQty" /></td>
      <td><input class="inline-input price-input" type="number" min="0" step="0.01" value="${raw.minStockQty}" data-action="edit-raw-material" data-id="${raw.id}" data-field="minStockQty" /></td>
      <td><input class="inline-input days-input" type="number" min="0" step="1" value="${raw.leadTimeDays}" data-action="edit-raw-material" data-id="${raw.id}" data-field="leadTimeDays" /></td>
      <td><select class="inline-input" data-action="edit-raw-material" data-id="${raw.id}" data-field="supplierId">${options(state.suppliers, raw.supplierId)}</select></td>
    </tr>
  `;
}

function supplierEditRow(supplier) {
  return `
    <tr>
      <td><input class="inline-input" value="${escapeHtml(supplier.name)}" data-action="edit-supplier" data-id="${supplier.id}" data-field="name" /></td>
      <td><input class="inline-input" value="${escapeHtml(supplier.phone)}" data-action="edit-supplier" data-id="${supplier.id}" data-field="phone" /></td>
    </tr>
  `;
}

function driverEditRow(driver) {
  return `
    <tr>
      <td><input class="inline-input" value="${escapeHtml(driver.name)}" data-action="edit-driver" data-id="${driver.id}" data-field="name" /></td>
      <td><input class="inline-input" value="${escapeHtml(driver.phone)}" data-action="edit-driver" data-id="${driver.id}" data-field="phone" /></td>
    </tr>
  `;
}

function vehicleEditRow(vehicle) {
  return `
    <tr>
      <td><input class="inline-input" value="${escapeHtml(vehicle.name)}" data-action="edit-vehicle-master" data-id="${vehicle.id}" data-field="name" /></td>
      <td><input class="inline-input" value="${escapeHtml(vehicle.plate)}" data-action="edit-vehicle-master" data-id="${vehicle.id}" data-field="plate" /></td>
      <td><select class="inline-input" data-action="edit-vehicle-master" data-id="${vehicle.id}" data-field="driverId">${options(state.drivers, vehicle.driverId)}</select></td>
    </tr>
  `;
}

function menuGroupEditRow(group) {
  const count = state.articles.filter((article) => article.menuGroupId === group.id).length;
  return `
    <tr>
      <td><input class="inline-input" value="${escapeHtml(group.name)}" data-action="edit-menu-group" data-id="${group.id}" data-field="name" /></td>
      <td>${count}</td>
    </tr>
  `;
}

function departmentEditRow(department) {
  const count = state.articles.filter((article) => article.departmentId === department.id).length;
  return `
    <tr>
      <td><input class="inline-input" value="${escapeHtml(department.name)}" data-action="edit-department" data-id="${department.id}" data-field="name" /></td>
      <td>${count}</td>
    </tr>
  `;
}

function accountEditRow(account) {
  const count = state.articles.filter((article) => article.accountCode === account.code).length;
  return `
    <tr>
      <td><span class="menu-chip">${escapeHtml(account.code)}</span></td>
      <td><input class="inline-input" value="${escapeHtml(account.name)}" data-action="edit-account" data-code="${account.code}" data-field="name" /></td>
      <td>${count}</td>
    </tr>
  `;
}

function castFieldValue(field, value) {
  const numericFields = new Set(["cost", "stockQty", "minStockQty", "leadTimeDays"]);
  return numericFields.has(field) ? Number(value || 0) : value;
}

function applyMasterEdit(action, target) {
  const field = target.dataset.field;
  const collectionByAction = {
    "edit-inventory": state.rawMaterials,
    "edit-raw-material": state.rawMaterials,
    "edit-raw-group": state.rawMaterialGroups,
    "edit-supplier": state.suppliers,
    "edit-driver": state.drivers,
    "edit-vehicle-master": state.vehicles,
    "edit-menu-group": state.menuGroups,
    "edit-department": state.departments,
  };

  if (action === "edit-account") {
    const account = state.accounts.find((item) => item.code === target.dataset.code);
    if (!account) return false;
    account[field] = castFieldValue(field, target.value);
    return true;
  }

  const collection = collectionByAction[action];
  const item = collection ? byId(collection, target.dataset.id) : null;
  if (!item) return false;
  item[field] = castFieldValue(field, target.value);
  return true;
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action], .nav-item");
  if (!target) return;

  if (target.classList.contains("nav-item")) {
    state.currentView = target.dataset.view;
    state.activeDeliveryInfoId = "";
    saveState();
    render();
    return;
  }

  const action = target.dataset.action;
  if (action === "modal-content") {
    return;
  }

  if (action === "new-order-from-board") {
    state.currentView = "orders";
    state.activeDeliveryInfoId = "";
    render();
  }

  if (action === "enable-webshop-notifications") {
    if (typeof Notification === "undefined") {
      showToast("Nettleseren stÃ¸tter ikke varsler her");
      return;
    }
    Notification.requestPermission().then((permission) => {
      state.webshop.notificationsEnabled = permission === "granted";
      ensureWebshopStatusSeen();
      saveState();
      render();
      showToast(permission === "granted" ? "Varsler er aktivert" : "Varsler ble ikke aktivert");
    });
  }

  if (action === "select-webshop-category") {
    state.webshop.activeCategoryId = target.dataset.categoryId || defaultWebshopCategoryId(state);
    saveState();
    render();
  }

  if (action === "add-webshop-cart") {
    const existing = state.webshop.cart.find((line) => line.articleId === target.dataset.articleId);
    if (existing) existing.qty = Number(existing.qty || 0) + 1;
    else state.webshop.cart.push({ articleId: target.dataset.articleId, qty: 1 });
    saveState();
    render();
  }

  if (action === "remove-webshop-cart") {
    state.webshop.cart.splice(Number(target.dataset.index), 1);
    saveState();
    render();
  }

  if (action === "clear-webshop-cart") {
    state.webshop.cart = [];
    saveState();
    render();
  }

  if (action === "open-delivery-info") {
    state.activeDeliveryInfoId = target.dataset.deliveryId;
    saveState();
    render();
  }

  if (action === "close-delivery-info") {
    state.activeDeliveryInfoId = "";
    saveState();
    render();
  }

  if (action === "open-delivery-order") {
    const order = byId(state.orders, target.dataset.orderId);
    if (!order) return;
    state.selectedOrderId = order.id;
    state.selectedDeliveryId = target.dataset.deliveryId;
    state.activeDeliveryInfoId = "";
    state.currentView = "orderDetail";
    saveState();
    render();
  }

  if (action === "back-to-orders") {
    state.currentView = "orders";
    saveState();
    render();
  }

  if (action === "select-order") {
    const order = byId(state.orders, target.dataset.orderId);
    if (!order) return;
    state.selectedOrderId = order.id;
    state.selectedDeliveryId = order.deliveries[0]?.id || "";
    state.currentView = "orderDetail";
    saveState();
    render();
  }

  if (action === "select-delivery") {
    state.selectedDeliveryId = target.dataset.deliveryId;
    saveState();
    render();
  }

  if (action === "select-article") {
    state.selectedArticleId = target.dataset.articleId;
    saveState();
    render();
  }

  if (action === "open-recipe") {
    state.selectedArticleId = target.dataset.articleId;
    state.currentView = "recipes";
    saveState();
    render();
  }

  if (action === "new-article") {
    const article = {
      id: uid("art"),
      sku: `S-${Math.floor(700 + Math.random() * 200)}`,
      name: "Ny artikkel",
      type: "sale",
      menuGroupId: state.menuGroups[0].id,
      departmentId: state.departments[0].id,
      accountCode: "3000",
      unit: "stk",
      image: "",
      recipe: [],
      packageItems: [],
    };
    state.articles.push(article);
    state.selectedArticleId = article.id;
    saveState();
    render();
    showToast("Ny artikkel opprettet");
  }

  if (action === "add-delivery") {
    const order = byId(state.orders, target.dataset.orderId);
    if (!order) return;
    const source = order.deliveries[0] || {};
    const delivery = {
      ...source,
      id: uid("del"),
      deliveryNo: nextDeliveryNo(order),
      status: "",
      noReturn: false,
      date: state.selectedDate,
      kitchenTime: "12:00",
      driverTime: "12:45",
      eatingTime: "14:00",
      windowStart: "13:20",
      windowEnd: "13:45",
      address: source.address || "",
      vehicleId: "",
      notes: "Ny levering på samme ordre.",
      items: [{ articleId: "art-chicken-pot", qty: 1 }],
    };
    order.deliveries.push(delivery);
    state.selectedOrderId = order.id;
    state.selectedDeliveryId = delivery.id;
    saveState();
    render();
    showToast("Levering lagt til ordre");
  }

  if (action === "add-delivery-item") {
    const form = target.closest("#delivery-form");
    const { delivery } = updateDeliveryFromForm(form);
    if (!delivery) return;
    delivery.items.push({ articleId: orderableArticles()[0]?.id || "", qty: 1 });
    saveState();
    render();
  }

  if (action === "remove-delivery-item") {
    const form = target.closest("#delivery-form");
    const { delivery } = updateDeliveryFromForm(form);
    if (!delivery) return;
    delivery.items.splice(Number(target.dataset.index), 1);
    saveState();
    render();
  }

  if (action === "export-json") {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `kc-core-${state.selectedDate}.json`;
    link.click();
    URL.revokeObjectURL(url);
  }

  if (action === "reset-demo") {
    localStorage.removeItem(STORAGE_KEY);
    state = defaultState();
    render();
    showToast("Demoen er tilbakestilt");
  }
});

document.addEventListener("change", (event) => {
  const target = event.target;
  const action = target.dataset.action;

  if (target === dateInput) {
    const parsedDate = parseDate(target.value);
    if (!parsedDate) {
      target.value = formatDate(state.selectedDate);
      showToast("Bruk datoformat dd.mm.yyyy");
      return;
    }
    state.selectedDate = parsedDate;
    saveState();
    render();
    return;
  }

  if (action === "edit-kitchen-time") {
    const { delivery } = findDelivery(target.dataset.deliveryId);
    if (!delivery) return;
    delivery.kitchenTime = target.value;
    saveState();
    render();
    showToast("Kjøkkentid oppdatert");
  }

  if (action === "edit-vehicle") {
    const { delivery } = findDelivery(target.dataset.deliveryId);
    if (!delivery) return;
    delivery.vehicleId = target.value;
    saveState();
    render();
  }

  if (action === "edit-delivery-status") {
    const { delivery } = findDelivery(target.dataset.deliveryId);
    if (!delivery) return;
    delivery.status = normalizeDeliveryStatus(target.value);
    if (delivery.status !== "ferdig-returnert") {
      delivery.noReturn = false;
    }
    notifyWebshopStatusChanges();
    saveState();
    render();
  }

  if (action === "select-webshop-customer") {
    state.webshop.customerId = target.value;
    ensureWebshopStatusSeen();
    saveState();
    render();
  }

  if (action === "edit-webshop-cart-qty") {
    const line = state.webshop.cart[Number(target.dataset.index)];
    if (!line) return;
    line.qty = Math.max(1, Number(target.value || 1));
    saveState();
    render();
  }

  if (action === "select-customer") {
    state.selectedCustomerId = target.value;
    saveState();
    render();
  }

  if (action === "select-production-department") {
    state.selectedProductionDepartmentId = target.value;
    saveState();
    render();
  }

  if (action === "edit-price") {
    const priceList = byId(state.priceLists, target.dataset.priceListId);
    priceList.prices[target.dataset.articleId] = Number(target.value || 0);
    saveState();
    render();
  }

  if (action === "toggle-produced") {
    state.productionStatus[state.selectedDate] ??= {};
    state.productionStatus[state.selectedDate][target.dataset.articleId] = target.checked;
    applyProductionInventoryAdjustment(state.selectedDate, target.dataset.articleId, target.checked);
    notifyWebshopStatusChanges();
    saveState();
    render();
    showToast(target.checked ? "Produksjon ferdig og lager trukket" : "Ferdigmerking fjernet og lager lagt tilbake");
  }

  if (
    [
      "edit-inventory",
      "edit-raw-material",
      "edit-raw-group",
      "edit-supplier",
      "edit-driver",
      "edit-vehicle-master",
      "edit-menu-group",
      "edit-department",
      "edit-account",
    ].includes(action)
  ) {
    if (applyMasterEdit(action, target)) {
      saveState();
      render();
    }
  }

  if (action === "article-image" && target.files?.[0]) {
    const reader = new FileReader();
    reader.onload = () => {
      articleImageDraft = reader.result;
      const preview = document.querySelector("#image-preview");
      preview.innerHTML = `<img src="${articleImageDraft}" alt="Valgt artikkelbilde" />`;
    };
    reader.readAsDataURL(target.files[0]);
  }
});

document.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);

  if (form.id === "webshop-customer-form") {
    const customer = {
      id: uid("cust"),
      name: data.get("name"),
      phone: data.get("phone") || "",
      email: data.get("email") || "",
      invoiceAddress: data.get("invoiceAddress") || "",
      priceListId: "pl-standard",
    };
    state.customers.push(customer);
    state.webshop.customerId = customer.id;
    state.selectedCustomerId = customer.id;
    saveState();
    render();
    showToast(`${customer.name} er opprettet`);
  }

  if (form.id === "webshop-order-form") {
    const customer = webshopCustomer();
    if (!customer || !state.webshop.cart.length) return;
    const orderNo = nextOrderNo();
    const order = {
      id: uid("ord"),
      orderNo,
      customerId: customer.id,
      status: "ordre",
      contact: customer.name,
      invoiceReference: `Webshop ${orderNo}`,
      invoiceEmail: customer.email || "",
      invoiceAddress: customer.invoiceAddress || customerInvoiceAddress(customer),
      deliveries: [],
    };
    const delivery = {
      id: uid("del"),
      deliveryNo: `${orderNo}-1`,
      status: "",
      noReturn: false,
      date: data.get("date") || state.selectedDate,
      kitchenTime: data.get("kitchenTime"),
      driverTime: data.get("windowStart"),
      eatingTime: data.get("eatingTime"),
      windowStart: data.get("windowStart"),
      windowEnd: data.get("windowEnd"),
      address: data.get("address"),
      vehicleId: "",
      notes: data.get("notes") || "Bestilt fra webshop",
      items: state.webshop.cart.map((line) => ({ articleId: line.articleId, qty: Number(line.qty || 1) })),
    };
    order.deliveries.push(delivery);
    state.orders.push(order);
    state.selectedOrderId = order.id;
    state.selectedDeliveryId = delivery.id;
    state.webshop.cart = [];
    state.webshop.statusSeen[order.id] = statusSignature(order);
    saveState();
    render();
    showToast(`Ordre #${order.orderNo} er bekreftet i KC Core`);
  }

  if (form.id === "order-form") {
    const customer = byId(state.customers, data.get("customerId"));
    const newOrder = {
      id: uid("ord"),
      orderNo: nextOrderNo(),
      customerId: customer.id,
      status: normalizeOrderStatus(data.get("status")),
      contact: data.get("contact") || "",
      invoiceReference: data.get("invoiceReference") || "",
      invoiceEmail: data.get("invoiceEmail") || "",
      invoiceAddress: data.get("invoiceAddress") || customerInvoiceAddress(customer),
      deliveries: [],
    };
    state.orders.push(newOrder);
    state.selectedOrderId = newOrder.id;
    state.selectedDeliveryId = "";
    state.currentView = "orderDetail";
    saveState();
    render();
    showToast(`Ordre #${newOrder.orderNo} opprettet`);
  }

  if (form.id === "order-customer-form") {
    const customer = {
      id: uid("cust"),
      name: data.get("name"),
      phone: data.get("phone"),
      priceListId: data.get("priceListId"),
    };
    state.customers.push(customer);
    state.selectedCustomerId = customer.id;
    saveState();
    render();
    showToast(`${customer.name} er opprettet`);
  }

  if (form.id === "order-info-form") {
    const order = byId(state.orders, data.get("orderId"));
    if (!order) return;
    order.customerId = data.get("customerId");
    order.contact = data.get("contact");
    order.status = normalizeOrderStatus(data.get("status"));
    order.invoiceReference = data.get("invoiceReference");
    order.invoiceEmail = data.get("invoiceEmail");
    order.invoiceAddress = data.get("invoiceAddress");
    notifyWebshopStatusChanges();
    saveState();
    render();
    showToast("Ordre lagret");
  }

  if (form.id === "delivery-form") {
    const { delivery } = updateDeliveryFromForm(form);
    if (!delivery) return;
    notifyWebshopStatusChanges();
    saveState();
    render();
    showToast(`Levering ${delivery.deliveryNo} lagret`);
  }

  if (form.id === "article-form") {
    const article = byId(state.articles, data.get("id"));
    if (!article) return;
    article.name = data.get("name");
    article.sku = data.get("sku");
    article.type = data.get("type");
    article.unit = data.get("unit");
    article.menuGroupId = data.get("menuGroupId");
    article.departmentId = data.get("departmentId");
    article.accountCode = data.get("accountCode");
    article.image = articleImageDraft || article.image;

    const standard = byId(state.priceLists, "pl-standard");
    standard.prices[article.id] = Number(data.get("standardPrice") || 0);
    saveState();
    render();
    showToast("Artikkel lagret");
  }

  if (form.id === "recipe-form") {
    const article = byId(state.articles, data.get("id"));
    if (!article) return;
    article.recipe = [0, 1, 2, 3]
      .map((index) => ({
        rawMaterialId: data.get(`recipeRaw${index}`),
        qty: Number(data.get(`recipeQty${index}`) || 0),
      }))
      .filter((line) => line.rawMaterialId && line.qty > 0);
    article.packageItems = [0, 1, 2]
      .map((index) => ({
        articleId: data.get(`packageArticle${index}`),
        qty: Number(data.get(`packageQty${index}`) || 0),
      }))
      .filter((line) => line.articleId && line.qty > 0);
    saveState();
    render();
    showToast("Oppskrift lagret");
  }

  if (form.id === "raw-group-form") {
    state.rawMaterialGroups.push({ id: uid("rawgrp"), name: data.get("name") });
    saveState();
    render();
    showToast("Råvaregruppe lagt til");
  }

  if (form.id === "raw-material-form") {
    state.rawMaterials.push({
      id: uid("raw"),
      name: data.get("name"),
      unit: data.get("unit"),
      cost: Number(data.get("cost") || 0),
      supplierId: data.get("supplierId"),
      groupId: data.get("groupId"),
      stockQty: Number(data.get("stockQty") || 0),
      minStockQty: Number(data.get("minStockQty") || 0),
      leadTimeDays: Number(data.get("leadTimeDays") || 0),
    });
    saveState();
    render();
    showToast("Råvare lagt til");
  }

  if (form.id === "supplier-form") {
    state.suppliers.push({ id: uid("sup"), name: data.get("name"), phone: data.get("phone") });
    saveState();
    render();
    showToast("Leverandør lagt til");
  }

  if (form.id === "driver-form") {
    state.drivers.push({ id: uid("drv"), name: data.get("name"), phone: data.get("phone") });
    saveState();
    render();
    showToast("Sjåfør lagt til");
  }

  if (form.id === "vehicle-form") {
    state.vehicles.push({
      id: uid("veh"),
      name: data.get("name"),
      plate: data.get("plate"),
      driverId: data.get("driverId"),
    });
    saveState();
    render();
    showToast("Kjøretøy lagt til");
  }

  if (form.id === "menu-group-form") {
    state.menuGroups.push({ id: uid("grp"), name: data.get("name") });
    saveState();
    render();
    showToast("Menygruppe lagt til");
  }

  if (form.id === "department-form") {
    state.departments.push({ id: uid("dept"), name: data.get("name") });
    saveState();
    render();
    showToast("Avdeling lagt til");
  }

  if (form.id === "account-form") {
    const code = data.get("code");
    if (state.accounts.some((account) => account.code === code)) {
      showToast("Konto finnes allerede");
      return;
    }
    state.accounts.push({ code, name: data.get("name") });
    saveState();
    render();
    showToast("Konto lagt til");
  }
});

render();
