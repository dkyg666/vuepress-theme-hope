import HopeLogo from "docs-shared/components/HopeLogo.js";
import HopeNotFoundHint from "docs-shared/components/HopeNotFoundHint.js";
import ProjectLink from "docs-shared/components/ProjectLink.js";
import SocialLink from "docs-shared/components/SocialLink.js";
import { h } from "vue";
import { defineClientConfig } from "vuepress/client";
import { Layout, NotFound } from "vuepress-theme-hope/client";
import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ProjectLink", ProjectLink);
    app.component("SocialLink", SocialLink);
  },

  setup: () => {
    setupTransparentNavbar({ type: "homepage" });
  },

  layouts: {
    Layout: () => h(Layout, null, { heroLogo: () => h(HopeLogo) }),
    NotFound: () => h(NotFound, () => h(HopeNotFoundHint)),
  },
});
