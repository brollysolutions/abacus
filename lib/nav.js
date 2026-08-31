/* ------------------------------------------------------------------
   Shared navigation pieces used by every page's <Header /> and
   <Footer />, so the class routes only ever need changing in one place.
------------------------------------------------------------------- */

export const ROUTES = {
  home: "/",
  online: "/abacus-online-classes",
  hyderabad: "/abacus-classes-in-hyderabad",
};

/** The "Classes" dropdown for the header. */
export const CLASSES_MENU = {
  label: "Classes",
  items: [
    {
      href: ROUTES.online,
      label: "Online classes",
      hint: "Live, teacher-led, from home",
    },
    {
      href: ROUTES.hyderabad,
      label: "Classes in Hyderabad",
      hint: "City programme and centres",
    },
  ],
};

/** Class links for footer columns. */
export const CLASS_LINKS = [
  { href: ROUTES.online, label: "Abacus online classes" },
  { href: ROUTES.hyderabad, label: "Abacus classes in Hyderabad" },
];
