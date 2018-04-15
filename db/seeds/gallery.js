exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users')
        .insert([
          { user_id: 1, email: 'email1@gmail.com', password: 'password1' },
          { user_id: 2, email: 'theman@gmail.com', password: 'password2' },
          { user_id: 3, email: 'bigdog@hotmail.com', password: 'password3' },
          { user_id: 4, email: 'devleague@outlook.com', password: 'password4' },
          { user_id: 5, email: 'amzingrace@gmail.com', password: 'password5' },
          { user_id: 6, email: 'sudokrew@manoa.com', password: 'password6' },
          { user_id: 7, email: 'stevenin@hawaii.edu', password: 'password7' },
          { user_id: 8, email: 'postgres@wsu.edu', password: 'password8' },
          { user_id: 9, email: 'gameofthrones@cnn.com', password: 'password9' }
        ])
        .then(function() {
          return knex('pictures')
            .del()
            .then(function() {
              return knex('pictures').insert([
                {
                  author: 1,
                  url:
                    'https://www.tescobank.com/assets/website/img/pet-insurance/dogs/pug-info-446x320px.jpg',
                  description: ''
                },
                {
                  author: 3,
                  url:
                    'https://www.tescobank.com/assets/website/img/pet-insurance/dogs/pug-exercise-446x320px.jpg',
                  description: ''
                },
                {
                  author: 5,
                  url:
                    'https://vetstreet.brightspotcdn.com/dims4/default/354d0cf/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Fdc%2Fc4%2F8ccd3a28438d81b2f2f5d8031a05%2Fpug-ap-r82p3q-645.jpg',
                  description: ''
                },
                {
                  author: 6,
                  url:
                    'https://vetstreet.brightspotcdn.com/dims4/default/adf9ca3/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F98%2F83%2F2cb4ad984477a3064e5c78fc6d11%2Fpug-ap-t36luy-645-x-380.jpg',
                  description: ''
                },
                {
                  author: 8,
                  url:
                    'https://vetstreet.brightspotcdn.com/dims4/default/a95834c/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F57%2Fbf%2F78cca6824db1908f43bcd520c99a%2Fpug-AP-10EMBK-645sm12913.jpg',
                  description: ''
                },
                {
                  author: 9,
                  url:
                    'https://vetstreet.brightspotcdn.com/dims4/default/65bbc05/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Fc1%2Ff9%2F13fe778446f1b8a4fcbe7146e4a4%2FAP-TVQEZK-ph645080113.jpg',
                  description: ''
                },
                {
                  author: 2,
                  url:
                    'https://vetstreet.brightspotcdn.com/dims4/default/10dae76/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F3a%2F54%2F5ae8bfcc41b381c27a792e0dd891%2FAP-KWDHXS-645sm8113.jpg',
                  description: ''
                },
                {
                  author: 3,
                  url:
                    'https://vetstreet.brightspotcdn.com/dims4/default/cf95061/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F36%2Fcfde50a7fa11e0a0d50050568d634f%2Ffile%2FPug-3-645mk062811.jpg',
                  description: ''
                },
                {
                  author: 4,
                  url:
                    'https://vetstreet.brightspotcdn.com/dims4/default/203cf7c/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F46%2Fd37280a7fa11e0a0d50050568d634f%2Ffile%2FPug-4-645mk062811.jpg',
                  description: ''
                },
                {
                  author: 5,
                  url:
                    'https://vetstreet.brightspotcdn.com/dims4/default/09782cb/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F1d%2Fe0aab0a8a811e0a0d50050568d634f%2Ffile%2Fpug-1-645mk070411.jpg',
                  description: ''
                },
                {
                  author: 6,
                  url:
                    'https://vetstreet.brightspotcdn.com/dims4/default/c6a2e2d/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F0e%2Fc99770a7fa11e0a0d50050568d634f%2Ffile%2FPug-1-645mk062811.jpg',
                  description: ''
                },
                {
                  author: 7,
                  url:
                    'https://vetstreet.brightspotcdn.com/dims4/default/9d51a10/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F24%2F697af0a7fa11e0a0d50050568d634f%2Ffile%2FPug-2-645mk062811.jpg',
                  description: ''
                },
                {
                  author: 9,
                  url:
                    'http://cdn1-www.dogtime.com/assets/uploads/gallery/pug-dog-breed-pictures/1-multi.jpg',
                  description: ''
                },
                {
                  author: 1,
                  url:
                    'http://cdn2-www.dogtime.com/assets/uploads/gallery/pug-dog-breed-pictures/2-face.jpg',
                  description: ''
                },
                {
                  author: 7,
                  url:
                    'http://cdn3-www.dogtime.com/assets/uploads/gallery/pug-dog-breed-pictures/3-sidesitting.jpg',
                  description: ''
                },
                {
                  author: 6,
                  url:
                    'http://cdn3-www.dogtime.com/assets/uploads/gallery/pug-dog-breed-pictures/4-whitestanding.jpg',
                  description: ''
                },
                {
                  author: 4,
                  url:
                    'http://cdn3-www.dogtime.com/assets/uploads/gallery/pug-dog-breed-pictures/5-seniorprofile.jpg',
                  description: ''
                },
                {
                  author: 3,
                  url:
                    'http://cdn2-www.dogtime.com/assets/uploads/gallery/pug-dog-breed-pictures/6-puppystick.jpg',
                  description: ''
                },
                {
                  author: 2,
                  url:
                    'http://cdn2-www.dogtime.com/assets/uploads/gallery/pug-dog-breed-pictures/7-running.jpg',
                  description: ''
                },
                {
                  author: 9,
                  url:
                    'http://cdn2-www.dogtime.com/assets/uploads/gallery/pug-dog-breed-pictures/8-runningforward.jpg',
                  description: ''
                },
                {
                  author: 7,
                  url:
                    'http://cdn2-www.dogtime.com/assets/uploads/gallery/pug-dog-breed-pictures/9-balance.jpg',
                  description: ''
                },
                {
                  author: 5,
                  url:
                    'http://cdn3-www.dogtime.com/assets/uploads/gallery/pug-dog-breed-pictures/10-sleeping.jpg',
                  description: ''
                }
              ]);
            });
        });
    });
};
