const seedDB = async () => {
    await Campground.deleteMany({});

    for (let i = 0; i < 50; i++) {

        const random1000 = Math.floor(Math.random() * 1000);

        const price = Math.floor(Math.random() * 20) + 10;

        const camp = new Campground({
            author: '6a149d2d4fcb461264467ae3node',

            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            geometry: {
                type: "Point",
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude,
                ]
            },

            title: `${sample(descriptors)} ${sample(places)}`,

            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',

            price,

            images: [
                {
                    url: 'https://res.cloudinary.com/dce0zhpwz/image/upload/v1779702659/project%201/fb5epzfsaoccrlloer68.png',

                    filename: 'project 1/fb5epzfsaoccrlloer68'
                }
            ]
        });

        await camp.save();
    }
}