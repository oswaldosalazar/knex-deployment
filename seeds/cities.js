
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cities').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('cities').insert({
            id: 1,
            name: 'Denver',
            population: 650000
        }),
        knex('cities').insert({
            id: 2,
            name: 'Boulder',
            population: 350000
        }),
        knex('cities').insert({
            id: 3,
            name: 'Pueblo',
            population: 450000
        }),
      ]);
    });
};
