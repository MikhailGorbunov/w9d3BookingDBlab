use hotels;
db.dropDatabase();

db.bookings.insertMany([
    
    {
        guest_name: 'John Smith',
        email: 'johnSmith@gmail.com'
    },
    
    {
        guest_name: 'Oleg Philipov',
        email: 'olegPhilipov@gmail.com'
    },
    
    {
        guest_name: 'Michael Schuhmacher',
        email: 'mSchuhmacher@gmail.com'
    },
    
    {
        guest_name: 'Alex Pink',
        email: 'aPink@gmail.com'
    }

]);