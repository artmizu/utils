import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/universal',
    'src/client',
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
})
