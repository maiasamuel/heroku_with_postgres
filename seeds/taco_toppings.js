
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('taco_toppings').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('taco_toppings').insert({
          name: 'hot sauce',
        }),
        knex('taco_toppings').insert({
          name: 'jalapeños',
        }),
        knex('taco_toppings').insert({
          name: 'guacamole',
        })
      ]);
    });
};
