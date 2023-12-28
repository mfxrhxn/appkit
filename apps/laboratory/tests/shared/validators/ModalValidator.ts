import { expect } from '@playwright/test'
import type { Page } from '@playwright/test'
import { SigningFailedToastTitle, SigningSucceededToastTitle } from '../../../src/constants'

export class ModalValidator {
  constructor(public readonly page: Page) {}

  async expectConnected() {
    await expect(this.page.getByTestId('account-button')).toBeVisible()
  }

  async expectDisconnected() {
    await expect(this.page.getByTestId('account-button')).not.toBeVisible()
  }

  async expectAcceptedSign() {
    // We use Chakra Toast and it's not quite straightforward to set the `data-testid` attribute on the toast element.
    await expect(this.page.getByText(SigningSucceededToastTitle)).toBeVisible()
  }

  async expectRejectedSign() {
    // We use Chakra Toast and it's not quite straightforward to set the `data-testid` attribute on the toast element.
    await expect(this.page.getByText(SigningFailedToastTitle)).toBeVisible()
  }
}