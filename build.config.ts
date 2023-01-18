import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/lib',
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
})
