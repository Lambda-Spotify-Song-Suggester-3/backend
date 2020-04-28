
exports.up = function(knex) {
  return knex.schema.createTable("SpotifyTable",table=>{
      table.increments("id");
      table.string("artist_name").notNullable();
      table.string("track_id").notNullable();
      table.string("track_name").notNullable();
      table.decimal("acousticness").notNullable();
      table.decimal("danceability").notNullable();
      table.integer("duration").notNullable();
      table.decimal("energy").notNullable();
      table.decimal("instrumentalness").notNullable();
      table.integer("key").notNullable();
      table.decimal("liveness").notNullable();
      table.decimal("loudness").notNullable();
      table.integer("mode").notNullable();
      table.decimal("speechiness").notNullable();
      table.decimal("tempo").notNullable();
      table.integer("time_signature").notNullable();
      table.decimal("valence").notNullable();
      table.integer("popularity").notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("SpotifyTable");
};