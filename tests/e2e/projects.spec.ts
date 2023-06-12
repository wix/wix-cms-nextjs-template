import { test, expect } from '@playwright/test';
import testIds from '@app/utils/test-ids';

test.describe('Projects Page', () => {
  const PATH = '/projects';

  test('look and feel - projects', async ({ page }) => {
    await page.goto(PATH);

    await expect(
      await page.getByTestId(testIds.PROJECTS_PAGE.PROJECT_LIST)
    ).toHaveScreenshot('project-list.png', {
      mask: [page.getByTestId(testIds.LAYOUT.HEADER)],
    });
  });

  test('look and feel - "Projects" navigates to "Project Details"', async ({
    page,
  }) => {
    await page.goto(PATH);

    await page
      .getByTestId(testIds.PROJECTS_PAGE.PROJECT_ITEM_CTA)
      .first()
      .click();

    await expect(
      await page.getByTestId(testIds.PROJECT_DETAILS_PAGE.CONTAINER)
    ).toBeVisible();
    await expect(
      await page.getByTestId(testIds.PROJECT_DETAILS_PAGE.CONTAINER)
    ).toHaveScreenshot('project-details.png', {
      mask: [page.getByTestId(testIds.LAYOUT.HEADER)],
    });
  });
});
