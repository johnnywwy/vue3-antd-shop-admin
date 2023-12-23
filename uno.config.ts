// uno.config.ts
import { defineConfig } from 'unocss'
import transformerVariantGroup from '@unocss/transformer-variant-group'

import presetAttributify from '@unocss/preset-attributify'

export default defineConfig({
  // ...UnoCSS options
  theme: {
    // 备注
    breakpoints: {
      xxs: '0px',
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1600px',
    },
    transformers: [
      // Variant group transformer
      transformerVariantGroup(),
    ],
    presets: [
      presetAttributify({ /* preset options */ }),
      // ...
    ],
  },

})
