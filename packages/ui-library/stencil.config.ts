import { Config } from '@stencil/core';

import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'ui-library',
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: 'ui-library',
      directivesProxyFile: '../ui-library-angular/src/directives/proxies.ts',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
