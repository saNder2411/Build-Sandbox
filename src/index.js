class App {

  run = async (name = `World`) => {
    console.log(`Hello ${name}`);
  };
}

const app = new App();
app.run()
  .then(() => console.log(`Done`))
  .catch(() => console.log(`Error`));