export default async (t) => {
  await t.eval(() => {
    window.Vue = { version: '2.5.2' };
  });
};
