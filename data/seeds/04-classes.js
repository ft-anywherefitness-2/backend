exports.seed = function(knex) {
  return knex('classes').insert([
    { class_name: 'Pilates Night',
      class_type: 'Pilates',
      start_time: '12pm',
      duration: '1 Hour',
      intensity_level: 'Beginner',
      class_location: 'Central Park',
      max_class_size: 20
    },
    { 
      class_name: 'Sprint Saturdays',
      class_type: 'Cardio',
      start_time: '2pm',
      duration: '1 Hour',
      intensity_level: 'Advanced',
      class_location: 'Outdoors',
      max_class_size: 20
    },
    { 
      class_name: 'Fit Lifts',
      class_type: 'Weight lifting',
      start_time: '3pm',
      duration: '30 Min',
      intensity_level: 'Advanced',
      class_location: 'Outdoor gym',
      max_class_size: 20
    }
  ]);
};
