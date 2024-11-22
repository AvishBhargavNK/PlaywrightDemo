import { expect } from "@playwright/test";
import exp from "constants";
import { threadId } from "worker_threads";
const path = require('path');
class RuvyAdminLoginPage{
    constructor(page){
        this.page = page;
        this.username_field = page.getByLabel('Username');
        this.password_field = page.getByPlaceholder('Enter Password');
        this.confirm_field  = page.getByPlaceholder('Enter Confirm Password');
        this.activate_btn = page.getByRole('button', { name: 'Activate' });
        this.snack_bar_actiavte = page.getByText('User activated successfully!');
        this.snckbar_closeBtn = page.getByLabel('Close');
        this.upload_btn = page.getByRole('button', { name: 'Upload' });
        this.save_btn = page.getByRole('button', { name: 'Save' });
        this.upload_area = page.locator('//div[@class="MuiStack-root css-ygq1va-MuiStack-root"]');
       
    }
    async navigateToUrl(url){
        await this.page.goto(url);
    }
    async enterPassword(password){
        await this.password_field.fill(password);
       }

    async enterConfimPassword(confirm_password){
        await this.confirm_field.fill(confirm_password);
   }
    async accountActivate(){
        await this.activate_btn.click();
        await this.page.waitForTimeout(3000);
    }
    async snackbarDisplay(){
        await this.page.waitForSelector('text=User activated successfully!', { timeout: 5000 });
        await expect(this.snack_bar_actiavte).toBeVisible();
        await this.snckbar_closeBtn.click();
        await this.page.waitForTimeout(3000);  
      }
    async ClickUploadButton(filepath){
        // const filePath = path.resolve(filepath);  // Ensure you use an absolute path
        // await this.page.locator('div').first().dragTo(this.upload_area);
        // await this.page.waitForTimeout(3000);

       const [fileChooser] = await Promise.all([
        this.page.waitForEvent('filechooser'),
        await this.upload_btn.click(),
       ])

       await fileChooser.setFiles(filepath);

    }
    async clickSaveButton(){
        await this.save_btn.click();
        await this.page.waitForTimeout(6000);
    }

}
export {RuvyAdminLoginPage}