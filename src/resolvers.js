const { Cat } = require("./models/cat");

module.exports = {
  resolvers: {
    Query: {
      hello: () => "Hello"
    },
    Mutation: {
      createCat: (_, { name }) => {
        const kitty = new Cat({ name });
        kitty.save().then(cat => {
          console.log(`Kitty ${name} created`);
          return cat;
        });
      }
    }
  }
};
