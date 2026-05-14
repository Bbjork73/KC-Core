const STORAGE_KEY = "kc-core-catering-v3-tapas";
const AUTO_IMPORT_CATALOG = false;
const WEBSHOP_ALL_CATEGORY_ID = "all";
const ARTICLE_RECIPE_ROW_COUNT = 12;
const PACKAGE_RECIPE_ROW_COUNT = 12;
const INGREDIENT_RECIPE_ROW_COUNT = 8;
const rawToIngredientMigration = {
  "raw-roll": "ing-roll",
  "raw-cake": "ing-chocolate-cake",
};
const fallbackRawMaterialNames = [
  "kyllingfilet",
  "basmatiris",
  "fløte",
  "sopp",
  "løk",
  "smør",
  "salatmix",
  "kaffe",
  "salt",
  "sukker",
  "hvetemel",
  "rapsolje",
  "egg",
  "sennep",
  "hvitløk",
  "sitron",
  "ketchup",
  "kakao",
];
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
  "customers",
  "suppliers",
  "articles",
  "articleDetail",
  "ingredients",
  "ingredientDetail",
  "inventory",
  "inventoryOrder",
  "production",
  "prices",
  "data",
];
  const commonSupplierSeedIds = [
  "sup-asko-servering",
  "sup-bama-storkjokken",
  "sup-servicegrossistene",
  "sup-tine-partner",
  "sup-nortura-proff",
];
  const commonIngredientUnits = [
  { id: "kg", name: "kg" },
  { id: "g", name: "g" },
  { id: "l", name: "l" },
  { id: "dl", name: "dl" },
  { id: "ml", name: "ml" },
  { id: "stk", name: "stk" },
  { id: "porsjon", name: "porsjon" },
  { id: "person", name: "person" },
  { id: "pk", name: "pk" },
  { id: "pose", name: "pose" },
  { id: "boks", name: "boks" },
  { id: "flaske", name: "flaske" },
  { id: "spann", name: "spann" },
  { id: "beger", name: "beger" },
  { id: "glass", name: "glass" },
  { id: "bunt", name: "bunt" },
  { id: "brett", name: "brett" },
  { id: "kartong", name: "kartong" },
  { id: "kasse", name: "kasse" },
  { id: "ts", name: "ts" },
  { id: "ss", name: "ss" },
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
  const defaultState = () => emptyStartupState({
  selectedDate: today,
  currentView: "board",
  selectedArticleId: "art-chicken-pot",
  selectedIngredientId: "ing-mayonnaise",
  activeArticleCardId: "",
  activeArticleTab: "details",
  activeArticleImageId: "",
  activeRecipeArticleId: "",
  activeIngredientCardId: "",
  activeIngredientUsageId: "",
  activeProductionIngredientId: "",
  selectedCustomerId: "cust-oslo",
  selectedOrderId: "ord-10024",
  selectedDeliveryId: "del-10024-a",
  activeDeliveryInfoId: "",
  activeRawMaterialInfoId: "",
  webshop: {
  customerId: "",
  cart: [],
  activeCategoryId: "",
  notificationsEnabled: false,
  statusSeen: {},
  },
  activeProductionTab: "ingredients",
  selectedProductionDepartmentId: "all",
  packingFilters: { article: "all", kitchenTime: "all", status: "all", delivery: "all" },
  productionStatus: {},
  packingStatus: {},
  productionInventoryAdjustments: {},
  activeInventoryTab: "stock",
  inventoryDepartmentFilter: "all",
  inventoryKitchenTimeFilter: "all",
  inventoryOrderDraft: [],
  inventorySupplierFilter: "all",
  inventoryStatusFilter: "all",
  inventoryOrderSupplierFilter: "all",
  inventoryOrderStatusFilter: "all",
  inventoryReceivingOpen: false,
  inventoryWasteLog: [],
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
  { id: "raw-salt", name: "Salt", unit: "kg", cost: 9, supplierId: "sup-bama", groupId: "rawgrp-dry", stockQty: 18, minStockQty: 8, leadTimeDays: 2 },
  { id: "raw-sugar", name: "Sukker", unit: "kg", cost: 18, supplierId: "sup-bama", groupId: "rawgrp-dry", stockQty: 24, minStockQty: 12, leadTimeDays: 2 },
  { id: "raw-flour", name: "Hvetemel", unit: "kg", cost: 16, supplierId: "sup-bama", groupId: "rawgrp-dry", stockQty: 38, minStockQty: 20, leadTimeDays: 2 },
  { id: "raw-oil", name: "Rapsolje", unit: "l", cost: 34, supplierId: "sup-bama", groupId: "rawgrp-dry", stockQty: 14, minStockQty: 8, leadTimeDays: 2 },
  { id: "raw-egg", name: "Egg", unit: "kg", cost: 54, supplierId: "sup-nortura", groupId: "rawgrp-dairy", stockQty: 22, minStockQty: 10, leadTimeDays: 1 },
  { id: "raw-mustard", name: "Sennep", unit: "kg", cost: 42, supplierId: "sup-bama", groupId: "rawgrp-dry", stockQty: 5, minStockQty: 3, leadTimeDays: 3 },
  { id: "raw-garlic", name: "Hvitløk", unit: "kg", cost: 48, supplierId: "sup-bama", groupId: "rawgrp-veg", stockQty: 4, minStockQty: 2, leadTimeDays: 2 },
  { id: "raw-lemon", name: "Sitron", unit: "kg", cost: 36, supplierId: "sup-bama", groupId: "rawgrp-veg", stockQty: 7, minStockQty: 4, leadTimeDays: 2 },
  { id: "raw-ketchup", name: "Ketchup", unit: "kg", cost: 31, supplierId: "sup-bama", groupId: "rawgrp-dry", stockQty: 9, minStockQty: 4, leadTimeDays: 3 },
  { id: "raw-cocoa", name: "Kakao", unit: "kg", cost: 82, supplierId: "sup-bama", groupId: "rawgrp-dry", stockQty: 6, minStockQty: 3, leadTimeDays: 3 },
  ],
  ingredients: [],
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
  { id: "veh-01", name: "KC-01", plate: "EL 21450" },
  { id: "veh-02", name: "KC-02", plate: "DR 55210" },
  { id: "veh-03", name: "KC-03", plate: "VH 88122" },
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
  function emptyStartupState(seed) {
  const starter = starterCatalog();
  const starterPriceLists = starter.priceLists?.length
  ? starter.priceLists
  : [{ id: "pl-standard", name: "Standard", prices: {} }];
  return {
  ...seed,
  selectedArticleId: starter.articles?.[0]?.id || "",
  activeArticleTab: "details",
  selectedIngredientId: "",
  activeArticleCardId: "",
  activeArticleImageId: "",
  activeRecipeArticleId: "",
  activeIngredientCardId: "",
  activeIngredientUsageId: "",
  activeProductionIngredientId: "",
  selectedCustomerId: "",
  selectedOrderId: "",
  selectedDeliveryId: "",
  activeDeliveryInfoId: "",
  activeRawMaterialInfoId: "",
  webshop: {
  customerId: "",
  cart: [],
  activeCategoryId: WEBSHOP_ALL_CATEGORY_ID,
  notificationsEnabled: false,
  statusSeen: {},
  },
  activeProductionTab: "ingredients",
  selectedProductionDepartmentId: "all",
  packingFilters: { article: "all", kitchenTime: "all", status: "all", delivery: "all" },
  productionStatus: {},
  packingStatus: {},
  productionInventoryAdjustments: {},
  activeInventoryTab: "stock",
  inventoryDepartmentFilter: "all",
  inventoryKitchenTimeFilter: "all",
  inventoryOrderDraft: [],
  inventorySupplierFilter: "all",
  inventoryStatusFilter: "all",
  inventoryOrderSupplierFilter: "all",
  inventoryOrderStatusFilter: "all",
  inventoryReceivingOpen: false,
  inventoryWasteLog: [],
  importMeta: starter.importMeta || {},
  rawMaterialCleanup: { source: starter.importMeta?.source || "Nullstilt", removed: [] },
  suppliers: starter.suppliers || [],
  rawMaterials: starter.rawMaterials || [],
  ingredients: starter.ingredients || [],
  articles: starter.articles || [],
  priceLists: starterPriceLists,
  customers: starter.customers || [],
  drivers: starter.drivers || [],
  vehicles: starter.vehicles || [],
  orders: starter.orders || [],
  menuGroups: mergeUniqueById(seed.menuGroups, starter.menuGroups || []),
  departments: mergeUniqueById(seed.departments, starter.departments || []),
  rawMaterialGroups: mergeUniqueById(seed.rawMaterialGroups, starter.rawMaterialGroups || []),
  };
}
function importedCatalog() {
  return typeof window !== "undefined" ? window.kreativImportData || {} : {};
}
function starterCatalog() {
  return typeof window !== "undefined" ? window.kcStarterData || {} : {};
}
function rawMaterialRegistry() {
  return typeof window !== "undefined" ? window.rawMaterialRegistry || {} : {};
}
function normalizedRawName(value) {
  return String(value || "")
.trim()
.toLowerCase()
.normalize("NFD")
.replace(/[\u0300-\u036f]/g, "")
.replace(/[^a-z0-9]+/g, " ")
.replace(/\s+/g, " ")
.trim();
}
function isBlockedRawMaterialName(name) {
  const normalized = normalizedRawName(name);
  const registry = rawMaterialRegistry();
  const manualBlocked = (registry.manualBlockedNames || []).map(normalizedRawName);
  if (manualBlocked.includes(normalized)) return true;
  return (registry.blockedNamePatterns || []).some((pattern) => {
  try {
  return new RegExp(pattern).test(normalized);
  } catch {
  return false;
  }
});
}
function isKnownRawMaterial(raw) {
  const normalized = normalizedRawName(raw?.name);
  if (!normalized || isBlockedRawMaterialName(raw?.name)) return false;
  const registryNames = rawMaterialRegistry().names || fallbackRawMaterialNames.map(normalizedRawName);
  if (registryNames.includes(normalized)) return true;
  return registryNames.some((name) => name.length > 3 && (name === normalized || name.includes(normalized) || normalized.includes(name)));
}
function isBlockedOperationalIngredientName(name) {
  const normalized = normalizedRawName(name);
  return [
  "henting",
  "kaffekanner",
  "retur",
  "levering",
  "transport",
  "service",
  "bemanning",
  "sjafor",
  "fingermat uio",
  ].some((term) => normalized.includes(term));
}
function sanitizeRawMaterials(rawMaterials = []) {
  const accepted = [];
  const removed = [];
  rawMaterials.forEach((raw) => {
  if (raw?.name && !isBlockedOperationalIngredientName(raw.name)) {
  accepted.push(raw);
  } else {
  removed.push({ id: raw.id, name: raw.name, reason: "Ikke egnet som operativ ingrediens" });
  }
});
  return { accepted, removed };
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
function mergeByIdPreferOverride(baseItems = [], overrideItems = []) {
  const merged = new Map();
  baseItems.forEach((item) => {
  if (item?.id) merged.set(item.id, { ...item });
  });
  overrideItems.forEach((item) => {
  if (item?.id) merged.set(item.id, { ...item });
  });
  return [...merged.values()];
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
  if (!AUTO_IMPORT_CATALOG) return base;
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
function mergeStarterCatalogUpdates(next, defaults) {
  const starterVersion = defaults.importMeta?.sourceVersion;
  if (!starterVersion || next.importMeta?.starterCatalogVersion === starterVersion) return next;
  return {
  ...next,
  importMeta: {
  ...(next.importMeta || {}),
  starterCatalogVersion: starterVersion,
  starterCatalogSource: defaults.importMeta?.source || "",
  },
  suppliers: mergeUniqueById(next.suppliers || [], defaults.suppliers || []),
  rawMaterialGroups: mergeByIdPreferOverride(defaults.rawMaterialGroups || [], next.rawMaterialGroups || []),
  rawMaterials: mergeUniqueById(next.rawMaterials || [], defaults.rawMaterials || []),
  menuGroups: mergeByIdPreferOverride(defaults.menuGroups || [], next.menuGroups || []),
  ingredients: mergeUniqueById(next.ingredients || [], defaults.ingredients || []),
  articles: mergeImportedArticles(next.articles || [], defaults.articles || []),
  priceLists: mergeImportedPriceLists(next.priceLists || [], defaults.priceLists || []),
  };
}
let state = loadState();
let articleImageDraft = "";
  if (
state.rawMaterialCleanup?.removed?.length ||
state.importMeta?.customerExamplesSeeded ||
state.importMeta?.supplierExamplesSeeded ||
state.importMeta?.supplierCommonExamplesSeeded
) {
  saveState();
}
const viewTitles = {
  board: "Kjøretavle",
  webshop: "Webshop",
  orders: "Ordre",
  orderDetail: "Ordre",
  customers: "Kunder",
  suppliers: "Leverandører",
  articles: "Artikler",
  articleDetail: "Artikkel",
  ingredients: "Ingredienser",
  ingredientDetail: "Ingrediens",
  inventory: "Lager",
  inventoryOrder: "Bestillingsliste",
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
  next = mergeStarterCatalogUpdates(next, defaults);
  if (next.currentView === "rawMaterials") next.currentView = "ingredients";
  if (next.currentView === "recipes") next.currentView = "articles";
  if (!["details", "recipe", "package"].includes(next.activeArticleTab)) next.activeArticleTab = "details";
  next.rawMaterialGroups = mergeByIdPreferOverride(defaults.rawMaterialGroups, next.rawMaterialGroups || []);
  const rawCleanup = sanitizeRawMaterials(mergeByIdPreferOverride(defaults.rawMaterials, next.rawMaterials || []));
  next.rawMaterialCleanup = {
  source: rawMaterialRegistry().source || "Lokalt råvareregister",
  removed: rawCleanup.removed,
  };
  next.rawMaterials = rawCleanup.accepted.map((raw) => ({
  ...raw,
  groupId: raw.groupId || inferRawGroup(raw.id),
  stockQty: raw.stockQty ?? defaultRawInventory(raw.id).stockQty,
  minStockQty: raw.minStockQty ?? defaultRawInventory(raw.id).minStockQty,
  leadTimeDays: raw.leadTimeDays ?? defaultRawInventory(raw.id).leadTimeDays,
  }));
  next.ingredients = normalizeIngredients(next.ingredients || defaults.ingredients || [], next.rawMaterials);
  const ingredientIds = new Set(next.ingredients.map((ingredient) => ingredient.id));
  next.menuGroups = defaults.menuGroups;
  next.departments = defaults.departments;
  next.articles = (next.articles || defaults.articles).map((article) => {
  const category = articleWebshopCategory(article, next.menuGroups);
  return {
  ...article,
  departmentId: article.departmentId || inferArticleDepartment(article),
  recipe: normalizeArticleRecipe(article.recipe || []).filter((line) => ingredientIds.has(line.ingredientId)),
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
  next.accounts = defaults.accounts;
  next.priceLists = defaults.priceLists;
  next.importMeta = defaults.importMeta || {};
  next.suppliers = [];
  if (defaults.suppliers?.length && !next.importMeta.supplierExamplesSeeded) {
  next.suppliers = mergeUniqueById(next.suppliers, defaults.suppliers);
  next.importMeta.supplierExamplesSeeded = true;
  }
const hasCommonSupplierDefaults = commonSupplierSeedIds.some((supplierId) =>
  defaults.suppliers?.some((supplier) => supplier.id === supplierId)
);
  const missingCommonSupplier = commonSupplierSeedIds.some(
    (supplierId) =>
      defaults.suppliers?.some((supplier) => supplier.id === supplierId) &&
      !next.suppliers.some((supplier) => supplier.id === supplierId)
  );
  if (defaults.suppliers?.length && missingCommonSupplier && !next.importMeta.supplierCommonExamplesSeeded) {
  next.suppliers = mergeUniqueById(next.suppliers, defaults.suppliers);
  next.importMeta.supplierCommonExamplesSeeded = true;
  } else if (hasCommonSupplierDefaults && !missingCommonSupplier && !next.importMeta.supplierCommonExamplesSeeded) {
  next.importMeta.supplierCommonExamplesSeeded = true;
  }
next.customers = defaults.customers;
  if (!next.customers.length && defaults.customers?.length && !next.importMeta.customerExamplesSeeded) {
  next.customers = defaults.customers;
  next.importMeta.customerExamplesSeeded = true;
  }
if (next.selectedCustomerId && !next.customers.some((customer) => customer.id === next.selectedCustomerId)) {
  next.selectedCustomerId = "";
  }
if (!next.selectedCustomerId && next.customers.length) {
  next.selectedCustomerId = next.customers[0].id;
  }
next.drivers = defaults.drivers;
  next.vehicles = defaults.vehicles;
  next.webshop = defaults.webshop;
  next.webshop.cart = [];
  next.webshop.statusSeen = {};
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
if (next.activeProductionIngredientId && !next.ingredients.some((ingredient) => ingredient.id === next.activeProductionIngredientId)) {
  next.activeProductionIngredientId = "";
  }
if (!["ingredients", "packing"].includes(next.activeProductionTab)) next.activeProductionTab = "ingredients";
  next.packingFilters = {
  article: next.packingFilters?.article || "all",
  kitchenTime: next.packingFilters?.kitchenTime || "all",
  status: next.packingFilters?.status || "all",
  delivery: next.packingFilters?.delivery || "all",
  };
  next.productionStatus = {};
  next.packingStatus = {};
  next.productionInventoryAdjustments = {};
  if (!["stock", "order", "receiving", "waste"].includes(next.activeInventoryTab)) next.activeInventoryTab = "stock";
  next.inventoryDepartmentFilter ||= "all";
  if (next.inventoryDepartmentFilter !== "all" && !next.departments.some((department) => department.id === next.inventoryDepartmentFilter)) {
  next.inventoryDepartmentFilter = "all";
  }
next.inventoryKitchenTimeFilter ||= "all";
  next.ingredients = next.ingredients.map((ingredient) => ({
  ...ingredient,
  orderStatus: ingredient.orderStatus === "bestilt" ? "bestilt" : "ok",
  }));
  next.inventoryOrderDraft = (next.inventoryOrderDraft || [])
.map((line, index) => ({
  id: line.id || `inv-order-${index}`,
  ingredientId: line.ingredientId || "",
  qty: Number(line.qty || 0),
  receivedQty: Number(line.receivedQty ?? line.qty ?? 0),
  receivedDate: line.receivedDate || next.selectedDate || today,
  note: line.note || "",
  }))
.filter((line) => next.ingredients.some((ingredient) => ingredient.id === line.ingredientId));
  const validInventoryFilters = new Set(["all", "__internal", "__none", ...next.suppliers.map((supplier) => supplier.id)]);
  next.inventorySupplierFilter ||= defaults.inventorySupplierFilter || "all";
  if (!validInventoryFilters.has(next.inventorySupplierFilter)) next.inventorySupplierFilter = "all";
  next.inventoryStatusFilter ||= "all";
  if (!["all", "ready", "open", "low"].includes(next.inventoryStatusFilter)) next.inventoryStatusFilter = "all";
  next.inventoryOrderSupplierFilter ||= defaults.inventoryOrderSupplierFilter || "all";
  const validOrderFilters = new Set(["all", "__internal", "__none", ...next.suppliers.map((supplier) => supplier.id)]);
  if (!validOrderFilters.has(next.inventoryOrderSupplierFilter)) next.inventoryOrderSupplierFilter = "all";
  next.inventoryOrderStatusFilter ||= "all";
  if (!["all", "ok", "bestilt"].includes(next.inventoryOrderStatusFilter)) next.inventoryOrderStatusFilter = "all";
  next.inventoryReceivingOpen = Boolean(next.inventoryReceivingOpen);
  next.inventoryWasteLog = (next.inventoryWasteLog || []).map((entry, index) => ({
  id: entry.id || `waste-${index}`,
  ingredientId: entry.ingredientId || "",
  ingredientName: entry.ingredientName || byId(next.ingredients, entry.ingredientId)?.name || "Ukjent vare",
  unit: entry.unit || byId(next.ingredients, entry.ingredientId)?.unit || "",
  qty: Number(entry.qty || 0),
  reason: entry.reason || "",
  createdAt: entry.createdAt || new Date().toISOString(),
  })).filter((entry) => entry.qty > 0).slice(0, 100);
  if (!next.selectedIngredientId || !next.ingredients.some((ingredient) => ingredient.id === next.selectedIngredientId)) {
  next.selectedIngredientId = next.ingredients[0]?.id || "";
  }
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
  driverId: delivery.driverId || byId(next.vehicles, delivery.vehicleId)?.driverId || "",
  vehicleId: delivery.vehicleId || "",
  items: (delivery.items?.length ? delivery.items : [{ articleId: "art-chicken-pot", qty: 1 }]).map((item, itemIndex) => ({
  ...item,
  id: item.id || `item-${delivery.id || index}-${itemIndex}`,
  qty: Number(item.qty || 0),
  })),
  })),
  }));
  next.packingStatus = Object.fromEntries(
    next.orders.flatMap((order) =>
      order.deliveries.map((delivery) => {
  const validKeys = new Set(packingLinesForDelivery(delivery, "all", next.articles).map((line) => line.key));
  const lines = Object.entries(next.packingStatus?.[delivery.id] || {}).filter(([key, value]) => validKeys.has(key) && value);
  return [delivery.id, Object.fromEntries(lines)];
        }),
    ).filter(([, lines]) => Object.keys(lines).length)
  );
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
if (next.activeRawMaterialInfoId && !next.rawMaterials.some((raw) => raw.id === next.activeRawMaterialInfoId)) {
  next.activeRawMaterialInfoId = "";
  }
if (next.activeArticleCardId && !next.articles.some((article) => article.id === next.activeArticleCardId)) {
  next.activeArticleCardId = "";
  }
if (next.activeArticleImageId && !next.articles.some((article) => article.id === next.activeArticleImageId)) {
  next.activeArticleImageId = "";
  }
if (next.activeRecipeArticleId && !next.articles.some((article) => article.id === next.activeRecipeArticleId)) {
  next.activeRecipeArticleId = "";
  }
if (next.activeIngredientCardId && !next.ingredients.some((ingredient) => ingredient.id === next.activeIngredientCardId)) {
  next.activeIngredientCardId = "";
  }
if (next.activeIngredientUsageId && !next.ingredients.some((ingredient) => ingredient.id === next.activeIngredientUsageId)) {
  next.activeIngredientUsageId = "";
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
function rawIngredientId(rawId) {
  return rawToIngredientMigration[rawId] || `ing-${rawId}`;
}
function rawIngredient(raw) {
  return {
  id: rawIngredientId(raw.id),
  rawMaterialId: raw.id,
  name: raw.name,
  unit: raw.unit,
  kind: "purchased",
  supplierType: "external",
  supplierId: raw.supplierId || "",
  groupId: raw.groupId || inferRawGroup(raw.id),
  departmentId: "",
  cost: Number(raw.cost || 0),
  stockQty: raw.stockQty ?? defaultRawInventory(raw.id).stockQty,
  minStockQty: raw.minStockQty ?? defaultRawInventory(raw.id).minStockQty,
  leadTimeDays: raw.leadTimeDays ?? defaultRawInventory(raw.id).leadTimeDays,
  recipe: [],
  note: "Innkjøpt ingrediens",
  };
}
function defaultComplexIngredients(rawMaterials) {
  const hasRaw = (rawId) => rawMaterials.some((raw) => raw.id === rawId);
  const line = (rawMaterialId, qty) => ({ ingredientId: rawIngredientId(rawMaterialId), qty });
  const ingredientLine = (ingredientId, qty) => ({ ingredientId, qty });
  const ingredients = [];
  if (["raw-egg", "raw-oil", "raw-salt", "raw-mustard"].every(hasRaw)) {
  ingredients.push({
  id: "ing-mayonnaise",
  name: "Majones",
  unit: "kg",
  kind: "produced",
  supplierType: "internal",
  supplierId: "",
  groupId: "rawgrp-dry",
  departmentId: "dept-cold",
  cost: 0,
  stockQty: 6,
  minStockQty: 4,
  leadTimeDays: 1,
  recipe: [
  line("raw-egg", 0.25),
  line("raw-oil", 0.72),
  line("raw-salt", 0.01),
  line("raw-mustard", 0.02),
  ],
  note: "Egenprodusert ingrediens",
  });
  }
if (["raw-garlic", "raw-lemon", "raw-salt"].every(hasRaw)) {
  ingredients.push({
  id: "ing-aioli",
  name: "Aioli",
  unit: "kg",
  kind: "produced",
  supplierType: "internal",
  supplierId: "",
  groupId: "rawgrp-dry",
  departmentId: "dept-cold",
  cost: 0,
  stockQty: 3,
  minStockQty: 2,
  leadTimeDays: 1,
  recipe: [
  ingredientLine("ing-mayonnaise", 0.9),
  line("raw-garlic", 0.06),
  line("raw-lemon", 0.03),
  line("raw-salt", 0.01),
  ],
  note: "Egenprodusert ingrediens",
  });
  }
return ingredients;
}
function defaultIngredients(rawMaterials) {
  return [...rawMaterials.map(rawIngredient), ...defaultComplexIngredients(rawMaterials)];
}
function normalizeIngredientRecipe(recipe = []) {
  return recipe
.map((line) => {
  const qty = Number(line.qty || 0);
  if (line.ingredientId) {
  return { type: "ingredient", ingredientId: line.ingredientId, qty };
  }
if (line.rawMaterialId) {
  return { type: "ingredient", ingredientId: rawIngredientId(line.rawMaterialId), qty };
  }
return null;
  })
.filter((line) => line && line.qty > 0 && line.ingredientId);
}
function normalizeIngredients(existingIngredients, rawMaterials) {
  const rawByIngredientId = new Map(rawMaterials.map((raw) => [rawIngredientId(raw.id), raw]));
  const normalized = mergeByIdPreferOverride(defaultIngredients(rawMaterials), existingIngredients).map((ingredient) => ({
  ...ingredient,
  unit: ingredient.unit || "kg",
  kind: ingredient.kind === "raw" ? "purchased" : ingredient.kind || (ingredient.recipe?.length ? "produced" : "purchased"),
  supplierType: ingredient.supplierType || (ingredient.kind === "raw" || !ingredient.recipe?.length ? "external" : "internal"),
  supplierId: ingredient.supplierId || rawByIngredientId.get(ingredient.id)?.supplierId || "",
  groupId: ingredient.groupId || rawByIngredientId.get(ingredient.id)?.groupId || "rawgrp-dry",
  departmentId: ingredient.departmentId || "",
  cost: Number(ingredient.cost ?? rawByIngredientId.get(ingredient.id)?.cost ?? 0),
  stockQty: Number(ingredient.stockQty ?? rawByIngredientId.get(ingredient.id)?.stockQty ?? 0),
  minStockQty: Number(ingredient.minStockQty ?? rawByIngredientId.get(ingredient.id)?.minStockQty ?? 0),
  leadTimeDays: Number(ingredient.leadTimeDays ?? rawByIngredientId.get(ingredient.id)?.leadTimeDays ?? 1),
  recipe: normalizeIngredientRecipe(ingredient.recipe || []),
  note: normalizeIngredientNote(ingredient.note),
  }));
  const ingredientIds = new Set(normalized.map((ingredient) => ingredient.id));
  return normalized.map((ingredient) => {
  const supplierType = ingredient.supplierType === "internal" || ingredient.kind === "produced" ? "internal" : "external";
  return {
  ...ingredient,
  kind: supplierType === "internal" ? "produced" : "purchased",
  supplierType,
  recipe: supplierType === "external"
      ? []
      : ingredient.recipe.filter((line) => ingredientIds.has(line.ingredientId) && line.ingredientId !== ingredient.id),
  };
  });
}
function normalizeIngredientNote(note) {
  const value = String(note || "");
  if (value === "Direkte råvare") return "Innkjøpt ingrediens";
  if (value.startsWith("Intern ingrediens") || value.startsWith("Tidligere råvare")) return "Egenprodusert ingrediens";
  return value;
}
function normalizeArticleRecipe(recipe = []) {
  return recipe
.map((line) => {
  const qty = Number(line.qty || 0);
  const ingredientId = line.ingredientId || (line.rawMaterialId ? rawToIngredientMigration[line.rawMaterialId] || rawIngredientId(line.rawMaterialId) : "");
  return ingredientId && qty > 0 ? { ingredientId, qty } : null;
  })
.filter(Boolean);
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
    name: id === importedId
      ? article.webshopCategory || article.webshopGroup || menuGroup?.name || categoryFallback.name
      : categoryFallback.name,
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
function numericInputValue(value) {
  const parsed = Number(String(value ?? "").replace(/\s/g, "").replace(",", "."));
  return Number.isFinite(parsed) ? parsed : 0;
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
function formatDateTime(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleString("nb-NO", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  });
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
function ingredientCost(ingredientId, seen = new Set()) {
  const ingredient = byId(state.ingredients, ingredientId);
  if (!ingredient || seen.has(ingredientId)) return 0;
  seen.add(ingredientId);
  if (ingredient.supplierType !== "internal" || !ingredient.recipe?.length) {
  return Number(ingredient.cost || 0);
  }
return ingredient.recipe.reduce((sum, line) => {
  return sum + ingredientCost(line.ingredientId, new Set(seen)) * Number(line.qty || 0);
  }, 0);
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
  const ingredientId = line.ingredientId || (line.rawMaterialId ? rawIngredientId(line.rawMaterialId) : "");
  return sum + ingredientCost(ingredientId, new Set()) * Number(line.qty || 0);
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
function packingItemKey(item, index) {
  return item?.id || `${item?.articleId || "item"}-${index}`;
}
function packingLinesForDelivery(delivery, departmentId = "all", articles = state.articles) {
  const lines = [];
  (delivery.items || []).forEach((item, index) => {
  const article = byId(articles, item.articleId);
  collectPackingLines({
  article,
  qty: Number(item.qty || 0),
  key: packingItemKey(item, index),
  item,
  index,
  parentArticle: null,
  departmentId,
  articles,
  lines,
  });
  });
  return lines;
}
function collectPackingLines({ article, qty, key, item, index, parentArticle, departmentId, articles, lines, seen = new Set() }) {
  if (!article) {
  if (departmentId === "all") {
  lines.push({ key, item, index, article: null, qty, parentArticle });
  }
return;
  }
if (seen.has(article.id)) return;
  seen.add(article.id);
  if (article.type === "package" && article.packageItems?.length) {
  article.packageItems.forEach((packageItem, packageIndex) => {
  const childArticle = byId(articles, packageItem.articleId);
  collectPackingLines({
  article: childArticle,
  qty: qty * Number(packageItem.qty || 0),
  key: `${key}/pkg-${packageIndex}-${packageItem.articleId}`,
  item,
  index,
  parentArticle: article,
  departmentId,
  articles,
  lines,
  seen: new Set(seen),
  });
  });
  return;
  }
if (departmentId !== "all" && article.departmentId !== departmentId) return;
  lines.push({ key, item, index, article, qty, parentArticle });
}
function packingLineReady(delivery, line) {
  return Boolean(state.packingStatus?.[delivery.id]?.[line.key]);
}
function packingDeliveryReady(delivery) {
  const lines = packingLinesForDelivery(delivery);
  return lines.length > 0 && lines.every((line) => packingLineReady(delivery, line));
}
function syncDeliveryPackingStatus(delivery) {
  const stored = normalizeDeliveryStatus(delivery.status);
  if (["lastet", "ferdig-levert", "ferdig-returnert"].includes(stored)) return;
  if (packingDeliveryReady(delivery)) {
  delivery.status = "klar";
  } else if (stored === "klar") {
  delivery.status = "";
  }
}
function deliveryItemsReady(delivery) {
  return packingDeliveryReady(delivery);
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
.filter((order) => normalizeOrderStatus(order.status) !== "tilbud")
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
  return delivery.driverId || "";
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
  if (!customer) return "";
  if (customer.invoiceAddress) return customer.invoiceAddress;
  return [customer.name, customer.phone ? `Telefon ${customer.phone}` : "", customer.email || ""].filter(Boolean).join("\n");
}
function customerLookupValue(customer) {
  if (!customer) return "";
  const contact = [customer.phone, customer.email].filter(Boolean).join(" / ");
  return contact ? `${customer.name} · ${contact}` : customer.name;
}
function customerSelectOptions(selectedCustomerId) {
  return state.customers
.map(
  (customer) => `
<option value="${customer.id}" data-search="${escapeHtml(customerLookupValue(customer))}" ${customer.id === selectedCustomerId ? "selected" : ""}>
${escapeHtml(customerLookupValue(customer))}
</option>
`,
  )
.join("");
}
function customerLookupField(selectedCustomerId) {
  return `
<div class="field customer-select-field">
<span>Kunde</span>
<input class="inline-input" type="search" placeholder="Søk i kunder" autocomplete="off" data-action="filter-customer-select" ${state.customers.length ? "" : "disabled"} />
<select name="customerId" ${state.customers.length ? "required" : "disabled"}>
${customerSelectOptions(selectedCustomerId)}
</select>
</div>
`;
}
function normalizeLookup(value) {
  return String(value || "").trim().toLowerCase();
}
function customerLookupMatches(customer, lookup) {
  return [customer.id, customer.name, customer.phone, customer.email, customerLookupValue(customer)]
.filter(Boolean)
.some((value) => normalizeLookup(value) === lookup);
}
function findCustomerByLookup(value) {
  const lookup = normalizeLookup(value);
  if (!lookup) return null;
  const exact = state.customers.find((customer) => customerLookupMatches(customer, lookup));
  if (exact) return exact;
  const matches = state.customers.filter((customer) =>
  [customer.name, customer.phone, customer.email, customerLookupValue(customer)]
.filter(Boolean)
.some((candidate) => normalizeLookup(candidate).includes(lookup)),
  );
  return matches.length === 1 ? matches[0] : null;
}
function filterCustomerSelect(input) {
  const field = input.closest(".customer-select-field");
  const select = field?.querySelector('select[name="customerId"]');
  if (!select) return;
  const lookup = normalizeLookup(input.value);
  let firstMatch = null;
  [...select.options].forEach((option) => {
  option.removeAttribute("hidden");
  const searchText = normalizeLookup(`${option.textContent || ""} ${option.dataset.search || ""}`);
  if (lookup && !firstMatch && searchText.includes(lookup)) {
  firstMatch = option;
  }
});
  if (firstMatch) {
  select.value = firstMatch.value;
  }
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
function ingredientUnitOptions(selectedUnit) {
  const selected = String(selectedUnit || "kg");
  const units = commonIngredientUnits.some((unit) => unit.id === selected)
  ? commonIngredientUnits
  : [{ id: selected, name: selected }, ...commonIngredientUnits];
  return options(units, selected);
}
function vehicleOptions(selectedId) {
  return `<option value="" ${selectedId ? "" : "selected"}>Ikke tildelt</option>${options(state.vehicles, selectedId)}`;
}
function driverOptions(selectedId) {
  return `<option value="" ${selectedId ? "" : "selected"}>Ikke tildelt</option>${options(state.drivers, selectedId)}`;
}
function adjacentItemId(collection, currentId, direction) {
  if (!collection.length) return "";
  const currentIndex = Math.max(0, collection.findIndex((item) => item.id === currentId));
  const offset = direction === "previous" ? -1 : 1;
  return collection[(currentIndex + offset + collection.length) % collection.length].id;
}
function rowIndexes(count) {
  return Array.from({ length: count }, (_, index) => index);
}
function detailBrowseActions(kind, currentId, collection) {
  if (collection.length <= 1) return "";
  return `
<button class="secondary-button" type="button" data-action="browse-detail" data-kind="${kind}" data-direction="previous">
<i data-lucide="arrow-up"></i><span>Forrige</span>
</button>
<button class="secondary-button" type="button" data-action="browse-detail" data-kind="${kind}" data-direction="next">
<i data-lucide="arrow-down"></i><span>Neste</span>
</button>
`;
}
function renderShell() {
  const order = selectedOrder();
  const article = byId(state.articles, state.activeArticleCardId || state.selectedArticleId);
  const ingredient = byId(state.ingredients, state.activeIngredientCardId || state.selectedIngredientId);
  document.querySelector("#view-title").textContent =
    state.currentView === "orderDetail" && order
      ? `Ordre #${order.orderNo}`
      : state.currentView === "articleDetail" && article
        ? article.name
        : state.currentView === "ingredientDetail" && ingredient
          ? ingredient.name
          : viewTitles[state.currentView];
  dateInput.value = state.selectedDate;
  const activeNavView =
    state.currentView === "orderDetail"
      ? "orders"
      : state.currentView === "articleDetail"
        ? "articles"
        : state.currentView === "ingredientDetail"
          ? "ingredients"
          : state.currentView === "inventoryOrder"
            ? "inventory"
            : state.currentView;
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === activeNavView);
  });
}
function render() {
  renderShell();
  const renderers = {
  board: renderBoard,
  webshop: renderWebshop,
  orders: renderOrders,
  orderDetail: renderOrderDetail,
  customers: renderCustomers,
  suppliers: renderSuppliers,
  articles: renderArticles,
  articleDetail: renderArticleDetail,
  ingredients: renderIngredients,
  ingredientDetail: renderIngredientDetail,
  inventory: renderInventory,
  inventoryOrder: renderInventoryOrder,
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
  const drivers = new Set(rows.map((row) => row.delivery.driverId).filter(Boolean));
  app.innerHTML = `
<div class="metrics">
<div class="metric"><span>Leveringer</span><strong>${rows.length}</strong></div>
<div class="metric"><span>Porsjoner/enheter</span><strong>${number(totals.portions, 0)}</strong></div>
<div class="metric"><span>Omsetning</span><strong>${money(totals.revenue)}</strong></div>
<div class="metric"><span>Sjåfører i bruk</span><strong>${drivers.size}</strong></div>
<div class="metric"><span>Kjøretøy i bruk</span><strong>${vehicles.size}</strong></div>
</div>
<section class="section">
<div class="section-header">
<div>
<h2>Dagens ordrer etter kjøkkentid</h2>
<p>${formatDate(state.selectedDate)} · Kjøkkentid, sjåfør og bil kan endres direkte i tabellen.</p>
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
<th>Sjåfør</th>
<th>Bil</th>
<th>Økonomi</th>
<th>Status</th>
</tr>
</thead>
<tbody>
${
  rows.length
  ? rows.map((row, index) => boardRow(row, deliveryGroupClasses(rows, row, index))).join("")
  : `<tr><td colspan="9"><div class="empty">Ingen leveringer på valgt dato.</div></td></tr>`
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
  const driver = byId(state.drivers, delivery.driverId);
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
<select class="inline-input" data-action="edit-driver-delivery" data-delivery-id="${delivery.id}">
${driverOptions(delivery.driverId)}
</select>
</td>
<td>
<select class="inline-input" data-action="edit-vehicle" data-delivery-id="${delivery.id}">
${vehicleOptions(delivery.vehicleId)}
</select>
<div class="muted">${escapeHtml(vehicle?.plate || "Ingen bil")}</div>
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
  const driver = byId(state.drivers, delivery.driverId);
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
<span>Sjåfør</span>
<strong>${escapeHtml(driver?.name || "Ikke valgt")}</strong>
<small>${escapeHtml(driver?.phone || "")}</small>
</div>
<div>
<span>Kjøretøy</span>
<strong>${escapeHtml(vehicle?.name || "Ikke valgt")}</strong>
<small>${escapeHtml(vehicle?.plate || "")}</small>
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
  state.webshop.statusSeen[order.id] = statusSignature(order);
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
<p>Opprett kundeforhold, legg inn bestilling og følg status.</p>
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
${customer ? `<strong>${escapeHtml(customer.name)}</strong><span>${escapeHtml(customer.email || customer.phone || "Ingen kontaktinfo")}</span>` : `<span class="muted">Opprett eller velg kunde for å bestille.</span>`}
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
<label class="field"><span>Kjøkkentid</span>${timeSelect("kitchenTime", "10:00")}</label>
<label class="field"><span>Spisetid</span>${timeSelect("eatingTime", "12:00")}</label>
<label class="field"><span>Vindu fra</span>${timeSelect("windowStart", "11:30")}</label>
</div>
<div class="grid-2">
<label class="field"><span>Vindu til</span>${timeSelect("windowEnd", "11:50")}</label>
<label class="field"><span>Leveringsadresse</span><input name="address" value="${escapeHtml(customer?.invoiceAddress || "")}" required /></label>
</div>
<label class="field"><span>Notat</span><textarea name="notes" placeholder="Allergihensyn, inngang, kontaktperson, osv."></textarea></label>
<div class="form-actions">
<button class="secondary-button" type="button" data-action="clear-webshop-cart"><i data-lucide="trash-2"></i><span>Tøm</span></button>
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
${customer ? renderWebshopOrderStatuses(customer.id) : '<div class="empty small">Velg kunde for å se ordrestatus.</div>'}
</div>
</section>
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
${article.description ? `<p class="product-description">${escapeHtml(article.description)}</p>` : ""}
${article.allergens ? `<small class="allergen-line">Allergener: ${escapeHtml(article.allergens)}</small>` : ""}
<p>${escapeHtml(article.sku)} · ${articleTypeLabel(article.type)}</p>
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
  if (!orders.length) return '<div class="empty small">Ingen ordre ennå.</div>';
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
<span>${formatDate(delivery.date)} · ${formatTime(delivery.windowStart)}-${formatTime(delivery.windowEnd)}</span>
</div>
<span class="status-chip status-${status}">${deliveryStatusLabel(status)}</span>
</div>
`;
}
function renderOrders() {
  const selectedCustomerId = state.selectedCustomerId || state.customers[0]?.id || "";
  const hasCustomers = state.customers.length > 0;
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
<tbody>${state.orders.length ? state.orders.map(orderRow).join("") : '<tr><td colspan="5"><div class="empty">Ingen ordre ennå.</div></td></tr>'}</tbody>
</table>
</div>
<div class="tool-header inner-header">
<div>
<h2>Ny ordre</h2>
<p>Kunde og fakturainfo</p>
</div>
</div>
<form class="form" id="order-form">
<div class="grid-3">
${customerLookupField(selectedCustomerId)}
<label class="field"><span>Kontakt</span><input name="contact" placeholder="Kontaktperson" /></label>
<label class="field"><span>Status</span><select name="status">${options(orderStatuses, "tilbud")}</select></label>
</div>
<div class="grid-2">
<label class="field"><span>Fakturareferanse</span><input name="invoiceReference" placeholder="PO / referanse" /></label>
<label class="field"><span>Faktura e-post</span><input type="email" name="invoiceEmail" placeholder="faktura@kunde.no" /></label>
</div>
<label class="field"><span>Fakturaadresse</span><textarea name="invoiceAddress" placeholder="Fakturaadresse"></textarea></label>
<div class="form-actions">
<button class="primary-button" type="submit" ${hasCustomers ? "" : "disabled"}><i data-lucide="save"></i><span>Opprett ordre</span></button>
</div>
</form>
</section>
`;
}
function renderCustomers() {
  const defaultPriceListId = state.priceLists[0]?.id || "pl-standard";
  app.innerHTML = `
<div class="view-stack">
<section class="section">
<div class="section-header">
<div>
<h2>Kunder</h2>
<p>Kunderegisteret brukes av ordre, faktura og webshop.</p>
</div>
<div class="menu-chip">${state.customers.length} kunder</div>
</div>
<form class="form compact-form" id="customer-form">
<h3>Ny kunde</h3>
<div class="grid-3">
<label class="field"><span>Kundenavn</span><input name="name" placeholder="Kundenavn" required /></label>
<label class="field"><span>Telefon</span><input name="phone" placeholder="Telefon" /></label>
<label class="field"><span>E-post</span><input type="email" name="email" placeholder="post@kunde.no" /></label>
</div>
<div class="grid-2">
<label class="field"><span>Prisliste</span><select name="priceListId">${options(state.priceLists, defaultPriceListId)}</select></label>
<label class="field"><span>Fakturaadresse</span><textarea name="invoiceAddress" placeholder="Fakturaadresse"></textarea></label>
</div>
<div class="form-actions">
<button class="primary-button" type="submit"><i data-lucide="user-plus"></i><span>Opprett kunde</span></button>
</div>
</form>
</section>
<section class="section">
<div class="section-header">
<div>
<h2>Kundeliste</h2>
<p>Rediger kundeinformasjon direkte i listen.</p>
</div>
</div>
<div class="table-wrap">
<table>
<thead>
<tr>
<th>Kunde</th>
<th>Telefon</th>
<th>E-post</th>
<th>Prisliste</th>
<th>Fakturaadresse</th>
<th>Ordre</th>
<th></th>
</tr>
</thead>
<tbody>${state.customers.length ? state.customers.map(customerEditRow).join("") : '<tr><td colspan="7"><div class="empty">Ingen kunder ennå.</div></td></tr>'}</tbody>
</table>
</div>
</section>
`;
}
function customerEditRow(customer) {
  const orderCount = customerOrderCount(customer.id);
  return `
<tr>
<td><input class="inline-input" value="${escapeHtml(customer.name || "")}" data-action="edit-customer" data-id="${customer.id}" data-field="name" /></td>
<td><input class="inline-input" value="${escapeHtml(customer.phone || "")}" data-action="edit-customer" data-id="${customer.id}" data-field="phone" /></td>
<td><input class="inline-input" type="email" value="${escapeHtml(customer.email || "")}" data-action="edit-customer" data-id="${customer.id}" data-field="email" /></td>
<td><select class="inline-input" data-action="edit-customer" data-id="${customer.id}" data-field="priceListId">${options(state.priceLists, customer.priceListId || "pl-standard")}</select></td>
<td><textarea class="inline-input" data-action="edit-customer" data-id="${customer.id}" data-field="invoiceAddress">${escapeHtml(customer.invoiceAddress || "")}</textarea></td>
<td>${orderCount}</td>
<td>
<button class="icon-button danger-button" title="${orderCount ? "Kan ikke slette kunde med ordre" : "Slett kunde"}" type="button" data-action="delete-customer" data-id="${customer.id}" ${orderCount ? "disabled" : ""}>
<i data-lucide="trash-2"></i>
</button>
</td>
</tr>
`;
}
function customerOrderCount(customerId) {
  return state.orders.filter((order) => order.customerId === customerId).length;
}
function deleteCustomer(customerId) {
  const customer = byId(state.customers, customerId);
  if (!customer) return;
  if (customerOrderCount(customer.id)) {
  showToast("Kan ikke slette kunde med ordre");
  return;
  }
if (!window.confirm(`Slette kunden "${customer.name}"? Dette kan ikke angres.`)) return;
  state.customers = state.customers.filter((item) => item.id !== customer.id);
  if (state.selectedCustomerId === customer.id) state.selectedCustomerId = state.customers[0]?.id || "";
  if (state.webshop.customerId === customer.id) state.webshop.customerId = "";
  saveState();
  render();
  showToast(`${customer.name} er slettet`);
}
function renderSuppliers() {
  app.innerHTML = `
<div class="view-stack">
<section class="section">
<div class="section-header">
<div>
<h2>Leverandører</h2>
<p>Leverandører brukes på innkjøpte ingredienser og råvareoversikt.</p>
</div>
<div class="menu-chip">${state.suppliers.length} leverandører</div>
</div>
<form class="inline-create compact" id="supplier-form">
<label class="field"><span>Navn</span><input name="name" required /></label>
<label class="field"><span>Telefon</span><input name="phone" /></label>
<button class="secondary-button" type="submit"><i data-lucide="plus"></i><span>Legg til</span></button>
</form>
</section>
<section class="section">
<div class="section-header">
<div>
<h2>Leverandørliste</h2>
<p>Rediger leverandørnavn og telefon direkte i listen.</p>
</div>
</div>
<div class="table-wrap">
<table>
<thead><tr><th>Leverandør</th><th>Telefon</th><th>Ingredienser</th></tr></thead>
<tbody>${state.suppliers.length ? state.suppliers.map(supplierEditRow).join("") : '<tr><td colspan="3"><div class="empty">Ingen leverandører ennå.</div></td></tr>'}</tbody>
</table>
</div>
</section>
`;
}
function supplierIngredientCount(supplierId) {
  return state.ingredients.filter((ingredient) => ingredient.supplierId === supplierId).length;
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
${customerLookupField(order.customerId)}
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
<div class="delivery-item-row" data-delivery-item-index="${index}" data-delivery-item-id="${escapeHtml(line.id || `item-${index}`)}">
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
  id: row.dataset.deliveryItemId || uid("item"),
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
  app.innerHTML = `
<section class="section">
<div class="section-header">
<div>
<h2>Artikler</h2>
<p>Klikk på en artikkel for å åpne artikkelsiden.</p>
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
<tbody>${state.articles.length ? state.articles.map(articleRow).join("") : '<tr><td colspan="8"><div class="empty">Ingen artikler ennå.</div></td></tr>'}</tbody>
</table>
</div>
</section>
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
<button class="link-button" type="button" data-action="open-article-card" data-article-id="${article.id}">
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
<button class="icon-button" title="Rediger artikkel" type="button" data-action="open-article-card" data-article-id="${article.id}">
<i data-lucide="pencil"></i>
</button>
</td>
</tr>
`;
}
function renderArticleCardModal() {
  if (!state.activeArticleCardId) return "";
  const article = byId(state.articles, state.activeArticleCardId);
  if (!article) return "";
  return `
<div class="modal-backdrop" data-action="close-article-card">
<article class="delivery-modal" role="dialog" aria-modal="true" aria-labelledby="article-modal-title" data-action="modal-content">
<div class="modal-header">
<div>
<p class="eyebrow">Artikkelkort</p>
<h2 id="article-modal-title">${escapeHtml(article.name)}</h2>
</div>
<button class="icon-button" type="button" title="Lukk" data-action="close-article-card">
<i data-lucide="x"></i>
</button>
</div>
<div class="modal-body">
${renderArticleTabs(article)}
${renderArticleForm(article)}
</div>
<div class="modal-actions">
${detailBrowseActions("article", article.id, state.articles)}
<button class="primary-button" type="button" data-action="close-article-card">
<i data-lucide="check"></i><span>Lukk</span>
</button>
</div>
</article>
</div>
`;
}
function renderArticleDetail() {
  const article = byId(state.articles, state.activeArticleCardId || state.selectedArticleId);
  if (!article) {
  app.innerHTML = `
<section class="section">
<div class="section-header">
<div>
<h2>Artikkel ikke funnet</h2>
<p>Velg en artikkel fra listen for å åpne artikkelsiden.</p>
</div>
<button class="secondary-button" type="button" data-action="back-to-articles">
<i data-lucide="arrow-left"></i><span>Til artikler</span>
</button>
</div>
</section>
`;
  return;
  }
const group = byId(state.menuGroups, article.menuGroupId);
  const department = byId(state.departments, article.departmentId);
  const price = byId(state.priceLists, "pl-standard")?.prices?.[article.id] || 0;
  app.innerHTML = `
<div class="view-stack">
<section class="section article-detail-page">
<div class="section-header">
<div>
<p class="eyebrow">Artikkelside</p>
<h2>${escapeHtml(article.name)}</h2>
<p>${escapeHtml(article.sku)} · ${articleTypeLabel(article.type)} · ${escapeHtml(department?.name || "Uten avdeling")} · ${escapeHtml(group?.name || "Uten gruppe")}</p>
</div>
<div class="toolbar">
${detailBrowseActions("article", article.id, state.articles)}
<button class="secondary-button" type="button" data-action="back-to-articles">
<i data-lucide="arrow-left"></i><span>Til artikler</span>
</button>
</div>
</div>
<div class="metrics">
<div class="metric"><span>Kost</span><strong>${money(articleCost(article.id))}</strong></div>
<div class="metric"><span>Standardpris</span><strong>${article.type === "production" ? "Ikke solgt" : money(price)}</strong></div>
<div class="metric"><span>Oppskrift</span><strong>${article.recipe.length}</strong></div>
<div class="metric"><span>Pakke</span><strong>${article.packageItems.length}</strong></div>
</div>
${renderArticleTabs(article)}
<div class="article-detail-body">
${renderArticleForm(article)}
</div>
</section>
${renderArticleImageModal(article)}
</div>
`;
}
function articleTypeLabel(type) {
  return {
  sale: "Salgsartikkel",
  production: "Produksjon",
  package: "Pakke",
  }[type];
}
function articleTabButton(id, label, count) {
  const active = (state.activeArticleTab || "details") === id;
  return `
<button class="tab-button ${active ? "is-active" : ""}" type="button" data-action="select-article-tab" data-tab="${id}">
<span>${label}</span>
<small>${count}</small>
</button>
`;
}
function renderArticleTabs(article) {
  return `
<div class="delivery-tabs article-card-tabs" role="tablist" aria-label="Artikkelkort">
${articleTabButton("details", "Artikkel", articleTypeLabel(article.type))}
${articleTabButton("recipe", "Oppskrift", `${article.recipe.length} linjer`)}
${articleTabButton("package", "Pakkeinnhold", `${article.packageItems.length} linjer`)}
</div>
`;
}
function renderArticleForm(article) {
  if (!article) return `<div class="empty">Ingen artikkel valgt.</div>`;
  const tab = state.activeArticleTab || "details";
  const saveLabel = {
  details: "Lagre artikkel",
  recipe: "Lagre oppskrift",
  package: "Lagre pakkeinnhold",
  }[tab] || "Lagre";
  return `
<form class="form" id="article-form" data-article-tab="${tab}">
<input type="hidden" name="id" value="${article.id}" />
<input type="hidden" name="articleTab" value="${tab}" />
${tab === "details" ? renderArticleDetailsFields(article) : ""}
${tab === "recipe" ? renderArticleRecipeFields(article) : ""}
${tab === "package" ? renderArticlePackageFields(article) : ""}
<div class="form-actions">
<button class="primary-button" type="button" data-action="save-article"><i data-lucide="save"></i><span>${saveLabel}</span></button>
</div>
</form>
`;
}
function currentArticleImage(article) {
  if (!article) return "";
  return article.id === (state.activeArticleCardId || state.selectedArticleId) ? articleImageDraft || article.image || "" : article.image || "";
}
function renderArticleImageModal(article) {
  if (!state.activeArticleImageId) return "";
  const imageArticle = byId(state.articles, state.activeArticleImageId);
  if (!imageArticle) return "";
  const image = imageArticle.id === article?.id ? currentArticleImage(imageArticle) : imageArticle.image || "";
  if (!image) return "";
  return `
<div class="modal-backdrop" data-action="close-article-image">
<article class="delivery-modal article-image-modal" role="dialog" aria-modal="true" aria-labelledby="article-image-title" data-action="modal-content">
<div class="modal-header">
<div>
<p class="eyebrow">Artikkelbilde</p>
<h2 id="article-image-title">${escapeHtml(imageArticle.name)}</h2>
</div>
<button class="icon-button" type="button" title="Lukk" data-action="close-article-image">
<i data-lucide="x"></i>
</button>
</div>
<div class="article-image-full">
<img src="${image}" alt="${escapeHtml(imageArticle.name)}" />
</div>
</article>
</div>
`;
}
function renderArticleDetailsFields(article) {
  const image = currentArticleImage(article);
  return `
<div class="article-image-control">
${
  image
  ? `<button class="image-preview article-thumbnail" id="image-preview" type="button" title="Åpne bilde" data-action="open-article-image" data-article-id="${article.id}">
<img src="${image}" alt="${escapeHtml(article.name)}" />
</button>`
  : `<div class="image-preview article-thumbnail is-empty" id="image-preview"><span>${escapeHtml(article.sku)}</span></div>`
}
<label class="field article-image-upload">
<span>Bilde</span>
<input type="file" accept="image/*" data-action="article-image" />
</label>
</div>
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
<label class="field"><span>Allergener</span><input name="allergens" value="${escapeHtml(article.allergens || "")}" placeholder="Egg, melk, gluten ..." /></label>
<label class="field"><span>Kilde</span><input name="sourceUrl" value="${escapeHtml(article.sourceUrl || "")}" placeholder="https://..." /></label>
</div>
<label class="field"><span>Beskrivelse</span><textarea name="description" placeholder="Kort tekst til webshop og artikkelkort">${escapeHtml(article.description || "")}</textarea></label>
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
`;
}
function renderArticleRecipeFields(article) {
  return `
<div class="grid-2">
<div class="field"><span>Artikkeltype</span><input value="${articleTypeLabel(article.type)}" disabled /></div>
<div class="field"><span>Beregnet kost</span><input value="${money(articleCost(article.id))}" disabled /></div>
</div>
<div>
<h3>Oppskrift ingredienser</h3>
<div class="grid-2">${recipeRows(article)}</div>
</div>
`;
}
function renderArticlePackageFields(article) {
  return `
<div class="grid-2">
<div class="field"><span>Artikkeltype</span><input value="${articleTypeLabel(article.type)}" disabled /></div>
<div class="field"><span>Beregnet kost</span><input value="${money(articleCost(article.id))}" disabled /></div>
</div>
<div>
<h3>Pakkeinnhold</h3>
<div class="grid-2">${packageRows(article)}</div>
</div>
`;
}
function renderRecipes() {
  app.innerHTML = `
<section class="section">
<div class="section-header">
<div>
<h2>Oppskrifter</h2>
<p>Klikk på en artikkel for å åpne oppskriften i eget vindu.</p>
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
<tbody>${state.articles.length ? state.articles.map(recipeArticleRow).join("") : '<tr><td colspan="4"><div class="empty">Ingen artikler ennå.</div></td></tr>'}</tbody>
</table>
</div>
</section>
${renderRecipeModal()}
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
function renderRecipeModal() {
  if (!state.activeRecipeArticleId) return "";
  const article = byId(state.articles, state.activeRecipeArticleId);
  if (!article) return "";
  return `
<div class="modal-backdrop" data-action="close-recipe-window">
<article class="delivery-modal" role="dialog" aria-modal="true" aria-labelledby="recipe-modal-title" data-action="modal-content">
<div class="modal-header">
<div>
<p class="eyebrow">Oppskrift</p>
<h2 id="recipe-modal-title">${escapeHtml(article.name)}</h2>
</div>
<button class="icon-button" type="button" title="Lukk" data-action="close-recipe-window">
<i data-lucide="x"></i>
</button>
</div>
<div class="modal-body">
${renderRecipeForm(article)}
</div>
<div class="modal-actions">
${detailBrowseActions("recipe", article.id, state.articles)}
<button class="primary-button" type="button" data-action="close-recipe-window">
<i data-lucide="check"></i><span>Lukk</span>
</button>
</div>
</article>
</div>
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
<h3>Oppskrift ingredienser</h3>
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
  while (lines.length < ARTICLE_RECIPE_ROW_COUNT) lines.push({ ingredientId: "", qty: "" });
  return lines
.slice(0, ARTICLE_RECIPE_ROW_COUNT)
.map(
  (line, index) => `
<label class="field">
<span>Ingrediens ${index + 1}</span>
<select name="recipeIngredient${index}">
<option value="">Ikke brukt</option>
${options(state.ingredients, line.ingredientId || (line.rawMaterialId ? rawIngredientId(line.rawMaterialId) : ""))}
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
  while (lines.length < PACKAGE_RECIPE_ROW_COUNT) lines.push({ articleId: "", qty: "" });
  const packageChoices = state.articles.filter((item) => item.id !== article.id && item.type !== "package");
  return lines
.slice(0, PACKAGE_RECIPE_ROW_COUNT)
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
function applyArticleRecipeFromData(article, data, mode = "all") {
  if (mode === "all" || mode === "recipe") {
  article.recipe = rowIndexes(ARTICLE_RECIPE_ROW_COUNT)
.map((index) => ({
  ingredientId: data.get(`recipeIngredient${index}`),
  qty: Number(data.get(`recipeQty${index}`) || 0),
  }))
.filter((line) => line.ingredientId && line.qty > 0);
  }
if (mode === "all" || mode === "package") {
  article.packageItems = rowIndexes(PACKAGE_RECIPE_ROW_COUNT)
.map((index) => ({
  articleId: data.get(`packageArticle${index}`),
  qty: Number(data.get(`packageQty${index}`) || 0),
  }))
.filter((line) => line.articleId && line.qty > 0);
  }
}
function refreshArticleDetailSummary(article) {
  renderShell();
  const page = document.querySelector(".article-detail-page");
  if (!page || !article) return;
  const group = byId(state.menuGroups, article.menuGroupId);
  const department = byId(state.departments, article.departmentId);
  const price = byId(state.priceLists, "pl-standard")?.prices?.[article.id] || 0;
  const heading = page.querySelector(".section-header h2");
  const summary = page.querySelector(".section-header p:not(.eyebrow)");
  const metrics = page.querySelectorAll(".metrics .metric strong");
  if (heading) heading.textContent = article.name;
  if (summary) summary.textContent = `${article.sku} · ${articleTypeLabel(article.type)} · ${department?.name || "Uten avdeling"} · ${group?.name || "Uten gruppe"}`;
  if (metrics[0]) metrics[0].textContent = money(articleCost(article.id));
  if (metrics[1]) metrics[1].textContent = article.type === "production" ? "Ikke solgt" : money(price);
  if (metrics[2]) metrics[2].textContent = article.recipe.length;
  if (metrics[3]) metrics[3].textContent = article.packageItems.length;
}
function refreshIngredientDetailSummary(ingredient) {
  renderShell();
  const page = document.querySelector(".ingredient-detail-page");
  if (!page || !ingredient) return;
  const group = byId(state.rawMaterialGroups, ingredient.groupId);
  const supplier = byId(state.suppliers, ingredient.supplierId);
  const department = byId(state.departments, ingredient.departmentId);
  const provider =
ingredient.supplierType === "internal"
  ? department?.name || "Egenprodusert"
  : supplier?.name || "Ikke satt";
  const orderStatus = ingredientOrderStatus(ingredient);
  const heading = page.querySelector(".section-header h2");
  const summary = page.querySelector(".section-header p:not(.eyebrow)");
  const metrics = page.querySelectorAll(".metrics .metric strong");
  if (heading) heading.textContent = ingredient.name;
  if (summary) summary.textContent = `${ingredient.unit} · ${ingredientKindLabel(ingredient)} · ${group?.name || "Uten gruppe"} · ${provider}`;
  if (metrics[0]) metrics[0].textContent = `${number(ingredient.stockQty, 2)} ${ingredient.unit}`;
  if (metrics[1]) metrics[1].textContent = `${number(ingredient.minStockQty, 2)} ${ingredient.unit}`;
  if (metrics[2]) metrics[2].textContent = money(ingredientCost(ingredient.id));
  if (metrics[3]) metrics[3].textContent = orderStatus.label;
}
function saveArticleForm(form, settings = {}) {
  if (!form) return false;
  const options = { renderAfter: true, notify: true, reportValidity: true, ...settings };
  if (options.reportValidity ? !form.reportValidity() : !form.checkValidity()) return false;
  const data = new FormData(form);
  const article = byId(state.articles, data.get("id"));
  if (!article) return false;
  const tab = data.get("articleTab") || form.dataset.articleTab || "details";
  if (tab === "details") {
  article.name = data.get("name");
  article.sku = data.get("sku");
  article.type = data.get("type");
  article.unit = data.get("unit");
  article.menuGroupId = data.get("menuGroupId");
  article.departmentId = data.get("departmentId");
  article.accountCode = data.get("accountCode");
  article.allergens = data.get("allergens") || "";
  article.description = data.get("description") || "";
  article.sourceUrl = data.get("sourceUrl") || "";
  article.image = articleImageDraft || article.image;
  const standard = byId(state.priceLists, "pl-standard");
  if (standard) standard.prices[article.id] = numericInputValue(data.get("standardPrice"));
  }
if (tab === "recipe") {
  applyArticleRecipeFromData(article, data, "recipe");
  }
if (tab === "package") {
  applyArticleRecipeFromData(article, data, "package");
  }
state.selectedArticleId = article.id;
  state.activeArticleCardId = article.id;
  state.activeArticleTab = tab;
  state.activeArticleImageId = "";
  state.currentView = "articleDetail";
  articleImageDraft = article.image || "";
  saveState();
  if (options.renderAfter) {
  render();
  } else {
  refreshArticleDetailSummary(article);
  }
if (options.notify) {
  showToast(tab === "details" ? "Artikkel lagret" : tab === "recipe" ? "Oppskrift lagret" : "Pakkeinnhold lagret");
  }
return true;
}
function sortedIngredients() {
  return [...state.ingredients].sort((a, b) => {
  const kindA = a.supplierType === "internal" ? "1" : "0";
  const kindB = b.supplierType === "internal" ? "1" : "0";
  const groupA = byId(state.rawMaterialGroups, a.groupId)?.name || "";
  const groupB = byId(state.rawMaterialGroups, b.groupId)?.name || "";
  return `${kindA}${groupA}${a.name}`.localeCompare(`${kindB}${groupB}${b.name}`, "nb");
  });
}
function ingredientKindLabel(ingredient) {
  return ingredient.supplierType === "internal" ? "Egenprodusert" : "Innkjøpt";
}
function ingredientUsedInCount(ingredientId) {
  const articleUses = state.articles.reduce(
  (sum, article) => sum + (article.recipe || []).filter((line) => line.ingredientId === ingredientId).length,
  0,
  );
  const ingredientUses = state.ingredients.reduce(
  (sum, ingredient) => sum + (ingredient.recipe || []).filter((line) => line.ingredientId === ingredientId).length,
  0,
  );
  return articleUses + ingredientUses;
}
function renderIngredients() {
  const ingredients = sortedIngredients();
  app.innerHTML = `
<section class="section">
<div class="section-header">
<div>
<h2>Ingredienser</h2>
<p>Klikk på en ingrediens for å åpne den i eget vindu.</p>
</div>
<button class="secondary-button" type="button" data-action="new-ingredient">
<i data-lucide="plus"></i><span>Ny ingrediens</span>
</button>
</div>
<div class="metrics">
<div class="metric"><span>Ingredienser</span><strong>${ingredients.length}</strong></div>
<div class="metric"><span>Innkjøpt</span><strong>${ingredients.filter((ingredient) => ingredient.supplierType !== "internal").length}</strong></div>
<div class="metric"><span>Egenprodusert</span><strong>${ingredients.filter((ingredient) => ingredient.supplierType === "internal").length}</strong></div>
</div>
<div class="table-wrap">
<table>
<thead>
<tr>
<th>Ingrediens</th>
<th>Gruppe</th>
<th>Leverandør</th>
<th>Lager</th>
<th>Oppskrift</th>
<th>Brukt i</th>
<th>Kost</th>
<th></th>
</tr>
</thead>
<tbody>${ingredients.length ? ingredients.map(ingredientRow).join("") : '<tr><td colspan="8"><div class="empty">Ingen ingredienser ennå.</div></td></tr>'}</tbody>
</table>
</div>
</section>
${renderIngredientUsageModal()}
`;
}
function ingredientRow(ingredient) {
  const group = byId(state.rawMaterialGroups, ingredient.groupId);
  const supplier = byId(state.suppliers, ingredient.supplierId);
  return `
<tr class="${ingredient.id === state.selectedIngredientId ? "is-selected" : ""}">
<td>
<button class="link-button" type="button" data-action="open-ingredient-card" data-ingredient-id="${ingredient.id}">
<span class="strong-line">${escapeHtml(ingredient.name)}</span>
</button>
<div class="muted">${escapeHtml(ingredient.unit)}${ingredient.note ? ` · ${escapeHtml(ingredient.note)}` : ""}</div>
</td>
<td><span class="menu-chip">${escapeHtml(group?.name || "Uten gruppe")}</span></td>
<td>${ingredient.supplierType === "internal" ? '<span class="menu-chip">Egenprodusert</span>' : escapeHtml(supplier?.name || "Ekstern")}</td>
<td>${number(ingredient.stockQty, 2)} ${escapeHtml(ingredient.unit)}</td>
<td><span class="menu-chip">${ingredientKindLabel(ingredient)}</span> · ${ingredient.recipe.length}</td>
<td>${ingredientUsedInCount(ingredient.id)}</td>
<td>${money(ingredientCost(ingredient.id))}</td>
<td>
<div class="row-actions">
<button class="icon-button" title="Vis bruk" type="button" data-action="open-ingredient-usage" data-id="${ingredient.id}">
<i data-lucide="info"></i>
</button>
<button class="icon-button danger-button" title="Slett ingrediens" type="button" data-action="delete-ingredient" data-id="${ingredient.id}">
<i data-lucide="trash-2"></i>
</button>
</div>
</td>
</tr>
`;
}
function renderIngredientDetail() {
  const ingredients = sortedIngredients();
  const ingredient = byId(state.ingredients, state.activeIngredientCardId || state.selectedIngredientId);
  if (!ingredient) {
  app.innerHTML = `
<section class="section">
<div class="section-header">
<div>
<h2>Ingrediens</h2>
<p>Velg en ingrediens fra listen for å åpne detaljsiden.</p>
</div>
<button class="secondary-button" type="button" data-action="back-to-ingredients">
<i data-lucide="arrow-left"></i><span>Til ingredienser</span>
</button>
</div>
</section>
`;
  return;
  }
const group = byId(state.rawMaterialGroups, ingredient.groupId);
  const supplier = byId(state.suppliers, ingredient.supplierId);
  const department = byId(state.departments, ingredient.departmentId);
  const provider =
ingredient.supplierType === "internal"
  ? department?.name || "Egenprodusert"
  : supplier?.name || "Ikke satt";
  const orderStatus = ingredientOrderStatus(ingredient);
  app.innerHTML = `
<div class="view-stack">
<section class="section ingredient-detail-page">
<div class="section-header">
<div>
<p class="eyebrow">Ingrediensside</p>
<h2>${escapeHtml(ingredient.name)}</h2>
<p>${escapeHtml(ingredient.unit)} · ${ingredientKindLabel(ingredient)} · ${escapeHtml(group?.name || "Uten gruppe")} · ${escapeHtml(provider)}</p>
</div>
<div class="toolbar">
${detailBrowseActions("ingredient", ingredient.id, ingredients)}
<button class="secondary-button" type="button" data-action="back-to-ingredients">
<i data-lucide="arrow-left"></i><span>Til ingredienser</span>
</button>
</div>
</div>
<div class="metrics">
<div class="metric"><span>Lager</span><strong>${number(ingredient.stockQty, 2)} ${escapeHtml(ingredient.unit)}</strong></div>
<div class="metric"><span>Minimum</span><strong>${number(ingredient.minStockQty, 2)} ${escapeHtml(ingredient.unit)}</strong></div>
<div class="metric"><span>Kost</span><strong>${money(ingredientCost(ingredient.id))}</strong></div>
<div class="metric"><span>Bestilling</span><strong>${escapeHtml(orderStatus.label)}</strong></div>
</div>
<div class="article-detail-body">
${renderIngredientForm(ingredient)}
</div>
</section>
${renderIngredientUsageModal()}
</div>
`;
}
function renderIngredientCardModal() {
  if (!state.activeIngredientCardId) return "";
  const ingredients = sortedIngredients();
  const ingredient = byId(state.ingredients, state.activeIngredientCardId);
  if (!ingredient) return "";
  return `
<div class="modal-backdrop" data-action="close-ingredient-card">
<article class="delivery-modal" role="dialog" aria-modal="true" aria-labelledby="ingredient-modal-title" data-action="modal-content">
<div class="modal-header">
<div>
<p class="eyebrow">Ingrediens</p>
<h2 id="ingredient-modal-title">${escapeHtml(ingredient.name)}</h2>
</div>
<button class="icon-button" type="button" title="Lukk" data-action="close-ingredient-card">
<i data-lucide="x"></i>
</button>
</div>
<div class="modal-body">
${renderIngredientForm(ingredient)}
</div>
<div class="modal-actions">
${detailBrowseActions("ingredient", ingredient.id, ingredients)}
<button class="primary-button" type="button" data-action="close-ingredient-card">
<i data-lucide="check"></i><span>Lukk</span>
</button>
</div>
</article>
</div>
`;
}
function renderIngredientForm(ingredient) {
  if (!ingredient) return `<div class="empty">Ingen ingrediens valgt.</div>`;
  const isInternal = ingredient.supplierType === "internal";
  return `
<form class="form" id="ingredient-form">
<input type="hidden" name="id" value="${ingredient.id}" />
<div class="grid-3">
<label class="field"><span>Navn</span><input name="name" value="${escapeHtml(ingredient.name)}" required /></label>
<label class="field"><span>Enhet</span><select name="unit" required>${ingredientUnitOptions(ingredient.unit)}</select></label>
<label class="field">
<span>Leverandørtype</span>
<select name="supplierType">
<option value="external" ${ingredient.supplierType !== "internal" ? "selected" : ""}>Ekstern</option>
<option value="internal" ${ingredient.supplierType === "internal" ? "selected" : ""}>Egenprodusert</option>
</select>
</label>
</div>
<div class="grid-3">
<label class="field"><span>Gruppe</span><select name="groupId">${options(state.rawMaterialGroups, ingredient.groupId)}</select></label>
<label class="field"><span>Ekstern leverandør</span><select name="supplierId"><option value="">Ikke satt</option>${options(state.suppliers, ingredient.supplierId)}</select></label>
<label class="field"><span>Avdeling</span><select name="departmentId"><option value="">Ikke satt</option>${options(state.departments, ingredient.departmentId)}</select></label>
</div>
<div class="grid-4">
<label class="field"><span>Innkjøpskost</span><input name="cost" type="number" min="0" step="0.01" value="${ingredient.cost || 0}" /></label>
<label class="field"><span>På lager</span><input name="stockQty" type="number" min="-999999" step="0.01" value="${ingredient.stockQty || 0}" /></label>
<label class="field"><span>Min. lager</span><input name="minStockQty" type="number" min="0" step="0.01" value="${ingredient.minStockQty || 0}" /></label>
<label class="field"><span>Tid dager</span><input name="leadTimeDays" type="number" min="0" step="1" value="${ingredient.leadTimeDays || 0}" /></label>
</div>
<div class="field"><span>Beregnet kost</span><input value="${money(ingredientCost(ingredient.id))}" disabled /></div>
<label class="field"><span>Notat</span><input name="note" value="${escapeHtml(ingredient.note || "")}" /></label>
${isInternal ? `
<div>
<h3>Oppskrift for egenprodusert ingrediens</h3>
<div class="grid-2">${ingredientRecipeRows(ingredient)}</div>
</div>
` : ""}
<div class="form-actions">
<button class="primary-button" type="button" data-action="save-ingredient"><i data-lucide="save"></i><span>Lagre ingrediens</span></button>
</div>
</form>
`;
}
function ingredientRecipeRows(ingredient) {
  const lines = [...ingredient.recipe];
  while (lines.length < INGREDIENT_RECIPE_ROW_COUNT) lines.push({ ingredientId: "", qty: "" });
  return lines
.slice(0, INGREDIENT_RECIPE_ROW_COUNT)
.map((line, index) => {
  const value = line.ingredientId || (line.rawMaterialId ? rawIngredientId(line.rawMaterialId) : "");
  return `
<label class="field">
<span>Linje ${index + 1}</span>
<select name="ingredientSource${index}">
${ingredientSourceOptions(value, ingredient.id)}
</select>
</label>
<label class="field">
<span>Mengde</span>
<input type="number" min="0" step="0.001" name="ingredientQty${index}" value="${line.qty}" />
</label>
`;
  })
.join("");
}
function ingredientSourceOptions(selectedValue, currentIngredientId) {
  const ingredientOptions = sortedIngredients()
.filter((ingredient) => ingredient.id !== currentIngredientId)
.map(
  (ingredient) =>
  `<option value="${ingredient.id}" ${selectedValue === ingredient.id ? "selected" : ""}>${escapeHtml(ingredient.name)} (${escapeHtml(ingredient.unit)})</option>`,
  )
.join("");
  return `
<option value="">Ikke brukt</option>
${ingredientOptions}
`;
}
function parseIngredientSource(value, qty) {
  const id = String(value || "");
  if (!id || qty <= 0) return null;
  return { type: "ingredient", ingredientId: id, qty };
}
function ingredientDependsOn(sourceIngredientId, targetIngredientId, seen = new Set()) {
  if (!sourceIngredientId || sourceIngredientId === targetIngredientId || seen.has(sourceIngredientId)) {
  return sourceIngredientId === targetIngredientId;
  }
seen.add(sourceIngredientId);
  const source = byId(state.ingredients, sourceIngredientId);
  if (!source) return false;
  return source.recipe.some((line) => ingredientDependsOn(line.ingredientId, targetIngredientId, new Set(seen)));
}
function ingredientUsageAmountForIngredient(sourceIngredientId, targetIngredientId, multiplier = 1, seen = new Set()) {
  if (!sourceIngredientId || sourceIngredientId === targetIngredientId || seen.has(sourceIngredientId)) {
  return 0;
  }
seen.add(sourceIngredientId);
  const source = byId(state.ingredients, sourceIngredientId);
  if (!source) return 0;
  return (source.recipe || []).reduce((sum, line) => {
  const qty = Number(line.qty || 0) * multiplier;
  if (line.ingredientId === targetIngredientId) return sum + qty;
  return sum + ingredientUsageAmountForIngredient(line.ingredientId, targetIngredientId, qty, new Set(seen));
  }, 0);
}
function ingredientUsageAmountForArticle(articleId, ingredientId) {
  const totals = new Map();
  addRawDemandForArticle(articleId, 1, totals);
  return totals.get(ingredientId) || 0;
}
function ingredientUsage(ingredientId) {
  const usedByIngredients = state.ingredients
.map((ingredient) => ({
  id: ingredient.id,
  name: ingredient.name,
  unit: ingredient.unit,
  amount: ingredientUsageAmountForIngredient(ingredient.id, ingredientId),
  }))
.filter((ingredient) => ingredient.amount > 0);
  const usedByArticles = state.articles
.map((article) => ({
  id: article.id,
  name: article.name,
  sku: article.sku,
  unit: article.unit,
  amount: ingredientUsageAmountForArticle(article.id, ingredientId),
  }))
.filter((article) => article.amount > 0);
  const inventoryAdjustments = Object.values(state.productionInventoryAdjustments || {}).filter((adjustment) =>
  Object.prototype.hasOwnProperty.call(adjustment, ingredientId),
  ).length;
  return { usedByIngredients, usedByArticles, inventoryAdjustments };
}
function ingredientUsageMessage(usage) {
  const parts = [];
  if (usage.usedByIngredients.length) {
  parts.push(`ingredienser: ${usage.usedByIngredients.slice(0, 3).map((item) => item.name).join(", ")}`);
  }
if (usage.usedByArticles.length) {
  parts.push(`artikler: ${usage.usedByArticles.slice(0, 3).map((item) => item.name).join(", ")}`);
  }
if (usage.inventoryAdjustments) {
  parts.push("produksjon med lagerjustering");
  }
return parts.join(" / ");
}
function renderIngredientUsageModal() {
  if (!state.activeIngredientUsageId) return "";
  const ingredient = byId(state.ingredients, state.activeIngredientUsageId);
  if (!ingredient) return "";
  const usage = ingredientUsage(ingredient.id);
  const group = byId(state.rawMaterialGroups, ingredient.groupId);
  const supplier = byId(state.suppliers, ingredient.supplierId);
  const hasUsage = usage.usedByIngredients.length || usage.usedByArticles.length || usage.inventoryAdjustments;
  return `
<div class="modal-backdrop" data-action="close-ingredient-usage">
<article class="delivery-modal" role="dialog" aria-modal="true" aria-labelledby="ingredient-usage-title" data-action="modal-content">
<div class="modal-header">
<div>
<p class="eyebrow">Ingrediensbruk</p>
<h2 id="ingredient-usage-title">${escapeHtml(ingredient.name)}</h2>
</div>
<button class="icon-button" type="button" title="Lukk" data-action="close-ingredient-usage">
<i data-lucide="x"></i>
</button>
</div>
<div class="modal-body">
<div class="info-grid">
<div>
<span>Gruppe</span>
<strong>${escapeHtml(group?.name || "Uten gruppe")}</strong>
<small>${escapeHtml(ingredient.unit)}</small>
</div>
<div>
<span>Leverandør</span>
<strong>${ingredient.supplierType === "internal" ? "Egenprodusert" : escapeHtml(supplier?.name || "Ikke satt")}</strong>
<small>${ingredient.supplierType === "internal" ? escapeHtml(byId(state.departments, ingredient.departmentId)?.name || "") : escapeHtml(supplier?.phone || "")}</small>
</div>
<div>
<span>Lager</span>
<strong>${number(ingredient.stockQty, 2)} ${escapeHtml(ingredient.unit)}</strong>
<small>Minimum ${number(ingredient.minStockQty, 2)} · ${number(ingredient.leadTimeDays, 0)} dager</small>
</div>
<div>
<span>Kost</span>
<strong>${money(ingredientCost(ingredient.id))}</strong>
<small>Per ${escapeHtml(ingredient.unit)}</small>
</div>
</div>
${
  hasUsage
  ? `
<div class="modal-section">
<h3>Brukt i ingredienser</h3>
<div class="modal-lines">
${usage.usedByIngredients.length ? usage.usedByIngredients.map((item) => ingredientUsageIngredientLine(item, ingredient)).join("") : '<div class="empty small">Ikke brukt i andre ingredienser.</div>'}
</div>
</div>
<div class="modal-section">
<h3>Brukt i artikler</h3>
<div class="modal-lines">
${usage.usedByArticles.length ? usage.usedByArticles.map((item) => ingredientUsageArticleLine(item, ingredient)).join("") : '<div class="empty small">Ikke brukt direkte i artikler.</div>'}
</div>
</div>
`
  : '<div class="empty small">Ingrediensen er ikke i bruk i andre ingredienser eller artikler.</div>'
}
${
  usage.inventoryAdjustments
  ? `<div class="modal-section"><h3>Produksjon</h3><p class="modal-note">Ingrediensen inngår i ${usage.inventoryAdjustments} lagerjustering(er).</p></div>`
  : ""
}
</div>
<div class="modal-actions">
<button class="primary-button" type="button" data-action="close-ingredient-usage">
<i data-lucide="check"></i><span>Lukk</span>
</button>
</div>
</article>
</div>
`;
}
function ingredientUsageIngredientLine(item, ingredient) {
  return `
<div class="modal-line">
<div>
<strong>${escapeHtml(item.name)}</strong>
<small>${number(item.amount, 3)} ${escapeHtml(ingredient.unit)} per ${escapeHtml(item.unit)}</small>
</div>
<div>Ingrediens</div>
</div>
`;
}
function ingredientUsageArticleLine(item, ingredient) {
  return `
<div class="modal-line">
<div>
<strong>${escapeHtml(item.name)}</strong>
<small>${escapeHtml(item.sku || "")} · ${number(item.amount, 3)} ${escapeHtml(ingredient.unit)} per ${escapeHtml(item.unit)}</small>
</div>
<div>Artikkel</div>
</div>
`;
}
function deleteIngredient(ingredientId) {
  const ingredient = byId(state.ingredients, ingredientId);
  if (!ingredient) return;
  const usage = ingredientUsage(ingredientId);
  const isUsed = usage.usedByIngredients.length || usage.usedByArticles.length || usage.inventoryAdjustments;
  if (isUsed) {
  showToast(`Kan ikke slette ${ingredient.name}. Brukes i ${ingredientUsageMessage(usage)}.`);
  return;
  }
if (!window.confirm(`Slette ingrediensen "${ingredient.name}"? Dette kan ikke angres.`)) return;
  state.ingredients = state.ingredients.filter((item) => item.id !== ingredientId);
  saveState();
  render();
  showToast(`${ingredient.name} er slettet`);
}
function sortedRawMaterials() {
  return sortedStockIngredients();
}
function sortedStockIngredients() {
  return [...state.ingredients].sort((a, b) => {
  const groupA = byId(state.rawMaterialGroups, a.groupId)?.name || "";
  const groupB = byId(state.rawMaterialGroups, b.groupId)?.name || "";
  const typeA = a.supplierType === "internal" ? "1" : "0";
  const typeB = b.supplierType === "internal" ? "1" : "0";
  return `${typeA}${groupA}${a.name}`.localeCompare(`${typeB}${groupB}${b.name}`, "nb");
  });
}
function rawDemandForDate(date, { includeCompleted = false, departmentId = "all", kitchenTime = "all" } = {}) {
  const totals = new Map();
  allDeliveriesForDate(date).forEach(({ order, delivery }) => {
  if (kitchenTime !== "all" && delivery.kitchenTime !== kitchenTime) return;
  delivery.items.forEach((item) => {
  if (departmentId !== "all") {
  const lines = [];
  collectIngredientDemandForArticle(
  item.articleId,
  Number(item.qty || 0),
  { order, delivery, orderedArticle: byId(state.articles, item.articleId), departmentId },
  lines
);
  lines.forEach((line) => totals.set(line.ingredientId, (totals.get(line.ingredientId) || 0) + Number(line.amount || 0)));
  return;
  }
addRawDemandForArticle(item.articleId, Number(item.qty || 0), totals);
  });
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
  const ingredientId = line.ingredientId || (line.rawMaterialId ? rawIngredientId(line.rawMaterialId) : "");
  if (!ingredientId) return;
  totals.set(ingredientId, (totals.get(ingredientId) || 0) + Number(line.qty || 0) * qty);
  });
}
function addRawDemandForIngredient(ingredientId, qty, totals, seen = new Set()) {
  const ingredient = byId(state.ingredients, ingredientId);
  if (!ingredient || seen.has(ingredientId)) return;
  seen.add(ingredientId);
  ingredient.recipe.forEach((line) => {
  const lineQty = Number(line.qty || 0) * qty;
  if (!line.ingredientId) return;
  totals.set(line.ingredientId, (totals.get(line.ingredientId) || 0) + lineQty);
  });
}
function productionAdjustmentKey(date, articleId) {
  return `${date}__${articleId}`;
}
function adjustRawStock(ingredientId, delta) {
  const ingredient = byId(state.ingredients, ingredientId);
  if (!ingredient) return;
  ingredient.stockQty = Number(ingredient.stockQty || 0) + delta;
}
function applyInventoryDelta(delta) {
  Object.entries(delta || {}).forEach(([ingredientId, qty]) => adjustRawStock(ingredientId, Number(qty || 0)));
}
function reverseInventoryDelta(delta) {
  Object.entries(delta || {}).forEach(([ingredientId, qty]) => adjustRawStock(ingredientId, -Number(qty || 0)));
}
function applyProductionInventoryAdjustment(date, articleId, isComplete) {
  const key = productionAdjustmentKey(date, articleId);
  const existing = state.productionInventoryAdjustments[key];
  if (isComplete && !existing) {
  const demand = rawDemandForProductionArticle(date, articleId);
  const adjustment = Object.fromEntries([...demand.entries()].map(([ingredientId, qty]) => [ingredientId, -Number(qty || 0)]));
  applyInventoryDelta(adjustment);
  state.productionInventoryAdjustments[key] = adjustment;
  return;
  }
if (!isComplete && existing) {
  reverseInventoryDelta(existing);
  delete state.productionInventoryAdjustments[key];
  }
}
function hasProductionInventoryAdjustment(date, articleId) {
  return Boolean(state.productionInventoryAdjustments?.[productionAdjustmentKey(date, articleId)]);
}
function ingredientProductionKey(ingredientId) {
  return `ingredient:${ingredientId}`;
}
function rawDemandForProductionIngredient(ingredientId, qty) {
  const totals = new Map();
  addRawDemandForIngredient(ingredientId, qty, totals);
  return totals;
}
function applyIngredientProductionInventoryAdjustment(date, ingredientId, qty, isComplete) {
  const key = productionAdjustmentKey(date, ingredientProductionKey(ingredientId));
  const existing = state.productionInventoryAdjustments[key];
  if (isComplete && !existing) {
  const childDemand = rawDemandForProductionIngredient(ingredientId, qty);
  const adjustment = Object.fromEntries([...childDemand.entries()].map(([childId, amount]) => [childId, -Number(amount || 0)]));
  adjustment[ingredientId] = Number(adjustment[ingredientId] || 0) + Number(qty || 0);
  applyInventoryDelta(adjustment);
  state.productionInventoryAdjustments[key] = adjustment;
  return;
  }
if (!isComplete && existing) {
  reverseInventoryDelta(existing);
  delete state.productionInventoryAdjustments[key];
  }
}
function hasIngredientProductionInventoryAdjustment(date, ingredientId) {
  return Boolean(state.productionInventoryAdjustments?.[productionAdjustmentKey(date, ingredientProductionKey(ingredientId))]);
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
function inventoryOrderQty(ingredient) {
  return Math.max(0, Number(ingredient.minStockQty || 0) - Number(ingredient.stockQty || 0));
}
function inventoryBelowMinimumIngredients() {
  return sortedStockIngredients().filter(
  (ingredient) => Number(ingredient.minStockQty || 0) > 0 && Number(ingredient.stockQty || 0) < Number(ingredient.minStockQty || 0),
  );
}
function inventoryOrderDraftTotal() {
  return (state.inventoryOrderDraft || []).reduce((sum, line) => sum + Number(line.qty || 0) * ingredientCost(line.ingredientId), 0);
}
function inventoryOrderDraftLines() {
  return inventoryBelowMinimumIngredients().map((ingredient) => ({
  id: uid("invord"),
  ingredientId: ingredient.id,
  qty: inventoryOrderQty(ingredient),
  receivedQty: inventoryOrderQty(ingredient),
  receivedDate: state.selectedDate,
  note: "",
  }));
}
function ingredientSupplierKey(ingredient) {
  if (!ingredient) return "__none";
  if (ingredient.supplierType === "internal") return "__internal";
  return ingredient.supplierId || "__none";
}
function ingredientSupplierLabel(ingredient) {
  if (!ingredient) return "Ikke satt";
  if (ingredient.supplierType === "internal") return byId(state.departments, ingredient.departmentId)?.name || "Egenprodusert";
  return byId(state.suppliers, ingredient.supplierId)?.name || "Ikke satt";
}
function inventoryOrderLineDetails(line, index) {
  const ingredient = byId(state.ingredients, line.ingredientId);
  return {
  line,
  index,
  ingredient,
  supplierKey: ingredientSupplierKey(ingredient),
  supplierLabel: ingredientSupplierLabel(ingredient),
  };
}
function inventoryOrderDetails() {
  return (state.inventoryOrderDraft || []).map(inventoryOrderLineDetails).filter((item) => item.ingredient);
}
function filteredInventoryOrderDetails() {
  const filter = state.inventoryOrderSupplierFilter || "all";
  const statusFilter = state.inventoryOrderStatusFilter || "all";
  return inventoryOrderDetails().filter((item) => {
  if (filter !== "all" && item.supplierKey !== filter) return false;
  if (statusFilter !== "all" && item.ingredient?.orderStatus !== statusFilter) return false;
  return true;
  });
}
function inventoryOrderSupplierOptions(details = inventoryOrderDetails()) {
  return supplierFilterOptions(state.inventoryOrderSupplierFilter || "all", details.map((item) => item.supplierKey));
}
function inventorySupplierOptions(ingredients = sortedStockIngredients()) {
  return supplierFilterOptions(state.inventorySupplierFilter || "all", ingredients.map(ingredientSupplierKey));
}
function inventoryStatusFilterOptions() {
  const selected = state.inventoryStatusFilter || "all";
  const optionsList = [
  { id: "all", name: "Alle statuser" },
  { id: "ready", name: "OK" },
  { id: "open", name: "Bestill snart" },
  { id: "low", name: "Under minimum" },
  ];
  return options(optionsList, selected);
}
function inventoryOrderStatusFilterOptions() {
  const selected = state.inventoryOrderStatusFilter || "all";
  const optionsList = [
  { id: "all", name: "Alle statuser" },
  { id: "ok", name: "OK" },
  { id: "bestilt", name: "Bestilt" },
  ];
  return options(optionsList, selected);
}
function supplierFilterOptions(selectedId, usedKeys = []) {
  const optionsList = [{ id: "all", name: "Alle leverandører" }];
  const seen = new Set(["all"]);
  state.suppliers
.slice()
.sort((a, b) => a.name.localeCompare(b.name, "nb"))
.forEach((supplier) => {
  if (!supplier?.id || seen.has(supplier.id)) return;
  seen.add(supplier.id);
  optionsList.push({ id: supplier.id, name: supplier.name });
  });
  if (usedKeys.includes("__internal") && !seen.has("__internal")) {
  optionsList.push({ id: "__internal", name: "Egenprodusert" });
  seen.add("__internal");
  }
if (usedKeys.includes("__none") && !seen.has("__none")) {
  optionsList.push({ id: "__none", name: "Ikke satt" });
  }
return options(optionsList, selectedId || "all");
}
function unusedLegacyInventoryOrderSupplierOptions(details = inventoryOrderDetails()) {
  const optionsList = [{ id: "all", name: "Alle leverandører" }];
  const seen = new Set(["all"]);
  details.forEach((item) => {
  if (seen.has(item.supplierKey)) return;
  seen.add(item.supplierKey);
  optionsList.push({ id: item.supplierKey, name: item.supplierLabel });
  });
  return options(optionsList, state.inventoryOrderSupplierFilter || "all");
}
function unusedLegacyInventorySupplierOptions(ingredients = sortedStockIngredients()) {
  const optionsList = [{ id: "all", name: "Alle leverandører" }];
  const seen = new Set(["all"]);
  ingredients.forEach((ingredient) => {
  const supplierKey = ingredientSupplierKey(ingredient);
  if (seen.has(supplierKey)) return;
  seen.add(supplierKey);
  optionsList.push({ id: supplierKey, name: ingredientSupplierLabel(ingredient) });
  });
  return options(optionsList, state.inventorySupplierFilter || "all");
}
function filteredInventoryIngredients(ingredients = sortedStockIngredients(), demand = inventoryDemandForCurrentFilters()) {
  const filter = state.inventorySupplierFilter || "all";
  const statusFilter = state.inventoryStatusFilter || "all";
  return ingredients.filter((ingredient) => {
  if (filter !== "all" && ingredientSupplierKey(ingredient) !== filter) return false;
  if (statusFilter !== "all" && inventoryStatus(ingredient, demand.get(ingredient.id) || 0).className !== statusFilter) return false;
  return true;
  });
}
function inventoryDemandForCurrentFilters() {
  return rawDemandForDate(state.selectedDate, {
  departmentId: state.inventoryDepartmentFilter || "all",
  kitchenTime: state.inventoryKitchenTimeFilter || "all",
  });
}
function inventoryKitchenTimeOptions() {
  const departmentId = state.inventoryDepartmentFilter || "all";
  const times = [...new Set(allDeliveriesForDate(state.selectedDate)
.filter(({ delivery }) => {
  if (departmentId === "all") return true;
  return (delivery.items || []).some((item) => {
  const article = byId(state.articles, item.articleId);
  return article?.departmentId === departmentId || packingArticleMatchesDepartment(article, departmentId);
  });
  })
.map(({ delivery }) => delivery.kitchenTime)
.filter(Boolean))]
.sort((a, b) => a.localeCompare(b, "nb"));
  const selected = times.includes(state.inventoryKitchenTimeFilter) ? state.inventoryKitchenTimeFilter : "all";
  if (selected !== state.inventoryKitchenTimeFilter) state.inventoryKitchenTimeFilter = "all";
  return `<option value="all" ${selected === "all" ? "selected" : ""}>Alle tider</option>${times
.map((time) => `<option value="${escapeHtml(time)}" ${selected === time ? "selected" : ""}>${escapeHtml(time)}</option>`)
.join("")}`;
}
function renderInventoryTabs() {
  const tab = state.activeInventoryTab || "stock";
  const orderCount = state.inventoryOrderDraft?.length || 0;
  const wasteCount = state.inventoryWasteLog?.length || 0;
  return `
<div class="delivery-tabs article-card-tabs" role="tablist" aria-label="Lager">
<button class="tab-button ${tab === "stock" ? "is-active" : ""}" type="button" data-action="select-inventory-tab" data-tab="stock">
<span>Varebeholdning</span>
<small>Lager</small>
</button>
<button class="tab-button ${tab === "order" ? "is-active" : ""}" type="button" data-action="select-inventory-tab" data-tab="order">
<span>Bestillingsliste</span>
<small>${orderCount} linjer</small>
</button>
<button class="tab-button ${tab === "receiving" ? "is-active" : ""}" type="button" data-action="select-inventory-tab" data-tab="receiving">
<span>Varemottak</span>
<small>${orderCount} linjer</small>
</button>
<button class="tab-button ${tab === "waste" ? "is-active" : ""}" type="button" data-action="select-inventory-tab" data-tab="waste">
<span>Svinn</span>
<small>${wasteCount} registrert</small>
</button>
</div>
`;
}
function renderInventoryDemandFilters() {
  return `
<section class="section">
<div class="inline-create compact">
<label class="field">
<span>Avdeling</span>
<select data-action="select-inventory-department">
<option value="all" ${state.inventoryDepartmentFilter === "all" ? "selected" : ""}>Alle avdelinger</option>
${options(state.departments, state.inventoryDepartmentFilter || "all")}
</select>
</label>
<label class="field">
<span>Kjøkkentid</span>
<select data-action="select-inventory-kitchen-time">
${inventoryKitchenTimeOptions()}
</select>
</label>
</div>
</section>
`;
}
function ingredientOrderStatus(ingredient) {
  return ingredient?.orderStatus === "bestilt"
  ? { className: "open", label: "Bestilt" }
: { className: "ready", label: "OK" };
}
function inventoryWasteOptions(ingredients = sortedStockIngredients()) {
  return ingredients
.map((ingredient) => `<option value="${escapeHtml(ingredient.name)}">${number(ingredient.stockQty, 2)} ${escapeHtml(ingredient.unit)} på lager</option>`)
.join("");
}
function resolveWasteIngredient(query) {
  const normalized = normalizedRawName(query);
  if (!normalized) return null;
  return state.ingredients.find((ingredient) => normalizedRawName(ingredient.name) === normalized) || state.ingredients.find((ingredient) => normalizedRawName(ingredient.name).includes(normalized));
}
function renderWasteRegistration(ingredients) {
  const recent = (state.inventoryWasteLog || []).slice(0, 8);
  return `
<section class="section">
<div class="section-header">
<div>
<h2>Registrer svinn</h2>
<p>Søk opp en vare og registrer mengde som er kastet. Lageret trekkes ned med en gang.</p>
</div>
</div>
<form class="inline-create waste-create" id="waste-form">
<label class="field">
<span>Vare</span>
<input name="ingredientQuery" list="waste-ingredient-options" placeholder="Søk etter vare" required />
<datalist id="waste-ingredient-options">${inventoryWasteOptions(ingredients)}</datalist>
</label>
<label class="field"><span>Mengde</span><input name="qty" type="number" min="0.001" step="0.001" placeholder="0,00" required /></label>
<label class="field"><span>Årsak</span><input name="reason" placeholder="Kast, brekkasje, utgått dato ..." /></label>
<button class="primary-button" type="submit"><i data-lucide="trash-2"></i><span>Registrer svinn</span></button>
</form>
<div class="table-wrap">
<table>
<thead>
<tr>
<th>Tid</th>
<th>Vare</th>
<th>Mengde</th>
<th>Årsak</th>
</tr>
</thead>
<tbody>${recent.length ? recent.map(wasteLogRow).join("") : '<tr><td colspan="4"><div class="empty small">Ingen svinnregistreringer ennå.</div></td></tr>'}</tbody>
</table>
</div>
</section>
`;
}
function wasteLogRow(entry) {
  const ingredient = byId(state.ingredients, entry.ingredientId);
  return `
<tr>
<td>${escapeHtml(formatDateTime(entry.createdAt))}</td>
<td>
<span class="strong-line">${escapeHtml(ingredient?.name || entry.ingredientName)}</span>
<div class="muted">${escapeHtml(ingredient ? ingredientSupplierLabel(ingredient) : "")}</div>
</td>
<td>${number(entry.qty, 3)} ${escapeHtml(entry.unit || ingredient?.unit || "")}</td>
<td>${escapeHtml(entry.reason || "Ikke angitt")}</td>
</tr>
`;
}
function renderInventory() {
  const tab = state.activeInventoryTab || "stock";
  state.inventoryReceivingOpen = tab === "receiving";
  app.innerHTML = `
<div class="view-stack">
${renderInventoryTabs()}
${renderInventoryDemandFilters()}
${
  tab === "order"
    ? renderInventoryOrderPanel()
    : tab === "receiving"
      ? renderInventoryReceivingPanel()
      : tab === "waste"
        ? renderWasteRegistration(sortedStockIngredients())
        : renderInventoryStockPanel()
}
</div>
`;
}
function renderInventoryStockPanel() {
  const demand = inventoryDemandForCurrentFilters();
  const allIngredients = sortedStockIngredients();
  const ingredients = filteredInventoryIngredients(allIngredients, demand);
  const stockValue = ingredients.reduce((sum, ingredient) => sum + Number(ingredient.stockQty || 0) * ingredientCost(ingredient.id), 0);
  const belowMinimum = ingredients.filter((ingredient) => inventoryOrderQty(ingredient) > 0).length;
  const shouldOrder = ingredients.filter((ingredient) => inventoryStatus(ingredient, demand.get(ingredient.id) || 0).orderQty > 0).length;
  return `
<div class="metrics">
<div class="metric"><span>Ingredienser</span><strong>${ingredients.length}</strong></div>
<div class="metric"><span>Lagerverdi</span><strong>${money(stockValue)}</strong></div>
<div class="metric"><span>Under minimum</span><strong>${belowMinimum}</strong></div>
<div class="metric"><span>Bør bestilles</span><strong>${shouldOrder}</strong></div>
</div>
<section class="section">
<div class="section-header">
<div>
<h2>Varebeholdning ingredienser</h2>
<p>På lager, minste beholdning og bestillingstid redigeres pr. ingrediens.</p>
</div>
<div class="toolbar">
<label class="field compact-field">
<span>Leverandør</span>
<select data-action="select-inventory-supplier">${inventorySupplierOptions(allIngredients)}</select>
</label>
<label class="field compact-field">
<span>Status</span>
<select data-action="select-inventory-status">${inventoryStatusFilterOptions()}</select>
</label>
</div>
</div>
<div class="table-wrap">
<table>
<thead>
<tr>
<th>Ingrediens</th>
<th>Gruppe</th>
<th>Leverandør</th>
<th>På lager</th>
<th>Min.</th>
<th>Tid</th>
<th>Dagens behov</th>
<th>Status</th>
<th>Anbefalt handling</th>
<th>Bestilling</th>
</tr>
</thead>
<tbody>${ingredients.length ? ingredients.map((ingredient) => inventoryRow(ingredient, demand.get(ingredient.id) || 0)).join("") : '<tr><td colspan="10"><div class="empty">Ingen ingredienser på lager ennå.</div></td></tr>'}</tbody>
</table>
</div>
</section>
`;
}
function renderInventoryOrder() {
  state.activeInventoryTab = "order";
  renderInventory();
}
function renderInventoryOrderPanel() {
  const details = inventoryOrderDetails();
  const visibleDetails = filteredInventoryOrderDetails();
  return `
<section class="section">
<div class="section-header">
<div>
<p class="eyebrow">Lager</p>
<h2>Bestillingsliste</h2>
<p>Bestillingslisten ligger i eget vindu og kan filtreres, eksporteres og brukes til varemottak.</p>
</div>
<div class="toolbar">
<button class="secondary-button" type="button" data-action="generate-inventory-order-list">
<i data-lucide="refresh-cw"></i><span>Regenerer</span>
</button>
<button class="secondary-button" type="button" data-action="clear-inventory-order-list" ${details.length ? "" : "disabled"}>
<i data-lucide="trash-2"></i><span>Tøm liste</span>
</button>
</div>
</div>
<div class="metrics">
<div class="metric"><span>Linjer</span><strong>${details.length}</strong></div>
<div class="metric"><span>Vises</span><strong>${visibleDetails.length}</strong></div>
<div class="metric"><span>Verdi</span><strong>${money(inventoryOrderDraftTotal())}</strong></div>
<div class="metric"><span>Leverandører</span><strong>${new Set(details.map((item) => item.supplierKey)).size}</strong></div>
</div>
<div class="inline-create compact">
<label class="field">
<span>Leverandør</span>
<select data-action="select-inventory-order-supplier">${inventoryOrderSupplierOptions(details)}</select>
</label>
<label class="field">
<span>Status</span>
<select data-action="select-inventory-order-status">${inventoryOrderStatusFilterOptions()}</select>
</label>
<button class="primary-button" type="button" data-action="generate-inventory-order-excel" ${details.length ? "" : "disabled"}>
<i data-lucide="file-spreadsheet"></i><span>Generer bestilling</span>
</button>
</div>
</section>
<section class="section">
<div class="section-header">
<div>
<h2>${state.inventoryReceivingOpen ? "Varemottak" : "Bestillingslinjer"}</h2>
<p>${state.inventoryReceivingOpen ? "Registrer mottatt mengde. Lager oppdateres og bestillingsstatus settes til OK." : "Rediger vare, leverandør, mengde og notat før bestilling genereres."}</p>
</div>
</div>
<div class="table-wrap">
<table>
<thead>
<tr>
<th>Vare</th>
<th>Leverandør</th>
<th>Status</th>
<th>Lager/min.</th>
<th>Handling</th>
<th>Mengde</th>
${state.inventoryReceivingOpen ? "<th>Mottatt</th><th>Dato</th>" : ""}
<th>Notat</th>
<th>Verdi</th>
<th></th>
</tr>
</thead>
<tbody>${visibleDetails.length ? visibleDetails.map(inventoryOrderListRow).join("") : '<tr><td colspan="10"><div class="empty">Ingen linjer i bestillingslisten.</div></td></tr>'}</tbody>
</table>
</div>
</section>
`;
}
function renderInventoryReceivingPanel() {
  const details = inventoryOrderDetails();
  const visibleDetails = filteredInventoryOrderDetails();
  return `
<section class="section">
<div class="section-header">
<div>
<p class="eyebrow">Lager</p>
<h2>Varemottak</h2>
<p>Registrer mottatt mengde og dato. Lager oppdateres og bestillingsstatus settes til OK.</p>
</div>
<div class="toolbar">
<button class="secondary-button" type="button" data-action="generate-inventory-order-list">
<i data-lucide="refresh-cw"></i><span>Regenerer</span>
</button>
</div>
</div>
<div class="metrics">
<div class="metric"><span>Linjer</span><strong>${details.length}</strong></div>
<div class="metric"><span>Vises</span><strong>${visibleDetails.length}</strong></div>
<div class="metric"><span>Verdi</span><strong>${money(inventoryOrderDraftTotal())}</strong></div>
<div class="metric"><span>Leverandører</span><strong>${new Set(details.map((item) => item.supplierKey)).size}</strong></div>
</div>
<div class="inline-create compact">
<label class="field">
<span>Leverandør</span>
<select data-action="select-inventory-order-supplier">${inventoryOrderSupplierOptions(details)}</select>
</label>
<label class="field">
<span>Status</span>
<select data-action="select-inventory-order-status">${inventoryOrderStatusFilterOptions()}</select>
</label>
</div>
</section>
<section class="section">
<div class="section-header">
<div>
<h2>Mottakslinjer</h2>
<p>Fyll inn mottatt mengde og dato for hver vare som kommer inn.</p>
</div>
</div>
<div class="table-wrap">
<table>
<thead>
<tr>
<th>Vare</th>
<th>Leverandør</th>
<th>Status</th>
<th>Lager/min.</th>
<th>Handling</th>
<th>Mengde</th>
<th>Mottatt</th>
<th>Dato</th>
<th>Notat</th>
<th>Verdi</th>
<th></th>
</tr>
</thead>
<tbody>${visibleDetails.length ? visibleDetails.map(inventoryOrderListRow).join("") : '<tr><td colspan="11"><div class="empty">Ingen linjer i bestillingslisten.</div></td></tr>'}</tbody>
</table>
</div>
</section>
`;
}
function inventoryOrderListRow(item) {
  const { line, index, ingredient, supplierLabel } = item;
  const ingredients = sortedStockIngredients();
  const actionLabel = ingredient?.supplierType === "internal" ? "Produser" : "Bestill";
  const qty = Number(line.qty || 0);
  const receivedQty = Number(line.receivedQty ?? line.qty ?? 0);
  const orderStatus = ingredientOrderStatus(ingredient);
  return `
<tr>
<td>
<select class="inline-input" data-action="edit-inventory-order-line" data-index="${index}" data-field="ingredientId">
${options(ingredients, line.ingredientId)}
</select>
<div class="muted">${escapeHtml(byId(state.rawMaterialGroups, ingredient?.groupId)?.name || "Uten gruppe")}</div>
</td>
<td>${escapeHtml(supplierLabel)}</td>
<td><span class="status-chip ${orderStatus.className}">${orderStatus.label}</span></td>
<td>${number(ingredient?.stockQty, 2)} / ${number(ingredient?.minStockQty, 2)} ${escapeHtml(ingredient?.unit || "")}</td>
<td><span class="menu-chip">${actionLabel}</span></td>
<td>
<input class="inline-input price-input" type="text" inputmode="decimal" value="${qty}" data-action="edit-inventory-order-line" data-index="${index}" data-field="qty" />
${escapeHtml(ingredient?.unit || "")}
</td>
${
  state.inventoryReceivingOpen
  ? `<td>
<input class="inline-input price-input" type="text" inputmode="decimal" value="${receivedQty}" data-action="edit-inventory-order-line" data-index="${index}" data-field="receivedQty" />
${escapeHtml(ingredient?.unit || "")}
</td>
<td>
<input class="inline-input" type="text" inputmode="numeric" placeholder="dd.mm.yyyy" value="${formatDate(line.receivedDate || state.selectedDate)}" data-action="edit-inventory-order-line" data-index="${index}" data-field="receivedDate" />
</td>`
  : ""
}
<td><input class="inline-input" value="${escapeHtml(line.note || "")}" data-action="edit-inventory-order-line" data-index="${index}" data-field="note" /></td>
<td>${money(qty * ingredientCost(ingredient?.id))}</td>
<td>
<div class="row-actions">
${
  state.inventoryReceivingOpen
  ? `<button class="icon-button" type="button" title="Registrer mottak" data-action="receive-inventory-order-line" data-index="${index}">
<i data-lucide="check"></i>
</button>`
  : ""
}
<button class="icon-button danger-button" type="button" title="Fjern linje" data-action="remove-inventory-order-line" data-index="${index}">
<i data-lucide="x"></i>
</button>
</div>
</td>
</tr>
`;
}
function inventoryRow(ingredient, demand) {
  const group = byId(state.rawMaterialGroups, ingredient.groupId);
  const supplier = byId(state.suppliers, ingredient.supplierId);
  const status = inventoryStatus(ingredient, demand);
  const orderStatus = ingredientOrderStatus(ingredient);
  const actionLabel = ingredient.supplierType === "internal" ? "Produser" : "Bestill";
  return `
<tr>
<td><div class="strong-line">${escapeHtml(ingredient.name)}</div><div class="muted">${money(ingredientCost(ingredient.id))} per ${escapeHtml(ingredient.unit)}</div></td>
<td><span class="menu-chip">${escapeHtml(group?.name || "Uten gruppe")}</span></td>
<td>${ingredient.supplierType === "internal" ? '<span class="menu-chip">Egenprodusert</span>' : escapeHtml(supplier?.name || "Ekstern")}</td>
<td><input class="inline-input price-input" type="number" min="0" step="0.01" value="${ingredient.stockQty}" data-action="edit-inventory" data-id="${ingredient.id}" data-field="stockQty" /> ${escapeHtml(ingredient.unit)}</td>
<td><input class="inline-input price-input" type="number" min="0" step="0.01" value="${ingredient.minStockQty}" data-action="edit-inventory" data-id="${ingredient.id}" data-field="minStockQty" /> ${escapeHtml(ingredient.unit)}</td>
<td><input class="inline-input days-input" type="number" min="0" step="1" value="${ingredient.leadTimeDays}" data-action="edit-inventory" data-id="${ingredient.id}" data-field="leadTimeDays" /> dager</td>
<td>${number(demand, 2)} ${escapeHtml(ingredient.unit)}</td>
<td><span class="status-chip ${status.className}">${status.label}</span></td>
<td>${status.orderQty > 0 ? `${actionLabel} ${number(status.orderQty, 2)} ${escapeHtml(ingredient.unit)}` : '<span class="muted">Ingen</span>'}</td>
<td><span class="status-chip ${orderStatus.className}">${orderStatus.label}</span></td>
</tr>
`;
}
function renderProductionLegacy() {
  const needs = productionNeeds(state.selectedDate, state.selectedProductionDepartmentId);
  const ingredientNeeds = ingredientProductionNeeds(state.selectedDate, state.selectedProductionDepartmentId);
  app.innerHTML = `
<div class="view-stack">
<section class="section">
<div class="section-header">
<div>
<h2>Produksjonsliste artikler</h2>
<p>Summerer bekreftede ordre og trekker ingredienser fra lager når produksjon markeres ferdig.</p>
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
<th>Ingrediensbehov</th>
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
<section class="section">
<div class="section-header">
<div>
<h2>Egenproduserte ingredienser</h2>
<p>Produseres til lager før de brukes i artikler, f.eks. majones.</p>
</div>
</div>
<div class="table-wrap">
<table>
<thead>
<tr>
<th>Ingrediens</th>
<th>Behov</th>
<th>Anbefalt produksjon</th>
<th>Ferdig</th>
<th>Status</th>
<th>Forbruk</th>
</tr>
</thead>
<tbody>
${
  ingredientNeeds.length
  ? ingredientNeeds.map(ingredientProductionRow).join("")
  : `<tr><td colspan="6"><div class="empty">Ingen egenproduserte ingredienser må produseres for valgt dato.</div></td></tr>`
}
</tbody>
</table>
</div>
</section>
</div>
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
function ingredientProductionNeeds(date, departmentId = "all") {
  const demand = rawDemandForDate(date);
  return [...demand.entries()]
.map(([ingredientId, qty]) => {
  const ingredient = byId(state.ingredients, ingredientId);
  if (!ingredient || ingredient.supplierType !== "internal") return null;
  if (departmentId !== "all" && ingredient.departmentId !== departmentId) return null;
  const stock = Number(ingredient.stockQty || 0);
  const minimum = Number(ingredient.minStockQty || 0);
  const recommendedQty = Math.max(0, qty + minimum - stock);
  return { ingredient, demandQty: qty, qty: recommendedQty };
  })
.filter((line) => line && line.qty > 0)
.sort((a, b) => a.ingredient.name.localeCompare(b.ingredient.name, "nb"));
}
function productionProgress(date, articleId) {
  const needed = productionNeeds(date).find((line) => line.article.id === articleId)?.qty || 0;
  const stored = state.productionStatus?.[date]?.[articleId];
  const legacyProduced = Number(stored || 0);
  const isComplete = stored === true || stored === "true" || (typeof stored === "number" && needed > 0 && legacyProduced >= needed);
  return {
  needed,
  isComplete,
  };
}
function ingredientProductionProgress(date, ingredientId, qty) {
  const stored = state.productionStatus?.[date]?.[ingredientProductionKey(ingredientId)];
  const legacyProduced = Number(stored || 0);
  const isComplete = stored === true || stored === "true" || (typeof stored === "number" && qty > 0 && legacyProduced >= qty);
  return { needed: qty, isComplete };
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
function ingredientProductionRow({ ingredient, demandQty, qty }) {
  const progress = ingredientProductionProgress(state.selectedDate, ingredient.id, qty);
  const stockAdjusted = hasIngredientProductionInventoryAdjustment(state.selectedDate, ingredient.id);
  const consumption = rawDemandForProductionIngredient(ingredient.id, qty);
  return `
<tr>
<td>
<div class="strong-line">${escapeHtml(ingredient.name)}</div>
<div class="muted">${escapeHtml(byId(state.departments, ingredient.departmentId)?.name || "Egenprodusert")}</div>
</td>
<td>${number(demandQty, 2)} ${escapeHtml(ingredient.unit)}</td>
<td>${number(qty, 2)} ${escapeHtml(ingredient.unit)}</td>
<td>
<label class="done-toggle ${progress.isComplete ? "is-ready" : ""}">
<input type="checkbox" ${progress.isComplete ? "checked" : ""} data-action="toggle-ingredient-produced" data-ingredient-id="${ingredient.id}" data-qty="${qty}" />
<span>${progress.isComplete ? "Ferdig" : "Ikke ferdig"}</span>
</label>
</td>
<td>
<span class="status-chip ${progress.isComplete ? "ready" : "open"}">${progress.isComplete ? "Ferdig" : "Åpen"}</span>
<div class="muted">${stockAdjusted ? "Lager oppdatert" : "Lager ikke oppdatert"}</div>
</td>
<td>${[...consumption.entries()].map(([ingredientId, amount]) => rawLabel(ingredientId, amount)).join("<br />") || '<span class="muted">Ingen oppskrift</span>'}</td>
</tr>
`;
}
function rawNeedLabels(article, qty) {
  const ingredientTotals = new Map();
  addRawDemandForArticle(article.id, qty, ingredientTotals);
  return [...ingredientTotals.entries()]
.map(([ingredientId, amount]) => rawLabel(ingredientId, amount))
.join("<br />");
}
function rawLabel(ingredientId, amount) {
  const ingredient = byId(state.ingredients, ingredientId);
  return ingredient ? `${number(amount, 2)} ${escapeHtml(ingredient.unit)} ${escapeHtml(ingredient.name)}` : "";
}
function renderProduction() {
  const isPacking = state.activeProductionTab === "packing";
  app.innerHTML = `
<div class="view-stack">
<div class="delivery-tabs article-card-tabs" role="tablist" aria-label="Produksjon">
<button class="tab-button ${!isPacking ? "is-active" : ""}" type="button" data-action="select-production-tab" data-tab="ingredients">
<span>Produksjon</span>
<small>Ingrediensbehov</small>
</button>
<button class="tab-button ${isPacking ? "is-active" : ""}" type="button" data-action="select-production-tab" data-tab="packing">
<span>Pakking</span>
<small>Leveringer</small>
</button>
</div>
${isPacking ? renderProductionPacking() : renderProductionIngredients()}
</div>
`;
}
function renderProductionIngredients() {
  const ingredientNeeds = productionIngredientNeeds(state.selectedDate, state.selectedProductionDepartmentId);
  const internalCount = ingredientNeeds.filter((line) => line.ingredient.supplierType === "internal").length;
  const shortageCount = ingredientNeeds.filter((line) => line.recommendedQty > 0).length;
  const sourceDeliveryCount = new Set(ingredientNeeds.flatMap((line) => line.deliveryIds)).size;
  return `
<section class="section">
<div class="section-header">
<div>
<h2>Produksjonsplan ingredienser</h2>
<p>Samler totalt behov per ingrediens fra alle leveringer på valgt dato. Filteret fordeler behovet etter avdeling.</p>
</div>
<label class="field">
<span>Avdeling</span>
<select data-action="select-production-department">
<option value="all" ${state.selectedProductionDepartmentId === "all" ? "selected" : ""}>Alle avdelinger</option>
${options(state.departments, state.selectedProductionDepartmentId)}
</select>
</label>
</div>
<div class="metrics">
<div class="metric compact-metric"><span>Ingredienser</span><strong>${ingredientNeeds.length}</strong></div>
<div class="metric compact-metric"><span>Egenprodusert</span><strong>${internalCount}</strong></div>
<div class="metric compact-metric"><span>Mangler fra lager</span><strong>${shortageCount}</strong></div>
<div class="metric compact-metric"><span>Leveringer</span><strong>${sourceDeliveryCount}</strong></div>
</div>
<div class="table-wrap">
<table>
<thead>
<tr>
<th>Ingrediens</th>
<th>Avdeling</th>
<th>Totalt behov</th>
<th>På lager</th>
<th>Må lages/plukkes</th>
<th>Status</th>
<th>Detaljer</th>
</tr>
</thead>
<tbody>
${
  ingredientNeeds.length
  ? ingredientNeeds.map(productionIngredientRow).join("")
  : `<tr><td colspan="7"><div class="empty">Ingen ingrediensbehov på valgt dato.</div></td></tr>`
}
</tbody>
</table>
</div>
</section>
${productionIngredientDetailModal(ingredientNeeds)}
`;
}
function renderProductionPacking() {
  const allGroups = packingArticleGroups(state.selectedDate, state.selectedProductionDepartmentId);
  const groups = filteredPackingArticleGroups(allGroups);
  const deliveryIds = new Set(groups.flatMap((group) => group.deliveryIds));
  const readyDeliveries = allDeliveriesForDate(state.selectedDate).filter(({ delivery }) => deliveryIds.has(delivery.id) && packingDeliveryReady(delivery)).length;
  const totalItems = groups.reduce((sum, group) => sum + group.deliveryRows.length, 0);
  const readyItems = groups.reduce((sum, group) => sum + group.deliveryRows.filter((row) => row.isReady).length, 0);
  return `
<section class="section">
<div class="section-header">
<div>
<h2>Pakking</h2>
<p>Her pakkes hver artikkel mot leveringene den skal til. Pakkevarer er splittet til underartiklene som faktisk klargjøres.</p>
</div>
<label class="field">
<span>Avdeling</span>
<select data-action="select-production-department">
<option value="all" ${state.selectedProductionDepartmentId === "all" ? "selected" : ""}>Alle avdelinger</option>
${options(state.departments, state.selectedProductionDepartmentId)}
</select>
</label>
</div>
<div class="metrics">
<div class="metric compact-metric"><span>Leveringer</span><strong>${deliveryIds.size}</strong></div>
<div class="metric compact-metric"><span>Klare leveringer</span><strong>${readyDeliveries}</strong></div>
<div class="metric compact-metric"><span>Artikler klare</span><strong>${readyItems}/${totalItems}</strong></div>
<div class="metric compact-metric"><span>Dato</span><strong>${formatDate(state.selectedDate)}</strong></div>
</div>
<div class="compact-form">
<div class="grid-4">
<label class="field">
<span>Artikkel</span>
<select data-action="edit-packing-filter" data-field="article">
${packingArticleFilterOptions(allGroups)}
</select>
</label>
<label class="field">
<span>Kjøkkentid</span>
<select data-action="edit-packing-filter" data-field="kitchenTime">
${packingKitchenTimeOptions(allGroups)}
</select>
</label>
<label class="field">
<span>Status</span>
<select data-action="edit-packing-filter" data-field="status">
${packingStatusOptions()}
</select>
</label>
<label class="field">
<span>Levering</span>
<select data-action="edit-packing-filter" data-field="delivery">
${packingDeliveryFilterOptions(allGroups)}
</select>
</label>
</div>
</div>
<div class="table-wrap">
<table>
<thead>
<tr>
<th>Artikkel</th>
<th>Totalt</th>
<th>Leveringer</th>
</tr>
</thead>
<tbody>
${
  groups.length
  ? groups.map(packingArticleGroupRow).join("")
  : `<tr><td colspan="3"><div class="empty">Ingen artikler til pakking på valgt dato.</div></td></tr>`
}
</tbody>
</table>
</div>
</section>
`;
}
function packingArticleGroups(date, departmentId = "all") {
  const groups = new Map();
  allDeliveriesForDate(date).forEach(({ order, delivery }) => {
  packingLinesForDelivery(delivery, departmentId).forEach((line) => {
  const groupKey = line.article?.id || line.key;
  if (!groups.has(groupKey)) {
  groups.set(groupKey, {
  key: groupKey,
  article: line.article,
  unit: line.article?.unit || "stk",
  totalQty: 0,
  deliveryIds: new Set(),
  deliveryRows: new Map(),
  });
  }
const group = groups.get(groupKey);
  group.totalQty += Number(line.qty || 0);
  group.deliveryIds.add(delivery.id);
  if (!group.deliveryRows.has(delivery.id)) {
  group.deliveryRows.set(delivery.id, {
  order,
  delivery,
  qty: 0,
  keys: [],
  parentNames: new Set(),
  });
  }
const row = group.deliveryRows.get(delivery.id);
  row.qty += Number(line.qty || 0);
  row.keys.push(line.key);
  if (line.parentArticle?.name) row.parentNames.add(line.parentArticle.name);
  });
  });
  return [...groups.values()]
.map((group) => ({
  ...group,
  deliveryIds: [...group.deliveryIds],
  deliveryRows: [...group.deliveryRows.values()]
.map((row) => ({
  ...row,
  parentNames: [...row.parentNames],
  isReady: row.keys.every((key) => Boolean(state.packingStatus?.[row.delivery.id]?.[key])),
  }))
.sort((a, b) => `${a.delivery.kitchenTime}${a.delivery.deliveryNo}`.localeCompare(`${b.delivery.kitchenTime}${b.delivery.deliveryNo}`, "nb")),
  }))
.sort((a, b) => (a.article?.name || "").localeCompare(b.article?.name || "", "nb"));
}
function packingKitchenTimeOptions(groups) {
  const selected = state.packingFilters.kitchenTime || "all";
  const times = [...new Set(groups.flatMap((group) => group.deliveryRows.map((row) => row.delivery.kitchenTime)).filter(Boolean))]
.sort((a, b) => a.localeCompare(b, "nb"));
  return `<option value="all" ${selected === "all" ? "selected" : ""}>Alle tider</option>${times
.map((time) => `<option value="${escapeHtml(time)}" ${selected === time ? "selected" : ""}>${escapeHtml(time)}</option>`)
.join("")}`;
}
function packingStatusOptions() {
  const selected = state.packingFilters.status || "all";
  const statuses = [{ id: "all", name: "Alle statuser" }, { id: "open", name: "Ikke startet" }, ...deliveryStatuses];
  return statuses
.map((status) => `<option value="${status.id}" ${selected === status.id ? "selected" : ""}>${escapeHtml(status.name)}</option>`)
.join("");
}
function packingArticleFilterOptions(groups) {
  const selected = state.packingFilters.article || "all";
  return `<option value="all" ${selected === "all" ? "selected" : ""}>Alle artikler</option>${groups
.map((group) => `<option value="${escapeHtml(group.article?.id || group.key)}" ${selected === (group.article?.id || group.key) ? "selected" : ""}>${escapeHtml(group.article?.name || "Ukjent artikkel")}</option>`)
.join("")}`;
}
function packingDeliveryFilterOptions(groups) {
  const selected = state.packingFilters.delivery || "all";
  const rows = new Map();
  groups.forEach((group) => {
  group.deliveryRows.forEach((row) => {
  if (!rows.has(row.delivery.id)) {
  const customer = byId(state.customers, row.order.customerId);
  rows.set(row.delivery.id, {
  id: row.delivery.id,
  label: `${row.delivery.deliveryNo || ""} - ${row.delivery.kitchenTime || ""} - ${customer?.name || row.order.customerName || ""}`,
  kitchenTime: row.delivery.kitchenTime || "",
  deliveryNo: row.delivery.deliveryNo || "",
  });
  }
});
  });
  return `<option value="all" ${selected === "all" ? "selected" : ""}>Alle leveringer</option>${[...rows.values()]
.sort((a, b) => `${a.kitchenTime}${a.deliveryNo}`.localeCompare(`${b.kitchenTime}${b.deliveryNo}`, "nb"))
.map((row) => `<option value="${escapeHtml(row.id)}" ${selected === row.id ? "selected" : ""}>${escapeHtml(row.label)}</option>`)
.join("")}`;
}
function filteredPackingArticleGroups(groups) {
  const filters = state.packingFilters || {};
  const articleId = filters.article || "all";
  const deliveryId = filters.delivery || "all";
  const kitchenTime = filters.kitchenTime || "all";
  const status = filters.status || "all";
  return groups
.filter((group) => {
  if (articleId === "all") return true;
  return (group.article?.id || group.key) === articleId;
  })
.map((group) => {
  const deliveryRows = group.deliveryRows.filter((row) => {
  const rowStatus = deliveryDisplayStatus(row.delivery);
  if (kitchenTime !== "all" && row.delivery.kitchenTime !== kitchenTime) return false;
  if (status !== "all" && rowStatus !== status) return false;
  if (deliveryId !== "all" && row.delivery.id !== deliveryId) return false;
  return true;
  });
  return {
  ...group,
  deliveryRows,
  deliveryIds: [...new Set(deliveryRows.map((row) => row.delivery.id))],
  totalQty: deliveryRows.reduce((sum, row) => sum + row.qty, 0),
  };
  })
.filter((group) => group.deliveryRows.length);
}
function packingArticleMatchesDepartment(article, departmentId, seen = new Set()) {
  if (departmentId === "all") return true;
  if (!article || seen.has(article.id)) return false;
  seen.add(article.id);
  if (article.departmentId === departmentId) return true;
  if (article.type !== "package") return false;
  return (article.packageItems || []).some((item) => packingArticleMatchesDepartment(byId(state.articles, item.articleId), departmentId, new Set(seen)));
}
function packingArticleGroupRow(group) {
  return `
<tr>
<td>
<div class="strong-line">${escapeHtml(group.article?.name || "Ukjent artikkel")}</div>
<div class="muted">${group.deliveryRows.length} leveringer</div>
</td>
<td>
<div class="strong-line">${number(group.totalQty, 2)} ${escapeHtml(group.unit)}</div>
</td>
<td>
<div class="packing-item-list">
${group.deliveryRows.map((row) => packingDeliveryLineRow(group, row)).join("")}
</div>
</td>
</tr>
`;
}
function packingDeliveryLineRow(group, row) {
  const customer = byId(state.customers, row.order.customerId);
  const status = deliveryDisplayStatus(row.delivery);
  return `
<div class="packing-item">
<label class="done-toggle ${row.isReady ? "is-ready" : ""}">
<input type="checkbox" ${row.isReady ? "checked" : ""} data-action="toggle-packing-item" data-delivery-id="${row.delivery.id}" data-item-keys="${escapeHtml(row.keys.join("|"))}" />
<span>${row.isReady ? "Klar" : "Ikke klar"}</span>
</label>
<div>
<div class="strong-line">Lev. ${escapeHtml(row.delivery.deliveryNo || "")} - ${escapeHtml(row.delivery.kitchenTime || "")}</div>
<div class="muted">${escapeHtml(customer?.name || row.order.customerName || "")} - ${number(row.qty, 2)} ${escapeHtml(group.unit)}</div>
<div class="muted"><span class="status-chip status-${status}">${deliveryStatusLabel(status)}</span>${row.parentNames.length ? ` Fra pakke: ${escapeHtml(row.parentNames.join(", "))}` : ""}</div>
</div>
</div>
`;
}
function productionIngredientNeeds(date, departmentId = "all") {
  const lines = [];
  allDeliveriesForDate(date).forEach(({ order, delivery }) => {
  delivery.items.forEach((item) => {
  collectIngredientDemandForArticle(
  item.articleId,
  Number(item.qty || 0),
  { order, delivery, orderedArticle: byId(state.articles, item.articleId), departmentId },
  lines
);
  });
  });
  const totals = new Map();
  lines.forEach((line) => {
  if (!line.ingredientId || line.amount <= 0) return;
  if (!totals.has(line.ingredientId)) {
  totals.set(line.ingredientId, {
  ingredient: byId(state.ingredients, line.ingredientId),
  demandQty: 0,
  sourceLines: [],
  deliveryIds: new Set(),
  departmentIds: new Set(),
  });
  }
const total = totals.get(line.ingredientId);
  total.demandQty += line.amount;
  total.sourceLines.push(line);
  if (line.delivery?.id) total.deliveryIds.add(line.delivery.id);
  if (line.departmentId) total.departmentIds.add(line.departmentId);
  });
  return [...totals.values()]
.filter((line) => line.ingredient)
.map((line) => {
  const stockQty = Number(line.ingredient.stockQty || 0);
  return {
  ...line,
  deliveryIds: [...line.deliveryIds],
  departmentIds: [...line.departmentIds],
  stockQty,
  recommendedQty: Math.max(0, line.demandQty - stockQty),
  };
  })
.sort((a, b) => {
  const deptA = departmentNames(a.departmentIds).join(", ");
  const deptB = departmentNames(b.departmentIds).join(", ");
  return `${deptA}${a.ingredient.name}`.localeCompare(`${deptB}${b.ingredient.name}`, "nb");
  });
}
function collectIngredientDemandForArticle(articleId, qty, context, lines, seen = new Set()) {
  const article = byId(state.articles, articleId);
  if (!article || qty <= 0 || seen.has(articleId)) return;
  seen.add(articleId);
  if (article.type === "package") {
  (article.packageItems || []).forEach((item) => {
  collectIngredientDemandForArticle(
  item.articleId,
  qty * Number(item.qty || 0),
  {
  ...context,
  orderedArticle: context.orderedArticle || article,
  packageArticle: context.packageArticle || article,
  },
  lines,
  new Set(seen)
);
  });
  return;
  }
(article.recipe || []).forEach((line) => {
  const ingredientId = line.ingredientId || (line.rawMaterialId ? rawIngredientId(line.rawMaterialId) : "");
  const ingredient = byId(state.ingredients, ingredientId);
  if (!ingredient) return;
  const lineDepartmentId = ingredient.departmentId || article.departmentId || context.orderedArticle?.departmentId || "";
  if (context.departmentId !== "all" && lineDepartmentId !== context.departmentId) return;
  const amount = Number(line.qty || 0) * qty;
  if (amount <= 0) return;
  lines.push({
  ingredientId,
  ingredient,
  amount,
  departmentId: lineDepartmentId,
  order: context.order,
  delivery: context.delivery,
  orderedArticle: context.orderedArticle || article,
  recipeArticle: article,
  qty,
  });
  });
}
function productionIngredientRow({ ingredient, demandQty, stockQty, recommendedQty, sourceLines, deliveryIds, departmentIds }) {
  const isInternal = ingredient.supplierType === "internal";
  const actionLabel = isInternal ? "Produser" : "Plukk";
  const statusClass = recommendedQty > 0 ? "open" : "ready";
  const statusLabel = recommendedQty > 0 ? "Mangler" : "Dekket av lager";
  return `
<tr>
<td>
<button class="link-button" type="button" data-action="open-production-ingredient" data-id="${ingredient.id}">
${escapeHtml(ingredient.name)}
</button>
<div class="muted">${ingredient.supplierType === "internal" ? "Egenprodusert" : "Innkjøpt"} - ${sourceLines.length} linjer</div>
</td>
<td>${departmentNames(departmentIds).map((name) => `<span class="menu-chip">${escapeHtml(name)}</span>`).join(" ") || '<span class="muted">Uten avdeling</span>'}</td>
<td>${number(demandQty, 2)} ${escapeHtml(ingredient.unit)}</td>
<td>${number(stockQty, 2)} ${escapeHtml(ingredient.unit)}</td>
<td>${recommendedQty > 0 ? `${actionLabel} ${number(recommendedQty, 2)} ${escapeHtml(ingredient.unit)}` : '<span class="muted">Ingen</span>'}</td>
<td>
<span class="status-chip ${statusClass}">${statusLabel}</span>
<div class="muted">${isInternal ? "Egenprodusert" : `${deliveryIds.length} leveringer`}</div>
</td>
<td>
<button class="secondary-button" type="button" data-action="open-production-ingredient" data-id="${ingredient.id}">
Vis kilder
</button>
</td>
</tr>
`;
}
function productionIngredientDetailModal(needs) {
  if (!state.activeProductionIngredientId) return "";
  const line = needs.find((item) => item.ingredient.id === state.activeProductionIngredientId);
  if (!line) return "";
  return `
<div class="modal-backdrop" data-action="close-production-ingredient">
<article class="delivery-modal" role="dialog" aria-modal="true" aria-labelledby="production-ingredient-title" data-action="modal-content">
<header class="modal-header">
<div>
<p class="eyebrow">Ingrediensbehov</p>
<h2 id="production-ingredient-title">${escapeHtml(line.ingredient.name)}</h2>
</div>
<button class="icon-button" type="button" title="Lukk" data-action="close-production-ingredient">
<i data-lucide="x"></i>
</button>
</header>
<div class="modal-body">
<div class="info-grid">
<div><span>Totalt behov</span><strong>${number(line.demandQty, 2)} ${escapeHtml(line.ingredient.unit)}</strong></div>
<div><span>På lager</span><strong>${number(line.stockQty, 2)} ${escapeHtml(line.ingredient.unit)}</strong></div>
<div><span>Må lages/plukkes</span><strong>${number(line.recommendedQty, 2)} ${escapeHtml(line.ingredient.unit)}</strong></div>
</div>
<div class="table-wrap">
<table>
<thead>
<tr>
<th>Levering</th>
<th>Tid</th>
<th>Artikkel</th>
<th>Behov</th>
</tr>
</thead>
<tbody>${line.sourceLines.map(productionIngredientSourceRow).join("")}</tbody>
</table>
</div>
</div>
<footer class="modal-actions">
<button class="primary-button" type="button" data-action="close-production-ingredient">Lukk</button>
</footer>
</article>
</div>
`;
}
function productionIngredientSourceRow(line) {
  const articleLabel = line.orderedArticle?.id && line.recipeArticle?.id && line.orderedArticle.id !== line.recipeArticle.id
  ? `${line.orderedArticle.name} / ${line.recipeArticle.name}`
  : line.recipeArticle?.name || line.orderedArticle?.name || "Ukjent artikkel";
  return `
<tr>
<td>
<div class="strong-line">${escapeHtml(line.delivery?.deliveryNo || "")}</div>
<div class="muted">${escapeHtml(line.order?.customerName || byId(state.customers, line.order?.customerId)?.name || "")}</div>
</td>
<td>${escapeHtml(line.delivery?.kitchenTime || "")}</td>
<td>${escapeHtml(articleLabel)}</td>
<td>${number(line.amount, 2)} ${escapeHtml(line.ingredient.unit)}</td>
</tr>
`;
}
function departmentNames(departmentIds) {
  return [...new Set(departmentIds || [])]
.map((departmentId) => byId(state.departments, departmentId)?.name || "")
.filter(Boolean);
}
function renderPrices() {
  const customer = byId(state.customers, state.selectedCustomerId) || state.customers[0] || null;
  const priceList = byId(state.priceLists, customer?.priceListId || "pl-standard") || state.priceLists[0] || { id: "pl-standard", name: "Standard", prices: {} };
  app.innerHTML = `
<section class="section">
<div class="section-header">
<div>
<h2>Kundespesifikke prislister</h2>
<p>Hver kunde peker på en prisliste. Pris settes her, kost beregnes fra oppskrift.</p>
</div>
<label class="field">
<span>Kunde</span>
<select data-action="select-customer" ${state.customers.length ? "" : "disabled"}>${options(state.customers, customer?.id || "")}</select>
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
<tbody>${orderableArticles().length ? orderableArticles().map((article) => priceRow(article, priceList)).join("") : '<tr><td colspan="5"><div class="empty">Ingen salgsartikler ennå.</div></td></tr>'}</tbody>
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
<td>
<button class="link-button" type="button" data-action="open-article-card" data-article-id="${article.id}">
<span class="strong-line">${escapeHtml(article.name)}</span>
</button>
<div class="muted">${escapeHtml(article.sku)}</div>
</td>
<td><span class="type-chip ${article.type}">${articleTypeLabel(article.type)}</span></td>
<td>${money(cost)}</td>
<td>
<input class="inline-input price-input" type="number" min="0" step="1" value="${price}" data-action="edit-price" data-price-list-id="${priceList?.id || "pl-standard"}" data-article-id="${article.id}" />
</td>
<td>${number(margin, 0)}%</td>
</tr>
`;
}
function renderRawMaterials() {
  const rawMaterials = sortedRawMaterials();
  const cleanup = state.rawMaterialCleanup?.removed || [];
  app.innerHTML = `
<div class="view-stack">
${rawMaterialCleanupNotice(cleanup)}
<section class="section">
<div class="section-header">
<div>
<h2>Råvaregrupper</h2>
<p>Råvarer er innkjøpte varer som lagerføres og danner grunnlaget for ingredienser.</p>
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
<p>Kun varer vi kjøper inn ligger her. Sammensatte ledd bygges i Ingredienser.</p>
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
<th></th>
</tr>
</thead>
<tbody>${rawMaterials.map(rawMaterialEditRow).join("")}</tbody>
</table>
</div>
</section>
${renderRawMaterialUsageModal()}
</div>
`;
}
function rawMaterialCleanupNotice(cleanup) {
  if (!cleanup.length) return "";
  return `
<section class="section notice-section">
<div class="section-header">
<div>
<h2>Råvarelisten er ryddet</h2>
<p>${cleanup.length} linjer er skjult fordi de ikke er godkjent som råvarer mot Matvaretabellen-reglene.</p>
</div>
</div>
<div class="muted">Detaljert kontrollrapport ligger i raw-material-cleanup-report.json.</div>
</section>
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
<h2>Ingrediensgrupper</h2>
<p>Ingredienser fordeles i grupper for søk, lager og bestilling.</p>
</div>
</div>
<form class="inline-create compact" id="raw-group-form">
<label class="field"><span>Navn</span><input name="name" required /></label>
<button class="secondary-button" type="submit"><i data-lucide="plus"></i><span>Legg til</span></button>
</form>
<div class="table-wrap">
<table>
<thead><tr><th>Gruppe</th><th>Ingredienser</th></tr></thead>
<tbody>${state.rawMaterialGroups.map(rawGroupRow).join("")}</tbody>
</table>
</div>
</section>
<section class="section">
<div class="section-header">
<div>
<h2>Sjåfører</h2>
<p>Sjåfører vedlikeholdes separat fra kjøretøy og velges på leveringer.</p>
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
<p>Kjøretøy vedlikeholdes separat fra sjåfør. Begge velges på kjøretavlen.</p>
</div>
</div>
<form class="inline-create" id="vehicle-form">
<label class="field"><span>Navn</span><input name="name" placeholder="KC-04" required /></label>
<label class="field"><span>Reg.nr.</span><input name="plate" placeholder="AB 12345" /></label>
<button class="secondary-button" type="submit"><i data-lucide="plus"></i><span>Legg til</span></button>
</form>
<div class="table-wrap">
<table>
<thead><tr><th>Kjøretøy</th><th>Reg.nr.</th></tr></thead>
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
  const count = state.ingredients.filter((ingredient) => ingredient.groupId === group.id).length;
  return `
<tr>
<td><input class="inline-input" value="${escapeHtml(group.name)}" data-action="edit-raw-group" data-id="${group.id}" data-field="name" /></td>
<td>${count}</td>
</tr>
`;
}
function rawUsageAmountForIngredient(ingredientId, rawId) {
  const totals = new Map();
  addRawDemandForIngredient(ingredientId, 1, totals);
  return totals.get(rawId) || 0;
}
function rawUsageAmountForArticle(articleId, rawId) {
  const totals = new Map();
  addRawDemandForArticle(articleId, 1, totals);
  return totals.get(rawId) || 0;
}
function rawMaterialUsage(rawId) {
  const directIngredientId = rawIngredientId(rawId);
  const usedByIngredients = state.ingredients
.map((ingredient) => ({
  id: ingredient.id,
  name: ingredient.name,
  unit: ingredient.unit,
  amount: rawUsageAmountForIngredient(ingredient.id, rawId),
  isDirect: ingredient.id === directIngredientId,
  }))
.filter((ingredient) => ingredient.amount > 0 && !ingredient.isDirect);
  const usedByArticles = state.articles
.map((article) => ({
  id: article.id,
  name: article.name,
  sku: article.sku,
  unit: article.unit,
  amount: rawUsageAmountForArticle(article.id, rawId),
  }))
.filter((article) => article.amount > 0);
  const inventoryAdjustments = Object.values(state.productionInventoryAdjustments || {}).filter((adjustment) =>
  Object.prototype.hasOwnProperty.call(adjustment, rawId),
  ).length;
  return { usedByIngredients, usedByArticles, inventoryAdjustments };
}
function rawMaterialUsageMessage(usage) {
  const parts = [];
  if (usage.usedByIngredients.length) {
  parts.push(`ingredienser: ${usage.usedByIngredients.slice(0, 3).map((item) => item.name).join(", ")}`);
  }
if (usage.usedByArticles.length) {
  parts.push(`artikler: ${usage.usedByArticles.slice(0, 3).map((item) => item.name).join(", ")}`);
  }
if (usage.inventoryAdjustments) {
  parts.push("produksjon med trukket lager");
  }
return parts.join(" / ");
}
function renderRawMaterialUsageModal() {
  if (!state.activeRawMaterialInfoId) return "";
  const raw = byId(state.rawMaterials, state.activeRawMaterialInfoId);
  if (!raw) return "";
  const usage = rawMaterialUsage(raw.id);
  const group = byId(state.rawMaterialGroups, raw.groupId);
  const supplier = byId(state.suppliers, raw.supplierId);
  const hasUsage = usage.usedByIngredients.length || usage.usedByArticles.length || usage.inventoryAdjustments;
  return `
<div class="modal-backdrop" data-action="close-raw-usage">
<article class="delivery-modal" role="dialog" aria-modal="true" aria-labelledby="raw-usage-title" data-action="modal-content">
<div class="modal-header">
<div>
<p class="eyebrow">Råvarebruk</p>
<h2 id="raw-usage-title">${escapeHtml(raw.name)}</h2>
</div>
<button class="icon-button" type="button" title="Lukk" data-action="close-raw-usage">
<i data-lucide="x"></i>
</button>
</div>
<div class="modal-body">
<div class="info-grid">
<div>
<span>Råvaregruppe</span>
<strong>${escapeHtml(group?.name || "Uten gruppe")}</strong>
<small>${escapeHtml(raw.unit)}</small>
</div>
<div>
<span>Leverandør</span>
<strong>${escapeHtml(supplier?.name || "Ikke satt")}</strong>
<small>${escapeHtml(supplier?.phone || "")}</small>
</div>
<div>
<span>Lager</span>
<strong>${number(raw.stockQty, 2)} ${escapeHtml(raw.unit)}</strong>
<small>Minimum ${number(raw.minStockQty, 2)} · ${number(raw.leadTimeDays, 0)} dager</small>
</div>
<div>
<span>Kost</span>
<strong>${money(raw.cost)}</strong>
<small>Per ${escapeHtml(raw.unit)}</small>
</div>
</div>
${
  hasUsage
  ? `
<div class="modal-section">
<h3>Brukt i ingredienser</h3>
<div class="modal-lines">
${usage.usedByIngredients.length ? usage.usedByIngredients.map((item) => rawUsageIngredientLine(item, raw)).join("") : '<div class="empty small">Ikke brukt i sammensatte ingredienser.</div>'}
</div>
</div>
<div class="modal-section">
<h3>Brukt i artikler</h3>
<div class="modal-lines">
${usage.usedByArticles.length ? usage.usedByArticles.map((item) => rawUsageArticleLine(item, raw)).join("") : '<div class="empty small">Ikke brukt direkte eller indirekte i artikler.</div>'}
</div>
</div>
`
  : '<div class="empty small">Råvaren er ikke i bruk i ingredienser eller artikler.</div>'
}
${
  usage.inventoryAdjustments
  ? `<div class="modal-section"><h3>Produksjon</h3><p class="modal-note">Råvaren inngår i ${usage.inventoryAdjustments} lagerjustering(er) fra ferdig produsert produksjon.</p></div>`
  : ""
}
</div>
<div class="modal-actions">
<button class="primary-button" type="button" data-action="close-raw-usage">
<i data-lucide="check"></i><span>Lukk</span>
</button>
</div>
</article>
</div>
`;
}
function rawUsageIngredientLine(item, raw) {
  return `
<div class="modal-line">
<div>
<strong>${escapeHtml(item.name)}</strong>
<small>${number(item.amount, 3)} ${escapeHtml(raw.unit)} per ${escapeHtml(item.unit)}</small>
</div>
<div>Ingrediens</div>
</div>
`;
}
function rawUsageArticleLine(item, raw) {
  return `
<div class="modal-line">
<div>
<strong>${escapeHtml(item.name)}</strong>
<small>${escapeHtml(item.sku || "")} · ${number(item.amount, 3)} ${escapeHtml(raw.unit)} per ${escapeHtml(item.unit)}</small>
</div>
<div>Artikkel</div>
</div>
`;
}
function deleteRawMaterial(rawId) {
  const raw = byId(state.rawMaterials, rawId);
  if (!raw) return;
  const usage = rawMaterialUsage(rawId);
  const isUsed = usage.usedByIngredients.length || usage.usedByArticles.length || usage.inventoryAdjustments;
  if (isUsed) {
  showToast(`Kan ikke slette ${raw.name}. Brukes i ${rawMaterialUsageMessage(usage)}.`);
  return;
  }
if (!window.confirm(`Slette råvaren "${raw.name}"? Dette kan ikke angres.`)) return;
  state.rawMaterials = state.rawMaterials.filter((item) => item.id !== rawId);
  state.ingredients = state.ingredients.filter((ingredient) => ingredient.id !== rawIngredientId(rawId));
  saveState();
  render();
  showToast(`${raw.name} er slettet`);
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
<td>
<div class="row-actions">
<button class="icon-button" title="Vis bruk" type="button" data-action="open-raw-usage" data-id="${raw.id}">
<i data-lucide="info"></i>
</button>
<button class="icon-button danger-button" title="Slett råvare" type="button" data-action="delete-raw-material" data-id="${raw.id}">
<i data-lucide="trash-2"></i>
</button>
</div>
</td>
</tr>
`;
}
function supplierEditRow(supplier) {
  return `
<tr>
<td><input class="inline-input" value="${escapeHtml(supplier.name)}" data-action="edit-supplier" data-id="${supplier.id}" data-field="name" /></td>
<td><input class="inline-input" value="${escapeHtml(supplier.phone)}" data-action="edit-supplier" data-id="${supplier.id}" data-field="phone" /></td>
<td>${supplierIngredientCount(supplier.id)}</td>
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
  "edit-inventory": state.ingredients,
  "edit-ingredient-master": state.ingredients,
  "edit-raw-material": state.ingredients,
  "edit-raw-group": state.rawMaterialGroups,
  "edit-supplier": state.suppliers,
  "edit-customer": state.customers,
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
function updateInventoryOrderLine(target) {
  const line = state.inventoryOrderDraft[Number(target.dataset.index)];
  if (!line) return false;
  if (target.dataset.field === "ingredientId") {
  line.ingredientId = target.value;
  const ingredient = byId(state.ingredients, line.ingredientId);
  if (ingredient && !Number(line.qty || 0)) {
  line.qty = inventoryOrderQty(ingredient);
  line.receivedQty = line.qty;
  }
} else if (target.dataset.field === "qty") {
  line.qty = Math.max(0, numericInputValue(target.value));
  if (!Number(line.receivedQty || 0)) line.receivedQty = line.qty;
  } else if (target.dataset.field === "receivedQty") {
  line.receivedQty = Math.max(0, numericInputValue(target.value));
  } else if (target.dataset.field === "receivedDate") {
  const parsedDate = parseDate(target.value);
  if (!parsedDate) {
  target.value = formatDate(line.receivedDate || state.selectedDate);
  showToast("Bruk datoformat dd.mm.yyyy");
  return false;
  }
line.receivedDate = parsedDate;
  } else if (target.dataset.field === "note") {
  line.note = target.value;
  }
return true;
}
function saveIngredientForm(form, settings = {}) {
  if (!form) return false;
  const options = { renderAfter: true, notify: true, reportValidity: true, ...settings };
  if (options.reportValidity ? !form.reportValidity() : !form.checkValidity()) return false;
  const data = new FormData(form);
  const ingredient = byId(state.ingredients, data.get("id"));
  if (!ingredient) return false;
  const recipe = rowIndexes(INGREDIENT_RECIPE_ROW_COUNT)
.map((index) => parseIngredientSource(data.get(`ingredientSource${index}`), numericInputValue(data.get(`ingredientQty${index}`))))
.filter(Boolean);
  const supplierType = data.get("supplierType") === "internal" ? "internal" : "external";
  const hasCycle = recipe.some((line) => ingredientDependsOn(line.ingredientId, ingredient.id));
  if (hasCycle) {
  showToast("Ingrediensen kan ikke inneholde seg selv via et annet ledd");
  return false;
  }
ingredient.name = data.get("name");
  ingredient.unit = data.get("unit");
  ingredient.supplierType = supplierType;
  ingredient.kind = supplierType === "internal" ? "produced" : "purchased";
  ingredient.groupId = data.get("groupId");
  ingredient.supplierId = data.get("supplierId");
  ingredient.departmentId = data.get("departmentId");
  ingredient.cost = numericInputValue(data.get("cost"));
  ingredient.stockQty = numericInputValue(data.get("stockQty"));
  ingredient.minStockQty = numericInputValue(data.get("minStockQty"));
  ingredient.leadTimeDays = numericInputValue(data.get("leadTimeDays"));
  ingredient.note = data.get("note");
  ingredient.recipe = supplierType === "internal" ? recipe : [];
  state.selectedIngredientId = ingredient.id;
  state.activeIngredientCardId = ingredient.id;
  state.currentView = "ingredientDetail";
  saveState();
  if (options.renderAfter) {
  render();
  } else {
  refreshIngredientDetailSummary(ingredient);
  }
if (options.notify) showToast("Ingrediens lagret");
  return true;
}
function xmlEscape(value) {
  return String(value ?? "")
.replaceAll("&", "&amp;")
.replaceAll("<", "&lt;")
.replaceAll(">", "&gt;")
.replaceAll('"', "&quot;");
}
function spreadsheetCell(value, type = "String") {
  const data = type === "Number" ? Number(value || 0) : xmlEscape(value);
  return `<Cell><Data ss:Type="${type}">${data}</Data></Cell>`;
}
function safeSheetName(value, usedNames) {
  const base = String(value || "Leverandør")
.replace(/[\\/?*[\]:]/g, " ")
.replace(/\s+/g, " ")
.trim()
.slice(0, 31) || "Leverandør";
  let name = base;
  let index = 2;
  while (usedNames.has(name)) {
  const suffix = ` ${index}`;
  name = `${base.slice(0, 31 - suffix.length)}${suffix}`;
  index += 1;
  }
usedNames.add(name);
  return name;
}
function generateInventoryOrderExcel() {
  const details = inventoryOrderDetails();
  if (!details.length) {
  showToast("Bestillingslisten er tom");
  return;
  }
const groups = new Map();
  details.forEach((item) => {
  if (!groups.has(item.supplierKey)) groups.set(item.supplierKey, { name: item.supplierLabel, lines: [] });
  groups.get(item.supplierKey).lines.push(item);
  });
  const usedSheetNames = new Set();
  const worksheets = [...groups.values()].map((group) => {
  const rows = [
  ["Vare", "Enhet", "Mengde", "Leverandør", "Lager", "Minimum", "Bestillingstid", "Handling", "Notat", "Status"],
  ...group.lines.map(({ line, ingredient, supplierLabel }) => [
  ingredient.name,
  ingredient.unit,
  Number(line.qty || 0),
  supplierLabel,
  Number(ingredient.stockQty || 0),
  Number(ingredient.minStockQty || 0),
  Number(ingredient.leadTimeDays || 0),
  ingredient.supplierType === "internal" ? "Produser" : "Bestill",
  line.note || "",
  "Bestilt",
  ]),
  ];
  const xmlRows = rows
.map(
  (row, rowIndex) =>
  `<Row>${row
.map((value, columnIndex) =>
  rowIndex > 0 && [2, 4, 5, 6].includes(columnIndex) ? spreadsheetCell(value, "Number") : spreadsheetCell(value),
  )
.join("")}</Row>`,
  )
.join("");
  return `<Worksheet ss:Name="${xmlEscape(safeSheetName(group.name, usedSheetNames))}"><Table>${xmlRows}</Table></Worksheet>`;
  });
  const workbook = `<?xml version="1.0"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
xmlns:o="urn:schemas-microsoft-com:office:office"
xmlns:x="urn:schemas-microsoft-com:office:excel"
xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">
${worksheets.join("")}
</Workbook>`;
  details.forEach(({ ingredient }) => {
  ingredient.orderStatus = "bestilt";
  });
  saveState();
  const blob = new Blob([workbook], { type: "application/vnd.ms-excel;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `bestillingsliste-${state.selectedDate}.xls`;
  link.click();
  URL.revokeObjectURL(url);
  render();
  showToast("Bestilling generert og ingredienser satt til Bestilt");
}
function receiveInventoryOrderLine(index) {
  const line = state.inventoryOrderDraft[Number(index)];
  const ingredient = byId(state.ingredients, line?.ingredientId);
  if (!line || !ingredient) return;
  const receivedQty = Math.max(0, Number(line.receivedQty ?? line.qty ?? 0));
  if (!receivedQty) {
  showToast("Angi mottatt mengde");
  return;
  }
ingredient.stockQty = Number(ingredient.stockQty || 0) + receivedQty;
  ingredient.orderStatus = "ok";
  ingredient.lastReceivedDate = line.receivedDate || state.selectedDate;
  state.inventoryOrderDraft.splice(Number(index), 1);
  if (!state.inventoryOrderDraft.length) {
  state.inventoryReceivingOpen = false;
  state.inventoryOrderSupplierFilter = "all";
  }
saveState();
  render();
  showToast(`${ingredient.name} mottatt ${formatDate(ingredient.lastReceivedDate)} og satt til OK`);
}
function registerInventoryWaste(form) {
  if (!form) return false;
  const data = new FormData(form);
  const ingredient = resolveWasteIngredient(data.get("ingredientQuery"));
  if (!ingredient) {
  showToast("Velg en vare fra listen");
  return false;
  }
const qty = numericInputValue(data.get("qty"));
  if (qty <= 0) {
  showToast("Angi mengde svinn");
  return false;
  }
const stockQty = Number(ingredient.stockQty || 0);
  if (stockQty <= 0) {
  showToast(`${ingredient.name} har ingen beholdning på lager`);
  return false;
  }
const registeredQty = Math.min(qty, stockQty);
  ingredient.stockQty = Math.max(0, stockQty - registeredQty);
  state.inventoryWasteLog = [];
  state.inventoryWasteLog.unshift({
  id: uid("waste"),
  ingredientId: ingredient.id,
  ingredientName: ingredient.name,
  unit: ingredient.unit,
  qty: registeredQty,
  reason: data.get("reason") || "",
  createdAt: new Date().toISOString(),
  });
  state.inventoryWasteLog = state.inventoryWasteLog.slice(0, 100);
  saveState();
  render();
  showToast(
  registeredQty < qty
  ? `Kun ${number(registeredQty, 3)} ${ingredient.unit} var på lager. Svinn registrert.`
  : `${number(registeredQty, 3)} ${ingredient.unit} ${ingredient.name} registrert som svinn`
);
  return true;
}
function autosaveEditorForm(target) {
  if (!(target instanceof HTMLElement)) return false;
  const form = target.closest("#article-form, #ingredient-form");
  if (!form || !target.matches("input, select, textarea")) return false;
  if (target.disabled || target.type === "hidden" || target.type === "file") return false;
  const settings = { renderAfter: false, notify: false, reportValidity: false };
  if (form.id === "article-form") return saveArticleForm(form, settings);
  if (form.id === "ingredient-form") return saveIngredientForm(form, settings);
  return false;
}
function updatePackingFilter(target) {
  const field = target.dataset.field;
  if (!["article", "kitchenTime", "status", "delivery"].includes(field)) return false;
  state.packingFilters = { article: "all", kitchenTime: "all", status: "all", delivery: "all" };
  state.packingFilters[field] = target.value || "all";
  return true;
}
document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action], .nav-item");
  if (!target) return;
  if (target.classList.contains("nav-item")) {
  state.currentView = target.dataset.view;
  state.activeDeliveryInfoId = "";
  state.activeRawMaterialInfoId = "";
  state.activeArticleCardId = "";
  state.activeArticleImageId = "";
  state.activeRecipeArticleId = "";
  state.activeIngredientCardId = "";
  state.activeIngredientUsageId = "";
  state.activeProductionIngredientId = "";
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
  showToast("Nettleseren støtter ikke varsler her");
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
if (action === "generate-inventory-order-list") {
  const lines = inventoryOrderDraftLines();
  state.inventoryOrderDraft = lines;
  state.inventoryOrderSupplierFilter = "all";
  state.inventoryReceivingOpen = false;
  state.currentView = "inventory";
  state.activeInventoryTab = "order";
  saveState();
  render();
  showToast(lines.length ? `Bestillingsliste laget med ${lines.length} linjer` : "Ingen varer er under minimum");
  }
if (action === "open-inventory-order-list") {
  state.currentView = "inventory";
  state.activeInventoryTab = "order";
  saveState();
  render();
  }
if (action === "back-to-inventory") {
  state.currentView = "inventory";
  state.activeInventoryTab = "stock";
  saveState();
  render();
  }
if (action === "clear-inventory-order-list") {
  state.inventoryOrderDraft = [];
  state.inventoryOrderSupplierFilter = "all";
  state.inventoryReceivingOpen = false;
  saveState();
  render();
  showToast("Bestillingsliste tømt");
  }
if (action === "remove-inventory-order-line") {
  state.inventoryOrderDraft.splice(Number(target.dataset.index), 1);
  saveState();
  render();
  }
if (action === "toggle-inventory-receiving") {
  state.activeInventoryTab = "receiving";
  state.inventoryReceivingOpen = true;
  state.currentView = "inventory";
  saveState();
  render();
  }
if (action === "generate-inventory-order-excel") {
  generateInventoryOrderExcel();
  }
if (action === "receive-inventory-order-line") {
  receiveInventoryOrderLine(target.dataset.index);
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
if (action === "open-raw-usage") {
  state.activeRawMaterialInfoId = target.dataset.id;
  saveState();
  render();
  }
if (action === "close-raw-usage") {
  state.activeRawMaterialInfoId = "";
  saveState();
  render();
  }
if (action === "open-article-image") {
  state.activeArticleImageId = target.dataset.articleId;
  saveState();
  render();
  }
if (action === "close-article-image") {
  state.activeArticleImageId = "";
  saveState();
  render();
  }
if (action === "open-ingredient-usage") {
  state.activeIngredientUsageId = target.dataset.id;
  saveState();
  render();
  }
if (action === "close-ingredient-usage") {
  state.activeIngredientUsageId = "";
  saveState();
  render();
  }
if (action === "open-production-ingredient") {
  state.activeProductionIngredientId = target.dataset.id || "";
  saveState();
  render();
  }
if (action === "close-production-ingredient") {
  state.activeProductionIngredientId = "";
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
if (action === "open-article-card") {
  state.selectedArticleId = target.dataset.articleId;
  state.activeArticleCardId = target.dataset.articleId;
  state.activeArticleTab = target.dataset.articleTab || "details";
  state.activeArticleImageId = "";
  state.currentView = "articleDetail";
  articleImageDraft = byId(state.articles, target.dataset.articleId)?.image || "";
  saveState();
  render();
  }
if (action === "close-article-card") {
  state.activeArticleCardId = "";
  state.activeArticleImageId = "";
  state.currentView = "articles";
  articleImageDraft = "";
  saveState();
  render();
  }
if (action === "back-to-articles") {
  state.activeArticleCardId = "";
  state.activeArticleImageId = "";
  state.currentView = "articles";
  articleImageDraft = "";
  saveState();
  render();
  }
if (action === "open-recipe") {
  state.selectedArticleId = target.dataset.articleId;
  state.activeArticleCardId = target.dataset.articleId;
  state.activeArticleTab = "recipe";
  state.activeArticleImageId = "";
  state.activeRecipeArticleId = "";
  state.currentView = "articleDetail";
  articleImageDraft = byId(state.articles, target.dataset.articleId)?.image || "";
  saveState();
  render();
  }
if (action === "select-article-tab") {
  state.activeArticleTab = target.dataset.tab || "details";
  saveState();
  render();
  }
if (action === "select-production-tab") {
  state.activeProductionTab = target.dataset.tab === "packing" ? "packing" : "ingredients";
  state.activeProductionIngredientId = "";
  saveState();
  render();
  }
if (action === "select-inventory-tab") {
  state.activeInventoryTab = ["stock", "order", "receiving", "waste"].includes(target.dataset.tab) ? target.dataset.tab : "stock";
  state.inventoryReceivingOpen = state.activeInventoryTab === "receiving";
  state.currentView = "inventory";
  saveState();
  render();
  }
if (action === "save-article") {
  saveArticleForm(target.closest("#article-form"));
  }
if (action === "select-ingredient") {
  state.selectedIngredientId = target.dataset.ingredientId;
  saveState();
  render();
  }
if (action === "open-ingredient-card") {
  state.selectedIngredientId = target.dataset.ingredientId;
  state.activeIngredientCardId = target.dataset.ingredientId;
  state.currentView = "ingredientDetail";
  saveState();
  render();
  }
if (action === "close-ingredient-card") {
  state.activeIngredientCardId = "";
  state.currentView = "ingredients";
  saveState();
  render();
  }
if (action === "back-to-ingredients") {
  state.activeIngredientCardId = "";
  state.currentView = "ingredients";
  saveState();
  render();
  }
if (action === "save-ingredient") {
  saveIngredientForm(target.closest("#ingredient-form"));
  }
if (action === "close-recipe-window") {
  state.activeRecipeArticleId = "";
  saveState();
  render();
  }
if (action === "browse-detail") {
  const direction = target.dataset.direction;
  if (target.dataset.kind === "article") {
  const nextId = adjacentItemId(state.articles, state.activeArticleCardId || state.selectedArticleId, direction);
  state.selectedArticleId = nextId;
  state.activeArticleCardId = nextId;
  state.activeArticleImageId = "";
  state.currentView = "articleDetail";
  articleImageDraft = byId(state.articles, nextId)?.image || "";
  }
if (target.dataset.kind === "recipe") {
  const nextId = adjacentItemId(state.articles, state.activeRecipeArticleId || state.activeArticleCardId || state.selectedArticleId, direction);
  state.selectedArticleId = nextId;
  state.activeArticleCardId = nextId;
  state.activeArticleTab = "recipe";
  state.activeArticleImageId = "";
  state.activeRecipeArticleId = "";
  articleImageDraft = byId(state.articles, nextId)?.image || "";
  }
if (target.dataset.kind === "ingredient") {
  const ingredients = sortedIngredients();
  const nextId = adjacentItemId(ingredients, state.activeIngredientCardId || state.selectedIngredientId, direction);
  state.selectedIngredientId = nextId;
  state.activeIngredientCardId = nextId;
  state.currentView = "ingredientDetail";
  }
saveState();
  render();
  }
if (action === "new-ingredient") {
  const ingredient = {
  id: uid("ing"),
  name: "Ny ingrediens",
  unit: "kg",
  kind: "purchased",
  supplierType: "external",
  supplierId: state.suppliers[0]?.id || "",
  groupId: state.rawMaterialGroups[0]?.id || "",
  departmentId: "",
  cost: 0,
  stockQty: 0,
  minStockQty: 0,
  leadTimeDays: 1,
  orderStatus: "ok",
  recipe: [],
  note: "",
  };
  state.ingredients.push(ingredient);
  state.selectedIngredientId = ingredient.id;
  state.activeIngredientCardId = ingredient.id;
  state.currentView = "ingredientDetail";
  saveState();
  render();
  showToast("Ny ingrediens opprettet");
  }
if (action === "delete-raw-material") {
  deleteRawMaterial(target.dataset.id);
  }
if (action === "delete-ingredient") {
  deleteIngredient(target.dataset.id);
  }
if (action === "delete-customer") {
  deleteCustomer(target.dataset.id);
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
  state.activeArticleCardId = article.id;
  state.activeArticleTab = "details";
  state.activeArticleImageId = "";
  state.currentView = "articleDetail";
  articleImageDraft = "";
  saveState();
  render();
  showToast("Ny artikkel opprettet");
  }
if (action === "add-delivery") {
  const order = byId(state.orders, target.dataset.orderId);
  if (!order) return;
  const source = order.deliveries[0] || {};
  const firstArticle = orderableArticles()[0];
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
  driverId: "",
  notes: "Ny levering på samme ordre.",
  items: firstArticle ? [{ id: uid("item"), articleId: firstArticle.id, qty: 1 }] : [],
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
  delivery.items.push({ id: uid("item"), articleId: orderableArticles()[0]?.id || "", qty: 1 });
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
  document.addEventListener("input", (event) => {
  const target = event.target;
  if (target.dataset.action === "filter-customer-select") {
  filterCustomerSelect(target);
  }
if (target.dataset.action === "edit-inventory-order-line") {
  if (updateInventoryOrderLine(target)) saveState();
  }
if (target.dataset.action === "edit-packing-filter") {
  if (updatePackingFilter(target)) saveState();
  }
if (target instanceof HTMLElement && target.matches("#article-form input, #article-form textarea, #ingredient-form input, #ingredient-form textarea")) {
  autosaveEditorForm(target);
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
if (action === "edit-driver-delivery") {
  const { delivery } = findDelivery(target.dataset.deliveryId);
  if (!delivery) return;
  delivery.driverId = target.value;
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
if (action === "edit-inventory-order-line") {
  if (updateInventoryOrderLine(target)) {
  saveState();
  render();
  }
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
if (action === "edit-packing-filter") {
  if (updatePackingFilter(target)) {
  saveState();
  render();
  }
}
if (action === "select-inventory-supplier") {
  state.inventorySupplierFilter = target.value || "all";
  saveState();
  render();
  }
if (action === "select-inventory-status") {
  state.inventoryStatusFilter = target.value || "all";
  saveState();
  render();
  }
if (action === "select-inventory-department") {
  state.inventoryDepartmentFilter = target.value || "all";
  state.inventoryKitchenTimeFilter = "all";
  saveState();
  render();
  }
if (action === "select-inventory-kitchen-time") {
  state.inventoryKitchenTimeFilter = target.value || "all";
  saveState();
  render();
  }
if (action === "select-inventory-order-supplier") {
  state.inventoryOrderSupplierFilter = target.value || "all";
  saveState();
  render();
  }
if (action === "select-inventory-order-status") {
  state.inventoryOrderStatusFilter = target.value || "all";
  saveState();
  render();
  }
if (action === "edit-price") {
  const priceList = byId(state.priceLists, target.dataset.priceListId);
  if (!priceList) return;
  priceList.prices[target.dataset.articleId] = Number(target.value || 0);
  saveState();
  render();
  }
if (action === "toggle-produced") {
  state.productionStatus[state.selectedDate] = {};
  state.productionStatus[state.selectedDate][target.dataset.articleId] = target.checked;
  applyProductionInventoryAdjustment(state.selectedDate, target.dataset.articleId, target.checked);
  notifyWebshopStatusChanges();
  saveState();
  render();
  showToast(target.checked ? "Produksjon ferdig og lager trukket" : "Ferdigmerking fjernet og lager lagt tilbake");
  }
if (action === "toggle-ingredient-produced") {
  const ingredientId = target.dataset.ingredientId;
  const qty = Number(target.dataset.qty || 0);
  state.productionStatus[state.selectedDate] = {};
  state.productionStatus[state.selectedDate][ingredientProductionKey(ingredientId)] = target.checked;
  applyIngredientProductionInventoryAdjustment(state.selectedDate, ingredientId, qty, target.checked);
  saveState();
  render();
  showToast(target.checked ? "Ingrediens produsert til lager" : "Ingrediensproduksjon fjernet fra lager");
  }
if (action === "toggle-packing-item") {
  const { delivery } = findDelivery(target.dataset.deliveryId);
  if (!delivery) return;
  const itemKeys = (target.dataset.itemKeys || target.dataset.itemKey || "").split("|").filter(Boolean);
  state.packingStatus[delivery.id] = {};
  if (target.checked) {
  itemKeys.forEach((key) => {
  state.packingStatus[delivery.id][key] = true;
  });
  } else {
  itemKeys.forEach((key) => {
  delete state.packingStatus[delivery.id][key];
  });
  }
syncDeliveryPackingStatus(delivery);
  notifyWebshopStatusChanges();
  saveState();
  render();
  showToast(packingDeliveryReady(delivery) ? "Levering klar til henting" : "Pakkestatus oppdatert");
  }
if (
    [
  "edit-inventory",
  "edit-ingredient-master",
  "edit-raw-material",
  "edit-raw-group",
  "edit-supplier",
  "edit-customer",
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
  if (!preview) return;
  const articleId = document.querySelector("#article-form input[name='id']")?.value || "";
  const article = byId(state.articles, articleId);
  const label = escapeHtml(article?.name || "Valgt artikkelbilde");
  if (preview.tagName === "BUTTON") {
  preview.innerHTML = `<img src="${articleImageDraft}" alt="${label}" />`;
  } else {
  preview.outerHTML = `<button class="image-preview article-thumbnail" id="image-preview" type="button" title="Åpne bilde" data-action="open-article-image" data-article-id="${articleId}"><img src="${articleImageDraft}" alt="${label}" /></button>`;
  }
};
  reader.readAsDataURL(target.files[0]);
  }
});
  document.addEventListener("focusout", (event) => {
  autosaveEditorForm(event.target);
});
  document.addEventListener("change", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  if (target.matches("#article-form input, #article-form select, #article-form textarea, #ingredient-form input, #ingredient-form select, #ingredient-form textarea")) {
  autosaveEditorForm(target);
  }
});
  document.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  if (form.id === "waste-form") {
  registerInventoryWaste(form);
  }
if (form.id === "customer-form") {
  const customer = {
  id: uid("cust"),
  name: data.get("name"),
  phone: data.get("phone") || "",
  email: data.get("email") || "",
  invoiceAddress: data.get("invoiceAddress") || "",
  priceListId: data.get("priceListId") || state.priceLists[0]?.id || "pl-standard",
  };
  state.customers.push(customer);
  state.selectedCustomerId = customer.id;
  saveState();
  render();
  showToast(`${customer.name} er opprettet`);
  }
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
  driverId: "",
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
  if (!customer) {
  showToast(state.customers.length ? "Velg en kunde fra listen" : "Opprett kunde i Kunder først");
  return;
  }
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
  state.selectedCustomerId = customer.id;
  state.selectedOrderId = newOrder.id;
  state.selectedDeliveryId = "";
  state.currentView = "orderDetail";
  saveState();
  render();
  showToast(`Ordre #${newOrder.orderNo} opprettet`);
  }
if (form.id === "order-info-form") {
  const order = byId(state.orders, data.get("orderId"));
  if (!order) return;
  const customer = byId(state.customers, data.get("customerId"));
  if (!customer) {
  showToast("Velg en kunde fra listen");
  return;
  }
order.customerId = customer.id;
  state.selectedCustomerId = customer.id;
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
  saveArticleForm(form);
  }
if (form.id === "recipe-form") {
  const article = byId(state.articles, data.get("id"));
  if (!article) return;
  applyArticleRecipeFromData(article, data, "all");
  saveState();
  render();
  showToast("Oppskrift lagret");
  }
if (form.id === "ingredient-form") {
  saveIngredientForm(form);
  }
if (form.id === "raw-group-form") {
  state.rawMaterialGroups.push({ id: uid("rawgrp"), name: data.get("name") });
  saveState();
  render();
  showToast("Ingrediensgruppe lagt til");
  }
if (form.id === "raw-material-form") {
  const raw = {
  id: uid("raw"),
  name: data.get("name"),
  unit: data.get("unit"),
  cost: Number(data.get("cost") || 0),
  supplierId: data.get("supplierId"),
  groupId: data.get("groupId"),
  stockQty: Number(data.get("stockQty") || 0),
  minStockQty: Number(data.get("minStockQty") || 0),
  leadTimeDays: Number(data.get("leadTimeDays") || 0),
  };
  state.rawMaterials.push(raw);
  state.ingredients.push(rawIngredient(raw));
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
