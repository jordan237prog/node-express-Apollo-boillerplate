const Events = [
  { name: 'Concert', date: '29 december 2021', location: 'Bonaberi' },
  { name: 'projections', date: '31 december 2021', location: 'Akwa' },
];

const resolvers = {
  Query: {
    allEvents: () => {
      return Events;
    },
  },

  Mutation: {
    createEvent: (parent, args) => {
      const Event = {
        name: args.name,
        date: args.date,
        location: args.location,
      };
      Events.push(Event);
      return Event;
    },

    deleteEvent: (parent, args) => {
      for (var i = 0; i < Events.length; i++) {
        if (Events[i].name == args.name) {
          Events.splice( i , 1);
          return Events;
        }
      }
      return `Event with name ${args.name} not found`;
    },
  },
};
export default resolvers;
