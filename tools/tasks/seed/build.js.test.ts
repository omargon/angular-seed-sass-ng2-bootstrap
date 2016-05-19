import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { join} from 'path';

import { APP_DEST, APP_SRC, BOOTSTRAP_MODULE, TMP_DIR, TOOLS_DIR } from '../../config';
import { makeTsProject } from '../../utils';

const plugins = <any>gulpLoadPlugins();

const INLINE_OPTIONS = {
  base: TMP_DIR,
  useRelativePaths: false,
  removeLineBreaks: true
};

export = () => {
  let tsProject = makeTsProject();
  let src = [
    'typings/browser.d.ts',
    TOOLS_DIR + '/manual_typings/**/*.d.ts',
    join(APP_SRC, '**/*.ts'),
    '!' + join(APP_SRC, '**/*.e2e-spec.ts'),
    '!' + join(APP_SRC, `${BOOTSTRAP_MODULE}.ts`)
  ];
  let result = gulp.src(src)
    .pipe(plugins.plumber())
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.inlineNg2Template(INLINE_OPTIONS))
    .pipe(plugins.typescript(tsProject));

  return result.js
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest(APP_DEST));
};
