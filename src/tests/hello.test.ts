import HelloService from './../services/hello.service';

test('Test helloService',async () => {
  const helloInstance = new HelloService();
  expect(await helloInstance.talk('jest')).toBeInstanceOf(Array);
});
