import { rest } from 'msw';
import { v4 as uuidv4 } from 'uuid';

const item = {
  status: 0,
  datetime: new Date(),
  title: 'Macbook Pro 16"',
  description: 'Um lindo macbook para seu lazer e trabalho',
  thankYouMessage: 'Obrigado por escolher esse produto',
  highlightImageUrl: 'https://picsum.photos/id/237/200/300',
  address: 'Rua Rio Branco',
  latitude: Math.random() * 360 - 180,
  longitude: Math.random() * 360 - 180,
  ownerId: uuidv4()
};

export const handlers = [
  rest.get('/list', (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(500), ctx.json(item));
  })
];
