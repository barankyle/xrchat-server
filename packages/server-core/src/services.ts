import { Application } from '../declarations';
import EntityServices from './entities/services';
import MediaServices from './media/services';
import NetworkingServices from './networking/services';
import PaymentServices from './payments/services';
import SocialServices from './social/services';
import SocialMediaServices from './socialmedia/services';
import UserServices from './user/services';
import WorldServices from './world/services';
import GraphQLServices from './graphql/services';

export default (app: Application): void => {
  [
    ...MediaServices,
    ...WorldServices,
    ...EntityServices,
    ...NetworkingServices,
    ...UserServices,
    // ...PaymentServices,
    ...SocialServices,
    ...SocialMediaServices,
    ...GraphQLServices
  ].forEach(service => {
    app.configure(service);
  });
};