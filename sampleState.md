```js
{
  entities: {
    users: {
      1: {
        id: 1,
        email: 'jennifer@aa.io',
        firstName: 'Jennifer',
        lastName: 'Kennedy',
        homeLocLnOne: '1809 Fourth St',
        homeLocLnTwo: '',
        homeLocCity: 'Berkeley',
        homeLocState: 'CA',
        homeLocZip: '94710',
        homeLocLat: 37.869814,
        homeLocLong: -122.300334
      }
    },
    events: {
      1: {
        id: 1,
        title: 'aA Happy Hour',
        description: 'Come join your cohort mates for a brewski',
        date: 'Aug 3 2018',
        time: ,
        organizerId: 1,
        organizerName: 'Justin',
        organizerDescription: 'Office manager at aA.'
        locLnOne: '825 Battery St',
        locLnTwo: '',
        locCity: 'San Francisco',
        locState: 'CA',
        locZip: '94111',
        locLat: 37.799120,
        locLong: -122.401341
      }
    },
    tickets: {
      1: {
        id: 1,
        eventId: 1,
        userId: 1,
        price: 0.00,
        qty: 1,
        saleEndDate: 'Aug 2 2018'
      }
    },
    categories: {
      1: {
        id: 1,
        title: 'Networking',
        description: 'Hobbiests unit, business meetups, and discussions'
      }
    },
    eventsByCategories : {
      1: {
        id: 1,
        eventId: 1,
        categoryId: 1
      }
    },
    bookmarks: {
      1: {
        id: 1,
        userId: 1,
        eventId: 1
      }
    }
  },
  session: { currentUser: 1 },
  ui: {
    loading: true/false
  },
  errors: {
    usersErrors: {},
    eventsErrors: {},
    ticketsErrors: {},
    categoriesErrors: {}
  }
}
```
