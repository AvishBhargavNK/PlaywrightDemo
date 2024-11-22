import { test as base} from 'playwright-bdd';
import * as Pages from './pages';
const {EcomLoginPage,EcomChangePage,RuvyAdminLoginPage} = Pages;

const createTestFunction = (PageClass) => async ({page}, use) => {
     await use(new PageClass(page));
}

export const test = base.extend({
    ecomLoginPage: createTestFunction(EcomLoginPage),
    ecomChangePage: createTestFunction(EcomChangePage),
    ruvyAdminLoginPage: createTestFunction(RuvyAdminLoginPage)
  });
  