import apollo from 'apollo-server-express';
const { gql } = apollo;

const EventSchema = gql`
  type Query {
    allEvents: [Events]
  }

  type Mutation {
    createEvent(name: String!, date: String!, location: String!): Events
    deleteEvent(name: String!): [Events]
  }

  type Events {
    name: String!
    date: String
    location: String!
  }
`;
export default EventSchema;
