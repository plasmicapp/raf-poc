/** @format */

import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import Collapse from "./components/Collapse";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "5wgXbGneuLQ63K2FYeeCfU",
      token:
        "iEJo8dbpGHzsXC1zMbg4gy0b5I0GEcd5coqLpHXz2HZaXc9F2RwaGP7IY5JCBk6ucBOamMoPlfWm4Pw4Ykw",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: true,
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

PLASMIC.registerComponent(Collapse, {
  name: "Collapse",
  description: "A collapsible component",
  props: {
    children: {
      type: "slot",
      defaultValue: "Collapse component body",
    },
    header: {
      type: "slot",
      defaultValue: "Collapse component header",
    },
    previewOpen: "boolean",
  },
});
