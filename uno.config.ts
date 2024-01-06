// uno.config.ts
import { defineConfig } from 'unocss'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import { presetUno, presetAttributify, presetIcons } from 'unocss'

// import presetAttributify from '@unocss/preset-attributify'

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
  },

  shortcuts: {
    'switch-animation': 'transition duration-300',
    'bg-base': 'bg-[#f0f0f0] dark:bg-[#20202a] switch-animation',
    'card-base': 'bg-[#ffffff] dark:bg-[#10101a] switch-animation',
    'text-base': 'text-[#20202a] dark:text-[#f0f0f0] switch-animation',
    'switch-label-base': 'bg-gray-200 dark:bg-gray-800 switch-animation',
    'switch-span-base': 'bg-white dark:bg-gray-300 switch-animation',
  },

  transformers: [
    // Variant group transformer
    transformerVariantGroup(),
  ],

  presets: [
    // Attributify preset
    presetUno(),
    presetIcons(),
    presetAttributify({ /* preset options */ }),
    // ...
  ],

})
