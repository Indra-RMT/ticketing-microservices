import { Publisher, Subjects, TicketUpdatedEvent } from '@irtickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
