import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import App from './App';

expect.extend(matchers);

describe('App', () => {
   test('App render và chuyển trang', async () => {
      localStorage.setItem('token', 'This is token');
      render(<App />);

      // chờ đợi cho đến khi submit button được render ra
      await waitFor(
         () => {
            expect(document.querySelector('.submitButton')?.textContent).toBe('submit');
         },
         {
            timeout: 3000
         }
      );

      // xem toàn bộ html khi được build ra và đặt số dòng là 99999999
      screen.debug(document.body.parentElement as HTMLElement, 9999999999);
   });
});
