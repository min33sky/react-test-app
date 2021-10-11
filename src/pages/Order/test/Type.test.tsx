import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { server } from '../../../mocks/server';
import Type from '../Type';

test('displays product images from server', async () => {
  render(<Type orderType="products" />);

  const productImages = (await screen.findAllByRole('img', {
    name: /product$/i,
  })) as HTMLImageElement[];

  expect(productImages).toHaveLength(2);

  const altText = productImages.map((element) => element.alt);
  expect(altText).toEqual(['America product', 'England product']);
});

test('when fetching product data, face an error', async () => {
  server.resetHandlers(
    rest.get(`http://localhost:5000/products`, (req, res, ctx) => res(ctx.status(500)))
  );

  render(<Type orderType="products" />);

  const errorBanner = await screen.findByTestId('error-banner');
  expect(errorBanner).toHaveTextContent('에러가 발생했습니다.');
});
