import { join } from 'path';

import { SeedConfig } from './seed.config';
import { InjectableDependency , SassOptions} from './seed.config.interfaces';

/**
 * This class extends the basic seed configuration, allowing for project
 * specific overrides. A few examples can be found below.
 */
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  SASS_OPTIONS: SassOptions = {
  };


  constructor() {
    super();
    // this.APP_TITLE = 'Put name of your app here';
    let additional_deps: InjectableDependency[] = [
      // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      // {src: 'lodash/lodash.min.js', inject: 'libs'},
    ];

    const seedDependencies = this.NPM_DEPENDENCIES;

    this.CSS_PROD_BUNDLE = 'main.css';

    this.APP_ASSETS = [
      { src: `${this.ASSETS_SRC}/main.scss`, inject: true }, // renamed SASS file
    ];

    this.NPM_DEPENDENCIES = seedDependencies.concat(additional_deps);
  }
}
